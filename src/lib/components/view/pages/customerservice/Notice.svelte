<script lang="ts">
	import { Input } from 'flowbite-svelte'
	import { SearchOutline } from 'flowbite-svelte-icons'
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
</script>

<div class="w-full px-[10%]">
	<div class="flex flex-row justify-between mt-8 mb-2 pb-5 border-b-2 border-black">
		<p class="text-3xl font-medium">전체게시물</p>
		<div>
			<Input class="rounded-none" type="text" placeholder="Search" size="md">
				<SearchOutline slot="right" class="w-4 h-4" />
			</Input>
		</div>
	</div>
	<table class="w-full">
		<tbody>
			{#each data as item, i}
				<tr
					class="{data.length == i + 1
						? ''
						: 'border-b'} border-gray-30 text-xl flex flex-col justify-between sm:block">
					<td>{i + 1}</td>
					<td class="p-2 lg:p-4 text-sm md:text-base lg:text-xl"> {item.title}</td>
					<td class="p-2 lg:p-4 text-sm md:text-base lg:text-xl dark:text-white"
						><a href="/static">{item.desc}</a></td>
					<td class="p-2 lg:p-4 text-gray-400 text-sm lg:text-lg w-36"> {item.date} </td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
