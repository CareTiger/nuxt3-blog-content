
<script setup>
    const articles = await queryContent('blog/articles').find()
    const featuredArticles = await queryContent('blog/articles').where({ tags: {$contains: ['featured']} }).find()
</script>

<template>
    <main class="mx-4 md:mx-20">
<!-- Using queryContent -->
    <!-- Featured articles - -->
        <h1 class="text-4xl border-b border-gray-400 py-10">Featured articles</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 m-10 mx-auto" >
            <div class="flex-grow" v-for="article in featuredArticles" :key="article._path">
                <nuxt-link  :to="`${article._path}`">
                    <div class=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <img class="rounded-t-lg h-64 w-full object-cover" :src="article.img" alt="" />
                        <div class="p-5">
                            <h5 class="mb-2 text-normal font-bold tracking-tight text-gray-900 dark:text-white">{{article.title}}</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">{{article.description}}</p>
                        </div>
                    </div>            
                </nuxt-link>
            </div>
        </div>      
    <!-- All articles - TODO sort be recent -->
        <h1 class="text-4xl border-b border-gray-400 py-10">Recent articles</h1>    
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 m-10 mx-auto" >
            <div class="h-full" v-for="article in articles" :key="article._path">
                <nuxt-link  :to="`${article._path}`">
                    <div class=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <img class="rounded-t-lg h-64 w-full object-cover" :src="article.img" alt="" />
                        <div class="p-5">
                            <h5 class="mb-2 text-normal font-bold tracking-tight text-gray-900 dark:text-white">{{article.title}}</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">{{article.description}}</p>
                        </div>
                    </div>            
                </nuxt-link>
            </div>
        </div>                

<!-- Using ContentList
        <ContentList path="/articles" v-slot="{ list }">
            <div class="grid grid-flow-row-dense grid-cols-4" v-for="article in list" :key="article._path">
                <div class="border border-gray-200 p-4">
                    <nuxt-link :href="article._path">
                        <h2>{{ article.title }}</h2>
                        <p>{{ article.description }}</p>
                    </nuxt-link>
                </div>
            </div>                     
        </ContentList>
-->

    </main>
</template>
