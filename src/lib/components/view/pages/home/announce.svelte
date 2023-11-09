<script>
	import Mike from '$lib/icons/mike.svelte'
	import Post from "$lib/components/elements/Post.svelte";
	import {faPlus} from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

	const posts = [
		{
			id: 1,
			title: '피피엠아이, TTA 품질 성능시험 인증 통과',
			content: '펫 헬스케어 스타트업 ‘피피엠아이’는 지난 23일 자체 개발한 ‘AI기반 반려동물 헬스케어 플랫폼 1.0’이 한국정보통신기술협회(이하 TTA) 소프트웨어시험인증연구소의 확인 및 검증시험(V&V)을 우수한 성적으로 통과했다고 밝혔다.',
			createdAt: '2021-09-01',
			thumbnail: '/images/1.png',
			category: '인증정보'
		},
		{
			id: 2,
			title: '피피엠아이, TTA 품질 성능시험 인증 통과',
			content: '펫 헬스케어 스타트업 ‘피피엠아이’는 지난 23일 자체 개발한 ‘AI기반 반려동물 헬스케어 플랫폼 1.0’이 한국정보통신기술협회(이하 TTA) 소프트웨어시험인증연구소의 확인 및 검증시험(V&V)을 우수한 성적으로 통과했다고 밝혔다.',
			createdAt: '2021-09-01',
			thumbnail: '/images/1.png',
			category: '인증정보'
		}
	]
</script>

<div class="flex flex-col gap-5 px-3 md:px-0 md:flex-row w-full max-w-7xl justify-between mt-11">
	<div class="flex flex-col justify-between bg-white rounded-2xl shadow-xl w-full md:p-6">
		<div class="flex flex-row justify-between items-center px-6">
			<div class="flex flex-row w-full">
				<Mike />
				<div class="md:w-2/5 flex flex-col px-7">
					<p class="text-xl md:text-3xl font-semibold text-primary-300">펫세이프 소식</p>
					<p class="font-normal text-2xl md:text-[20px] z-10">
						새로운<span class="font-bold">소식</span>및 <span class="font-bold">정보</span>를 확인 해보세요
					</p>
				</div>
			</div>
			<div class="border rounded-full w-8 h-8 flex items-center cursor-pointer justify-center">
				<Fa icon={faPlus} class="dark:text-white"/>
			</div>
		</div>

		<div class="w-full grid p-2 md:grid-cols-2 gap-3 md:gap-5">
			{#each posts as post}
				<Post {post} />
			{/each}
		</div>

	</div>
</div>
