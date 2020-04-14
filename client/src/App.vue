<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Front</router-link> |
      <router-link to="/Home">Home</router-link>
    </div>
      <div class="container" onclick="onclick">
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="center">
          <h2>Please Sign In</h2>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <button @click.prevent="login">login</button>
        </div>
      </div>
    <router-view/>
  </div>
  </template>
<script>
import axios from '../axios'

export default {
  name: 'G-Ecommerce',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios({
        method: 'POST',
        url: '/user/login',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(result => {
          localStorage.setItem('token', result.data.token)
          localStorage.setItem('username', this.username)
          this.$emit('succeslogin')
        })
        .catch(err => {
          if (err) {
            this.$toasted.global.my_app_error({
              message: 'Username/Password not Found'
            })
          }
        })
    }
  },
  created () {
    this.$toasted.register('my_app_error',
      (payload) => {
        return payload.message
      }, { duration: 1500, theme: 'bubble', type: 'error' }
    )

    this.$toasted.register('my_app_success',
      (payload) => {
        return payload.message
      }, { duration: 1500, theme: 'bubble', type: 'success' }
    )

    this.$toasted.register('my_app_info',
      (payload) => {
        return payload.message
      }, { duration: 1500, theme: 'bubble', type: 'info' }
    )
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@import url("https://fonts.googleapis.com/css?family=Raleway:400,700");
*, *:before, *:after {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  font-family: 'Raleway', sans-serif;
}

.container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.container:hover .top:before, .container:hover .top:after, .container:hover .bottom:before, .container:hover .bottom:after, .container:active .top:before, .container:active .top:after, .container:active .bottom:before, .container:active .bottom:after {
  margin-left: 200px;
  transform-origin: -200px 50%;
  transition-delay: 0s;
}
.container:hover .center, .container:active .center {
  opacity: 1;
  transition-delay: 0.2s;
}

.top:before, .top:after, .bottom:before, .bottom:after {
  content: '';
  display: block;
  position: absolute;
  width: 200vmax;
  height: 200vmax;
  top: 50%;
  left: 50%;
  margin-top: -100vmax;
  transform-origin: 0 50%;
  transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
  z-index: 10;
  opacity: 0.65;
  transition-delay: 0.2s;
}

.top:before {
  transform: rotate(45deg);
  background: #e46569;
}
.top:after {
  transform: rotate(135deg);
  background: #ecaf81;
}

.bottom:before {
  transform: rotate(-45deg);
  background: #60b8d4;
}
.bottom:after {
  transform: rotate(-135deg);
  background: #3745b5;
}

.center {
  position: absolute;
  width: 400px;
  height: 400px;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
  transition-delay: 0s;
  color: #333;
}
.center input {
  width: 100%;
  padding: 15px;
  margin: 5px;
  border-radius: 1px;
  border: 1px solid #ccc;
  font-family: inherit;
}

</style>
