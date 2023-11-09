<script lang="ts">
	import Fa from 'svelte-fa'
	import LogoWhite from "$lib/icons/LogoWhite.svelte";
	import {P} from "flowbite-svelte";
	export let post: Post
</script>

<a class="w-full flex flex-col gap-3 p-6" href="/institution">
	<div class="relative flex justify-center text-white bg-primary-500 hover:bg-primary-400 w-full h-80 items-center rounded-2xl">
		<LogoWhite />
	</div>
	<P class="text-base text-4xl font-bold text-black">{post.title}</P>
	<P class="text-base text-sm text-black">{post.content}</P>
	<div class="flex flex-row justify-between">
		<P class="text-primary-300">{post.category}</P>
		<P class="text-gray-400">{post.createdAt}</P>
	</div>
</a>
