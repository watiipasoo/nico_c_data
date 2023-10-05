// src/routes/+page.server.ts
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const load: PageServerLoad = async ({ url, locals: { getSession } }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/login');
	}

	let { data: profile, error: userError } = await supabase
		.from('profiles')
		.select('*')
		.eq('id', session?.user.id)
		.single();

	let { data: userSubscription, error: subscriptionError } = await supabase
		.from('Subscriptions')
		.select('*')
		.eq('id', profile.subscription)
		.single();

	let { data: userBilling, error: billingError } = await supabase
		.from('biiling')
		.select('*')
		.eq('user', session?.user.id)
		.single();

	if (billingError) {
		console.log(billingError);
	}

	console.log(userBilling);

	return {
		url: url.origin,
		profile: profile ?? {},
		user: session?.user ?? {},
		subscription: userSubscription ?? {},
		billing: userBilling ?? {}
	};
};
