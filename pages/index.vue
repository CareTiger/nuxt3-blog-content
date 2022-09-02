<template>
    <div class="h-screen flex flex-col justify-center items-center">
        <h1 class="text-5xl text-slate-700">Welcome to Nuxt Content</h1>
        <p class="text-xl text-slate-700 mb-6">
            Visit <a href="https://content.nuxtjs.org/">content.nuxtjs.org</a>
            to read the documentation
        </p>
        <nuxt-link
            href="/blog"
            class="rounded-xl bg-amber-700 px-20 py-4 text-white"
        >
            Go to Blog
        </nuxt-link>
    </div>
</template>