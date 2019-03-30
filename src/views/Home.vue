<template>
  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row">

          <div class="col-md-3" v-for="(movie, index) in movies" :key="index">
            <div class="card mb-4 movies">
              <router-link :to="{ name: 'movie', params: { id: movie._id }}"><img :src="'https://image.tmdb.org/t/p/w500'+movie.posterURL"></router-link>           
              <div class="card-body">
                <p class="card-text">{{movie.title}}</p>
                <p class="small">{{movie.releaseDate | formatDate}}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">                    
                    <router-link :to="{ name: 'movie', params: { id: movie._id }}"  class="btn btn-sm btn-outline-secondary">View</router-link>
                  </div>                  
                </div>
              </div>
            </div>
          </div>

      </div><!--Row End-->

    </div>
  </div>

</template>

<script>

export default{
  data(){
    return {
      movies: null,
    }
  },
  methods:{
      getMovies: function(){
        this.$http.get('https://backend-ygzsyibiue.now.sh/api/v1/movies/').then(response => {
          // get body data
          this.movies = response.body;
        });
      }
  },
  mounted: function () {
    this.getMovies();
  }
}
</script>

<style scoped>
.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.movies img{
  width: 100%;
}
</style>