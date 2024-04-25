<template>
    <form @submit.prevent="searchStore.getMovies(searchMovie)">
        <input type="text" class="search-input" placeholder="Введите название фильма из топ-50 Кинопоиска..." v-model="searchMovie">
    </form>
    <Loader v-if="searchStore.loader"/>
    <div v-else>
        <Movie v-for="movie in searchStore.movies" :key="movie.id" :movie="movie" :is-search="true" />
    </div>
</template>


<script setup>
import Movie from './Movie.vue';
import Loader from './Loader.vue'
import { ref } from 'vue'
import {useSearchStore} from '../stores/SearchStore'

const searchStore = useSearchStore()
const searchMovie = ref('')
</script>


<style lang="css" scoped>
.search-input {
    border: 1px solid rgb(238, 246, 238);
    width: 96%;
    height: 40px;
    padding: 0 5px;
    margin: 0 auto 20px auto;
    border-radius: 10px;
}
.search-input:focus {
    outline: none;
    border: 1px solid rgb(72, 198, 72);
}
@media(min-width: 480px) {
    .search-input {
    width: 98%;
}
}
</style>