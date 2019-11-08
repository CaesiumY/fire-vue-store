<template>
  <div>
    <Comments :reviews="reviews" />
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
  }
};
</script>

<style scoped></style>
