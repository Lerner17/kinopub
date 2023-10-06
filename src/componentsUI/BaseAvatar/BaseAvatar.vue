<template>
    <div class="BaseAvatar">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.BaseAvatar {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 120px;
    height: 120px;
    background-color: $color-primary;
    border-radius: 50%;
    background-image: url('@/assets/images/avatar.jpeg');
    background-position: center center;
    background-size: cover;
    border: 1px solid $color-primary;
}
</style>