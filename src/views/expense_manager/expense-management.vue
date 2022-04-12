<template>
  <div class="m-5">
    <h1 class="text-2xl font-semibold text-center my-3">{{ msg }}</h1>
    <div class="grid grid-cols-12 gap-4">
      <form
        @submit.prevent="submitEntry()"
        class="py-7 col-span-12 lg:col-span-4 md:col-span-12 bg-purple-200 rounded shadow-md"
      >
        <div class="grid grid-cols-12 gap-3 mb-3 px-7 justify-between">
          <div
            class="flex shadow-md items-center justify-center col-span-6 hover:bg-red-50 bg-white py-2 rounded"
          >
            <input
              id="expense"
              type="radio"
              name="checked-demo"
              value="0"
              class="bg-white h-4 w-6 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none"
              checked
              v-model="entryType"
            />
            <label
              for="expense"
              class="mx-3 text-sm font-bold text-red-500 cursor-pointer"
              >Expense</label
            >
          </div>
          <div
            class="flex shadow-md items-center justify-center col-span-6 hover:bg-green-50 bg-white py-2 rounded"
          >
            <input
              id="income"
              type="radio"
              name="checked-demo"
              value="1"
              class="bg-white h-4 w-6 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none"
              v-model="entryType"
            />
            <label
              for="income"
              class="mx-3 text-sm font-bold text-green-500 cursor-pointer"
              >Income</label
            >
          </div>
        </div>
        <div>
          <div class="w-full max-w-sm mb-3 mx-auto">
            <label for="title" class="text-gray-800 text-sm font-semibold"
              >Title</label
            >
            <div class="relative text-gray-400 focus-within:text-gray-600">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <input
                id="title"
                type="text"
                class="py-2 px-4 bg-white placeholder-gray-400 text-gray-900 rounded shadow-md appearance-none w-full block pl-12 focus:outline-none"
                placeholder="Title"
                v-model="entryTitle"
              />
            </div>
          </div>
          <div class="w-full max-w-sm mb-3 mx-auto">
            <label for="Amount" class="text-gray-800 text-sm font-semibold"
              >Amount</label
            >
            <div class="relative text-gray-400 focus-within:text-gray-600">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <input
                id="Amount"
                type="number"
                class="py-2 px-4 bg-white placeholder-gray-400 text-gray-900 rounded shadow-md appearance-none w-full block pl-12 focus:outline-none"
                placeholder="Amount"
                v-model="entryAmount"
              />
            </div>
          </div>
          <div class="w-full max-w-sm mb-3 mx-auto">
            <label for="date" class="text-gray-800 text-sm font-semibold"
              >Date</label
            >
            <div class="relative text-gray-400 focus-within:text-gray-600">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <input
                id="date"
                type="date"
                class="py-2 px-4 bg-white placeholder-gray-400 text-gray-900 rounded shadow-md appearance-none w-full block pl-12 focus:outline-none"
                v-model="entryDate"
              />
            </div>
          </div>
          <div class="w-full max-w-sm mx-auto">
            <label for="description" class="text-gray-800 text-sm font-semibold"
              >Description</label
            >
            <div class="relative text-gray-400 focus-within:text-gray-600">
              <div
                class="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <textarea
                id="description"
                rows="3"
                placeholder="Description"
                class="py-2 px-4 bg-white placeholder-gray-400 text-gray-900 rounded shadow-md appearance-none w-full block pl-12 focus:outline-none resize-none"
                v-model="entryDescription"
              ></textarea>
            </div>
            <div class="mt-4">
              <button
                class="w-full bg-green-200 focus:outline-none text-green-800 hover:bg-green-300 font-bold rounded shadow p-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <div class="p-3.5 col-span-12 lg:col-span-8 md:col-span-12 bg-purple-100 rounded shadow-md " >
        <div class="bg-white px-2 rounded shadow">
          <div class="flex items-center flex-wrap justify-between">
            <div class="py-2">
              <button
                class="bg-purple-200 m-2 rounded focus:outline-none text-purple-700 shadow py-1 px-4 text-sm hover:bg-purple-300 font-bold"
                @click="showToday()"
              >
                Today
              </button>
              <button
                class="bg-purple-200 m-2 rounded focus:outline-none text-purple-700 shadow py-1 px-4 text-sm hover:bg-purple-300 font-bold"
                @click="showMonth()"
              >
                This Month
              </button>
              <button
                class="bg-purple-200 m-2 rounded focus:outline-none text-purple-700 shadow py-1 px-4 text-sm hover:bg-purple-300 font-bold"
                @click="showYear()"
              >
                This Year
              </button>
              <button
                class="bg-purple-400 m-2 rounded focus:outline-none text-purple-100 shadow py-1 px-4 text-sm hover:bg-purple-500 font-bold"
                @click="getAllEntries()"
              >
                Show All
              </button>
            </div>
            <div class="py-2 pr-2">
              <div class="w-full max-w-sm mx-auto">
                <div class="relative text-gray-400 focus-within:text-gray-600">
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  >
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    type="date"
                    id="dateFilter"
                    class="py-1 px-4 bg-gray-50 placeholder-gray-400 text-gray-900 rounded shadow appearance-none w-full block pl-12 focus:outline-none"
                    @change="showDate()"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white mt-5 rounded shadow p-4 overflow-auto" style="height:400px">
          <div class="py-2 mb-3 flex items-center" v-if="allEntries.length!==0">
            <div class="p-1 px-2 bg-red-100  text-xs font-bold rounded-sm shadow" >{{totalExpense}} RS.</div>
              <span class="text-sm text-red-600 mx-1 font-extrabold">Expense</span>
            <div class="p-1 px-2 bg-green-100 ml-3 text-xs font-bold rounded-sm shadow" >{{totalIncome}} RS.</div>
              <span class="text-sm text-green-600 mx-1 font-extrabold">Income</span>
          </div>
          <div v-else>
            <h1 class="font-semibold text-center">No data available.</h1>
          </div>
          <div class="grid grid-cols-12 gap-2">
            <div v-for="(entry,index) in allEntries.slice().reverse()" :key="index" class="col-span-12 lg:col-span-4 md:col-span-6">
              <div class=" transition ease-in-out duration-200 transform hover:-translate-y-0.5 rounded shadow p-2" :class="entry.type==1 ? 'bg-green-100' : 'bg-red-100' ">
                <div class="flex justify-between items-center flex-wrap">
                  <div class="font-bold bg-gray-50 shadow-sm p-1 text-xs rounded px-2" >
                    {{entry.date}}
                  </div>
                  <div class="font-bold shadow-sm p-1 text-xs rounded px-2"  :class="entry.type==1 ? 'bg-green-300' : 'bg-red-300' ">
                    {{entry.amount}} RS.
                  </div>
                </div>
                <h1 class="font-bold my-2">{{entry.title.charAt(0).toUpperCase() + entry.title.substring(1)}}</h1>
                <p class="text-justify text-sm">
                  {{entry.description}}
                </p>
                <div class="flex justify-end items-center mt-3">
                  
                  <button class="focus:outline-none text-sm p-1 text-red-900 bg-red-400 shadow rounded hover:opacity-70"  @click="removeEntry(entry.id)">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out text-white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "expenseManagement",
  data() {

    let today_date=new Date();
    let full_date=`${today_date.getFullYear()}-${String(today_date.getMonth()+1).padStart(2, '0')}-${today_date.getDate()}`;

    return {
      msg: "Expense Manager",
      entryType: "",
      entryTitle: "",
      entryAmount: "",
      entryDescription: "",
      entryDate: full_date,
      allEntries:[],
      oldArray:[],
      totalExpense:0,
      totalIncome:0,
    };
  },
  methods: {
    submitEntry() {
      if (this.entryTitle.length === 0 || this.entryAmount.length === 0 || this.entryDate.length === 0 ){
        alert("Please fill the all filed.");
      } 
      else {
        let newDate = new Date(this.entryDate);
        let fullDate = `${newDate.getDate()}-${newDate.getMonth()+1}-${newDate.getFullYear()}`;
        // console.log(fullDate);

        let entryObj = {
          title: this.entryTitle,
          amount: Number(this.entryAmount),
          description: this.entryDescription,
          type: Number(this.entryType),
          date: fullDate,
        };
        axios
          .post("http://localhost:3000/expenses", entryObj)
          .then((response) => {
            if (response.status === 201) {
              this.getAllEntries();
              this.entryTitle='';
              this.entryAmount='';
              this.entryDescription='';
            }
          });
      }
    },
    getAllEntries(){
      axios.get("http://localhost:3000/expenses").then((response) => {
        let entry = response.data;
        this.allEntries = entry;
        this.oldArray = entry;
        this.getExpesneIncomeValue(this.allEntries);
      });

    },
    getExpesneIncomeValue(myArray){
      this.totalExpense=0;
      this.totalIncome=0;
        myArray.map((item)=>{
          if(item.type===0){
            return this.totalExpense+=item.amount;
          }
          else if(item.type===1){
            return this.totalIncome+=item.amount;

          }
          
        });
    },

    removeEntry(id){
      let confirmEntry=confirm('Are you sure?');
      if(confirmEntry){
        axios.delete('http://localhost:3000/expenses/'+id).then((response)=>{
          if(response.status===200){
            this.getAllEntries();
          }
        });
      }
    },

    showToday(){
      this.allEntries=this.oldArray;
      let getDate=new Date();
      let today=`${getDate.getDate()}-${getDate.getMonth()+1}-${getDate.getFullYear()}`;
      
      let newArray=this.allEntries.filter(item=>{
        return item.date == today;
      });
      this.allEntries=newArray;
      this.getExpesneIncomeValue(this.allEntries);

    },
    showMonth(){
      this.allEntries=this.oldArray;
      let getDate=new Date();
      let currentMonth=getDate.getMonth()+1;
      let currentYear=getDate.getFullYear();

      let newArray=this.allEntries.filter(item=>{
        let findMonth=item.date.split('-')[1];
        let findYear=item.date.split('-')[2];

        return findMonth == currentMonth && findYear == currentYear;
      });

      this.allEntries=newArray;
        this.getExpesneIncomeValue(this.allEntries);

    },
    showYear(){
      this.allEntries=this.oldArray;
      let getDate=new Date();
      let currentYear=getDate.getFullYear();

      let newArray=this.allEntries.filter(item=>{
        let findYear=item.date.split('-')[2];
        return findYear == currentYear;
      });
      
      this.allEntries=newArray;
        this.getExpesneIncomeValue(this.allEntries);

    },
    showDate(){
      let dateValue=document.querySelector('#dateFilter').value;
      console.log(dateValue);
      this.allEntries=this.oldArray;
      let getDate=new Date(dateValue);
      let findDate=`${getDate.getDate()}-${getDate.getMonth()+1}-${getDate.getFullYear()}`;
      
      let newArray=this.allEntries.filter(item=>{
        return item.date == findDate;
      });
      this.allEntries=newArray;
        this.getExpesneIncomeValue(this.allEntries);

    }
  },
  mounted(){
    this.getAllEntries();
  }
};
</script>

<style scoped></style>
