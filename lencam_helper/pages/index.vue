<template>
  <div class="container">
    <div v-for="(menu, iMenu) in objMenu" :key="iMenu" class="row my-5">
      <h2 class="text-center my-5">{{ menu.title }}</h2>
      <div
        v-for="(item, iItem) in menu.list"
        :key="iItem"
        class="menu col-md-6 p-3"
      >
        <a :href="item.url" class="d-flex p-4">
          <div class="text-center">
            <i :class="item.icon + ' fs-1 text-color'"></i>
          </div>
          <div class="px-4">
            <h5 class="text-color">{{ item.name }}</h5>
            <div class="text-muted">
              {{ item.description }}
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- manage -->
    <div class="row my-5">
      <h2 class="text-center my-5">{{ objManage.title }}</h2>
      <div
        v-for="(item, iItem) in objManage.list"
        :key="iItem"
        class="menu col-md-6 p-3"
        role="button"
        @click="clickToItemManage(item.name)"
      >
        <div class="d-flex p-4">
          <div class="text-center">
            <i :class="item.icon + ' fs-1 text-color'"></i>
          </div>
          <div class="px-4">
            <h5 class="text-color">{{ item.name }}</h5>
            <div class="text-muted">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Page from "../utils/page";
import Tag from "../utils/tag";
import { mapGetters, mapMutations } from "vuex";
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
      objMenu: [
        {
          title: "Start",
          list: [
            {
              icon: "fas fa-shipping-fast",
              name: "Intro to Lencam",
              description:
                "Follow one of our step-by-step guides and set your business up on Lencam.",
              url: "/helper/intro",
            },
            {
              icon: "fas fa-shipping-fast",
              name: "Migrate to Lencam",
              description:
                "Move your online store to Lencam from another platform.",
              url: "/helper/intro",
            },
            {
              icon: "fas fa-laptop-house",
              name: "Intro to Lencam",
              description:
                "Follow one of our step-by-step guides and set your business up on Lencam.",
              url: "/helper/intro",
            },
            {
              icon: "far fa-user-circle",
              name: "Intro to Lencam",
              description:
                "Follow one of our step-by-step guides and set your business up on Lencam.",
              url: "/helper/intro",
            },
          ],
        },

        {
          title: "Sell",
          list: [
            {
              icon: "fas fa-shipping-fast",
              name: "Online store",
              description: "Sell online from your own Lencam website.",
              url: "http://lencam.com",
            },
          ],
        },
        {
          title: "Expand",
          list: [
            {
              icon: "fas fa-shipping-fast",
              name: "Lencam community",
              description:
                "Access learning resources and discuss all things Lencam with other sellers.",
              url: "/",
            },
          ],
        },
      ],
      objManage: {
        title: "Manage",
        list: [],
      },
    };
  },

  async created() {
    await Tag.getTag(this);
    this.objManage.list = this.Tags.map((tag) => ({
      icon: "fas fa-shipping-fast",
      name: tag.tag,
      description:
        "Access learning resources and discuss all things Lencam with other sellers.",
    }));
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
