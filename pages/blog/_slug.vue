<template>
  <div class="container mt-5">
    <!--Section: Content-->
    <section class="mx-md-5 dark-grey-text">
      <!-- Grid row -->
      <div class="row">
        <!-- Grid column -->
        <div class="col-md-12">
          <!-- Card -->
          <div class="card card-cascade wider reverse">
            <!-- Card image -->
            <div class="view view-cascade overlay">
              <img
                class="card-img-top"
                :srcset="require('~/assets/'+article.img).srcSet"
                alt="Sample image"
              />
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <!-- Card content -->
            <div class="card-body card-body-cascade text-center">
              <!-- Title -->
              <h3 class="font-weight-bold">
                <a>{{ article.title }}</a>
              </h3>
              <!-- Data -->
              <p>
                Written by
                <a
                  ><strong>{{ article.author }}</strong></a
                >, {{ article.updatedAt }}
              </p>
              <!-- Social shares -->
              <div class="social-counters">
                <!-- Facebook -->
                <a class="btn btn-fb">
                  <i class="fab fa-facebook-f pr-2"></i>
                  <span class="clearfix d-none d-md-inline-block"
                    >Facebook</span
                  >
                </a>
                <span class="counter">46</span>
                <!-- Twitter -->
                <a class="btn btn-tw">
                  <i class="fab fa-twitter pr-2"></i>
                  <span class="clearfix d-none d-md-inline-block">Twitter</span>
                </a>
                <span class="counter">22</span>
                <!-- Google+ -->
                <a class="btn btn-gplus">
                  <i class="fab fa-google-plus-g pr-2"></i>
                  <span class="clearfix d-none d-md-inline-block">Google+</span>
                </a>
                <span class="counter">31</span>
                <!-- Comments -->
                <a class="btn btn-default">
                  <i class="far fa-comments pr-2"></i>
                  <span class="clearfix d-none d-md-inline-block"
                    >Comments</span
                  >
                </a>
                <span class="counter">18</span>
              </div>
              <!-- Social shares -->
            </div>
            <!-- Card content -->
          </div>
          <!-- Card -->

          <!-- Excerpt -->
          <div class="mt-5">
            <p>Table of contents</p>

            <ul>
              <li v-for="link in article.toc" :key="link.id">
                <nuxt-link
                  :class="{
                    'bg-danger text-white': link.depth === 2,
                    'bg-success text-white': link.depth === 3,
                  }"
                  :to="'#' + link.id"
                  >{{ link.text }}</nuxt-link
                >
              </li>
            </ul>
            <nuxt-content :document="article" />
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
    console.log(params)
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return { article, prev, next }
  },
  head() {
    return {
      title: 'My First Blog',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
      script:[{
        src:'/head.js'
      }],
      link:[
        {
          rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
          }
      ]
    }
  },
}
</script>

<style>
.nuxt-content h1 {
  color: red;
}
.nuxt-content p {
  color: black;
}
</style>
