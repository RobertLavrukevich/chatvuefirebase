<template>
    <div class="auth-container">
      <div class="login-container">
        <p>Login</p>
        <input type="text" v-model="username" data-js-login></input>
      </div>
      <div class="password-container">
        <p>Password</p>
        <input type="text" v-model="password"  data-js-password></input>
      </div>
      <div class="btn-container">
        <button type="submit" @click="login">Login</button>
      </div>
    </div>
</template>
  
<style> 
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Cardo:ital,wght@0,400;0,700;1,400&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

*{
    margin: 0;
    padding: 0;
    font-family: 'abel';
}

body{
    height: 100vh;
    width: 100vw;
    background-color: #292F3F;
    /* color: white; */
}

/* header{
    width: 100vw;
    height: 7vh;
    text-align: center;
    align-items: center;
} */

p{
    position: relative;
    top: 30%;
    color: white;
}

.auth-container{
    position: relative;
    top: 25vh;
    left: 0;
    height: 30vh;
    width: 25vw;
    margin-left: auto;
    margin-right: auto ;
}

.login-container,
.password-container{
    margin-bottom: 15px;
}

.login-container p,
.password-container p{
    margin-bottom: 5px;
}

.login-container input,
.password-container input{
    width: 96%;
    background-color: #292F3F;
    height: 20px;
    border: 2px solid #818182;
    border-radius: 16px;
    color: white;
    padding: 2%;
}

.btn-container button{
    width: 100%;
    height: 30px;
    background-color: #42566C;
    border: none;
    border-radius: 16px;
    color: white;
    cursor: pointer;
}

@media screen and (max-width: 900px) {
    .auth-container{
        width: 35vw;
    }
}

@media screen and (max-width: 700px) {
    .auth-container{
        width: 45vw;
    }
    .login-container input,
.password-container input{
    width: 94%;
    padding: 3%;
}
}
</style>

<script>
  import { auth } from '../firebase';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      fakeEmail() {
        return `${this.username}@gmail.com`;
      },
      async login() {
        try {
          await signInWithEmailAndPassword(auth, this.fakeEmail(), this.password);
          this.$router.push('/chat');
        } catch (e) {
          alert('Ошибка: ' + e.message);
        }
      }
    }
  };
</script>