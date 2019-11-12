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
        class="reviews route"
        v-for="review in reviews"
        :key="review.id"
      >
        <h3 class="reviewTitle">{{ review.title }}</h3>
        <p class="reviewBody">{{ review.body }}</p>
        <div class="reviewTags">
          <span class="reviewTag" v-for="(tag, index) in review.tags" :key="index"># {{ tag }}</span>
        </div>
        <button @click.prevent="deleteReview(review._id)" class="deleteBtn">❌</button>
      </router-link>
      <p v-if="notLoaded" class="loading">로딩중...</p>
    </main>
  </div>
</template>

<script>
import { db } from "../firebase/store";
export default {
  props: ["reviews"],
  data() {
    return {
      notLoaded: true
    };
  },
  created() {
    db.collection("reviews")
      .orderBy("timestamp", "desc")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let review = doc.data();
          review._id = doc.id;
          this.reviews.push(review);
          this.notLoaded = false;
        });
      });
  },
  methods: {
    deleteReview(id) {
      db.collection("reviews")
        .doc(id)
        .delete()
        .then(() => {
          this.$emit("deleteItem", { id });
          alert("삭제되었습니다.");
        });
    }
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
  position: relative;
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

.deleteBtn {
  position: absolute;
  top: 5px;
  right: 10px;
}
</style>
