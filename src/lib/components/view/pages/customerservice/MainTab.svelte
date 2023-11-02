<script>
    import {Tabs, TabItem, Heading, P, Span, Card} from 'flowbite-svelte';
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
    <Tabs style={"underline"} defaultClass="w-[100%] flex content-start items-start space-x-2 text-sm font-medium text-center text-primary-text border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 px-[10%]" contentClass="mt-8">
        <!-- NOTICE -->
        <TabItem open title="NOTICE" activeClasses="w-[100%] inline-block p-4 border-b-2 border-primary-text rounded-t-lg" >
            <div class="w-[100%] flex flex-col items-start px-4 sm:px-[10%]">

            </div>
        </TabItem>

        <!-- FAQ -->
        <TabItem open title="FAQ" activeClasses="w-[100%] inline-block p-4 border-b-2 border-primary-text rounded-t-lg" >
            <div class="w-[100%] flex flex-col items-start px-4 sm:px-[10%]">

            </div>
        </TabItem>

        <!-- Q&A -->
        <TabItem open title="Q&A" activeClasses="w-[100%] inline-block p-4 border-b-2 border-primary-text rounded-t-lg" >
            <div class="w-[100%] flex flex-col items-start px-4 sm:px-[10%]">

            </div>
        </TabItem>

        <!-- 인증관련정보 -->
        <TabItem open title="인증관련정보" activeClasses="w-[100%] inline-block p-4 border-b-2 border-primary-text rounded-t-lg" >
            <div class="w-[100%] flex flex-col items-start px-4 sm:px-[10%]">

            </div>
        </TabItem>


    </Tabs>
</div>

<svelte:window bind:innerWidth={screenSize} />

