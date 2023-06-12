<template>
  <HeaderMin></HeaderMin>
  <main class="main-wrapper flex-center background-white">
    <div class="form-wrapper form-wrapper__registration">
      <div class="container">
        <div class="form__item-wrapper">
          <form @submit.prevent="onSubmit" novalidate class="form__item">
            <h1 class="form__title form__title-text">Регистрация клиники</h1>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input v-model="form.name" type="text" placeholder="Название" required class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text">{{ errors.name }}</div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input v-model="form.address" type="text" placeholder="Адрес" required class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text">{{ errors.address }}</div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input v-model="form.description" type="text" placeholder="Описание" class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text">{{ errors.description }}</div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input v-model="form.city" type="text" placeholder="Липецк" class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text">{{ errors.city }}</div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input v-model="form.specialization" type="text" placeholder="Специализация" required class="input" list="specialization">
                <datalist id="specialization">
                  <option value="Клиника">Клиника</option>
                  <option value="Стоматология">Стоматология</option>
                  <option value="Детская клиника">Детская клиника</option>
                  <option value="Косметология">Косметология</option>
                </datalist>
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text">{{ errors.specialization }}</div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input v-model="form.number" type="text" placeholder="Телефон" required class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text">{{ errors.number }}</div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input v-model="form.email" type="text" placeholder="Почта" required class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text">{{ errors.email }}</div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input v-model="form.password" type="text" placeholder="Пароль" required class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text">{{ errors.password }}</div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input v-model="form.confirmPassword" type="text" placeholder="Повторите пароль" required class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text">{{ errors.confirmPassword }}</div>
              </div>
            </div>
            <div class="form__wrapper-btn">
              <button type="submit" class="form__btn button">Зарегистрироваться</button>
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
import * as Yup from "yup";
import {UserRoles} from "@/constants/constants";
import router from "@/router";
export default {
  name: "RegistrationClinicPage",
  components: {
    HeaderMin, FooterComponent,
  },
  data() {
    return {
      form: {
        name: "",
        address: "",
        number: "",
        city: "",
        specialization: "",
        description: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      errors: {},
    }
  },
  methods: {
    async onSubmit() {
      const schema = Yup.object().shape({
        name: Yup.string()
            .max(36, "Максимальная длина имени - 36 символов")
            .required("Поле Имя обязательно для заполнения"),
        address: Yup.string()
            .required("Поле Адрес обязательно для заполнения"),
        number: Yup.string()
            .matches(/^(\+7|8)\d{10}$/, "Введите корректный номер телефона")
            .required("Поле Телефон обязательно для заполнения"),
        email: Yup.string()
            .email("Введите корректный адрес электронной почты")
            .required("Поле Почта обязательно для заполнения"),
        specialization: Yup.string()
            .required("Поле Специализация обязательно для заполнения"),
        city: Yup.string()
            .required("Поле Город обязательно для заполнения"),
        password: Yup.string()
            .matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/, 'Пароль должен содержать латинские символы и цифры')
            .required('Это поле обязательно для заполнения')
            .min(8, 'Пароль должен содержать не менее 8 символов')
            .test('not-all-digits', 'Пароль не может состоять только из цифр', function(value) {
              return !/^\d+$/.test(value);
            }),
        confirmPassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Пароли должны совпадать"
        ),
      });

      try {
        await schema.validate(this.form, { abortEarly: false });
        this.errors = {};
        const response = await this.$store.dispatch('onRegister', {form: this.form, role: UserRoles.Clinic});
        console.log(response);
        if (response.status >= 400) {
          alert('Пользователь с таким email уже существует');
        } else {
          router.push({name: 'home'});
        }
      } catch (error) {
        const errors = error.inner ? error.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {}) : {};
        this.errors = errors;
        console.log(error);
      }
    },
  },
}
</script>

<style scoped>

</style>