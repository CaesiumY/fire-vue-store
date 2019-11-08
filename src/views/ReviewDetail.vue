<template>
  <div>
    <h2>리뷰 상세 for Review ID: {{ $route.params.id }}</h2>

    <main class="detailMain">
      <h3 class="detailTitle">{{ review.title }}</h3>
      <div class="detailBody">{{ review.body }}</div>
      <div class="detailTags">
        <span class="detailTag" v-for="(tag, index) in review.tags" :key="index"># {{ tag }}</span>
      </div>
      <div v-if="review.timestamp" class="detailTimestamp">{{ dateNow }}</div>
      <div v-else class="detailTimestamp">시간 기록 없음</div>
    </main>
  </div>
</template>

<script>
export default {
  props: ["review"],
  data() {
    return {
      dateNow: this.review.timestamp.toDate()
    };
  }
};
</script>

<style scoped>
.detailTag {
  margin: 5px;
  color: #3498db;
}
</style>
