export const state = () => ({
  portfolioList: [],
  token: null,
  userData: null,
});

export const getters = {
  isAuthenticated(state) {
    return state.token != null;
  },
};

export const mutations = {
  getPortfolioList(state, payload) {
    state.portfolioList = payload;
  },

  setToken(state, payload) {
    state.token = payload;
  },

  setUserData(state, payload) {
    state.userData = payload;
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
      "https://spacial-445bd-default-rtdb.firebaseio.com/portfolio.json?auth=" +
        state.token,
      {
        title: portfolio.title,
        desc: portfolio.desc,
        image: portfolio.image,
      }
    );
  },

  authenticateUser({ commit }, authData) {
    let webAPIKey = "AIzaSyDtwnQQqLlb7_vIXTcqGASqaRY_DjmqUno";
    let authUrl = authData.isLogin
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
      : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
    return this.$axios
      .$post(authUrl + webAPIKey, {
        email: authData.email,
        password: authData.password,
        displayName: authData.displayName,
        returnSecureToken: true,
      })
      .then((response) => {
        commit("setToken", response.idToken);
        commit("setUserData", {
          username: response.displayName,
          userId: response.localId,
          email: response.email,
        });
      })
      .catch((error) => console.log(error));
  },
};
