<template>
    <div class="m-5">
        <div class="flex justify-between items-center mb-2">
            <h1 class="text-center text-2xl font-bold">{{ msg }}</h1>
            <div>
                <button
                    @click="showSettingsModel = true"
                    class="mr-2 hover:bg-gray-200 px-3 py-1.5 rounded font-semibold"
                >
                    Options
                </button>
            </div>
        </div>
        <Slider
            :images="mySlider.images"
            :currentImage="mySlider.currentImage"
            :autoSlider="mySlider.autoSlider"
            :autoSlideTime="mySlider.autoSlideTime"
            :showPagination="mySlider.showPagination"
        />
    </div>
    <div
        class="h-full w-full fixed top-0 left-0 flex justify-center items-center settings-background"
        v-if="showSettingsModel"
    >
        <div class="w-1/3 bg-white rounded shadow-sm p-4">
            <table class="rounded w-full bg-gray-200 text-gray-800">
                <tr class="border-b-2 border-gray-300">
                    <th class="px-4 py-3 text-left">Current Image</th>
                    <td class="px-4 py-3">
                        <select
                            class="bg-white py-3 px-2 w-full"
                            id="currentSlide"
                        >
                            <option
                                v-for="(image, index) in mySlider.images"
                                :key="index"
                                :value="index"
                            >
                                {{ index + 1 }}
                            </option>
                        </select>
                    </td>
                </tr>
                <tr class="border-b-2 border-gray-300">
                    <th class="px-4 py-3 text-left">Auto Slider</th>
                    <td class="px-4 py-3">
                        <div class="flex justify-evenly items-center">
                            <div>
                                <input
                                    type="radio"
                                    name="autoSlider"
                                    :value="true"
                                />
                                <label for="">Yes</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="autoSlider"
                                    :value="false"
                                />
                                <label for="">No</label>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="border-b-2 border-gray-300">
                    <th class="px-4 py-3 text-left">Slider Timing</th>
                    <td class="px-4 py-3">
                        <input
                            type="number"
                            class="bg-white py-2 px-3 w-full"
                            placeholder="2000 miliseconds"
                            id="sliderTime"
                        />
                    </td>
                </tr>
                <tr>
                    <th class="px-4 py-3 text-left">Pagination</th>
                    <td class="px-4 py-3">
                        <div class="flex justify-evenly items-center">
                            <div>
                                <input
                                    type="radio"
                                    name="showPagination"
                                    :value="true"
                                />
                                <label for="">Yes</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="showPagination"
                                    :value="false"
                                />
                                <label for="">No</label>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
            <div>
                <button
                    @click="setNewSettings()"
                    class="bg-green-500 text-white py-2 px-7 mt-2 rounded shadow-sm"
                >
                    Set
                </button>
                <button
                    @click="showSettingsModel = false"
                    class="bg-red-500 text-white py-2 px-5 ml-2 mt-2 rounded shadow-sm"
                >
                    Close
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Slider from "@/components/Slider";
export default {
    name: "imageSlider",
    data() {
        return {
            msg: "Image Slider",
            showSettingsModel: false,
            mySlider: {
                images: [
                    "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg",
                    "https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg",
                    "https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg",
                ],
                currentImage: 1,
                autoSlider: true,
                showPagination: true,
                autoSlideTime: 3000,
            },
        };
    },

    methods: {
        setNewSettings() {
            let currentSlide = document.querySelector("#currentSlide").value;
            let sliderTime = document.querySelector("#sliderTime").value;
            let pagination = document.querySelector(
                'input[name="showPagination"]:checked'
            );
            let autoSlide = document.querySelector(
                'input[name="autoSlider"]:checked'
            );
            this.mySlider.autoSlideTime =
                sliderTime > 0 ? Number(sliderTime) : 3000;
            this.mySlider.showPagination =
                pagination && pagination.value === "true" ? true : false;
            this.mySlider.autoSlider =
                autoSlide && autoSlide.value === "true" ? true : false;
            this.mySlider.currentImage = currentSlide;
            this.showSettingsModel = false;
        },
    },

    components: {
        Slider: Slider,
    },
};
</script>

<style scoped>
.settings-background {
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
    );
}
</style>
