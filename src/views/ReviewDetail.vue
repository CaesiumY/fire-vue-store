<template>
  <div>
    <h2>리뷰 상세 for Review ID: {{ $route.params.id }}</h2>

    <main class="detailMain">
      <h3 class="detailTitle">{{ review.title }}</h3>
      <div class="detailBody">{{ review.body }}</div>
      <div class="detailTags">
        <span class="detailTag" v-for="(tag, index) in review.tags" :key="index"
          ># {{ tag }}</span
        >
      </div>
    </main>
  </div>
</template>

<script>
export default {
  props: ["review"]
};
</script>

<style scoped></style>
