<template>
  <div class="m-5">
    <div class="grid grid-cols-12 justify-center items-center">
        <div class="lg:col-start-4 lg:col-span-6 md:col-start-3 md:col-span-8 col-span-12 bg-pink-100  py-4 px-6 rounded shadow-md">
            <h1 class="text-3xl font-semibold text-center mb-10">{{ msg }}</h1>
            <div class="my-3  p-2 rounded text-white font-bold" :class="{'hidden' : isHidden,'bg-green-400':isadded,'bg-red-400':isRemoved}">
                <div class="flex justify-between items-center">
                    <h1>{{todoMessage}}</h1>
                    <button type="button" class="rounded p-1 px-2 bg-transparent" @click="isHidden=true,isRemoved=false,isadded=false">
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out text-white hover:text-red-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="flex items-center mb-7 shadow-sm">
                <input
                type="text"
                class="w-full mr-0 p-1.5 rounded-r-none rounded-l border-2 border-gray-300 focus:outline-none"
                :class="{'focus:border-pink-400' : isUpdate===false,'focus:border-yellow-400':isUpdate===true}"
                placeholder="Enter here"
                @keyup.enter="!isUpdate ? addTodo() : updateTodoData()"
                @keyup="writeTodo.length===0 && isUpdate===true ? isUpdate=false : '' "
                v-model="writeTodo"
                />
                <button
                v-if="!isUpdate"
                class="bg-pink-600 text-white font-semibold rounded-l-none focus:outline-none hover:bg-pink-500 rounded-r p-2 px-5"
                @click="addTodo()"
                >
                Add
                </button>
                <button
                v-else-if="isUpdate"
                class="bg-yellow-600 text-white font-semibold rounded-l-none focus:outline-none hover:bg-yellow-500 rounded-r p-2 px-5"
                @click="updateTodoData()"
                >
                Update
                </button>
            </div>
            <ul class="max-h-96 overflow-auto">
                <li
                class="bg-pink-200 hover:bg-pink-300 p-2 my-3 rounded px-4 text-lg font-bold flex justify-between"
                v-for="(todo,index) in myTodos.slice().reverse()"
                :key="index"
                >
                {{ todo.name }} 
                    <div>
                        <button type="button" class="rounded p-1 px-2 outline-none focus:outline-none border bg-yellow-500 cursor-pointer hover:bg-yellow-600 mr-2"  @click="updateTodo(todo)">
                            <svg width="18" height="18"  fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </button>

                        <button type="button" class="rounded p-1 px-2 outline-none focus:outline-none border bg-red-500 cursor-pointer hover:bg-red-600" @click="removeTodo(todo.id)">
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out text-white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                        </button>
                    </div>
                </li>
                <li v-if="myTodos.length==0" class="font-light text-2xl text-center text-pink-600">Empty</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "todos",
  data() {
    return {
      msg: "Todos App",
      myTodos: [],
      writeTodo: "",
      todoMessage:'',
      isHidden:true,
      isadded: false,
      isRemoved:false,
      isUpdate:false,
      updateTodoId:''
    };
  },
  methods: {
    addTodo() {
        if (this.writeTodo && this.isUpdate==false) {
            let allTodoId=this.myTodos.map(item=>item.id);
            let maxId=allTodoId.reverse();
            let todoId=this.myTodos ? maxId[0] + 1 : 0;
            
            let todoObj = {
                id: todoId,
                name: this.writeTodo,
            };
            
            axios.post("http://localhost:3000/todos", todoObj).then((response) => {
            
            if (response.status === 201) {
                this.viewTodo();
                this.writeTodo = "";
                this.isHidden=false;
                this.todoMessage="New Todo Created.";
                this.isadded=true;
            }
            });
        }
    },
    removeTodo(id){
        let todoDelete=confirm('Are you sure?');
        if(todoDelete){
            axios.delete("http://localhost:3000/todos/"+id).then((response) => {
                if (response.status === 200) {
                    this.viewTodo();
                    this.isHidden=false;
                    this.todoMessage="Todo removed."
                    this.isRemoved=true;
    
                }
            });
        }
        
    },
    viewTodo() {
      axios.get("http://localhost:3000/todos").then((response) => {
        let todos = response.data;
        this.myTodos = todos;
      });
    },
    updateTodo(todo){
        this.writeTodo='';

        this.writeTodo=todo.name;
        this.updateTodoId=todo.id;

        this.isUpdate=true;
    },
    updateTodoData(){
        let updateObj={
            'id':this.updateTodoId,
            'name': this.writeTodo
        };
        axios.put("http://localhost:3000/todos/"+updateObj.id,updateObj).then((response) => {
            if(response.status===200){
                this.isUpdate=false;
                this.writeTodo='';
                this.viewTodo();
            }
        });
    }
  },
  mounted() {
    this.viewTodo();
  },
};
</script>

<style scoped></style>
