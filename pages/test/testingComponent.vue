<template>
  <div>
    <div class="post">
      <a>
        <img/>
      </a>
      <div class="item edit">
        <a>
          <font-awesome-icon icon="fa-solid fa-ellipsis" />
        </a>
        <div class=""></div>
      </div>
      <div class="post-content">
        <div>
          <p><a></a></p>
          <blockquote>
            <h1><a></a></h1>
            <div>
              <div class="post-desc demo">
                <p style="margin:0;"><span></span></p>
              </div>
              <span></span>
            </div>
          </blockquote>
          <div class="social-buttons">
            <div class="row">
              <div class="button">
                <div class="like-button">
                  <button><font-awesome-icon icon="fa-solid fa-heart"/></button>
                  <span>
                    <p class="demo"></p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
  /* max-height:80vh; */
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
  color: var(--chinese-silver);
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

.post-content {
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
  color: var(--chinese-silver);
}

.item {
  display: table-cell;
  padding: 10px;
  width: 15%;
  border-bottom: 5px solid var(--white);
  cursor: pointer;
  position: relative;
  text-align: center;
}

.item:hover {
  border-bottom: 5px solid var(--dark-charcoal);
}

.item:hover .comment {
  display: block;
}

.comment {
  width: 100px;
  height: 40px;
  border-radius: 5px;
  background-color:var(--white) ;
  padding: 10px;
  text-align: center;
  color: var(--grey);
  font-size: var(--forParagraph);
  position: absolute;
  bottom: -45px;
  left: 50%;
  margin-left: -50px;
  border: 1px solid var(--chinese-white);
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
  border-bottom: 5px solid var(--chinese-white);
}

.post {
  width: 100%;
  background-color:var(--white);
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

.social-buttons {
  display: table;
}

.button {
  display: table-cell;
  padding: 10px;
  vertical-align: middle;
}

.like-button button {
  color: var(--chinese-silver);
  background: none;
  border: none;
}


.like-button button:hover {
  color: var(--jasper);
  transition: 0.1s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -ms-transition: 0.2s;
  -o-transition: 0.2s;
  cursor: pointer;
}

.like-active {
  color: var(--jasper);
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
}</style>
