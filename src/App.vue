<template>
<top-header />
<router-view :pdata="pdata"></router-view>
<bottom-footer />
</template>

<script>
import header from './components/header.vue'
import pdata from './pdata.js'
import footer from './components/footer.vue'

export default {
  name:'app',
  components:{
    'top-header':header,
    'bottom-footer':footer,
  },
  data(){
    return{
      pdata:pdata,
    }
  }
}
</script>

<style>
* {margin: 0; padding: 0; box-sizing: border-box;}
li {list-style:none;}
a:link, a:visited {text-decoration:none; color:#000;}
.clearfix:after {content:""; clear:both; display:block;}

h1 {text-align: center;}
ul.gnb {margin-bottom: 20px;}
ul.gnb li {
  width:calc(100%/3); float:left;
  text-align: center; line-height: 50px;
  cursor:pointer;
  }
ul.gnb li:hover {background:tan;}

.footer {background: #eee; padding: 40px;}
.footer h6 {font-weight: bold;}
</style>