<template>
    <div class="m-5">
        <div class="bg-yellow-50 shadow-sm border-l-8 border-yellow-200 p-5">
            <div
                v-if="isLoading && !notFound"
                class="text-center text-xl font-bold"
            >
                Loading...
            </div>
            <div v-else-if="!isLoading && !notFound">
                <h1 class="font-semibold text-xl text-center">
                    {{ blogDetails.title }}
                </h1>
                <div class="font-light my-2">{{ blogDetails.description }}</div>
            </div>
            <div v-else-if="notFound" class="text-center">
                <h1 class="text-3xl">404</h1>
                <p>Blog not found.!</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "showOneBlog",
    data() {
        return {
            blogDetails: {},
            isLoading: false,
            notFound: false,
        };
    },
    methods: {
        oneBlog() {
            this.isLoading = true;
            axios
                .get("http://localhost:3000/miniBlogs/" + this.$route.params.id)
                .then((res) => {
                    if (res.status === 200) {
                        // console.log(res);
                        this.blogDetails = res.data;
                        this.isLoading = false;
                    }
                })
                .catch((err) => {
                    if (err.response.status === 404) {
                        this.isLoading = false;
                        this.notFound = true;
                    }
                });
        },
    },
    mounted() {
        this.oneBlog();
    },
};
</script>

<style>
</style>