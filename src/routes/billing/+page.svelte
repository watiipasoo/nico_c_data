<script lang="ts">
	import Icon from '@iconify/svelte';

	export let data;

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
	let selectedSubscription = '';

	let paymentMethodClass = '';

	let { supabase, user } = data;

	async function handleSignUp() {
		const { data, error } = await supabase.from('biilling').insert(
			{
				user: user?.id,
				payment_method: payment_method,
				card_holder: card_holder,
				cvv: cvv,
				exp_date: exp_date
			}
		);

        if(error){
            console.log(error)
        }

        if(data){
            console.log(67876)
        }
	}
</script>

<form class="p-8 flex justify-center flex-col items-center">
	<h4 class="h4 font-semibold">Billing Information</h4>
	<div class="flex justify-around items-center p-2 gap-4">
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
	<button class="btn btn-lg" on:click={handleSignUp}> Send </button>
</form>
