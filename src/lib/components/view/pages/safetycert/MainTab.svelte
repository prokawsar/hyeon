<script>
    import {Tabs, TabItem} from 'flowbite-svelte';
    $: screenSize =  window.innerWidth;

</script>
<div class="w-[100%]">
    <Tabs style={"underline"} defaultClass="w-[100%] flex content-start items-start space-x-2 text-sm font-medium text-center text-primary-text border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 px-[10%]" contentClass="mt-8">
        <!-- 인증품목 -->
        <TabItem open title="인증품목" activeClasses="w-[100%] inline-block p-4 border-b-2 border-primary-text rounded-t-lg" >
            <div class="w-[100%] flex flex-col items-start px-4 sm:px-[10%] pb-4">
                <img src="/svg/cert_products.svg"/>

            </div>
        </TabItem>

        <!-- 인증마크소개 -->
        <TabItem title="인증마크소개" activeClasses="w-[100%] inline-block p-4 border-b-2 border-primary-text rounded-t-lg" >
            <div class="w-[100%] flex flex-col items-start px-4 sm:px-[10%]">

            </div>
        </TabItem>

        <!-- 인증절차 -->
        <TabItem title="인증절차" activeClasses="w-[100%] inline-block p-4 border-b-2 border-primary-text rounded-t-lg" >
            <div class="w-[100%] flex flex-col items-start px-4 sm:px-[10%]">

            </div>
        </TabItem>

    </Tabs>
</div>

<svelte:window bind:innerWidth={screenSize} />

