<template>
    <div>
        <div class="post">
            <a @click="showImagePopup">
                <img :src="detail.image" alt="Nice panorama! Awesome." />
            </a>
            <div class="item edit">
                <a>
                    <font-awesome-icon icon="fa-solid fa-ellipsis" />
                </a>
                <div class="comment bottom">Edit</div>
            </div>
            <div class="text">
                <div>
                    <p><a class="tumblr_blog">Robby</a>:</p>
                    <blockquote>
                        <h1><a>{{ detail.title }}</a></h1>
                        <div>
                            <div class="post-desc" :class="{ visible: isVisible }">
                                <p style="margin:0;"><span>{{ detail.desc }}</span></p>
                            </div>
                            <span v-if="showMore" @click="toggleMore" class="show-more">{{
                                isVisible ? "Show Less" : "Show More..."
                            }}</span>
                        </div>
                    </blockquote>
                    <div class="social-buttons">
                        <div class="row">
                            <div class="button">
                                <div class="like_button">
                                    <button><font-awesome-icon icon="fa-solid fa-heart" /></button>
                                </div>
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
            wordLimit: 50,
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
            return this.detail.desc.split(" ").length; // count number of words in desc
        },
        showMore() {
            return this.descWords > this.wordLimit; // check if desc exceeds word limit
        }
    },
    methods: {
        toggleMore() {
            this.isVisible = !this.isVisible;
        },
        showImagePopup() {
            this.isImagePopupActive = !this.isImagePopupActive
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
    object-position: center;
}

.post-desc {
    max-height: 80px;
    overflow: hidden;
}

.post-desc.visible {
    max-height: none;
}

.show-more {
    color: #cccc;
    cursor: pointer;
    display: block;
}

.show-more:hover {
    text-decoration: underline;
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

.visible {
    height: auto;
}

.text {
    padding: 50px 100px;
}

.row {
    display: table-row;
}

.edit {
    display: flex;
    float: right;
    justify-content: center;
    align-items: center;
}

.edit a {
    color: #cccccc;
}

.item {
    display: table-cell;
    padding: 10px;
    width: 15%;
    border-bottom: 5px solid #fff;
    cursor: pointer;
    position: relative;
    text-align: center;
}

.item:hover {
    border-bottom: 5px solid #333;
}

.item:hover .comment {
    display: block;
}

.comment {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    background-color: #ffffff;
    padding: 10px;
    text-align: center;
    color: #808080;
    font-size: 14px;
    position: absolute;
    bottom: -45px;
    left: 50%;
    margin-left: -50px;
    border: 1px solid #e0e0e0;
    display: none;
    z-index: 10;
}

.comment:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: -5px;
    left: 50%;
    margin-left: -5px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #e0e0e0;
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

.post:hover {
    border-left: 1px solid #333;
}

.social-buttons {
    display: table;
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


.like_button button:hover {
    color: #da373c;
    transition: 0.1s;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    -ms-transition: 0.2s;
    -o-transition: 0.2s;
    cursor: pointer;

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
}
</style>
