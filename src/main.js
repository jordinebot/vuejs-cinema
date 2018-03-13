import './style.scss';
import Vue from 'vue';
import genres from './util/genres';

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
            data() {
                return {};
            },
            template: `
            <div id="movie-filter">
                <check-filter></check-filter>
            </div>`,
        },
    },
});
