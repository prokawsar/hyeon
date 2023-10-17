<script lang="ts">
	import Fa from 'svelte-fa'
	import { faBars } from '@fortawesome/free-solid-svg-icons'

	const menus = ['one', 'two', 'three', 'four']
</script>

<div class="flex flex-row w-full justify-between py-4">
	<div class="flex items-center">
		<img src="img/logo.png" alt="logo" />
	</div>
	<div class="flex flex-row gap-5 items-center">
		{#each menus as menu}
			<span>{menu}</span>
		{/each}
	</div>
	<div class="flex items-center">
		<Fa icon={faBars} size="1.2x" />
	</div>
</div>
