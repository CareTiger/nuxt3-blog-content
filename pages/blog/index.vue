<script setup>
const articles = await queryContent("blog/articles")
    .sort({ updatedAt: -1 })
    .find();
const authors = await queryContent("blog/authors").find();
const tags = await queryContent("blog/tags").find();
const featuredArticles = await queryContent("blog/articles")
    .where({ tags: { $contains: ["featured"] } })
    .find();
const formatDate = (date) => {
    console.log(date);
    return new Date(date).toLocaleDateString("en-gb", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "utc",
    });
};
const authorDetails = (author) => {
    return authors.find(({ name }) => name === author);
};
const tagDetails = (tag) => {
    return tags.find(({ name }) => name === tag);
};
</script>

<template>
    <main class="mx-4 md:mx-20">
        <!-- Using queryContent -->
        <!-- Featured articles - -->
        <h1 class="text-4xl border-b border-gray-400 py-10 dark:text-white">
            Featured articles
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 m-10 mx-auto">
            <div
                class="flex-grow"
                v-for="article in featuredArticles"
                :key="article._path"
            >
                <div class="flex flex-col justify-between h-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">                    
                    <div>
                        <img
                            class="rounded-t-lg h-64 w-full object-cover"
                            :src="article.img"
                            alt=""
                        />
                        <div class="p-5">
                            <h5
                                class="mb-2 text-normal font-bold tracking-tight text-gray-900 dark:text-white"
                            >
                                {{ article.title }}
                            </h5>
                            <p
                                class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm"
                            >
                                {{ article.description }}
                            </p>
                            
                        </div>
                    </div>

                    <div class="flex flex-row justify-between items-center">
                        <div class="flex flex-row">
                            <div
                            class="m-4 flex flex-col items-center justify-start"
                            v-for="author in article.author"
                            :key="author.name"
                        >
                            <img
                                class="w-12 h-12 rounded-full shadow-lg object-cover"
                                :src="authorDetails(author).img"
                                alt="Bonnie image"
                            />
                            <p class="text-sm mt-2">{{ authorDetails(author).name }}</p>
                        </div>

                        </div>
                        <div class="m-4">
                            <nuxt-link :to="`${article._path}`">                            
                                <p class="text-sm dark:text-gray-400">
                                    <i class="material-icons-outlined">arrow_forward</i>
                                </p>
                            </nuxt-link>
                        </div>                        
                    </div>

                </div>

            </div>
        </div>
        <!-- All articles  -->
        <h1 class="text-4xl border-b border-gray-400 py-10 dark:text-white">
            Recent articles
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 m-10 mx-auto">
            <div
                class="flex-grow"
                v-for="article in articles"
                :key="article._path"
            >
                <div class="flex flex-col justify-between h-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">                    
                    <div>
                        <img
                            class="rounded-t-lg h-64 w-full object-cover"
                            :src="article.img"
                            alt=""
                        />
                        <div class="p-5">
                            <h5
                                class="mb-2 text-normal font-bold tracking-tight text-gray-900 dark:text-white"
                            >
                                {{ article.title }}
                            </h5>
                            <p
                                class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm"
                            >
                                {{ article.description }}
                            </p>
                            
                        </div>
                    </div>

                    <div class="flex flex-row justify-between items-center">
                        <div class="flex flex-row">
                            <div
                            class="m-4 flex flex-col items-center justify-start"
                            v-for="author in article.author"
                            :key="author.name"
                        >
                            <img
                                class="w-12 h-12 rounded-full shadow-lg object-cover"
                                :src="authorDetails(author).img"
                                alt="Bonnie image"
                            />
                            <p class="text-sm mt-2">{{ authorDetails(author).name }}</p>
                        </div>

                        </div>
                        <div class="m-4">
                            <nuxt-link :to="`${article._path}`">                            
                                <p class="text-sm dark:text-gray-400">
                                    <i class="material-icons-outlined">arrow_forward</i>
                                </p>
                            </nuxt-link>
                        </div>                        
                    </div>

                </div>

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
