<div id="nav-bar" class="fixed z-50 inset-x-0 ">
    <div class="container px-9 mx-auto">
        <!-- navigation -->
        <div id="navigation" class="flex justify-between items-center whitespace-nowrap py-3">
            <!-- logo -->
            <div class="w-12 md:w-full overflow-hidden">
                <a href="/" class="!w-48 block">
                    <span class="sr-only">Digital Self</span>
                    <img src="/assets/Digital Self.png" class="" alt="dijital self logo" />
                </a>
            </div>

            <!-- nav links -->
            <nav class="hidden 2xl:flex justify-center items-center space-x-5 text-white font-semibold text-p-sm py-4">
                <a href="/register?user_type=Group%20Manager">Manage Group</a>
                <a href="/register?user_type=Indivudual%20User">Control Your Career</a>
                <a href="/register?user_type=Challenge%20Manager">Lead challenges</a>
                <a href="#">upcoming challenges</a>
                <a href="/contact-us">support</a>
            </nav>

            <div id="actions" class="text-white text-p-sm space-x-5 items-center flex ml-10">

                <a href="/register"
                    class="border border-d-yellow hover:bg-d-yellow rounded-full px-6 py-2 hidden lg:block">Sign-up
                    Free</a>
                <a href="/login"
                    class="border border-d-yellow hover:bg-d-yellow rounded-full px-6 py-2 hidden md:block">Login</a>


                <button id="burger" type="button" class="text-d-yellow lg:hidden" aria-expanded="false">
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

        <nav id="navigation2"
            class="hidden lg:flex 2xl:hidden items-center space-x-5 text-white font-semibold text-p-sm my-4 ">
            <a href="/register?user_type=Group%20Manager">Manage Group</a>
            <a href="/register?user_type=Indivudual%20User">Control Your Career</a>
            <a href="/register?user_type=Challenge%20Manager">Lead Challenges</a>
            <a href="#">Upcoming Challenges</a>
            <a href="/contact-us">Support</a>
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
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" aria-hidden="true">
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
    </div>
</div>