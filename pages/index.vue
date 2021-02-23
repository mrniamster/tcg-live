<template>
  <div>
    
    <bannerComp
      img="home_test.png"
      title="We believe a mindful lifestyle is the future of consumption"
      dim=""
      sub=""
    />
    <!-- <textimgComp /> -->
      <div class="content">
        <p class="p18h">OUR STORY</p>
         <hr class="d-none" style="margin-bottom: 36px;">
        <p class="p24">
     We are a Finnish company on a mission to create the world’s leading alliance of brands and distributors operating a common sales/distribution platform and route-to-market for mindful consumption. 
     </p><br>
          <p class="p24">
     Our journey started in 2007 as VEEN Waters and Third Culture Group (formerly VEEN Waters Finland Oy) got its avatar in July of 2020.
      </p><br>
      <p class="p24">
        We believe that mindful consumers are looking for honest and transparent brands that are focused on well-being, produced with high-quality ingredients, are earth-friendly alternatives and enjoyable to consume.
      </p><br>
         <p class="p24">
           We believe a mindful lifestyle is the future of consumption.
      </p>
    </div>

    <div class="row layout">
      <p style="" class="d-none p18h">OUR STORY</p>
      <hr class="d-none " style="margin-bottom: 36px;">
<div class="col-6 pr-md-5 pl-2">
<img src="https://i.ibb.co/6PKNJGM/About-instead-of-the-jelly-image-1.jpg"  class="img-fluid">
</div>
<div class="col-6 my-auto pl-md-5 pl-2">
    <p class="p24">
      At TCG, we own, produce, represent, market, distribute and sell leading brands in the categories of 0% alcohol, 0% dairy, 0% pesticides, 0% sugar, 0% microplastic, 0% gluten, fine water and 0% meat.

      </p>
      <a href="/structure" class="btn-primary mt-md-4 mt-2" >Read more about TCG structure</a>
</div>
<p style="visibility:hidden" class="p18h">OUR STORY</p>

  <div class="col-6 my-auto pr-md-5 pl-2">
        <p class="p24">
      There is more than one definition of mindful lifestyle.
      </p><br>
       <p class="p24">
          We call it, the Zero Percent lifestyle. A type of lifestyle that is good for the body, good for the community, and good for the environment.
        </p>
  

</div>



<div class="col-6  pl-md-5 pl-2">
  <img src="https://i.ibb.co/RHZXzrv/About-us-cocktail-2.jpg"  class="img-fluid">

</div>

    </div>
          <div class="content">
        <p class="d-none p18h">OUR STORY</p>
       
        <p class="p24">
      At TCG we want to help consumers drink less alcohol and animal products, eat less meat and more organic, consume less sugar and consume healthier in order to be happier. Third Culture Group currently employs 45 people in 6 countries and has an existing sales team of 17 persons in 5 countries. Through this infrastructure, we have existing distribution to over 70 cities in the EU, India and the Middle East.
      </p><br>
          <p class="d-none p24">
      We are actively building awareness around the Zero Percent Lifestyle by making 0% brands easily accessible to consumers who want to consume more responsibly and still enjoy themselves.
      </p>
          
          <a href="/people" class="btn-primary mt-md-4 mt-2" >Get to know our people</a>
    <img id="content_img" :srcset="require('~/assets/img/about/about_img.png').srcSet" alt="about image" class="d-none img-fluid">
    </div>
    <div id="ourpeople" class="d-none layout">
      <p>OUR PEOPLE</p>
      <img :srcset="require('~/assets/img/ourpeople.png').srcSet" alt="" />
      <a href="/people"  class="btn-primary">Meet our team</a>
    </div>
    <div v-lazy-container="{ selector: 'img' }" class="d-none clients">
      <p class="p18">SOME OF OUR CLIENTS</p>
      <img
        :srcset="require('~/assets/img/logos2.png').srcSet"
        alt=""
        class="img-fluid"
      />
    </div>

    <div class="ourbrands layout">
      <p class="p18">OUR BRANDS</p>
      <hr />
      <div class="imgbank" id="up">
        <div v-lazy-container="{ selector: 'img' }" v-for="brand in brands.body" class="">
          <a :href='brand.brand_link'><img
            :srcset="require('~/assets/img/brands/'+brand.brand_910).srcSet"
            alt=""
            class="img-fluid"
          /></a>
          <p class="p20">{{brand.brand_name}}</p>
        </div>
      </div>
      <a href="/brands" style="visibility: hidden;" class="btn-primary">Learn more about our brands </a>
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
    return { brands}
  },
  watch: {},
  head: {
    link: [{ rel: 'stylesheet', href: '/assets/css/index.css' }],
  },
created(){
   //this.$axios.get('https://api.storyblok.com/v1/cdn/stories/posts/my-third-post?token=ask9soUkv02QqbZgmZdeDAtt').then((r)=>console.log(r.data));

}
}
</script>

<style lang="scss" scoped></style>
