<template>
  <div>
    <bannerComp
      img="media_test.png"
      title="Media"
      dim="true"
      subtitle="Bhutan, our second home, surprised the world in the 1970s by introducing the Gross National Happiness index to combat the popularly accepted method of measuring the nations’ success through economy.
"
    />
  <div class="layoutx">
    <div class="d-none press">
    <p class="p18h">PRESS SAID</p>
    <hr>
     <div class="row" >
       <div id="article" class="d-md-flex flex-nowarp  justify-content-around box" v-for="i in 3">
       <div class="profile" v-for="i in 4">
         <div class="frame">
         <!-- <img :srcset="require('~/assets/img/media/article.png').srcSet"> -->
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
          <div class="d-flex flex-warp  justify-content-around" >
            <div id="article" class="row info"  >
          <div v-for="blog in articles" class="col-md-6 blog-box profile">
               <nuxt-link :to="'/blog/'+blog.slug"><img :srcset="require('~/assets/img/'+blog.thumbnail).srcSet"></nuxt-link>
               <p class="title">{{blog.description}}</p>
               <p class="author">{{blog.author}}</p>
            </div>

            </div>
          </div>
     </div>

     <div class="image-bank">
          <p class="p18h">IMAGE BANK</p>
          <hr>
            <div class="imgbank"  >
              <div   class="img-box" v-for="logo in logos[0].body" >    
              <div class="frame">
              <!-- <img :srcset="require('~/assets/img/media/article.png').srcSet"> -->
              <img class="img-fluid" :src="logo.thumbnail" >
              </div>
              <div class="info">
              <p class="title">{{logo.title}}</p>
              <a target="_blank" :href="logo.dl" style="cursor:pointer;color:#5A6634" class="date text-decoration-none"  v-text="item.title"
  @click.prevent="downloadItem(logo.title)" ><span style="display: inline-grid;"><img src="/assets/img/download.svg" ></span> Download</a>
              </div>
              </div>
            </div>

     </div>
  </div>
  </div>
</template>

<script>

export default {
  async asyncData({$content}){
    let articles = await $content('articles').sortBy('createdAt','desc').fetch();
    let logos = await $content('api/media').sortBy('updatedAt').fetch();
   //let articles = await $axios.$get('https://zeropercent.shop/wp-json/wp/v2/posts')
    return {articles,logos}
  },
  watch: {},
  head: {
    link: [{ rel: 'stylesheet', href: '/assets/css/page/media.css' }],
  },
  methods:{
     downloadItem ({ url, label }) {
       console.log('x');
    Axios.get(url, { responseType: 'blob' })
      .then(response => {
        const blob = new Blob([response.data], { type: 'application/pdf' })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = label
        link.click()
        URL.revokeObjectURL(link.href)
      }).catch(console.error)
  }
  },
  mounted(){console.log(this.articles)}
}
</script>

<style lang="scss" scoped></style>
