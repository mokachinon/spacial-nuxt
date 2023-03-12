<template>
  <div class="profile-container">
    <div class="container">
      <div class="profile-small" :class="{ 'profile-big': isBig }">
        <div class="header"
          style="background:url(https://31.media.tumblr.com/d83b99e22981d5e58e2bd74ed2494087/tumblr_n4ef3ynCZP1st5lhmo1_1280.jpg) no-repeat center center; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;">
        </div>
        <div class="profile-image" v-if="$store.getters.isAuthenticated">
          <a><img src="https://assets.tumblr.com/images/default_avatar/sphere_open_128.png" /></a>
        </div>
        <div class="logout-btn edit" v-if="$store.getters.isAuthenticated">
          <a>
            <font-awesome-icon icon="fa-solid fa-ellipsis" />
          </a>
          <div class="comment bottom" @click="logout">Logout?</div>
        </div>
        <div class="post-content" v-if="$store.getters.isAuthenticated">
          <nuxt-link tag="h3" to="/user">{{ $store.state.userData.username }}</nuxt-link>
          <p>UI/UX Designers</p>
          <p>A designer, developer, and
            photographer.</p>
        </div>
        <div class="post-content" v-else>
          <h3>Hey, do you wanna login?</h3>
          <blockquote>
            <nuxt-link tag="p" to="/user/login">Login</nuxt-link>
          </blockquote>
        </div>
        <div class="table" v-if="$store.getters.isAuthenticated">
          <div class="row">
            <a class="item" href="https://dribbble.com/mkchin">
              <font-awesome-icon icon="fa-solid fa-d" />
            </a>
            <a class="item" href="https://www.instagram.com/masrbb">
              <font-awesome-icon icon="fa-solid fa-hashtag" />
            </a>
            <a class="item" href="https://www.linkedin.com/in/albani-robbyan-s-y-6367a5147">
              <font-awesome-icon icon="fa-brands fa-linkedin-in" />
            </a>
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
      isBig: false,
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isBig = window.matchMedia('(min-width: 985px)').matches;
      this.$nextTick(() => {
        if (this.isBig) {
          this.$el.classList.add('profile-container', 'container');
        } else {
          this.$el.classList.remove('profile-container', 'container');
        }
      });
    },
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/");
    }
  },
  async created() {
    await this.$store.dispatch("getPortfolioList");
  },
}
</script>

<style scoped>
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
  background-color:var(--white);
  border: 1px solid var(--chinese-white);
  margin-top: 20px;
  border-radius: 5px;
}

.profile-big .post-content {
  padding: 20px;
  padding-top: 50px;
}

.profile-big .post-content h3 {
  text-align: center;
  color: var(--dark-charcoal);
  font-weight: var(--fwReguler);
}

@media screen and (max-width:990px) {
  .profile-big {
    display: none;
  }

  .container {
    padding: 20px;
    padding-top: 0px;
  }
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

  .container {
    padding: 10px;
  }
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

.post-content blockquote p {
  cursor: pointer;
}

.profile-small {
  background-color:var(--white);
  position: relative;
  border: 1px solid var(--chinese-white);
  border-radius: 0 0 5px 5px;
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

.edit {
  display: flex;
  float: right;
  justify-content: center;
  align-items: center;
}

.edit a {
  color: var(--chinese-silver);
}

.logout-btn {
  display: table-cell;
  padding: 10px;
  width: 15%;
  border-bottom: 5px solid var(--white);
  position: relative;
  text-align: center;
}

.logout-btn:hover {
  border-bottom: 5px solid var(--dark-charcoal);
}

.logout-btn:hover .comment {
  display: block;
  cursor: pointer;

}

.logout-btn .comment {
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

.logout-btn .comment button {
  background: none;
  cursor: pointer;
  border: none;
}

.logout-btn .comment:after {
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


.profile-image img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 5px solid var(--white);
  display: block;
}

.profile-small .profile-image {
  top: 150px;
  left: 100px;
}

.profile-small .post-content h3 {
  color: var(--dark-charcoal);
  font-weight: var(--fwReguler);
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
  border-bottom: 5px solid var(--white);
  cursor: pointer;
  position: relative;
}

.item:nth-child(1) {
  border-radius: 0 0 0 5px;
}

.item:nth-child(3) {
  border-radius: 0 0 5px 0;
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

.comment .fa-times {
  position: absolute;
  top: 3px;
  right: 5px;
  cursor: pointer;
}

/* profile end */

@media screen and (max-width:700px) {
  .post-content {
    padding: 50px;
  }

  .profile-small .profile-image {
    top: 150px;
    left: 50px;
  }
}

@media screen and (max-width:500px) {
  .post-content {
    padding: 20px;
    padding-top: 50px;
  }

}

/* end of index */
</style>