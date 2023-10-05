<script lang="ts">

	import { Tab, TabGroup } from "@skeletonlabs/skeleton";
	import HomeNews from "../../components/News/HomeNews/HomeNews.svelte";

    let markets: number = 0;

</script>
<div class ='my-8'>
    <div class="w-[80%] mx-auto">
        <h3 class="h3 mb-4">Todays Financial News</h3>
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
                        <p class="flex justify-center items-center">No News</p>
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
</div>