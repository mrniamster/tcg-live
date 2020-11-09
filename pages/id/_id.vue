<template>
  <div>
    <h1>Get you geo info</h1>
    <p>{{ geodata }} and your postal code is : {{this.$route.params.id}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ $content, params }) {
    const Blogs = await $content('articles')
      .only(['title', 'img', 'description', 'slug'])
      .fetch()
    const response = axios
      .get('http://api.zippopotam.us/in/' + params.id)
      .then((res) => {
        console.log(res.data.country)
        //$nuxt.setLayout('dark');

      })

    return { Blogs, response }
  },
  data() {
    return {
      geodata: 'sds',
    }
  },
  created(){
     let resp= axios.get('http://api.zippopotam.us/in/'+this.$route.params.id).then((resp)=>this.geodata=resp.data.country);
     
  }
}
</script>

<style lang="scss" scoped></style>
