<template>
  <HeaderMin></HeaderMin>
  <main class="main-wrapper flex-center background-white">
    <div class="form-wrapper">
      <div class="container">
        <div class="form__item-wrapper">
          <form action="#" @submit.prevent="onSubmit" class="form__item">
            <h1 class="form__title form__title-text">Личный кабинет пациента</h1>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input v-model="login" type="text" placeholder="Почта" class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text"></div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input v-model="password" type="text" placeholder="Пароль" class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text"></div>
              </div>
            </div>
            <div class="form__wrapper-btn">
              <button class="form__btn button">Войти</button>
            </div>
            <div class="reg-info">
              <a href="#registrationPatient" class="reg-info__btn">Регистрация пациента</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
  <FooterComponent></FooterComponent>
</template>

<script>
import HeaderMin from "@/components/HeaderMin";
import FooterComponent from "@/components/FooterComponent";
import {UserRoles} from "@/constants/constants";
import router from "@/router";

export default {
  name: "FormEnterPatient",
  components: {
    HeaderMin, FooterComponent
  },
  data() {
    return {
      login: '',
      password: '',
    }
  },
  methods: {
    async onSubmit() {
      //нужно будет добавить валидацию
      await this.$store.dispatch('onLogin', {
        login: this.login,
        password: this.password,
        role: UserRoles.Client,
      });
      const token = this.$store.getters.getToken;
      const userRole = this.$store.getters.getUserRole;
      if (token == null) {
        alert('такого нету');
      } else {
        console.log(token);
        console.log(userRole);
        router.push({name: 'home'});
      }
      //тут должен быть then и дальнейший редирект на дом страницу, сначала реализовать метод onLogin, а в нем проверку на сущ пользователя;
    },
  },
}
</script>