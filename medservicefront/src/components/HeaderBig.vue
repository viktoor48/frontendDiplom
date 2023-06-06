<template>
  <header class="header-wrapper">
    <div class="container">
      <div class="header">
        <div class="header__row">
          <div class="header__column">
            <div class="header__location">
              Липецк
            </div>
          </div>
          <div class="header__column">
            <div class="header__logo">
              <a href="#/">
                <img src="../images/logo.svg" alt="">
              </a>
            </div>
          </div>
          <div class="header__column">
            <nav class="header__menu">
              <ul class="user-nav">
                <li v-if="token == null" class="user-nav__item" id="link-enter" >
                  <a class="user-nav__link button" href="#">
                    Войти
                  </a>
                  <FormEnterPopup></FormEnterPopup>
                </li>
                <li v-else class="user-nav__item">
                  <a class="user-nav__link button" :href="`#${userRole}Profile`">Личный кабинет</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="search-wrapper">
      <div class="container">
        <div class="search">
          <div class="search__row">
            <div class="search__input-wrapper">
              <input class="search__input" type="search" placeholder="Врачи, клиники, услуги">
            </div>
            <button class="search__button b-button-red">Найти</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import FormEnterPopup from "@/components/FormEnterPopup";
export default {
  name: "HeaderBig",
  components: {
    FormEnterPopup,
  },

  data() {
    return {
      token: this.$store.getters.getToken,
      userRole: this.$store.getters.getUserRole,
    }
  },
  methods: {

  },
  watch: {
    token(old) {
      console.log(old);
    }
  },
  computed: {
    isToken() {
      return this.$store.getters.getToken;
    },
    getRole() {
      return this.$store.getters.getUserRole;
    },
  },
  created() {

  },
  mounted() {

  }
}
</script>

