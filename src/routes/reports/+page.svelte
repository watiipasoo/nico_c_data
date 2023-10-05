<script lang="ts">
	import Icon from '@iconify/svelte';

    function downloadFile() {
    // Create an invisible anchor element
    const a = document.createElement('a');
    a.href = '/file.pdf'; // Replace with the actual path to your file
    a.download = 'download.pdf'; // Replace with the desired file name
    a.style.display = 'none';

    // Append the anchor element to the body
    document.body.appendChild(a);

    // Trigger a click event on the anchor element
    a.click();

    // Remove the anchor element from the DOM
    document.body.removeChild(a);
  }
</script>

<div class="p-10">
	<div class="table-container">
		<!-- Native Table Element -->
		<table class="table table-hover table-compact">
			<thead>
				<tr>
					<th>Title</th>
					<th>Type</th>
					<th>Date Published</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Daily 04 October 2023</td>
					<td>Daily Reports</td>
					<td>04 October 2023</td>
					<td>
                        <button
                          class="btn btn-sm variant-filled-success"
                          on:click={downloadFile}
                        >
                          <Icon icon="material-symbols:download" width="20" />
                        </button>
                      </td>
				</tr>
				<tr>
					<td>Weekly Summary 29 September 2023</td>
					<td>Weekly Reports</td>
					<td>29 September 2023</td>
					<td>
                        <button
                          class="btn btn-sm variant-filled-success"
                          on:click={downloadFile}
                        >
                          <Icon icon="material-symbols:download" width="20" />
                        </button>
                      </td>
				</tr>
				<tr>
					<td>Daily 26 September 2023</td>
					<td>Daily Reports</td>
					<td>26 September 2023</td>
					<td>
                        <button
                          class="btn btn-sm variant-filled-success"
                          on:click={downloadFile}
                        >
                          <Icon icon="material-symbols:download" width="20" />
                        </button>
                      </td>
				</tr>
				<tr>
					<td>3RD QUARTER MARKET PERFORMANCE REPORT- 2023</td>
					<td>Quarterly Reports</td>
					<td>05 October 2023</td>
					<td>
                        <button
                          class="btn btn-sm variant-filled-success"
                          on:click={downloadFile}
                        >
                          <Icon icon="material-symbols:download" width="20" />
                        </button>
                      </td>
				</tr>
                <tr>
					<td>Daily 04 October 2023</td>
					<td>Daily Reports</td>
					<td>04 October 2023</td>
					<td>
                        <button
                          class="btn btn-sm variant-filled-success"
                          on:click={downloadFile}
                        >
                          <Icon icon="material-symbols:download" width="20" />
                        </button>
                      </td>
				</tr>
				<tr>
					<td>Weekly Summary 29 September 2023</td>
					<td>Weekly Reports</td>
					<td>29 September 2023</td>
					<td>
                        <button
                          class="btn btn-sm variant-filled-success"
                          on:click={downloadFile}
                        >
                          <Icon icon="material-symbols:download" width="20" />
                        </button>
                      </td>
				</tr>
                <tr>
					<td>Daily 04 October 2023</td>
					<td>Daily Reports</td>
					<td>04 October 2023</td>
					<td>
                        <button
                          class="btn btn-sm variant-filled-success"
                          on:click={downloadFile}
                        >
                          <Icon icon="material-symbols:download" width="20" />
                        </button>
                      </td>
				</tr>
				<tr>
					<td>Weekly Summary 29 September 2023</td>
					<td>Weekly Reports</td>
					<td>29 September 2023</td>
					<td>
                        <button
                          class="btn btn-sm variant-filled-success"
                          on:click={downloadFile}
                        >
                          <Icon icon="material-symbols:download" width="20" />
                        </button>
                      </td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
