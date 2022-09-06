<template>
    <footer class="bg-white flex flex-col dark:bg-gray-800 mt-8">
        <ul class="flex flex-row justify-around mt-3 text-base text-gray-500 dark:text-gray-400">
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
        <p class="text-center text-sm my-4 text-gray-500 dark:text-gray-400">© 2022 Sampyl, Inc. All Rights Reserved.
        </p>
    </footer>
</template>