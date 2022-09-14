import Vue from 'vue';
import App from './components/App';

// Utilizing Vue Pagination from: https://github.com/lokyoung/vuejs-paginate
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
