<template>
  <div class="footer">
    <div class="container">
      <div class="footer-nav d-flex flex-wrap justify-content-center">
        <div class="text-nowrap text-white p-4">
          <a href="#">{{$T.Tran('about')}}</a>
        </div>
        <div class="text-nowrap text-white p-4">
          <a href="#">{{$T.Tran('career')}}</a>
        </div>
        <div class="text-nowrap text-white p-4">
          <a href="#">{{$T.Tran('media')}}</a>
        </div>
        <div class="text-nowrap text-white p-4">
          <a href="#">{{$T.Tran('enterprise')}}</a>
        </div>
        <div class="text-nowrap text-white p-4">
          <a href="#">{{$T.Tran('sitemap')}}</a>
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
              <h6>{{ $T.Tran(menu.title) | upercase }}</h6>
            </li>
            <li
              v-for="(item, iItem) in menu.list"
              :key="iItem"
              class="list-group-item"
            >
              <a href="#">{{ $T.Tran(item) }}</a>
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
              <a href="#"> {{$T.Tran('term_service')}}</a>
            </li>
            
            <li class="list-group-item text-nowrap text-sm-end text-center">
              <a href="#">{{$T.Tran('privacy')}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    upercase(value)
    {
      return value.toUpperCase();
    }
  },
  
  computed: {
    objMenu() {
      return [
        {
          title: "lencam",
          list: ["about_lencam", "history", "publisher"],
        },
        {
          title: "pointofsale",
          list: ["whatnew"],
        },
        {
          title: "support",
          list: ["lencam_sp", "community", "event", "api"],
        },
        {
          title: "more",
          list: [
            "partner",
            "affiliate",
            "app_developer",
            "investors",
            "accessibility",
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
