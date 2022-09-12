<template>
    <div
        class="bg-white dark:bg-gray-900 dark:text-white flex flex-col w-full min-h-screen"
    >
        <Header class="" />

        <div class="grow">
            <slot />
        </div>

        <Footer />
    </div>
</template>
