<template>
  <div class="about-us">
    <div class="containter">
      <div class="row mx-0">
        <div
          v-for="(data, iData) in objData"
          :key="iData"
          class="col-lg-4 text-center p-5"
        >
          <i :class="data.icon + ' fs-1'"></i>
          <h5 class="my-4">{{ data.title }}</h5>
          <div class="mb-4">{{ data.description }}</div>
          <a href="#"> {{ data.expand }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    objData() {
      return [
        {
          icon: "fas fa-users",
          title: "Cộng đồng",
          description:
            "Với hơn 600.000 thành viên trên toàn cầu, hãy tìm câu trả lời hoặc đặt câu hỏi trong cộng đồng thương nhân, Đối tác Shopify và các nhà phát triển của chúng tôi.",
          expand: "Truy cập cộng đồng",
        },
        {
          icon: "fab fa-youtube",
          title: "Kênh YouTube",
          description:
            "Truy cập kênh YouTube của Trung tâm trợ giúp để tìm các video hữu ích về cách thiết lập cửa hàng trên Shopify.",
          expand: "Truy cập kênh YouTube của chúng tôi",
        },
        {
          icon: "fas fa-laptop-house",
          title: "Hội thảo trên web",
          description:
            "Đăng ký tham dự hội thảo trên web sắp diễn ra hoặc xem bản ghi hình và tìm hiểu nhiều chủ đề từ các diễn giả chuyên gia của chúng tôi.",
          expand: "Xem hội thảo trên web",
        },
      ];
    },
  },
};
</script>

<style scoped>
.about-us {
  background-color: #f7f8fb !important;
  /* padding: 3rem; */

}
</style>
