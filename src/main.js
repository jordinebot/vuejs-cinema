import './style.scss';
import Vue from 'vue';

const app = new Vue({
    el: '#app',
    data() {},
    components: {
        'movie-list': {
            data() {
                return {
                    movies: {},
                };
            },
            template: `
            <div id="movie-list">
                <div class="movie" v-for="movie in movies">{{movie.title}}</div>
            </div>`,
        },
        'movie-filter': {
            template: `
            <div id="movie-filter">

            </div>`,
        },
    },
});
