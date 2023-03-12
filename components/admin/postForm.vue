<template>
  <div class="container">
    <div class="post">
      <a @click="showImagePopup" v-if="portfolio.image">
        <img :src="portfolio.image" :alt="portfolio.title" />
      </a>
      <div class="post-content">
        <div>
          <p><a>Create your post {{ $store.state.userData.username }}</a>:</p>
          <blockquote>
            <div>
              <h3>
                <span>
                  <input class="content-input__img" placeholder="Add img" v-model="portfolio.image" />
                </span>
              </h3>
              <p>
                <span>
                  <textarea class="content-input__header" placeholder="Add header" v-model="portfolio.title"></textarea>
                </span>
              </p>
              <p>
                <span>
                  <textarea class="content-input__desc" placeholder="write a description" v-model="portfolio.desc"
                    @input="autoTextArea"></textarea>
                </span>
              </p>
            </div>
          </blockquote>
          <div class="post-buttons">
            <div class="post-button__row">
              <div class="button-content">
                <button class="add-button" @click="addPortfolio">
                  Post Now
                </button>
              </div>
              <div class="button-content">
                <nuxt-link tag="button" to="/" class="cancel-button">Cancel</nuxt-link>
              </div>
              <div class="button-content" v-if="portfolioData">
                <button class="delete-button" @click="deletePost"><font-awesome-icon icon="fa-solid fa-trash" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="confirmation-modal" class="modal">
      <div class="modal-delete">
        <h1 class="modal-delete__title">Are you sure you want to delete this post?</h1>
        <div class="modal-buttons">
          <button id="confirm-delete" class="modal-buttons__confirm">Yes</button>
          <button id="cancel-delete" class="modal-buttons__cancel">No</button>
        </div>
      </div>
    </div>
    <div class="image-popup" :class="{ active: isImagePopupActive }">
      <div class="image-popup-overlay" @click="showImagePopup"></div>
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
      portfolio: this.portfolioData
        ? { ...this.portfolioData }
        : {
          title: "",
          desc: "",
          image: "",
        },
      isImagePopupActive: false,
    };
  },
  props: {
    portfolioData: {
      type: Object,
      default: null,
    }
  },
  methods: {
    async addPortfolio() {
      if (!this.portfolioData) {
        await this.$store.dispatch("addPortfolio", this.portfolio);
        this.$router.push("/")
      } else {
        let { id: _, ...newPortfolio } = this.portfolio

        await this.$store.dispatch("updatePortfolio", { newPortfolio, id: this.$route.params.detail })
        this.$router.push("/");
      }
    },
    showImagePopup() {
      this.isImagePopupActive = !this.isImagePopupActive
    },
    autoTextArea(event) {
      const textarea = event.target;
      textarea.style.height = "auto";
      const height = Math.min(textarea.scrollHeight, 200);
      textarea.style.height = height + "px";
    },
    async deletePost() {
      const modal = document.getElementById("confirmation-modal");
      const confirmBtn = document.getElementById("confirm-delete");
      const cancelBtn = document.getElementById("cancel-delete");

      modal.style.display = "block";

      const confirmDelete = await new Promise((resolve) => {
        confirmBtn.addEventListener("click", () => {
          resolve(true);
        });
        cancelBtn.addEventListener("click", () => {
          resolve(false);
        });
      });
      modal.style.display = "none";

      if (confirmDelete) {
        await this.$store.dispatch("deletePost", this.$route.params.detail);
        this.$router.push("/");
      }
    }

  },
};
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
}

.post {
  width: 100%;
  background-color: var(--white);
  border: 1px solid var(--chinese-white);
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
  object-position: top;
  cursor: pointer;

}

.post:hover {
  border-left: 1px solid var(--dark-charcoal);
}

.post-content {
  padding: 50px 100px;
}

.content-input__img {
  width: 100%;
  height: 50px;
  resize: none;
  border: none;
  color: var(--grey);
  font-size: var(--forParagraph);
  font-weight: var(--fwLight);
}

.content-input__header {
  width: 100%;
  height: 50px;
  resize: none;
  border: none;
  color: var(--grey);
  font-size: var(--forHeader);
  font-weight: var(--fwLight);
}

.content-input__desc {
  width: 100%;
  height: auto;
  resize: none;
  border: none;
  color: var(--grey);
  font-size: var(--forParagraph);
  font-weight: var(--fwLight);
}

.content-input__desc::-webkit-scrollbar {
  display: none;
}

.post-buttons {
  display: table;
}

.post-button__row {
  display: table-row;
}

button {
  background: none;
  text-decoration: none;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
}

.button-content {
  display: table-cell;
  padding: 10px;
  vertical-align: middle;
}

.add-button {
  background-color: var(--tufts-blue);
  border-radius: 5px;
  color: var(--white);
}

.add-button:hover {
  background: var(--dazzled-blue);
}

.cancel-button {
  background-color: var(--chinese-silver);
  color: var(--white);
  border-radius: 5px;
}

.cancel-button:hover {
  background: var(--grey);
}

.delete-button {
  color: var(--chinese-silver)
}

.delete-button:hover {
  color: var(--jasper);
}

/* Modal */
.modal {
  display: none;
  position: fixed;
  z-index: 100;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
  transition: 0.5s;
}

.modal-delete {
  margin: auto;
  padding: 20px;
  width: 400px;
  text-align: center;
  border-radius: 5px;
  transition: 0.5s;
}

.modal-delete__title {
  color: var(--white);
  font-weight: var(--fwBold);
}

.modal-buttons {
  margin-top: 20px;
}

.modal-buttons__confirm {
  background-color: var(--jasper);
  color: var(--white);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.modal-buttons__confirm:hover {
  background: var(--vivid-auburn);
}

.modal-buttons__cancel {
  background-color: var(--chinese-silver);
  color: var(--white);
  border: none;
  padding: 10px 40px;
  border-radius: 5px;
  cursor: pointer;
}

.modal-buttons__cancel:hover {
  background: var(--grey);
}

.modal-buttons__confirm:focus,
.modal-buttons__cancel:focus {
  outline: none;
}

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
  object-position: center;
}



@media screen and (max-width: 990px) {
  .container {
    padding: 20px;
    padding-top: 0px;
  }
}

@media screen and (max-width: 700px) {
  .post-content {
    padding: 50px;
  }
}

@media screen and (max-width: 500px) {
  .post-content {
    padding: 20px;
    padding-top: 50px;
  }

  .container {
    padding: 10px;
  }
}</style>
