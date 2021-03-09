<template>
    <div v-show="Show" >
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="d-lg-none d-md-block"><a type="button" data-dismiss="modal" aria-label="Close" class="close bg-white" style="width: 24px;height: 24px;float: right;margin: 10px;" data-v-1a95012b=""><img src="/assets/img/close.svg" class="img-fluid" data-v-1a95012b=""></a></div>
      <div class="modal-body">
    
        <div class="d-md-flex flex-nowarp justify-content-center">
          <div class="modal-info">
              <div class="row embed-responsive embed-responsive-16by9">
          <iframe height="500px" class="embed-responsive-item" :src="src"></iframe>
          </div>
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
          props:['src','Show']
       
    }
</script>

<style lang="scss" scoped>

</style>