<template>
  <div :class="classes" @mousedown="onSliderMouseDown" @click="onSliderClick">
    <div class="slider__bar" ref="bar">
      <div class="slider__handle focusable" :style="handleStyle" ref="handle" @focus="onFocus">
        <div class="slider__handle-inner"></div>
      </div>
      <div class="slider__fill" :style="fillStyle"></div>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  defineProps,
  defineEmits,
  onMounted,
  computed,
  onUnmounted,
} from 'vue';
import { useEventListener } from '@vueuse/core';

import throttle from 'lodash/throttle';

import { getRelativePosition } from '@/utils/helpers';

const lerp = require('lerp');

const emit = defineEmits([
  'dragstart',
  'click',
  'dragend',
  'input'
]);


function onFocus() {
  window.SpatialNavigation.pause();
  useEventListener(handle, 'keydown', (e) => {
    switch(e.keyCode) {
      case 39:
        console.log(bar.value, bar.value + 20)
        calculate(bar.value + 20);
        console.log('right!');
        break;
      case 37:
        console.log('left!');
        break;
    }
  });

}


const props = defineProps({
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 1
  },
  value: Number,
  disabled: Boolean,
});

const handleWidth = ref(0);
const barWidth = ref(0);
const bar = ref(null);
const handle = ref(null);
const dragTimeout = ref(null);
const isDragging = ref(false);

const delta = computed(() => props.value / props.max);
const fillStyle = computed(() => ({
  transformOrigin: 'left center',
  transform: `scaleX(${delta.value})`,
}));
const handleStyle = computed(() => ({
  transform: `translateX(${barWidth.value * delta.value - (handleWidth.value * 0.5) }px)`,

}));
const classes = computed(() => ({
  slider: true,
  'slider--disabled': props.disabled,
  'slider--dragging': isDragging,
}));


onMounted(() => {
  onResize = throttle(onResize, 200)
  calclDemensions();
  window.addEventListener('resize', onResize);
  document.addEventListener('mouseup', onDucumentMouseUp);
  document.addEventListener('mousemove', onDucumentMouseMove);
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
  document.removeEventListener('mouseup', onDucumentMouseUp);
  document.removeEventListener('mousemove', onDucumentMouseMove);
});

function calclDemensions() {
  handleWidth.value = handle?.value?.offsetWidth ?? 0;
  barWidth.value = bar?.value?.offsetWidth ?? 0;
}

function onSliderClick(e) {
  if (props.disabled) return;
  calculate(e);
}

function onDucumentMouseMove(e) {
  if (props.disabled || !isDragging.value) return;
  calculate(e);
}

function onDucumentMouseUp() {
  if (props.disabled) return;
  console.log(dragTimeout.value);
  if (dragTimeout.value) {
    clearTimeout(dragTimeout.value);
    emit('click');
    console.log('Clicked')
  } else {
    isDragging.value = false;
    emit('dragend')
    console.log('End dragging')
  }
}

function calculate(e) {
  const relativeX = getRelativePosition(e, bar.value);
  const delta = relativeX / barWidth.value;
  console.log(lerp(props.min, props.max, delta));
  emit('input', lerp(props.min, props.max, delta));
}

function onSliderMouseDown() {
  if (props.disabled) return;
  dragTimeout.value = setTimeout(() => {
    isDragging.value = true;
    dragTimeout.value = null;

    emit('dragstart');
    console.log('start drag')
  }, 200);

}

let onResize = () => {
  calclDemensions();
}



</script>

<style lang="scss">
.slider {

  $this: &;

  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  position: relative;

  &__dragging {
    transition: none;
    #{$this}__handle,
    #{$this}__fill {
      transition: none;
    }
  }

  &__fill, &__handle {
    transition: transform .2s;
  }
  &__bar {
    width: 100%;
    height: 4px;
    background-color: #191919;
  }

  &__handle {
    position: relative;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    left: 0;
    top: calc(50% - 8px);
    z-index: 2;

    .slider__handle-inner {
        width: 17px;
        height: 17px;
        border-radius: 50%;
        background-color: transparent;
        border: 1.5px solid transparent;
    }


    &:focus {
      outline: none;
      .slider__handle-inner {
        border-color: white;
        transform: scale(1.8);
      }
    }
  
  }

  &__fill {
    height: 100%;
    width: 100%;
    background-color: #fafafa;
    opacity: 0.8;
  }
}
</style>