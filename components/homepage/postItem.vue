<template>
    <div class="post">
        <a>
            <img src="https://cdnb.artstation.com/p/assets/images/images/014/669/131/large/mai-yoneyama-72125578-p0-master1200.jpg?1544952684"
                alt="munditheme: Nice panorama! Awesome." />
        </a>
        <div class="item edit">
            <a>
                <font-awesome-icon icon="fa-solid fa-ellipsis" />
            </a>
            <div class="comment bottom">Edit</div>
        </div>
        <div class="text">
            <div>
                <p><a class="tumblr_blog">robby</a>:</p>
                <blockquote>
                    <h1><a>Lorem ipsum</a></h1>
                    <div>
                        <div class="post-desc" :class="{ visible: isVisible }">
                            <p>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu augue in ipsum
                                    congue
                                    auctor.
                                    Cras bibendum nulla et odio sollicitudin, sit amet placerat metus dapibus. Sed orci
                                    quam,
                                    consectetur eget sodales at, vehicula sit amet nulla. Maecenas sem nisl, hendrerit
                                    ut nisi
                                    vitae, ultricies gravida nibh. Suspendisse bibendum libero ligula, non porttitor
                                    augue
                                    cursus
                                    ut. In ligula nulla, mattis sit amet purus vitae, blandit eleifend dui. Vestibulum
                                    ullamcorper,
                                    dolor sed cursus facilisis, orci eros bibendum neque, eget porttitor est ligula non
                                    ipsum.
                                    Mauris id elit nec tortor gravida sagittis. Aliquam rhoncus ut lorem at
                                    porta.</span>
                            </p>
                        </div>
                        <span @click="toggleMore" style="color:#cccc">{{ isVisible ? "Show Less" : "Show More..." }}</span>
                    </div>
                </blockquote>
                <div class="social-buttons">
                    <div class="row">
                        <div class="button">
                            <div class="like_button">
                                <a><font-awesome-icon icon="fa-solid fa-heart" /></a>
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
            isVisible: false
        }
    },
    methods: {
        toggleMore() {
            this.isVisible = !this.isVisible
        },
    }
}
</script>

<style scoped>
.post-desc {
    height: 100px;
    overflow: hidden;
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
    color: #CCCCCC;
}


.item {
    display: table-cell;
    padding: 10px;
    width: 33%;
    border-bottom: 5px solid #fff;
    cursor: pointer;
    position: relative;
}

.item:hover {
    border-bottom: 5px solid #4A89DC;
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
    margin-top: 50px;
    border-radius: 5px;
    overflow: hidden;
    z-index: 20;
    position: relative;
}

.post:hover {
    border-left: 1px solid #4A89DC;
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

.like_button a:hover {
    color: #DA373C;
    transition: .2s;
    -webkit-transition: .2s;
    -moz-transition: .2s;
    -ms-transition: .2s;
    -o-transition: .2s;
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

}
</style>