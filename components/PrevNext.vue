<template>
  <div class="d-flex justify-content-between">
    <div v-if="prev" class="prev">
      
      <img  width="100px" style="display:block" :srcset="require('~/assets/img/'+prev.thumbnail).srcSet"  alt="">
    <NuxtLink
      
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="font-bold p18"
    >
      {{ prev.title }}
    </NuxtLink>
    
    </div>
    <div v-if="next" class="next">
        <img width="100px" style="display:block" :srcset="require('~/assets/img/'+next.thumbnail).srcSet"  alt="">
    <NuxtLink
      
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="font-bold p18"
    >
      {{ next.title }}
    </NuxtLink>
  
    </div>
  </div>
</template>

<script>
    export default {
         props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
    }
</script>

<style lang="scss" scoped>

</style>