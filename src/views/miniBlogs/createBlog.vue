<template>
    <div
        class="flex justify-center items-center bg-gray-100"
        style="height: 90vh"
    >
        <form
            class="max-w-xl w-full justify-center bg-white shadow-md rounded-lg overflow-hidden flex flex-col p-5"
            @submit.prevent="createBlogPost()"
        >
            <h3 class="text-2xl font-bold mb-4">Create Blog</h3>
            <div class="relative h-10 input-component mb-5">
                <input
                    id="title"
                    type="text"
                    name="title"
                    v-model="title"
                    class="h-full w-full px-2 transition-all rounded-sm"
                    :class="
                        titleError.status ? 'border-red-500' : 'border-gray-300'
                    "
                />
                <label
                    for="title"
                    class="absolute left-2 transition-all bg-white px-1"
                >
                    Title
                </label>
                <div class="text-xs text-red-500" v-if="titleError.status">
                    {{ titleError.message }}
                </div>
            </div>

            <div class="relative input-component empty">
                <textarea
                    id="description"
                    name="description"
                    class="h-full w-full px-2 rounded-sm pt-2"
                    :class="
                        descriptionError.status
                            ? 'border-red-500'
                            : 'border-gray-300'
                    "
                    rows="4"
                    v-model="description"
                ></textarea>
                <label
                    for="description"
                    class="absolute left-2 top-0 transition-all bg-white px-1"
                >
                    Description
                </label>
                <div
                    class="text-xs text-red-500"
                    v-if="descriptionError.status"
                >
                    {{ descriptionError.message }}
                </div>
            </div>
            <div class="mt-4">
                <button
                    class="w-full p-2 text-center text-white font-semibold bg-green-400 rounded-sm text-sm"
                >
                    Create
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "createBlog",
    data() {
        return {
            title: "",
            description: "",
            titleError: {
                status: false,
                message: "",
            },
            descriptionError: {
                status: false,
                message: "",
            },
        };
    },
    watch: {
        titleError: {
            handler(value) {
                if (value.status === true) {
                    setTimeout(() => {
                        this.titleError = {
                            status: false,
                            message: "",
                        };
                    }, 3000);
                }
            },
            deep: true,
        },
        descriptionError: {
            handler(value) {
                if (value.status === true) {
                    setTimeout(() => {
                        this.descriptionError = {
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
        createBlogPost() {
            let isValid = true;
            if (this.title == "") {
                this.titleError.status = true;
                this.titleError.message = "Title is required.";
                isValid = false;
            }
            if (this.description == "") {
                this.descriptionError.status = true;
                this.descriptionError.message = "Description is required.";
                isValid = false;
            }
            if (isValid) {
                axios
                    .post("http://localhost:3000/miniBlogs/", {
                        title: this.title,
                        description: this.description,
                    })
                    .then((res) => {
                        // console.log(res);
                        if (res.status === 201) {
                            this.$router.push({
                                name: "miniBlogs",
                                params: {
                                    message: "Blog created successfully.",
                                    status: true,
                                },
                            });
                        }
                    });
            }
        },
    },
    mounted() {
        const allInputs = document.querySelectorAll("input");
        for (const input of allInputs) {
            input.parentElement.classList.add("empty");
            input.addEventListener("input", () => {
                const val = input.value.length;
                if (!val) {
                    input.parentElement.classList.add("empty");
                } else {
                    input.parentElement.classList.remove("empty");
                }
            });
        }

        const allTextarea = document.querySelectorAll("textarea");
        for (const textarea of allTextarea) {
            textarea.parentElement.classList.add("empty");
            textarea.addEventListener("input", () => {
                const val = textarea.value.length;
                if (!val) {
                    textarea.parentElement.classList.add("empty");
                } else {
                    textarea.parentElement.classList.remove("empty");
                }
            });
        }
    },
};
</script>

<style scoped>
label {
    top: 0%;
    transform: translateY(-50%);
    font-size: 11px;
    color: #333;
}
.empty input:not(:focus) + label {
    top: 50%;
    transform: translateY(-50%);
    font-size: 13px;
}
.empty textarea:not(:focus) + label {
    top: 20%;
    transform: translateY(-50%);
    font-size: 13px;
}
input:not(:focus) + label,
textarea:not(:focus) + label {
    color: rgba(70, 70, 70, 1);
}
input,
textarea {
    border-width: 1px;
}
input:focus,
textarea:focus {
    outline: none;
    border-color: rgba(52, 211, 153, var(--tw-bg-opacity));
}
</style>