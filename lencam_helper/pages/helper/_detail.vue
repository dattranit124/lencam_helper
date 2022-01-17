<template>
  <div>
    <div class="content mt-5">
      <h3 class="mb-2 fs-1 border-bottom pb-2">{{ DetailPage.title }}</h3>
      <div v-html="DetailPage.content"></div>
      <div class="recommend">
        <h3 class="fs-2">Trong phần này</h3>
		<ul class="menu-recommend ms-2">
			<li class="item-recommend fs-4" v-for="(page,index) in pageRecommend" :key="index">
				<nuxt-link :to="`${page.slug}`">{{page.title}}</nuxt-link>
			</li>
		</ul>
      </div>
    </div>
  </div>
</template>
<script>
import Page from "../../utils/page";
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      isLoadPage: false,
	  pageRecommend : [],
	  title : 'Lencam.com -Trung tâm trợ giúp'
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
  layout: "helper",
  async created() {
	  
    // this.isLoadPage = true;
	//Lấy thông tin chi tiết của page qua slug
    await Page.getDetail(this, this.$route.params.detail);
	//Gán title head bằng title của Page
	this.title= this.DetailPage.title + " - Trung tâm trợ giúp";
    // this.isLoadPage = false
	//Gán list page recommend bằng page vừa được lấy từ vuex
	this.pageRecommend = [...this.Pages];
	//check index của page hiện tại trong list page vừa được gán
	let pageCurrent = this.pageRecommend.find(page => page.id === this.DetailPage.id);
	//Xóa page hiện tại trong list page để ra 1 lít recommend
	this.pageRecommend.splice(this.pageRecommend.indexOf(pageCurrent),1);
  },
  computed: {
    ...mapGetters("page", ["DetailPage","Pages"]),
  },
};
</script>
<style>
.content {
  min-width: 500px;
  width: 80%;
  font-size: 24px;
  min-height: 200px;
  position: relative;
  margin-bottom: 50px;
}
.content img {
  width: 100% !important;
}
.recommend {
  margin-top: 50px;
}
a {
  text-decoration: none;
  color: black;
  display: block;
  white-space: nowrap;
}
</style>
