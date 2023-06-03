<template>
  <div class="form-popup" id="myForm">
    <form action="#" class="form-container">
      <div class="choose-login">
        <h3 class="title">Пациент</h3>
        <div class="subtitle">
          Делитесь отзывами о врачах, записывайтесь на приём онлайн
        </div>
        <button class="button button-blue">
          <a href="#formEnterPatient">Войти</a>
        </button>
      </div>
      <div class="choose-login">
        <h3 class="title">Врач</h3>
        <div class="subtitle">
          Просматривайте свои записи, рассказывайте о ваших услугах
        </div>
        <button class="button button-blue">
          <a href="#formEnterDoctor">Войти</a>
        </button>
      </div>
      <div class="choose-login">
        <h3 class="title">Клиника</h3>
        <div class="subtitle">
          Добавляйте новых врачей, рассказывайте о себе
        </div>
        <button class="button button-blue">
          <a href="#formEnterClinic">Войти</a>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormEnterPopup",
  mounted() {
    const myForm = document.querySelector('#myForm');
    const enterLink = document.querySelector('#link-enter');

    enterLink.addEventListener('click', () => {
      openForm();
    });

    document.body.addEventListener('click', (event) => {
      if (!enterLink.contains(event.target)) {
        closeForm();
      }
    });

    myForm.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    function openForm() {
      myForm.style.display = "block";
    }

    function closeForm() {
      myForm.style.display = "none";
    }
  }
}
</script>

<style scoped>

</style>