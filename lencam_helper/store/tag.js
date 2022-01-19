const SHOP_ID = 100303;
export const state = () => ({
  tags: [],
  tagSelected : '',
})
/**
 * Call api để lấy dữ liệu
 * Author :THDAT(14/01/2022)
 */
export const actions = {
  async get({ commit }) {
     await this.$axios({
        method: "get",
        url: "/pages/getTags?shop_id=" + SHOP_ID,
      })
        .then((response) => {
          commit("SET_TAG", response.data);
        })
        .catch((error) => {
          commit("SET_TAG", null);
        });
  },
};
/**
 * Mutation Để gán dữ liệu vào state
 *
 */
export const mutations = {
  //Gán tag được lấy từ api vào state
  SET_TAG(state, payloads) {
    state.tags = payloads;
  },
  TAG_SELECTED(state,payloads) {
    state.tagSelected = payloads;
  }
};


/**
 * Getter lấy dữ liệu của store
 */
export const getters = {
	Tags(state) {
    
    return state.tags;
  },
  TagSelected(state) {
    return state.tagSelected;
  },
  TagsPage(state) {
    return state.tags.map((tag)=>({
       icon: "fas fa-shipping-fast",
      name: tag.tag,
      description:
        "Follow one of our step-by-step guides and set your business up on Lencam.",
    }))
  }
};

