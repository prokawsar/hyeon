<script lang="ts">
	import Fa from 'svelte-fa'
	import { faBars } from '@fortawesome/free-solid-svg-icons'

	const menus = ['one', 'two', 'three', 'four']
	let activeMenu = 'one'
</script>

<div class="flex flex-row w-full py-4 px-3 md:px-0 max-w-4xl">
	<div class="flex items-center mr-20 w-full h-full">
		<img src="img/logo.png" alt="logo" class="" />
	</div>
	<div class="hidden md:flex flex-row gap-12 items-center w-full justify-start">
		{#each menus as menu}
			<button
				on:click={() => (activeMenu = menu)}
				class={activeMenu == menu ? 'border-b-2 border-b-primary-400 text-primary-400' : ''}
				>{menu}</button
			>
		{/each}
		<div class="flex flex-row w-60 gap-2 justify-end">
			<button> sign in </button>
			<span>|</span>
			<button> sign up </button>
		</div>
	</div>
	<div class="flex items-center justify-end w-full">
		<Fa icon={faBars} size="1.2x" class="cursor-pointer" />
	</div>
</div>
