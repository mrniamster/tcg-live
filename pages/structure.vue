<template>
  <div>
    <bannerComp
      img="about_test.png"
      title="Third Culture Group Structure"
      dim="true"
      subtitle="Our Group Business is split into three divisions"
    />
    <div class="layoutx-300 thead bg-primary">
        <p class="p18h d-none">OUR STRUCTURE</p>
        <p class="p24">Third Culture Group business is split into three divisions:</p>
        <br>
          <ul>
            <li class="p24">Production</li>
            <li class="p24">Brand Building</li>
            <li class="p24">Route to Market</li>
          </ul>
    <img id="content_img" :srcset="require('~/assets/img/about/about_img.png').srcSet" alt="about image" class="d-none img-fluid">
    </div>


 <div class="layoutx">
        <p class="p18h">OUR COMPANY STRUCTURE</p>
     
        <!-- <img :srcset="require('~/assets/img/about/structure.jpg').srcSet" alt="" class="img-fluid"> -->
        <div  class="categoires">

          <hr>   <br>
<div class="row  box1">
<div class="col-6 pr-md-5">
<img :srcset="require('~/assets/img/structure/bhutan.png').srcSet"  class="img-fluid">
</div>
<div class="col-6 my-auto pl-md-5 p-2">
   <p class="p18h">1. PRODUCTION</p>
  
   
      <p class="p24">
       Within the first division, Production, TCG has exclusive tie ups and ownership with two extremely rare, unique and remote water sources in Finnish Lapland and the Himalayan Kingdom of Bhutan. With own bottling plants at these sources, TCG is producing own range of products under the VEEN brand.
      </p>
      <!-- <a href="/people" class="btn-primary mt-md-4" >Read more about TCG structure</a> -->
</div>
<p style="visibility:hidden" class="p18h">OUR STORY</p>
  <div class="col-6 my-auto pr-md-5">
      <p class="p18h">2. BRAND BUILDING</p>
        <p class="p24">
     

We own the brands VEEN, Ayurveda Super Shots, Ayurveda Water, Nordic Mixers, Ayur Atmospherics, VEEN Plant-Based, Ayurveda Gummi.
</p>
</div>
<div class="col-6  pl-md-5 p-2">
  <img :srcset="require('~/assets/img/structure/nordic.jpg').srcSet" class="img-fluid">

</div>
<p style="visibility:hidden" class="p18h">OUR STORY</p>
<div class="col-6  pr-md-5">
 <img :srcset="require('~/assets/img/structure/rtm.png').srcSet"   class="img-fluid">

</div>
<div class="col-6  pl-md-5 p-2 my-auto">
      <p class="p18h">3. ROUTE TO MARKET</p>
        <p class="p24">
        Zero Percent is our route-to-market brand developed to retail and distribute our own brands, alliance partner brands and exclusively distributed brands through our multi-channel D2C retail, HORECA and retail distribution approach.
        </p>
        <br>
        <p class="p24">
        The platform represents leading brands in the 0% categories of 0% alcohol,0% dairy, 0% pesticides, 0% sugar, 0% microplastic,0% gluten, fine waters and 0% meat.
        </p>
      <!-- <p class="d-none d-md-block p18">*to be launched in 2021.</p> -->
</div>
       
      <div class="map p-5"><br><br>
        <img src="https://i.ibb.co/ccDMMTb/map.png"  class="img-fluid">
      </div>

       <div class="d-md-none">
        <p class="d-none p18h">OUR STORY</p>
      <p class="p24">
          The platform represents leading brands in the 0% categoreis of 0% alchol,0% dairy, 0% pesticides, 0% sugar, 0% microplastic,0% gluten, fine waters and 0% meat.
        </p>
        <p class="p18">*to be launched in 2021.</p>
    </div>

</div>
 


     </div>

    </div>

    <div class="d-none container-fluid textimgComp">
     <div class="flex-container">
    <div  v-lazy-container="{ selector: 'img' }"  class="flex-item">
      <img :srcset="require('~/assets/img/about/textimg.png').srcSet" class="img-fluid" />
    </div>
       <div class="flex-item" id="spacer">

    </div>
        <div class="flex-item">
      <p style="visibility:hidden" class="p18">OUR STORY</p>
      <p>
       At TCG, we own, produce, represent, market, distribute and sell leadingbrands in the categories of 0% alcohol, 0% dairy, 0% pesticides, 0% sugar, 0% microplastic, 0% gluten, fine water and 0% meat.
      </p>
   
      <a @click="cs=!cs" to="#" class="btn-primary" >Read more about TCG structure</a>
    </div>
  </div>
  </div>

  
<div v-show="cs" class="company-structure">
     <div class="layout">
        <p class="p18h">OUR COMPANY STRUCTURE</p>
        <!-- <img :srcset="require('~/assets/img/about/structure.jpg').srcSet" alt="" class="img-fluid"> -->
        <div  class="categoires">

          <hr>
          <div class="row" role="button">
            <p class="p18h text-center">Our Group business is split into three divisions</p>
            <div class="col-md-4 p-2">
              <a @click="view('production')"><div class="card bg-dark text-white">
  <img class="card-img dim" src="/assets/img/extra/prod.png" alt="Card image">
  <div class="card-img-overlay">
    <h5 class="card-title text-center p24 text-white">Production</h5>
  </div>
</div></a>
            </div>
            <div class="col-md-4 p-2">
                          <a @click="view('bb')">  <div class="card bg-dark text-white">
  <img class="card-img dim"  alt="Card image">
  <div class="card-img-overlay">
    <h5 class="card-title text-center p24 text-white">Brand Building</h5>
  </div>
</div></a>

            </div>
            <div class="col-md-4 p-2">
                           <a @click="view('rtom')"> <div class="card bg-dark text-white">
  <img class="card-img dim" src="/assets/img/extra/trends.jpg" alt="Card image">
  <div class="card-img-overlay">
    <h5 class="card-title text-center p24 text-white">Route to Market</h5>
  </div>
</div></a>

            </div>
          </div>
     </div>

    </div>

    <div v-if="toggle=='production'"  class="container-fluid textimgComp">
     <div class="flex-container">
    <div v-lazy-container="{ selector: 'img' }"  class="flex-item">
  
            <img :srcset="require('~/assets/img/about/1.png').srcSet" class="img-fluid" />
     
    </div>
    <div class="flex-item" id="spacer">

    </div>
    <div   class="flex-item my-auto">
          <p style="visibility:hidden" class="p18">OUR STORY</p>
      <p>We own and operate two spring water and natural mineral water bottling plants in Finnish Lapland and the Himalayan Kingdom of Bhutan.
    </p>
    
   
      <a href="/people" class="d-none btn-primary" >Read more about TCG team</a>
    </div>
  </div>
  </div>

      <div v-if="toggle=='bb'"  class="container-fluid textimgComp">
     <div class="flex-container">
    <div v-lazy-container="{ selector: 'img' }"  class="flex-item">
  
            <img :srcset="require('~/assets/img/about/2.png').srcSet" class="img-fluid" />
     
    </div>
    <div class="flex-item" id="spacer">

    </div>
    <div   class="flex-item my-auto">
          <p style="visibility:hidden" class="p18">OUR STORY</p>
      <p>We own the brands VEEN, Ayurveda Super Shots, Ayurveda Water, Nordic Mixers, Ayur Atmospherics*, VEEN Plant-Based*, Ayurveda Gummi* 
    </p>
    <p class="small">*to be launched in 2021.</p>
   
      <a href="/people" class="d-none btn-primary" >Read more about TCG team</a>
    </div>
  </div>
  </div>

       <div v-if="toggle=='rtom'"  class="container-fluid textimgComp">
     <div class="flex-container">
    <div v-lazy-container="{ selector: 'img' }"  class="flex-item">
  
            <img :srcset="require('~/assets/img/about/3.png').srcSet" class="img-fluid" />
     
    </div>
    <div class="flex-item" id="spacer">

    </div>
    <div   class="flex-item my-auto">
          <p style="visibility:hidden" class="p18">OUR STORY</p>
      <p>Zero Percent is our route to market brand developed to retail and distribute our own brands,allicance partner brands and exclusively distributed brands through our multi-channel D2C retail, HORECA and retail distribution approach. The platform represents leading brands in the 0% categoreis of 0% alchol,0% dairy, 0% pesticides, 0% sugar, 0% microplastic,0% gluten, fine waters and 0% meat.
    </p>
   
      <a href="/people" class="d-none btn-primary" >Read more about TCG team</a>
    </div>
  </div>
  </div>
</div>




      <div class="d-none container-fluid textimgComp">
     <div class="flex-container">
    <div class="flex-item my-auto">
      <p style="visibility:hidden" class="p18">OUR STORY</p>
      <p>
       There are more than one definition of Mindful Lifestyle. We call it, the 0% Lifestyle. 
A type of lifestyle that is good for the body, good for the community, and good for the environment. 

      </p>
   
      <nuxt-link to="/people" class="btn-primary" >Read more about TCG team</nuxt-link>
    </div>
    <div class="flex-item" id="spacer">

    </div>
    <div  v-lazy-container="{ selector: 'img' }"  class="flex-item">
      <img :srcset="require('~/assets/img/about/textimg2.png').srcSet" class="img-fluid" />
    </div>
  </div>
  </div>


    <div class="d-none values ">   
        <p class="p18">OUR VALUES</p>
         <div v-for="i in 4">
        <hr>
        <div class="row">
            <div class="col-md-6">
                <p class="p36"><sup class="p18">01</sup>Example Value</p>
            </div>
            <div class="col-md-6">
                <p class="p18" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>      
        </div>
        <hr>
    </div>

    
    <div class="d-none ourbrands layout">
      <p class="p18">OUR BRANDS</p>
      <hr />
      <div class="imgbank" id="up">
        <div v-lazy-container="{ selector: 'img' }" v-for="brand in brands.body" class="">
          <a :href='brand.brand_link'>
            <img :srcset="require('~/assets/img/brands/'+brand.brand_910).srcSet"
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
     const brands = await $content('api/brand/brands', params.slug).sortBy('id','desc').fetch()
    return { brands}
  },
    data(){
    return{
        toggle:'production',
        cs:false,
    }
  },
  watch: {},
  head: {
    link: [{ rel: 'stylesheet', href: '/assets/css/index.css' },{ rel: 'stylesheet', href: '/assets/css/page/about.css' }],
  },
   methods:{
    view:function(value){
      this.toggle=value;
    }
  },
}
</script>

<style lang="scss" scoped></style>
