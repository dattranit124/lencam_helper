<template>
  <nav class="navbar navbar-expand-xl navbar-light bg-light">
    <div class="container-fluid my-1 mx-5">
      <nuxt-link to="/" class="navbar-brand">
        <img src="/assets/logo/logo.png" alt="" height="30" />
        <span class="fst-italic fw-light">{{$T.Tran('help_center')}}</span>
      </nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-xl-0 menu-item">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link" aria-current="page"
              >{{$T.Tran('home')}}</nuxt-link
            >
          </li>
          <li class="nav-item dropdown">
            <nuxt-link
              class="nav-link d-flex align-items-center"
              to="/"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>{{$T.Tran('support')}}</span>
              <i class="fas fa-chevron-down mx-1"></i>
            </nuxt-link>
            <ul
              class="dropdown-menu pr-5 dropdown-support"
              aria-labelledby="navbarDropdown"
            >
              <li v-for="support in supports" :key="support.id">
                <a class="dropdown-item" href="#">{{ $T.Tran(support.name) }}</a>
              </li>
            </ul>
          </li>
        </ul>
        <!-- Right -->
        <ul class="navbar-nav ms-auto mb-xl-0 menu-item">
          <li class="nav-item dropdown">
            <a
              class="nav-link d-flex align-items-center"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>{{ $T.Tran(languageSelected) }}</span>
              <i class="fas fa-chevron-down mx-1"></i>
            </a>
            <ul
              class="dropdown-menu pr-5 dropdown-support"
              aria-labelledby="navbarDropdown"
            >
              <li
                role="button"
                v-for="language in languages"
                :key="language.id"
                @click="clickSelectLanguage(language)"
                class="dropdown-item d-flex align-center justify-content-center"
              >
                {{ $T.Tran(language.name) }}
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_blank" href="http://lencam.com"
              >Lencam.com
            </a>
          </li>
          <li class="nav-item">
            <a href="http://admin.lencam.com" target="_blank">
              <button class="btn btn-primary py-2 px-3 m-auto">
                {{$T.Tran('login')}}
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  mounted() {
  
    //khai báo ngôn ngữ mặc định là EN
    var langDefault = "en-US";
    //lấy ngôn ngữ hiện tại ở local
    var languageCurrent = localStorage.getItem("lang");
    //nếu không có ngôn ngữ hiện tại hoặc ngôn ngữ hiện tại null
    if (languageCurrent == undefined || languageCurrent == null) {
      //Gán ngôn ngữ bằng ngôn ngữ mặc định
      localStorage.setItem("lang", langDefault);
      //Gán ngôn ngữ hiển thị lên trình duyệt 
      this.languageSelected = this.languages.find(
        (lang) => lang.code == langDefault
      ).name;
      //gán language vào store
      this.SET_LANGUAGE(langDefault);

      //Nếu có ngôn ngữ hiện tại
    } else {
      //Check xem ngôn ngữ hiện tại đang là gì
      var langCheck = this.languages.find(
        (lang) => lang.code == languageCurrent
      );
      //Nếu không có trong object ngôn ngữ đã khai báo
      if (langCheck == undefined) {
        //Gán lại bằng ngôn ngữ default
        localStorage.setItem("lang", langDefault);
        this.languageSelected = langDefault;
      } else {
        //nếu có gán cho ngôn ngữ bind lên màn hình bằng ngôn ngữ trong local
        this.languageSelected = langCheck.name;
        this.SET_LANGUAGE(langCheck.code);
      }
        //Gán language vào store 
    }
  },
  methods: {
    ...mapMutations('lang',['SET_LANGUAGE']),
    /**
     * Chọn ngôn ngữ
     * Author :THDAT(14/01/2022)
     */
    clickSelectLanguage(value) {
      var langSelected = value.code;
      localStorage.setItem("lang", langSelected);
      this.languageSelected = this.languages.find(
        (lang) => lang.code == langSelected
      ).name;
      this.SET_LANGUAGE(value.code);
    },
  },
  data() {
    return {
      //Các hỗ trợ
      supports: [
        {
          id: 1,
          name: "contact_support",
        },
        {
          id: 2,
          name: "video_tutorial",
        },
        {
          id: 3,
          name: 'community',
        },
      ],
      //Ngôn ngữ
      languages: [
        {
          code: "vi-VN",
          name: "languageVN",
        },
        {
          code: "en-US",
          name: "languageEN",
        },
      ],
      //Chọn ngôn ngữ default Tiếng Việt
      languageSelected: "",
    };
  },
};
</script>
<style scoped>
.menu-item > li {
  margin: 0 1rem !important;
  white-space: nowrap;
}
.dropdown-support > li {
  line-height: 2rem;
}
.dropdown-support > li > a {
  padding-right: 3rem;
  font-weight: 500;
  position: relative;
  border: 1px solid transparent;
}
.dropdown-support > li > a:hover {
  transition: all linear 0.2s !important;
}
.dropdown-support > li > a:hover:after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 40px;
  background-color: #2a50b4;
  border-top-right-radius: 5px;
  transition: all linear 0.2s !important;
}
.dropdown-support > li > a:focus {
  border: 1px solid #2a50b4;
  background: transparent;
  color: black;
}
.btn {
  background-color: #7b40f4 !important;
}
a.navbar-brand {
  text-decoration: none !important;
}
</style>
