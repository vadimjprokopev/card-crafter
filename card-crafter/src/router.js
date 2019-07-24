import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Deck from './views/Deck.vue'
import Card from './views/Card.vue'
import Flavour from './views/Flavour.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: Main
		},
		{
			path : '/deck/:deckIndex',
			component : Deck
		},
		{
			path : '/deck/:deckIndex/card/:cardIndex',
			component : Card
		},
		{
			path : '/flavour/:flavourIndex',
			component : Flavour
		}
	]
})