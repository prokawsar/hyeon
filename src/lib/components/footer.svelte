<script>
	import Fa from 'svelte-fa'
	import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
</script>

<div class="flex flex-col items-center w-full mt-11">
	<div
		class="flex w-full mb-2 px-5 md:px-0 justify-end md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
		<button
			on:click={() =>
				window.scrollTo({
					behavior: 'smooth',
					top: 0
				})}
			class="bg-[#787878] w-8 flex justify-center p-2 rounded-full">
			<Fa icon={faArrowUp} class="text-white" />
		</button>
	</div>

	<div class="bg-gray-200 flex w-full justify-center py-2">
		<div
			class="flex flex-row px-5 md:px-0 w-full items-center justify-between md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
			<div
				class="flex flex-row gap-1 md:gap-3 text-xs md:text-base justify-center max-w-7xl text-gray-400">
				<a href="/" class="text-gray-400">회사소개</a> |
				<a href="/" class="text-gray-400">회사소개</a> |
				<a href="/" class="text-gray-400">회사소개</a>
			</div>
			<div class="flex flex-row justify-center max-w-7xl">
				<select class="px-2 md:px-5 bg-transparent text-xs md:text-base">
					<option>Select</option>
					<option>Select</option>
					<option>Select</option>
				</select>
			</div>
		</div>
	</div>
	<div class="flex flex-row w-full gap-3 px-5 md:px-0 justify-center">
		<div
			class="flex flex-col gap-10 md:flex-row justify-between py-10 w-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
			<div class="flex flex-col gap-5 flex-1">
				<div>
					<img src="/svg/footer_petsafe.svg" alt="footer petsafe" class="" />
				</div>

				<p class="text-sm text-gray-400">
					서울시 종로구 돈화문로 88-1, 3층 40호 (와룡동, 유디빌딩) 등록번호: 000-01-02345 TEL:
					02-1234-5678 FAX: 02-000-0000 E-mail: petsafe.co.kr@petsafe.co.kr Copyright © 2023
					by한국반려동물안전인증센터 www.petsafe.co.kr All Rights Reserved.
				</p>
			</div>

			<div class="flex-1 flex w-full items-end justify-center md:flex-row p-1 md:w-fit">
				<img src="/svg/kolas_logo.svg" alt="footer logo" class="lg:h-12 m-1" />
				<img src="/svg/ysu_logo.svg" alt="footer logo" class="lg:h-12 m-1" />
				<img src="/svg/ysa_logo.svg" alt="footer logo" class="lg:h-12 m-1" />
			</div>
		</div>
	</div>
</div>
