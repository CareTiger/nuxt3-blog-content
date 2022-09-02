
<script setup>
    const articles = await queryContent('articles').find()
    // const articles = await queryContent('articles').where({ title: 'What we know' }).findOne()
    // const articles = await queryContent('articles').where({ tags: {$contains: ['featured']} }).find()
    console.log(articles)
</script>

<template>
    <main>
<!-- Using queryContent -->
        <div class="grid grid-cols-1 md:grid-cols-4" v-for="article in articles" :key="article._path">
                <div class="border border-gray-200 p-4">
                    <nuxt-link :to="`/blog${article._path}`">
                        <h2>{{ article.title }}</h2>
                        <p>{{ article.description }}</p>
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
