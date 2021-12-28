<div class="fixed z-50 inset-x-0 container px-9 mx-auto">
    <!-- navigation -->
    <div class="flex justify-between items-center whitespace-nowrap py-3">
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
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
        <!-- mobile menu button -->
    </div>
    <!-- nav links for medium desplay -->

    <nav class="hidden md:flex 2xl:hidden items-center space-x-5 text-white my-4">
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