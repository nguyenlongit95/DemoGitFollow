<template>
    <h1>Tôi là là1 component con</h1>
    <h3>Du lieu nhan duoc tu component cha: {{ dataSet }}</h3>
    <input type="text" v-model="dataChange">
    <button v-on:click="sendDataToParent()">Click toi de gui du lieu len component cha</button>
</template>
<script>
    // import Vue from 'vue'
    import axios from 'axios'
    // import component1 from 'component1'
    // import component2 from 'component2'
    export default {
        /***********************************************************************************************************
         ******************************* Pass data to child component **********************************************
         **********************************************************************************************************/
        props: [
            "dataSet"
        ],
        // components: {component1, component2},
        data() {
            /***********************************************************************************************************
             ******************************* Initialize global variables ***********************************************
             **********************************************************************************************************/
            return {
                dataChange: ""
            }
        },
        created() {
            /***********************************************************************************************************
             *********************** Initialize data when this component is used. **************************************
             **********************************************************************************************************/
            
        },
        mounted() {
            /***********************************************************************************************************
             ******************** Once created, the interface is displayed and calls mounted. **************************
             **********************************************************************************************************/
            // Code JS chay o trong nay hoac dung cac thu vien khac nhu jQuery o day.
            // jQuery code
           
        },
        watch: {
            /***********************************************************************************************************
             ********************************* Methods change value for a variable *************************************
             **********************************************************************************************************/
            
        },
        computed: {
            appendMsg() {
                return msg + "Process the value and assign the value to the corresponding variable the var has changed.";
            }
        },
        methods: {
            /***********************************************************************************************************
             ******************************* Default functions that handle local data **********************************
             **********************************************************************************************************/

            /**
             * Example default function not using param
             */
            defaultFunction() {
              this.msg = "Replace message here!";
            },
            sendDataToParent() {
                // Send data to prent
                // $emit('<ten bien gui len>', 'du lieu gui len');
                this.$emit('dataChange', this.dataChange);
            },

            /***********************************************************************************************************
             ******* Async and await functions for manipulating server-side data through internal API protocols ********
             **********************************************************************************************************/

            /**
             * Call API sample
             */
            async callAPI() {
                try {
                    const callAPI = await axios.get('/apiendpoint', {
                        /************ Attach param for request here ***************/
                    }).then(function (response) {
                        console.log(response);
                    }).catch(function (errors) {
                        console.log(errors);
                    });
                    console.log(callAPI.data);
                } catch (err) {
                    console.log(err);
                }
            },
        },
    }
</script>

<style>

</style>