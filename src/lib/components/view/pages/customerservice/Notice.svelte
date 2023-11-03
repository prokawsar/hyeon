<script lang="ts">
	import { Button, Input, Pagination } from 'flowbite-svelte'
	import { ChevronLeftOutline, ChevronRightOutline, SearchOutline } from 'flowbite-svelte-icons'
	import { onMount } from 'svelte'
	const data = [
		{
			id: 1,
			title: '보도자료',
			desc: '펫세이프 에서 공지드립니다.',
			date: '2023-10-14'
		},
		{
			id: 2,
			title: '보도자료',
			desc: '펫세이프 에서 공지드립니다.',
			date: '2023-10-14'
		},
		{
			id: 3,
			title: '보도자료',
			desc: '펫세이프 에서 공지드립니다.',
			date: '2023-10-14'
		},
		{
			id: 4,
			title: '보도자료',
			desc: '펫세이프 에서 공지드립니다.',
			date: '2023-11-14'
		},
		{
			id: 5,
			title: '보도자료',
			desc: '펫세이프 에서 공지드립니다.',
			date: '2023-12-14'
		},
		{
			id: 6,
			title: '보도자료',
			desc: '펫세이프 에서 공지드립니다.',
			date: '2023-04-14'
		}
	]

	let pages: any = []

	let perPage = 3

	$: totalRows = data.length
	$: currentPage = 0
	$: totalPages = Math.ceil(totalRows / perPage)
	$: start = currentPage * perPage
	$: end = currentPage === totalPages - 1 ? totalRows - 1 : start + perPage - 1

	$: rows = data.slice(start, end + 1)

	$: totalRows, (currentPage = 0)
	$: currentPage, start, end

	const generatePage = () => {
		for (let i = 0; i < totalPages; i++) {
			pages.push({ name: i + 1 })
		}
	}

	onMount(() => {
		generatePage()
	})

	const prev = () => {
		if (currentPage === 0) return
		currentPage -= 1
	}

	const next = () => {
		if (currentPage === totalPages - 1) return
		currentPage += 1
	}
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
		<thead class="border-b-2">
			<tr class="text-xl">
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
			{#each rows as item, i}
				<tr class="border-b border-gray-30 text-xl">
					<td>{item.id}</td>
					<td class="p-2 lg:p-4 text-sm md:text-base lg:text-xl"> {item.title}</td>
					<td class="p-2 lg:p-4 text-sm md:text-base lg:text-xl dark:text-white"
						><a href="/static">{item.desc}</a></td>
					<td class="p-2 lg:p-4 text-gray-400 text-sm lg:text-lg w-32 md:w-36"> {item.date} </td>
				</tr>
			{/each}
		</tbody>
	</table>

	<div class="relative flex justify-center my-5">
		<Pagination bind:pages on:previous={prev} on:next={next} icon>
			<svelte:fragment slot="prev">
				<span class="sr-only">Previous</span>
				<ChevronLeftOutline class="w-2.5 h-2.5" />
			</svelte:fragment>
			<svelte:fragment slot="next">
				<span class="sr-only">Next</span>
				<ChevronRightOutline class="w-2.5 h-2.5" />
			</svelte:fragment>
		</Pagination>

		<div class="absolute right-0">
			<Button class="bg-[#191919] text-white rounded-full px-8" size="sm">글쓰기</Button>
		</div>
	</div>
</div>
