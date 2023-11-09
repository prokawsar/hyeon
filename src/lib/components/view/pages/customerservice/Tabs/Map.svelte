<script>

    let container;
    let map;

    import { onMount } from 'svelte';

    onMount(async () => {
        container = new daum.roughmap.Lander({
            "timestamp" : "1699523154575",
            "key" : "2grsa",
            "mapWidth" : "640",
            "mapHeight" : "360"
        }).render();
    });
</script>

<div class="w-full h-80">
    <div bind:this={container} id="daumRoughmapContainer1699523154575" class="root_daum_roughmap root_daum_roughmap_landing"></div>
</div>

