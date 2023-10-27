<script lang="ts">
	import Fa from 'svelte-fa'
	import { faChevronLeft, faChevronRight, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
	import Notepen from '$lib/icons/notepen.svelte'
	import { onMount, tick } from 'svelte'
	import Slider from './elements/slider.svelte'

	import Swiper from 'swiper'
	import 'swiper/css'
	import { register } from 'swiper/element/bundle'
	// register Swiper custom elements
	register()

	let swiper: Swiper

	onMount(async () => {
		await tick()
		swiper = new Swiper('#swiper', {
			loop: true,
			speed: 1000,
			spaceBetween: 10,
			autoplay: {
				delay: 3000
			}
		})
		swiper.init()
	})

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

	let totalSlide = 3,
		currentSlide = 1

	const prevSlide = () => {
		if (swiper) {
			swiper.slidePrev()
		}
	}

	const playPause = () => {
		if (swiper) {
		}
	}

	const nextSlide = () => {
		if (swiper) {
			swiper.slideNext()
		}
	}
</script>

<div
	class="flex flex-col p-3 md:flex-row px-3 md:px-0 gap-4 md:gap-6 w-full justify-center max-w-7xl mt-11">
	<div
		class="relative shadow-lg w-full md:w-2/4 rounded-xl bg-white flex flex-col gap-5 items-center justify-center">
		<div id="swiper" class="swiper h-full w-full bg-gray-20 rounded-xl">
			<div class="swiper-wrapper bg-transparent">
				{#each Array(totalSlide).fill(1) as item, i}
					<Slider>
						<div class="flex flex-row justify-between py-10 px-8 mb-10 md:mb-0">
							<div class="flex flex-col gap-10">
								<p class="text-3xl font-bold text-white pr-10">
									성분 분석이 완료 되었습니다 결과를 확인하여 주세요
								</p>
								<button
									class="bg-white w-fit rounded-3xl md:mt-10 flex flex-row gap-4 items-center px-5 py-2">
									<span class="text-black">분석결과확인</span>
									<Fa icon={faChevronRight} />
								</button>
							</div>

							<div class="flex md:items-center">
								<Notepen />
							</div>
						</div>
					</Slider>
				{/each}
			</div>
		</div>

		<div
			class="absolute bottom-5 z-10 text-white flex flex-row px-10 items-center justify-between w-full">
			<div>{currentSlide} / {totalSlide}</div>
			<div class="flex flex-row px-3 py-2 gap-3 rounded-3xl bg-[#82e5de]">
				<button on:click={prevSlide}><Fa icon={faChevronLeft} /></button>
				<button on:click={playPause}><Fa icon={faPlay} /></button>
				<button on:click={nextSlide}><Fa icon={faChevronRight} /></button>
			</div>
		</div>
	</div>

	<div
		class="shadow-lg w-full md:w-2/4 px-5 py-10 rounded-xl bg-white flex flex-col gap-5 items-center justify-center">
		<div
			class="flex flex-row items-center justify-between border-b-2 border-primary-300 w-full pb-5">
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
						<td class="p-4 text-sm lg:text-xl"><a href="/">{item.desc}</a></td>
						<td class="p-4 text-gray-400 text-sm lg:text-lg w-36"> {item.date} </td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
