<template>
  <div>
    <modalComp 
     :Name="empdata.Name"
     :Email="empdata.Email"
     :Job_Title="empdata.Job_Title"
    />
    <bannerComp
      img="people_test.png"
      title="Third Culture People"
    />
 
    <div class="layoutx">
      <div class="row">
        <div class="col-md-4 filter">
          <p id="filter" class="p18">FILTER BY</p>
          <div class="category">
            <select v-model="query.aor">
                  <option value="" disabled selected>Area of Responsibility</option>
              <option v-for="field in category.aor" >{{field}}</option>
               <option value=""  selected>All</option>
            </select>            
          </div>
            <div class="location">
            <select v-model="query.bu">
               <option value="" disabled selected>Business Unit</option>
                            <option  v-for="bu in category.bu" >{{bu}}</option>
                              <option value=""  selected>All</option>

            </select>            
          </div>

          <div class="aor location">
            <select  v-model="query.loc">
               <option value="" disabled selected>Location</option>
              <option v-for="field in category.loc" >{{field}}</option>
               <option value=""  selected>All</option>
            </select>
          </div>
          
        </div>
         <div class="col-md-8 showcase">
           <hr>
           <div id="identity"  class="d-flex flex-warp  justify-content-around">
             <div  class="row">
               <div  v-for="emp in peoplelist" class="col-4 profile">
               <img :srcset="require('~/assets/img/people/'+emp.Profile_img).srcSet" class="img-fluid "  alt="">
               <div class="info">
               <p id="">{{emp.Name}}</p>
               <p>{{emp.Job_Title}}</p>
              <div class="d-flex plus">
                <a @click="empinfo(emp.Name,emp.Job_Title,emp.Email)" type="button" class="d-flex text-decoration-none" data-toggle="modal" data-target="#exampleModal"><img src="/assets/img/plus.svg" class="img-fluid" data-v-3b8704c8="" style=""><p data-v-3b8704c8="">MORE INFORMATION</p></a></div>
               </div>                
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
  async asyncData({ $content }) {
  //const ip = await $axios.$get('http://icanhazip.com')
  const people = await $content('api/people').fetch();
  return { people }
},
// async asyncData({$axios}){
//   const not = await $axios.$get('https://docs.google.com/spreadsheets/d/e/2PACX-1vRyKk9GM8K8JdaQR75xXnlRgtSVWi69BzxD0I5BQ85WaKqXWSO0NNneXpP55EOgjm4DKG723FBUOUdy/pubhtml?gid=0&single=true')
//   return { not}
// },
data(){
  return{
    empdata:{Email:"maie.smolkova@veenwaters.com",Job_Title:"",Name:"Maie Smolkova"},
    query:{aor:"",bu:"",loc:""},
    category:{
    aor:["Logistics","Quality Control","Production","Marketing","Sales","Management","Investor Relations","Admin","Zero Percent Partnerships","Finance","IT","Quality Control","PR"],
    bu:["VEEN Waters Finland","Third Culture Group","Zero Percent Finland","Third Culture Group","Zero Percent Germany","Zero Percent UAE","Zero Percent Latvia","VEEN Waters India","VEEN Waters Bhutan","Zero Percent"],
    loc:["Ylitornio, Finland","Tutzing, Germany","Dubai, UAE","Riga, Latvia","Mumbai, India","New Delhi, India","Chennai, India","Goa, India","Kolkata, India","Dehradun, India","Jaipur, India","Bengaluru, India","Samtse, Bhutan","Hamburg, Germany","Munich, Germany","Rovniemi, Finland","Helsinki, Finland"]
    }
  }
},
  watch: {},
  head: {
    link: [{ rel: 'stylesheet', href: '/assets/css/page/people.css' }],
  },
  methods:{
    empinfo(Name,Email){
      this.empdata.Name=Name;
      this.empdata.Email=Email;
      //this.empdata='{ Name: 5,Email: 8}';
      //console.log(JSON.stringify({Name,Name,Email}));
      console.log(this.empdata)
    }
  },
  computed:{
    peoplelist(){
      // var conditions=["Area of Responsibility","Business Unit","Location"];
      // var str=this.query.aor+this.query.loc+this.query.bu;
      // var flag = conditions.some(el => str.includes(el));
    if(this.query.bu || this.query.aor || this.query.loc)
    {
      return this.people[0].body.filter((r)=>{     
        if(this.query.aor &&  this.query.bu && this.query.loc){ 
          console.log('a');
        return r.Area_of_Responsibility.includes(this.query.aor) && r.Business_Unit.includes(this.query.bu) && r.Location.includes(this.query.loc)
        } else if(this.query.aor && this.query.bu){
           console.log('b');
           return r.Area_of_Responsibility.includes(this.query.aor) && r.Business_Unit.includes(this.query.bu)
        }else if(this.query.bu && this.query.loc){
           console.log('b');
           return r.Location.includes(this.query.loc) && r.Business_Unit.includes(this.query.bu)
        }else if(this.query.loc && this.query.aor){
           console.log('b');
           return r.Location.includes(this.query.loc) && r.Area_of_Responsibility.includes(this.query.aor)
        }else if (this.query.aor){  
             console.log('c');
           return r.Area_of_Responsibility.includes(this.query.aor)
        }else if (this.query.bu){  
         console.log('d');
           return r.Business_Unit.includes(this.query.bu)
        }else if(this.query.loc){
          console.log('e');
           return r.Location.includes(this.query.loc)
        }
        else{
             console.log('f');
          //window.location.reload();
        }
        });
    }else{
        console.log('g');
      return this.people[0].body
    }
    }
  },
  watch:{
    query:{
  deep:true,
  immediate:true,
  handler(){    
      console.log(this.people[0].body.filter((r)=>r.Business_Unit.includes(this.query.bu)))
        console.log(this.query.bu)
    }
  }

 
  },
  mounted(){
   // console.log(this.query.aor)
  }
}
</script>

