<template>
    <div>
        <div class="post">
            <a @click="showImagePopup">
                <img :src="detail.image" alt="Nice panorama! Awesome." />
            </a>
            <nuxt-link tag="a" :to="`/portfolio/${detail.id}/edit`" class="edit-content" v-if="$store.getters.isAuthenticated && detail.userId">
                <a>
                    <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                </a>
            </nuxt-link>
            <div class="post-content">
                <div>
                    <p><nuxt-link tag="a" :to="`/${detail.userName}`">{{ detail.userName }}</nuxt-link>:</p>
                    <blockquote>
                        <h1><a>{{ detail.title }}</a></h1>
                        <div>
                            <div class="post-content__desc" :class="{ visible: isVisible }">
                                <p style="margin:0;"><span>{{ detail.desc }}</span></p>
                            </div>
                            <span v-if="showMore" @click="toggleMore" class="show-more">{{
                                isVisible ? "Show Less" : "Show More..."
                            }}</span>
                        </div>
                    </blockquote>
                    <div class="button-container">
                        <div class="button-container__row">
                            <div class=container__content>
                                <button class="like-button" @click="likeClick">
                                    <font-awesome-icon icon="fa-solid fa-heart" :class="likeIcon" />
                                </button>
                            </div>
                            <div class=container__content>
                                <p>{{ likeCount }} people like this</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="image-popup" :class="{ active: isImagePopupActive }">
            <div class="image-popup-overlay" @click="showImagePopup"></div>
            <div class="image-popup-content">
                <img :src="detail.image" alt="Nice panorama! Awesome." />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isVisible: false,
            isImagePopupActive: false,
            wordLimit: 400,
        };
    },
    props: {
        detail: {
            type: Object,
            default: "",
        },
    },
    computed: {
        descWords() {
            return this.detail.desc.length;
        },
        showMore() {
            return this.descWords > this.wordLimit;
        },
        likeCount() {
            if (this.detail.dataLikes.length === 1) {
                if (this.detail.dataLikes[0] === "null") {
                    return 0;
                } else {
                    return 1;
                }
            } else {
                return this.detail.dataLikes.length
            }
        },
        likeIcon() {
            const checkLike = this.detail.dataLikes.find((user) => {
                return user === this.userEmail
            });
            if (!checkLike) {
                return ""
            } else {
                return "like-btn__clicked"
            }
        },

        userEmail() {
            return this.$store.getters.userEmail
        },
    },
    methods: {
        toggleMore() {
            this.isVisible = !this.isVisible;
        },
        showImagePopup() {
            this.isImagePopupActive = !this.isImagePopupActive
            if (this.isImagePopupActive === true) {
                const body = document.querySelector("body")
                body.style.overflowY = "hidden";
            } else {
                const body = document.querySelector("body")
                body.style.overflowY = "auto";
            }
        },
        async likeClick() {
            if (!this.$store.getters.isAuthenticated) {
                this.$router.push("/user/login");
                return;
            }

            const userEmail = this.userEmail;
            const portfolioDetail = JSON.parse(JSON.stringify(this.detail));

            if (portfolioDetail.dataLikes.length === 1 && portfolioDetail.dataLikes[0] === "null") {
                portfolioDetail.dataLikes[0] = userEmail
            } else {
                const checkLike = portfolioDetail.dataLikes.find((email) => {
                    return email === userEmail
                })

                if (!checkLike) {
                    portfolioDetail.dataLikes.push(userEmail)
                } else {

                    if (portfolioDetail.dataLikes.length === 1) {
                        portfolioDetail.dataLikes[0] = "null"
                    } else {
                        const userEmailIndex = portfolioDetail.dataLikes.findIndex((email) => {
                            return email === userEmail
                        })

                        portfolioDetail.dataLikes.splice(userEmailIndex, 1)
                    }
                }
            }

            let { id: _, ...portfolio } = portfolioDetail

            await this.$store.dispatch("likeUpdate", {
                portfolioId: this.detail.id,
                newDataPortfolio: portfolio,
            })

            await this.$store.dispatch("getPortfolioList")
        },
    },
};
</script>

<style scoped>
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

.edit-content {
    float: right;
    display: table-cell;
    padding: 10px;
    width: 15%;
    border-bottom: 5px solid var(--white);
    cursor: pointer;
    position: relative;
    text-align: center;
}

.edit-content a {
    color: var(--chinese-silver);
}

.edit-content a:hover {
    color: var(--dark-charcoal);
}

.post-content {
    padding: 50px 100px;
}

.button-container__row {
    display: table-row;
}

.button-container {
    display: table;
}

.post-content__desc {
    max-height: 80px;
    overflow: hidden;
}

.post-content__desc.visible {
    max-height: none;
}

.show-more {
    color: var(--chinese-silver);
    cursor: pointer;
    display: block;
}

.show-more:hover {
    text-decoration: underline;
}

.visible {
    height: auto;
}

.container__content {
    display: table-cell;
    padding: 10px;
    vertical-align: middle;
}

.like-button {
    color: var(--chinese-silver);
    background: none;
    border: none;
}


.like-button:hover {
    color: var(--jasper);
    transition: 0.1s;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    -ms-transition: 0.2s;
    -o-transition: 0.2s;
    cursor: pointer;
}

.like-btn__clicked {
    color: var(--jasper);
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
    object-position: center;
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
}
</style>
