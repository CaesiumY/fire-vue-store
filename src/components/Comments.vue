<template>
  <div>
    <div class="commentsTitle">
      <h1>리뷰 목록</h1>
    </div>
    <main class="reviewMain">
      <router-link
        :to="{
          name: 'reviewDetail',
          params: { id: review._id, review: review }
        }"
        tag="div"
        class="reviews"
        v-for="review in reviews"
        :key="review.id"
      >
        <h3 class="reviewTitle">{{ review.title }}</h3>
        <p class="reviewBody">{{ review.body }}</p>
        <div class="reviewTags">
          <span class="reviewTag" v-for="(tag, index) in review.tags" :key="index"># {{ tag }}</span>
        </div>
      </router-link>
    </main>
  </div>
</template>

<script>
import { db } from "../main.js";
export default {
  data() {
    return {
      title: null,
      body: null,
      tags: [],
      feedback: null,
      anotherTag: null,
      reviews: []
    };
  },
  created() {
    db.collection("reviews")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let review = doc.data();
          review._id = doc.id;
          this.reviews.push(review);
        });
      });

    console.log("reviews:", this.reviews);
  }
};
</script>

<style scoped>
.reviewMain {
  display: flex;
  flex-direction: column;
}
.reviews {
  border: 3px solid #e55039;
  border-radius: 8px;
  box-shadow: 1px 1px 1px #ccc;
  margin: 15px 0;
  cursor: pointer;
}

.reviewBody {
  margin: 10px;
}

.reviewTags {
  margin-bottom: 10px;
}

.reviewTag {
  margin: 5px;
  color: #3498db;
}
</style>
