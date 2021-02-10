<template>
<div class="px-2">
  <div class="my-2 rounded-lg p-5 flex flex-col justify-center items-center" :style="{height:'89vh',backgroundColor: bgColor.length !==0 ? bgColor : '#efff98'}">
      <h1 class="text-xl font-semibold text-center" :style="{color:textColor}" >{{ msg }}</h1>
      <div class="flex justify-center items-center">
        <input type="text" class="px-3 p-2 rounded-l   focus:shadow-lg my-3 tracking-widest text-3xl w-4/6 bg-white  focus:outline-none border-4 border-green-400" v-model="bgColor" placeholder="#efff98"  >
        <button class="w-24 py-3.5 focus:outline-none hover:opacity-90 rounded-r font-bold  border-green-400 bg-green-400 text-white border-4" @click="getRadndomColor">Random</button>
      </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'index',
  data(){
      return{
          msg:'Background Color Generator',
          bgColor:'#efff98',
          textColor:'#ffffff'
      
      }
  },
  methods:{
    getRadndomColor(){
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      this.bgColor=color;
      // return color;
    }
  },
  mounted(){
      this.getRadndomColor();
  },
  watch:{
    bgColor(newValue){
          // Variables for red, green, blue values
          var r, g, b, hsp;
          
          // Check the format of the color, HEX or RGB?
          if (newValue.match(/^rgb/)) {

              // If RGB --> store the red, green, blue values in separate variables
              newValue = newValue.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
              
              r = newValue[1];
              g = newValue[2];
              b = newValue[3];
          } 
          else {
              
              // If hex --> Convert it to RGB: http://gist.github.com/983661
              newValue = +("0x" + newValue.slice(1).replace( 
              newValue.length < 5 && /./g, '$&$&'));

              r = newValue >> 16;
              g = newValue >> 8 & 255;
              b = newValue & 255;
          }
          
          // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
          hsp = Math.sqrt(
          0.299 * (r * r) +
          0.587 * (g * g) +
          0.114 * (b * b)
          );

          // Using the HSP value, determine whether the color is light or dark
          if (hsp>127.5) {
            this.textColor='#000000';
          } 
          else {
            this.textColor='#ffffff';

          }
    }
  }
}
</script>

<style scoped></style>
