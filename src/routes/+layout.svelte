<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, Modal, Avatar, type PopupSettings, popup } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';

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

	const popupClick: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'right'
	};

	const market: PopupSettings = {
		event: 'click',
		target: 'markets',
		placement: 'right'
	};

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

	$: classesActive = (href: string) =>
		href === $page.url.pathname ? '!bg-primary-500 text-white' : '';

	let currentIcon = 'ph:moon-fill';
	function toggleTheme() {
		const htmlElement = document.querySelector('html');
		const currentTheme = htmlElement.getAttribute('class');
		const newTheme = currentTheme === 'light' ? 'dark' : 'light';

		// Update the HTML element's class to switch the theme
		htmlElement.setAttribute('class', newTheme);

		// Store the theme preference in localStorage
		localStorage.setItem('theme', newTheme);
		currentIcon = newTheme === 'light' ? 'ph:moon-fill' : 'ph:sun-fill';
	}
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
				<div class="flex items-center gap-4">
					<div class="flex justify-center items-center flex-col">
						<LightSwitch />
					</div>
						<button class="p-2 rounded-full bg-gradient-to-br variant-gradient-error-warning">
							<Icon icon="iconamoon:search-duotone" color="white" width="15" /></button
					>					
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
										<Icon
											icon="material-symbols:home-outline"
											color={classesActive('/')}
											width="25"
										/>
										<span class="flex-auto text-sm">Home</span>
									</a>
								</li>
								<li>
									<a href="/data" class={classesActive('/data')}>
										<Icon icon="fluent:data-area-20-filled" color={classesActive('/')} width="25" />
										<span class="flex-auto text-sm">Data</span>
									</a>
								</li>
								<li>
									<a href="/reports" class={classesActive('/reports')}>
										<Icon icon="mdi:report-box-outline" color={classesActive('/')} width="25" />
										<span class="flex-auto text-sm">Reports</span>
									</a>
								</li>
								<li>
									<a href="/news" class={classesActive('/news')}>
										<Icon icon="tabler:news" color={classesActive('/')} width="25" />
										<span class="flex-auto text-sm">News</span>
									</a>
								</li>
								<li>
									<a use:popup={popupClick} class={classesActive('/Industries')}>
										<Icon icon="carbon:industry" color={classesActive('/')} width="25" />
										<span class="flex-auto text-sm">Industries</span>
										<span>
											<Icon icon="mdi:menu-down" />
										</span>
									</a>
									<div class="card p-4 variant-filled-primary" data-popup="popupClick">
										<ul>
											<li>
												<a href="/elements/lists">
													<Icon icon="fluent:real-estate-20-regular" width="25" />
													<span class="flex-auto text-sm">Real Estate</span>
												</a>
											</li>
											<li>
												<a href="/elements/lists">
													<Icon icon="grommet-icons:technology" width="25" />
													<span class="flex-auto text-sm">Technology</span>
												</a>
											</li>
											<li>
												<a href="/elements/lists">
													<Icon icon="iconoir:healthcare" width="25" />
													<span class="flex-auto text-sm">HealthCare</span>
												</a>
											</li>
											<li>
												<a href="/elements/lists">
													<Icon icon="mdi:energy-outline" width="25" />
													<span class="flex-auto text-sm">Energy</span>
												</a>
											</li>
											<!-- ... -->
										</ul>
									</div>
								</li>

								<li>
									<a use:popup={market} class={classesActive('/Industries')}>
										<Icon icon="fluent-mdl2:market" color={classesActive('/')} width="25" />
										<span class="flex-auto text-sm">Markets</span>
										<span>
											<Icon icon="mdi:menu-down" />
										</span>
									</a>
									<div class="card p-4 variant-filled-primary" data-popup="markets">
										<ul>
											<li>
												<a href="/elements/lists">
													<Icon icon="streamline:money-graph-bar-increase-up-product-performance-increase-arrow-graph-business-chart" width="25" />
													<span class="flex-auto text-sm">Stocks:Gainers</span>
												</a>
											</li>
											<li>
												<a href="/elements/lists">
													<Icon icon="streamline:money-graph-bar-decrease-arrow-product-performance-down-decrease-graph-business-chart" width="25" />
													<span class="flex-auto text-sm">Stocks:Losers</span>
												</a>
											</li>
											<li>
												<a href="/elements/lists">
													<Icon icon="ri:currency-line" width="25" />
													<span class="flex-auto text-sm">Currencies</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
						<div class="pt-[5vh]">
							<h6 class="text-sm font-bold">SETTINGS</h6>
							<ul class="mt-4">
								<li>
									<a href="profile" class={classesActive('/profile')}>
										<Icon icon="iconamoon:profile" color={classesActive('/')} width="25" />
										<span class="flex-auto text-sm">Profile</span>
									</a>
								</li>
							</ul>
						</div>
					</nav>
					<button type="button" class="btn variant-ringed mb-4" on:click={signOut}>
						<Icon icon="uil:signout" color={classesActive('/')} width="25" />
						<span class="text-sm">Sign Out</span>
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
