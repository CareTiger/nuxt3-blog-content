<template>
    <div class="md:mt-16">
        <article
            class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 dark:text-white"
        >
            <div>
                <img
                    class="h-48 md:h-full w-full object-cover"
                    :src="data.img"
                    alt=""
                />
            </div>

            <div
                class="prose prose-lg prose-img:rounded-xl links-decoration prose-headings:no-underline max-w-3xl mx-auto p-16 dark:prose-invert"
            >
                <div
                    class="flex flex-col md:flex-row justify-between md:items-center"
                >
                    <div class="md:m-4 flex flex-row items-center">
                        <img
                            class="w-12 h-12 rounded-full shadow-lg object-cover"
                            :src="data.author.img"
                            alt="Bonnie image"
                        />
                        <p
                            class="text-normal ml-4 text-gray-800 dark:text-white"
                        >
                            {{ data.author.name }}
                        </p>
                    </div>
                    <div class="m-4 hidden md:block">
                        <p class="text-sm">{{ formatDate(data.updatedAt) }}</p>
                    </div>
                </div>
                <ContentRenderer :value="data">
                    <ContentRenderer :value="data" />
                </ContentRenderer>
                <!-- This is where you will get related articles -->
                {{ getRelatedArticles(data.relatedArticles) }}
            </div>
        </article>
    </div>
</template>

<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne();
});

function getRelatedArticles(data) {
    if (data) {
        for (let index = 0; index < data.length; index++) {
            // console.log(data[index]);
        }
    }
}

const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-gb", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "utc",
    });
};
</script>
