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
                        :min="$moment().add(1,'days').format('YYYY-MM-DD')"
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
                        step="5" 
                         min="02:00"
                         max="04:00"
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
                        class="py-2.5 px-5 text-center text-white font-semibold bg-green-400 rounded-sm text-sm"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
        <div class="mt-3 lg:col-span-8 col-span-12 border-2 p-5 rounded-lg bg-white shadow-md">
            <ul>
                <li v-for="(event,index) in events" :key="index">
                    <div class="bg-green-100 shadow-sm border  p-3 w-full rounded-lg mb-2">
                        <div class="flex justify-between items-center">
                            <div class="text-3xl">{{event.title}}</div>
                            <strong class="text-2xl">{{$filters.DDMMYYYY(event.date) }}</strong>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="text-xs p-0.5 bg-green-500 text-white text-center rounded">Upcoming</div>
                            <strong class="text-2xl"> {{event.time}} </strong>
                        </div>
                        
                        
                        
                    </div>
                </li>
                <li>
                    <div class="shadow-sm border bg-gray-50 p-4 w-full rounded-lg mb-2 flex justify-between items-center">
                        <div>event 1 <div class="text-base">09-Apr 2022</div></div>
                        <strong>12:00:00 <div class="text-sm">Upcoming</div></strong>
                        
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
        eventList(){
            this.$axios
                .get("http://localhost:3000/eventLists")
                .then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        this.events=res.data;
                    }
                });
        },
        createEvent(){
            console.log(
                this.title,
                this.eventDate,
                this.eventTime,
            );
            if(this.title == ''){
                this.titleError.status=true;
                this.titleError.message="Title is required";
            }
            if(this.eventDate == ''){
                this.dateError.status=true;
                this.dateError.message="Date is required";
            }
            if(this.eventTime == ''){
                this.timeError.status=true;
                this.timeError.message="Time is required";
            }
            // return false;
            // this.$axios
            //     .post("http://localhost:3000/eventLists/", {
            //         title: this.title,
            //         date: this.eventDate,
            //         time: this.eventTime,
            //     })
            //     .then((res) => {
            //         console.log(res);
            //         if (res.status === 201) {
            //         console.log(res);
                        
            //         }
            //     });
        }
    },
    mounted(){
        this.eventList()
    }
};
</script>

<style scoped>

</style>
