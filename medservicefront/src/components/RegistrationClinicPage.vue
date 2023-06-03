<template>
  <HeaderMin></HeaderMin>
  <main class="main-wrapper flex-center background-white">
    <div class="form-wrapper form-wrapper__registration">
      <div class="container">
        <div class="form__item-wrapper">
          <form action="#" class="form__item">
            <h1 class="form__title form__title-text">Регистрация клиники</h1>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input type="text" placeholder="Название" required class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text"></div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input type="text" placeholder="Адрес" required class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text"></div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input type="text" placeholder="Описание" class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text"></div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input type="text" placeholder="Специализация" required class="input" list="specialization">
                <datalist id="specialization">
                  <option value="Клиника">Клиника</option>
                  <option value="Стоматология">Стоматология</option>
                  <option value="Детская клиника">Детская клиника</option>
                  <option value="Косметология">Косметология</option>
                </datalist>
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text"></div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input type="number" placeholder="Телефон" required class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text"></div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input type="text" placeholder="Почта" required class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text"></div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input type="text" placeholder="Пароль" required class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text"></div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <div class="input-wrapper">
                <input type="text" placeholder="Повторите пароль" required class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text"></div>
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
export default {
  name: "RegistrationClinicPage",
  components: {
    HeaderMin, FooterComponent,
  }

}
</script>

<style scoped>

</style>