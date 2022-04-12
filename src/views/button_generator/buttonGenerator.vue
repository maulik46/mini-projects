<template>
  <div class="m-5">
    <h1 class="text-center text-2xl font-bold mb-5">{{msg}}</h1>
    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-9 bg-red-100 shadow rounded p-4">
            <div class="grid grid-cols-12 gap-3">
                <div class="col-span-4 bg-white text-center">
                    <div class="my-5">
                        <label class="font-bold">Button Text</label>
                        <br>
                        <input type="text" placeholder="Button" v-model="buttonText" class="bg-white p-2 px-4 border border-black rounded-sm">
                    </div>
                    <div class="my-5">
                        <label class="font-bold">Background Color</label>
                        <br>
                        <input type="color" class="h-12 w-52 border-4 border-red-100" v-model="bgColor">
                    </div>
                    <div class="my-3">
                        <label class="font-bold">Text Color</label>
                        <br>
                        <input type="color" class="h-12 w-52 border-4 border-red-100" v-model="textColor">
                    </div>
                    <div class="my-5">
                        <div class="flex justify-between items-center mx-10">
                            <label class="font-bold">Text Size</label>
                            <span class="bg-red-50 p-1 px-3 rounded">{{textSize}}</span>
                        </div>
                        <input type="range" min="10" max="80" class="h-12 w-52 border-4 border-white" v-model="textSize">
                    </div>
                    <div class="mt-3">
                        <div class="flex justify-between items-center mx-10">
                            <label class="font-bold">Border Radius</label>
                            <span class="bg-red-50 p-1 px-3 rounded">{{borderRadius}}</span>
                        </div>
                        <input type="range" min="0" max="80" class="h-12 w-52 border-4 border-white" v-model="borderRadius">
                    </div>
                </div>
                <div class="col-span-4 bg-white text-center">
                    <div class="mt-3">
                        <div class="flex justify-between items-center mx-10">
                            <label class="font-bold">Border Width</label>
                            <span class="bg-red-50 p-1 px-3 rounded">{{borderWidth}}</span>
                        </div>
                        <input type="range" min="1" max="10" class="h-12 w-52 border-4 border-white" v-model="borderWidth">
                    </div>
                    <div class="mt-2">
                        <label class="font-bold">Border Color</label>
                        <br>
                        <input type="color" class="h-12 w-52 border-4 border-red-100" v-model="borderColor">
                    </div>
                    <div class="mt-3">
                        <div class="flex justify-between items-center mx-10">
                            <label class="font-bold">Padding X</label>
                            <span class="bg-red-50 p-1 px-3 rounded">{{paddingX}}</span>
                        </div>
                        <input type="range" min="1" max="80" class="h-12 w-52 border-4 border-white" v-model="paddingX">
                    </div>
                    <div class="mt-3">
                        <div class="flex justify-between items-center mx-10">
                            <label class="font-bold">Padding Y</label>
                            <span class="bg-red-50 p-1 px-3 rounded">{{paddingY}}</span>
                        </div>
                        <input type="range" min="1" max="40" class="h-12 w-52 border-4 border-white" v-model="paddingY">
                    </div>
                    
                </div>
                <div class="col-span-4 bg-white text-center">
                    <div class="mt-3">
                        <div class="flex justify-between items-center mx-10">
                            <label class="font-bold">Shadow X</label>
                            <span class="bg-red-50 p-1 px-3 rounded">{{shadowX}}</span>
                        </div>
                        <input type="range" min="-40" max="40" class="h-12 w-52 border-4 border-white" v-model="shadowX">
                    </div>
                    <div class="mt-3">
                        <div class="flex justify-between items-center mx-10">
                            <label class="font-bold">Shadow Y</label>
                            <span class="bg-red-50 p-1 px-3 rounded">{{shadowY}}</span>
                        </div>
                        <input type="range" min="-40" max="40" class="h-12 w-52 border-4 border-white" v-model="shadowY">
                    </div>
                    <div class="mt-3">
                        <div class="flex justify-between items-center mx-10">
                            <label class="font-bold">Blur Shadow</label>
                            <span class="bg-red-50 p-1 px-3 rounded">{{blurShadow}}</span>
                        </div>
                        <input type="range" min="-40" max="40" class="h-12 w-52 border-4 border-white" v-model="blurShadow">
                    </div>
                </div>
            </div>  

        </div>
        <div class="col-span-3">
            <div class=" shadow-md rounded " :class="showCode===true ? 'bg-gray-600' : 'bg-white' ">
                <div class="flex justify-center items-center" style="height:72vh;">
                    <button v-if="!showCode" 
                        class="border-2 border-black p-2 px-4 rounded-sm cursor-pointer"
                        :style="{
                            'background-color':bgColor,
                            'color':textColor,
                            'font-size':`${textSize}px`,
                            'border-radius':`${borderRadius}px ${borderRadius}px ${borderRadius}px ${borderRadius}px`,
                            'border-color':borderColor,
                            'border-width':`${borderWidth}px`,
                            'padding':`${paddingY}px ${paddingX}px`,
                            'box-shadow':`${shadowX}px ${shadowY}px ${blurShadow}px #000000`,

                            }"
                    >
                        {{buttonText.length > 0 ? buttonText : 'Button'}}
                    </button>
                    <div v-if="showCode" v-html="cssCode" class="p-3 text-white text-base">
                       
                    </div>
                </div>
                <div class="text-center pb-3 px-3 ">
                    <button @click="getCode()" class="shadow-lg hover:bg-purple-500 text-white p-1.5 px-4 rounded bg-purple-700 w-full">{{showCode===true ? 'Button Preview':'Get CSS'}}</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'buttonGenerator',
    data(){
        return{
            msg:'Button Generator',
            buttonText:'Button',
            bgColor:'#ffffff',
            textColor:'#000000',
            textSize:'16',
            borderRadius:'0',
            borderColor:'#000000',
            borderWidth:'2',
            paddingX:'15',
            paddingY:'5',
            shadowX:'0',
            shadowY:'0',
            blurShadow:'0',
            showCode:false,
            cssCode:''
        }
    },

    methods:{
        getCode(){
            // let previewButton=document.querySelector('#previewButton');
            // let style=previewButton.attributes.style;
            let buttonCode=`
                <code>
                    <div> background-color: ${this.bgColor}; </div>
                    <div> color: ${this.textColor}; </div>
                    <div> font-size: ${this.textSize}px; </div>
                    <div> border-radius: ${this.borderRadius}px; </div>
                    <div> border-width: ${this.borderWidth}px; </div>
                    <div> border-color: ${this.borderColor}; </div>
                    <div> padding: ${this.paddingY}px ${this.paddingX}; </div>
                    <div> box-shadow: ${this.shadowX}px ${this.shadowY}px ${this.blurShadow}px #000000; </div>
                </code>
            `;

            this.showCode=!this.showCode;
            this.cssCode=buttonCode;
            console.log(buttonCode);
               
        }
    }
}
</script>

<style scoped>
</style>
