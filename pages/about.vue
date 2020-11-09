<template>
  <div>
    <bannerComp
      img="about.png"
      title="About us"
    />
    <div class="content">
        <p class="p18h">OUR STORY</p>
        <p class="p24">Third Culture Group (formerly VEEN Waters Finland Oy) got its avatar in July 2020 and has been developed with the idea of creating an alliance of small and mid sized like-minded food and beverage brands and distributors to promote the mindful lifestyle.</p>

<p class="p24">We are on a mission to build the mindful consumption movement by building awareness of the mindful lifestyle through our Zero Percent Shop platform and through making mindful brands easily accessible to consumers who wants to consume more responsibly and still enjoy themselves.</p>

<p class="p24">We want to help consumers drink less alcohol and animal products, eat less meat and more organic, consume less sugar and consume healthier in order to be happier. We own, produce, represent, market, distribute and sell leading brands in the categories of 0% alcohol, 0% dairy, 0% pesticides, 0% sugar, 0% microplastic, fine water and 0% meat.</p>
    <img id="content_img" :srcset="require('~/assets/img/about/about_img.png').srcSet" alt="about image" class="img-fluid">
    </div>
    <div class="values">   
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
    <div class="company layout">
        <p class="p18h">OUR COMPANY STRUCTURE</p>
        <img :srcset="require('~/assets/img/about/structure.jpg').srcSet" alt="" class="img-fluid">
        <div id="footext" class="" >
        <p class="p24">
            Third Culture Group (formerly VEEN Waters Finland Oy) got its avatar in July 2020 and has been developed with the idea of creating an alliance of small and mid sized like-minded food and beverage brands and distributors to promote the mindful lifestyle.
        </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  watch: {},
  head: {
    link: [{ rel: 'stylesheet', href: '/assets/css/page/about.css' }],
  },
}
</script>

<style lang="scss" scoped></style>
