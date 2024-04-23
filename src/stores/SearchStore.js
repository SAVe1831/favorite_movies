import { ref } from "vue";
import axios from "axios";
import { defineStore } from "pinia";
import { useMovieStore } from "./MovieStore";

export const useSearchStore = defineStore("searchStore", () => {
    const loader = ref(false);
    const movies = ref([]);
  
    const getMovies = async (search) => {
      loader.value = true;
      const data = await axios.get(`https://0dbcb5d14be580a7.mokky.dev/movies?title=*${search}*`);
      movies.value = data.data;
      loader.value = false
    };
  
    const addToUserMovies = (object) => {
      const movieStore = useMovieStore();
      const index = movieStore.movies.findIndex(movie => movie.id === object.id);
      if (index === -1) {
        movieStore.movies.push({ ...object, isWatched: false});
      }
      
    };
  
    return {
      loader,
      movies,
      getMovies,
      addToUserMovies
    };
  });