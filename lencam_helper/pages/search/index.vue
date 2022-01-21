<template>
  <div>
    <div v-if="!Array.isArray(Pages)">
      <p class="text-center mt-2 fs-2">{{$T.Tran('content_not_found')}}</p>
    </div>
    <div v-else>
      <LoadingPage v-if="isLoaded" />
      <h3 class="mx-md-5 px-md-2 mt-3 fs-3 fw-light" v-if="SearchText == '' || SearchText == null">
        {{$T.Tran('all_page')}}
      </h3>
      <h3 class="mx-md-5 px-md-2 mt-3 fs-3 fw-light" v-else>
       {{$T.Tran('show_result')}}
        <span class="fw-bold fs-3">{{ SearchText }}</span>
      </h3>
      <div
        class="border-bottom pb-4 row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 m-2 mx-md-5"
      >
        <div
          v-for="page in Pages"
          :key="page.id"
          class="col"
          role="button"
          @click="goToDetailPage(page.slug)"
        >
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ page.title }}</h5>
              <p class="card-text des-text">
                {{ page.seo_description }}
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Tag : {{ page.tags[0] }}</small>
            </div>
          </div>
        </div>
      </div>
      <!-- Paging -->
      <div class="d-flex align-items-center justify-content-center mx-3 paging">
        <button @click="fisrtPage" :disabled="objFilter.curr_page == 1">
          <i class="fas fa-chevron-left"></i><i class="fas fa-chevron-left"></i>
        </button>
        <button @click="backPage" :disabled="objFilter.curr_page == 1">
          <i class="fas fa-chevron-left"></i>
        </button>
        <span class="fs-5"
          >{{$T.Tran('page_search')}} {{ objFilter.curr_page }} {{$T.Tran('page_in')}}  {{ NumberPages }}</span
        >
        <button
          @click="nextPage"
          :disabled="objFilter.curr_page == NumberPages"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
        <button
          @click="lastPage"
          :disabled="objFilter.curr_page == NumberPages"
        >
          <i class="fas fa-chevron-right"></i
          ><i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import Page from "../../utils/page";
export default {
  data() {
    return {
      objFilter: {
        keyword: "",
        page_size: 12,
        curr_page: 1,
      },
      isLoaded: false,
    };
  },

  computed: {
    ...mapGetters("page", ["Pages", "NumberPages", "SearchText"]),
  },
  methods: {
    ...mapMutations("page", ["setTextSearch"]),
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    //Đi đến detail page
    goToDetailPage(slug) {
      this.$router.push(`/helper/${slug}`);
    },
    //Next trang
    nextPage() {
      this.objFilter.curr_page++;
      this.scrollToTop();
    },
    //Next to last
    lastPage() {
      this.objFilter.curr_page = this.NumberPages;
      this.scrollToTop();
    },
    // back to first
    fisrtPage() {
      this.objFilter.curr_page = 1;
      this.scrollToTop();
    },
    //Back page
    backPage() {
      this.objFilter.curr_page--;
      this.scrollToTop();
    },
  },
  created() {
    var objQuery = { ...this.$route.query };
    this.setTextSearch(objQuery.keyword);
    this.objFilter.keyword = objQuery.keyword;
    var queryString = require("querystring").stringify(this.objFilter);
    if (this.Pages.length == 0) {
      Page.getPage(this, queryString);
    }
  },
  watch: {
    objFilter: {
      handler: async function () {
        this.isLoaded = true;
        var queryString = require("querystring").stringify(this.objFilter);
        await Page.getPage(this, queryString);
        this.isLoaded = false;
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
.des-text {
  min-height: 50px;
  max-height: 200px;
  overflow: hidden;
}
.paging > button {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: white;
  margin: 0 10px;
}
</style>
