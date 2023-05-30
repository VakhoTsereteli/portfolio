<template>
    <MainComponent/>
    <br>
    <div class="projects">
      <div class="project" v-for="(project, index) in projects" :key="index">
        <a :href="project.path">
          <img :src="project.img"/>
          <h1 class="name">{{ project.name }}</h1>
        </a>
      </div>
    </div>
  </template>
  
  <script>
    import "./Home.css";
    import { useRoute } from "vue-router";
    import MainComponent from "../../components/Main/Main.vue";
  
    export default {
      name: "HomePage",
      components: {
        MainComponent,
      },
      data() {
        return {
          route: useRoute(),
          projects: [
            {
              name: "Color Picker",
              path: "/colorpicker",
              img: [require("../../assets/img/ColorPicker.png")],
            },
            {
              name: "Curency Calculator",
              path: "/carrencycalculator",
              img: [require("../../assets/img/ColorPicker.png")],
            },
          ],
        };
      },
      methods: {
        /* test() {
          fetch(
            "https://api.fastforex.io/fetch-one?from=usd&to=gel&api_key=67c030db8d-4cf9a781a1-rv2gbf"
          )
            .then((res) => res.json())
            .then((data) => {

            });
        }, */
      },
      mounted() {
        document.title = this.route.name;
      },
    };
  </script>
  