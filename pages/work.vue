<template>
  <div>
    <bannerComp
      img="clients_test.png"
      title="Our work"
      dim="true"
    />
      <div class="content">
        <p class="d-none p18h">OUR STORY</p>
        <p class="p24">Third Culture Group business is split into three divisions:</p>
          <ul>
            <li class="p24">Production</li>
            <li class="p24">Brand Building</li>
            <li class="p24">Route to Market</li>
          </ul>
<p class="p24">Within the first division, Production, TCG has exclusive tie ups and ownership with two extremely rare, unique and remote water sources in Finnish Lapland and the Himalayan Kingdom of Bhutan. With own bottling plants at these sources, TCG is producing own range of products under the VEEN brand.</p>
<br>
<p class="p24">The VEEN brand was established in 2006 and has since been sold in approximately 1600 points of sale within premium hotels, restaurants, bars and nightclubs in 76 cities in the following 19 countries – Finland, Estonia, Germany, France, Italy, Belgium, UK, Russia, United Arab Emirates, Qatar, Kuwait, Saudi Arabia, India, Kingdom of Bhutan, Singapore, Hong Kong, Macau, China and Japan.</p>
    <img id="content_img" :srcset="require('~/assets/img/about/about_img.png').srcSet" alt="about image" class="d-none img-fluid">
    </div>

    <div class="layoutx" id="clients">
      <div class="container-fluid">
              <p class="p18h">INTERACTIVE STATISTICS FOR MILESTONES:</p>
        <div id="chart"></div>
        <br>
        <p class="p24">Within its third division, Route to Market, TCG owns and operates Zero Percent Shop brand - an online retail shop and an offline distribution business in the markets of Finland, Germany, Latvia, UAE and India. This multichannel D2C retail, HORECA and retail distribution approach allows us to represents leading brands in the 0% categories of 0% alcohol, 0% dairy, 0% pesticides, 0% sugar, 0% microplastic, 0% gluten, fine waters and 0% meat.</p>
      </div>
        <div class="container-fluid">
              <p class="p18h">INTERACTIVE STATISTICS FOR MILESTONES:</p>
        <div id="chart2"></div>
      </div>
   <br>
      <p class="p18h">SOME OF OUR ESTEEMED CLIENTS</p>
      
    <div id="ourpeople" class="d-none layout">
      <p>OUR PEOPLE</p>
      <img :srcset="require('~/assets/img/ourpeople.png').srcSet" alt="" />
      <nuxt-link to="/people"  class="btn-primary">Meet our team</nuxt-link>
    </div>
    <div v-lazy-container="{ selector: 'img' }" class="clients" style="padding:120px 80px;margin-top: 0;margin-right: 0;margin-bottom: 120px;margin-left: 0;">
      <p class="d-none p18">SOME OF OUR CLIENTS</p>
      <img
        :srcset="require('~/assets/img/logos2.png').srcSet"
        alt=""
        class="img-fluid"
      />
    </div>


      <div class="d-none row">
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
     script: [ { src: 'https://cdn.jsdelivr.net/npm/apexcharts' } ]
  },
  mounted(){
    var options = {
  chart: {
    type: 'pie'
  },
  tooltip:{
      theme: 'dark',
         style: {
        fontSize: '12px',
        fontFamily: 'maison_neuelight'
      },
  },
  legend:{
     fontSize: '14px',
      fontFamily: 'maison_neuelight',
  },
  
  responsive: [{
    breakpoint: 728,
    options: {
      legend: {
        show:true,
        position: 'bottom',
      }
    },
}],
  series: [2,1600,3,76,19,7],
  colors: ['#FF9800', '#5A6634', '#AAAAAA', '#CEE4F1', '#F5FAFC','#000080'],
  labels:["2 bottling plants","sold in approx 1600 points of sale",'sold to premium hotels, restaurants, bars, cafés, nightclubs, and premium retail','76 cities','19 countries','7 awards'],
}

    var options2 = {
  chart: {
    type: 'pie'
  },
  tooltip:{
      theme: 'light',
         style: {
        fontSize: '12px',
        fontFamily: 'maison_neuelight'
      },
  },
  legend:{
     fontSize: '14px',
      fontFamily: 'maison_neuelight',
  },
  
  responsive: [{
    breakpoint: 728,
    options: {
      legend: {
        show:true,
        position: 'bottom',
      }
    },
}],
  series: [8,17,3],
  colors: ['#5A6634', '#AAAAAA', '#CEE4F1'],
  labels:["NUMBER OF CATEGORIES","NUMBER OF BRANDS DISTRIBUTED",'PRESENT IN MARKETS (3:EU, UAE, India)'],
}

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();
  }
}
</script>

<style lang="scss" scoped></style>
