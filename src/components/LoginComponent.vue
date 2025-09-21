<template>
    <div class="flex items-center justify-center h-screen bg-black">
        <div class="bg-white h-[65%] w-[50%] rounded-2xl flex">
            <div class="m-2 w-[600px] rounded-xl overflow-hidden">
                <div class="w-full h-full overflow-hidden rounded-xl">
                    <img class="object-cover w-full h-full transition-all duration-300 cursor-pointer hover:scale-105 hover:blur-sm"
                        src="../assets/W-01/login3.jpg" alt="" />
                </div>
            </div>
            <div class="flex flex-col items-center justify-center w-full gap-10">
                <h1 class="text-4xl font-bold text-center">Đăng nhập vào Uni Stream</h1>
                <div class="flex flex-col gap-3">
                    <button
                        @click="loginWithGoogle"
                        class="flex gap-4 border border-gray-300 w-[450px] p-5 rounded-2xl hover:border-gray-800 duration-200 transition-all">
                        <img class="w-8" src="../assets/W-01/google.png" alt="google icon">
                        <p class="text-xl">Tiếp tục với Google</p>
                    </button>
                    <div class="flex items-center justify-center gap-4">
                        <hr class="w-48 text-gray-800">
                        <span class="text-gray-500">hoặc</span>
                        <hr class="w-48 text-gray-800">
                    </div>
                    <button
                        class="flex gap-4 border border-gray-300 w-[450px] p-5 rounded-2xl hover:border-gray-800 duration-200 transition-all">
                        <img class="w-8" src="../assets/W-01/facebook.png" alt="facebook icon">
                        <p class="text-xl">Tiếp tục với Facebook</p>
                    </button>
                    <h1>TEST DEMO GIT_FOLLOW</h1>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    // import Vue from 'vue'
    import axios from 'axios'
    import { googleTokenLogin } from "vue3-google-login";
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
            window.handleCredentialResponse = (response) => {
                console.log("Google JWT Token: ", response.credential);
                this.decodeToken(response.credential);
            };
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

            /**
             * Method decode from Google and call API create a session
             * 
             * @param token 
             */
            async loginWithGoogle() {
                const googleUser = await googleTokenLogin();
                let doLogin = await axios.post('http://localhost/UniStreamAPI/public/api/login', {
                    /************ Attach param for request here ***************/
                    'access_token': googleUser.access_token
                }).then(function (response) {
                    if (response.data.code == 200) {
                        // Save to session storage
                        sessionStorage.setItem("access_token", response.data.data.accessToken);
                        sessionStorage.setItem("user_info", JSON.stringify(response.data.data.user_info));
                        window.location.replace('/index');
                        return true;
                    }
                    alert("401 UnAuthentication");
                    return false;
                }).catch(function (errors) {
                    console.log(errors);
                });
            }
        },
    }
</script>