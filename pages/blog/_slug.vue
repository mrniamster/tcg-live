<template>
  <div class="layoutx">
        <bannerComp
      :img="article.img"
      :title="article.title"
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
            <prev-next :prev="prev" :next="next" />
          </div>
          <nuxt-content :document="article" />
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
    console.log(article,params)
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return { article, prev, next }
  },
  head() {
    return {
      title: 'THE TCG IS LIVE',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'This will be a short description for a tcg blog',
        },
      ],
      script:[{
        //src:'/head.js'
      }],
     link: [{ rel: 'stylesheet', href: '/assets/css/page/blog.css' }],
    }
  },
}
</script>
<style >

</style>
