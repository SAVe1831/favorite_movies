import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useMovieStore = defineStore("movieStore", () => {
    const movies = ref([]);
    const activeTab = ref(1);

    const moviesInLocalStorage = localStorage.getItem("movies");
    if (moviesInLocalStorage) {
        movies.value = JSON.parse(moviesInLocalStorage)._value;
    }

    const watchedMovies = computed(() =>
        movies.value.filter((movie) => movie.isWatched)
    );
    const totalCountMovies = computed(() => movies.value.length);

    const setActiveTab = (id) => {
        activeTab.value = id;
    };
    const toggleWatched = (id) => {
        const idx = movies.value.findIndex((movie) => movie.id === id);
        movies.value[idx].isWatched = !movies.value[idx].isWatched;
    };
    const removeMovie = (id) => {
        movies.value = movies.value.filter((movie) => movie.id !== id);
    };

    watch(
        () => movies,
        (state) => {
            localStorage.setItem("movies", JSON.stringify(state));
        },
        { deep: true }
    );

    return {
        movies,
        activeTab,
        watchedMovies,
        totalCountMovies,
        toggleWatched,
        removeMovie,
        setActiveTab
    };
});