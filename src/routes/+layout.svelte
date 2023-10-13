<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, Modal, Avatar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Access the current route information

	import Icon from '@iconify/svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});

	async function signOut() {
		const { error } = await supabase.auth.signOut();

		if (!error) {
			// Clear the user's session and reload the page
			await supabase.auth.signOut();
			location.reload();
		} else {
			console.error('Error signing out:', error);
		}
	}

	$: classesActive = (href: string) => (href === $page.url.pathname ? '!bg-primary-500 text-white' : 'text-black');
</script>

<!-- App Shell -->

<Modal />

<!-- <AppShell>...</AppShell> -->

<AppShell>
	<!-- (header) -->
	<svelte:fragment slot="header">
		{#if $page.url.pathname !== '/login' && $page.url.pathname !== '/register'}
			<section class="card flex justify-between px-6 py-2 items-center">
				<a href="/"><img class="h-16" src="/nicoC.png" /></a>
				<div class="w-[70vh]">
					<div class="input-group input-group-divider grid-cols-[1fr_auto]">
						<input type="text" placeholder="Search..." />

						<button class="variant-filled-secondary"
							><Icon icon="material-symbols:search" color="white" width="20" /></button
						>
					</div>
				</div>
				<div class="flex items-center gap-4">
					<div>
						<a href="/profile">
							<Avatar
								src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop"
								width="w-12"
								rounded="rounded-full"
								cursor="cursor-pointer"
								border="border-4 border-surface-300-600-token hover:!border-primary-500"
							/>
						</a>
					</div>
				</div>
			</section>
		{/if}
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		{#if $page.url.pathname !== '/login' && $page.url.pathname !== '/register'}
			<div class="flex justify-center align-center h-full">
				<div class="flex flex-col justify-between p-4">
					<nav class="list-nav w-[30vh] pt-6">
						<div>
							<h6 class="text-sm font-bold">MENU</h6>
							<ul class="mt-4">
								<li>
									<a href="/" class={classesActive('/')}>
										<Icon icon="material-symbols:home-outline" color={classesActive('/')} width="25" />
										<span class="flex-auto">Home</span>
									</a>
								</li>
								<li>
									<a href="/data" class={classesActive('/data')}>
										<Icon icon="fluent:data-area-20-filled" color={classesActive('/')} width="25" />
										<span class="flex-auto">Data</span>
									</a>
								</li>
								<li>
									<a href="/reports" class={classesActive('/reports')}>
										<Icon icon="mdi:report-box-outline" color={classesActive('/')} width="25" />
										<span class="flex-auto">Reports</span>
									</a>
								</li>
								<li>
									<a href="/news" class={classesActive('/news')}>
										<Icon icon="tabler:news" color={classesActive('/')} width="25" />
										<span class="flex-auto">News</span>
									</a>
								</li>
								<li>
									<a href="/Industries" class={classesActive('/Industries')}>
										<Icon icon="carbon:industry" color={classesActive('/')} width="25" />
										<span class="flex-auto">Industries</span>
									</a>
								</li>

								<li>
									<a href="">
										<Icon icon="fluent-mdl2:market" color={classesActive('/')} width="25" />
										<span class="flex-auto">Markets</span>
									</a>
								</li>
							</ul>
						</div>
						<div class="pt-[5vh]">
							<h6 class="text-sm font-bold">SETTINGS</h6>
							<ul class="mt-4">
								<li>
									<a href="profile" class={classesActive('/profile')}>
										<Icon icon="iconamoon:profile" color={classesActive('/')} width="25" />
										<span class="flex-auto">Profile</span>
									</a>
								</li>
							</ul>
						</div>
					</nav>
					<button type="button" class="btn variant-ringed mb-4" on:click={signOut}>
						<Icon icon="uil:signout" color={classesActive('/')} width="25"/>
						<span>Sign Out</span>
					</button>
				</div>
				<span class="divider-vertical h-full" />
			</div>
		{/if}
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>

<style>
</style>
