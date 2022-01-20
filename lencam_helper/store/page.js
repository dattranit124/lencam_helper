//Pagesize ở phần search vì bên api không gửi lên số trang
const page_size =12;
const SHOP_ID = 100303;
export const state = () => ({
  pages: [],
  detail: {},
  numberPages :0,
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
    var urlDf = `/pages/get?shop_id=${SHOP_ID}&${params}&order=CREATED_ASC`
    if(typeof params === "undefined")
    {
      urlDf = `/pages/get?shop_id=${SHOP_ID}&order=CREATED_ASC`
    }
    await this.$axios({
      method: "get",
      url: urlDf,
    })
      .then((response) => {
        
        commit("SET_PAGE", response.data);
        var totalRows = response.data[0].total_rows;
        var numberPages = 0;
        if(totalRows%page_size != 0) {
          numberPages = Math.floor(totalRows / page_size) + 1;
        }
        else {
          numberPages = totalRows / page_size;
        }
        commit("SET_NUMBER_PAGE",numberPages);
        
      })
      .catch((error) => {
        debugger
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
   * Total row
   * @param {} state 
   */
   SET_TOTAL_ROW(state, payloads) {
     state.totalRows = payloads
   },
   /**
    * Set numberPage
    * 
    */
   SET_NUMBER_PAGE(state, payloads) {
     state.numberPages = payloads;
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
  SET_DETAIL(state, payloads) {
    state.detail = payloads;
  },
  /**
   * Delete detail page trước khi gọi page mới
   */
  deleteDetail(state) {
    state.detail = {};
  },
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
  },
  NumberPages(state) {return state.numberPages;},
};
