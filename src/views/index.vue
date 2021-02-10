<template>
  <div class="m-5">
    <!-- <h1 class="text-center text-2xl font-bold mb-5" v-if="projectList.length!==0">Mini Projects</h1> -->
    <div class="grid grid-cols-4 gap-4">
        <div v-for="(project,index) in projectList" :key="index" class="bg-blue-500 py-4 px-2 rounded-md shadow-md text-white hover:opacity-80 ">
            <span class="bg-white text-black font-bold text-xl px-3 py-1 rounded">{{index+1}}</span>
            <div class="text-left font-semibold text-xl mt-4">{{project.name}}</div>
            <router-link :to="project.link">
                <button class="bg-white ring-4 mr-2 focus:outline-none ring-blue-300 text-black px-1 mt-4 float-right py-1 rounded-full font-semibold shadow transition ease-in-out duration-100 transform hover:-translate-y-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="h-6 w-6 text-blue-800" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
            </router-link>
        </div>
        
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'projectList',
  data(){
      return{
          msg:'This is home page.',
          projectList:[]
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
}
</script>

<style scoped></style>
