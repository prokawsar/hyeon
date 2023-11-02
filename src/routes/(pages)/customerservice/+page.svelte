<script>
    import { Heading, P, Button } from 'flowbite-svelte';
    import {Section} from "flowbite-svelte-blocks";
    import MainTab from "$lib/components/view/pages/customerservice/MainTab.svelte";
</script>

<div class="flex flex-col justify-center items-center w-full mx-auto">
    <div
            class="flex flex-col items-center md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl justify-center w-full">
        <MainTab/>
    </div>
</div>

