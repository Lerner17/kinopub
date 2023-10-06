<template>
  <div class="DefaultLayout">
    <base-drawer>
      <div class="Drawer__avatar_block mt-12 mb-12">
        <base-avatar></base-avatar>
        <div class="Drawer__avatar_block__username pt-4">
          lerner17
        </div>
        <div class="Drawer__avatar_block__status pt-1">
          активна
        </div> 
      </div>
      <base-list>
      <router-link to="/asdasjdlkas">sdsad</router-link>
        <base-list-item link to="/" class="BaseListItem--focused" v-focus>
          <base-icon />
          <span class="ml-6">Новинки</span>
        </base-list-item> 
        <router-link to="/about" class="focusable">
          <base-list-item>
            <base-icon />
            <span class="ml-6">Каталг</span>
          </base-list-item>
      </router-link>
        <base-list-item>
          <base-icon />
          <span class="ml-6">Я смотрю</span>
        </base-list-item>
        <base-list-item>
          <base-icon />
          <span class="ml-6">Закладки</span>
        </base-list-item>
        <base-list-item>
          <base-icon />
          <span class="ml-6">Телеканалы</span>
        </base-list-item>
        <base-list-item>
          <base-icon />
          <span class="ml-6">Поиск</span>
        </base-list-item>
        <base-list-item>
          <base-icon />
          <span class="ml-6">Настройки</span>
        </base-list-item>
      </base-list>
    </base-drawer>
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import BaseDrawer from '../componentsUI/BaseDrawer';
import BaseAvatar from '../componentsUI/BaseAvatar';
import BaseList, { BaseListItem } from '../componentsUI/BaseList';
import BaseIcon from '../componentsUI/BaseIcon.vue';

export default defineComponent({
  name: 'DefaultLayout',
  components: { BaseDrawer, BaseAvatar, BaseList, BaseListItem, BaseIcon }
});
</script>

<style lang="scss">
.Drawer__avatar_block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__username {
    color: $color-primary;
    font-weight: bold;
    font-family: sans-serif;
    font-size: 25px;
  }
  &__status {
    color: white;
    text-transform: uppercase;
  }
}
</style>