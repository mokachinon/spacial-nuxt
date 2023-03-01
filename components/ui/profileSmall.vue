<template>
    <div class="profile-small">
        <div class="header"
            style="background:url(https://31.media.tumblr.com/d83b99e22981d5e58e2bd74ed2494087/tumblr_n4ef3ynCZP1st5lhmo1_1280.jpg) no-repeat center center; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;">
        </div>
        <div class="profile-image">
            <a href="https://munditheme.tumblr.com/"><img
                    src="https://assets.tumblr.com/images/default_avatar/sphere_open_128.png" /></a>
        </div>
        <div class="text">
            <h3>robby</h3>
            <p>UI/UX Designers</p>
            <p>A designer, developer, and
                photographer.</p>
        </div>
        <div class="table">
            <div class="row">
                <div class="item">
                    <a href="https://dribbble.com/mkchin">
                        <font-awesome-icon icon="fa-solid fa-d" />
                    </a>
                    <div class="comment bottom">Dribbble</div>
                </div>
                <div class="item">
                    <a href="https://www.instagram.com/masrbb">
                        <font-awesome-icon icon="fa-solid fa-hashtag" />
                    </a>
                    <div class="comment bottom">
                        Instagram
                    </div>
                </div>
                <div class="item">
                    <a href="https://www.linkedin.com/in/albani-robbyan-s-y-6367a5147">
                        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                    </a>
                    <div class="comment bottom">Linkedin</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.text {
    padding: 50px 100px;
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

.comment .fa-times {
    position: absolute;
    top: 3px;
    right: 5px;
    cursor: pointer;
}

/* profile end */

@media screen and (max-width:990px) {
 
    .profile-small {
        display: block;
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

}
/* end of index */

</style>