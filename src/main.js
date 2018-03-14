import './style.scss';
import Vue from 'vue';
import genres from './util/genres';

const app = new Vue({
    el: '#app',
    data: {
        title: 'Vue.js Cinema',
    },
    components: {
        'movie-list': {
            data: () => {
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
            data: () => {
                return {
                    genres,
                };
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
                    <div v-bind:class="{ 'check-filter' : true, active: checked }" v-on:click="checked = !checked">
                        <span class="checkbox"></span>
                        <span class="check-filter-title">{{ title }}</span>
                    </div>`,
                },
            },
            template: `
            <div id="movie-filter">
                <h2>Filters</h2>
                <div class="filter-group">
                    <check-filter v-for="genre in genres" v-bind:title="genre" v-bind:key="genre"></check-filter>
                </div>
            </div>`,
        },
    },
});
