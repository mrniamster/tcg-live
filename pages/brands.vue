<template>
  <div>
    <bannerComp
      img="brands_test.png"
      title="Our brands"
      dim="true"
    />
    <div class="layoutx-300 thead bg-pri-color">
      <p class="p18h">OWN BRANDS</p>
      <p class="p24">
      We own and operate two spring water
and natural mineral water bottling
plants in Finnish Lapland and the
Himalayan Kingdom of Bhutan. 
      </p>
      <p class="p24">
        We own the brands VEEN, Ayurveda
Super Shots, Ayurveda Water, Nordic
Mixers, Ayur Atmospherics, VEEN
Plant-Based, <b>Ayurveda Gummi</b>
to be launched in 2021.
      </p>
    </div>
   <div id="box2" class="layoutx box2">
    <div class="row"></div> <!---todo remove if the array is >2 -->
     <div class="row" v-for="brand in brands[0].body">
       <div class="col-md-6">
         <img :srcset="require('~/assets/img/brands/'+brand.brand_img).srcSet" alt="" class="img-fluid">
       </div>
       <div class="col-md-6">
         <p class="p36">{{brand.brand_name}}</p>
         <p class="p18" >{{brand.brand_info}}</p>
        <a :href="brand.brand_link" class="btn-primary">Visit Website</a>
       </div>
     </div>
   </div>
   <div class="layoutx-300 thead bg-pri-color">
<p class="p18h">ALLIANCE BRANDS</p>
      <p class="p24">
       Third Culture Group acts as an alliance of brands and distributors focused on mindful consumption. The Alliance brand and TCG are the back bone to a multi-market, multi-brand sales and distribution engine.
      </p>
   </div>
   <div id="box1" class="layoutx box1 ">
   <div class="row"></div> <!---todo remove if the array is >2 -->
          <div class="row" v-for="alibrand in brands[1].body">
       <div class="col-md-6">
         <img :srcset="require('~/assets/img/brands/'+alibrand.brand_img).srcSet" alt="" class="img-fluid">
       </div>
       <div class="col-md-6">
         <p class="p36">{{alibrand.brand_name}}</p>
         <p class="p18">{{alibrand.brand_info}}</p>
        <a  :href="alibrand.brand_link" class="btn-primary">Visit Website</a>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  async asyncData({$content}){
    const brands = await $content('api/brand').fetch();
    const alibrands=await $content('api/brand/TCG_Ali-Brand_List',{text:true}).fetch();    
    return {brands,alibrands }
  },
  head: {
    link: [{ rel: 'stylesheet', href: '/assets/css/page/brands.css' }],
  },
  mounted(){
    console.log(this.brands)
  }
}
</script>

<style lang="scss"></style>
