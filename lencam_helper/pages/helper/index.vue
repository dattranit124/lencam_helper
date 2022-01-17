<template>
 <div>
 </div>
</template>
<script>
import Page from "../../utils/page";
import { mapGetters, mapMutations } from "vuex";
export default {
  layout : 'helper',
  data() {
    return {};
  },
  computed: {
    ...mapGetters("page", ["DetailPage"]),
  },

  methods: {
    ...mapMutations("page", ["deleteDetail"]),
    /**
     * Lấy detail của page thông qua slug
     */
    
  },
};
</script>
<style>

</style>
