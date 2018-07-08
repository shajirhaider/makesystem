
import Login from  '../security/login/Login'
import Dashboard from '../components/dashboard/Dashboard'
import Asset from '../components/operation/asset/Asset.vue'

export const routes=[
  {
    path:'', components:{
      default:Login,
    }
  },

  {
    path:'/dashboard', components:{
      default:Dashboard,
      name:Dashboard
    }
  },

  {
    path:'/operation/asset' , components:{
      default: Asset,
      name: Asset,
      'header-top':Dashboard
    }
  }


]
