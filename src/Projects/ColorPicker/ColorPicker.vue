<template>
    <div>
      <MainComponent/>
      <br>
      <div class="main">
        <h1 style="text-align: center; color: white;">Color Picker</h1>
        <div class="colorpicker">
          <br>
          <div class="colored" :style="{backgroundColor: currentColor}">
          </div>
          <input type="color" id="picker" v-model="currentColor"/>
          <div class="select">
            <button id="copy" @click="copyCode">COPY</button>
            <input disabled id="colorCode" type="text" v-model="currentColor"/>
          </div>
          <div class="main_colors">
            <button @click="currentColor = color.value" class="main_color" type="color" v-for="(color, index) in colors" :key="index" :style="{ backgroundColor: color.value }"></button>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
    import "./ColorPicker.css";
    import MainComponent from "../../components/Main/Main.vue";

    export default {
      name: "ColorPicker",
      components: {
        MainComponent,
      },
      data() {
        return {
          colors: [
            { name: "white", value: "#FFFFFF" },
            { name: "black", value: "#000000" },
            { name: "red", value: "#FF0000" },
            { name: "blue", value: "#0000FF" },
            { name: "yellow", value: "#FFFF00" }
          ],
          currentColor: "#FFFFFF",
          shadowColor: null
        }
      },
      methods: {
        copyCode(){
          navigator.clipboard.writeText(this.currentColor)
          alert("Color Code Is Copied")
        }
      }
    }
    
</script>

  