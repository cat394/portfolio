import { superValidate } from 'sveltekit-superforms/server';
import { contactSchema } from '$lib/validateSchema';
import { fail, redirect } from '@sveltejs/kit';
import { GOOGLE_FORM_ID } from '$env/static/private';

export const load = async (event) => {
	const form = await superValidate(event, contactSchema);
	return { form };
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, contactSchema);
		const name = form.data.name;
		const email = form.data.email;
		const message = form.data.message;

		if (!form.valid) {
			return fail(400, { form });
		}
		const prefilledLink = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse?usp=pp_url&entry.1459365682=${name}&entry.914930230=${email}&entry.2102059464=${message}&submit=Sumbit`;
		const res = await fetch(prefilledLink);

		if (res.status === 200) {
			throw redirect(303, '/contact/success');
		}

		return { form };
	}
};
