<template>
  <div>
    <div class="header">
      <div class="row">
        <div class="col-sm-3 col-md-3">
          <span class="logo">LUMOS</span>
          <span class="bar"><i class="fas fa-bars"></i></span>
        </div>

        <div class="col-sm-3">
          <div class="details">
            <span>Employee</span>
            <span><i class="far fa-question-circle"></i></span>
          </div>
        </div>
        <div class="col-sm-1"> </div>
        <div class="col-sm-3">
          <div class="details">Logged in as Employee, Switch role? </div>
        </div>
        <div class="col-sm-2">
          <div class="details">
            <span><i class="fas fa-user"></i></span>
            ABCD
            <span><i class="fas fa-caret-down"></i></span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
    <div class="col-sm-2">

      <!-- side nav start -->

      <div class="sidenav">
        <div class="dashboard">
           <img src="@/assets/img/user.jpg" alt="" >
           <span> Hello, ABCD</span>
          <br>
          <span ><i class="fas fa-tachometer-alt"></i> <b> Dashboard </b> </span>
        </div>

            <!-- menu start-->

        <div id="MainMenu" class="sidebar">
          <div class="list-group panel" v-for="item in Items" >
          <li :data-target=item.target class="list-group-item list-group-item" data-toggle="collapse" data-parent="#MainMenu" >
            {{item.title}} <i class="fas fa-angle-double-down"></i></li>
          <div class="collapse" :id=item.id >
            <router-link :to="sub.path" class="list-group-item"  v-for="sub in item.Submenu" tag="li" :key="sub.subTitle">{{sub.subTitle}}</router-link>
          </div>
          </div>
        </div>

        <!-- menu finish -->
      </div>
        <!-- side nav finish -->

        </div>

    </div>
    </div>

</template>

<script>
  export default {
    name: "Header",
    data(){
      return{
        Items:[
          {icon:'', title:'Meta' ,
            Submenu:
              [
                {subTitle:'Asset Category' , path:'/meta/asset-category'},
                { subTitle:'Asset Subcategory', path:'/meta/asset-subcategory'}
              ],
            id:'meta' , target:'#meta'
          },

          {icon:'', title:'Master' ,
            Submenu:
              [
                {subTitle:'Asset Model', path:'/master/asset-model'},
                {subTitle:'Manufacturer', path:'/master/manufacturer'},
                {subTitle:'Vendor', path:'/master/vendor'}
              ],
            id:'master' , target:'#master'
          },

          {icon:'', title:'Operation',
            Submenu:
              [
                {subTitle:'Organization', path:'/operation/organization'},
                {subTitle:'Customer', path:'/operation/customer'},
                {subTitle:'Site', path:'/operation/site'},
                {subTitle:'Asset', path:'/operation/asset'}
              ],
            id:'operation' , target:'#operation'
          },

        ]

      }
    }
  }
</script>

<style scoped>
  .header{
    width: 100%;
    background: #056362;
    color: white;
    position: fixed;
    z-index: 999;

  }
  .logo{
    color:goldenrod;
    font-family: 'Russo One', sans-serif;
    font-size: 25px;
    margin-left: 35%;
    padding-top: 8px;

  }
  .bar{
    padding-top: 8px;
    padding-right: 12px;
    font-size: 20px;
    float: right;
    cursor: pointer;


  }
  .details{
    font-size: 10px ;
    margin:0 auto;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;

  }

  .sidenav {
    height: 100%;
    width: 15%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: whitesmoke;
    overflow-x: hidden;
    margin-top: 3.5%;

  }
/*
  .sidenav li:hover {
    background: dodgerblue;
    cursor: pointer;
  }
 */
  .dashboard{
    padding-top: 20px;
    padding-left: 20px;
  }
  .dashboard img{
    border-radius: 50%;
    height: 50px;
    width: 50px;
    padding-bottom: 5px;
  }
  .dashboard span{
    font-size: 15px;
    display:  inline-block;
    padding-top: 5px;
    padding-bottom: 10px;
    margin-left: 15px;

  }
  .list-group.panel > .list-group-item {
    background: #ebebe0;

  }
  .list-group-item{
    font-size: 12px;
    cursor: pointer;
  }
  .sidebar{
    padding-left: 5px;

  }
  .list-group li{
    padding-left: 25px;
  }
  .list-group li i{
    float: right;
  }

  @media screen and (max-width: 960px) {
    .logo{
      margin-left: 20%;
    }
    .bar{
      padding-left: 10px;
      padding-right: 5px;
    }
  }
  @media screen and (max-width:390px){
    .logo{
      margin-left: 35%;
    }
    .details{
      padding-top:5px;
      padding-bottom: 5px;
    }
  }

</style>
