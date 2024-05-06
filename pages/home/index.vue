<template>
  <div>
    <h1>Em chỉ cần click vào cái nào mà em muốn xem thôi nhé</h1>
    <v-row class="links">
      <v-col
        v-for="link in data.links"
        :key="link.id"
        cols="12"
        sm="6"
        md="4"
        class="link"
      >
        <nuxt-link :to="'/link/' + link.id">
          <v-card class="mx-auto py-2 px-4">
            <v-card-title>{{ link.description }}</v-card-title>
          </v-card>
        </nuxt-link>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import type { ILink } from "~/types/link";
const data = ref({
  links: [] as ILink[],
});

onMounted(async () => {
  data.value.links = (await getLinks()) as ILink[];
});
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  margin-bottom: 100px;
}

.links {
  margin-left: 10px;
  margin-right: 10px;

  .v-card {
    height: 200px;
    text-align: center;
    align-content: center;

    &-title {
      text-wrap: wrap;
    }
  }
}
</style>
