<template>
  <div >
    <nav class="px-md-5 px-3 d-flex align-item-center justify-content-center justify-content-md-start border-bottom fs-6" 
    >
      <ol class="breadcrumb d-flex align-item-center pt-3">
        <li class="breadcrumb-item"><a class="text-decoration-underline" href="/">Trung tâm trợ giúp Lencam</a></li>
        <li v-if="TagSelected" class="breadcrumb-item" >
          {{TagSelected}}
        </li>
        <li v-if="DetailPage" class="breadcrumb-item" >{{DetailPage.title}}</li>
      </ol>
    </nav>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
	computed: {
		...mapGetters('tag',['TagSelected']),
		...mapGetters('page',['DetailPage']),
	}
};
</script>
<style></style>
