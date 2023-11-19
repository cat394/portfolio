import { superValidate } from 'sveltekit-superforms/server';
import { contactSchema } from '$lib/validateSchema';
import { fail, redirect } from '@sveltejs/kit';

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

		const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSfT5C_NH0EaB5aLbkNoyYW7PNi_XiW-XsnMLIU5vbZrEU0jNw/formResponse?usp=pp_url&entry.1780581565=${name}&entry.2138521789=${email}&entry.280613884=${message}&submit=Submit`;
		const res = await fetch(prefilledLink);

		if (res.status === 200) {
			throw redirect(303, '/contact/success');
		}

		return { form };
	}
};
