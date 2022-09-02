<template>
        <div>
                <article class="prose prose-lg prose-img:rounded-xl prose-headings:no-underline p-16 max-w-3xl m-auto">
                        <img class="h-96 w-full object-cover" :src="data.img" alt="">

                        <ContentRenderer :value="data">
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