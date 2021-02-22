<script>
export default {
  name: "TweetCard",
  props: ["tweet"],
};
</script>

<template lang="pug">
.tweet {{ tweet.content }} {{ tweet.user.nick }}
</template>