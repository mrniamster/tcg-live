<template>
  <div>
    <bannerComp
      img="brands.png"
      title="Our brands"
    />
    <div class="layoutx-300 thead">
      <p class="p18h">OWN BRANDS</p>
      <p class="p24">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, euismod amet nullam faucibus morbi nunc ultrices.
      </p>
      <p class="p24">
        Vulputate risus, blandit dictumst dolor pharetra. Facilisis interdum a quisque mattis.
      </p>
    </div>
   <div class="layoutx box1">
     <div class="row" v-for="i in 4">
       <div class="col-md-6">
         <img :srcset="require('~/assets/img/brands/brandbox.png').srcSet" alt="" class="img-fluid">
       </div>
       <div class="col-md-6">
         <p class="p36">VEEN Ayurveda Shots</p>
         <p class="p18">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
        <button class="btn-primary">Check out on LinkedIn</button>
       </div>
     </div>
   </div>
   <div class="layoutx-300 thead bg-pri-color">
<p class="p18h">ALLIANCE BRANDS</p>
      <p class="p24">
       Third Culture Group acts as an alliance of brands and distributors focused on mindful consumption. The Alliance brand and TCG are the back bone to a multi-market, multi-brand sales and distribution engine.
      </p>
   </div>
   <div class="layoutx box1 bg-pri-color">
          <div class="row" v-for="i in 1">
       <div class="col-md-6">
         <img :srcset="require('~/assets/img/brands/ish.png').srcSet" alt="" class="img-fluid">
       </div>
       <div class="col-md-6">
         <p class="p36">ISH Spirits</p>
         <p class="p18">Based Copenhagen, Denmark, ISH Spirits were created by Morten Sørensen as part of his 100-day alcohol-free challenge. ISH is this alternative for the mindful drinker - the athlete, the pregnant woman, or the designated driver. It’s for those who can tear up the dance floor sober, and for those who simply want to wake up with a clear head on a Sunday morning. Realizing people craved the same familiar flavours, ISH was created, so that we can all still enjoy our favourite cocktails with no-and-low-alcohol, for any occasion, and most importantly – without compromise.</p>
        <button class="btn-primary">Check out on LinkedIn</button>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  watch: {},
  head: {
    link: [{ rel: 'stylesheet', href: '/assets/css/page/brands.css' }],
  },
}
</script>

<style lang="scss" scoped></style>
