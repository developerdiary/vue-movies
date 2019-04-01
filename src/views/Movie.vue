<template>
  <div>
    <div class="container-fluid no-padding">        
        <div class="mo-profile">
            <div class="mo-profile-banner" :style="{ backgroundImage: 'url(\'https://image.tmdb.org/t/p/w1280' + movie.backdropURL + '\')' }"></div>            
            <div class="container">
              <img align="left" class="mo-image-profile thumbnail" :src="'https://image.tmdb.org/t/p/w500'+movie.posterURL" alt="Profile image example"/>
              <div class="mo-profile-text">
                  <h1>{{movie.title}}</h1>
                  <p>{{movie.releaseDate | formatDate}}</p>
              </div>
            </div>
        </div>
    </div>
    <section class="plot">
      <div class="container">
        <p>{{movie.plot}}</p>
      </div>
    </section>
  
  </div>

</template>

<script>
export default {
  data(){
    return {
      movie: null
    }
  },

  methods:{
      getMovie: function(){
        this.$http.get('https://backend-ygzsyibiue.now.sh/api/v1/movies/' + this.$route.params.id).then(response => {
          // get body data
          this.movie = response.body;
        });
      }
  },
  mounted: function () {
    this.getMovie();
  }

}
</script>

<style scoped>

.mo-profile-banner {    
    background-size: cover;
    height: 400px;
}

.mo-profile img.mo-image-lg{
    z-index: 0;
    width: 100%;  
    margin-bottom: 10px;
}

.mo-image-profile {
    margin: -200px 10px 0px 0px;
    z-index: 9;
    width: 20%; 
}

  .plot{
    padding-top:50px;
  }
  
 .mo-profile-text{
    padding-top: 10px;
  }

 .no-padding{
   padding-left: 0px;
   padding-right: 0px;
 }

@media (max-width:768px) {

  .mo-profile-banner {    
      background-size: cover;
      height: 200px;
  }
 
  .mo-profile-text>h1{
      font-weight: 700;
      font-size:16px;    
  }

  .mo-profile-text p{
    font-size: 14px;
  }

  .mo-image-profile
  {
      margin: -45px 10px 0px 25px;
      z-index: 9;
      width: 20%; 
  }
  .plot{
    padding-top:20px;
  }
}
</style>