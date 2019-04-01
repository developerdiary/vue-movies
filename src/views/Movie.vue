<template>
  <div>

    <div class="container-fluid no-padding">
        <div class="mo-profile">
            <img align="left" class="mo-image-lg" :src="'https://image.tmdb.org/t/p/w1280'+movie.backdropURL"/>
            <img align="left" class="mo-image-profile thumbnail" :src="'https://image.tmdb.org/t/p/w500'+movie.posterURL" alt="Profile image example"/>
            <div class="mo-profile-text">
                <h1>{{movie.title}}</h1>
                <p>{{movie.releaseDate | formatDate}}</p>
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
.mo-profile img.mo-image-lg{
    z-index: 0;
    width: 100%;  
    margin-bottom: 10px;
}

.mo-image-profile {
    margin: -200px 10px 0px 120px;
    z-index: 9;
    width: 15%; 
}

.plot{
  padding-top:50px;
}
 .no-padding{
   padding-left: 0px;
   padding-right: 0px;
 }

@media (max-width:768px) {
    
  .mo-profile-text>h1{
      font-weight: 700;
      font-size:16px;
  }

  .mo-image-profile
  {
      margin: -45px 10px 0px 25px;
      z-index: 9;
      width: 20%; 
  }
}
</style>