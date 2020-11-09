<template>
  <div>
    
    <bannerComp
      img="home.png"
      title="We believe a mindful lifestyle is the future of consumption"
    />
    <textimgComp />
    <div id="ourpeople" class="layout">
      <p>OUR PEOPLE</p>
      <img :srcset="require('~/assets/img/ourpeople.png').srcSet" alt="" />
      <a href="" class="btn-primary">Meet our team</a>
    </div>
    <div v-lazy-container="{ selector: 'img' }" class="clients">
      <p class="p18">SOME OF OUR CLIENTS</p>
      <img
        :data-srcset="require('~/assets/img/logos.png').srcSet"
        alt=""
        class="img-fluid"
      />
    </div>

    <div class="ourbrands layout">
      <p class="p18">OUR BRANDS</p>
      <hr />
      <div class="row" id="up">
        <div v-lazy-container="{ selector: 'img' }" v-for="i in 4" class="col-md-3">
          <img
            :data-srcset="require('~/assets/img/brands/rect1.png').srcSet"
            alt=""
            class="img-fluid"
          />
          <p class="p20">Brand Name</p>
        </div>
      </div>
      

      <div class="row">
        <div v-lazy-container="{ selector: 'img' }" v-for="i in 3" class="col-md-3">
          <img
            :data-srcset="require('~/assets/img/brands/rect1.png').srcSet"
            alt=""
            class="img-fluid"
          />
           <p class="p20">Brand Name</p>
        </div>
      </div>
      <a href="" class="btn-primary">Learn more about our brands </a>
    </div>
  </div>
</template>

<script>
export default {
  watch: {},
  head: {
    link: [{ rel: 'stylesheet', href: '/assets/css/index.css' }],
  },
}
</script>

<style lang="scss" scoped></style>
