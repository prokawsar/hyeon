<script>
    import { Heading, P, Button } from 'flowbite-svelte';
    import {Section} from "flowbite-svelte-blocks";
    import MainTab from "$lib/components/view/pages/safetycert/MainTab.svelte";
    import HeroSafetyCert from "$lib/components/view/pages/safetycert/HeroSafetyCert.svelte";
</script>

<div class="text-center justify-center flex flex-col items-center w-full">
    <HeroSafetyCert/>
    <MainTab/>
</div>
