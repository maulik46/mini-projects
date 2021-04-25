<template>
    <div>
        <h1 class="text-center text-2xl font-bold mb-5 mt-2">{{msg}}</h1>
        <div class="p-5">
            <div class="flex justify-center mb-4">
                <div class="mx-3">
                    <label class="font-bold">Marrital Status</label>
                    <div>
                        <select @change="userFilter()" v-model="mStatus" class="border rounded border-black p-2 px-5">
                            <option value="">Select Option</option>
                            <option value="1">Married</option>
                            <option value="0">UnMarried</option>
                        </select>
                    </div>
                </div>
                <div class="mx-3">
                    <label for="" class="font-bold">Childs</label>
                    <div>
                        <input @change="userFilter()" type="range" min="0" max="5" class="mr-2 mt-2" v-model="countChild" id="">
                        <span>{{countChild}}</span>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-12  gap-4" v-if="!noData">
                <div class="col-span-3 bg-red-100 p-4 rounded shadow-sm" v-for="user in filterUsers" :key="user.id">
                    <div>
                        <h1 class="text-2xl font-bold text-center">{{user.name}}</h1>
                        <div class="bg-white p-2 mt-2">
                            <h1 class="font-bold">Email</h1>
                            <h1 class="bg-yellow-200 px-3 rounded-sm inline-flex text-sm">{{user.email}}</h1>
                        </div>

                        <div class="bg-white p-2 mt-2">
                            <h1 class="font-bold">Phone No.</h1>
                            <h1 class="bg-blue-200 rounded-sm px-3 inline-flex text-sm">{{user.phone}}</h1>
                        </div>

                        <div class="bg-white p-2 mt-2">
                            <h1 class="font-bold">Address</h1>
                            <div>
                                <h1 class="bg-indigo-200 rounded-sm px-3 mt-1 inline-flex text-sm">{{user.address.street}} {{user.address.city}} {{user.address.zipcode}}</h1>
                            </div>
                        </div>

                        <div class="bg-white p-2 mt-2">
                            <h1 class="font-bold">Marrital Status</h1>
                            <h1 class="bg-red-500 text-white rounded-sm px-3 inline-flex text-sm">{{user.isMarried ===1 ? "Married" : "UnMarried"}}</h1>
                        </div>
                        <div class="bg-white p-2 mt-2">
                            <h1 class="font-bold">Childs</h1>
                            <h1 class="bg-green-400 text-white rounded-sm px-3 inline-flex text-sm">{{user.child}}</h1>
                        </div>
                        <div class="bg-white p-2 mt-2">
                            <h1 class="font-bold">Hobby</h1>
                            <div v-for="(hobby,index) in user.hobby" class="bg-purple-300 rounded px-2 mr-2 inline-block" :key="index">
                                <h1>
                                    {{hobby}}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="noData">
                <h1 class="text-center">No data available.</h1>
            </div>
        </div>
    </div>
</template>
<script>
// import axios from "axios";

export default {
    name:'filterData',
    data(){
        let userArray=[
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874"
                    },
                    "phone": "1-770-736-8031 x56442",
                    "isMarried":1,
                    "child":1,
                    "hobby":["reading","cooking"]
                    
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                    "address": {
                    "street": "Victor Plains",
                    "suite": "Suite 879",
                    "city": "Wisokyburgh",
                    "zipcode": "90566-7771"
                    },
                    "phone": "010-692-6593 x09125",
                    "isMarried":1,
                    "child":2,
                    "hobby":["travelling"]
                    
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "username": "Samantha",
                    "email": "Nathan@yesenia.net",
                    "address": {
                    "street": "Douglas Extension",
                    "suite": "Suite 847",
                    "city": "McKenziehaven",
                    "zipcode": "59590-4157"
                    },
                    "phone": "1-463-123-4447",
                    "isMarried":0,
                    "child":0,
                    "hobby":["cooking"]
                    
                },
                {
                    "id": 4,
                    "name": "Patricia Lebsack",
                    "username": "Karianne",
                    "email": "Julianne.OConner@kory.org",
                    "address": {
                    "street": "Hoeger Mall",
                    "suite": "Apt. 692",
                    "city": "South Elvis",
                    "zipcode": "53919-4257"
                    },
                    "phone": "493-170-9623 x156",
                    "isMarried":0,
                    "child":0,
                    "hobby":["writting","reading"]
                    
                },
                {
                    "id": 5,
                    "name": "Chelsey Dietrich",
                    "username": "Kamren",
                    "email": "Lucio_Hettinger@annie.ca",
                    "address": {
                    "street": "Skiles Walks",
                    "suite": "Suite 351",
                    "city": "Roscoeview",
                    "zipcode": "33263"
                    },
                    "phone": "(254)954-1289",
                    "isMarried":1,
                    "child":2,
                    "hobby":["cricket","travelling"]
                    
                },
                {
                    "id": 6,
                    "name": "Mrs. Dennis Schulist",
                    "username": "Leopoldo_Corkery",
                    "email": "Karley_Dach@jasper.info",
                    "address": {
                    "street": "Norberto Crossing",
                    "suite": "Apt. 950",
                    "city": "South Christy",
                    "zipcode": "23505-1337"
                    },
                    "phone": "1-477-935-8478 x6430",
                    "isMarried":1,
                    "child":3,
                    "hobby":["singing","travelling"]
                    
                },
                {
                    "id": 7,
                    "name": "Kurtis Weissnat",
                    "username": "Elwyn.Skiles",
                    "email": "Telly.Hoeger@billy.biz",
                    "address": {
                    "street": "Rex Trail",
                    "suite": "Suite 280",
                    "city": "Howemouth",
                    "zipcode": "58804-1099"
                    },
                    "phone": "210.067.6132",
                    "isMarried":0,
                    "child":0,
                    "hobby":["drawing","swimming"]
                    
                },
                {
                    "id": 8,
                    "name": "Nicholas Runolfsdottir V",
                    "username": "Maxime_Nienow",
                    "email": "Sherwood@rosamond.me",
                    "address": {
                    "street": "Ellsworth Summit",
                    "suite": "Suite 729",
                    "city": "Aliyaview",
                    "zipcode": "45169"
                    },
                    "phone": "586.493.6943 x140",
                    "isMarried":0,
                    "child":0,
                    "hobby":["boxing","cooking"]
                    
                },
                {
                    "id": 9,
                    "name": "Glenna Reichert",
                    "username": "Delphine",
                    "email": "Chaim_McDermott@dana.io",
                    "address": {
                    "street": "Dayna Park",
                    "suite": "Suite 449",
                    "city": "Bartholomebury",
                    "zipcode": "76495-3109"
                    },
                    "phone": "(775)976-6794 x41206",
                    "isMarried":1,
                    "child":2,
                    "hobby":["wresteling","travelling"]
                    
                },
                {
                    "id": 10,
                    "name": "Clementina DuBuque",
                    "username": "Moriah.Stanton",
                    "email": "Rey.Padberg@karina.biz",
                    "address": {
                    "street": "Kattie Turnpike",
                    "suite": "Suite 198",
                    "city": "Lebsackbury",
                    "zipcode": "31428-2261"
                    },
                    "phone": "024-648-3804",
                    "isMarried":1,
                    "child":0,
                    "hobby":["writting"]
                    
                }
            ];

        return{
            msg:'Filter Data',
            users:userArray,
            filterUsers: userArray,
            countChild:0,
            mStatus:'',
            noData:false
        }
    },
    methods:{
        userFilter(){
            this.filterUsers=this.users;
            let newUsers=this.filterUsers.filter(user=>user.isMarried==this.mStatus && user.child==this.countChild);
            if(newUsers.length > 0){
                this.filterUsers=newUsers;
                this.noData=false; 
            }
            else{
                this.noData=true;
            } 
        }
    },
    mounted(){
    }
}
</script>