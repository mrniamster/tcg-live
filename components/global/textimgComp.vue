<template>
<div class="container-fluid textimgComp">
     <div class="flex-container">
    <div class="flex-item">
      <p class="p18">OUR STORY</p>
      <p>
        Third Culture Group (formerly VEEN Waters Finland Oy) got its avatar in
        July 2020 and has been developed with the idea of creating an alliance
        of small and mid sized like-minded food and beverage brands and
        distributors to promote the mindful lifestyle.
      </p>
      <a class="btn-primary">Read more about us</a>
    </div>
    <div class="flex-item" id="spacer">

    </div>
    <div class="flex-item">
      <img :srcset="require('~/assets/img/textimg.png').srcSet" class="img-fluid" />
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>