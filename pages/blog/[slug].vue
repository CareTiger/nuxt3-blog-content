<template>
    <main class="md:mt-16">
        <article
            class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 dark:text-white"
        >
            <ContentDoc
                class="prose prose-lg prose-img:rounded-xl links-decoration prose-headings:no-underline max-w-3xl mx-auto p-16 dark:prose-invert"
                v-slot="{ doc }"
            >
                <h1>{{ doc.title }}</h1>
                <ContentRenderer :value="doc" />
            </ContentDoc>
        </article>
    </main>
</template>
