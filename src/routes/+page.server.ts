import { superValidate } from 'sveltekit-superforms/server';
import { contactSchema } from '$lib/validateSchema';
import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { sitesTable } from '$lib/server/schema';
import { error } from '@sveltejs/kit';

export const load = async (event) => {
	try {
		const siteInfos = await db.select().from(sitesTable).all();
		const transformedSiteInfos = siteInfos.map(site => ({
			...site,
			skills: site.skills.split(',')
		}));
		const form = await superValidate(event, contactSchema);
		return { form, siteInfos: transformedSiteInfos };
	} catch {
		throw error(404, 'database error or form error');
	}
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
		
		try {
			const res = await fetch(prefilledLink);
			if (res.status === 200) {
				throw redirect(303, '/contact/success');
			}
			return { form };
		} catch {
			throw error(404, 'form error')
		}
	}
};
