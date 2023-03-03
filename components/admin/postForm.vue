<template>
  <div class="container">
    <div class="post panorama">
      <a @click="showImagePopup" v-if="portfolio.image">
        <img :src="portfolio.image" :alt="portfolio.title" />
      </a>
      <div class="text">
        <div>
          <p><a class="tumblr_blog">Create your post {{ $store.state.userData.username }}</a>:</p>
          <blockquote>
            <div>
              <h3>
                <span>
                  <input class="input_area" placeholder="Add img" v-model="portfolio.image" />
                </span>
              </h3>
              <p>
                <span>
                  <textarea class="h3" style="font-size: 22px" placeholder="Add header"
                    v-model="portfolio.title"></textarea>
                </span>
              </p>
              <p>
                <span>
                  <textarea class="input_desc" placeholder="write a description" v-model="portfolio.desc"></textarea>
                </span>
              </p>
            </div>
          </blockquote>
          <div class="social-buttons">
            <div class="row">
              <div class="button">
                <div class="like_button">
                  <button @click="addPortfolio">
                    <font-awesome-icon icon="fa-solid fa-heart" />
                  </button>
                </div>
              </div>
              <div class="button">
                <div class="reblog_button">
                  <nuxt-link tag="button" to="/"><font-awesome-icon icon="fa-solid fa-repeat" /></nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="image-popup" :class="{ active: isImagePopupActive }">
      <div class="image-popup-overlay" @click="hideImagePopup"></div>
      <div class="image-popup-content" v-if="portfolio.image">
        <img :src="portfolio.image" alt="Nice panorama! Awesome." />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolio: {
        title: "",
        desc: "",
        image: "",
      },
      isImagePopupActive: false,
    };
  },
  methods: {
    async addPortfolio() {
      this.portfolio.timestamp = new Date().getTime();
      await this.$store.dispatch("addPortfolio", this.portfolio);
      this.$router.push("/");
    },
    showImagePopup() {
      this.isImagePopupActive = true;
    },
    hideImagePopup() {
      this.isImagePopupActive = false;
    },

  },
};
</script>

<style scoped>
.image-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s;
  background: rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
}

.image-popup.active {
  visibility: visible;
  opacity: 1;
  transition: visibility 0s, opacity 0.5s;
}

.image-popup-overlay {
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.image-popup-content {
  max-width: 80%;
  max-height: 80%;
  position: absolute;

}


.image-popup-content img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.text {
  padding: 50px 100px;
}

/* homepage */
.container {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
}

.row {
  display: table-row;
}

.post {
  width: 100%;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-top: 20px;
  overflow: hidden;
  z-index: 20;
  position: relative;
}

.post a img {
  width: 100%;
  height: 100%;
  max-width: 700px;
  max-height: 500px;
  object-fit: cover;
  object-position: center;
  cursor: pointer;

}

.post:hover {
  border-left: 1px solid #333;
}

.input_area {
  width: 100%;
  height: 50px;
  resize: none;
  border: none;
  color: #808080;
  font-size: 14px;
  font-weight: 300;
}

.h3 {
  width: 100%;
  height: 50px;
  resize: none;
  border: none;
  color: #808080;
  font-size: 14px;
  font-weight: 300;
  color: #333;
  text-decoration: none;
}


.input_desc {
  width: 100%;
  height: 100px;
  resize: none;
  border: none;
  color: #808080;
  font-size: 14px;
  font-weight: 300;
}


.social-buttons {
  display: table;
}

.row {
  display: table-row;
}

.button {
  display: table-cell;
  padding: 10px;
  vertical-align: middle;
}

.like_button button {
  color: #cccccc;
  background: none;
  border: none;
}

.reblog_button button {
  color: #cccccc;
  background: none;
  border: none;
}

.like_button,
.reblog_button button {
  text-decoration: none;

}

.like_button button:hover {
  color: #da373c;
  transition: 0.1s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -ms-transition: 0.2s;
  cursor: pointer;
  -o-transition: 0.2s;
}

.reblog_button button:hover {
  color: #4a89dc;
  transition: 0.1s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -ms-transition: 0.2s;
  cursor: pointer;
  -o-transition: 0.2s;
}

@media screen and (max-width: 990px) {
  .container {
    padding: 20px;
    padding-top: 0px;
  }
}

@media screen and (max-width: 700px) {
  .text {
    padding: 50px;
  }
}

@media screen and (max-width: 500px) {
  .text {
    padding: 20px;
    padding-top: 50px;
  }

  .container {
    padding: 10px;
  }
}
</style>
