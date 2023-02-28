<template>
    <div>
        <uiProfileBig/>
        <div class="container">
            <uiProfileSmall/>
            <uiComponentAdd />
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
                                <p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu augue in ipsum
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
                                        porta.</span></p>
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
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'IndexPage'
}
</script>
  
<style>
/* global style */
@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,700,500italic,900,700italic,900italic);
@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);

/* .svg-inline--fa {
    width: 1em;
    height: 1em;
    vertical-align: middle;
    margin-right: 0.25em;
    color: red;
  } */
* {
    -webkit-box-sizing: border-box;
    /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;
    /* Firefox, other Gecko */
    box-sizing: border-box;
    /* Opera/IE 8+ */
    transition: all 0.5s;
    font-family: Roboto, Arial, Helvetica, sans-serif;
}

body {
    height: 100%;
    width: 100%;
    margin: 0px;
    background-color: #f2f2f2;
    padding-bottom: 100px;
}

h1,
a {
    color: #333;
    font-weight: 300;
    text-decoration: none;
}

p {
    color: #808080;
    font-size: 14px;
    font-weight: 300;
}

ul,
li {
    color: #808080;
    font-weight: 300;
    font-size: 14px;
}

p a {
    text-decoration: underline;
}

blockquote {
    border-left: 3px solid #e0e0e0;
    width: 100%;
    padding-left: 10px;
    margin: 0px;
}

.text {
    padding: 50px 100px;
}

.post a img{
    width:100%;
    height: 400px;
    object-fit: cover;
}

/* end of global */

/* profile start */
.profile-container {
    position: fixed;
    width: 100%;
    top: 0px;
    left: 0px;
}

.container {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    position: relative;
}

.profile-big {
    width: 300px;
    position: absolute;
    left: -320px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    margin-top: 20px;
    border-radius: 5px;
}

.profile-small {
    display: none;
    background-color: #fff;
    position: relative;
}

.header {
    width: 100%;
    height: 200px;
}

.profile-image {
    position: absolute;
    top: 150px;
    left: 100px;
}

.profile-image img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 5px solid #fff;
    display: block;
}

.profile-small .profile-image {
    top: 150px;
    left: 100px;
}

.profile-big .text {
    padding: 20px;
    padding-top: 50px;
}

.profile-big .text h3 {
    text-align: center;
    color: #333;
    font-weight: 400;
}

.profile-small .text h3 {
    color: #333;
    font-weight: 400;
}

.table {
    display: table;
    width: 100%;
    text-align: center;
}

.row {
    display: table-row;
}

.post .item {
    width: 15%;
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

.fa {
    color: #4A89DC;
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

.comment .fa-times {
    position: absolute;
    top: 3px;
    right: 5px;
    cursor: pointer;
}

/* profile end */

/* homepage */
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

.edit {
    display: flex;
    float: right;
    justify-content: center;
    align-items: center;
}

.edit a {
    color: #CCCCCC;
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

.footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

@media screen and (max-width:990px) {
    .profile-big {
        display: none;
    }

    .profile-small {
        display: block;
    }

    .container {
        padding: 20px;
        padding-top: 0px;
    }
}

@media screen and (max-width:700px) {
    .text {
        padding: 50px;
    }

    .profile-small .profile-image {
        top: 150px;
        left: 50px;
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

/* end of post add */

/* login style */


/* end of login style */


/* end of index */

/* post add style */


/* end of post add */

/* login style */


/* end of login style */
</style>