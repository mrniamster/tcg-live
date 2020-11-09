<template>
  <div class="container mt-5">
    <!--Section: Content-->
    <section class="">
      <!-- Section headings another test  -->
      <h3 class="text-center font-weight-bold mb-5">Latest news</h3>

      <!-- Grid row -->
      <div class="row">
        <!-- Grid column -->
        <div v-for="Blog in Blogs.length" class="col-lg-4 col-md-12 mb-lg-0 mb-4">
          <!-- Card -->
          <div  class="card hoverable">
            <!-- Card image -->
            <img
              class="card-img-top"
             
              :srcset="require('~/assets/'+Blogs[Blog-1]['img']).srcSet"
              alt="Card image cap"
            />

            <!-- Card content -->
            <div class="card-body">
              <!-- Title -->
              <a href="#!" class="black-text">{{Blogs[Blog-1]['title']}}</a>
              <!-- Text -->
              <p class="card-title text-muted font-small mt-3 mb-2">
               {{Blogs[Blog-1]['description']}}
              </p>

              <a :href="`blog/${Blogs[Blog-1]['slug']}`" type="button" class="btn btn-flat text-primary p-0 mx-0">
                Read more<i class="fa fa-angle-right ml-2"></i>
              </a>
            </div>
          </div>
          <!-- Card -->
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->

      <div class="text-center mt-5">
        <a href="#!">Browse all blog posts</a>

      </div>
    </section>
    <!--Section: Content-->
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData({$content ,params}) {
    const Blogs = await $content('articles')
      .only(['title','img','description','slug'])
      .fetch()
        let response= axios.get(`http://api.zippopotam.us/in/410209`).then(res => {
          console.log(res.data);
    })



    return { Blogs,response}
  },
}
</script>

<style lang="scss" scoped></style>
