import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const decks = {
	state: [],
	mutations: {
		setCardNumber(state, {deckIndex, cardIndex, number}) {
			state[deckIndex].cards[cardIndex].number = number
		}
	}
}

const flavours = {
	state: [],
	mutations: {
		editCardText(state, {flavourIndex, cardElementIndex, text}) {
			state[flavourIndex].cardElements[cardElementIndex].text = text;
		},
		editCardX(state, {flavourIndex, cardElementIndex, x}) {
			state[flavourIndex].cardElements[cardElementIndex].x = x;
		},
		editCardY(state, {flavourIndex, cardElementIndex, y}) {
			state[flavourIndex].cardElements[cardElementIndex].y = y;
		}
	}
}

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		decks,
		flavours
	}
})