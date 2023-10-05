<script lang="ts">
	import { redirect } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;
	// import { getNotificationsContext } from 'svelte-notifications';

	// const { addNotification } = getNotificationsContext();

	$: ({ supabase, session } = data);

	let loading = false;
	let email = '';
	let password = '';

	const handleSignIn = async () => {
		try {
			loading = true;

			const { data, error } = await supabase.auth.signInWithPassword({
				email: email,
				password: password
			});

			if (error) throw error;
			if (data) {
				location.reload();
			}
			loading = false
		} catch (error) {
			if (error instanceof Error) {
				// addNotification({
				// 	text: error.message,
				// 	position: 'top-center',
				// 	type: 'error',
				// 	removeAfter: 3000
				// });
			}
		} finally {
			loading = false;
		}
	};
	if (session?.user) {
		location.reload();
	}
</script>

<div class="flex flex-col justify-center items-center h-full">
	<h2 class="h2 my-4 text-center font-bold my-8">Welcome Back</h2>
	<div class="card p-8" aria-live="polite">
		<h3 class="h3 text-center font-semibold mb-12">Sign In</h3>
		<form class="form flex flex-col gap-4" on:submit|preventDefault={handleSignIn}>
			<div>
				<label class="label" for="email">
					<span>Email</span>
					<input
						id="email"
						class="input p-2"
						type="email"
						placeholder="Your email"
						bind:value={email}
					/>
				</label>
			</div>
			<div>
				<label class="label" for="email">
					<span>Password</span>
					<input class="input p-2" type="password" placeholder="Password" bind:value={password} />
				</label>
			</div><div class="flex justify-end">
					<p>Forgot Password?</p>
				</div>
			<div class="mt-4">
				<button type="submit" class={`btn variant-filled-tertiary w-full ${ loading ? 'disabled' : ''}`} aria-live="polite">
					<span>{loading ? 'Loading' : 'Sign In'}</span>
				</button>
				<div class="flex gap-1 my-4 items-center justify-center">
					<p>Don't have an account?</p>
					<a href="/register" class="btn btn-sm p-0 text-primary-500" aria-live="polite"> Sign Up </a>
				</div>
			</div>
		</form>
	</div>
</div>

<style>
	.input{
		background-color: white!important;
		color:black!important;
	}
</style>