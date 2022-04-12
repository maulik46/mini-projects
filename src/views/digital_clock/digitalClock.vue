<template>
    <h1 class="text-center text-2xl font-bold mb-5 mt-2">{{msg}}</h1>
    <div class="">
        <div class="grid-cols-12 grid">
            <div class="col-start-3 col-span-8  bg-gray-800 shadow-lg">
                <div class="mt-3 p-5 grid-cols-7 gap-2 text-center grid text-white">
                    
                    <h1 v-for="(day,index) in days" :key="index" class="col-span-1  py-2 opacity-50 font-extrabold" :class="index===today ? 'opacity-100 bg-gray-500' : 'opacity-50 bg-gray-700' ">{{day}}</h1>
              
                </div>
                <div class="p-4 w-auto">
                    <div @click="monthName=!monthName" class="bg-gray-600 font-bold py-4 px-5 shadow-md text-white text-4xl flex justify-center cursor-pointer hover:opacity-80">
                        <div class="mx-5">
                            <svg  class="h-10 w-10"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            {{date}}
                        </div>
                    </div>
                </div>
                <div class="px-7 pb-7 pt-5 flex justify-center items-center">
                    <h1 class="text-9xl text-white text-center tracking-wide">{{time}}</h1>
                    <div class="mx-9">
                        <h1 class=" px-3 my-2 py-2 text-2xl font-bold" :class="am_pm===1  ? 'bg-white' : 'bg-gray-600' ">AM</h1>
                        <h1 class=" px-3 my-2 py-2 text-2xl font-bold" :class="am_pm===0  ? 'bg-white' : 'bg-gray-600' ">PM</h1>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'digitalClock',
    data(){
        let msg1="Digital Clock";
        return{
            msg:msg1,
            time:'',
            am_pm:0, // 0 for PM.  1 for AM.
            date:'',
            days:['SUN','MON','TUE','WED','THU','FRI','SAT'],
            today: new Date().getDay(),
            monthName: true
        }
    },
    methods:{
        getTime(){
            let currentDate=new Date();
            let months=["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

            let hours=currentDate.getHours();
            let minutes=currentDate.getMinutes();
            let seconds=currentDate.getSeconds();
            this.am_pm= hours>=12 ? 0 : 1;

            if(hours > 12){
                hours=hours-12 < 10 ? `0${hours-12}` : (hours-12);
            }
           
            minutes=minutes < 10 ? `0${minutes}` : minutes;
            seconds=seconds < 10 ? `0${seconds}` : seconds;

            this.time=`${hours} : ${minutes} : ${seconds}`;
            if(this.monthName==true){
                this.date=`${currentDate.getDate()}, ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
            }
            else{
                let new_month=currentDate.getMonth()+1 < 10 ? `0${currentDate.getMonth()+1}` : currentDate.getMonth()+1;
                this.date=`${currentDate.getDate()} / ${new_month} / ${currentDate.getFullYear()}`;
            }
        }
    },
    mounted(){
        this.getTime();
        setInterval(()=>{
             this.getTime();   
        },1000);
    }
}
</script>
<style scoped>

</style>