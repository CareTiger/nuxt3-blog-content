<template>
    <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 My Blog. All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <nuxt-link to="/policy/terms" class="mr-4 hover:underline md:mr-6 ">Terms</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/policy/privacy" class="mr-4 hover:underline md:mr-6">Privacy Policy</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/policy/community" class="mr-4 hover:underline md:mr-6">Community</nuxt-link>
            </li>
        </ul>
    </footer>
</template>