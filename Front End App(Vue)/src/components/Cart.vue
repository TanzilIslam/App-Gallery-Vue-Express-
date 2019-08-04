<template>
<div>
 <ul class="list-group">
        <li class="list-group-item ">
            <span>name
            <span class="float-right">price</span>
            </span> 
            
        </li>
      </ul>
      
      <ul  v-for="(item,index) in items" :key="index" class="list-group">
        <li class="list-group-item ">
            <img @click="removeItem(index)" src="../assets/icons8-trash-24.png" alt="">
            <span >{{ item.title }}
            <span class="float-right">{{ item.price }}</span>
            </span> 
            
        </li>
      </ul>
      <hr>
      <ul class="list-group">
           <li class="list-group-item ">
            <span>Total
            <span class="float-right">${{ totalprice }}</span>
            </span> 
            
        </li>
      </ul>
      
      <ul v-if="items.length > 0"  class="list-group">
           <li class="list-group-item text-center ">
            <button @click="checkout" class=" btn btn-primary">check out</button> 
            </li>
    </ul>
</div>
</template>

<script>
export default {
    computed:{
        items(){
            return this.$store.getters.getCart
        }
        ,
        totalprice(){
            var total = 0
            this.items.forEach(element => {
            total+= parseFloat(element.price.slice(1,element.length))
            })
            return total.toFixed(2)
        }
    },
    methods:{
        removeItem(index){
            this.$store.dispatch('removeItem',index)
        },
        checkout(){
        if (confirm('Are you sure')) {
            this.$store.commit('reset')
            }
    },
    }
}
</script>

<style>

</style>
