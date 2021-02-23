<script>
export default {
  name: "TweetCard",
  props: ["tweet"],
};
</script>

<template lang="pug">
article.tweetcard
  h2 {{ tweet.user.nick }}
  p {{ tweet.content }}
</template>

<style scoped>
.tweetcard {
  color: whitesmoke;
  text-align: left;
  background-color: #243447;
  padding: 20px;
  border: grey solid 0.5px;
  min-width: 200px;
}
</style>