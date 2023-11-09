<script>
	import { csTabs } from '$lib/utils/const'
	import { Tabs, TabItem, Heading, P, Span, Card } from 'flowbite-svelte'
	import Notice from "$lib/components/view/pages/customerservice/Tabs/Notice.svelte";
	import Location from "$lib/components/view/pages/customerservice/Tabs/Location.svelte";

	export let activeTab = 'notice'

	$: screenSize = window.innerWidth
</script>

<div class="w-[100%]">
	<Tabs style={'underline'}
		defaultClass="w-[100%] flex content-start items-start space-x-2 text-sm font-medium text-center text-primary-text border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 px-[10%]"
		contentClass="mt-8">
		<!-- NOTICE -->
		<TabItem
			open
			title="NOTICE"
			activeClasses="w-[100%] inline-block p-4 border-b-2 border-primary-text rounded-t-lg">
			<Notice />
		</TabItem>

		<!-- LOCATION -->
		<TabItem
				open
				title="FAQ"
				activeClasses="w-[100%] inline-block p-4 border-b-2 border-primary-text rounded-t-lg">
		</TabItem>

		<!-- LOCATION -->
		<TabItem
				open
				title="Q&A"
				activeClasses="w-[100%] inline-block p-4 border-b-2 border-primary-text rounded-t-lg">
		</TabItem>

		<!-- LOCATION -->
		<TabItem
				open
				title="인증관련정보"
				activeClasses="w-[100%] inline-block p-4 border-b-2 border-primary-text rounded-t-lg">
		</TabItem>

		<!-- LOCATION -->
		<TabItem
				open
				title="찾아오시는 길"
				activeClasses="w-[100%] inline-block p-4 border-b-2 border-primary-text rounded-t-lg">
			<Location />
		</TabItem>

		<!-- FAQ -->
		<!-- <TabItem
			title="FAQ"
			activeClasses="w-[100%] inline-block p-4 border-b-2 border-primary-text rounded-t-lg">
			<div class="w-[100%] flex flex-col items-start px-4 sm:px-[10%]" />
		</TabItem> -->

		<!-- Q&A -->
		<!-- <TabItem
			title="Q&A"
			activeClasses="w-[100%] inline-block p-4 border-b-2 border-primary-text rounded-t-lg">
			<div class="w-[100%] flex flex-col items-start px-4 sm:px-[10%]" />
		</TabItem> -->

		<!-- 인증관련정보 -->
		<!-- <TabItem
			title="인증관련정보"
			activeClasses="w-[100%] inline-block p-4 border-b-2 border-primary-text rounded-t-lg">
			<div class="w-[100%] flex flex-col items-start px-4 sm:px-[10%]" />
		</TabItem> -->
		<!--{#each csTabs as tab}-->
		<!--	<TabItem-->
		<!--		open={activeTab.toLocaleLowerCase() === tab.toLocaleLowerCase()}-->
		<!--		on:click={() => (activeTab = tab)}-->
		<!--		title={tab}-->
		<!--		activeClasses="w-[100%] inline-block p-4 border-b-2 border-primary-text rounded-t-lg" />-->
		<!--{/each}-->
	</Tabs>
</div>

<svelte:window bind:innerWidth={screenSize} />
