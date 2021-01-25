<template>
  <div>
    <bannerComp
      img="clients.png"
      title="Our Clients"
    />

    <div class="layoutx" id="clients">
      <p class="p18h">SOME OF OUR ESTEEMED CLIENTS</p>
      <div class="row">
        <div class="col-md-6">

          <img :srcset="require('~/assets/img/clients/hartwall.png').srcSet"  class="img-fluid">

        </div>
                <div class="col-md-6">

          <img :srcset="require('~/assets/img/clients/oberoi.png').srcSet"  class="img-fluid">

        </div>
          <div class="col-md-6">

          <img :srcset="require('~/assets/img/clients/itc.png').srcSet"  class="img-fluid">

        </div>
        <div class="col-md-6">
         
          <img :srcset="require('~/assets/img/clients/westwing.png').srcSet"  class="img-fluid">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watch: {},
  head: {
    link: [{ rel: 'stylesheet', href: '/assets/css/page/clients.css' }],
  },
}
</script>

<style lang="scss" scoped></style>
