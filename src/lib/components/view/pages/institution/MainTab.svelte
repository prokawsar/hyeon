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
        <TabItem open title="인증기관소개" activeClasses="w-[100%] inline-block p-4 border-b-2 border-primary-text rounded-t-lg" >
            <div class="w-[100%] flex flex-col items-start px-4 sm:px-[10%]">
                <div class="flex justify-center items-center relative">
                    <img src="/svg/grid.svg" alt="grid" class="h-40 mb-3"/>
                    <img src="/svg/kpscc.svg" alt="kpscc" class="absolute w-[60%] py-2"/>
                </div>

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

        <!-- Another Tab-->
        <TabItem title="분석기관소개" activeClasses="w-[100%] inline-block p-4 border-b-2 border-primary-text rounded-t-lg" >
            <div class="w-[100%] flex flex-col items-start px-4 sm:px-[10%]">
                <div class="flex justify-center items-center relative">
                    <img src="/svg/grid.svg" alt="grid" class="h-40 mb-3"/>
                    <img src="/svg/ysa_logo.svg" alt="ysa" class="absolute w-[60%] py-2"/>
                </div>

                <div class="py-2 md:py-6"></div>

                <!--와이에스환경기술연구원-->
                <P class="text-2xl">'와이에스환경기술연구원'은</P>
                <P class="text-3xl"><Span class="text-primary-text" highlgiht>KOLAS 인정 국제공인 시험기관</Span>입니다.</P>
                <P class="pt-6">대한민국 국가기술표준원 한국인정기구(KOLAS)로부터 인정받은 국제공인시험기관(제364호)입니다.</P>
                <P class="">인증된 시험법에 따라 환경/화학/의료 분야에서 시험분석, 품질검사, 품질보증 서비스를 제공하고 있습니다.</P>
                <P class="">최고의 연구진과 최첨단 장비들을 기반으로 신속하고 정확하며, 무엇보다 신뢰할 수 있는 정밀한 시험분석결과를 제공하도록 최선을 다하겠습니다.</P>

                <div class="py-5 md:py-10"></div>

                <div class="grid grid-cols-2 gap-0.5 md:grid-cols-4 md:gap-3">
                    <img src="/img/institution_intro_one.png" alt="institution_intro_one">
                    <img src="/img/institution_intro_two.png" alt="institution_intro_one">
                    <img src="/img/institution_intro_three.png" alt="institution_intro_one">
                    <img src="/img/institution_intro_four.png" alt="institution_intro_one">
                </div>

                <div class="py-5 md:py-10"></div>

                <div class="border-gray-30 border-2 rounded-2xl w-full p-6 flex flex-col sm:flex-row">
                    <div class="w-full p-1 sm:p-4">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">KOLAS 국제공인 시험기관 이란?</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight whitespace-pre-line">
                            국가표준제도 확립 및 산업표준화제도 운영, 시험기관 및 검사기관 인정제도의 운영,
                            표준화 및 국가간 국제기구 협력 및 교류에 대한 업무를 권장하는 국가기술표준원이 운영하는 조직입니다.
                        </p>
                    </div>
                    <div class="p-6">
                        <img src="/svg/kolas_logo.svg" alt="KOLAS logo" class="w-[200px] object-cover"/>
                    </div>
                </div>

                <div class="py-5 md:py-10"></div>



                <div class="border-gray-30 border-2 rounded-2xl w-full p-6 flex flex-col sm:flex-row">
                    <div class="w-full p-1 sm:p-4">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">KOLAS 국제공인 시험기관 이란?</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight whitespace-pre-line">
                            KOLAS인정은 시험기관의 품질 시스템/ 기술능력평가/ 특정분야에 대한 시험능력이
                            있다는 것을 공식적으로 인정하는 제도를 말하며 국제공인시험기관 인증으로 ILAC과 MRA된
                            국가에서 소급적용을 받을 수 있습니다.
                        </p>
                        <div class="justify-center items-center self-center w-full my-4">
                            <div class="flex justify-center">
                                <div class="flex items-center"><img src="/svg/checked.svg" alt="checked" class="h-8"/>ILAC 상호인정</div>
                                <div class="px-2"></div>
                                <div class="flex items-center"><img src="/svg/checked.svg" alt="checked" class="h-8"/>ISO/IEC 17025 적합성평가</div>
                            </div>
                            <div class="flex h-[100px] md:h-[130px] justify-center my-6">
                                <img src="/img/kolas_diagram.png" alt="KOLAS diagram" />
                            </div>
                        </div>
                    </div>
                    <div class="flex p-6 justify-center">
                        <img src="/img/cert_example.png" alt="KOLAS logo" class="w-[300px] object-cover "/>
                    </div>
                </div>
            </div>


        </TabItem>
    </Tabs>
</div>

<svelte:window bind:innerWidth={screenSize} />

