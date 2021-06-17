<template>
  <div class="best">
    <div class="container">
      <h2 class="py-3">BEST PRODUCT</h2>
      <p>발송일로부터 3일 이내 로스팅된 원두로 보내드립니다.</p>
      <div class="row my-5">
        <div class="col-sm-6 col-md-3 py-3 text-center" v-for="(item,i) in pdata" :key="i">
          <img :src="pdata[i].image" alt="" class="w-100">
          {{pdata[i].title}}
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name:'product',
  props:['pdata'],
}
</script>

<style>

</style>