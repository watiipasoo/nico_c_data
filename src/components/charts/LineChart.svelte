<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';

	// @ts-ignore
	let chart;
	let selectedData = ['profits', 'sales']; // Default selected data

	// Data for profits, sales, and dividends
	const data = {
		profits: [12, 19, 3, 5, 2, 8, 9, 4],
		sales: [5, 8, 2, 10, 6, 15, 7, 11],
		dividends: [2, 4, 1, 3, 2, 5, 2, 6]
	};

	// Function to update the chart based on the selected data
	function updateChart() {
		const selectedDatasets = selectedData.map((dataKey) => {
			return {
				label: dataKey.charAt(0).toUpperCase() + dataKey.slice(1),
				// @ts-ignore
				data: data[dataKey],
				borderColor: getRandomColor(),
				borderWidth: 2
			};
		});

		// @ts-ignore
		chart.data.datasets = selectedDatasets;
		// @ts-ignore
		chart.update();
	}

	function getRandomColor() {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	// @ts-ignore
	function toggleSelection(dataKey) {
		if (selectedData.includes(dataKey)) {
			selectedData = selectedData.filter((selected) => selected !== dataKey);
		} else {
			selectedData = [...selectedData, dataKey];
		}
		updateChart();
	}

	onMount(() => {
		// @ts-ignore
		const ctx = document.getElementById('lineChart').getContext('2d');

		const selectedDatasets = selectedData.map((dataKey) => {
			return {
				label: dataKey.charAt(0).toUpperCase() + dataKey.slice(1),
				// @ts-ignore
				data: data[dataKey],
				borderColor: getRandomColor(),
				borderWidth: 2
			};
		});

		chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug'],
				datasets: selectedDatasets // Initial datasets
			},
			options: {
				responsive: true
			}
		});
	});
</script>

<div class="flex">
	<div class="flex-[100%]">
		<div>
            <h4 class="h4 py-1">Select Data To Compare</h4>
			<div class="flex gap-4">
				<button
					class={`btn btn-sm text-white p-2 rounded ${
						selectedData.includes('profits') ? 'variant-filled-success btn btn-sm' : ''
					}`}
					on:click={() => toggleSelection('profits')}
				>
					Profits
				</button>
				<button
					class={`btn btn-sm text-white p-2 rounded ${
						selectedData.includes('sales') ? 'variant-filled-success btn btn-sm' : ''
					}`}
					on:click={() => toggleSelection('sales')}
				>
					Sales
				</button>
				<button
					class={`btn btn-sm text-white p-2 rounded ${
						selectedData.includes('dividends') ? 'variant-filled-success btn btn-sm' : ''
					}`}
					on:click={() => toggleSelection('dividends')}
				>
					Dividends
				</button>
			</div>
		</div>

		<canvas id="lineChart" />
	</div>
</div>
