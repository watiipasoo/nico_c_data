import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.supabase = createSupabaseServerClient({
		supabaseUrl: 'https://dybllrihzokqujmhhuvl.supabase.co',
		supabaseKey:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5Ymxscmloem9rcXVqbWhodXZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2NDk2MjIsImV4cCI6MjAxMTIyNTYyMn0.TsaPE-ghb-fLcYwH2njcHYCs0YTiTI7AzZ7x2ibYCIY',
		event
	});

	event.locals.getSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		return session;
	};

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		}
	});
};
