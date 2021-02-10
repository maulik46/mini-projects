<template>
  <!-- <div> -->
    <nav
      class="bg-green-400 shadow-md w-full p-2 flex-row flex justify-between items-center px-5 z-30"
    >
      <router-link to="/">
        <span class="text-xl font-semibold text-white hover:text-gray-100">Mini-Projects</span>
      </router-link>
      <div>
        <button
          class="text-white cursor-pointer bg-green-600 text-base font-semibold px-2 py-1 focus:outline-none hover:bg-green-700 rounded-sm"
          @click="show_menu = !show_menu"
        >
          <svg
            class="h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  <!-- </div> -->
  <div
    :style="{ display: show_menu ? 'none' : 'block','width': '300px' }"
    class="fixed shadow-md bg-white z-50 h-screen flex justify-start flex-col items-center top-0 px-2"
  >
    <template v-for="(project,index) in projectList" :key="index">
    <router-link :to="project.link" class="w-full mt-1">
      <div
        class="text-black hover:text-green-900 flex justify-between items-start font-bold rounded my-2 px-3 py-2 hover:bg-green-200"
        @click="show_menu = !show_menu"
      >
        <div>{{index+1}}.</div> 
        <div class="text-left ml-2 w-full">{{project.name}}</div>
      </div>
    </router-link>
    </template>
  </div>
  <div class="w-full z-40 h-screen fixed top-0 left-0" @click="show_menu = !show_menu" :style="{ display: show_menu ? 'none' : 'block','background-color':'rgba(0,0,0,0.5)' }">
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "navbar",
  data(){
      return{
          projectList:[],
          show_menu: true,

      }
  },
  methods:{
    allProjects(){
      axios.get("http://localhost:3000/projectList").then((response) => {
        let projects = response.data;
        this.projectList = projects;
      });

      
    }
  },
  mounted(){
    this.allProjects();
  }
};
</script>

<style scoped>
</style>
