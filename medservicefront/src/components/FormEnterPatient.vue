<template>
  <HeaderMin></HeaderMin>
  <main class="main-wrapper flex-center background-white">
    <div class="form-wrapper">
      <div class="container">
        <div class="form__item-wrapper">
          <form @submit.prevent="onSubmit" class="form__item">
            <h1 class="form__title form__title-text">Личный кабинет пациента</h1>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input v-model="login" type="text" placeholder="Почта" class="input" name="login">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text">{{ errors.login }}</div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input v-model="password" type="password" placeholder="Пароль" class="input" name="password">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text">{{ errors.password }}</div>
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
import * as Yup from 'yup';


export default {
  name: "FormEnterPatient",
  components: {
    HeaderMin, FooterComponent
  },
  data() {
    return {
      login: '',
      password: '',
      errors: {},
    }
  },
  methods: {
    async onSubmit() {
      const schema = Yup.object().shape({
        login: Yup.string()
            .email('Введите корректный адрес электронной почты')
            .required('Это поле обязательно для заполнения'),
        password: Yup.string()
            .matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/, 'Пароль должен содержать латинские символы и цифры')
            .required('Это поле обязательно для заполнения')
            .min(8, 'Пароль должен содержать не менее 8 символов')
            .test('not-all-digits', 'Пароль не может состоять только из цифр', function(value) {
              return !/^\d+$/.test(value);
            }),
      });

      try {
        await schema.validate({ login: this.login, password: this.password }, { abortEarly: false });
        this.errors = {};
        // форма прошла валидацию, можно отправлять данные на сервер
        await this.$store.dispatch('onLogin', {
          login: this.login,
          password: this.password,
          role: UserRoles.Client,
        });
        const token = this.$store.getters.getToken;
        const userRole = this.$store.getters.getUserRole;
        if (token == null) {
          alert('Такого пользователя не существует');
        } else {
          console.log(token);
          console.log(userRole);
          router.push({name: 'home'});
        }
      } catch (error) {
        const errors = error.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});
        this.errors = errors;
      }
    },
  },
}
</script>