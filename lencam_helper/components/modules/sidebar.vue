<template>
  <div class="border-end">
    <div class="expand">
      <!-- Em đang làm dở responsive screen <md -->
      <i class="fas fa-chevron-circle-down fs-3" role="button"></i>
    </div>
    <div class="sidebar ms-md-5 pt-3">
      <ul class="nav flex-column menu-tag">
        <li class="nav-item" v-for="(tag, index) in Tags" :key="index">
          <a
            @click="clickToTag(tag.tag)"
            class="nav-link rounded-start tag-item"
            role="button"
            :class="{ 'tag-selected': TagSelected == tag.tag }"
          >
            <i v-if="TagSelected == tag.tag" class="fas fa-chevron-up fs-6"></i>
            <i v-else class="fas fa-chevron-down fs-6"></i>
            {{ tag.tag }}
          </a>

          <ul class="nav flex-column child-nav" v-if="TagSelected == tag.tag">
            <li
              class="nav-item p-2"
              role="button"
              v-for="page in Pages"
              :key="page.id"
            >
              <nuxt-link class="ps-4 fw-light" :to="`/helper/${page.slug}`">{{
                page.title
              }}</nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import Tag from "../../utils/tag.js";
import Page from "../../utils/page.js";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations("page", ["deletePage"]),
    ...mapMutations("tag", ["TAG_SELECTED"]),
    /**
     * Ấn vào tag
     *
     */
    async clickToTag(tag) {
      if (this.TAG_SELECTED != tag) {
        await this.deletePage();
      }
      // this.tagSelected = tag;
      this.TAG_SELECTED(tag);
      await Page.getPage(this, tag);
      this.$router.push(`/helper/${this.Pages[0].slug}`);
    },
    /**
     * click vào tên trang gọi emit sang cha để lấy detail qua slug
     */
  },

  computed: {
    ...mapGetters("tag", ["Tags", "TagSelected"]),
    ...mapGetters("page", ["Pages"]),
  },
  created() {
    Tag.getTag(this);
  },
};
</script>
<style scoped>
.sidebar {
  min-height: 150px;
  font-size: 18px;
  width: 300px;
}
a {
  text-decoration: none;
  color: black;
}
li {
  list-style: none;
}
a:hover {
  text-decoration: underline;
  color: rgb(108, 18, 243);
}
.tag-selected {
  background-color: rgb(232, 220, 248);
  width: auto;
}
.nuxt-link-active {
  font-weight: normal !important ;
}

@media screen and (max-width: 767px) {
  .menu-tag {
    display: none;
  }
  .sidebar {
    position: absolute;
    z-index: 111111;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    
  }
}
</style>
