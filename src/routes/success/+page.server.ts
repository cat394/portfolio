import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
	if (!cookies.get('allowed')) {
		throw redirect(301, '/');
	}
}
