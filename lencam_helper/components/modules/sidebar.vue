<template>
  <div class="sidebar mx-5 my-5">
    <ul class="nav flex-column">
      <li class="nav-item" v-for="(tag, index) in Tags" :key="index" >
        <a @click.stop="clickToTag(tag.tag)" class="nav-link hover"  role="button" :class="{'selected': tagSelected == tag.tag}">
          {{ tag.tag }}
          </a>
          <ul v-if="tagSelected == tag.tag">
            <li  class="nav-item hover" role="button" @click="clickToGetDetail(page.slug)" v-for="page in pages" :key="page.id">{{page.title}}</li>
          </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Tag from "../../utils/tag.js";
import Page from "../../utils/page.js";
export default {
  data () {
    return {
      tagSelected : '',
      pages : [],
    }
  },
  methods: {
    /**
     * Ấn vào tag
     *
     */
     clickToTag(tag) {
      this.tagSelected = tag;
       this.pages = Page.getPage(this,tag);
    },
    /**
     * click vào tên trang gọi emit sang cha để lấy detail qua slug
     */
    clickToGetDetail(value)
    {
      this.$emit('getDetail',value);
    }
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
* {
  list-style: none;
}
.sidebar{
  width: 20%;
  border-right: 1px solid rgb(171, 169, 169);

}
 a {
   color: black !important;
}
.selected {
  background-color: #cab6f1;
  color:  white !important;
}
.hover:hover {
  color: #7B40F4 !important;
}
</style>
