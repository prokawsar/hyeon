<script lang="ts">
	import Security from '$lib/icons/security.svelte'
</script>

<div class="flex flex-row gap-6 w-full justify-center max-w-4xl">
	<div class="shadow-md rounded-lg flex flex-col gap-3 items-center w-full justify-center h-56">
		<div class="bg-gray-200 rounded-full h-24 w-24">
			<Security />
		</div>
		<p>something</p>
	</div>
	<div class="shadow-md rounded-lg flex items-center w-full justify-center">
		<Security />
	</div>
	<div class="shadow-md rounded-lg flex items-center w-full justify-center">
		<Security />
	</div>
	<div class="shadow-md rounded-lg flex items-center w-full justify-center">
		<Security />
	</div>
</div>
