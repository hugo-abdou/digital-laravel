<x-app-layout>
    <!-- hero section -->
    <div class="relative">
        <img src="/assets/contact-us-background.png" alt="Rectangle photo"
            class="absolute object-left-top h-full w-full object-cover" />
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
                <span class="text-d-yellow font-bold text-p-sm">Contact Us</span>
                <h1 class="font-medium text-white text-h2 md:text-h1">
                    Do you have any question ?
                </h1>
            </div>
        </div>
    </div>
    <!-- Get In Touch -->
    <div>
        <div class="flex flex-col-reverse lg:flex-row container mx-auto mb-36 mt-28">
            <div class="flex justify-center items-center lg:px-9 lg:w-1/2 ">
                <div class="bg-gray-lv-1 w-[560px] p-12 pt-20 space-y-8">
                    <label for="full-name" class="block">
                        <span class="text-p-sm">Full Name</span>
                        <input type="text" id="full-name" class="w-full border p-3 mt-2">
                    </label>
                    <label for="E-mail" class="block">
                        <span class="text-p-sm">E-mail</span>
                        <input type="text" id="E-mail" class="w-full border p-3 mt-2">
                    </label>
                    <label for="Subject" class="block">
                        <span class="text-p-sm">Subject</span>
                        <input type="text" id="Subject" class="w-full border p-3 mt-2">
                    </label>
                    <label for="Message" class="block">
                        <span class="text-p-sm">Message</span>
                        <textarea type="text" id="Message" class="w-full border p-3 mt-2"></textarea>
                    </label>
                    <button class="mt-6 bg-d-yellow text-white px-8 py-2 rounded-full">Send Message</button>
                </div>
            </div>
            <div class="flex justify-center items-center lg:w-1/2 px-9 mt-5 order-2 lg:order-1">
                <div class="pb-10 max-w-[576px] lg:text-left">
                    <h3 class="text-p md:text-h2 font-semibold text-black">Get In Touch</h3>
                    <span class="bg-yellow-darck ml-2 h-1.5 w-6 rounded-l-md inline-block"></span>
                    <span class="bg-yellow-darck ml-4 h-1.5 w-12 rounded-r-md inline-block"></span>

                    <div class="text-p-xs md:text-p-sm font-normal leading-7 mt-9 space-y-6">
                        <p>
                            <b>While the online courses are self-directed, we are definitely real people behind the
                                scenes
                                continually improving content!</b> Have any questions or feedback at all? Don't hesitate
                            to
                            reach out and let us try to answer your questions or take action on your suggestions.
                        </p>
                        <p>
                            <b>We want you and your organization to succeed.</b> Feel like you need some combination of
                            self-directed learning but also some <b>one-on-one mentorship</b> and <b>group coaching?</b>
                            Let's design a solution that fits your experience and goals.
                        </p>
                    </div>
                    <div class="w-auto mt-4 lg:text-left">
                        <span class="font-bold text-p-sm">Follow us:</span>
                        <ul class="mt-5 space-y-3 w-full">
                            <li class="flex items-center">
                                <img src="/assets/Vector1.png" alt="phone icon" />
                                <div class="ml-4">
                                    <span class="block text-sm text-black-gray">Call Anytime</span>
                                    <span class="block text-sm font-semibold text-black-gray">+212 666 888 000</span>
                                </div>
                            </li>
                            <li class="flex items-center">
                                <img src="/assets/Vector2.png" alt="phone icon" />
                                <div class="ml-4">
                                    <span class="block text-sm text-black-gray">Send Email</span>
                                    <span class="block text-sm font-semibold text-black-gray">example@email.com</span>
                                </div>
                            </li>
                            <li class="flex items-center">
                                <img src="/assets/Vector3.png" alt="phone icon" />
                                <div class="ml-4">
                                    <span class="block text-sm text-black-gray">Visit Office</span>
                                    <span class="block text-sm font-semibold text-black-gray">80 Broklyn Street</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <span class="w-full h-5 bg-d-yellow block"></span>
    </div>
</x-app-layout>