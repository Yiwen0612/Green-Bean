<template>
  <div id="app">
    <PublicLayout>
      <router-view />
    </PublicLayout>
  </div>
</template>

<script>
import PublicLayout from '@/layouts/public';

export default {
  name: 'App',
  components: {
    PublicLayout
  }
}
</script>