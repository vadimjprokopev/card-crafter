<template>
  <div id="app">
    <div v-if="$route.matched.some(record => record.requiresAuth)">
      <md-tabs md-sync-route md-alignment="centered" md-dynamic-height>
        <md-tab md-label="Home" to="/" exact>
          <the-home />
        </md-tab>
        <md-tab md-label="Decks" to="/decks">
          <the-decks />
        </md-tab>
        <md-tab md-label="Cards" to="/cards">
          <the-cards />
        </md-tab>
        <md-tab md-label="Flavours" to="/flavours">
          <the-flavours />
        </md-tab>
      </md-tabs>
    </div>
    <transition name="fade">
      <router-view class="router-content" />
    </transition>
  </div>
</template>

<script>
import TheHome from "@/components/TheHome.vue";
import TheDecks from "@/components/TheDecks.vue";
import TheCards from "@/components/TheCards.vue";
import TheFlavours from "@/components/TheFlavours.vue";

export default {
  components: {
    TheHome,
    TheDecks,
    TheCards,
    TheFlavours
  }
};
</script>

<style>
@import "//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons";

#app {
  text-align: center;
}

.router-content {
  width: 960px;
  margin: auto;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.35s ease-in-out;
}

.fade-leave-active {
  transition: opacity 0.35s ease-in-out;
  opacity: 0;
}
</style>
