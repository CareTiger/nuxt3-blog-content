<template>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <nuxt-link to="/blog" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">My Blog</span>
            </nuxt-link>

            <!-- non-mobile menu-->
            <div class="w-auto" id="navbar-default">
                <ul class="flex flex-row p-4 mt-4 space-x-2 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                    <nuxt-link to="/" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</nuxt-link>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
</template>
