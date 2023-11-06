<script lang="ts">
	import Fa from 'svelte-fa'
	import { faBars } from '@fortawesome/free-solid-svg-icons'
	import { slide } from 'svelte/transition'
	import {Button, DarkMode, Navbar, NavBrand, NavHamburger, NavLi, NavUl} from "flowbite-svelte";
	import {goto} from "$app/navigation";
	import {page} from "$app/stores";

	const menus = [
		{ name: '인증마크', url: '/safetycert' },
		{ name: '인증제품', url: '/safeproducts' },
		{ name: '미인증제품', url: '/unsafeproducts' },
		{ name: '인증신청', url: '/applycert' },
		{ name: '고객서비스', url: '/customerservice' },
		{ name: '기관소개', url: '/institution' }
	]

	$: activeUrl = $page.url.pathname;
	let activeClass = 'text-xl md:text-sm xl:text-xl font-medium text-primary-400 items-center';
	let nonActiveClass = 'text-xl md:text-sm xl:text-xl font-medium text-gray-700 hover:text-black items-center';
	let navLiActiveClass = 'text-xl md:text-sm xl:text-xl font-medium text-primary-400';
	let navLiNonActiveClass = 'text-xl md:text-sm xl:text-xl font-medium text-gray-700 hover:text-black';
</script>

<div class="relative px-8">
	<Navbar class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b" >
		<NavBrand href="/">
			<img src="svg/logo.svg" class="mr-3 h-6 sm:h-9" alt="logo" />
		</NavBrand>
		<div class="flex md:order-2">
			<NavHamburger/>
			<Button class="bg-[#191919] text-white rounded-full px-8" size="sm">로그인</Button>
<!--			<DarkMode class="ml-2"/>-->
		</div>
		<NavUl {activeClass} {nonActiveClass} {activeUrl}>
			{#each menus as menu}
				<NavLi activeClass={navLiActiveClass} nonActiveClass={navLiNonActiveClass} href={menu.url}><div class="flex {activeUrl === menu.url ? 'border-b-2 border-b-primary-400 text-primary-400' : 'text-gray-700 hover:text-black dark:text-white'}">{#if menu.name === '미인증제품'}<img src="/svg/report.svg" alt="report" class="mr-1"/>{/if}{menu.name}</div></NavLi>
			{/each}
		</NavUl>
	</Navbar>
</div>


