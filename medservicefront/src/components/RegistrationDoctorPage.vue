<template>
  <HeaderMin></HeaderMin>
  <main class="main-wrapper flex-center background-white">
    <div class="form-wrapper form-wrapper__registration">
      <div class="container">
        <div class="form__item-wrapper">
          <form @submit.prevent="onSubmit" action="#" class="form__item" novalidate>
            <h1 class="form__title form__title-text">Регистрация врача</h1>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input v-model="form.name" type="text" placeholder="Имя" required class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text">{{ errors.name }}</div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input v-model="form.surname" type="text" placeholder="Фамилия" required class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text">{{ errors.surname }}</div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input v-model="form.lastname" type="text" placeholder="Отчество" class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text">{{ errors.lastname }}</div>
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
                <input v-model="form.specialization" type="email" placeholder="Специализация" required class="input" list="specialization" multiple>
                <datalist id="specialization">
                  <option value="Аллерголог">Аллерголог</option>
                  <option value="Анестезиолог-реаниматолог">Анестезиолог-реаниматолог</option>
                  <option value="Эпидемиолог">Эпидемиолог</option>
                  <option value="Кардиолог">Кардиолог</option>
                  <option value="Онколог">Онколог</option>
                  <option value="Травматолог-ортопед">Травматолог-ортопед</option>
                  <option value="Физиотерапевт">Физиотерапевт</option>
                </datalist>
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text">{{ errors.specialization }}</div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input v-model="form.description" type="text" placeholder="Описание" required class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text">{{ errors.description }}</div>
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
              <button class="form__btn button">Зарегистрироваться</button>
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
  name: "RegistrationDoctorPage",
  data() {
    return {
      form: {
        name: "",
        surname: "",
        lastname: "",
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
  components: {
    HeaderMin, FooterComponent,
  },
  methods: {
    async onSubmit() {
      const schema = Yup.object().shape({
        name: Yup.string()
            .max(20, "Максимальная длина имени - 20 символов")
            .required("Поле Имя обязательно для заполнения"),
        surname: Yup.string()
            .max(30, "Максимальная длина фамилии - 30 символов")
            .required("Поле Фамилия обязательно для заполнения"),
        lastname: Yup.string().max(
            30,
            "Максимальная длина отчества - 30 символов"
        ),
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

        const response = await this.$store.dispatch('onRegister', {form: this.form, role: UserRoles.Doctor});
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
      }
    },
  },
}
</script>

<style src="../css/reset.css"></style>
<style src="../css/style.css"></style>
<style src="../css/form.css"></style>