<template>
    <MainComponent/>
    <br>
    <div class="main">
        <h1 class="title">{{ route.name }}</h1>
        <div class="currencies">
            <div>
                <h1>{{ currencies.EUR.flag+" "+currencies.EUR.code }}</h1>
                <h1 style="margin-top: 10px;" v-show="EUR">{{ EUR }}</h1>
            </div>
            <div>
                <h1>{{ currencies.USD.flag+" "+currencies.USD.code }}</h1>
                <h1 style="margin-top: 10px;" v-show="USD">{{ USD }}</h1>
            </div>
            <div>
                <h1>{{ currencies.GBP.flag+" "+currencies.GBP.code }}</h1>
                <h1 style="margin-top: 10px;" v-show="GBP">{{ GBP }}</h1>
            </div>
        </div>
        <div class="calculator">
            <div>
                <div>
                    <button class="choose" @click="FromMenu = !FromMenu">
                        {{ fromSelected && fromSelected.flag }}
                        {{fromSelected && fromSelected.code }}
                        <i class="bi bi-caret-up-fill arrow" v-if="FromMenu"></i>
                        <i class="bi bi-caret-down-fill arrow" v-else></i>
                    </button>
                    <br>
                    <div v-show="FromMenu">
                        <li v-for="currency in currencies" :key="currency" @click="SelectFrom(currency)">
                            <h2 style="margin-left: 30px;">{{ currency.flag }}</h2>
                            <h2 style="position: absolute; right: 0;">
                                {{ currency.code }}
                            </h2>
                        </li>
                    </div>
                    <br>
                    <label v-if="FromMenu === false">
                        <h4>From</h4>
                    </label>
                    <input type="text" v-model="fromAmount" v-if="FromMenu === false"/>
                </div>
                <button id="change" @click="changeCurrencies">
                    <i class="bi bi-arrow-left-right"></i>
                </button>
                <div>
                    <button class="choose" @click="ToMenu = !ToMenu">
                        {{ toSelected && toSelected.flag }}
                        {{ toSelected && toSelected.code }}
                        <i class="bi bi-caret-up-fill arrow" v-if="ToMenu"></i>
                        <i class="bi bi-caret-down-fill arrow" v-else></i>
                    </button>
                    <br>
                    <div v-show="ToMenu">
                        <li v-for="currency in currencies" :key="currency" @click="SelectTo(currency)">
                            <h2 style="margin-left: 30px;">{{ currency.flag }}</h2>
                            <h2 style="position: absolute; right: 0;">
                                {{ currency.code }}
                            </h2>
                        </li>
                    </div>
                    <br>
                    <label v-if="ToMenu === false">
                        <h4>To</h4>
                    </label>
                    <input type="text" v-model="toAmount" v-if="ToMenu === false"/>
                </div>
            </div>
            <button @click="currencyChange" id="convert" v-if="FromMenu === false && ToMenu === false">
                კონვერტაცია
            </button>
        </div>
    </div>
</template>

<script>
    import currencies from "./currencies.json";
    import "./CarencyCalculator.css";
    import MainComponent from "../../components/Main/Main.vue";
    import { useRoute } from "vue-router"

    const test = 10 * 5

    export default{
        name: "CurrencyCalculator",
        components: {
            MainComponent
        },
        data(){
            return{
                showMenu: false,
                fromAmount: null,
                toAmount: null,
                countryDatas: null,
                fromSelected:  {
                    "code": "USD",
                    "flag": "🇺🇸",
                    "active": "active"
                },
                FromMenu: false,
                toSelected:  {
                    "code": "GEL",
                    "flag": "🇬🇪",
                    "active": "active"
                },
                ToMenu: false,
                currencies: currencies,
                test2: test,
                EUR: null,
                USD: null,
                GBP: null,
                route: useRoute()
            };
        },
        methods: {
            currencyChange(){
                fetch(
                    `https://v6.exchangerate-api.com/v6/4f97de937a2f5ca4c59a5c1c/latest/${this.fromSelected && this.fromSelected.code}`
                    )
                .then((res)=> res.json())
                .then((data)=> {

                    this.toAmount = data.conversion_rates[this.toSelected.code].toFixed(2)
                    this.toAmount = this.fromAmount * this.toAmount
                });
            },
            GetEUR(){
                fetch(
                    `https://v6.exchangerate-api.com/v6/4f97de937a2f5ca4c59a5c1c/latest/EUR`
                    )
                .then((res)=> res.json())
                .then((data)=> {

                    this.EUR = data.conversion_rates.GEL.toFixed(2)
                });
            },
            GetUSD(){
                fetch(
                    `https://v6.exchangerate-api.com/v6/4f97de937a2f5ca4c59a5c1c/latest/USD`
                    )
                .then((res)=> res.json())
                .then((data)=> {

                    this.USD = data.conversion_rates.GEL.toFixed(2)
                });
            },
            GetGBP(){
                fetch(
                    `https://v6.exchangerate-api.com/v6/4f97de937a2f5ca4c59a5c1c/latest/GBP`
                    )
                .then((res)=> res.json())
                .then((data)=> {

                    this.GBP = data.conversion_rates.GEL.toFixed(2)
                });
            },
            changeCurrencies() {
                // Swap the selected currencies
                const temp = this.fromSelected;
                this.fromSelected = this.toSelected;
                this.toSelected = temp;

                // Reset the amount values
                this.fromAmount = null;
                this.toAmount = null;
            },
            showFromMenu(){
                this.FromMenu = true
            },
            SelectFrom(currency){
                this.fromSelected = currency
                this.FromMenu = false
            },
            SelectTo(currency){
                this.toSelected = currency
                this.active = "active"
                this.ToMenu = false
            }
        },
        mounted(){
            this.GetEUR();
            this.GetUSD();
            this.GetGBP();
            document.title = this.route.name
        },
        computed: {
            
        }
    };
</script>