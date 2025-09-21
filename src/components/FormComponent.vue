<template>
    <div id="form-add-new">
        <input type="text" v-model="employeeNumber" placeholder="Mã nhân viên">
        <input type="text" v-model="fullName" placeholder="Họ và tên">
        <button v-on:click="add()">Thêm</button>
        <div id="table" border="1">
            <table>
                <thead>
                    <th>
                        <td>Mã nhân viên</td>
                        <td>Họ tên</td>
                        <td>Chi tiết</td>
                    </th>
                </thead>
                <tbody v-if="this.listEmployee.length > 0">
                    <tr v-for="employee in listEmployee">
                        <td>{{ employee.employee_number }}</td>
                        <td>{{ employee.full_name }}</td>
                        <td><button v-on:click="detail(employee.employee_number)">Chi tiết</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
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
              employeeNumber: "",
              fullName: "",
              listEmployee: []
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
            add() {
                // Kiem tra ma nhan vien
                for (let i = 0; i < this.listEmployee.length; i++) {
                    if (this.employeeNumber == this.listEmployee[i].employee_number) {
                        alert("Mã nhân viên không được trùng");
                        return false;
                    }
                }
                // Gan du lieu vao list
                this.listEmployee.push({
                    "employee_number" : this.employeeNumber,
                    "full_name" : this.fullName
                });
                this.employeeNumber = "";
                this.fullName = "";
            },
            detail(employeeNumber) {
                // Truyen du lieu len component cha
                let currentEmployee = null;
                for (let i = 0;  i < this.listEmployee.length; i++) {
                    if (employeeNumber == this.listEmployee[i].employee_number) {
                        currentEmployee = this.listEmployee[i]
                    }
                }
                this.$emit("detail", currentEmployee);
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
#form-add-new {
    width: 400px;
    height: 300px;
    border: 1px solid white;
    overflow: auto;
}
</style>