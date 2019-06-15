<template>
  <div class="card">
    <div class="card__user">
      <img class="card__user-picture" :src="userinfo.profile_picture" :alt="userinfo.full_name">
      <p class="card__user-name">{{ userinfo.username }}</p>
    </div>
    <div class="card__body">
      <div class="card__image-with-likes" :data-count-likes="likes">
        <img :src="image" class="card__header" alt="">
      </div>
      <article class="card__description">
        <p class="card__description-text">
            {{ 
              description | readMore(30, '...')
            }}
        </p>
      </article>
    </div>
  </div>
</template>

<script>

export default {
  name: "Card",
  props: {
    userinfo: Object,
    image: String,
    description: {
      type: String,
      default: "asdfgh"
    },
    likes: Number
  },
  data() {
    return {};
  }
};
</script>
