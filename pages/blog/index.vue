<template>
    <main>
        <!-- Get a specific document 
            <ContentDoc path="/coachwith/terms" />
        <hr>
        -->

        <ContentList path="/articles" v-slot="{ list }">
            <div v-for="article in list" :key="article._path">
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>
                <p>{{ article.img }}</p>
            </div>                     
        </ContentList>

    </main>
</template>