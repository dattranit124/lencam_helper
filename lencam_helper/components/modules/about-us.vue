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
          <h5 class="my-4">{{ $T.Tran(data.title) }}</h5>
          <div class="mb-4">{{ $T.Tran(data.description) }}</div>
          <a href="#"> {{  $T.Tran(data.expand)}}</a>
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
          title: "community_title",
          description:
            "community_content",
          expand: "community_access",
        },
        {
          icon: "fab fa-youtube",
          title: "youtube_title",
          description:
            "youtube_content",
          expand: "youtube_access",
        },
        {
          icon: "fas fa-laptop-house",
          title: "webinar_title",
          description:
            "webinar_content",
          expand: "webinar_access",
        },
      ];
    },
  },
};
</script>

<style scoped>

</style>
