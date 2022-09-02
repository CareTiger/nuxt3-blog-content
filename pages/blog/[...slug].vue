<template>
        <div>
                <!-- Get a specific document         -->
                <article class="prose prose-lg p-16 max-w-3xl m-auto">

                        <!--  Using the ContentDoc component -->
                        <ContentDoc path="" v-slot="{ doc }">                     
                                <div class="first-letter:text-7xl first-letter:text-slate-600">
                                        <ContentRenderer :value="doc" />
                                </div>
                        </ContentDoc>
                        

                </article>
        </div>
</template>

<script setup>
const { path } = useRoute();

console.log("path", path)
</script>