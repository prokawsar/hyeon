<script lang="ts">
	import Fa from 'svelte-fa'
	import Card from './elements/card.svelte'
	import { faPlus } from '@fortawesome/free-solid-svg-icons'

	const data = [
		{
			title: '보도자료',
			desc: '펫세이프 에서 공지드립니다.',
			date: '2023-10-14'
		},
		{
			title: '보도자료',
			desc: '펫세이프 에서 공지드립니다.',
			date: '2023-10-14'
		},
		{
			title: '보도자료',
			desc: '펫세이프 에서 공지드립니다.',
			date: '2023-10-14'
		}
	]
</script>

<div
	class="flex flex-col p-3 md:flex-row px-3 md:px-0 gap-4 md:gap-6 w-full justify-center max-w-7xl mt-11">
	<div class="shadow-lg rounded-xl bg-white flex flex-col gap-5 items-center w-full justify-center">
		text
	</div>

	<div
		class="shadow-lg px-5 py-10 rounded-xl bg-white flex flex-col gap-5 items-center w-full justify-center">
		<div
			class="flex flex-row items-center justify-between border-b-2 border-primary-300 w-full mt-10 pb-5">
			<p class="text-3xl text-primary-300 font-bold">새로운 소식</p>
			<div class="border rounded-full p-2 w-8 h-8 flex items-center cursor-pointer">
				<Fa icon={faPlus} />
			</div>
		</div>
		<table class="w-full">
			<tbody>
				{#each data as item, i}
					<tr class="{data.length == i + 1 ? '' : 'border-b'} border-gray-30 text-xl">
						<td class="text-primary-300 p-4"> {item.title}</td>
						<td class="p-4"> {item.desc}</td>
						<td class="p-4 text-gray-400"> {item.date} </td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
