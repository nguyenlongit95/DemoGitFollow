<script setup>
</script>

<template>
    <nav>
        <!--<RouterLink to="/about">Go to About</RouterLink> -->
    </nav>
    <RouterView />
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
        // prop: [variable1, variable2],
        // components: {component1, component2},
        data() {
            /***********************************************************************************************************
             ******************************* Initialize global variables ***********************************************
             **********************************************************************************************************/
            return {
              employeeNumberCurrent: null
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
            funcHandleDataFromChild(data) {
              // Gan bien o component cha bang du lieu gui len tu component con
              this.dataFromChild = data;
            },
            handleDetailEmployee(employee) {
              this.employeeNumberCurrent = employee;
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

<style scoped>
#main {
  width: 700px;
  height: 700px;
  border: 1px solid gray;
  margin: 0 auto;
  display: flex;
}
</style>
