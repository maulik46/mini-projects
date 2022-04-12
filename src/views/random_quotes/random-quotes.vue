<template>
  <div class="m-5">
    <h1 class="text-3xl font-bold text-center" v-if="isLoading">Loading...</h1>
    <div class="grid grid-cols-12">

        <div class="col-start-4 p-4 col-span-6 my-3 rounded shadow-md bg-yellow-100  font-bold" v-if="trumpQuote.length!==0">
            <h1 class="text-center text-2xl font-bold text-yellow-800 mb-5">{{trumpThink}}</h1>
            <span class="text-xl">{{trumpQuote}}</span>
            <div class="mt-3 text-sm">
                - Donald Trump
            </div>
        <button class="block mt-4 bg-yellow-700 text-white font-bold rounded text-base hover:bg-yellow-600 shadow px-4 py-1.5 focus:outline-none" @click="getTrumpQuote()">Get More</button>
        </div>

        <div class="col-start-4 p-4 col-span-6 my-3 rounded shadow-md bg-indigo-100  font-bold" v-if="quote.length!==0">
            <h1 class="text-center text-2xl font-bold text-indigo-800 mb-5">{{randomeQuote}}</h1>
            <span class="text-xl">{{quote}}</span>
            <div class="mt-3 text-sm">
                - {{author}}
            </div>
        <button class="block mt-4 bg-indigo-700 text-white font-bold rounded text-base hover:bg-indigo-500 shadow px-4 py-1.5 focus:outline-none" @click="getRandomQuote()">Get More</button>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'index',
  data(){
      return{
          trumpThink:'What Does Trump Think',
          randomeQuote:'Random Quotes',
          trumpQuote:'',
          quote:'',
          author:'',
          isLoading:false
      }
  },
  methods:{
    getTrumpQuote(){
        this.isLoading=true;
        axios.get("https://api.whatdoestrumpthink.com/api/v1/quotes/random").then((response) => {
          if(response.status===200){
            console.log(response);
            let getQuote = response.data.message;
            this.trumpQuote = getQuote;
            this.isLoading=false;

          }
      });
 
    },
    getRandomQuote(){
        this.isLoading=true;
        axios.get("http://quotes.stormconsultancy.co.uk/random.json").then((response) => {
        if(response.status===200){
            console.log(response);
            let getQuote = response.data.quote;
            let getAuthor = response.data.author;
            this.quote = getQuote;
            this.author=getAuthor;
            this.isLoading=false;

          }
      });
 
    }
  },
  mounted(){
    this.getTrumpQuote();
    this.getRandomQuote();
  }
}
</script>

<style scoped></style>
