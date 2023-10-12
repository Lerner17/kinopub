<template>
  <v-app>
    <v-navigation-drawer color="black" width="300">
      <div class="d-flex flex-column align-center py-4 mt-4">
        <v-avatar size="100">
          <v-img src="http://placekitten.com/300/300"  alt="User Avatar" />
        </v-avatar>
        <span class="mt-3">Your Username</span>
        <span class="mt-3">Активна (43 дней)</span>
      </div>
      <v-divider></v-divider>
      <v-list>
        <v-list-item class="focusable" color="primary" link>
          <template v-slot:prepend>
            <v-icon icon="mdi-at"></v-icon>
          </template>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>
