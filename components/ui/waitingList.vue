<template>
    <div class="post">
        <div class="loader"></div>
        <!-- <div class="post-content">
            <blockquote>
                <a>Loading content</a>
            </blockquote>
        </div> -->
    </div>
</template>

<style scoped>
.post {
    margin-top: 20px;
    display:flex;
    justify-content: center;
    align-items: center;
}

.loader {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 8px solid;
    border-color: #ccc;
    border-right-color: #333333;
    animation: s2 1s infinite linear;
}

@keyframes s2 {
    to {
        transform: rotate(1turn)
    }
}

/*

.post:hover {
    border-left: 1px solid var(--dark-charcoal);
}

.post-content {
    padding: 50px 100px;
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
} */</style>