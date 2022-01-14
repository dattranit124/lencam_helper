const SHOP_ID = 100303;
/**
 * Call api để lấy dữ liệu
 * Author :THDAT(14/01/2022)
 */
export const actions = {
  get({ commit }) {
    new Promise((resolve, reject) => {
      this.$axios({
        method: "get",
        url: "/pages/getTags?shop_id=" + SHOP_ID,
      })
        .then((response) => {
          commit("SET_TAG", response.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
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
};

/**
 * State Lưu dữ liệu
 *
 */
export const states = {
  tags: [],
};
/**
 * Getter lấy dữ liệu của store
 */
export const getters = {
	Tags(state) {
    return state.tags;
  },
};
