<template>
  <div>
    
    <bannerComp
      img="home_test.png"
      title="We believe a mindful lifestyle is the future of consumption"
    />
    <textimgComp />
    <div id="ourpeople" class="layout">
      <p>OUR PEOPLE</p>
      <img :srcset="require('~/assets/img/ourpeople.png').srcSet" alt="" />
      <nuxt-link to="/people"  class="btn-primary">Meet our team</nuxt-link>
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
      <div class="imgbank" id="up">
        <div v-lazy-container="{ selector: 'img' }" v-for="brand in brands.body" class="">
          <img
            :data-srcset="require('~/assets/img/brands/'+brand.brand_910).srcSet"
            alt=""
            class="img-fluid"
          />
          <p class="p20">{{brand.brand_name}}</p>
        </div>
      </div>
      <nuxt-link to="/brands" class="btn-primary">Learn more about our brands </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
    //const article = await $content('api/brand', params.slug).where({ id: { $between: [2,3]}}).fetch()
    // const article = await $content('api/brand', params.slug).only(['id','brand']).fetch()
    // const article = await $content('api/brand', params.slug).sortBy('id','desc').fetch()
     const brands = await $content('api/brand/brands', params.slug).sortBy('id','desc').fetch()
    console.log(brands,params)
    return { brands}
  },
  watch: {},
  head: {
    link: [{ rel: 'stylesheet', href: '/assets/css/index.css' }],
  },
created(){
   //this.$axios.get('https://api.storyblok.com/v1/cdn/stories/posts/my-third-post?token=ask9soUkv02QqbZgmZdeDAtt').then((r)=>console.log(r.data));
  console.log(this.brands);
}
}
</script>

<style lang="scss" scoped></style>
