<x-app-layout>
    <!-- hero section -->
    <div class="relative">
        <img src="/assets/about-us-hero-image.png" alt="Rectangle photo"
            class="absolute object-left-top h-full w-full object-cover " />
        <!-- overlay -->
        <div class="absolute bg-gradient-to-r from-[#000]/70 via-[#000]/70 to-[#000]/20 inset-0"></div>

        <div class="relative z-10 container mx-auto p-9">
            <!-- navigation -->
            <div class="flex justify-between items-center whitespace-nowrap">
                <!-- logo -->
                <a href="/">
                    <span class="sr-only">Digital Self</span>
                    <img src="/assets/Digital Self.png" alt="dijital self logo" />
                </a>

                <!-- nav links -->
                <nav class="hidden 2xl:flex justify-center items-center space-x-5 text-white text-p-sm py-4">
                    <a href="#">Manage Group</a>
                    <a href="#">Control Your Career</a>
                    <a href="#">Lead challenges</a>
                    <a href="#">upcoming challenges</a>
                    <a href="#">support</a>
                </nav>

                <div class="text-white text-p-sm space-x-5 items-center flex">
                    <button class="border border-d-yellow hover:bg-d-yellow rounded-full px-6 py-2 hidden lg:block">free
                        sign-up</button>
                    <button class="border border-d-yellow hover:bg-d-yellow rounded-full px-6 py-2">login</button>

                    <button type="button" class="text-d-yellow lg:hidden" aria-expanded="false">
                        <span class="sr-only">Open menu</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <!-- mobile menu button -->
            </div>
            <!-- nav links for medium desplay -->

            <nav class="hidden md:flex 2xl:hidden items-center space-x-5  text-white my-4">
                <a href="#">Manage Group</a>
                <a href="#">Control Your Career</a>
                <a href="#">Lead challenges</a>
                <a href="#">upcoming challenges</a>
                <a href="#">support</a>
            </nav>

            <!-- navigation for mobile -->
            <div class="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden hidden">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div class="pt-5 pb-6 px-5">
                        <div class="flex items-center justify-between">
                            <div class="-mr-2">
                                <button type="button"
                                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span class="sr-only">Close menu</span>
                                    <!-- Heroicon name: outline/x -->
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="py-6 px-5 space-y-6">
                        <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                            <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Pricing</a>
                        </div>
                        <div>
                            <a href="#"
                                class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-d-yellow hover:bg-d-yellow/50">Sign
                                up</a>
                            <p class="mt-6 text-center text-base font-medium text-gray-500">
                                Existing customer?
                                <a href="#" class="text-d-yellow hover:text-d-yellow/50">Sign in</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- hero content -->
            <div class=" relative my-24">
                <!-- description -->
                <span class="text-d-yellow font-bold text-p-sm">About Us</span>
                <h1 class="font-medium text-white text-h2 md:text-h1">
                    Learn More About Our Services
                </h1>
            </div>
        </div>
    </div>
    <!-- vedio section-->
    <div class="max-w-[601px] mx-auto my-20 px-10">
        <div class="text-p text-center">
            <p>
                This company exist and was formed to help people gain CAREER CLARITY and CAREER DIRECTION. Our team
                strives
                to be the coaching resource that we wish we had in life. This video explains Why I Became A Coach...
            </p>
            <span class="text-d-yellow mt-4 inline-block">watch a video</span>
        </div>
        <div class="mt-9">
            <img src="/assets/watch-vedio-image.png" alt="">
        </div>
    </div>
    <!-- our mission -->
    <div class="relative">
        <img src="/assets/our-mission-image.png" class="absolute object-top h-full w-full object-cover " />
        <div class="absolute bg-[#000]/70 inset-0"></div>
        <div class="relative py-20 flex flex-col lg:flex-row items-center gap-14 justify-center">
            <div
                class="border border-white flex justify-center items-center flex-col text-center max-w-[282px] px-5 py-5 min-h-[277px]">
                <h4 class="text-d-yellow text-p">Our Mission</h4>
                <p class="text-white mt-4 text-p-sm leading-7">
                    "Transform professional lives to achieve personal and business victories through compelling
                    instruction
                    and mentorship”
                </p>
            </div>
            <div
                class="border border-white flex justify-center items-center flex-col text-center max-w-[282px] px-5 py-5 min-h-[277px]">
                <h4 class="text-d-yellow text-p ">Our Promise</h4>
                <p class="text-white mt-4 text-p-sm leading-7">
                    To Patiently Promote the Growth and Learning Experience of All
                </p>
            </div>
            <div
                class="border border-white flex justify-center items-center flex-col text-center max-w-[282px] px-5 py-5 min-h-[277px]">
                <h4 class="text-d-yellow text-p">Our Mission</h4>
                <p class="text-white mt-4 text-p-sm leading-7">
                    "Transform professional lives to achieve personal and business victories through compelling
                    instruction
                    and mentorship”
                </p>
            </div>
        </div>
    </div>
    <!-- about us -->
    <div class="flex flex-col lg:flex-row container mx-auto px-9 mb-28 mt-28">
        <div class="flex justify-center items-center lg:w-1/2 mt-5 order-2 lg:order-1">
            <div class="pb-10 max-w-[576px] lg:text-left">
                <h3 class="text-p md:text-h2 font-semibold text-black">About us</h3>
                <span class="bg-yellow-darck ml-2 h-1.5 w-6 rounded-l-md inline-block"></span>
                <span class="bg-yellow-darck ml-4 h-1.5 w-12 rounded-r-md inline-block"></span>

                <div class="text-p-xs md:text-p-sm font-normal mt-8 leading-7">
                    <p>
                        <b>My Digital Truth App,</b> provides career development, digital optimization and specialized
                        coaching services to individuals, organized groups, business organizations.
                    </p>
                    <p>
                        MDS specializes in assisting professionals in the discovery, definition and execution strategy
                        of
                        their career niches and professional development.
                    </p>
                    <p>
                        MDS works with business owners and departments to fully automate and digitize key processes
                        allowing
                        for a simplified, synchronized and turn-key operation.
                    </p>
                    <p>
                        Overall, the company coaching services will help identify, define and employ optimal business
                        productivity and career management techniques for sustainable, long-term success!
                    </p>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-1/2 lg:pl-10 flex justify-center items-center order-1 lg:order-2">
            <img src="/assets/about_img.png" alt="why hiring us image" />
        </div>
    </div>

    <!-- our team -->
    <div class="relative">
        <div class="flex flex-wrap">
            <div class="w-full lg:w-1/2">
                <img src="/assets/founder1.png" class="w-full h-full object-cover" alt="founder">
            </div>
            <div class="w-full lg:w-1/2 px-8 bg-gray-lv-1 flex items-center justify-center">
                <div class="max-w-[592px] my-7 ">
                    <h3 class="font-bold text-p text-black">Full name, Founder</h3>
                    <p class="font-bold text-p-xs mt-4 text-black-gray">PROFESSIONAL FINANCIAL PROFESSIONAL FINANCIAL
                        PROFESSIONAL FINANCIAL</p>
                    <p class="font-normal text-black-gray text-p-sm leading-7 mt-3">
                        As a 20+ year financial professional, I provide customized year-round tax planning strategies to
                        clients which minimize tax liabilities for sole proprietors, LLCs, PLCs and corporations. My
                        company
                        assists you in identifying and taking advantage of available legal tax deductions and tax
                        credits
                        applicable to your current financial situation and future financial goals. Implementing an
                        effective
                        and fluid tax plan yields huge tax savings and drastically reduces potential tax overpayments.
                    </p>
                    <p class="font-normal text-black-gray text-p-sm leading-7 mt-3">
                        Do you have questions about a tax situation with the IRS or your state revenue office? We are
                        happy
                        to provide a free 20 minute consultation to review your issue and address your questions. .
                    </p>
                    <button class="mt-6 bg-d-yellow text-white px-8 py-2 rounded-full">Request challenge</button>
                </div>
            </div>
        </div>
    </div>
    <!-- our team -->
    <div class="relative">
        <div class="flex flex-wrap">
            <div class="w-full lg:w-1/2 px-8 bg-gray-lv-1 order-2 lg:order-1 flex items-center justify-center">
                <div class="max-w-[592px] my-7 ">
                    <h3 class="font-bold text-p text-black">Full name, Founder</h3>
                    <p class="font-bold text-p-xs mt-4 text-black-gray">PROFESSIONAL FINANCIAL PROFESSIONAL FINANCIAL
                        PROFESSIONAL FINANCIAL</p>
                    <p class="font-normal text-black-gray text-p-sm leading-7 mt-3">
                        As a 20+ year financial professional, I provide customized year-round tax planning strategies to
                        clients which minimize tax liabilities for sole proprietors, LLCs, PLCs and corporations. My
                        company
                        assists you in identifying and taking advantage of available legal tax deductions and tax
                        credits
                        applicable to your current financial situation and future financial goals. Implementing an
                        effective
                        and fluid tax plan yields huge tax savings and drastically reduces potential tax overpayments.
                    </p>
                    <p class="font-normal text-black-gray text-p-sm leading-7 mt-3">
                        Do you have questions about a tax situation with the IRS or your state revenue office? We are
                        happy
                        to provide a free 20 minute consultation to review your issue and address your questions. .
                    </p>
                    <button class="mt-6 bg-d-yellow text-white px-8 py-2 rounded-full">Request challenge</button>
                </div>
            </div>
            <div class="w-full lg:w-1/2 order-1 lg:order-2">
                <img src="/assets/founder2.png" class="w-full h-full object-cover" alt="founder">
            </div>
        </div>
    </div>
</x-app-layout>