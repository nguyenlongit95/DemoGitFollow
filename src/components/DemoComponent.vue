<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card-body">
                <h1>{{ msg }}</h1>
                <button v-on:click="plusData()">{{ count }}</button>
                <!-- Moi lan clik se binh phuong gia tri count -->
                <h2>count^2 = {{ count2 }}</h2>
                <!-- Nhap vao 1 so va hien thi so do co phai snt hay khong -->
                <!-- De truyen du lieu vao the input su dung v-model -->
                <input type="number" v-model="a">
                <!-- Dieu kien hien thi du lieu -->
                <p v-if="checkSNT">So {{ a }} la so nguyen to</p>
                <p v-else>So {{ a }} khong phai so nguyen to</p>
                <!-- Hien thi danh sach cac snt tu 1 toi a -->
                <p>
                    Cac so nguyen to tu 1 toi {{ a }} la:
                    <!-- Hien thi danh sach dang mang hoac obj  -->
                    <span v-for="_snt in listSNT">{{ _snt }}, </span>
                </p>
            </div>
            <div class="col-md-12 d-flex">
                <!-- Style biding -->
                <div class="select-color-section" v-for="color in arrColor" :style="{background: color}" v-on:click="fillColor(color)"></div>
            </div>
            <div class="col-md-12" id="preview-color" :style="{background: this.color}"></div>
        </div>
        <div class="col-md-12">
            <button v-on:click="clickMe()">Click me and active</button>
            <!-- Class biding -->
            <p :class="{'text-primary': this.clickStatus}">Đề thi vẽ còn hay hơn đề văn</p>
            <button v-on:click="changeActive()">Click me!</button>
            <button :disabled="clickStatus">Click status</button>
        </div>
        <div class="col-md-12" id="the_matrix_one">
            <div class="nm" style="display: flex;">
                <input type="number" v-model="this.n">
                X
                <input type="number" v-model="this.m">
            </div> 
            <hr>
            <div class="matrix" style="display: flex;">
                <div id="matrix1">
                    <span v-for="i in n" :key="i">
                        {{ i }}
                        <input v-for="j in m" v-model="this.matrix1[i-1][j-1]" type="number" value="0"> <br>
                    </span>
                </div>
                <div class="clear-fix" style="width: 50px;"></div>
                <div id="matrix2">
                    <span v-for="i in n" :key="i">
                        <input v-for="j in m" v-model="this.matrix2[i-1][j-1]" type="number" value="0"> <br>
                    </span>
                </div>
                <div class="clear-fix" style="width: 50px;"></div>
                <div id="method">
                    <button :disabled="n <= 0 || m <= 0" v-on:click="add()">+</button>
                    <button :disabled="n <= 0 || m <= 0" v-on:click="multiple()">*</button>
                </div>
                <div class="clear-fix" style="width: 50px;"></div>
                <div id="matrix3">
                    <span v-for="i in n" :key="i">
                        <input v-for="j in m" v-model="this.matrix3[i-1][j-1]" type="number" value="0"><br>
                    </span>
                </div>
                <p v-if="n <= 0 || m <= 0">N và M phải lớn hơn 0</p>
            </div>
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
                msg: '',
                count: 0,
                count2: 0,
                a: 0,
                checkSNT: false,
                listSNT: [],
                arrColor: [
                    "blue", "green", "yellow", "red", "gray"
                ],
                color: "",
                clickStatus: false,
                activeStatus: false,
                n: 1,
                m: 1,
                matrix1: [], // default 0
                matrix2: [], // default 0
                matrix3: []
            }
        },
        created() {
            /***********************************************************************************************************
             *********************** Initialize data when this component is used. **************************************
             **********************************************************************************************************/
            console.log('Init created component and call to function get data from api server.');
            this.msg = "Click vào button dưới để tăng giá trị lên 1 đơn vị!";
            // Co the goi toi cac ham khac(trong methods)
            this.initMatrix();
        },
        mounted() {
            /***********************************************************************************************************
             ******************** Once created, the interface is displayed and calls mounted. **************************
             **********************************************************************************************************/
            // Code JS chay o trong nay hoac dung cac thu vien khac nhu jQuery o day.
            // jQuery code
            $(document).ready(function () {
                //alert("3.14");
            });
        },
        watch: {
            /***********************************************************************************************************
             ********************************* Methods change value for a variable *************************************
             **********************************************************************************************************/
            msg() {
                console.log("When the value of the msg variable changes, this method will be executed.");
            },
            // Khi 1 bien co su thay doi thi ham o day se thu thi.
            // Ten ham se trung voi ten cua bien vua thay doi.
            count() {
                this.count2 = this.count * this.count;
            },
            a() {
                // Kiem tra snt
                if (this.a <= 2) {
                    this.checkSNT = false;
                    return null;
                } else {
                    this.checkSNT = true;
                    for (let i = 2; i < this.a; i++) {
                        if (this.a % i == 0) {
                            this.checkSNT = false;
                            break;
                        }
                    }
                }
                // Kiem tra danh sach SNT
                for (let i = 1; i < this.a; i++) {
                    let _check = true;
                    for (let j = 2; j < i; j++) {
                        if (i % j == 0) {
                            _check = false;
                        }
                    }
                    if (_check) {
                        // La so nguyen to thi gan vao mang
                        this.listSNT.push(i);
                    }
                }
            },
            n() {
                this.initMatrix();
            }, 
            m() {
                this.initMatrix();
            }
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

            /**
             * Example default function using param 
             *
             * @param int pageNum number of page
             * @return boolean
             */
            defaultFunctionUsingParam(pageNum) {
                console.log(pageNum);
                return false;
            },
            /**
             * Method add + 1 to data
             */
            plusData() {
                this.count++;
            },

            /**
             * Method fill color to section preview
             * 
             * @param color
             */
            fillColor(color) {
                this.color = color;
            },
            /**
             * Method handle click button and change stt
             */
            clickMe() {
                if (this.clickStatus == true) {
                    this.clickStatus = false;
                } else {
                    this.clickStatus = true;
                }
            },
            changeActive() {
                if (this.clickStatus == true) {
                    this.clickStatus = false;
                } else {
                    this.clickStatus = true;
                }
            },
            /**
             * Method init matrix
             */
            initMatrix() {
                // Init matrix
                for (let i = 0; i < this.n; i++) {
                    this.matrix1[i] = [];
                    this.matrix2[i] = [];
                    this.matrix3[i] = [];
                    for (let j = 0; j < this.m; j++) {
                        this.matrix1[i][j] = 0;
                        this.matrix2[i][j] = 0;
                        this.matrix3[i][j] = 0;
                    }
                }
            },
            add() {
                for (let i = 0; i < this.n;i++) {
                    for (let j = 0; j < this.m; j++) {
                        this.matrix3[i][j] = this.matrix1[i][j] + this.matrix2[i][j];
                    }
                }
            },
            multiple() {
                for (let i = 0; i < this.n; i++) {
                    for (let j = 0; j < this.m; j++) {
                        let tmp = 0;
                        for (let k = 0; k < this.m; k++) {
                            tmp += this.matrix1[i][k] * this.matrix2[k][j];
                        }
                        this.matrix3[i][j] = tmp;
                    }
                }
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
/**
* Custom local style css
*/
p {
    color: red;
}
.select-color-section {
    width: 100px;
    height: 30px;
    border: 1px solid white;
    margin-right: 5px;
}
.d-flex {
    display: flex;
}
#preview-color {
    height: 150px;
    width: 520px;
    border: 1px solid white;
    margin-top: 15px;
}
.text-primary {
    color: blue !important;
}
#the_matrix_one input {
    width: 40px;
}
</style>
