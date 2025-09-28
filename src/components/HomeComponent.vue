<template>
    
    <HeaderComponent/>

    <!-- TODO: Add cart button -->

    <!-- TODO: Add cart empty button -->

    <!-- Start content -->
    <section class="pt-24 pb-10 bg-black">
        <div class="container flex flex-col gap-8 mx-auto">
            <!-- Start phiên live của tôi -->
            <div class="flex flex-col gap-2">
                <h1 class="text-xl font-medium text-white">Phiên live của tôi</h1>
                <div class="w-full bg-[#262626] flex flex-col items-center p-6">
                    <div v-on:click="goToDetail(live.my_live.id)" class="flex flex-col gap-4 cursor-pointer group">
                        <div class="relative overflow-hidden rounded-xl">
                            <img :src="live.my_live.thumbnail" alt="live"
                                class="h-[500px] aspect-video object-cover group-hover:blur-sm transition-all duration-300 group-hover:brightness-75 group-hover:scale-105">
                            <div
                                class="absolute inset-0 flex items-center justify-center text-6xl text-white transition-all duration-300 opacity-0 group-hover:opacity-100">
                                <button class="hover:text-[#121212] transition-all duration-200">
                                    <i class="fa-solid fa-play"></i>
                                </button>
                            </div>
                        </div>
                        <div
                            class="flex items-center justify-between transition-all duration-300 group-hover:opacity-75">
                            <div class="flex items-center gap-2">
                                <img :src="live.my_live.avatar" alt="avatar" class="h-12 rounded-full">
                                <div class="text-white">
                                    <h1 class="text-lg font-medium">{{ live.my_live.streamer }}</h1>
                                    <p class="text-[#d1d5db]">{{ live.my_live.title }}</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 text-white">
                                <p>{{ live.my_live.time_start }}</p>
                                <p class="px-3 py-1 uppercase bg-red-500 animate-bounce">Live</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End phiên live của tôi -->

            <!-- Start phiên live khác -->
            <div class="flex flex-col gap-2">
                <h1 class="text-xl font-medium text-white">Phiên live khác</h1>
                <ul class="grid grid-cols-4 gap-6">
                    <li v-for="item in live.list_live" v-on:click="goToDetail(item.id)" class="flex flex-col gap-2 transition-all duration-200 cursor-pointer hover:brightness-75">
                        <img :src="item.thumbnail" alt="live"
                            class="object-cover w-full aspect-video">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <img :src="item.avatar" :onerror="'../assets/W-02/avatar.jpg'" alt="avatar" class="rounded-full h-9">
                                <div class="text-white">
                                    <h1 class="text-base font-medium">{{ item.streamer }}</h1>
                                    <p class="text-[#d1d5db] w-32-truncate text-sm" :title="item.title">
                                        {{ item.title }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 text-white">
                                <p class="text-base">{{ item.time_start }}</p>
                                <p v-on:click="goToDetail(item.id)" class="px-2 uppercase bg-red-500">Live</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- End phiên live khác -->
        </div>
    </section>
    <!-- End content -->
</template>

<script>
    // import Vue from 'vue'
    import axios from 'axios'
    import HeaderComponent from './HeaderComponent.vue';

    export default {
        /***********************************************************************************************************
         ******************************* Pass data to child component **********************************************
         **********************************************************************************************************/
        // prop: [variable1, variable2],
        components: { HeaderComponent },

        data() {
            /***********************************************************************************************************
             ******************************* Initialize global variables ***********************************************
             **********************************************************************************************************/
            return {
                msg: '',
                live: [],
                access_token: sessionStorage.getItem('access_token'),
            }
        },
        created() {
            /***********************************************************************************************************
             *********************** Initialize data when this component is used. **************************************
             **********************************************************************************************************/
            console.log('Init created component and call to function get data from api server.');
            this.getLive();
            this.getLiveCode();
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
            // Method redirect to detail a live
            goToDetail(id) {
                window.location.href = '/detail?id=' + id;
            },
            // Method get code from URI.
            getLiveCode() {
                const liveCode = new URLSearchParams(location.search).get("code") ?? null;
                if (liveCode != null) {
                    // Call to server save Google token live.
                    this.saveToken(liveCode);
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
            // Function call api notifications
            async getLive() {
                try {
                    const callAPI = await axios.get('http://localhost/UniStreamAPI/public/api/index', {
                        /************ Attach param for request here ***************/
                        headers: {
                            'Authorization' : 'Bearer ' + this.access_token 
                        }
                    });
                    this.live = callAPI.data.data;
                } catch (err) {
                    console.log(err);
                }
            },
            async saveToken(code) {
                try {
                    const callAPI = await axios.get('http://localhost/UniStreamAPI/public/api/render-token', {
                        /************ Attach param for request here ***************/
                        headers: {
                            'Authorization' : 'Bearer ' + this.access_token 
                        },
                        params: {
                            'code': code
                        }
                    });
                    if (callAPI.data.code == 200) {
                        alert("Create new token success!");
                        window.location.href = '/index';
                    }
                } catch (err) {
                    console.log(err);
                }
            }
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
.w-32-truncate {
    overflow: hidden; 
    text-overflow: ellipsis; 
    white-space: nowrap; 
    width: 170px;
}
</style>
