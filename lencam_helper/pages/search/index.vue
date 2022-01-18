<template>
  <div>
	  <div v-if="!Array.isArray(Pages)">
		  	<p class="text-center mt-2 fs-2">Không tìm thấy nội dung ...</p>
	  </div>
    <div v-else class="row row-cols-1 row-cols-md-3 g-4 m-5">
      <div v-for="page in Pages" :key="page.id" class="col" role="button" @click="goToDetailPage(page.slug)">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{page.title}}</h5>
            <p class="card-text">
              Click để xem chi tiết của bài viết...
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Tag : {{page.tags[0]}}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Page from '../../utils/page'
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("page", ["Pages"]),
  },
  methods: {
	  goToDetailPage(slug) {
		  	this.$router.push(`/helper/${slug}`)
	  },
	  
  },
  created() {
	 var objQuery = {...this.$route.query};
      var queryString = require("querystring").stringify(objQuery);
      Page.getPage(this, queryString);
  },
};
</script>
<style lang=""></style>
