<template>
    <div class="login-wrap">
      <!--<form action="http://localhost:3000/post" method="post">
        <div>
          <label for="username">用户名</label>
          <input id="username" type="text" name="username">
        </div>
        <div>
          <label for="password">密码</label>
          <input id="password" type="password" name="password">
        </div>
        <input type="submit" value="登录">
      </form>-->
      <div>系统登录</div>
      <div class="text">
        <img class="icon icon_username" src="../assets/img/username.png" alt="">
        <input type="text" placeholder="用户名" name="username" v-model="username">
      </div>
      <div class="text">
        <img class="icon icon_password" src="../assets/img/password.png" alt="">
        <input type="password" placeholder="密码" name="password" v-model="password">
      </div>
      <button class="text" @click="login">登录</button>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login () {
        /*axios({
          url: 'http://localhost:3000/post',
          method: 'post',
          data: {
            username: this.username,
            password: this.password
          }
        })*/
        axios.post('http://192.168.0.3:3000/post',{username: this.username, password: this.password})
          .then(res => {
            console.log(res)
          })
      }
    }
  }
</script>

<style scoped>
  .login-wrap {
    width: 100%;
    height: 100%;
    min-width: 600px;
  }
  input {
    width: 450px;
    height: 40px;
    border-radius: 5px;
    padding: 0 10px;
    box-sizing: border-box;
  }
  button {
    width: 450px;
    height: 35px;
    background: deepskyblue;
    border-radius: 5px;
  }
  .text {
    margin-top: 20px;
  }
  .icon {
    position: relative;
    width: 0;
  }
  .icon_username {
    top: 5px;
    left: 30px;
  }
  .icon_password {
    top: 5px;
    left: 30px;
  }
</style>
