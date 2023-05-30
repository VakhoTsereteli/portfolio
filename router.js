import {createRouter, createWebHistory} from "vue-router";
import Home from "./src/pages/Home/Home.vue";
import ColorPicker from "./src/Projects/ColorPicker/ColorPicker.vue"
import CurrencyCalculator from "./src/Projects/CurrencyCalculator/CarencyCalculator.vue"
 export const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/colorpicker",
        name: "Color Picker",
        component: ColorPicker
    },
    {
        path: "/carrencycalculator",
        name: "ვალუტის კალკულატორი",
        component: CurrencyCalculator,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;


// 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