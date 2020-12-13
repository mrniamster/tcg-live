<template>
    <div>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="d-lg-none d-md-block"><a type="button" data-dismiss="modal" aria-label="Close" class="close bg-white" style="width: 24px;height: 24px;float: right;margin: 10px;" data-v-1a95012b=""><img src="/assets/img/close.svg" class="img-fluid" data-v-1a95012b=""></a></div>
      <div class="modal-body">
    
        <div class="d-md-flex flex-nowarp">
          <div class="modal-img">
            <img  :srcset="require('~/assets/img/people/people_modal.png').srcSet" alt="">
          </div>
          <div class="modal-info">
            <p class="name">{{Name}}</p>
            <p class="job-title">{{Job_Title}}</p>
            <p class="contact">+350 00 0000 0000</p>
            <p class="email">{{Email}}</p>
            <p class="bio">
              Ornare pellentesque sollicitudin id sapien sed iaculis. Risus leo, neque, adipiscing sed. Vulputate sagittis, amet, rhoncus phasellus habitasse. Sagittis, sagittis non ut nisl sagittis volutpat donec ut.
            </p>
          </div>
          <div class="d-none d-lg-block">
            <a style="width:12px;height:12px"type="button" class="close bg-white" data-dismiss="modal" aria-label="Close">
          <img class="img-fluid" src="/assets/img/close.svg" >
        </a>
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
          props:['Name','Email','Job_Title']
       
    }
</script>

<style lang="scss" scoped>

</style>