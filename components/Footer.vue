<template>
    <footer
        class="w-full flex flex-col prose prose-lg prose-img:rounded-xl prose-headings:no-underline mx-auto dark:prose-invert"
    >
        <ul
            class="w-full flex flex-row justify-around items-center mt-3 text-base list-none links-decoration"
        >
            <li>
                <nuxt-link
                    to="/policy/terms"
                    class="mr-4 hover:underline md:mr-6"
                    >Terms</nuxt-link
                >
            </li>
            <li>
                <nuxt-link
                    to="/policy/privacy"
                    class="mr-4 hover:underline md:mr-6"
                    >Privacy Policy</nuxt-link
                >
            </li>
            <li>
                <nuxt-link
                    to="/policy/community"
                    class="mr-4 hover:underline md:mr-6"
                    >Community</nuxt-link
                >
            </li>
        </ul>
        <p class="text-center text-sm my-4 text-gray-500 dark:text-gray-400">
            © 2022 Sampyl, Inc. All Rights Reserved.
        </p>
    </footer>
</template>
