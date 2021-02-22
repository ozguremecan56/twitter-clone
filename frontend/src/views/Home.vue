<template lang ="pug">
main
  h2 HELLO WOLRLD!
  tweet-card(v-for="tweet in tweets", :tweet="tweet")
</template>

<script>
// @ is an alias to /src
import TweetCard from "@/components/tweet-card.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    TweetCard,
  },
  computed: {
    ...mapState(["tweets"]),
  },

  methods: {
    ...mapActions(["fetchTweets"]),
  },
  created() {
    this.fetchTweets();
  },
};
</script>
