<template>
    <div class="profile-container">
        <div class="profile-content">
            <div class="profile-content__header"
                style="background:url(https://31.media.tumblr.com/d83b99e22981d5e58e2bd74ed2494087/tumblr_n4ef3ynCZP1st5lhmo1_1280.jpg) no-repeat center center; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;">
            </div>
            <div class="profile-content__image">
                <a><img src="https://assets.tumblr.com/images/default_avatar/sphere_open_128.png" /></a>
            </div>
            <div class="profile-content__text">
                <h3 class="title">{{ $route.params.username }}</h3>
                <p>UI/UX Designers</p>
                <p>
                    A designer, developer, and
                    photographer.
                </p>
            </div>
            <div class="profile-content__table">
                <div class="content-table__row">
                    <a class="table-row__item" href="https://dribbble.com/mkchin">
                        <font-awesome-icon icon="fa-solid fa-d" />
                    </a>
                    <a class="table-row__item" href="https://www.instagram.com/masrbb">
                        <font-awesome-icon icon="fa-solid fa-hashtag" />
                    </a>
                    <a class="table-row__item" href="https://www.linkedin.com/in/albani-robbyan-s-y-6367a5147">
                        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.profile-container {
    position: fixed;
}

.profile-content {
    background-color: var(--white);
    position: absolute;
    width: 300px;
    left: -320px;
    border: 1px solid var(--chinese-white);
    border-radius: 5px;
}

.profile-content__header {
    width: 100%;
    height: 200px;
}

.profile-content__image {
    position: absolute;
    top: 150px;
    left: 100px;
}

.profile-content__image img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 5px solid var(--white);
    display: block;
}

.profile-content__text {
    padding: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
}

.profile-content__text h3 {
    color: var(--dark-charcoal);
    font-weight: var(--fwReguler);
}


.profile-content__text blockquote p {
    cursor: pointer;
}

.profile-content__text .title {
    text-align: center;
    color: var(--dark-charcoal);
    font-weight: var(--fwReguler);
    cursor: pointer;
}

.profile-content__table {
    display: table;
    width: 100%;
    text-align: center;
}

.content-table__row {
    display: table-row;
}

.table-row__item {
    display: table-cell;
    padding: 10px;
    width: 33%;
    border-bottom: 5px solid var(--white);
    cursor: pointer;
    position: relative;
}

.table-row__item:nth-child(1) {
    border-radius: 0 0 0 5px;
}

.table-row__item:nth-child(3) {
    border-radius: 0 0 5px 0;
}

.table-row__item:hover {
    border-bottom: 5px solid var(--dark-charcoal);
}


@media screen and (max-width:990px) {
    .profile-container {
        position: unset;
    }

    .profile-content {
        width: 100%;
        position: unset;
        left: 0;
        border-radius: 0 0 5px 5px;
    }

    .profile-content__text {
        padding: 50px;
    }

    .profile-content .profile-content__text h3 {
        text-align: start;
    }
}

@media screen and (max-width:700px) {
    .profile-container {
        position: unset;
    }

    .profile-content__text {
        padding: 50px;
    }

    .profile-content .profile-content__image {
        top: 150px;
        left: 50px;
    }
}

@media screen and (max-width:500px) {
    .profile-content__text {
        padding: 20px;
        padding-top: 50px;
    }

}

/* end of index */
</style>