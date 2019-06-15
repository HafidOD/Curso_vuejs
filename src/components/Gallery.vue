<template>
  <div class="cards">
    <Card
      v-for="(item, key) in items"
      :key="key"
      :userinfo="item.user"
      :image="item.images.low_resolution.url"
      :description="(item.caption) ? item.caption.text : ''"
      :likes="item.likes.count"
    />
  </div>
</template>

<script>
import Card from './Card.vue';
const TOKEN = '8519325858.e0be7dc.83fcc4fc7c404659af8bf0b9eff2ebbf';

export default {
  name: "Gallery",
  data() {
    return {
      items: []
    }
  },
  components: {
    Card
  },
  methods: {
    getData() {
      fetch(
        `https://api.instagram.com/v1/users/self/media/recent/?access_token=${TOKEN}`
      )
        .then(response => response.json())
        .then(data => {
          this.items = data.data;
          console.log(this.items);
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.loading = false));
      console.log("Succes:", this.items);
    }
  },
  created() {
    this.getData();
  }
};
</script>
