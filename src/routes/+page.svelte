<script lang="ts">
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { animate, glide } from 'motion';
	import Carouseli from '../components/Carousel/Carouseli.svelte';
	import HomeNews from '../components/News/HomeNews/HomeNews.svelte';
	import Icon from '@iconify/svelte';

	export let data;

	let { session, supabase, subscription, subscriptions, user } = data;

	const subscriptionButtons = subscriptions.map((subscription) => {
		// Define the button label based on the subscription type
		let buttonLabel = '';
		switch (subscription.subscription) {
			case 'Pro':
				buttonLabel = 'Upgrade to Pro';
				break;
			case 'Basic':
				buttonLabel = 'Upgrade to Basic';
				break;
			case 'Gold':
				buttonLabel = 'Upgrade to Gold';
				break;
			default:
				break;
		}

		// Return a button element with the appropriate label
		return {
			subscriptionType: subscription.subscription,
			label: buttonLabel
		};
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

	let tabSet: number = 0;

	let markets: number = 0;
</script>

<section class="gap-10 p-4">
	{#if !user?.status}
		<div class="absolute card z-[9873] p-4 variant-filled-error">
			<h2 class="h4 font-semibold">Your account has been Deactivated</h2>
		</div>
	{/if}
	<!-- <Carouseli /> -->
	<div>
		<h3 class="h3 mb-4 mt-4 font-bold">Market Watch</h3>

		<TabGroup>
			<Tab bind:group={tabSet} name="tab1" value={0}>
				<span>Main Body</span>
			</Tab>
			<Tab bind:group={tabSet} name="tab2" value={1}>EDGEX</Tab>
			<Tab bind:group={tabSet} name="tab3" value={2}>Debt Securities Market</Tab>
			<!-- Tab Panels --->
			<svelte:fragment slot="panel">
				{#if tabSet === 0}
					<div class="table-container">
						<!-- Native Table Element -->
						<table class="table table-hover">
							<thead>
								<tr>
									<th>Symbol</th>
									<th>Price(MK)</th>
									<th>%Change</th>
									<th>Volume</th>
									<th>Turnover(MK)</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>AIRTEL</td>
									<td>100.45 </td>
									<td>0</td>
									<td>1,000</td>
									<td>100,450.00</td>
								</tr>
								<tr>
									<td>BHL</td>
									<td>10.06</td>
									<td>0.00</td>
									<td>1,000</td>
									<td>630,336.00</td>
								</tr>
								<tr>
									<td>FDHB</td>
									<td>100.45 </td>
									<td>0</td>
									<td>1,000</td>
									<td>12,873,290.00</td>
								</tr>
								<tr>
									<td>FMBCH</td>
									<td>100.45 </td>
									<td>0</td>
									<td>1,000</td>
									<td>17,097,580.00</td>
								</tr>
							</tbody>
						</table>
					</div>
				{:else if tabSet === 1}
					<div class="table-container">
						<!-- Native Table Element -->
						<table class="table table-hover">
							<thead>
								<tr>
									<th>Symbol</th>
									<th>Price(MK)</th>
									<th>%Change</th>
									<th>Volume</th>
									<th>Turnover(MK)</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>AIRTEL</td>
									<td>100.45 </td>
									<td>0</td>
									<td>1,000</td>
									<td>100,450.00</td>
								</tr>
								<tr>
									<td>BHL</td>
									<td>10.06</td>
									<td>0.00</td>
									<td>1,000</td>
									<td>630,336.00</td>
								</tr>
								<tr>
									<td>FDHB</td>
									<td>100.45 </td>
									<td>0</td>
									<td>1,000</td>
									<td>12,873,290.00</td>
								</tr>
								<tr>
									<td>FMBCH</td>
									<td>100.45 </td>
									<td>0</td>
									<td>1,000</td>
									<td>17,097,580.00</td>
								</tr>
							</tbody>
						</table>
					</div>
				{:else if tabSet === 2}
					<div class="table-container">
						<!-- Native Table Element -->
						<table class="table table-hover">
							<thead>
								<tr>
									<th>Symbol</th>
									<th>Price(MK)</th>
									<th>%Change</th>
									<th>Volume</th>
									<th>Turnover(MK)</th>
								</tr>
							</thead>
							<tbody />
						</table>
						<p class="flex justify-center items-center p-10">No Data</p>
					</div>
				{/if}
			</svelte:fragment>
		</TabGroup>
	</div>
	<div class="mt-12 flex gap-4">
		<div class="flex-[70%]">
			<h3 class="h3 mb-4 font-bold">Todays Financial News</h3>
			<TabGroup>
				<Tab bind:group={markets} name="tab1" value={0}>
					<span>Top Stories</span>
				</Tab>
				<Tab bind:group={markets} name="tab2" value={1}>
					<span>Local Market</span>
				</Tab>
				<Tab bind:group={markets} name="tab3" value={2}>World Market</Tab>
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					{#if markets === 0}
						<div class="grid gap-6 mt-4">
							<HomeNews />
							<HomeNews />
							<HomeNews />
							<HomeNews />
							<HomeNews />
						</div>
					{:else if markets === 1}
						<div class="grid gap-6 mt-4">
							<p class="flex justify-center items-center">No Data</p>
						</div>
					{:else if markets === 2}
						<div class="grid gap-6 mt-4">
							<HomeNews />
							<HomeNews />
							<HomeNews />
							<HomeNews />
							<HomeNews />
						</div>
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
		<div class="flex-[30%] ml-10">
			<div class="card w-full p-4 variant-ghost-primary">
				<h4 class="h4 font-semibold">Market trends</h4>
				<div class="flex flex-wrap gap-4 mt-4">
					<span class="chip variant-filled rounded-full">
						<Icon icon="la:chart-line" />
						<span>Market Indexes</span>
					</span>
					<span class="chip variant-filled rounded-full">
						<Icon icon="solar:chart-linear" />
						<span>
							Most Active
						</span>
					</span>
					<span class="chip variant-filled rounded-full">
						<Icon icon="streamline:money-graph-bar-increase-up-product-performance-increase-arrow-graph-business-chart" />
						<span>Gainers</span>
					</span>
					<span class="chip variant-filled rounded-full">
						<Icon icon="streamline:money-graph-bar-decrease-arrow-product-performance-down-decrease-graph-business-chart" />
						<span>
							Losers
						</span>
					</span>
					<span class="chip variant-filled rounded-full">
						<Icon icon="ri:currency-line" />
						<span>Currencies</span>
					</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
</style>
