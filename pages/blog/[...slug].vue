<template>
        <div>
                <!-- Get a specific document         -->
                <article class="prose prose-lg p-16 max-w-3xl m-auto">
                        <ContentRenderer :value="data">
                                <h1>{{ data.title }}</h1>
                                <ContentRenderer :value="data" />
                        </ContentRenderer>
                </article>
        </div>
</template>

<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, () => {
        return queryContent().where({ _path: path }).findOne()
})
</script>