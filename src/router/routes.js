import Login from  '../security/login/Login'
import Dashboard from '../components/dashboard/Dashboard'
import Asset from '../components/operation/asset/Asset.vue'
import AssetDocument from '../components/operation/asset/AssetDocument'
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
    path: '/operation/asset', components: {
      default: Asset,
      name: Asset,
      'header-top': Dashboard,
    }
  },

  {
    path:'/asset/asset-document', components:{
      default: AssetDocument,
      name: AssetDocument,
      'header-top':Dashboard,
    },

  }


]
