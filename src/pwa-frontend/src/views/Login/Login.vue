<template>
    <div class="default-dark-db fill-height">
        <LoginAppBar ></LoginAppBar>
        <v-main class="default-dark-db fill-height">
            <v-container fluid>
                    <v-card class="w-auto h-100 default-dark-db" color="#f6f6f6" elevation="0">
                        <CommonNotification></CommonNotification>
                        <v-card-title class="mt-4 d-flex flex-row justify-center">
                            <h2>
                                Welcome back!
                            </h2>
                        </v-card-title>
                        <v-card-text>
                            <transition enter-active-class="animate__bounceInLeft">
                                <v-text-field placeholder="Login"
                                              v-if="shownFields"
                                              color="green"
                                              v-model="login">
                                </v-text-field>
                            </transition>
                            <transition enter-active-class="animate__bounceInRight">
                                <v-text-field placeholder="Password"
                                              v-if="shownFields"
                                              color="green"
                                              type="password"
                                              v-model="password">
                                </v-text-field>
                            </transition>
                            <transition enter-active-class="animate__bounceInLeft">
                                <v-text-field placeholder="Verify password"
                                              v-model="verifyPassword"
                                              type="password"
                                              color="green"
                                              v-if="!isLogin && shownFields">
                                </v-text-field>
                            </transition>
                        </v-card-text>
                        <v-card-actions class="d-flex flex-row justify-center">
                            <v-btn large :disabled="!isInputValid"
                                   :color="isInputValid ? 'green' : 'black'" @click="passThrough()">
                                {{isLogin ? 'Sign in' : 'Sign up'}}
                            </v-btn>
                        </v-card-actions>
                    </v-card>

            </v-container>
        </v-main>
        <v-footer app>
            <v-banner class="mb-2 d-block ml-auto mr-auto">
                {{isLogin ? 'Don\'t have an account yet?' : 'Already have an account?'}}
                <v-btn text @click="isLogin = !isLogin">
                    {{isLogin ? 'Sign up' : 'Sign in'}}
                </v-btn>
            </v-banner>
        </v-footer>
    </div>
</template>

<script lang="ts">
    import LoginAppBar from "./subcomponents/LoginAppBar.vue";
    import {store} from "@/store";
    import router from '@/router';
    import CommonNotification from "@/components/CommonNotification.vue";
    import Vue from 'vue';

    export default Vue.extend( {
        name: "Login",
        components: {LoginAppBar, CommonNotification},
        data: () => {
            return {
                login: '',
                password: '',
                verifyPassword: '',

                isLogin: true,

                shownFields: false,
            }
        },
        created() {
            this.$store.dispatch('findLocalKeys').then(ok => {
                if (ok === true) {
                    router.push('/home');
                }
            })
        },
        mounted() {
            this.shownFields = true
        },
        methods: {
            passThrough() {
                if (this.isLogin) {
                    this.$store.dispatch('signIn', {login: this.login, password: this.password}).then(ok => {
                        if (ok === true) {
                            router.push('/home');
                        }
                    })
                } else {
                    this.$store.dispatch('signUp', {login: this.login, password: this.password}).then(ok => {
                        if (ok === true) {
                            router.push('/home');
                        }
                    })
                }
            }
        },
        computed: {
            isInputValid() {
                if (this.isLogin) {
                    return (this.login !== '' && this.password !== '')
                } else {
                    return (this.login !== '' && this.password !== '' && this.password === this.verifyPassword)
                }
            }
        }
    })
</script>

<style>
.default-dark-db {
    background-color: #f6f6f6;
}
</style>