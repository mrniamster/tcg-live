<template>
  <div class="layoutx">
        <bannerComp
      :img="article.thumbnail"
      :title="article.title"
      :dim="true"
    />
    <!--Section: Content-->
    <section class="mx-md-5 dark-grey-text">
      <!-- Grid row -->
      <div class="row">
        <!-- Grid column -->
        <div class="col-md-12">
          <!-- Card -->
          <div class="card-cascade wider reverse">

            <!-- Card content -->
            <div class="card-body card-body-cascade text-center">
              <!-- Data -->
              <p class="p18" >
                Written by
                <a>{{ article.author}}</a>
              </p>
            </div>
            <!-- Card content -->
          </div>
          <!-- Card -->

          <!-- Excerpt -->
          <div class="mt-5">
            <p class="p24">Table of contents</p>
            <ul>
              <li v-for="link in article.toc" :key="link.id">
                <nuxt-link
                  :class="{
                    'p18': link.depth === 2,
                    ' p18': link.depth === 3,
                  }"
                  :to="'#' + link.id"
                  >{{ link.text }}</nuxt-link
                >
              </li>
            </ul>
           
          </div>
          <nuxt-content :document="article" />
          <hr>
          <div class="read-more">
                <h1 class="p18h text-center" >RELATED STORIES</h1>
              <prev-next :prev="prev" :next="next" />
          </div>
           
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->

      <hr class="mb-5 mt-4" />
    </section>
    <!--Section: Content-->
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
       console.log(prev)
    return { article, prev, next }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work

        { charset: 'utf-8' },
      { hid:'viewport',name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: this.article.description },
       // Twitter Card
       {hid: 'twitter:card',name: 'twitter:card', content: 'summary'},
       {hid: 'twitter:title',name: 'twitter:title', content: this.article.title},
       {hid: 'twitter:description',name: 'twitter:description', content: this.article.description},
       // image must be an absolute path
       {hid:'twitter:image',name: 'twitter:image', content:'/_nuxt/img/1e4ffe8-1440.png'},
       // Facebook OpenGraph
       {hid:'og:title',property: 'og:title', content: this.article.title},
       {hid:'og:title',property: 'og:site_name', content: 'TCG'},
       {hid:'og:type',property: 'og:type', content: 'website'},
       {hid:'og:image',property: 'og:image', content: '/_nuxt/img/1e4ffe8-1440.png' },
       {hid:'og:description',property: 'og:description', content: this.article.description}
      ],
      script:[{
        //src:'/head.js'
      }],
     link: [{ rel: 'stylesheet', href: '/assets/css/page/blog.css' }],
    }
  },
  mounted(){
   
  }
}
</script>
<style  lang="scss" scoped>
</style>
