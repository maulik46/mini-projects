<template>
    <div>
        <div class="flex justify-center items-center flex-col" style="height:80vh" v-if="!isLoading">
            <div class="w-7/12 bg-yellow-100 py-5 rounded shadow">
                <h1 class="text-center text-2xl font-bold mb-5 mt-2">{{msg}}</h1>
                <div class="flex flex-wrap justify-center items-center border-t-4 pt-5 border-blue-600">
                    <div class="m-1">
                        <input type="number" class="p-2.5 text-center w-28 shadow rounded-sm focus:outline-none" v-model="firstValue" placeholder="Amount">
                    </div>
                    <select name="" id="" class="w-60 m-1 shadow rounded-sm p-3" v-model="country1">
                        
                        <option 
                        :value="country.id" 
                        v-for="(country,index) in countries" 
                        :key="index" 
                        :selected="country1==country.id " 
                        >
                            {{country.id}}({{country.currencyName}})

                        </option>
                    </select>
                    <div class="m-1">
                        <input type="text" class="p-1.5 bg-yellow-400 text-white font-extrabold text-2xl w-12 text-center shadow rounded-sm focus:outline-none hover:bg-yellow-500 cursor-pointer" readonly value="&rlarr;" @click="exchangeCountry">
                    </div>
                    <select name="" id="" class="w-60 m-1 shadow p-3 rounded-sm" v-model="country2" >
                        
                        <option 
                        :value="country.id" 
                        v-for="(country,index) in countries" 
                        :key="index" 
                        :selected="country2==country.id "
                        >
                            {{country.id}}({{country.currencyName}})

                        </option>
                    </select>
                    <div class="m-1">
                        <button class="bg-blue-500 text-white p-2 px-5 font-bold rounded-sm border-2 border-blue-500 focus:outline-none hover:bg-blue-600 " @click="getExchangeAmount">Convert</button>
                    </div>
                </div>
                <div class="text-center mt-5" v-if="showValue">
                    <h1 class="text-3xl font-bold px-5 py-1 bg-yellow-500 hover:bg-yellow-400 cursor-pointer text-white" @click="showValue=!showValue,firstValue=1">
                        {{finalValue ?? 0}}
                    </h1>
                </div>
            </div>

        </div>
        <div class="w-full flex justify-center items-center z-40 h-screen fixed top-0" style="background-color:#fff" v-if="isLoading">
                <h1 class="text-blue-600 text-4xl">Loading<span class="text-yellow-600">...</span></h1>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name:'currencyExchange',
    data(){
        return{
            msg:'Currency Exchange',
            countries:[],
            firstValue:1,
            showValue:false,
            country1:'INR',
            country2:'USD',
            finalValue:0,
            isLoading:true,
        }
    },
    methods:{
        getAllCountries(){
            this.isLoading=true;
            axios.get("https://free.currconv.com/api/v7/currencies?apiKey=1cfc8f22f2e9bff34d93").then((response) => {
                if(response.status===200){
                    this.countries=response.data.results;
                    this.isLoading=false;
                }
            })
            .catch(err => {
                console.log(err);
            });
        },
        getExchange(country1,country2){
            axios.get(`https://free.currconv.com/api/v7/convert?apiKey=1cfc8f22f2e9bff34d93&q=${country1}_${country2}&compact=y`).then((response) => {
                if(response.status===200){
                    let getValueArray=response.data;
                    let getValue=Object.values(getValueArray);
                    let amount=getValue.length > 0 ? getValue[0].val : 0;

                    if(this.firstValue.length === 0 || this.firstValue <= 0){
                        this.firstValue=1;
                    }

                    let calc=(this.firstValue * amount).toFixed(4);
                    let symbol=this.countries[country2].currencySymbol ??  '';
                    this.finalValue=`${calc} ${symbol}`;
                    this.showValue=true;
                    

                }
            })
            .catch(err => {
                console.log(err);
            });
        },
        getExchangeAmount(){
            let country1=this.country1;
            let country2=this.country2;
            this.getExchange(country1,country2);
        },
        exchangeCountry(){
            let country1=this.country1;
            let country2=this.country2;

            this.country1=country2;
            this.country2=country1;
            this.getExchange(this.country1,this.country2);            
            
        }
    },
    mounted(){
        this.getAllCountries();
    }
}
</script>