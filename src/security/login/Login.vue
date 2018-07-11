<template>
  <div >
    <div class="row">
      <div class="col-sm-4"></div>
      <div class="col-sm-4">
       <div class="login">
         <div class="logo">
           <b>LUMOS</b>
         </div>
         <div class="login-header">
           <h5>Sign In</h5>
           <img src="@/assets/img/userLogin.png" alt=""  >
         </div>

         <form class="form-group">
           <div class="form-control" >
             <i class="fas fa-user"></i>
             <input type="text" placeholder="username">
           </div>
           <div class="form-control">
             <i class="fas fa-key"></i>
             <input type="password" placeholder="password">
           </div>
           <div>
             <router-link tag="button" to="/dashboard" class="btn btn-block" >
               Sign In
             </router-link>
           </div>
         </form>
       </div>
      </div>
      <div class="col-sm-4"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
 .login{
  background: #056362;
  border-radius: 2%;
  margin-top: 10%;
   margin-left: 20px;
   margin-right: 20px;
  padding: 5% ;
  display: inline-block;
 }
 .logo{
  text-align: center;
  color: whitesmoke;
  background: goldenrod;
  height: 40px;
  padding-top: 8px;
  font-family: 'Russo One', sans-serif;
  font-size: 20px;
 }
 .login-header{
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
    color: white;
    border-radius: 2%;
 }

 .login-header img {
    border-radius: 50%;
   height: 80px;
    margin-bottom: 5px;
 }

 .form-control{
    margin-top: 5px;
    background: whitesmoke;
 }

 .form-control input{
    width: 90%;
    margin-top: 5px;
 }

 .form-group button{
    background: #267d7d;
    color: white;
    margin-top: 5px;
 }
</style>
