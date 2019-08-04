<template>
  <div class="container" >
    <div v-if="!loading">
        <div v-if="searchedItems==empty" >
          <div class="row">
            <div class="col-sm-3 card" v-for="(item,index) in items" :key="index">
              <!-- for routing -->
            <router-link tag="div" :to = "{ path : './item/'+ item.id}">
              <img  class="img-thumbnail" :src="item.image" alt="image">
              <h2>{{ item.catagory }}</h2> 
              <h5 >{{ item.title }}</h5>
              <p >{{ item.price }}</p>
          </router-link>
          <a @click="addToCart(item)" class="btn btn-sm btn-primary">+ add</a>
            
            </div>


        </div>

        </div>
        <div v-else class="conatiner" >
       <div class="row">
        <div class="col-md-6">
        <img :src="searchedItems.image" class="img-thumbnail" alt="">
       </div>
       <div class="col-md-4">
           <h1>{{ searchedItems.catagory }}</h1>
           <h4>{{ searchedItems.title }}</h4>
           <h4>{{ searchedItems.price}}</h4>
            <button @click="addToCart(searchedItems)" class="btn btn-secondary"> Add To Cart</button>
       </div>
       </div>
      
      </div>
      
      </div>
      <div v-else>

      </div>
      </div>
          
     
        
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            loading: true,
            empty:''            
        }
    },
    computed:{
      items(){
        var self = this
        return self.$store.getters.getInventory
        // console.log(self.$store.getters.getInventory)
        
      },
      searchedItems(){
         var self = this
        return self.$store.getters.getSearched

      }

    },
    methods:{

        addToCart(item){
            this.$store.dispatch('addToCart',item)
        },

        fetchdata(){
          var self = this
          axios.get('http://localhost:3000/data1')
          .then(function (response) {
            // handle success
            setTimeout(() => {
             self.$store.dispatch('setInventory', response.data)
             self.loading=false 
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
    },
    mounted(){
      this.fetchdata()
    }
}

</script>

<style>
.card{
  padding: 10px;
  margin: 18px;
  background-color: beige;
}
.card a{
  background-color: antiquewhite;
}

</style>
