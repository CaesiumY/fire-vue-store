<template>
  <div class="choiceBody">
    <h2>전체 목록</h2>
    <div class="allChoices">
      <li class="allChoice" v-for="item in choices" :key="item.id">
        <span class="choiceName">{{ item.name }}</span>
        <span class="deleteBtn" @click="deleteItem(item.name)">❌</span>
      </li>
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
.choiceBody {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.allchoices {
  text-align: center;
}

.allChoice {
  display: flex;
}

.allChoice .choiceName {
  flex: auto;
}

.deleteBtn:hover {
  cursor: pointer;
}
</style>
