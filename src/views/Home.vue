<template>
  <div>
    <Choices :choices="choices" @deleteItem="deleteItem" />
    <Suggestion :choices="choices" />
  </div>
</template>

<script>
import Choices from "../components/Choices";
import Suggestion from "../components/Suggestion";

export default {
  components: {
    Choices,
    Suggestion
  },
  data() {
    return {
      choices: [
        { name: "치쿠린", selected: true },
        { name: "통집", selected: true },
        { name: "충만치킨", selected: true },
        { name: "산쪼메", selected: false },
        { name: "죠찜", selected: false },
        { name: "플랜비", selected: false },
        { name: "후생관", selected: false }
      ]
    };
  },
  methods: {
    deleteItem(payload) {
      this.choices = this.choices.filter(choice => {
        return payload.name != choice.name;
      });
    }
  }
};
</script>

<style scoped></style>
