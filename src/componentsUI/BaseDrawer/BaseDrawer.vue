<template>
    <div class="BaseDrawer">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.BaseDrawer {
  position: fixed; 
  top: 0; 
  left: 0px; 
  height: 100%; 
  width: 300px; 
  background: black; 
  overflow-x: hidden; 
  overflow-y: scroll; 
  padding: 20px; 
  -webkit-overflow-scrolling: touch; 
}
</style>