<template>
  <div>
    my...
  </div>
</template>
<script>
  import { tabChanger } from '../vuex/actions';
  export default {
    vuex: {
      actions: {
        change: tabChanger
      }
    },
    ready() {
      this.change(3);
    }
  }
</script>
