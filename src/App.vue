<template>
  <main>
    <header class="header">
      <img src="https://www.pngall.com/wp-content/uploads/2018/06/Cinema-Transparent.png" alt="logo" class="header-logo" />
      <h2>Топ-50 фильмов Кинопоиска</h2>
    </header>
    <div class="tabs">
      <button :class="['btn', { btn_green: movieStore.activeTab === 1 }]" @click="setTab(1)">
        Избранное
      </button>
      <button :class="['btn', { btn_green: movieStore.activeTab === 2 }]" @click="setTab(2)">
        Поиск
      </button>
    </div>
    <div class="movies" v-if="movieStore.activeTab === 1">
      <h3>Просмотренные фильмы (Всего: {{ movieStore.watchedMovies.length }})</h3>
      <Movie v-for="movie in movieStore.watchedMovies" :key="movie.id" :movie="movie" />
    </div>
    <div class="movies" v-if="movieStore.activeTab === 1">
      <h3>Все фильмы (Всего: {{ movieStore.totalCountMovies }})</h3>
      <Movie v-for="movie in movieStore.movies" :key="movie.id" :movie="movie" />
    </div>
    <div class="search" v-else>
      <Search/>
    </div>
  </main>
</template>


<script setup>
import Search from './components/Search.vue'
import Movie from './components/Movie.vue'
import { useMovieStore } from './stores/MovieStore'

const setTab = (id) => {
  movieStore.setActiveTab(id)
}

const movieStore = useMovieStore()
</script>


<style lang="css">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

h2, h3 {
  background-color: rgb(252, 253, 252);
  border-radius: 10px;
  padding: 10px;
}
.header-logo {
  max-width: 80px;
  margin-right: 10px;
}

.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}

.btn:hover {
  opacity: 0.7;
}

.btn_green {
  background: #37df5c;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
