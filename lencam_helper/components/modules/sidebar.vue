<template>
  <div>
    {{Tags}}
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
import Tag from '../../utils/tag.js'
export default {

  computed :{
    ...mapGetters('tag',['Tags'])
  },
  created(){
    Tag.getTag(this);
    console.log(this.$store);
  }
};
</script>
<style></style>
