<template>
  <div>
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <app-menu></app-menu>
      <main>

      </main>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu';

export default {
  components: {
    'app-menu': Menu
  }
}
</script>
