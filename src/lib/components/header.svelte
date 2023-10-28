<script lang="ts">
	import Fa from 'svelte-fa'
	import { faBars } from '@fortawesome/free-solid-svg-icons'
	import { slide } from 'svelte/transition'
	import {Button, Navbar, NavBrand, NavHamburger, NavLi, NavUl} from "flowbite-svelte";
	import {goto} from "$app/navigation";
	import {page} from "$app/stores";

	const menus = [
		{ name: '인증마크', url: '/safetycert' },
		{ name: '인증제품', url: '/certproduct' },
		{ name: '미인증제품', url: '/unsafeproducts' },
		{ name: '인증신청', url: '/safeproducts' },
		{ name: '고객서비스', url: '/customerservice' },
		{ name: '기관소개', url: '/institution' }
	]

	$: activeUrl = $page.url.pathname;
	let activeClass = 'text-xl md:text-sm xl:text-xl font-medium border-b-2 border-b-primary-400 text-primary-400 items-center';
	let nonActiveClass = 'text-xl md:text-sm xl:text-xl font-medium text-gray-700 hover:text-black items-center';

</script>
<div class="relative px-8">
	<Navbar class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b" >
		<NavBrand href="/">
			<img src="svg/logo.svg" class="mr-3 h-6 sm:h-9" alt="logo" />
		</NavBrand>
		<div class="flex md:order-2">
			<NavHamburger/>
			<Button size="sm">Get started</Button>
		</div>

		<NavUl {activeClass} {nonActiveClass} {activeUrl}>
			{#each menus as menu}
				<NavLi href={menu.url}>{menu.name}</NavLi>
			{/each}
		</NavUl>
	</Navbar>
</div>


<!--<div-->
<!--	class="flex flex-row w-full py-4 px-5 justify-between md:px-3 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">-->
<!--	<a class="flex items-center w-[35%] h-full" href="/">-->
<!--		<img src="svg/logo.svg" alt="logo" class="" />-->
<!--	</a>-->
<!--	<div class="hidden ml-1 md:flex flex-row gap-12 md:gap-3 lg:gap-12 items-center w-full justify-start">-->
<!--		{#each menus as menu}-->
<!--			<button-->
<!--				on:click={() => onMenuClick(menu)}-->
<!--				class="text-xl md:text-sm xl:text-xl font-medium {activeMenu === menu.name ? 'border-b-2 border-b-primary-400 text-primary-400' : 'text-gray-700 hover:text-black'}">{menu.name}</button>-->
<!--		{/each}-->
<!--	</div>-->
<!--	<div class="flex items-center justify-end w-[30%]">-->
<!--		<div class="hidden md:flex flex-row gap-3 text-sm font-normal">-->
<!--			<Button class="font-normal text-white bg-black rounded-full focus:outline-none" variant="outline" ripple>로그인</Button>-->
<!--		</div>-->
<!--		<div class="lg:hidden m-4"></div>-->
<!--		<button on:click={() => (showMobileMenu = !showMobileMenu)}>-->
<!--			<Fa icon={faBars} size="1.2x" class="cursor-pointer lg:hidden" />-->
<!--		</button>-->
<!--	</div>-->
<!--</div>-->
<!--{#if showMobileMenu}-->
<!--	<div-->
<!--		transition:slide={{ duration: 300, delay: 50 }}-->
<!--		class="absolute top-12 w-full bg-gray-20 z-10">-->
<!--		<div class="flex flex-col gap-2 w-full justify-start">-->
<!--			{#each menus as menu}-->
<!--				<button-->
<!--					on:click={() => (activeMenu = menu.name)}-->
<!--					class="text-base font-medium py-2 {activeMenu == menu.name-->
<!--						? 'border-b-2 border-b-primary-400 text-primary-400'-->
<!--						: 'text-gray-400 hover:text-black'}">{menu.name}</button>-->
<!--			{/each}-->
<!--		</div>-->
<!--	</div>-->
<!--{/if}-->
