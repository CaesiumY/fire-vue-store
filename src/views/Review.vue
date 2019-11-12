<template>
  <div>
    <Comments :reviews="reviews" @deleteItem="deleteItem" />
    <AddReview :reviews="reviews" />
  </div>
</template>

<script>
import Comments from "../components/Comments";
import AddReview from "../components/AddReview";
export default {
  components: {
    Comments,
    AddReview
  },
  data() {
    return {
      reviews: []
    };
  },
  methods: {
    deleteItem(payload) {
      this.reviews = this.reviews.filter(review => {
        return review._id != payload.id;
      });
    }
  }
};
</script>

<style scoped></style>
