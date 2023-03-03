<template>
    <div class="post">
        <div class="text">
            <p><a>Create new post?</a>:</p>
            <blockquote>
                <nuxt-link tag="a" class="input_area" to="/add">Add new post</nuxt-link>
            </blockquote>
        </div>
    </div>
</template>

<style scoped>

.text {
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

.post {
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    margin-top:20px;

    overflow: hidden;
    z-index: 20;
    position: relative;
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