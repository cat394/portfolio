import { error } from '@sveltejs/kit'

export async function load() {
	try {
		const intro = await import(`../lib/markdown/intro.md`);

		return {
      intro: intro.default
		}
	} catch (e) {
		throw error(404, `Could not find intro sentence`)
	}
}
