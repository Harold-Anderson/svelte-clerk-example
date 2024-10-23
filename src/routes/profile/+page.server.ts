import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.auth.userId) {
	  return redirect(301, '/sign-in')
	}

	return {};
};
