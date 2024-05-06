<template>
  <div>
    <div>
      <v-app-bar>
        <nuxt-link to="/home" class="ml-4">
          <v-toolbar-title>Embediu</v-toolbar-title>
        </nuxt-link>
        <v-spacer />
        <v-toolbar-items class="hidden-sm-and-down">
          <nuxt-link to="/saysomething" class="appbar-link">
            <v-btn> You wanna say something to me? </v-btn>
          </nuxt-link>
        </v-toolbar-items>
        <v-btn icon class="hidden-md-and-up" @click="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-app-bar>

      <!-- Thêm v-navigation-drawer -->
      <v-navigation-drawer v-model="drawer" app permanent>
        <!-- Nội dung của sidebar -->
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                <nuxt-link to="/saysomething" class="appbar-link">
                  <v-btn> Wanna say something? </v-btn>
                </nuxt-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
  <slot />
</template>

<script setup lang="ts">
import { ref } from "vue";

// Thêm biến drawer
const drawer = ref(false);
</script>

<style scoped lang="scss">
.appbar-link {
  height: 100%;
}

.v-toolbar {
  background: pink;
  color: rgb(255, 85, 113);
}

.v-navigation-drawer {
  background: pink;
  color: rgb(255, 85, 113);
}
</style>
