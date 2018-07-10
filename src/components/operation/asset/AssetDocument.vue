<template>
  <div>
    <div class="row ">
    <div class="col-sm-2"></div>

    <div class="col-sm-10 ">
      <div class="newItem">
        <div class="row">
          <li class="list-group-item" >
            <div class="form-group">
              <label for=""> User name</label>
              <input type="text">
            </div>
            <div class="dropdown-divider"></div>
            <div class="form-group">
              <label for=""> User name</label>
              <input type="text">
            </div>
            <div class="dropdown-divider"></div>
            <div class="form-group">
              <label for=""> User name</label>
              <input type="text">
            </div>
            <div class="dropdown-divider"></div>
            <div class="form-group">
              <label for=""> User name</label>
              <input type="text">
            </div>
            <div class="dropdown-divider"></div>

            <router-link to="/operation/asset" tag="button" class="button" ><span>Submit </span></router-link>
          </li>
        </div>

      </div>


    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "AssetDocument"
    }
</script>

<style scoped>
  .newItem{
    margin-top: 5%;
  }
  .button {
    display: inline-block;
    border-radius: 4px;
    background-color: #8080ff;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 15px;
    padding: 5px;
    width: 120px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 2px;
  }

  .button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

  .button span:after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }

  .button:hover span {
    padding-right: 25px;
  }

  .button:hover span:after {
    opacity: 1;
    right: 0;
  }

</style>
