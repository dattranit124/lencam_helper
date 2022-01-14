const SHOP_ID = 100303;
export const state = () => ({
  pages: [],
});
/**
 * Call api để lấy dữ liệu
 * Author :THDAT(14/01/2022)
 */
export const actions = {
  /**Get các page theo tag
   * 
   */
  async get({ commit }, params) {
   await this.$axios({
      method: "get",
      url: `/pages/get?shop_id=${SHOP_ID}&tag=${params}`,
    })
      .then((response) => {
        commit("SET_PAGE", response.data);
      })
      .catch((error) => {
        commit("SET_PAGE", null);
      });
  },
  /**
   * Get detail page bằng slug
   * 
   */
  async getDetail({ commit }, params) {
    await this.$axios({
       method: "get",
       url: `/pages/get?shop_id=${SHOP_ID}&tag=${params}`,
     })
       .then((response) => {
         commit("SET_PAGE", response.data);
       })
       .catch((error) => {
         commit("SET_PAGE", null);
       });
   },
};
/**
 * Mutation Để gán dữ liệu vào state
 *
 */
export const mutations = {
  //Gán tag được lấy từ api vào state
  SET_PAGE(state, payloads) {
    state.pages = payloads;
  },
};

/**
 * Getter lấy dữ liệu của store
 */
export const getters = {
  Pages(state) {
    return state.pages;
  },
};
