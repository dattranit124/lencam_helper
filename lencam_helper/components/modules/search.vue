<template>
  <div
    class="search-box container-fluid d-flex d-flex justify-content-center align-items-center"
  >
    <div class="input-area my-2">
      <input
        type="text"
        aria-label="Large"
        id="input-search"
        class="my-5 ps-3 py-3"
        :placeholder="$T.Tran('search_document')"
        v-model="searchText"
        v-on:keyup.enter="clickToSearch"
      />
      <i
        class="fas fa-search icon-search fs-3"
        @click="clickToSearch"
        role="button"
      ></i>
    </div>
  </div>
</template>
<script>
import Page from "../../utils/page";
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations("page", ["setTextSearch"]),
    async clickToSearch() {
      let objQuery = {
        keyword: this.searchText,
        page_size: 12,
        curr_page: 1,
      };
      let queryString = require("querystring").stringify(objQuery);
      await Page.getPage(this, queryString);
      this.setTextSearch(this.searchText);
      this.$router.push({
        path: "/search",
        query: { keyword: this.searchText },
      });
    },
  },
  data() {
    return {
      searchText: "",
    };
  },
};
</script>
<style scoped>
.search-box {
  background-color: #e8e9eb !important;
}
.input-area {
  width: 75%;
  position: relative;
}
#input-search {
  outline: none;
  border: 1px solid rgb(109, 107, 107);
  border-radius: 5px;
  width: 100%;
}
#input-search:focus-visible {
  border: 1px solid #2a50b4;
  outline: 2px solid #2a50b4;
}
.icon-search {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  color: #c9cbce;
}
@media screen and (min-width: 1024px) {
  .input-area {
    width: 50% !important;
  }
}
</style>
