<template>
    <div class="card">
        <h3 class="card-header text-center">Register Area</h3>
        <div class="card-body">
            <form @submit.prevent="submit">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>First Name</label>
                        <input type="text" class="form-control" v-model.trim="$v.firstname.$model" :class="{'is-invalid':$v.firstname.$error,'is-valid':!$v.firstname.$invalid}">
                        <div class="valid-feedback">Your first name is valid!</div>
                        <div class="invalid-feedback">
                            <span v-if="!$v.firstname.required">First name is required.</span>
                            <span v-if="!$v.firstname.minLength">First name must have at least {{$v.firstname.$params.minLength.min}} letters.</span>
                            <span v-if="!$v.firstname.maxLength">First name must have at most {{$v.firstname.$params.maxLength.max}} letters.</span>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label>Last Name</label>
                        <input type="text" class="form-control" v-model.trim="$v.lastname.$model" :class="{'is-invalid':$v.lastname.$error,'is-valid':!$v.lastname.$invalid}">
                        <div class="valid-feedback">Your last name is valid!</div>
                        <div class="invalid-feedback">
                            <span v-if="!$v.lastname.required">Last name is required.</span>
                            <span v-if="!$v.lastname.minLength">Last name must have at least {{$v.lastname.$params.minLength.min}} letters.</span>
                            <span v-if="!$v.lastname.maxLength">Last name must have at most {{$v.firstname.$params.maxLength.max}} letters.</span>
                        </div>
                    </div>

                </div>
                <div class="form-group">
                    <label>Age</label>
                    <input type="number" class="form-control" v-model.number.lazy="$v.age.$model" :class="{'is-invalid':$v.age.$error,'is-valid':!$v.age.$invalid}">
                    <div class="valid-feedback">Your age is valid!</div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}} .</span>
                    </div>
                </div>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" v-model.trim="$v.username.$model" :class="{'is-invalid':$v.username.$error,'is-valid':!$v.username.$invalid}">
                    <div class="valid-feedback">Your username is valid!</div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.username.required">Username is required.</span>
                        <span v-if="!$v.username.isUnique">This username is already used.</span>
                    </div>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model.trim="$v.email.$model" :class="{'is-invalid':$v.email.$error,'is-valid':!$v.email.$invalid}">
                    <div class="valid-feedback">Your email is valid!</div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.email.required">Email is required.</span>
                        <span v-if="!$v.email.isUnique">This email is wrong or already used.</span>
                    </div>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" v-model.trim="$v.password.$model" :class="{'is-invalid':$v.password.$error,'is-valid':!$v.password.$invalid}" id="password">
                    <div class="valid-feedback">Your email is valid!</div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.password.required">Email is required.</span>
                        <span v-if="!$v.password.minLength">Password must have at least {{$v.password.$params.minLength.min}} letters.</span>
                        <span v-if="!$v.password.withUpper">This password must contain at least one uppercase character.</span>
                        <span v-if="!$v.password.withSymbol">This password must contain at least one special symbol.</span>
                        <span v-if="!$v.password.withNumber">This password must contain at least one number.</span>
                    </div>
                </div>
                <div class="form-group form-check">
                    <label for="showpassword" class="form-chec-label">
                        <input type="checkbox" v-model="showpassword" id="showpassword" @click="toggleShowPassword" class="form-input-check">
                        Show password
                    </label>
                </div>
                <div class="form-group">
                    <label>Confirmation Password</label>
                    <input type="password" class="form-control" v-model.trim="$v.passConfirm.$model" :class="{'is-invalid':$v.passConfirm.$error,'is-valid':(password != '') ? !$v.passConfirm.$invalid : ''}">
                    <div class="valid-feedback">Your passwords is identical!</div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.passConfirm.required">Password confirmation is required.</span>
                        <span v-if="!$v.passConfirm.sameAsPasseword">Password confirmation must be the same as Password.</span>
                    </div>
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="number" class="form-control" v-model.number.lazy="$v.phone.$model" :class="{'is-invalid':$v.phone.$error,'is-valid':!$v.phone.$invalid}">
                    <div class="valid-feedback">Your phone number is valid!</div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.phone.required">Phone number is required.</span>
                        <span v-if="!$v.phone.minLength">This phone number must be at least {{$v.phone.$params.minLength.min}}.</span>
                        <span v-if="!$v.phone.numeric">This phone number only numeric accepted.</span>
                    </div>
                </div>
                <div class="form-group">
                    <label>Website</label>
                    <input type="url" class="form-control" v-model.trim="$v.url.$model" :class="{'is-invalid':$v.url.$error,'is-valid':!$v.url.$invalid}">
                    <div class="valid-feedback">Your website is valid!</div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.url.required">Website is required.</span>
                        <span v-if="!$v.url.url">This website is invalid.</span>
                    </div>
                </div>
                <button type="submit" class="btn btn-success">Submit {{submitstatus}}</button>
            </form>
        </div>
    </div>
</template>
<script>
import {required,minLength,maxLength,between,email, sameAs,numeric, url} from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            firstname: '',
            lastname: '',
            age: 0,
            username: '',
            email: '',
            password: '',
            passConfirm: '',
            showpassword: false,
            phone: '',
            url: '',
            submitstatus: null
        }    
    },
    validations: {
        firstname: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(22) 
        },
        lastname: {
            required, 
            minLength: minLength(5),
            maxLength: maxLength(25)
        },
        age: {
            between: between(15,48)
        },
        username: {
            required, 
            isUnique(value) {
                if (value === '') return true

                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(typeof value == 'string' && value.length % 2 !== 0)
                    }, 350 + Math.random()*300)
                })
            }
        },
        email: {
            required,
            email,
            isUnique(value) {
                if (value === '') return true
                
                var email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(email_regex.test(value))
                    }, 350 + Math.random()*300)
                })
            }
        },
        password: {
            required, 
            minLength: minLength(6),
            withUpper(value){
                if (value === '') return true
                var passUpper = /(?=.*[A-Z])/;
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(passUpper.test(value))
                    }, 350 + Math.random()*300)
                })
            },
            withSymbol(value){
                if (value === '') return true
                var passSymbol = /(?=.*\W)/;
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(passSymbol.test(value))
                    }, 350 + Math.random()*300)
                })
            }, 
            withNumber(value){
                if (value === '') return true
                var passNumber = /(?=.*\d)/;
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(passNumber.test(value))
                    }, 350 + Math.random()*300)
                })
            }
        },
        passConfirm: {
            required,
            sameAsPasseword: sameAs('password')
        },
        phone: {
            required,
            numeric,
            minLength: minLength(15),
            maxLength: maxLength(15)
        },
        url: {
            required,
            url
        }
    },
    methods: {
        toggleShowPassword(){
            var show = document.getElementById('password')
            if (this.showpassword === false) {
                this.showpassword = true 
                show.type = "text"
            }else{
                this.showpassword = false
                show.type = "password"
            }
        },
        submit(){
            this.$v.$touch();
            if (this.$v.$invalid){
                this.submitstatus = "fail"
            }else{
                this.submitstatus = "succes"
            }
        }
    },
}
</script>
<style lang="scss">
.invalid-feedback{
    span{
        display: block;
    }
}
    
</style>