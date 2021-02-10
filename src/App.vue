<template>
    <navbar/>
    <router-view></router-view>
</template>

<script>
import navbar from '@/components/navbar';

export default {
  name: 'App',
  components:{
    navbar
  }
  
}
</script>

<style>
*{
    margin: 0px;
    padding: 0px;
}

#app {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
