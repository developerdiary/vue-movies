<template>

  <section class="jumbotron text-center">
    <img :src="'https://image.tmdb.org/t/p/w1280'+movie.backdropURL" class="fishes" >
    <img :src="'https://image.tmdb.org/t/p/w500'+movie.posterURL" class="fish">
  </section>

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
.fishes
{
  position:absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
}
.fish
{
  position:absolute;
  top: 25px;
  left: 25px;
  z-index: 2;
}
</style>
