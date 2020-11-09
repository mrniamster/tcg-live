<template>
  <div>
    <bannerComp
      img="media.png"
      title="Media"
    />
  <div class="layoutx">
    <div class="press">
    <p class="p18h">PRESS SAID</p>
    <hr>
     <div class="row" >
       <div id="article" class="d-md-flex flex-nowarp  justify-content-around box" v-for="i in 3">
       <div class="profile" v-for="i in 4">
         <div class="frame">
         <img :srcset="require('~/assets/img/media/article.png').srcSet">
        </div>
        <div class="info">
          <p class="title">Title of Article</p>
          <p class="date" >Date</p>
        </div>
       </div>
       </div>
     </div>
     </div>

     <div class="blog">
         <p class="p18h">BLOG</p>
          <hr>
          <div class="row" >
            <div id="article" class="d-md-flex flex-nowarp  justify-content-around box" v-for="i in 3" >
          <div v-for="i in 2" class="blog-box profile">
               <img :srcset="require('~/assets/img/media/aman.png').srcSet">
               <p class="title">Several word long title of example article</p>
               <p class="author">Writers Name</p>
            </div>

            </div>
          </div>
     </div>

     <div class="image-bank">
          <p class="p18h">IMAGE BANK</p>
          <hr>
          <div class="row" >
       <div id="article" class="d-md-flex flex-nowarp  justify-content-around box" v-for="i in 3">
       <div class="profile" v-for="i in 4">
         <div class="frame">
         <img :srcset="require('~/assets/img/media/article.png').srcSet">
        </div>
        <div class="info">
          <p class="title">Image Description</p>
          <a href="/_nuxt/img/ce11692-640.png" style="cursor:pointer;color:#5A6634" class="date text-decoration-none" download><span style="display: inline-grid;"><img src="/assets/img/download.svg"></span> Download</a>
        </div>
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
    link: [{ rel: 'stylesheet', href: '/assets/css/page/media.css' }],
  },
}
</script>

<style lang="scss" scoped></style>
