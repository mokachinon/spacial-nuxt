export const state = () => ({
  portfolioList: [],
});


export const mutations = {
   
    getPortfolioList(state, payload) {
      state.portfolioList = payload;
    },
  };
  

export const actions = {
  async getPortfolioList({ commit }) {
    const response = await this.$axios.$get(
        "https://spacial-445bd-default-rtdb.firebaseio.com/portfolio.json"
    );

    const portfolioArray = [];

    for (const key in response) {
        portfolioArray.push({ ...response[key], id: key });
    }

    commit("getPortfolioList", portfolioArray);
  },

  async addPortfolio({ state }, portfolio) {
    await this.$axios.$post(
      "https://spacial-445bd-default-rtdb.firebaseio.com/portfolio.json",
      {
        title: portfolio.title,
        desc: portfolio.desc,
        img: portfolio.img,
      }
    );
  },
};
