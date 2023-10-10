<template>
  <div class="DefaultLayout">
    <base-drawer>
      <div class="Drawer__avatar_block mt-12 mb-12">
        <base-avatar></base-avatar>
        <div class="Drawer__avatar_block__username pt-4">
          {{ user.username }}
        </div>
        <div class="Drawer__avatar_block__status pt-1">
          {{ user?.subscription?.active ?? false ? 'активна' : 'не активна' }} ({{ user?.subscription?.days ?? 0 }} дней)
        </div> 
      </div>
      <base-list>
      <base-list-item to="/" class="BaseListIte focusable" @click="navigate">
        <base-icon />
          <span class="ml-6">Новинки</span>
      </base-list-item> 
      <base-list-item class="BaseListIte focusable" @click="navigate">
          <base-icon />
          <span class="ml-6">Каталог</span>
      </base-list-item> 
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
    <div class="DefaultLayout__content">
      <slot></slot>
   </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DefaultLayout',
});
</script>

<script setup>
import BaseDrawer from '../componentsUI/BaseDrawer';
import BaseAvatar from '../componentsUI/BaseAvatar';
import BaseList, { BaseListItem } from '../componentsUI/BaseList';
import BaseIcon from '../componentsUI/BaseIcon.vue';

import { userApi } from '@/api/user';
import { onMounted, ref } from 'vue';

const user = ref({});



onMounted(async () => {
  console.log(1);
  const result = await userApi().fetchCurrentUser();
  user.value = result.user;
});
  

// console.log(response);
</script>

<style lang="scss">
.DefaultLayout {
  color: white;
  font-family: sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  &__content {
    margin-left: 350px;
    margin-top: 50px;
    margin-right: 20px;
    width: 100%; 
    height: calc(100% - 100px); 
    overflow-x: hidden; 
    overflow-y: scroll; 
    -webkit-overflow-scrolling: touch; 
    padding: 20px; 
  }
}

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