<template >
	<div class="d-flex mx-2">
		<ModulesSidebar
		@getDetail="clickgetDetailPage"
		/>
		<div v-if="pageDetail" class="content mt-5">
			
		</div>
	</div>
</template>
<script>
export default {
  methods: {
	  /**
	   * Lấy detail của page thông qua slug
	   */
	  clickgetDetailPage(value) {
		  
	  }
  },
  data () {
    return {
		pageDetail :null,
    }
  },
	
}
</script>
<style scoped>
	.content {
		width: 100%;
	}
</style>