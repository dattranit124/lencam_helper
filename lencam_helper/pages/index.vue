<template>
  <div class="container">
    <div v-for="(menu, iMenu) in objMenu" :key="iMenu" class="row my-5">
      <h2 class="text-center my-5">{{ menu.name }}</h2>
      <div
        v-for="(item, iItem) in menu.list"
        :key="iItem"
        class="menu col-md-6 p-3"
      >
        <nuxt-link :to="`/helper/${item.slug}`" class="d-flex p-4">
          <div class="text-center">
            <img :src="item.image_url">
          </div>
          <div class="px-4">
            <h5 class="text-color">{{ item.title }}</h5>
            <div class="text-muted text-wrap">
              {{ item.seo_description }}
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Page from "../utils/page";

import { mapGetters, mapMutations } from "vuex";
import { title } from "process";
export default {
  methods: {
    ...mapMutations("page", ["deletePage"]),

    /**
     * Click vào item của list manager
     */
    async clickToItemManage(tagName) {
      await this.deletePage();
      let objTag = {
        tag: tagName,
      };
      var queryString = require("querystring").stringify(objTag);
      await Page.getPage(this, queryString);
      var slug = this.Pages[0].slug;
      this.$router.push(`/helper/${slug}`);
    },
  },
  data() {
    return {
      objMenu: [],
      
    };
  },

  async created() {
    await Page.getPage(this);
    const result = this.Pages.reduce((acc, d) => {
      const found = acc.find((a) => a.name === d.tags[0]);
      //const value = { name: d.name, val: d.value };
      const value =  d ; // the element in data property
      if (!found) {
        //acc.push(...value);
        acc.push({ name: d.tags[0], list: [value] }); // not found, so need to add data property
      } else {
        //acc.push({ name: d.name, data: [{ value: d.value }, { count: d.count }] });
        found.list.push(value); // if found, that means data property exists, so just push new element to found.data.
      }
      return acc;
    }, []);
    this.objMenu = result;
  },

  head() {
    return {
      title: "Lencam.com - Trung tâm trợ giúp",
    };
  },
  computed: {
    ...mapGetters("page", ["Pages"]),
    ...mapGetters("tag", ["Tags"]),
  },
};
</script>

<style scoped>
a {
  text-decoration: none !important;
}
.text-color {
  color: #7b40f4;
}
.menu {
  border: solid 2px transparent;
  border-radius: 8px;
}

.menu:hover {
  border: solid 2px #7b40f4;
  box-shadow: 0 5px 25px 0 rgb(0 0 0 / 25%);
  transform: translateY(-3px);
  transition: all 150ms ease;
}

@media screen and (max-width: 576px) {
  .menu {
    width: 95%;
    margin: 0 auto;
  }
}
i {
  width: 50px;
}
</style>
