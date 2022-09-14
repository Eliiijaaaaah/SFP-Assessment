<template>
	<div>
		<div class="grid">
			<movie v-for="movie in movies" :key="movie.id" :title="movie.title" :image="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" :rating="movie.vote_average" />
		</div>
		<div class="pagination">
			<!-- 1. Add logic to these pagination links so they appear on the page correctly. -->
			<!-- 2. Add click events that update the page variable. -->
			<!-- [First] [3] [4] [5] [Last] -->
			<paginate
			  :page-count="20"
			  :click-handler="onChangePage"
			  :prev-text="'Prev'"
			  :next-text="'Next'"
			  :container-class="'paginate'">
			</paginate>
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
			var vm = this;
      var key = 'e374acbfa925b84e2ade3abfddf48f5f';
      $.ajax({
          type: 'GET',
          url: 'https://api.themoviedb.org/3/discover/movie/?api_key='+key+'&language=en-US&page='+vm._data.page+'&with_genres='+vm._props.genre,
          async: false,
          contentType: 'application/json',
          dataType: 'jsonp',
          success: function(json) {
							vm._data['movies'] = json['results'];
							vm._data['totalPages'] = json['total_pages'];
          },
          error: function(e) {
              console.log(e.message);
          }
    	});

		},

		onChangePage(pageOfItems) {
        // update page of items
				this._data.page = pageOfItems;
    }
	}

}
</script>
