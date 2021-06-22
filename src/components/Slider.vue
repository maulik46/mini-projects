<template>
    <div class="flex overflow-auto my-slider">
        <div
            v-for="(image, index) in arrayImages"
            :key="index"
            :data-img="index"
            class="w-full slider-img"
            :class="current !== index ? 'hidden' : ''"
            :style="{ backgroundImage: `url(${image})` }"
        ></div>
    </div>
    <!-- <div>autoSliderTime == {{ autoSliderTime }}</div>
    <div>isAutoSlider == {{ isAutoSlider }}</div>
    <div>isShowPagination == {{ isShowPagination }}</div> -->
    <div class="flex justify-center items-center" v-if="!isAutoSlider">
        <button
            class="bg-green-300 m-2 px-5 py-2 rounded shadow-sm"
            @click="prevImage"
        >
            Prev
        </button>
        <button
            class="bg-green-300 m-2 px-5 py-2 rounded shadow-sm"
            @click="nextImage"
        >
            Next
        </button>
    </div>
    <div class="flex justify-center items-center mt-2" v-if="isShowPagination">
        <div v-for="(image, index) in arrayImages" :key="index">
            <a
                href="#"
                class="py-1 px-3 mx-1 hover:bg-red-400 hover:text-white"
                @click="current = index"
                :class="
                    current === index
                        ? 'bg-red-400 text-white'
                        : 'bg-gray-100 text-black'
                "
                >{{ index + 1 }}</a
            >
        </div>
    </div>
</template>

<script>
export default {
    props: {
        images: {
            type: Array,
            required: true,
        },
        currentImage: [String, Number],
        autoSlider: {
            type: Boolean,
        },
        showPagination: {
            type: Boolean,
        },
        autoSlideTime: [String, Number],
    },
    data() {
        return {
            current: this.currentImage ?? 0,
            arrayImages: this.images,
            isAutoSlider: this.autoSlider ?? false,
            isShowPagination: this.showPagination ?? false,
            autoSliderTime: this.autoSlideTime ?? 3000,
        };
    },
    watch: {
        current() {
            if (this.isAutoSlider === true) {
                setTimeout(() => {
                    this.nextImage();
                }, this.autoSliderTime);
            }
        },
        autoSlider() {
            this.isAutoSlider = this.autoSlider;
        },
        showPagination() {
            this.isShowPagination = this.showPagination;
        },
        autoSlideTime() {
            this.autoSliderTime = this.autoSlideTime;
        },
    },
    methods: {
        prevImage() {
            this.current < this.arrayImages.length && this.current > 0
                ? this.current--
                : (this.current = this.arrayImages.length - 1);
            // console.log(this.current);
        },
        nextImage() {
            this.current < this.arrayImages.length - 1
                ? this.current++
                : (this.current = 0);
            // console.log(this.current);
        },
    },
    mounted() {
        if (this.isAutoSlider === true) {
            setTimeout(() => {
                this.nextImage();
            }, this.autoSliderTime);
        }
    },
};
</script>

<style scoped>
.my-slider .slider-img {
    height: 70vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>    