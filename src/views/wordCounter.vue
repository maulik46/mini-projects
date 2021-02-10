<template>
  <div class="m-5">
    <h1 class="text-center text-2xl font-bold mb-5">{{msg}}</h1>
    <div>
        <div class="flex justify-center items-center ">
            <span class="bg-gray-500 p-2 px-5 text-xl text-white rounded-sm">Total {{option===0 ? 'words' : 'letters'}}: {{totalCount}}</span>
        </div>
        <div class="my-5 flex justify-center">
            <label class="flex justify-start items-start mx-2">
                <div class="bg-white border-2 rounded-full border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                    <input type="radio" :value="0" class="opacity-0 absolute" v-model="option" checked>
                    
                    <svg class="fill-current hidden w-3.5 h-3.5 text-gray-500 pointer-events-none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div class="select-none font-semibold">Count Word</div>
            </label>
            <label class="flex justify-start items-start mx-2">
                <div class="bg-white border-2 rounded-full border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                    <input type="radio" :value="1" class="opacity-0 absolute"  v-model="option">

                    <svg class="fill-current hidden w-3.5 h-3.5 text-gray-500 pointer-events-none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div class="select-none font-semibold">Count letters</div>
            </label>
        </div>
        <textarea cols="30" rows="6" class="mt-4 w-full border-4 rounded-md focus:outline-none p-7 text-2xl border-gray-200 focus:border-gray-400 resize-none" placeholder="Write here.." v-model="userInput">

        </textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wordCounter',
  data(){
      return{
          msg:'Word Counter',
          totalCount:0,
          userInput:'',
          option:0
      }
  },

  watch:{
    userInput(newValue){

        if(newValue.length > 0){
            if(this.option===0){
                let countWord=newValue.split(' ');
                let checkValid=countWord.filter(item=>item.length > 0);

                this.totalCount=checkValid.length;
            }
            else if(this.option===1){
                this.totalCount=this.userInput.length;
            }
        }
        else{
            this.totalCount=0;
        }
    },
    option(newValue){

        if(this.userInput.length > 0){
            if(newValue===0){
                let countWord=this.userInput.split(' ');
                let checkValid=countWord.filter(item=>item.length > 0);
    
                this.totalCount=checkValid.length;
            }
            else if(newValue===1){
                this.totalCount=this.userInput.length;
            }
        }
    }

  }
}
</script>

<style scoped>
input:checked + svg {
    display: block;
    }
</style>
