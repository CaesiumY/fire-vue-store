<template>
  <div>
    <h2>추천 목록</h2>
    <div class="suggestedChoice" v-for="item in choices" :key="item.id">
      <span v-if="item.selected">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["choices"]
};
</script>

<style scoped></style>
