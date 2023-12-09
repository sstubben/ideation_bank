<template>
  <div class="home-view">
    <h1>Ideation Bank</h1>
    <p>Welcome to the Ideation Bank, where you can share your creative ideas and see how they rank based on fun and complexity.</p>

    <create-idea />
  </div>
</template>

<script>
import CreateIdea from '@/components/CreateIdea.vue';

export default {
  components: {
    CreateIdea
  }
};
</script>
