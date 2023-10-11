<template>
    <div>
        <h1>HomePage {{ store.access_token }}  {{ store.refresh_token ?? 'Suka!' }}  {{ store.refresh_token?.foo ?? 'foo!' }}</h1>
        <a href="hsd" class="focusable">sadsad</a>
        <a href="hsd" class="focusable">sadsad</a>
        <a href="hsd" class="focusable">sadsad</a>
        <a href="hsd" class="focusable">sadsad</a>
    </div>
</template>

<script setup lang="ts">
import { useAlertsStore } from '@/stores/Auth.store';

const store = useAlertsStore();
</script>