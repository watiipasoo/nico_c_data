// src/routes/+page.server.ts
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const load: PageServerLoad = async ({ url, locals: { getSession } }) => {
	let { data: Subscriptions, error } = await supabase.from('Subscriptions').select('*');
	const session = await getSession();

	// if the user is already logged in return them to the account page
	if (session) {
		throw redirect(303, '/');
	}

	return {
		url: url.origin,
		subscriptions: Subscriptions ?? []
	};
};
