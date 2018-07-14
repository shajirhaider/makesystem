<template>
  <div>
    <div class="row ">
    <div class="col-sm-2"></div>

    <div class="col-sm-10 ">
      <div class="newItem ">
        <form class="form-group">
          <div class="" >
            <label > Name</label> <br>
            <input type="text">
          </div>
          <div class="dropdown-divider"></div>
          <div class="">
            <label > Model</label> <br>
            <select  >
              <option value="" >please select Asset</option>
              <option value="Asset 1">Asset 1</option>
              <option value="Asset 2">Asset 2</option>
              <option value="Asset 3">Asset 3</option>
            </select>
          </div>
          <div class="dropdown-divider"></div>
          <div class=" ">
            <label > Serial</label> <br>
            <input type="text" >
          </div>
          <div class="dropdown-divider"></div>
          <div class="">
            <label > Purchased Date</label> <br>
            <date-picker v-model="date" :config="options"></date-picker>
          </div>
          <div class="dropdown-divider"></div>
        </form>
        <div>
          <router-link to="/operation/asset" tag="button" class="button" ><span>Submit</span></router-link>
        </div>
      </div>

  </div>


  </div>
  </div>
</template>

<script>
  import datePicker from 'vue-bootstrap-datetimepicker';

  import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';


  export default {
    data () {
      return {
        date: null,
        options: {
          format: 'DD-MMM-YYYY',
          useCurrent: false,
          showClear: true,
          showClose: true,
          calendarWeeks:true,
          widgetPositioning:{
            horizontal:'auto',
            vertical:'bottom'
          }
        }
      }
    },
    components: {
      datePicker
    }
  }
</script>

<style scoped>
  .newItem{
    margin-top: 5%;
  }
  .form-group input[type=text], select {
    width: 40%;
    padding: 2px 10px;
    margin: 2px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background: white;
    height: 30px;
  }
  .button {
    display: inline-block;
    border-radius: 4px;
    background-color: #8080ff;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 15px;
    padding: 2px;
    width: 120px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 2px;

  }


</style>
