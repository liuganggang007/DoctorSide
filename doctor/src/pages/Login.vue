<template>
  <div>
      <el-input v-model="name" placeholder="请输入用户名"></el-input>
      <el-input v-model="pwd" placeholder="请输入密码"></el-input>
       <el-button type="primary" @click="tologin">登陆</el-button>
  </div>
</template>

<script>
export default {
  name:"Login",
  data(){
    return{
      name:"",
      pwd:""
    }
  },
  methods:{
    tologin(){
      let obj = {userName:this.name,password:this.$md5(this.pwd)};
      console.log(obj)
      let url = "/app/login";
      this.axios.get(url,{params:obj}).then(result=>{
        console.log(result);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
</style>
