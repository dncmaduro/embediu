<template>
  <div class="say">
    <v-row>
      <v-form @submit.prevent="send">
        <v-textarea
          label="Em muốn nói về chuyện gì nào"
          v-model="form.subject"
          color="pink"
        ></v-textarea>
        <v-textarea
          label="Cụ thể hơn cho anh nghe đi"
          color="pink"
          v-model="form.message"
        ></v-textarea>
        <v-btn type="submit">Gửi</v-btn>
      </v-form>
    </v-row>
  </div>
</template>

<script setup lang="ts">
const form = ref({
  subject: "",
  message: "",
});

const send = async () => {
  await sendMessage(form.value.subject, form.value.message);
};
</script>

<style scoped lang="scss">
.say {
  width: 100vw;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .v-form {
    width: 60vw;
  }

  button {
    background: pink;
  }
}
</style>
