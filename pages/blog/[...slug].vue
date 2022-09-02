<template>
        <div>
                <article class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
                        <div>
                                <img class="h-48 md:h-full w-full object-cover" :src="data.img" alt="">
                        </div>

                        <div class="prose prose-lg prose-img:rounded-xl prose-headings:no-underline max-w-3xl mx-auto p-16">
                                <div class="flex flex-col md:flex-row justify-between md:items-center">
                                        <div class="md:m-4 flex flex-row items-center">
                                                <img class="w-12 h-12 rounded-full shadow-lg object-cover" :src="data.author.img" alt="Bonnie image">
                                                <p class="text-normal ml-4 dark:text-gray-800">{{data.author.name}}</p>                                                              
                                        </div>
                                        <div class="m-4 hidden md:block">
                                                <p class="text-sm dark:text-gray-800">{{$moment(data.updatedAt).format("MMM Do, YYYY") }}</p>
                                        </div>
                                </div>
                                <ContentRenderer :value="data">
                                        <ContentRenderer :value="data" />
                                </ContentRenderer>
                        </div>
                </article>
        </div>
</template>

<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, () => {
        return queryContent().where({ _path: path }).findOne()
})

</script>