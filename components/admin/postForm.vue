<template>
  <div class="container">
    <div class="post panorama">
      <label for="file-input" v-if="portfolio.image">
        <img :src="portfolio.image"
          alt="Nice panorama! Awesome." />
      </label>
      <input id="file-input" type="file" style="display: none;" />
      <div class="text">
        <div>
          <p><a class="tumblr_blog">robby</a>:</p>
          <blockquote>
            <div>
              <p><span>
                  <input class="input_area" placeholder="Add img" v-model="portfolio.image"/>
                </span></p>
              <p><span>
                  <textarea class="input_area" placeholder="Add header"  v-model="portfolio.title"></textarea>
                </span></p>
              <p><span>
                  <textarea class="input_area" placeholder="write a description"  v-model="portfolio.desc"></textarea>
                </span></p>
            </div>
          </blockquote>
          <div class="social-buttons">
            <div class="row">
              <div class="button">
                <div class="like_button">
                  <button @click="addPortfolio"><font-awesome-icon icon="fa-solid fa-heart" /></button>
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
      }
    }
  },
  methods: {
    async addPortfolio() {
      await this.$store.dispatch("addPortfolio", this.portfolio)
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>

.text {
  padding: 50px 100px;
}

/* homepage */
.container {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
}

.row {
  display: table-row;
}

.post {
  width: 100%;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  margin-top: 50px;
  border-radius: 5px;
  overflow: hidden;
  z-index: 20;
  position: relative;
}

.post:hover {
  border-left: 1px solid #4A89DC;
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

.social-buttons {
  display: table;
}

.button {
  display: table-cell;
  padding: 10px;
  vertical-align: middle;
}

.like_button a {
  color: #CCCCCC;
}

.reblog_button a {
  color: #CCCCCC;
}

.like_button,
.reblog_button a {
  text-decoration: none;
}

.like_button a:hover {
  color: #DA373C;
  transition: .1s;
  -webkit-transition: .2s;
  -moz-transition: .2s;
  -ms-transition: .2s;
  -o-transition: .2s;
}

.reblog_button a:hover {
  color: #4A89DC;
  transition: .1s;
  -webkit-transition: .2s;
  -moz-transition: .2s;
  -ms-transition: .2s;
  -o-transition: .2s;
}

@media screen and (max-width:990px) {

  .container {
    padding: 20px;
    padding-top: 0px;
  }
}

@media screen and (max-width:700px) {
  .text {
    padding: 50px;
  }

}

@media screen and (max-width:500px) {
  .text {
    padding: 20px;
    padding-top: 50px;
  }

  .container {
    padding: 10px;
  }
}

/* end of index */

/* post add style */

label {
  display: inline-block;
  cursor: pointer;
  position: relative;
}

label img {
  display: block;
  max-width: 100%;
  height: auto;
  filter: brightness(100%);
  transition: filter 0.3s ease-in-out;
}

label:hover::before {
  content: "Add image?";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: lighter;
  font-size: 1.5rem;
  color: white;
  z-index: 1;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
}

label:hover img {
  filter: brightness(50%);
  -webkit-filter: brightness(50%);
}

input[type="file"] {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
}
</style>