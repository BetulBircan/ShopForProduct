<template>
  <div class="container p-3">
   <NavBar />

       <router-view></router-view>
       <footer class="py-5 bg-dark">
           <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
       </footer>
 </div>
 


</template>

<script>
import NavBar from './components/Navigation/NavBar.vue';


export default {
 name: 'App',
 components: {
   NavBar,
   
  
}
}
</script>


