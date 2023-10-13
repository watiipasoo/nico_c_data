<script lang="ts">
	import Icon from '@iconify/svelte';

	export let data;

	// Define variables to store form input values
	let fullName = '';
	let email = '';
	let password = '';
	let phone = '';
	let location = '';
	let card_holder = '';
	let exp_date = '';
	let payment_method = '';
	let cvv = '';
	let card_number = '';
	let selectedSubscription = ''; // Default subscription ID

	let paymentMethodClass = '';

	let { supabase } = data;

	async function handleSignUp() {
		try {
			let { data: userData, error: userError } = await supabase.auth.signUp({
				email: email,
				password: password
			});

			if (userError) {
				console.log('User registration error:', userError);
				return;
			}

			const { data: profileData, error: errorProfile } = await supabase
				.from('profiles')
				.update({
					id: userData.user?.id,
					username: fullName,
					subscription: selectedSubscription,
					phone: phone,
					location: location,
					status: true
				})
				.eq('id', userData.user?.id);
			if (errorProfile) {
				console.log('Profile creation error:', errorProfile);
				return;
			}

			const { data, error } = await supabase.from('biiling').insert([{
				user: userData.user?.id,
				payment_method: payment_method,
				card_holder: card_holder,
				cvv: cvv,
				exp_date: exp_date
			}]);

			if (error) {
				console.log('Billing info insertion error:', error);
				return;
			}

			window.location.reload();

		} catch (error) {
			console.error('An unexpected error occurred:', error);
		}
	}
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<div class="row flex flex-col h-screen justify-center items-center">
	<div class="mt-4">
		<h2 class="h2 font-bold mt-4">Create Account</h2>
	</div>
	<form class="card p-6 mt-6">
		<div class="flex gap-16">
			<div>
				<h3 class="h3 font-semibold my-2">Account Information</h3>
				<div class="grid gap-2 mt-4">
					<label class="label">
						<span>Full Name</span>
						<input class="input bg-white text-black" type="text" placeholder="" bind:value={fullName} />
					</label>
					<label class="label">
						<span>Email</span>
						<input class="input bg-white text-black" type="text" placeholder="" bind:value={email} />
					</label>
					<label class="label">
						<span>Phone</span>
						<input class="input bg-white text-black" type="text" placeholder="" bind:value={phone} />
					</label>
					<label class="label">
						<span>Password</span>
						<input class="input bg-white text-black" type="password" placeholder="" bind:value={password} />
					</label>
					<label class="label">
						<span>Country</span>
						<input class="input bg-white text-black" type="text" placeholder="" bind:value={location} />
					</label>
					<label class="label">
						<span>Subscription Plan</span>
					</label>
					<select class="select input" bind:value={selectedSubscription}>
						{#each data.subscriptions as subscription}
							<option class="input" value={subscription.id}>{subscription.subscription}</option>
						{/each}
					</select>
				</div>
			</div>
			<div>
				<h3 class="h3 font-semibold mb-4">Billing Information</h3>
				<h4 class="my-2">Payment Method</h4>
				<div class="flex justify-around items-center p-2">
					<div
						class={`block card card-hover p-4 border-none cursor-pointer ${
							payment_method === 'visa' ? 'variant-ghost-success' : ''
						}`}
						on:click={() => {
							payment_method = 'visa'; // Set the payment method to 'visa' when the Visa card is clicked
							paymentMethodClass = 'variant-ghost-success';
						}}
					>
						<Icon icon="logos:visa" color="white" width="40" />
					</div>

					<div
						class={`block card card-hover p-4 border-none cursor-pointer ${
							payment_method === 'paypal' ? 'variant-ghost-success' : ''
						}`}
						on:click={() => {
							payment_method = 'paypal'; // Set the payment method to 'visa' when the Visa card is clicked
							paymentMethodClass = 'variant-ghost-success';
						}}
					>
						<Icon icon="logos:paypal" color="white" width="40" />
					</div>
					<div
						class={`block card card-hover p-4 border-none cursor-pointer ${
							payment_method === 'mastercard' ? 'variant-ghost-success' : ''
						}`}
						on:click={() => {
							payment_method = 'mastercard'; // Set the payment method to 'visa' when the Visa card is clicked
							paymentMethodClass = 'variant-ghost-success';
						}}
					>
						<Icon icon="logos:mastercard" color="white" width="40" />
					</div>
				</div>
				<div class="my-4 grid gap-2">
					<label class="label">
						<span>Card Holder Name</span>
						<input class="input" type="text" placeholder="" bind:value={card_holder} />
					</label>
					<label class="label">
						<span>Card Number</span>
						<input class="input" type="text" placeholder="" bind:value={card_number} />
					</label>
					<label class="label">
						<span>Expiry Date</span>
						<input class="input" type="date" placeholder="" bind:value={exp_date} />
					</label>
					<label class="label">
						<span>cvv</span>
						<input class="input" type="text" placeholder="" bind:value={cvv} />
					</label>
				</div>
			</div>
		</div>

		<div class="mt-4">
			<button type="button" class="btn text-white bg-primary-500 btn-md w-full" on:click={handleSignUp}>
				<span>Register</span>
			</button>
		</div>
	</form>
	<div class="p-2">
		Already have an account? <a href="/login" class="text-primary-600">Sign In</a>
	</div>
</div>

<style>
	.register_form > span {
		font-weight: bold;
	}

	.input{
		background-color: white!important;
		color:black!important;
	}
</style>
