<template>
  <div>
    <bannerComp
      img="media_test.png"
      title="Media"
      dim="true"
      sub="Pictured: Bhutan, our second home, surprised the world in the 1970s by introducing the Gross National Happiness index to combat the popularly accepted method of measuring the nations’ success through economy."
       subtitle=""
    />
  <div class="layoutx">
    <div class="d-none press">
    <p class="p18h">PRESS SAID</p>
    <hr>
     <div class="row" >
       <div id="article" class="d-md-flex flex-nowarp  justify-content-around box" v-for="i in 3">
       <div class="profile" v-for="i in 4">
         <div class="frame">
         <img :srcset="require('~/assets/img/media/article.png').srcSet">
        </div>
        <div class="info">
          <p class="title">Title of Article</p>
          <p class="date" >Date</p>
        </div>
       </div>
       </div>
     </div>
     </div>

    <div  class="categoires">
         <p class="p18h">CATEGORIES</p>
          <hr>
          <div class="row" role="button">
            <div class="col-md-3">
              <a @click="view('blogs')"><div class="card bg-dark text-white">
  <img class="card-img" src="/assets/img/extra/nk.png" alt="Card image">
  <div class="card-img-overlay" style="top:30px">
    <h5 class="card-title text-center">Blog Stories</h5>
  </div>
</div></a>
            </div>
            <div class="col-md-3">
                          <a @click="view('image-bank')">  <div class="card bg-dark text-white">
  <img class="card-img" src="/assets/img/extra/nk.png" alt="Card image">
  <div class="card-img-overlay" style="top:30px">
    <h5 class="card-title text-center">TCG Image Bank</h5>
  </div>
</div></a>

            </div>
            <div class="col-md-3">
                           <a @click="view('trends')"> <div class="card bg-dark text-white">
  <img class="card-img " src="/assets/img/extra/nk.png" alt="Card image">
  <div class="card-img-overlay" style="top:30px">
    <h5 class="card-title text-center">Mindful Lifestyle Trends</h5>
  </div>
</div></a>

            </div>
            <div class="col-md-3">
                            <a @click="view('press')" target="_blank" >
                              <div class="card bg-dark text-white">
  <img class="card-img" src="/assets/img/extra/nk.png" alt="Card image">
  <div class="card-img-overlay" style="top:30px">
    <h5 class="card-title text-center">Press Coverage</h5>
  </div>
</div></a>

            </div>
          </div>
     </div>

 <div v-if="toggle=='press'"  class="press">
    <p class="p18h">PRESS SAID</p>
    <hr>
     <div class="row" >
       <div id="article" class="imgbank" v-for="i in 1">
       <div class="profile" v-for="press in presssaid">
         <div class="frame">
         <a target="_blank" :href="press.link"><img :src="press.img"></a>
        </div>
        <div class="info">
          <p class="title">{{press.title}}</p>
          <p class="date p18" ><a class="btn-primary" target="_blank" :href="press.link">Read more</a></p>
        </div>
       </div>
       </div>
     </div>
  </div>


        <div v-if="toggle=='trends'"  class="categoires trends">
         <p class="p18h">TRENDS</p>
          <hr>
          <div class="row embed-responsive embed-responsive-16by9">
          <iframe height="500px" class="embed-responsive-item" src="/assets/download/zp_trends.pdf"></iframe>
          </div>
     </div>

     <div v-if="toggle=='blogs'" class="blog">
         <p class="p18h">BLOG</p>
          <hr>
          <div class="d-flex flex-warp  justify-content-around" >
            <div id="article" class="row info"  >
          <div v-for="blog in articles" class="col-md-6 blog-box profile">
               <a target="_blank" :href="blog.oglink"><img :srcset="require('~/assets/img/'+blog.thumbnail).srcSet"></a>
               <p class="title">{{blog.description}}</p>
               <p class="author">{{blog.author}}</p>
            </div>

            </div>
          </div>
     </div>

     <div v-if="toggle=='image-bank'" class="image-bank">
          <p class="p18h">IMAGE BANK</p>
          <hr>
            <div class="imgbank"  >
              <div   class="img-box" v-for="logo in logos[0].body" >    
              <div class="frame">
              <!-- <img :srcset="require('~/assets/img/media/article.png').srcSet"> -->
              <img class="img-fluid" :src="logo.thumbnail" >
              </div>
              <div class="info">
              <p class="title">{{logo.title}}</p>
              <a 
  @click.prevent="downloadImg(logo.dl)"   :href="logo.dl" style="cursor:pointer;color:#5A6634" class="date text-decoration-none" download><span style="display: inline-grid;" download><img src="/assets/img/download.svg"></span> Download</a>
              </div>
              </div>
            </div>

     </div>
  </div>
  </div>
</template>

<script>

export default {
  async asyncData({$content}){
    let articles = await $content('articles').sortBy('createdAt','desc').fetch();
    let logos = await $content('api/media').sortBy('updatedAt').fetch();
   //let articles = await $axios.$get('https://zeropercent.shop/wp-json/wp/v2/posts')
    return {articles,logos}
  },
  data(){
    return{
        toggle:'blogs',
        presssaid:[
          {title:'5 Minutes With Aman Gupta',img:'/assets/img/media/aman.png',link:'https://veenwaters.com/scenearticle/5-minutes-with-aman-gupta/'}
        ]
    }
  },
  watch: {},
  head: {
    link: [{ rel: 'stylesheet', href: '/assets/css/page/media.css' }],
  },
  methods:{
    view:function(value){
      this.toggle=value;
    },
           downloadImg(link) {
      let url = link;
      fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
          saveAs(blob, 'image_name.jpg');
        });
      console.log('downloading', url);
    },
  },
  mounted(){console.log(this.articles)}
}
</script>

<style lang="scss" scoped></style>
