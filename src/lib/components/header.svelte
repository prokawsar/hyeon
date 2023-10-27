<script lang="ts">
	import Fa from 'svelte-fa'
	import { faBars } from '@fortawesome/free-solid-svg-icons'

	const menus = [
		{ name: '분석기관', url: '/' },
		{ name: '인증센터', url: '/' },
		{ name: '안전인증', url: '/' },
		{ name: '커뮤니티', url: '/' }
	]
	let activeMenu = '분석기관'
</script>

<div
	class="flex flex-row w-full py-4 px-5 justify-between md:px-3 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
	<a class="flex items-center w-[35%] h-full" href="/">
		<img src="img/logo.png" alt="logo" class="" />
	</a>
	<div class="hidden md:flex flex-row gap-12 items-center w-full justify-start">
		{#each menus as menu}
			<button
				on:click={() => (activeMenu = menu.name)}
				class="text-xl font-medium {activeMenu == menu.name
					? 'border-b-2 border-b-primary-400 text-primary-400'
					: 'text-gray-400 hover:text-black'}">{menu.name}</button>
		{/each}
		<!-- <div class="flex flex-row w-60 gap-2 justify-end">
			<button> sign in </button>
			<span>|</span>
			<button> sign up </button>
		</div> -->
	</div>
	<div class="flex items-center justify-end w-[30%]">
		<div class="hidden md:flex flex-row gap-3 text-sm font-normal">
			<button> 로그인 </button>
			<span>|</span>
			<button> 회원가입 </button>
		</div>
		<Fa icon={faBars} size="1.2x" class="cursor-pointer sm:hidden" />
	</div>
</div>
