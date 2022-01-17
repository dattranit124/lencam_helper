<template>
  <div class="sidebar mx-5 mt-5">
    <ul class="nav flex-column menu-tag">
      <li class="nav-item" v-for="(tag, index) in Tags" :key="index">
        <a
          @click="clickToTag(tag.tag)"
          class="nav-link rounded-start tag-item"
          role="button"
          :class="{ 'tag-selected': tagSelected == tag.tag }"
        >
        <i v-if="tagSelected == tag.tag" class="fas fa-chevron-up fs-6"></i>
        <i v-else class="fas fa-chevron-down fs-6"></i>
          {{ tag.tag }}
        </a>
        
        <ul class="nav flex-column child-nav" v-if="tagSelected == tag.tag">
          <li
            class="nav-item"
            role="button"
            v-for="page in Pages"
            :key="page.id"
            
          >
            <nuxt-link class="ps-5 " :to="`/helper/${page.slug}`">{{ page.title }}</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import Tag from "../../utils/tag.js";
import Page from "../../utils/page.js";
export default {
  data() {
    return {
      tagSelected: "",
      pageSelected : '',
    };
  },
  methods: {
    ...mapMutations("page", ["deletePage"]),
    /**
     * Ấn vào tag
     *
     */
   async clickToTag(tag) {
      if (this.tagSelected != tag) {
        this.deletePage();
      }
      this.tagSelected = tag;
    await  Page.getPage(this, tag);
    this.$router.push(`/helper/${this.Pages[0].slug}`)
    },
    /**
     * click vào tên trang gọi emit sang cha để lấy detail qua slug
     */
  
  },

  computed: {
    ...mapGetters("tag", ["Tags"]),
    ...mapGetters("page", ["Pages"]),
  },
  created() {
    Tag.getTag(this);
  },
};
</script>
<style scoped>
.sidebar {
  width: 20%;
  border-right: 1px solid #ccc;
   min-height: 150px;
   font-size: 18px;
}
a {
  text-decoration: none;
  color: black;
  display: block;
  white-space: nowrap;
  line-height: 40px;
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
  font-weight: bold;
  
}
.nuxt-link-active {
    font-weight: bold;

}
</style>
