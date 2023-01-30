<template>
  <div class="container p-3">
   <NavBar />
       <router-view></router-view>
       <FooterComponent />
 </div>
 


</template>

<script>
import NavBar from './components/Navigation/NavBar.vue';
import FooterComponent from './components/PageContent/FooterComponent.vue';


export default {
 name: 'App',
 components: {
    NavBar,
    FooterComponent
}
}
</script>


