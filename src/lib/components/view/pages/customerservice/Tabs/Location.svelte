<script>
    import {P} from "flowbite-svelte";
    import Spacer from "$lib/components/elements/Spacer.svelte";
    import {onMount} from "svelte";
    import Map from "$lib/components/view/pages/customerservice/Tabs/Map.svelte";
    export let ready;
</script>

<!--<svelte:head>-->
<!--    <script defer async charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>-->
<!--</svelte:head>-->

<div class="w-[100%] flex flex-col items-start px-4 pb-8 sm:px-[10%]">
    <P class="text-2xl">찾아오시는 길</P>
    <div class="border-gray-30 border-2 rounded-2xl w-full p-6 mt-6 flex flex-col sm:flex-row">
        <!--{ #if ready }-->
        <!--    <Map/>-->
        <!--{ /if }-->
    </div>
</div>


