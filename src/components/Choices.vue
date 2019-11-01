<template>
  <div>
    <h2>전체 목록</h2>
    <div class="allChoice" v-for="item in choices" :key="item.id">
      <span>{{ item.name }}</span>
      <span class="deleteBtn" @click="deleteItem(item.name)">❌</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["choices"],
  methods: {
    deleteItem(name) {
      this.$emit("deleteItem", { name });
    }
  }
};
</script>

<style scoped>
.deleteBtn:hover {
  cursor: pointer;
}
</style>
