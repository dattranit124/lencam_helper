<template>
  <div
    class="search-box container-fluid d-flex d-flex justify-content-center align-items-center"
  >
    <div class="input-area my-2">
      <input
        type="text"
        aria-label="Large"
        id="input-search"
        class="my-5 ps-3 py-3"
        placeholder="Tìm kiếm tài liệu"
      />
	  <i class="fas fa-search icon-search fs-3" role="button"></i>
    </div>
  </div>
</template>
<script>
export default {};

</script>
<style scoped>
.search-box {
  background-color: #E8E9EB !important;
}
.input-area {
  width: 50%;
  position: relative;
}
#input-search {
  outline: none;
  border: 1px solid rgb(109, 107, 107);
  border-radius: 5px;
  width: 100%;
}
#input-search:focus-visible {
  border: 1px solid #2a50b4;
  outline: 2px solid #2a50b4;
}
.icon-search {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 10px;
	color: #C9CBCE;
}
</style>
