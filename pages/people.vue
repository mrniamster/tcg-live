<template>
  <div>
    <modalComp/>
    <bannerComp
      img="people.png"
      title="People"
    />
 
    <div class="layoutx">
      <div class="row">
        <div class="col-md-4">
          <p id="filter" class="p18">FILTER BY</p>
          <div class="category">
            <select>
              <option selected="selected" value="Category">Category</option>
              <option value="">Sales EU</option>
<option value="">Sales Middle East</option>
<option value="">Sales India</option>
<option value="">Marketing </option>
<option value="">Management</option>
<option value="">Finance</option>
<option value="">Purchase</option>
<option value="">Press</option>
<option value="">Production</option>
            </select>            
          </div>
            <div class="location">
            <select>
              <option selected="selected" value="Location">Location</option>
                            <option value="">VEEN Waters Finland</option>
<option value="">VEEN Waters India</option>
<option value="">VEEN Waters Bhutan</option>
<option value="">Zero Percent Finland</option>
<option value="">Zero Percent Germany</option>
<option value="">Zero Percent Latvia</option>
<option value="">VEEN Waters UAE</option>
<option value="">Zero Percent UAE </option>
<option value="">Third Culture Group</option>
            </select>            
          </div>
        </div>
         <div class="col-md-8">
           <hr>
           <div id="identity" v-for="i in 4"class="d-flex flex-nowarp  justify-content-around">
             <div v-for="i in 3" class="profile">
               <img :srcset="require('~/assets/img/people/person.png').srcSet" class="img-fluid "  alt="">
               <div class="info">
               <p id="">Example Name</p>
               <p>Imaginery title placeholder</p>
              <div class="d-flex plus">
                <a type="button" class="d-flex text-decoration-none" data-toggle="modal" data-target="#exampleModal"><img src="/assets/img/plus.svg" class="img-fluid" data-v-3b8704c8="" style=""><p data-v-3b8704c8="">MORE INFORMATION</p></a></div>
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
  watch: {},
  head: {
    link: [{ rel: 'stylesheet', href: '/assets/css/page/people.css' }],
  },
}
</script>

<style lang="scss" scoped></style>
