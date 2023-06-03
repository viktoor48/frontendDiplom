<template>
  <HeaderMin></HeaderMin>
  <main class="main-wrapper flex-center background-white">
    <div class="form-wrapper">
      <div class="container">
        <div class="form__item-wrapper">
          <form action="#" class="form__item">
            <h1 class="form__title form__title-text">Личный кабинет пациента</h1>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input type="text" placeholder="Почта" class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text"></div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input type="text" placeholder="Пароль" class="input">
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
export default {
  name: "FormEnterPatient",
  components: {
    HeaderMin, FooterComponent
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped>

</style>