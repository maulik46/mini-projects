<template>
    <div
        class="bg-yellow-50 shadow-sm border-2 border-yellow-100 px-2 pt-2 pb-3"
    >
        <h1 class="font-semibold">{{ blog.title }}</h1>
        <div class="font-light my-2">
            {{
                blog.description.length > 100
                    ? `${blog.description.slice(0, 100)}...`
                    : blog.description
            }}
        </div>
        <div>
            <button
                class="bg-yellow-200 py-1 px-4 rounded-sm shadow-sm focus:outline-none hover:bg-yellow-300"
                @click="showOneBlog(blog.id)"
            >
                Read more
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        blog: Object,
    },
    methods: {
        showOneBlog(id) {
            this.$router.push({
                name: "showOneBlog",
                params: {
                    id: id,
                },
            });
        },
    },
};
</script>

<style>
</style>