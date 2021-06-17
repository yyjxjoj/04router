<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">BEEN BROTHERS</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">

      <li class="nav-item active" v-for="(item,i) in menu" :key="i">
        <a class="nav-link" href="#">
          <span class="sr-only">(current)</span>
          <router-link :to="menu[i].link">{{menu[i].menu}}</router-link>
          </a>
      </li>
    </ul>
  </div>
</nav>

</template>

<script>
export default {
  name:'header',
  data(){
    return{
      menu:[
        {menu:'HOME',link:'/'},
        {menu:'PRODUCT',link:'/product'},
        {menu:'BOARD',link:'/board'},
      ]
    }
  }
}
</script>

<style>

</style>