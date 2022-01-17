const SHOP_ID = 100303;
export const state = () => ({
  pages: [],
  detail: {},
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
       url: `/pages/detail?shop_id=${SHOP_ID}&slug=${params}`,
     })
       .then((response) => {
         commit("SET_DETAIL", response.data);
         return response.data;
       })
       .catch((error) => {
         commit("SET_DETAIL", null);
         return null;
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
  /**
   * Delete page trước khi gọi list page mới
   * @param {*} state 
   */
 deletePage(state) {
    state.pages.length = 0;
  },
  /**
   * gán detail page được gọi từ api \
   * 
   */
  SET_DETAIL(state,payloads)
  {
    state.detail = payloads;
  },
  /**
   * Delete detail page trước khi gọi page mới
   */
  deleteDetail(state)
  {
    state.detail = {};
  }
};

/**
 * Getter lấy dữ liệu của store
 */
export const getters = {
  Pages(state) {
    return state.pages;
  },
  DetailPage(state) {
    return state.detail;
  }
};
