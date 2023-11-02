<script>
    import { Heading, P, Button } from 'flowbite-svelte';
    import {Section} from "flowbite-svelte-blocks";
    import MainTab from "$lib/components/view/pages/safetycert/MainTab.svelte";
</script>

<div class="text-center justify-center flex flex-col items-center w-full">
    <div class="flex bg-primary-hero w-full h-[250px] items-center px-[10%] justify-between">
        <div class="text-white font-bold text-xl">인증품목을 확인해보세요</div>
        <img src="/svg/safety_cert_hero_icon.svg" alt="safetycerticon" class="h-[180px]"/>
    </div>
    <MainTab/>

</div>
