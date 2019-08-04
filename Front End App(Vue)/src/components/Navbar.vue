<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
     <router-link tag="div" :to = "{ path : '/'}"><a class="navbar-brand">Super Store</a></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <form  @submit.prevent="search" class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="keyword">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
  </nav>
</template>

<script>
import axios from 'axios'
export default {
data(){
  return{
    keyword:'',
    
  }
},
methods:{
  search(){
   
    
     var self = this
          axios.get('http://localhost:3000/data1/search/'+ this.keyword )
          .then(function (response) {
            setTimeout(() => {
            self.$store.dispatch('searchedInventory',response.data)
            }, 1000);
            
          })
          .catch(function (error) {
            // handle error
            console.log('No Net'+error);
          })
          .finally(function () {
            // always executed
          });
  }
}
}
</script>

<style>

</style>
