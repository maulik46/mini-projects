<template>
<div class="bg-gray-100 h-screen">
    <div class="grid lg:grid-flow-col md:grid-flow-row grid-cols-12 gap-4 p-3 container mx-auto">
        <div class="mt-3 lg:col-span-4 col-span-12">
            <form
                class="justify-center bg-white shadow-md rounded-lg overflow-hidden flex flex-col p-5"
                @submit.prevent="createEvent()"
            >
                <h3 class="text-2xl font-bold mb-4">Create Event</h3>
                <div class="h-10 mb-10">
                    <label class="left-2  px-1">Title</label>
                    <input
                        type="text"
                        v-model="title"
                        class="h-full w-full px-2 transition-all rounded-sm border"
                        :class="
                            titleError.status ? 'border-red-500' : 'border-gray-300'
                        "
                    />
                    
                    <div class="text-xs text-red-500" v-if="titleError.status">
                        {{ titleError.message }}
                    </div>
                </div>
                <div class="h-10 mb-10">
                    <label class="left-2  px-1">Date</label>
                    <input
                        type="date"
                        v-model="eventDate"
                        :min="$moment().format('YYYY-MM-DD')"
                        class="h-full w-full px-2 transition-all rounded-sm border"
                        :class="
                            dateError.status ? 'border-red-500' : 'border-gray-300'
                        "
                    />
                    <!-- :min="$moment.format('YYYY-DD-MM')" -->
                    <div class="text-xs text-red-500" v-if="dateError.status">
                        {{ dateError.message }}
                    </div>
                </div>
                <div class="h-10 mb-10">
                    <label class="left-2  px-1">Time</label>
                    <input
                        type="time"
                        v-model="eventTime"
                        step="1" 
                        class="h-full w-full px-2 transition-all rounded-sm border"
                        :class="
                            timeError.status ? 'border-red-500' : 'border-gray-300'
                        "
                    />
                    
                    <div class="text-xs text-red-500" v-if="timeError.status">
                        {{ timeError.message }}
                    </div>
                </div>
                

                
                <div class="mt-4">
                    <button
                        class="py-2.5 px-5 text-center text-white font-semibold bg-green-400 rounded-sm text-sm hover:bg-green-500"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
        <div class="mt-3 lg:col-span-8 col-span-12 border-2 p-5 rounded-lg bg-white shadow-md overflow-auto" style="max-height:85vh">
            <div class="text-right font-semibold text-sm italic">* Swipe left to Delete event *</div>
            <ul>
                <li v-for="(event,index) in events" :key="index" class="relative">
                    <div class=" shadow-sm border w-full rounded-lg mb-2 eventCard z-30" :class="index === 0 ? 'bg-green-100 p-3' : 'bg-gray-100 py-1.5 px-3' " 
                    v-touch:swipe.left="handleLeftSwipe()"
                    v-touch:swipe.right="handleRightSwipe()"
                    >
                        <div class="grid grid-cols-4 justify-between items-center">
                            <div class="select-none">
                                <div class="text-xl">{{event.title}}</div>
                                <strong class="text-xs py-0.5 px-2  text-white text-center rounded" :class="event.isFinished ? 'bg-blue-500' : 'bg-green-500' ">{{ event.isFinished ? 'Finished' : 'Upcoming' }}</strong>
                            </div>
                            <div class="text-center col-span-2 select-none">
                                <strong class="" :class="index === 0 ? 'text-3xl' : 'text-xl' ">
                                    {{ event.leftTime }}
                                </strong>
                            </div>
                            <div class="text-right select-none">
                                <div :class="index === 0 ? 'text-xl' : 'text-base' ">{{$filters._DDMMYYYY(event.date) }}</div>
                                <div :class="index === 0 ? 'text-xl' : 'text-base' "> {{$filters._12HoursTime(event.date,event.time)}} </div>
                            </div>
                        </div>
                    </div>
                    <div class="eventDelete z-10 absolute right-4" :class="index === 0 ? 'top-6' : 'top-4' ">
                        <button @click="deleteEvent(event.id)">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 text-red-600 bg-red-100 p-2 rounded-md border border-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: "event_countdown",
    data() {
        return {
            msg: "Event Countdown",
            events:[],
            title: "",
            eventDate: "",
            eventTime: "",
            titleError: {
                status: false,
                message: "",
            },
            dateError: {
                status: false,
                message: "",
            },
            timeError: {
                status: false,
                message: "",
            },
        };
    },
    watch:{
        titleError : {
            handler(value) {
                if(value.status){
                    setTimeout(() => {
                        this.titleError= {
                            status: false,
                            message: "",
                        }
                    }, 2000);
                }
            },
            deep: true
        },
        dateError : {
            handler(value) {
                if(value.status){
                    setTimeout(() => {
                        this.dateError= {
                            status: false,
                            message: "",
                        }
                    }, 2000);
                }
            },
            deep: true
        },
        timeError : {
            handler(value) {
                if(value.status){
                    setTimeout(() => {
                        this.timeError= {
                            status: false,
                            message: "",
                        }
                    }, 2000);
                }
            },
            deep: true
        },
    },
    methods:{
        getLeftTime(eventDate,eventTime){
            const now = this.$moment(new Date()); 
            const end = this.$moment(`${eventDate} ${eventTime}`); 
            const duration = this.$moment.duration(end.diff(now));

            
            const milliSeconds = Math.floor(duration.asMilliseconds());
            
            // const months = Math.floor(duration.asMonths());
            const months = Math.floor(duration/(1000*60*60*24*7*4));
            const days = Math.floor( duration/(1000*60*60*24) );
            const hours = Math.floor( (duration/(1000*60*60)) % 24 );
            const minutes = Math.floor( (duration/1000/60) % 60 );
            const seconds = Math.floor( (duration/1000) % 60 );

            let leftTime='';
            let isFinished=false;
            if(months > 0){
                leftTime= `${months} ${months > 1 ? ' Months' : 'Month'}  left`;
            }
            else if(days > 0){
                if(days === 1){
                    leftTime= `${days} Day ${hours} Hours left`;
                }
                else{
                    leftTime= `${days} Days left`;
                }
            }
            else if(hours > 0){
                if(hours === 1){
                    leftTime= `${hours} Hour ${minutes} Minutes left`;
                }
                else{
                    leftTime= `${hours} Hours left`;
                }
            }
            else if(minutes > 0){
                leftTime= `${minutes} Minutes left`;
            }
            else if(seconds > 0){
                leftTime= `${seconds} ${seconds > 1 ? ' Seconds' : 'Second'}  left`;
            }
            else{
                leftTime= 'Event Finished';
                isFinished=true;
            }
            return {
                duration,
                milliSeconds,
                seconds,
                minutes,
                hours,
                days,
                months,
                leftTime,
                isFinished
            }
            
            // console.log({seconds});
            // console.log({minutes});
            // console.log({hours});
            // console.log({days});
            // console.log({months});
            // console.log({years});
        },
        getLatestTime(){
            this.events=this.events.map( (item) =>{
                let getLeftTime= this.getLeftTime(item.date,item.time);
                return {
                    ...item,
                    leftTime: getLeftTime.leftTime,
                    milliSeconds: getLeftTime.milliSeconds,
                    isFinished: getLeftTime.isFinished,
                }
            })
            .sort((a,b) => a.milliSeconds - b.milliSeconds)
            .sort((a,b) => a.isFinished - b.isFinished);
        },
        eventList(){
            this.$axios
                .get("http://localhost:3000/eventLists")
                .then((res) => {
                    if (res.status === 200) {
                        let newData=res.data.map( (item) =>{
                            let getLeftTime= this.getLeftTime(item.date,item.time);
                            return {
                                ...item,
                                leftTime: getLeftTime.leftTime,
                                milliSeconds: getLeftTime.milliSeconds,
                                isFinished: getLeftTime.isFinished,
                            }
                        })
                        .sort((a,b) => a.milliSeconds - b.milliSeconds)
                        .sort((a,b) => a.isFinished - b.isFinished);
                        this.events=newData;
                    }
                });
        },
        createEvent(){
            console.log(
                this.title,
                this.eventDate,
                this.eventTime,
            );
            let isValid=true;
            if(this.title == ''){
                this.titleError.status=true;
                this.titleError.message="Title is required";
                isValid=false;
            }
            if(this.eventDate == ''){
                this.dateError.status=true;
                this.dateError.message="Date is required";
                isValid=false;
            }
            if(this.eventTime == ''){
                this.timeError.status=true;
                this.timeError.message="Time is required";
                isValid=false;
            }
            if(isValid){
                this.$axios
                    .post("http://localhost:3000/eventLists/", {
                        title: this.title,
                        date: this.eventDate,
                        time: this.eventTime,
                    })
                    .then((res) => {
                        if (res.status === 201) {
                            this.eventList();
                            this.title='';
                            this.eventDate='';
                            this.eventTime='';
                        }
                    });
            }
        },
        deleteEvent(id){            
            this.$axios.delete('http://localhost:3000/eventLists/'+id).then((response)=>{
                if(response.status===200){
                    this.events=this.events.filter((item) => item.id !== id);
                    document.querySelectorAll('.eventCard').forEach(item =>{
                        item.style.right="0px";
                    });
                }
            });
        },
        handleLeftSwipe() {
            return function(direction,ev) {
                console.log('to left');
                const eventCard=ev.target.closest(".eventCard");
                eventCard.style.right="90px";
            }
        },
        handleRightSwipe(){
            return function(direction,ev) {
                console.log('to right');
                const eventCard=ev.target.closest(".eventCard");
                eventCard.style.right="0px";
            }
        }
    },
    mounted(){
        this.eventList();
        setInterval(()=>{
             this.getLatestTime();   
        },1000);
    }
};
</script>

<style scoped>
    .eventCard{
        position: relative;
        transition: 0.15s ease-in-out;
        right:0px;
        cursor: grab;
    }
    .eventCard:active{
        cursor: grabbing;
        background-color: rgba(167, 243, 208, var(--tw-bg-opacity));
    }
</style>
