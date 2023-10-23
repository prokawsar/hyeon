<script lang="ts">
	import Fa from 'svelte-fa'
	import { faBars } from '@fortawesome/free-solid-svg-icons'

	const menus = ['one', 'two', 'three', 'four']
	let activeMenu = 'one'
</script>

<div class="flex flex-row w-full py-4 max-w-4xl">
	<div class="flex items-center mr-20">
		<img src="img/logo.png" alt="logo" />
	</div>
	<div class="flex flex-row gap-12 items-center justify-start">
		{#each menus as menu}
			<button
				on:click={() => (activeMenu = menu)}
				class={activeMenu == menu ? 'border-b-2 border-b-primary-400 text-primary-400' : ''}
				>{menu}</button
			>
		{/each}
	</div>
	<div class="flex flex-row gap-2 w-full items-center justify-end">
		<button> sign in </button>
		<span>|</span>
		<button> sign up </button>
		<Fa icon={faBars} size="1.2x" class="ml-14 cursor-pointer" />
	</div>
</div>
