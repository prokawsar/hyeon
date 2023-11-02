<script lang="ts">
	import { Input, Pagination } from 'flowbite-svelte'
	import { ChevronLeftOutline, ChevronRightOutline, SearchOutline } from 'flowbite-svelte-icons'
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
		},
		{
			title: '보도자료',
			desc: '펫세이프 에서 공지드립니다.',
			date: '2023-10-14'
		}
	]

	let pages = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }, { name: '5' }]
</script>

<div class="w-full px-[10%] my-10">
	<div class="flex flex-row justify-between mt-5 mb-2 pb-5 border-b-2 border-black">
		<p class="text-3xl font-medium">전체게시물</p>
		<div>
			<Input class="rounded-none" type="text" placeholder="Search" size="md">
				<SearchOutline slot="right" class="w-4 h-4" />
			</Input>
		</div>
	</div>
	<table class="w-full table-auto">
		<thead>
			<tr>
				<td>No</td>
				<td>
					<select class="border-none">
						<option>카테고리</option>
						<option>카테고리</option>
						<option>카테고리</option>
					</select>
				</td>
				<td class="text-center"> 제목 </td>
				<td class="text-center"> 작성일 </td>
			</tr>
		</thead>
		<tbody>
			{#each data as item, i}
				<tr class="border-b border-gray-30 text-xl">
					<td>{i + 1}</td>
					<td class="p-2 lg:p-4 text-sm md:text-base lg:text-xl"> {item.title}</td>
					<td class="p-2 lg:p-4 text-sm md:text-base lg:text-xl dark:text-white"
						><a href="/static">{item.desc}</a></td>
					<td class="p-2 lg:p-4 text-gray-400 text-sm lg:text-lg w-36"> {item.date} </td>
				</tr>
			{/each}
		</tbody>
	</table>

	<div class="flex justify-center my-5">
		<Pagination
			{pages}
			on:previous={() => console.log('prev')}
			on:next={() => console.log('next')}
			icon>
			<svelte:fragment slot="prev">
				<span class="sr-only">Previous</span>
				<ChevronLeftOutline class="w-2.5 h-2.5" />
			</svelte:fragment>
			<svelte:fragment slot="next">
				<span class="sr-only">Next</span>
				<ChevronRightOutline class="w-2.5 h-2.5" />
			</svelte:fragment>
		</Pagination>
	</div>
</div>
