<script>
    import Fa from "svelte-fa";
    import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

    export let showOnPx = 150;
    let hidden = true;


    function scrollContainer() {
        return document.documentElement || document.body;
    }

    function handleOnScroll() {
        if (!scrollContainer()) {
            return;
        }

        if (scrollContainer().scrollTop > showOnPx) {
            hidden = false;
        } else {
            hidden = true;
        }
    }
</script>



<svelte:window on:scroll={handleOnScroll} />

<button on:click={() =>
				window.scrollTo({
					behavior: 'smooth',
					top: 0
				})}
        class="bg-[#787878] w-12 h-12 flex items-center justify-center p-2 rounded-full opacity-1 hidden:opacity-0 fixed bottom-10 right-10" class:hidden>
    <Fa icon={faArrowUp} class="text-white text-2xl" />
</button>

