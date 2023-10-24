<script>
	import Mike from '$lib/icons/mike.svelte'
	import ItemGray from './elements/itemGray.svelte'

	const texts = ['분석정보', '분석정보', '분석정보', '분석정보', '분석정보', '분석정보']
</script>

<div
	class="flex flex-col gap-5 px-3 md:flex-row w-full max-w-7xl justify-between mt-11 bg-white rounded-2xl shadow-xl"
>
	<div class="relative flex flex-col gap-3 pt-7 px-7">
		<p class="text-3xl font-semibold text-primary-300 mb-5">펫세이프 인증정보</p>
		<p class="font-normal text-[40px] z-10">
			<span class="font-bold">인증</span>과 관련된 <span class="font-bold">정보</span>를 확인
			해보세요
		</p>
		<div class=" absolute bottom-0 right-0 flex justify-end">
			<Mike />
		</div>
	</div>

	<div class="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-3 md:gap-x-8 md:gap-y-4 p-2 md:p-7">
		{#each texts as text}
			<ItemGray {text} />
		{/each}
	</div>
</div>
