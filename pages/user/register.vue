<template>
    <form class="container" @submit.prevent="onSubmit">
        <div class="sign-container">
            <a>
                <img src="https://i.pinimg.com/736x/39/17/38/3917386afdf481f3d2a7978ea5c07f22.jpg"
                    alt="Nice panorama! Awesome." />
            </a>
            <div class="sign-container__form">
                <div>
                    <p><a>Who are you?</a></p>
                    <blockquote>
                        <input class="input-area" type="text" placeholder="Username" v-model="username" />
                        <input class="input-area" type="email" placeholder="Email" v-model="email" />
                        <input class="input-area" placeholder="password..." type="password" v-model="password" />
                    </blockquote>
                    <div class="container-form__btn">
                        <div class="form-btn__row">
                            <div class="row-content">
                                <button class="submit-btn" type="submit" :class="{ 'submit-btn-disable': !isFormFilled }">
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                    <p>Or you have an account <nuxt-link tag="a" to="/user/login">login?</nuxt-link></p>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            username: "",
        }
    },
    computed: {
        isFormFilled() {
            if (this.email.length > 0 && this.password.length > 0 && this.username.length > 0) {
                return true;
            } else {
                return false
            }
        }
    },
    methods: {
        onSubmit() {
            if (this.isFormFilled === false) {
                return;
            }

            this.$store.dispatch("authenticateUser", {
                isLogin: false,
                email: this.email,
                password: this.password,
                displayName: this.username,
            })
                .then(() => this.$router.push("/"))
        }
    }

}
</script>

<style scoped>
.container {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    position: relative;
}

.sign-container {
    width: 100%;
    background-color: var(--white);
    border: 1px solid var(--chinese-white);
    border-radius: 5px;
    overflow: hidden;
    margin-top: 20px;
    z-index: 20;
    position: relative;
}


.sign-container a img {
    width: 100%;
    height: 100%;
    max-width: 700px;
    max-height: 500px;
    object-fit: cover;
    object-position: center;
}

.sign-container:hover {
    border-left: 1px solid var(--dark-charcoal);
}

.sign-container__form {
    padding: 50px 100px;
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

button {
    background: none;
    text-decoration: none;
    border: none;
    cursor: pointer;
    padding: 10px 20px;
}

.container-form__btn {
    display: table;
}

.form-btn__row {
    display: table-row;
}

.row-content {
    display: table-cell;
    padding: 10px;
    vertical-align: middle;
}

.submit-btn {
    color: var(--white);
    background: var(--tufts-blue);
    border: none;
    cursor: pointer;
    text-decoration: none;
    border-radius: 5px;
}

.submit-btn-disable {
    background-color: var(--chinese-silver);
}

.submit-btn:hover {
    background: var(--dazzled-blue);
}


.submit-btn-disable:hover {
    background-color: var(--grey);
    cursor: not-allowed;
}

@media screen and (max-width:990px) {
    .container {
        padding: 20px;
        padding-top: 0px;
    }
}

@media screen and (max-width:700px) {
    .sign-container__form {
        padding: 50px;
    }
}

@media screen and (max-width:500px) {
    .container {
        padding: 10px;
    }

    .sign-container__form {
        padding: 20px;
        padding-top: 50px;
    }
}

/* end of index */
</style>