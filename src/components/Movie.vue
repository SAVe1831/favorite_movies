<template>
    <div class="movie">
        <img :src="`${movie.poster_path}`" :alt="movie.title" class="movie-img">
        <div class="movie-info">
            <div class="movie-name">
                {{ movie.title }} ({{ movie.release_date }})
            </div>
            <span class="movie-overview">{{ movie.overview }}</span>
            <div class="movie-buttons" v-if="!isSearch">
                <button class="btn movie-buttons-watched" @click="movieStore.toggleWatched(movie.id)">
                <span v-if="!movie.isWatched">Не просмотрено</span>
                <span v-else>Просмотрено</span>
                </button>
                <button class="btn movie-buttons-delete" @click="movieStore.removeMovie(movie.id)">Удалить</button>
            </div>
            <div class="movie-buttons" v-else>
                <button class="btn btn_green" @click="searchStore.addToUserMovies(movie)">Добавить в Избранное</button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useMovieStore } from '../stores/MovieStore'
import { useSearchStore } from '../stores/SearchStore';

const movieStore = useMovieStore()
const searchStore = useSearchStore()
const props = defineProps({
    movie: {
        type: Object,
        required: true,
        isAdded: false,
        default: () => {}
    },
    isSearch: {
      type: Boolean,
      required: false,
      default: false
    },
})
</script>


<style lang="css" scoped>
.movie {
  background-color: rgb(217, 230, 226);
  display: flex;
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;
}

.movie-accept {
  margin-right: 10px;
}

.movie-img {
  width: 200px;
  height: auto;
  object-fit: cover;
  border-radius: 20%;
}

.movie-name {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.movie-overview {
  display: block;
  margin-bottom: 20px;
}

.movie-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.movie-buttons-watched {
  color: #fff;
  background: #1eb4c3;
}

.movie-buttons-watched__icon {
  width: 15px;
  margin-left: 10px;
}

.movie-buttons-delete {
  color: #fff;
  background: #ff2a2a;
}
.movie-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.btn_green {
  width: 200px;
  margin: 0;
}
@media(max-width: 450px) {
  .movie {
    flex-direction: column;
    width: 100%;
  }
  .movie-info {
    margin-top: 20px;
  }
  .movie-img {
    align-self: center;
  }
}
</style>