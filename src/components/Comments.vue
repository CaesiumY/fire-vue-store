<template>
  <div>
    <div class="commentsTitle">
      <h1>리뷰 목록</h1>
    </div>
    <br />
    <main class="reviewMain">
      <div class="reviews" v-for="review in reviews" :key="review.id">
        <h3 class="reviewTitle">{{review.title}}</h3>
        <p class="reviewBody">{{review.body}}</p>
        <span class="reviewTag" v-for="(tag, index) in review.tags" :key="index">#{{tag}}</span>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: [
        {
          _id: 1,
          title: "라멘 마렵다",
          body: "여윽시 치쿠린이야 믿고 있었다구",
          tags: ["라멘", "돈코츠", "원조"]
        },
        {
          _id: 2,
          title: "이것이 그 전설의 누룽지탕?!",
          body: "美味!!",
          tags: ["치킨", "맥주", "누룽지랑상관없음"]
        },
        {
          _id: 3,
          title: "5252 네녀석!",
          body: "뭐랄까... 그때 전 맛에 미쳐있었죠(쑻)",
          tags: ["도내최상위", "우효", "야레야레"]
        }
      ]
    };
  }
};
</script>

<style scoped></style>
