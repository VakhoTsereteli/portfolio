<template>
    <div>
        <MainComponent/>
        <br>
        <h1>Snake Game</h1>
    </div>
</template>

<script>
    import "./Snake.css";
    import MainComponent from "../../../Main/Main.vue"

    export default{
        name: "SnakeGame",
        components: {
            MainComponent
        }
    }
</script>