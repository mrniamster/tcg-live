<template>
  <div>
    <bannerComp
      img="clients_test.png"
      title="Our work"
      dim="true"
    />
      <div class="layoutx-300 thead bg-primary">
        <p class="p18h">OUR WORK</p>
<p class="p24">
  Our products are being sold in approximately 1600 points of sale within premium hotels, restaurants, bars and nightclubs in 76 cities in the following 19 countries – Finland, Estonia, Germany, France, Italy, Belgium, UK, Russia, United Arab Emirates, Qatar, Kuwait, Saudi Arabia, India, Kingdom of Bhutan, Singapore, Hong Kong, Macau, China and Japan.
  </p>
    <!-- <img id="content_img" :srcset="require('~/assets/img/about/about_img.png').srcSet" alt="about image" class="d-none img-fluid"> -->
    </div>

    <div class="layoutx" id="clients">
    <img id="banner" src="https://i.ibb.co/3pVP2TV/Charcoal-Beach-Photo-Maldives-Infographic.png" class="img-fluid " style="" >
    </div>
  </div>
</template>

<script>
export default {
  watch: {},
  head: {
    link: [{ rel: 'stylesheet', href: '/assets/css/page/clients.css' }],
     script: [ { src: 'https://cdn.jsdelivr.net/npm/apexcharts' } ]
  },
}
</script>

<style lang="scss" scoped></style>
