<template>
    <div class="page-sign-up">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h1 class="title">Sign Up</h1>
                <form @submit.prevent="submitForm">

                    <div class="field">
                        <label>Username</label>
                        <div class="control">
                            <input type="text" class="input" v-model="username">
                        </div>
                    </div>

                    <div class="field">
                        <label>Password</label>
                        <div class="control">
                            <input type="password" class="input" v-model="password">
                        </div>
                    </div>

                    <div class="field">
                        <label>Repeat Password</label>
                        <div class="control">
                            <input type="password" class="input" v-model="password2">
                        </div>
                    </div>
                    
                    <div class="notification is-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">{{  error  }}</p>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-dark">Sign Up</button>
                        </div>
                    </div>

                    <hr>
                    Or click <router-link to="/log-in">here</router-link> to log in.

                </form>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import { toast } from 'bulma-toast';
export default {
    name: 'SignUpView',
    data() {
        return {
            username: '',
            password: '',
            password2: '',
            errors: [],
        }
    },
    mounted() {
        document.title = "Sign Up - fumo"
    },
    methods: {
        submitForm() {
            this.errors = []

            if (this.username === '') {
                this.errors.push('Username is missing')
            }

            if (this.password === '') {
                this.errors.push('Password is missing')
            }

            if (this.password2 !== this.password) {
                this.errors.push('Passwords doesn\'t match')
            }

            if (!this.errors.length) {
                const formData = {
                    username: this.username,
                    password: this.password
                }
                
                axios
                    .post("/api/v1/users/", formData)
                    .then(
                        toast({
                            message: "An account has been created, now log in",
                            type: "is-success",
                            dismissible: true,
                            pauseOnHover: true,
                            duration: 3600,
                            position: 'bottom-center'
                        }),

                        this.$router.push('/log-in')
                    )
                    .catch(error => {
                        if (error.response) {
                            for (const proterty in error.response.data) {
                                this.errors.push(`${proterty}: ${error.response.data[proterty]}`)
                            }
                            console.log(JSON.stringify(error.response.data))

                        } else if (error.message) {
                            this.errors.push('Something went wrong. Please try again')
                            console.log(JSON.stringify(error))
                        }
                    })
            }   
        }
    }
}
</script>