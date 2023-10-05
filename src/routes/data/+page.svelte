<script>
	import { PolarArea, Line } from 'svelte-chartjs';

	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		ArcElement,
		RadialLinearScale
	} from 'chart.js';
	import { data } from '../../components/data';
	import LineChart from '../../components/charts/LineChart.svelte';
	import BarChart from '../../components/charts/BarChart.svelte';
	import RadarChart from '../../components/charts/RadarChart.svelte';

	ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale);

	let selectedChartType = 'Line';
</script>

<div class="flex p-8">
	<div class="w-[70%] flex flex-col gap-8">
		<div class="grid">
			<!-- Display the selected chart type -->
			{#if selectedChartType === 'PolarArea'}
				<h4 class="h4 font-bold">Polar Area Chart</h4>
			{:else}
				<h4 class="h4 font-bold">Line Chart</h4>
			{/if}
			<p>4 Oct, 17:05:01 UTC-4 · INDEXDJX · Disclaimer</p>
		</div>
		<!-- Render the selected chart -->
		{#if selectedChartType === 'PolarArea'}
			<PolarArea {data} options={{ responsive: true }} />
		{/if}
		{#if selectedChartType === 'Line'}
			<LineChart />
		{/if}
        {#if selectedChartType === 'Bar'}
			<BarChart />
		{/if}
        {#if selectedChartType === 'Radar'}
			<RadarChart />
		{/if}
	</div>
	<div>
		<h2>Select Visualization Type</h2>
		<div class="flex gap-4 flex-col mt-4">
			<button class="btn btn-sm variant-filled" on:click={() => (selectedChartType = 'PolarArea')}
				>Polar Area</button
			>
			<button class="btn btn-sm variant-filled" on:click={() => (selectedChartType = 'Line')}
				>Line</button
			>
            <button class="btn btn-sm variant-filled" on:click={() => (selectedChartType = 'Bar')}
				>Bar</button
			>
            <button class="btn btn-sm variant-filled" on:click={() => (selectedChartType = 'Radar')}
				>Radar</button
			>
		</div>
	</div>
</div>
