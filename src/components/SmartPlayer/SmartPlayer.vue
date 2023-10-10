<template>
  <div class="player">
    <base-loader v-if="isLoading" class="player__loader"></base-loader>
    <div class="player__ui_wrapper"></div>
    <div class="player__sizer">
      <video
        ref="video"
        @play="onVideoPlay"
        @pause="onVideoPause"
        @loadeddata="onLoadMetaData"
        @timeupdate="onVideoTimeUpdate"
      >
        <source
          type="video/mp4"
          src="https://alibaba-cdn.net/pd/aWQ9MjMzNjUzMzsyNDE1MTQ0NjgyOzI3NTkwOTk4Ozg4OTA2OzE2OTY3ODExNjcmaD0xSXVTU1lneWctZmlkWFlXQzA4cl9BJmU9MTY5Njg2NzU2Nw/c/54/sIepUkYgHTQ1SBA79.mp4?loc=nl"
        />
      </video> 
    </div>
    <div class="player__gradient"></div>
    <div class="player__controls">
      <div class="player__buttons">
        <div class="player__buttons__left"></div>
        <div class="player__buttons__center">
          <player-button :is-playing="isPlaying" @click="togglePlay"></player-button>
        </div>
        <div class="player__buttons__right"></div>
      </div>
      <div class="player__timeline">
        <span class="player__timeline__time">{{ currentTimeFormated }}</span>
        <base-slider ref="slider" @focus="console.log('focues')" :value="currentTime" @input="seek" :max="duration"></base-slider>
        <span class="player__timeline__time">{{ durationFormated }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';




import BaseSlider from '@/components/SmartPlayer/BaseSlider.vue';
import PlayerButton from '@/components/SmartPlayer/Buttons/PlayerButton.vue';
import BaseLoader from '@/componentsUI/BaseLoader.vue';

const TimeFormat = require('hh-mm-ss');

const video = ref(null);
const isPlaying = ref(false);
const isLoading = ref(true);

const duration = ref(0);
const currentTime = ref(0);

const currentTimeFormated = computed(() => TimeFormat.fromS(Math.round(currentTime.value), 'hh:mm:ss'));
const durationFormated = computed(() => TimeFormat.fromS(Math.round(duration.value), 'hh:mm:ss'));

function seek(time) {
  currentTime.value = time;
  video.value.currentTime = time;
}

function onVideoTimeUpdate() {
  currentTime.value = video.value.currentTime;
}

function onLoadMetaData() {
  console.log(video.value);
  duration.value = video.value.duration;
  currentTime.value = video.value.currentTime;
  console.log(duration.value, currentTime.value);
}

function onVideoPlay() {
  isPlaying.value = true;
}

function onVideoPause() {
  isPlaying.value = false;
}

function togglePlay() {
  if (video.value.paused) {
    video.value.play();
    isPlaying.value = true;
  } else {
    video.value.pause();
    isPlaying.value = false;
  }
}
</script>

<style lang="scss">

.player {
  height: 100%;
  position: relative;
  background-color: black;
  display: flex;
  align-items: center;
  
  &__loader {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 3;
  }

  &__buttons {
    padding: 2.0833333333vw 2.6041666667vw;
    height: 3.125vw;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5vw;
    transition: all .3s;
    border-top: 0.5px solid rgba(255,255,255,0);
    pointer-events: none;
    z-index: 20;
    &__center {

    }
  }

  &__ui_wrapper {
    // transition: opacity .3s;
    width: 100%;
    height: 100%;
    opacity: 1;
  
    background: linear-gradient(rgba(0,0,0,0) 0%,rgba(0,0,0,.85) 78%);
    position: absolute;
    // top: 0;
    // left: 0;
    // z-index: -1;
  }

  &__sizer {
    width: 100%;
    video {
      width: 100%;
    }
  }
  &__controls {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  &__timeline {
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 20px 50px;
    &__time {
      color: #fafafa;
      font-size: 18px;
      font-weight: 600;
      min-height: 24px;
      min-width: 70px;
      text-align: left;
      display: flex;
      justify-content: center;
      padding: 0 20px;
      align-items: center;
      &--duration {
        text-align: right;
      }
    }
  }
}
</style>
