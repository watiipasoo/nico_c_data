<script lang="ts">
	import { supabase } from '$lib/supabaseClient';

	// Props
	let email = '';
	let location = '';
	let phone = '';
	let username = '';
	let subscriptionPackage = '';

	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	const formData = {
		email,
		location,
		phone,
		username,
		subscriptionPackage
	};

	async function onFormSubmit(): Promise<void> {
		const { data, error } = await supabase
			.from('profiles')
			.update(
                {
                    
                }
            )
			.eq('some_column', 'someValue')
			.select();
		console.log(formData);
		modalStore.close();
	}

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<header class={cHeader}>Edit Account Details</header>
		<form class="modal-form {cForm}">
			<label class="label">
				<span class="text-sm">Name</span>
				<input class="input" type="email" bind:value={username} placeholder="Full Name" />
			</label>
			<label class="label">
				<span class="text-sm">Email</span>
				<input class="input" type="text" bind:value={email} placeholder="Email" />
			</label>
			<label class="label">
				<span class="text-sm">Phone</span>
				<input class="input" type="text" bind:value={phone} placeholder="Phone Number" />
			</label>
			<label class="label">
				<span class="text-sm">Location</span>
				<input class="input" type="text" bind:value={location} placeholder="Location" />
			</label>
			<label class="label">
				<span class="text-sm">Subscription Package</span>
				<select class="select" bind:value={subscriptionPackage}>
					<option value="1">Basic</option>
					<option value="2">Gold</option>
					<option value="3">Premium</option>
				</select>
			</label>
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer">
        <button class="btn" on:click={()=>{modalStore.close()}}>Close</button>
        <button class="btn variant-ghost-secondary" on:click={onFormSubmit}>Submit</button>
    </footer>
	</div>
{/if}
