<template>
  <div>
    <form>
      <h2>새로운 리뷰</h2>
      <div>
        <label for="title">제목</label>
        <input type="text" name="title" v-model="title" />
      </div>
      <div>
        <label for="body">내용</label>
        <input type="text" name="body" v-model="body" />
      </div>
      <div>
        <label for="tag">태그</label>
        <input
          type="text"
          name="tag"
          v-model="anotherTag"
          @keydown.tab.prevent="addTag"
          placeholder="tab으로 추가"
        />
      </div>
      <div>
        <p v-if="feedback" class="feedback">{{ feedback }}</p>
        <p v-else class="feedback">{{ tags }}</p>
        <button>추가하기</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: null,
      body: null,
      tags: [],
      feedback: null,
      anotherTag: null
    };
  },
  methods: {
    addTag() {
      if (this.anotherTag) {
        this.tags.push(this.anotherTag);
        this.anotherTag = null;
        this.feedback = null;
      } else {
        this.feedback = "태그 내용을 입력하세요";
      }
    }
  }
};
</script>

<style scoped>
.feedback {
  color: red;
}
</style>
