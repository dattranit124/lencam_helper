<template>
  <div class="border-end wrap">
    <i class="fas fa-chevron-circle-down fs-1 mt-4 d-block d-md-none expand-icon" role="button" @click="clickShowOrHideSideBar($event)"></i>
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
            <li @click="clickShowOrHideSideBar($event)"
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
    return {
    };
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
     * click hiển thị lên menu ở mobile screen
     * 
     */
    clickShowOrHideSideBar(e) {
      debugger
      console.log(e)
      var listClass = document.querySelector('.sidebar').classList
      if(listClass.contains('show-sidebar')) 
      {
        listClass.remove('show-sidebar');
      }
      else {
        listClass.add('show-sidebar');
      }
    }
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
  font-weight: bold !important ;
}
.wrap {
  position: relative;
}
.expand-icon {
  position: absolute;
  transform: translate(50%,-50%);
}

@media screen and (max-width: 767px) {
  .sidebar {
    display: none;
    position: absolute;
    transform: translate(5%,20%);
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    
  }
  .show-sidebar {
    display: block;
  }

}

</style>
