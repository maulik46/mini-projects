<template>
    <div class="p-4">
        <div
            class="fixed bottom-5 left-5 p-3 bg-gray-700 text-white w-1/5 rounded shadow"
            v-if="blogCreated.status"
        >
            <div class="font-semibold text-sm pl-2">
                {{ blogCreated.message }}
            </div>
        </div>
        <div class="mt-4">
            <div class="grid grid-cols-7 gap-4">
                <nav
                    class="bg-yellow-100 p-2 flex justify-between items-center shadow-sm border-2 border-yellow-200 lg:col-start-3 lg:col-span-3 md:col-start-2 md:col-span-5 col-span-12"
                >
                    <h1 class="text-base font-bold">All blogs</h1>
                    <div>
                        <button
                            class="bg-yellow-700 text-white py-1.5 px-4 rounded-sm shadow-sm focus:outline-none hover:bg-yellow-600"
                            @click="this.$router.push({ name: 'createBlog' })"
                        >
                            Create New
                        </button>
                    </div>
                </nav>
                <div
                    class="lg:col-start-3 lg:col-span-3 md:col-start-2 md:col-span-5 col-span-12"
                    v-for="blog in all_blogs"
                    :key="blog.id"
                >
                    <blogComponent :blog="blog" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import blogComponent from "@/components/blogComponent";
export default {
    name: "miniBlogs",
    data() {
        return {
            all_blogs: [],
            blogCreated: {
                status: false,
                message: "",
            },
        };
    },
    components: {
        blogComponent,
    },
    watch: {
        blogCreated: {
            handler(value) {
                if (value.status === true) {
                    setTimeout(() => {
                        this.blogCreated = {
                            status: false,
                            message: "",
                        };
                    }, 3000);
                }
            },
            deep: true,
        },
    },
    methods: {
        getAllBlogs() {
            axios.get("http://localhost:3000/miniBlogs").then((res) => {
                if (res.status === 200) {
                    // console.log(res);
                    this.all_blogs = res.data;
                }
            });
        },
    },
    mounted() {
        this.getAllBlogs();
        // console.log(this.$route.params);
        let blogCreatedObj = this.$route.params;

        if (Object.keys(blogCreatedObj).length > 0) {
            this.blogCreated.status =
                blogCreatedObj.status === "true" ? true : false;
            this.blogCreated.message = blogCreatedObj.message
                ? blogCreatedObj.message
                : "";
        }
    },
};
</script>

<style>
</style>