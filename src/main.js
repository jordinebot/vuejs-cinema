import './style.scss';
import Vue from 'vue';
import genres from './util/genres';

const app = new Vue({
    el: '#app',
    data: {
        title: 'Vue.js Cinema',
        genre: [],
        time: [],
    },
    methods: {
        checkFilterHandler(category, title, checked) {
            if (checked) {
                this[category].push(title);
            } else {
                let index = this[category].indexOf(title);
                this[category].splice(index, 1);
            }
            console.log(this[category]);
        },
    },
    components: {
        'movie-list': {
            props: ['genre', 'time'],
            data() {
                return {
                    movies: [
                        {title : 'Pulp Fiction', genre: genres.CRIME },
                        {title : 'Home Alone', genre: genres.COMEDY },
                        {title : 'Austin Powers', genre: genres.COMEDY },
                    ],
                };
            },
            computed: {
                filteredMovies() {
                    return this.movies.filter(m => this.genre.indexOf(m.genre) !== -1 || !this.genre.length);
                }
            },
            template: `
            <div id="movie-list">
                <div class="movie" v-for="movie in filteredMovies">{{movie.title}}</div>
            </div>`,
        },
        'movie-filter': {
            data() {
                return {
                    genres,
                };
            },
            template: `
            <div id="movie-filter">
                <h2>Filters</h2>
                <div class="filter-group">
                    <check-filter v-for="genre in genres" v-bind:title="genre" v-bind:key="genre" v-on:check-filter="checkFilterHandler"></check-filter>
                </div>
            </div>`,
            methods: {
                checkFilterHandler(category, title, checked) {
                    this.$emit('check-filter', category, title, checked);
                },
            },
            components: {
                'check-filter': {
                    props: ['title'],
                    data: () => {
                        return {
                            checked: false,
                        };
                    },
                    template: `
                    <div v-bind:class="{ 'check-filter' : true, active: checked }" v-on:click="checkFilter">
                        <span class="checkbox"></span>
                        <span class="check-filter-title">{{ title }}</span>
                    </div>`,
                    methods: {
                        checkFilter() {
                            this.checked = !this.checked;
                            this.$emit(
                                'check-filter',
                                'genre',
                                this.title,
                                this.checked,
                            );
                        },
                    },
                },
            },
        },
    },
});
