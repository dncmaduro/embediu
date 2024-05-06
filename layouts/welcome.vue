<template>
  <div class="welcome">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="image in images" :key="image.src">
        <div v-if="image.link" class="image-container">
          <nuxt-link to="/home">
            <img :src="image.src" alt="Image description" />
          </nuxt-link>
        </div>
        <div v-else class="image-container">
          <img :src="image.src" alt="Image description" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
const images = ref([
  {
    src: "/welcomes/ebd1.jpg",
    link: false,
  },
  {
    src: "/welcomes/ebd2.jpg",
    link: false,
  },
  {
    src: "/welcomes/ebd3.jpg",
    link: false,
  },
  {
    src: "/welcomes/ebd4.jpg",
    link: false,
  },
  {
    src: "/welcomes/ebd6.jpg",
    link: true,
  },
]);
</script>

<style scoped lang="scss">
.welcome {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
  width: 100%;
  background: #fff;

  img {
    width: 80%;
  }

  a {
    width: 80%;

    img {
      width: 100%;
    }
  }
}
</style>
