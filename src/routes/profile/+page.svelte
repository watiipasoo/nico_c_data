<script lang="ts">
	import { Avatar, type ModalComponent, type ModalSettings } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	import Icon from '@iconify/svelte';

	import { getModalStore } from '@skeletonlabs/skeleton';
	import EditProfile from '../../components/Modals/EditProfile.svelte';

	const modalStore = getModalStore();

	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	export let data: PageData;

	const modalComponent: ModalComponent = {
		// Pass a reference to your custom component
		ref: EditProfile,
		// Add the component properties as key/value pairs
		props: { background: 'bg-red-500' },
		// Provide a template literal for the default component slot
		slot: '<p>Skeleton</p>'
	};

	const modal: ModalSettings = {
		type: 'component',
		// Pass the component directly:
		component: modalComponent
	};
</script>

<section class="flex p-8 gap-4 justify-center">
	<div class="w-[50vh] flex flex-col items-center">
		<Avatar
			src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop"
			width="w-24"
			rounded="rounded-full"
		/>
		<div class="text-center py-2 grid gap-2">
			<h4 class="h4 font-bold">{data.profile?.username}</h4>
			<p class="h6 text-secondary-400">Business</p>
		</div>
		<div class="mt-4 p-4 grid gap-4">
			<div>
				<label class="text-sm">EMAIL</label>
				<span class="font-semibold">{data.user?.email}</span>
			</div>
			<div>
				<label class="text-sm">PHONE</label>
				<span class="font-semibold">{data.profile.phone}</span>
			</div>
			<div>
				<label class="text-sm">LOCATION</label>
				<span class="font-semibold">{data.profile.location}</span>
			</div>
		</div>
	</div>
	<div class="h-fit card variant-soft-primary p-8 w-[60vh]">
		<h3 class="h3 font-bold">Account Information</h3>
		<div class="flex gap-8">
			<div class="mt-4 grid gap-2">
				<div>
					<span class="font-semibold">Subscription:</span>
					<span>{data.subscription.subscription}</span>
				</div>
				<div>
					<span class="font-semibold">Gender:</span>
					<span>Male</span>
				</div>
				<div>
					<span class="font-semibold">Payment Method:</span>
					<span>{data.billing.payment_method}</span>
				</div>
			</div>
			<div>
				<div class="mt-4 flex justify-center items-center gap-1">
					<p class="h5 font-semibold">Status:</p>
					<p class="h6 font-semibold">
				  <span
							class={`${
								data.profile.status ? '' : ''
							}`}>{data.profile.status ? 'Active' : 'Inactive'}</span
						>
					</p>
				</div>
			</div>
		</div>

		<button
			type="button"
			on:click={() => {
				modalStore.trigger(modal);
			}}
			class="btn mt-4 variant-filled-error"
		>
			Update Account
		</button>
	</div>
</section>