<template>
   <div v-if="item" class="conatiner">
       <div class="row">
        <div class="col-md-6">
        <img :src="item.image" class="img-thumbnail" alt="">
       </div>
       <div class="col-md-4">
           <h1>{{ item.catagory }}</h1>
           <h4>{{ item.title }}</h4>
           <h4>{{ item.price}}</h4>
            <button @click="addToCart(item)" class="btn btn-secondary"> Add To Cart</button>
       </div>
       </div>

   </div>
   <h1 v-else>Loading</h1>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            item:null
        }
    },
    
    methods:{
        fetchItem(){
          var self = this
          axios.get('http://localhost:3000/data1/'+ this.$route.params.id )
          .then(function (response) {
            // handle success
            setTimeout(() => {
             self.item = response.data
            //  self.loading=false 
            }, 1000);
            
          })
          .catch(function (error) {
            // handle error
            console.log('No Net'+error);
          })
          .finally(function () {
            // always executed
          });
        },
        addToCart(item){
          this.$store.dispatch('addToCart',item)
        }

    },mounted(){
        this.fetchItem()
    }


}
</script>

<style>
.custom{
  font-size: 10px;
}
</style>
