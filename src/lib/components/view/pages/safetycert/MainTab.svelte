<script>
    import {Tabs, TabItem, Heading, P} from 'flowbite-svelte';
    import Spacer from "$lib/components/elements/Spacer.svelte";
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

        <!-- 인증소개 -->
        <TabItem title="인증마크소개" activeClasses="w-[100%] inline-block p-4 border-b-2 border-primary-text rounded-t-lg" >
            <div class="w-[100%] flex flex-col items-start px-4 pb-8 sm:px-[10%]">
                <P class="text-2xl">Pet Safe 인증소개</P>
                <div class="border-gray-30 border-2 rounded-2xl w-full p-6 mt-6 flex flex-col sm:flex-row">
                    <div class="w-full sm:p-4">
                        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight whitespace-pre-line text-left">
                            한국반려동물안전인증센터(등록번호: 110111-8259255)에서 주최한 국제공인분석기관(와이에스환경기술원)의 엄격한테스트를 통과한 안전하고 신뢰할 수 있는 제품과 서비스에만 수여하는 반려동물 생활용품 안전인증 마크입니다.

                            펫세이프 인증은 해당 제품 또는 서비스가 반려동물에게 안전하며 품질이 검증되었다는 표시입니다. 반려동물 보호자들에게 사랑하는 반려동물을 위한 안전하고 신뢰할 수 있는 제품 및 서비스를 식별하는 데 도움을드리기 위해서 도입되었습니다. 또한, 펫세이프 인증은 반려동물 보호자 및 관련 기업에게 반려동물 생활 환경과 관련된다양한 측면을 고려하여 반려동물의 안전, 건강 그리고 행복을 증진시키기 위한 가이드라인을 제공하며 지속적으로안전한 제품과 서비스를 개발하도록 계도합니다.
                        </p>
                    </div>
                </div>

                <Spacer h="50"/>

                <P class="text-2xl">Pet Safe 인증신청 절차</P>
                <div class="border-gray-30 border-2 rounded-2xl w-full p-6 mt-6 flex flex-col sm:flex-row">
                    <div class="w-full sm:p-4">
                        <img src="/img/cert_procedure.png" alt="cert_procedure" />
                    </div>
                </div>

                <Spacer h="50"/>

                <P class="text-2xl">Pet Safe 인증신청 절차</P>
                <div class="border-gray-30 border-2 rounded-2xl w-full p-6 mt-6 flex flex-col sm:flex-row">
                    <div class="w-full sm:p-4 flex flex-col">
                        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight whitespace-pre-line text-left">
                            인증마크는 아래 샘플 중 제품종류, 포장방법, 패키지디자인, 패키지색상 등에 따라 선택할 수 있습니다.
                        </p>
                        <Spacer h="10"/>
                        <div class="w-full sm:p-4">
                            <img src="/img/safetymark_sample.png" alt="cert_procedure" />
                        </div>
                    </div>
                </div>
            </div>
        </TabItem>


    </Tabs>
</div>

<svelte:window bind:innerWidth={screenSize} />

