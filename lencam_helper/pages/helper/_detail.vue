<template>
  <div class="wrapper mx-3 mx-md-5">
    <LoadingPage v-if="isLoadPage" />
    <div v-else class="content mt-1">
      <h3 class="mb-2 fs-3 text-center text-md-start border-bottom pb-2 mt-2">
        {{ DetailPage.title }}
      </h3>
      <div v-html="DetailPage.content" class="ql-editor"></div>
      <div v-if="pageRecommend.length > 0" class="recommend">
        <h3 class="fs-5">{{$T.Tran('in_section')}}</h3>
        <ul class="menu-recommend ms-1">
          <li
            class="item-recommend p-1"
            v-for="(page, index) in pageRecommend"
            :key="index"
          >
            <nuxt-link :to="`${page.slug}`">{{ page.title }}</nuxt-link>
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
  methods: {
    ...mapMutations("tag", ["TAG_SELECTED"]),
  },
  data() {
    return {
      isLoadPage: false,
      pageRecommend: [],
      title: this.$T.Tran('help_center'),
    };
  },
  head() {
    return {
      titleTemplate: this.title,  
      meta: [
        {
          hid: this.DetailPage.id,
          name: this.DetailPage.seo_title,
          content: this.DetailPage.seo_description,
        },
        {
            hid: "og:title",
            name: "og:title",
            content: this.DetailPage.seo_description ?? ""
          },
          {
            hid: "og:description",
            name: "og:description",
            content: this.DetailPage.seo_description ?? ""
          },
          {
            hid: "og:image",
            name: "og:image",
          },
          {
            hid: "og:site_name",
            name: "og:site_name",
            content: "Lenful"
          }
        
      ],
    };
  },
  layout: "helper",
  async fetch() {
    this.isLoadPage = true;
    //Lấy thông tin chi tiết của page qua slug
    await Page.getDetail(this, this.$route.params.detail);
    //Gán title head bằng title của Page
    this.title = `${this.DetailPage.title} - ${this.$T.Tran('help_center')}`;
    // this.isLoadPage = false
    //Gán Tag_Selected vào state
    this.TAG_SELECTED(this.DetailPage.tags[0]);
    //Khỉ reload lại trnag get lại list page của tag thông qua page Detail
    var objQuery = {
      tag: this.DetailPage.tags[0],
    };
    var queryString = require("querystring").stringify(objQuery);
    await Page.getPage(this, queryString);
    //Gán list page recommend bằng page vừa được lấy từ vuex
    this.pageRecommend = [...this.Pages];
    //check index của page hiện tại trong list page vừa được gán
    let pageCurrent = this.pageRecommend.find(
      (page) => page.id === this.DetailPage.id
    );
    //Xóa page hiện tại trong list page để ra 1 lít recommend
    this.pageRecommend.splice(this.pageRecommend.indexOf(pageCurrent), 1);
    this.isLoadPage = false;
  },
  computed: {
    ...mapGetters("page", ["DetailPage", "Pages"]),
  },
};
</script>
<style>
.content {
  width: 90%;
  font-size: 16px;
  min-height: 200px;
  margin-bottom: 50px;
}
.content::-webkit-scrollbar {
  display: none;
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
}
a:hover {
  text-decoration: underline;
}
.wrapper {
  width: 80%;
}
@media screen and (max-width: 767px) {
  .wrapper {
    width: 100%;
  }
  .content {
    width: 100%;
  }
}
</style>
