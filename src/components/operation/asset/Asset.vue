<template>
  <div>
    <div class="row">
    <div class="col-sm-2"></div>

      <!-- Dashboard place  start -->
    <div class="col-sm-10">
      <div class="dashboard-details">
        <span> <b style="font-size: 25px">Dashboard </b></span>
        <span class="dashboard-place"> Operation <i class="fas fa-arrow-right"></i> Asset</span>
      </div>
      <!-- dashboard place finish -->
      <div>
        <app-asset-document></app-asset-document>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  import AssetDocument from './AssetDocument.vue'
    export default {
        name: "Asset",
      components:{
          appAssetDocument: AssetDocument
      }
    }
</script>

<style scoped>
  .dashboard-details{
    margin-top: 4%;
    padding-top: 10px;
    box-shadow: 2px 2px ghostwhite;

  }

  .dashboard-place{
    float: right;
    padding-top: 10px;
    padding-right: 30px;
    font-size: 12px;

  }
</style>
