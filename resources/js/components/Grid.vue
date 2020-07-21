<template>
	<div>
		<div class="grid">
			<movie v-for="movie in movies" :key="movie.id" :title="movie.title" :image="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" :rating="movie.vote_average" />
		</div>
		<div class="pagination">
			<!-- 1. Add logic to these pagination links so they appear on the page correctly. -->
			<!-- 2. Add click events that update the page variable. -->
			<!-- [First] [3] [4] [5] [Last] -->
			<a href="#movies">First</a>
			<a href="#movies">{{ page - 2 }}</a>
			<a href="#movies">{{ page - 1 }}</a>
			<a href="#movies" class="current">{{ page }}</a>
			<a href="#movies">{{ page + 1 }}</a>
			<a href="#movies">{{ page + 2 }}</a>
			<a href="#movies">Last</a>
		</div>
	</div>
</template>

<script>
import Movie from './Movie';
import axios from 'axios';
export default {
	components: { Movie },

	props: ['genre'],

	data() {
		return {
			page: 1,
			movies: [],
			totalPages: 500
		}
	},

	// Call the API on startup.
	mounted() {
		this.callAPI();
	},

	// Anytime the genre or page variable is updated, call the API.
	watch: {
		genre() {
			this.page = 1;
			this.callAPI();
		},
		page() {
			this.callAPI();
		}
	},

	methods: {
		callAPI() {
			// 1. Make an ajax request to TMDb with the correct page and genre.
			// 2. Update the following variables: movies, totalPages.

			// 
			// Your code here. 
			//
		}
	}

}
</script>