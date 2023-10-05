// src/routes/+page.server.ts
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const load: PageServerLoad = async ({ url, locals: { getSession } }) => {
	const session = await getSession();

	let { data: user, error: userError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session?.user.id)
    .single()
    ;

	let { data: subscription, error } = await supabase
		.from('Subscriptions')
		.select('*')

		// Filters
		.eq('id', user?.subscription)
        .single()
        ;

        let { data: subscriptions, error: subError } = await supabase
		.from('Subscriptions')
		.select('*')
        ;

	if (!session) {
		throw redirect(303, '/login');
	}

	return {
		url: url.origin,
		user: user,
        subscription: subscription,
        subscriptions: subscriptions || []
	};
};
