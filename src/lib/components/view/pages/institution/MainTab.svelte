<script>
    import {Tabs, TabItem, Heading, P, Span} from 'flowbite-svelte';
    const content = [
        {
            title: `반려동물의<br/>안전과 행복 증진`,
            text: `한국반려동물안전인증센터는,<br/>반려동물의  안전과 행복을 우선으로 생각하며, 책임감 있는 마음으로<br/>임합니다.`
        },
        {
            title: `안전한<br/>반려동물문화<br/>구축`,
            text: `한국반려동물안전인증센터는,<br/>반려동물의 안전과 보호에 대한 인식을 높여 안전한 반려동물 문화를 조성<br/>하고자 합니다.`
        },
        {
            title: `전문성과<br/>신뢰도 있는 정보<br/>및 교육제공`,
            text: `한국반려동물안전인증센터는,<br/>반려동물 관련 기업과 보호자에게 필요한 교육과 정보를 제공하여<br/>반려동물의 삶을 향상 시키고자 합니다.`
        },
        {
            title: `연구 및 개선`,
            text: `한국반려동물안전인증센터는,<br/>인공지능을 적극 활용하여 반려동물의 안전 및 복지 분야를 연구하며<br/>개선 할 것 입니다.`
        },
    ];
    $: screenSize =  window.innerWidth;

</script>
<div class="w-[100%]">
    <Tabs style={"underline"} defaultClass="w-[100%] flex content-start items-start space-x-2 text-sm font-medium text-center text-primary-text border-b border-gray-200 dark:text-gray-400 dark:border-gray-700" contentClass="mt-8">
        <TabItem open title="인증기관소개" activeClasses="w-[100%] inline-block p-4 border-b-2 border-primary-text rounded-t-lg" >
            <div class="w-[100%] flex flex-col items-start px-4 sm:px-0">
                <img src="/svg/kpscc.svg" alt="KPSCC" class="h-40 mb-3">

                <div class="py-6"></div>

                <!--About Us-->
                <Heading tag="h4" color="text-primary-text" class="my-2">ABOUT US</Heading>
                <div class="w-full h-[2px] bg-zinc-300 my-3"></div>
                <P class="py-[40px]">한국반려동물안전인증센터는 <Span class="text-primary-text" highlgiht>반려동물 관련 제품 및 서비스의 안전성을 평가하고 검증</Span>합니다.
                <br/>본 센터의 안전인증테스트를 통과한 제품 및 서비스에 한해 PetSafe 안전인증마크를 부여하고 있습니다.</P>

                <div class="py-10"></div>

                <!--Our Mission-->
                <Heading tag="h4" color="text-primary-text" class="my-2">OUR MISSION</Heading>
                <div class="w-full h-[2px] bg-zinc-300 my-3"></div>
                {#each content as item}
                    <div class="flex justify-center items-center py-[40px] flex-col md:flex-row">
                        <div class="flex flex justify-center items-center ">

                            <div class="w-[210px] h-[210px] rounded-full border-8 border-teal-500 text-center flex items-center justify-center">
                                <P align="center">{@html item.title}</P>
                            </div>
                            {#if screenSize > 768}
                                <div class="w-[70px] h-[6px] bg-teal-500 translate-x-[-1px]"></div>
                                <div class="w-[12.14px] h-[12.18px] bg-teal-500 rounded-full translate-x-[-2px]"></div>
                            {/if}
                        </div>
                        <P class="ml-6 mt-6 sm:mt-0">{@html item.text}</P>
                    </div>
                {/each}
            </div>


        </TabItem>
        <TabItem title="분석기관소개" activeClasses="inline-block p-4 border-b-2 border-primary-text rounded-t-lg">
            <p class="text-sm text-gray-500 dark:text-gray-400">
                <b>Profile:</b>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </TabItem>
    </Tabs>
</div>

<svelte:window bind:innerWidth={screenSize} />

