<template>
  <div>
    {{Tags}}
  </div>
</template>
<script>
import Tag from "../../utils/tag.js";

export default {
  async created() {
    await Tag.getTag(this);
  },
  computed : {
	  Tags() {
		  console.log(this.$store.getters["Tags"])
	  }
  }
};
</script>
<style></style>
