<template>
  <div class="container">
    <div v-for="(menu, iMenu) in objMenu" :key="iMenu" class="row my-5">
      <h2 class="text-center my-5">{{ menu.title }}</h2>
      <div
        v-for="(item, iItem) in menu.list"
        :key="iItem"
        class="menu col-md-6 p-3"
      >
        <a href="#" class="d-flex p-4">
          <div class="text-center">
            <i :class="item.icon + ' fs-1 text-color' "></i>
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
  </div>
</template>

<script>
export default {
  computed: {
    objMenu() {
      return [
        {
          title: "Start",
          list: [
            {
              icon: "fas fa-shipping-fast",
              name: "Intro to Lencam",
              description:
                "Follow one of our step-by-step guides and set your business up on Lencam.",
            },
            {
              icon: "fas fa-shipping-fast",
              name: "Migrate to Lencam",
              description:
                "Move your online store to Lencam from another platform.",
            },
            {
              icon: "fas fa-laptop-house",
              name: "Intro to Lencam",
              description:
                "Follow one of our step-by-step guides and set your business up on Lencam.",
            },
            {
              icon: "far fa-user-circle",
              name: "Intro to Lencam",
              description:
                "Follow one of our step-by-step guides and set your business up on Lencam.",
            },
          ],
        },

        {
          title: "Sell",
          list: [
            {
              icon: "fas fa-shipping-fast",
              name: "Online store",
              description: "Sell online from your own Shopify website.",
            },
          ],
        },

        {
          title: "Manage",
          list: [
            {
              icon: "fas fa-shipping-fast",
              name: "Shop",
              description:
                "Add products, build collections, and manage your inventory.",
            },
            {
              icon: "fas fa-shipping-fast",
              name: "Orders",
              description:
                "Add products, build collections, and manage your inventory.",
            },
            {
              icon: "fas fa-shipping-fast",
              name: "Products",
              description:
                "Add products, build collections, and manage your inventory.",
            },
            {
              icon: "fas fa-shipping-fast",
              name: "Collections",
              description:
                "Add products, build collections, and manage your inventory.",
            },
            {
              icon: "fas fa-shipping-fast",
              name: "Customers",
              description:
                "Add customer records to your store and manage customer groups.",
            },
            {
              icon: "fas fa-shipping-fast",
              name: "Pages",
              description:
                "Add products, build collections, and manage your inventory.",
            },
            {
              icon: "fas fa-shipping-fast",
              name: "Payments",
              description:
                "Manage how your customers can pay for your products and set up Shopify Payments.",
            },
            {
              icon: "fas fa-shipping-fast",
              name: "Shipping and delivery",
              description:
                "Manage the delivery of products to your customers and set up Shopify Shipping.",
            },
            {
              icon: "fas fa-shipping-fast",
              name: "Menu",
              description:
                "Manage the delivery of products to your customers and set up Shopify Shipping.",
            },
            {
              icon: "fas fa-shipping-fast",
              name: "Domains",
              description:
                "Manage the delivery of products to your customers and set up Shopify Shipping.",
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
                "Access learning resources and discuss all things Shopify with other sellers.",
            },
          ],
        },
      ];
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none !important;
}
.text-color{
  color: #7B40F4;
}
.menu {
  border: solid 2px transparent;
  border-radius: 8px;
}

.menu:hover {
  border: solid 2px #7B40F4;
  box-shadow: 0 5px 25px 0 rgb(0 0 0 / 25%);
  transform: translateY(-3px);
  transition: all 150ms ease;
}


i {
  width: 50px;
}
</style>
