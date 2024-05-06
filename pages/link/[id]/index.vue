<template>
  <div class="_link">
    <h3>{{ data.link.description }}</h3>
    <nuxt-link :to="data.link.src">
      <v-btn>Em ấn vào đây để xem nè</v-btn>
    </nuxt-link>
    <span
      >Nếu em thấy thích thì ấn vào cái này nè
      <v-icon size="32" :color="data.link.like ? 'red' : 'black'" @click="like"
        >mdi-heart</v-icon
      >
    </span>
    <v-row>
      <v-form @submit.prevent="send">
        <v-textarea
          label="Em muốn nhắn gì tới anh nào"
          v-model="form.message"
        ></v-textarea>
        <v-btn type="submit">Gửi</v-btn>
      </v-form>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import type { ILink } from "~/types/link";
const route = useRoute();
const id = route.params.id;

const form = ref({
  message: "",
});

const send = async () => {
  await sendMessage("", form.value.message);
};

const data = ref({
  link: [] as ILink,
});

onMounted(async () => {
  data.value.link = (await getLink(Number(id))) as ILink;
});

const like = async () => {
  data.value.link = (await likeLink(
    Number(id),
    !data.value.link.like
  )) as ILink;
};
</script>

<style scoped lang="scss">
._link {
  display: flex;
  flex-direction: column;
  align-items: center;

  .v-btn {
    margin-top: 40px;
    text-transform: lowercase;
  }

  span {
    margin-top: 40px;
  }

  i {
    cursor: pointer;
  }

  .v-form {
    margin-top: 40px;
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    .v-input {
      width: 60vw;
    }

    button {
      width: 60px;
    }
  }
}
</style>
