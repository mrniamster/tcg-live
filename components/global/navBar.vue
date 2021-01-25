<template>
  <nav id="navbar" class="shadow navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <nuxt-link class="navbar-brand" to="/">
        <img
          
          class="d-inline-block align-top img-fluid"          
          src="/assets/img/logo.svg"
          alt=""
        />
      </nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarText" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link class="nav-link active" aria-current="page" to="/about">About us</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/people">People</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/brands">Our Brands</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/clients">Our Clients</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/medias">Our Media</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped></style>
