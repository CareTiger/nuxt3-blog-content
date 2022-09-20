<template>
    <main>
        <ContentList path="/blog" v-slot="{ list }">
            <div>
                <h1
                    class="text-4xl border-b border-gray-400 py-10 dark:text-white"
                >
                    Articles
                </h1>
                <div
                    class="grid grid-cols-1 md:grid-cols-2 gap-10 m-10 mx-auto"
                >
                    <div
                        class="flex-grow"
                        v-for="article in list"
                        :key="article._path"
                    >
                        <div
                            class="flex flex-col justify-between h-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                        >
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

                            <div
                                class="flex flex-row justify-between items-center"
                            >
                                <div class="flex flex-row">
                                    <img
                                        class="w-12 h-12 rounded-full shadow-lg object-cover"
                                        :src="article.author.img"
                                        alt="Bonnie image"
                                    />
                                    <p class="text-sm mt-2">
                                        {{ article.author.name }}
                                    </p>
                                </div>
                                <div class="m-4">
                                    <nuxt-link :to="`${article._path}`">
                                        <p class="text-sm dark:text-gray-400">
                                            <i class="material-icons-outlined"
                                                >arrow_forward</i
                                            >
                                        </p>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContentList>
    </main>
</template>
