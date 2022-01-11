<x-app-layout title="contact us">
    <!-- hero section -->
    <div class="relative">
        <img src="/assets/contact-us-background.png" alt="Rectangle photo"
            class="absolute object-left-top h-full w-full object-cover" />
        <!-- overlay -->
        <div class="absolute bg-gradient-to-r from-[#000]/70 via-[#000]/70 to-[#000]/20 inset-0"></div>

        <div class="relative z-10 max-w-7xl mx-auto p-9">
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
        <div class="flex flex-col-reverse lg:flex-row max-w-7xl mx-auto mb-36 mt-28">
            <div class="flex justify-center items-center lg:px-9 lg:w-1/2 ">
                <form method="post" action="/contact-us" class="bg-gray-lv-1 w-[560px] p-12 pt-20 space-y-8">
                    @csrf
                    <label for="full-name" class="block">
                        <span class="text-p-sm">Full Name</span>
                        <input type="text" name="name" id="full-name"
                            class="w-full border p-3 mt-2 border-gray-300 @error('name') !border-red-500 @enderror">
                    </label>
                    <label for="E-mail" class="block">
                        <span class="text-p-sm">E-mail</span>
                        <input type="text" name="email" id="E-mail"
                            class="w-full border p-3 mt-2 border-gray-300 @error('email') !border-red-500 @enderror">
                    </label>
                    <label for="Subject" class="block">
                        <span class="text-p-sm">Subject</span>
                        <input type="text" name="subject" id="Subject"
                            class="w-full border p-3 mt-2 border-gray-300 @error('subject') !border-red-500 @enderror">
                    </label>
                    <label for="Message" class="block">
                        <span class="text-p-sm">Message</span>
                        <textarea name="message" id="Message"
                            class="w-full border p-3 mt-2 border-gray-300 @error('message') !border-red-500 @enderror"></textarea>
                    </label>
                    <button class="mt-6 bg-d-yellow text-white px-8 py-2 rounded-full">Send Message</button>
                </form>
            </div>
            <div class="flex justify-center items-center lg:w-1/2 px-9 mt-5 order-2 lg:order-1">
                <div class="pb-10 max-w-[576px] lg:text-left">
                    <h3 class="text-p md:text-h2 font-semibold text-black">Get In Touch</h3>
                    <span class="bg-dark-yellow ml-2 h-1.5 w-6 rounded-l-md inline-block"></span>
                    <span class="bg-dark-yellow ml-4 h-1.5 w-12 rounded-r-md inline-block"></span>

                    <div class="text-p-xs text-dark-gray md:text-p-sm font-normal leading-7 mt-9 space-y-6">
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
                                    <span class="block text-sm text-dark-gray">Call Anytime</span>
                                    <span class="block text-sm font-semibold text-dark-gray">+212 666 888 000</span>
                                </div>
                            </li>
                            <li class="flex items-center">
                                <img src="/assets/Vector2.png" alt="phone icon" />
                                <div class="ml-4">
                                    <span class="block text-sm text-dark-gray">Send Email</span>
                                    <span class="block text-sm font-semibold text-dark-gray">example@email.com</span>
                                </div>
                            </li>
                            <li class="flex items-center">
                                <img src="/assets/Vector3.png" alt="phone icon" />
                                <div class="ml-4">
                                    <span class="block text-sm text-dark-gray">Visit Office</span>
                                    <span class="block text-sm font-semibold text-dark-gray">80 Broklyn Street</span>
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