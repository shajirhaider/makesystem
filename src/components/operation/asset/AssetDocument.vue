<template>
    <div>
      <div class="document-grid">
        <div class="row">
              <div class="newItem">
                <div class="list-group panel" >
                  <div class="addItem">
                  <button class="list-group-item btn btn-outline-info  btn-md" data-target="#form" data-toggle="collapse" data-parent="#MainMenu" >
                    New <i class="fas fa-plus"></i> </button>
                  </div>
                  <div class="collapse" id="form" >
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
                    </li>
                  </div>
                </div>
              </div>
            </div>

           <div class="row">
             <div class="info">
               <table class="table table-bordered">
                 <thead>
                 <tr>
                   <th>Firstname</th>
                   <th>Lastname</th>
                   <th>Email</th>
                 </tr>
                 </thead>
                 <tbody>
                 <tr>
                   <td>John</td>
                   <td>Doe</td>
                   <td>john@example.com</td>
                 </tr>
                 <tr>
                   <td>Mary</td>
                   <td>Moe</td>
                   <td>mary@example.com</td>
                 </tr>
                 <tr>
                   <td>July</td>
                   <td>Dooley</td>
                   <td>july@example.com</td>
                 </tr>
                 </tbody>
               </table>
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
  .info{
    width: 98%;
    text-align: center;
    margin-top: 20px;
  }
</style>
