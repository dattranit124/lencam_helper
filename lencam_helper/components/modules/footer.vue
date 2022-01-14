<template>
  <div class="footer">
    <div class="container">
      <div class="py-4">
        <div class="d-flex flex-wrap justify-content-center">
          <div class="text-nowrap text-white p-3">
            <a href="#">Giới thiệu</a>
          </div>
          <div class="text-nowrap text-white p-3">
            <a href="#">Nghề nghiệp</a>
          </div>
          <div class="text-nowrap text-white p-3">
            <a href="#">Báo chí và truyền thông</a>
          </div>
          <div class="text-nowrap text-white p-3">
            <a href="#">Doanh nghiệp</a>
          </div>
          <div class="text-nowrap text-white p-3">
            <a href="#">Sơ đồ trang web</a>
          </div>
        </div>
      </div>

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
        <div class="text-center">
          <ul
            class="list-group list-group-flush list-group-horizontal justify-content-center"
          >
            <li class="list-group-item">
              <a href="#"><i class="fab fa-facebook-square fs-2"></i></a>
            </li>
            <li class="list-group-item">
              <a href="#"> <i class="fab fa-twitter-square fs-2"></i></a>
            </li>
            <li class="list-group-item">
              <a href="#"> <i class="fab fa-youtube-square fs-2"></i></a>
            </li>
            <li class="list-group-item">
              <a href="#"> <i class="fab fa-instagram-square fs-2"></i></a>
            </li>
            <li class="list-group-item">
              <a href="#"> <i class="fab fa-pinterest-square fs-2"></i></a>
            </li>
          </ul>
        </div>

        <div>
          <ul class="list-group list-group-flush list-group-horizontal-md">
            <li class="list-group-item text-nowrap text-sm-end text-center">
              Terms of Service (Điều khoản dịch vụ)
            </li>
            <li class="list-group-item text-nowrap text-sm-end text-center">
              Chính sách quyền riêng tư
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
          title: "CỬA HÀNG TRỰC TUYẾN",
          list: [
            "Bán hàng trực tuyến",
            "Features (Tính năng)",
            "Examples (Ví dụ)",
            "Website editor (Trình biên tập trang web)",
            "Online retail (Bán lẻ trực tuyển)",
          ],
        },
        {
          title: "POINT OF SALE",
          list: [
            "Point of Sale",
            "Features (Tính năng)",
            "Hardware (Phần cứng)",
            "POS software (Phần mềm POS)",
          ],
        },
        {
          title: "HỖ TRỢ",
          list: [
            "Hỗ trợ 24/7",
            "Cộng đồng",
            "Sự kiện cộng đồng",
            "Changelog (Nhật ký thay đổi)",
            "API documentation (Tài liệu API)",
          ],
        },
        {
          title: "LENCAM",
          list: [
            "Chương trình đối tác",
            "Chương trình liên kết",
            "Nhà phát triển ứng dụng",
            "Investors (Nhà đầu tư)",
            "Khả năng truy cập",
          ],
        },
      ];
    },
  },
};
</script>

<style scoped>
.footer {
  background: #002e25 !important;
}

.footer a {
  text-decoration: none;
  color: #fff;
}
.footer a:hover {
  text-decoration: underline;
  color: #fff;
}

.footer ul li {
  border: none;
  background: transparent;
  cursor: pointer;
  color: #fff;
}

.footer ul li a {
  text-decoration: none;
}

.footer ul li a:hover {
  text-decoration: underline;
}

.footer .footer-menu ul li h6 {
  color: #fff;
  font-weight: bold;
}

.footer .footer-menu ul li a {
  color: #b6babf;
}

.footer ul li a:hover {
  text-decoration: underline;
}

.footer .footer-menu ul li a:hover {
  color: #fff;
}

.border-top {
  border-top: 1px solid rgba(210, 213, 217, 0.1) !important;
}
</style>
