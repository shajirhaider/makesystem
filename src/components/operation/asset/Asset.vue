<template>
  <div class="row" >
    <div class="col-sm-2"></div>
      <div class="col-sm-10">
        <div class="document-grid ">
          <!-- Dashboard place  start -->
          <div class="dashboard-details">
            <span> <b style="font-size: 25px">Dashboard </b>of Asset</span>
            <span class="dashboard-place"> Operation <i class="fas fa-angle-double-right"></i> Asset</span>
          </div>
          <!-- dashboard place finish -->
          <div class="newItem">
                 <span> <router-link  to="/asset/asset-document" tag="button" class="button">
                    New <i class="fas fa-plus"></i> </router-link> </span>
            <span > <input type="text" placeholder="search..." v-model="search"></span>
          </div>
        </div>

      <div class="info">
          <div class="pagination" >
          <button  class="button" @click="prevPage"><i class="fas fa-angle-left"></i> Previous</button>
          <button  class="button" @click="nextPage">Next <i class="fas fa-angle-right"></i> </button>
            <button class="button">{{this.currentPage}}</button>
        </div>


        <table class="table table-bordered asset-table">
          <thead>
          <tr>
            <th @click="sort('name')">Name <i class="fas fa-sort"></i></th>
            <th @click="sort('model')">Model<i class="fas fa-sort"></i></th>
            <th @click="sort('serial')">Serial <i class="fas fa-sort"></i></th>
            <th @click="sort('date')"> Purchased Date <i class="fas fa-sort"></i></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(asset,index) in filteredAssetList" :key="index">
            <td>{{asset.name}}</td>
            <td>{{asset.model}}</td>
            <td>{{asset.serial}}</td>
            <td>{{asset.date}}</td>
          </tr>
          </tbody>
        </table>
        </div>
      </div>
  </div>

</template>

<script>

    export default {
        name: "Asset",
      data(){
          return{
            search:'',
            currentSort:'name',
            currentSortDir:'asc',
            pageSize:2,
            currentPage:1,

            asset:[
              {name:'b',model:'Asset 1', serial:'3', date:'20-Jul-2018'},
              {name:'a',model:'Asset 2', serial:'2', date:'24-Jun-2017'},
              {name:'c',model:'Asset 1', serial:'7',date:' 01-feb-2018'}
            ],

        }
      },

      methods:{
        sort(s) {
          if(s === this.currentSort) {
            this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
          }
          this.currentSort = s;
        },

        nextPage() {
          if((this.currentPage*this.pageSize) < this.asset.length) this.currentPage++;
        },

        prevPage() {
          if(this.currentPage > 1) this.currentPage--;
        }

      },
      computed:{
        sortedAsset() {
          return this.asset.sort((a,b) => {
            let modifier = 1;
            if(this.currentSortDir === 'desc') modifier = -1;
            if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
            if(a[this.currentSort] > b[this.currentSort]) return  modifier;
            return 0;
          }).filter((row, index) => {
            let start = (this.currentPage-1)*this.pageSize;
            let end = this.currentPage*this.pageSize;
            if(index >= start && index < end) return true;

          });
        },

        filteredAssetList() {
          return this.sortedAsset.filter(asset => {
            return asset.name.toLowerCase().includes(this.search.toLowerCase()) ||
              asset.model.toLowerCase().includes(this.search.toLowerCase()) ||
              asset.serial.toLowerCase().includes(this.search.toLowerCase())
          })
        }
      }
    }
</script>

<style scoped>
   .document-grid{
     margin-top: 4%;
   }
  .dashboard-details{
    padding-top: 10px;
    box-shadow: 2px 2px ghostwhite;
  }

  .dashboard-place{
    float: right;
    padding-top: 10px;
    padding-right: 30px;
    font-size: 12px;
  }
  .newItem {
    margin-top: 10px;
  }
  .info{
    text-align: center;
    margin-top: 20px;
    margin-right: 20px;
  }

  .button {
    display: inline-block;
    border-radius: 4%;
    background-color: #8080ff;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 12px;
    padding: 4px;
    width: 120px;
    cursor: pointer;
  }

  .newItem span input{

    width: 180px;
    font-size: 15px;
    border: 2px solid #76787a;
    border-radius: 4%;
    color: black;
    float: right;
    margin-right: 20px;
    padding-left: 5px;

  }

  .asset-table{
    font-size: 12px;
    margin-top: 10px;
  }
  .asset-table thead th{
    cursor: pointer;
  }
  .pagination{
    float: right;
    margin-bottom: 10px;
  }
   .pagination button{
    margin-left: 10px;
    width: 80px;
  }
</style>
