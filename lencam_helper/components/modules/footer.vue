<template>
  <div class="footer">
    <div class="container">
      <div class="footer-nav d-flex flex-wrap justify-content-center">
        <div class="text-nowrap text-white p-4">
          <a href="#">Giới thiệu</a>
        </div>
        <div class="text-nowrap text-white p-4">
          <a href="#">Nghề nghiệp</a>
        </div>
        <div class="text-nowrap text-white p-4">
          <a href="#">Báo chí và truyền thông</a>
        </div>
        <div class="text-nowrap text-white p-4">
          <a href="#">Doanh nghiệp</a>
        </div>
        <div class="text-nowrap text-white p-4">
          <a href="#">Sơ đồ trang web</a>
        </div>
      </div>

      <!-- Menu -->
      <div class="row border-top footer-menu py-4">
        <div
          v-for="(menu, iMenu) in objMenu"
          :key="iMenu"
          class="col-md-3 col-6"
        >
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <h6>{{ menu.title }}</h6>
            </li>
            <li
              v-for="(item, iItem) in menu.list"
              :key="iItem"
              class="list-group-item"
            >
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-top p-4">
      <div class="d-sm-flex justify-content-between align-items-center">
        <!-- Icon -->
        <div class="text-center">
          <ul
            class="list-group list-group-flush list-group-horizontal justify-content-center"
          >
            <li class="list-group-item">
              <a href="#"><i class="fab fa-facebook-square fs-4"></i></a>
            </li>
            <li class="list-group-item">
              <a href="#"> <i class="fab fa-twitter-square fs-4"></i></a>
            </li>
            <li class="list-group-item">
              <a href="#"> <i class="fab fa-youtube-square fs-4"></i></a>
            </li>
            <li class="list-group-item">
              <a href="#"> <i class="fab fa-instagram-square fs-4"></i></a>
            </li>
            <li class="list-group-item">
              <a href="#"> <i class="fab fa-pinterest-square fs-4"></i></a>
            </li>
          </ul>
        </div>
        <!-- Policy -->
        <div>
          <ul class="list-group list-group-flush list-group-horizontal-md">
            <li class="list-group-item text-nowrap text-sm-end text-center">
              <a href="#"> Điều khoản dịch vụ</a>
            </li>
            
            <li class="list-group-item text-nowrap text-sm-end text-center">
              <a href="#"> Chính sách quyền riêng tư</a>
            </li>
          </ul>
        </div>
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
          title: "LENCAM",
          list: ["About Lencam", "History", "Publisher"],
        },
        {
          title: "POINT OF SALE",
          list: ["What's new?"],
        },
        {
          title: "SUPPORT",
          list: ["Lencam Support", "Community", "Event", "API"],
        },
        {
          title: "LENCAM",
          list: [
            "Partner",
            "Affiliate program",
            "App developers",
            "Investors",
            "Accessibility",
          ],
        },
      ];
    },
  },
};
</script>

<style scoped>
.border-top {
  border-top: 1px solid #fff !important;
}
.footer * {
  color: white;
}
</style>
