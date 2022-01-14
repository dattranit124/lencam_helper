<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid my-3 mx-5">
      <a class="navbar-brand" href="#">
        <img src="assets/logo/logo.png" alt="" height="30" />
        <span class="fst-italic fw-light">trung tâm trợ giúp</span>
      </a>
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
      <div class="collapse navbar-collapse fs-5" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 menu-item">
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#"
              >Trang chủ</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link " target="_blank" href="#">Nhà phát triển </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link  d-flex align-items-center justify-content-between"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>Hỗ trợ</span>
              <i class="fas fa-chevron-down fs-6 mx-1"></i>
            </a>
            <ul
              class="dropdown-menu pr-5 dropdown-support"
              aria-labelledby="navbarDropdown"
            >
              <li v-for="support in supports" :key="support.id"><a class="dropdown-item" href="#">{{support.name}}</a></li>
            </ul>
          </li>
        </ul>
		<!-- Right -->
         <ul class="navbar-nav ms-auto mb-lg-0 align-items-center menu-item">	
          <li class="nav-item dropdown">
            <a
              class="nav-link d-flex align-items-center justify-content-between"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>{{languageSelected}}</span>
              <i class="fas fa-chevron-down fs-6 mx-1"></i>
            </a>
            <ul
              class="dropdown-menu pr-5 dropdown-support"
              aria-labelledby="navbarDropdown"
            >
              <li v-for="language in languages" :key="language.id" @click.stop="clickSelectLanguage(language.name)"><a class="dropdown-item" :href="language.href">{{language.name}}</a></li>
            </ul>
          </li>
		  <li class="nav-item">
            <a class="nav-link " target="_blank" href="http://lencam.com">Lencam.com
			 </a>
          </li>
		  <li class="nav-item">
            <a href="http://admin.lencam.com" target="_blank"> 
			
			<button class="btn btn-primary py-3 px-4">Đăng nhập</button>
			</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
	  /**
	   * Chọn ngôn ngữ
	   * Author :THDAT(14/01/2022)
	   */
	  clickSelectLanguage(value) {
		  this.languageSelected = value;
	  }
  },
  data () {
    return {
		//Các hỗ trợ
		supports: [
			{
				id : 1,
				name : 'Liên hệ hỗ trợ'
			},
			{
				id : 2,
				name : 'Video hướng dẫn'
			},
			{
				id : 3,
				name : 'Cộng đồng Lencam'
			},
		],
		//Ngôn ngữ
		languages: [
			{
				id : 1,
				name : 'Tiếng Việt',
				href : '/vi'
			},
			{
				id : 2,
				name : 'English',
				href : '/en'
			},
			{
				id : 3,
				name : 'Chinese',
				href : '/cn'
			},
		],
		//Chọn ngôn ngữ default Tiếng Việt
		languageSelected : 'Tiếng Việt',
		

    }
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
  background-color: #7B40F4 !important;
}
</style>
