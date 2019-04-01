<template>
  <div class="album py-5 bg-light">
    <div class="container">           
      <div class="row">         
          <div class="col-md-3" v-for="(item, index) in 12" :key="index">
              <content-loader
                  :height="460"
                  :width="460"
                  :speed="2"
                  primaryColor="#f3f3f3"
                  secondaryColor="#ecebeb"
                  v-if="!movies"
                  
              >
                  <rect x="128" y="265.45" rx="3" ry="3" width="205.4" height="10.4" /> 
                  <rect x="191" y="287" rx="3" ry="3" width="90" height="10" /> 
                  <rect x="100" y="314" rx="3" ry="3" width="260.4" height="34.4" /> 
                  <rect x="176" y="365" rx="3" ry="3" width="110.1" height="32.5" /> 
                  <circle cx="479.67" cy="135.84" r="1.97" /> 
                  <circle cx="489.54" cy="135.84" r="1.97" /> 
                  <circle cx="225.84" cy="130.07" r="104.24" />
            </content-loader>
          </div>
          <div class="col-md-3" v-for="movie in movies" :key="movie._id">            
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
      </div>
    </div>
  </div>

</template>

<script>
import { ContentLoader } from 'vue-content-loader';

export default{

  components: {
    ContentLoader
  },
  
  data(){
    return {
      movies: null
    }
  },
  methods:{
      getMovies: function(){        
        this.$http.get('https://backend-ygzsyibiue.now.sh/api/v1/movies/').then(response => {                    
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

.center-block {
  text-align: center;
}
</style>