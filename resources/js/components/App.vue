<template>
	<div class="container">
		<header>
			<nav>
				<div>
					<img class="logo" src="/assets/images/logo-01.png" />
					<ul class="desktop-menu">
						<li v-for="(genre, index) in genres" @click="currentGenreId = genre.id" :key="index" v-text="genre.name"></li>
					</ul>
					<div class="hamburger closed" onClick="toggleMenu()">
						<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
						</svg>
					</div>
					<div class="mobile-menu">

						<ul>
							<li v-for="(genre, index) in genres" @click="currentGenreId = genre.id" :key="index" v-text="genre.name"></li>
						</ul>

					</div>
				</div>
			</nav>
		</header>
		<section class="hero">
			<div class="hero-text">
				<h1 v-text="currentGenre.name" class="hero-title"></h1>
				<a href="#movies">View List</a>
			</div>
		</section>
		<section class="app" id="movies">
			<h2>{{ currentGenre.name }} Movies</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			<grid :genre="currentGenreId"></grid>
		</section>
	</div>
</template>

<script>
import Grid from './Grid';
export default {
	components: {
		Grid
	},
	data() {
		return {
			genres: [
				{ name: 'Action', id: 28 },
				{ name: 'Animation', id: 16 },
				{ name: 'Crime', id: 80 },
				{ name: 'Drama', id: 18 },
				{ name: 'Fantasy', id: 14 },
				{ name: 'Horror', id: 27 },
			],
			currentGenreId: 28
		}
	},
	computed: {
		currentGenre() {
			return this.genres.find(genre => genre.id == this.currentGenreId);
		}
	}
}
</script>
