<template>
  <div>
    <bannerComp
      img="contact.png"
      title="Contact"
    />
    <div class="layoutx box1">
      <div class="layout300x ownbrands ">
        <h4 class="p18h title">OWN BRANDS</h4>
        <p class="p24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, euismod amet nullam faucibus morbi nunc ultrices.</p>
        <p class="p24">Vulputate risus, blandit dictumst dolor pharetra. Facilisis interdum a quisque mattis.</p>
      </div>
    </div>

        <div class="values">   
        <p class="p18" style="padding-top:0px;" >OPEN POSITIONS</p>
         <div v-for="i in 4">
        <hr>
        <div class="row">
            <div class="col-md-6">
                <p class="p36"><sup class="p18">01</sup>Position Title Comes Here</p>
            </div>
            <div class="col-md-6">
                <p class="p18" style="padding-top:0px !important">Mauris pharetra nulla in sit vel diam a. Facilisis sit scelerisque nisl dui fermentum imperdiet vestibulum sodales ut. Duis bibendum arcu, nunc volutpat pulvinar quis risus neque leo.</p>

                    <p class="p18">Feugiat ultrices ullamcorper sit vel mattis ut morbi. Posuere massa viverra aliquam id suscipit maecenas etiam eget. Tellus tempus dignissim semper arcu. Nisl elementum amet, sed aliquet nibh scelerisque..</p>

                    <button class="btn-primary" data-v-41fe1185="">Check out on LinkedIn</button>
            </div>
        </div>      
        </div>
    </div>
    <div class="layoutx investor">
      <div class="layout300x">
<h4 class="p18h">INVESTOR RELATIONS</h4>
<p class="p24">Odio vulputate donec vitae, nullam eros, nisl feugiat. Non bibendum duis nunc facilisis massa feugiat viverra elit facilisis. Mi mi euismod sit suspendisse. Aliquam pulvinar etiam posuere leo gravida viverra commodo gravida orci.</p>
      <p class="p24">Vulputate risus, blandit dictumst dolor pharetra. Facilisis interdum a quisque mattis. For more iformation contact <a style="color:#5A6634" href="mailto:luka.fabris@tcg.com">luka.fabris@tcg.com</a></p>
      </div>

     <div class="documents">
          <p class="p18h">RELAED DOCUMENTS</p>
          <hr>
          <div class="row" >
       <div id="article" class="d-md-flex flex-nowarp  justify-content-around box" v-for="i in 3">
       <div class="profile" v-for="i in 4">
         <div class="frame">
         <img :srcset="require('~/assets/img/media/article.png').srcSet">
        </div>
        <div class="info">
          <p class="title">Imaginery File Name</p>
          <a id="download" href="/_nuxt/img/ce11692-640.png" style="cursor:pointer;color:#5A6634" class="date text-decoration-none" download><span style="display: inline-grid;"><img src="/assets/img/download.svg"></span>DOWNLOAD</a>
        </div>
       </div>
       </div>
     </div>

     </div>
  </div>
  <div id="box2" class="layoutx">
        <div class="layout300x relations">
       <p class="p18h">PRESS RELATIONS</p>
       <p class="p24">Odio vulputate donec vitae, nullam eros, nisl feugiat. Non bibendum duis nunc facilisis massa feugiat viverra elit facilisis. Mi mi euismod sit suspendisse. Aliquam pulvinar etiam posuere leo gravida viverra commodo gravida orci.</p>
      <p class="p24">Vulputate risus, blandit dictumst dolor pharetra. Facilisis interdum a quisque mattis. For more iformation contact <a style="color:#5A6634" href="mailto:luka.fabris@tcg.com">luka.fabris@tcg.com</a></p>
     </div>
        <div class="releases">
        <p class="p18h">PRESS RELEASES</p>
        <div v-for="i in 2" id="card" class="d-md-flex justify-content-between">
        <div v-for="i in 4">
        <hr>
        <div class="info" >
        <p class="title" >Imaginery File Name</p>
        <a id="download" href="/_nuxt/img/ce11692-640.png" download class="text-decoration-none" style="cursor:pointer;color:#5A6634" ><span style="display: inline-grid;" ><img src="/assets/img/download.svg"></span> DOWNLOAD</a>
        </div>
        </div>

        </div>
        </div>
  </div>

  </div>
</template>

<script>
export default {
  watch: {},
  head: {
    link: [{ rel: 'stylesheet', href: '/assets/css/page/contact.css' }],
  },
}
</script>

<style lang="scss" scoped></style>
