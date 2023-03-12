<template>
    <div class="post">
        <div class="post-content">
            <p><a>Create new post?</a>:</p>
            <blockquote>
                <nuxt-link tag="a" class="input-area" to="/add">Add new post</nuxt-link>
            </blockquote>
        </div>
    </div>
</template>

<style scoped>
.post-content {
    padding: 50px 100px;
}

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
    background-color: var(--anti--anti-white);
    padding-bottom: 100px;
}

h1,
a {
    color: var(--dark-charcoal);
    font-weight: var(--fwLight);
    text-decoration: none;
}

p {
    color: var(--grey);
    font-size: var(--forParagraph);
    font-weight: var(--fwLight);
}

ul,
li {
    color: var(--grey);
    font-weight: var(--fwLight);
    font-size: var(--forParagraph);
}

p a {
    text-decoration: underline;
}

blockquote {
    border-left: 3px solid var(--chinese-white);
    width: 100%;
    padding-left: 10px;
    margin: 0px;
}

.post-content {
    padding: 50px 100px;
}

.container {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    position: relative;
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

.post:hover {
    border-left: 1px solid var(--dark-charcoal);
}

.input-area {
    width: 100%;
    height: 50px;
    resize: none;
    border: none;
    color: var(--grey);
    font-size: var(--forParagraph);
    font-weight: var(--fwLight);
}

@media screen and (max-width:700px) {
    .post-content {
        padding: 50px;
    }

}

@media screen and (max-width:500px) {
    .post-content {
        padding: 20px;
        padding-top: 50px;
    }

}
</style>