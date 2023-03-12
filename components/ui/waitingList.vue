<template>
    <div class="post">
        <div class="post-content">
            <blockquote>
                <a>Loading content</a>
            </blockquote>
        </div>
    </div>
</template>

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
}
</style>