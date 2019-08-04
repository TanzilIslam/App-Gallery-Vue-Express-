<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <transition name="router-anim" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
             <router-view ></router-view>
          </transition>
          
        </div>
        <div class="col-sm-3">
          <Cart></Cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

export default {
  name: "App",
  components: {
    Navbar,
    Cart
  },
  data(){
    return{
      items:[],
      cart : []
    }
  },
  mounted(){

  },
  methods:{
  //  search(keyword){
  //    this.items = data.filter(item => {
  //      return item.title.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) !== -1
  //    })
  // }
  }
};
</script>
<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
</style>