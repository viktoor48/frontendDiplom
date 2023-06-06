<template>
  <HeaderMin></HeaderMin>
  <main class="main-wrapper">
    <div class="min-container">
      <div class="personal-area">
        <div class="personal-area__profile">
          <div class="personal-area__profile-row">
            <div class="personal-area__avatar-wrapper">
              <img src="../images/icon-profile.svg" alt="">
            </div>
            <div class="personal-area__column">
              <div class="personal-area__title">+7 919 256-93-30</div>
              <div class="personal-area__subtitle">Профиль</div>
            </div>
          </div>
          <div class="personal-area__personal-data">
            <div class="personal-area__data-row">
              <div class="personal-area__data-icon">
                <img src="../images/icon-phone.svg" alt="">
              </div>
              <div class="personal-area__data-content">
                <input type="number" placeholder="+7 (8452) 49-27-84" class="personal-area__data-text">
              </div>
            </div>
            <div class="personal-area__data-row">
              <div class="personal-area__data-icon">
                <img src="../images/icon-edit.svg" alt="">
              </div>
              <div class="personal-area__data-content">
                <input type="text" placeholder="Стоматология Винир" class="personal-area__data-text">
              </div>
            </div>
            <div class="personal-area__data-row">
              <div class="personal-area__data-icon">
                <img src="../images/icon-edit.svg" alt="">
              </div>
              <div class="personal-area__data-content">
                <input type="text" placeholder="Стоматология" class="personal-area__data-text">
              </div>
            </div>
            <div class="personal-area__data-row">
              <div class="personal-area__data-icon">
                <img src="../images/icon-edit.svg" alt="">
              </div>
              <div class="personal-area__data-content">
                <input type="text" placeholder="ул. Соколовая, д. 10/16" class="personal-area__data-text">
              </div>
            </div>
            <div class="personal-area__data-row">
              <div class="personal-area__data-icon">
                <img src="../images/icon-edit.svg" alt="">
              </div>
              <div class="personal-area__data-content">
                <input type="text" placeholder="Липецк" class="personal-area__data-text">
              </div>
            </div>
            <div class="personal-area__data-row">
              <div class="personal-area__data-icon">
                <img src="../images/icon-edit.svg" alt="">
              </div>
              <div class="personal-area__data-content">
                <textarea class="personal-area__data-textarea" placeholder="Стоматологическая клиника «Винир» города Саратова оказывает весь спектр профильных услуг. Применятся щадящие методики работы и качественные материалы. Деятельность стоматологической клиники «Винир» лицензирована."></textarea>
              </div>
            </div>
          </div>
          <div class="personal-area__action-wrapper">
            <button class="personal-area__btn-edit button">Изменить</button>
            <button disabled class="personal-area__btn-save button">
              Сохранить
            </button>
          </div>
        </div>
        <div class="personal-area__item-container">
          <div class="personal-area__record-title big-title">Врачи</div>
          <div class="personal-area__record-list">
            <div class="personal-area__record-item doctor-card__min">
              <div class="doctor-card__left-side">
                <div class="doctor-card__img-wrapper">
                  <img src="../images/avatarDoctor.png" alt="">
                </div>
              </div>
              <div class="doctor-card__right-side">
                <div class="doctor-card__date secondary-text">
                  13 мая (сб), 10:40
                </div>
                <div class="doctor-card__name text_subtitle-1">Молчанова Валентина Ивановна</div>
                <div class="doctor-card__service secondary-text">Акушер</div>
              </div>
            </div>
            <div class="personal-area__record-item doctor-card__min">
              <div class="doctor-card__left-side">
                <div class="doctor-card__img-wrapper">
                  <img src="../images/avatarDoctor.png" alt="">
                </div>
              </div>
              <div class="doctor-card__right-side">
                <div class="doctor-card__date secondary-text">
                  13 мая (сб), 10:40
                </div>
                <div class="doctor-card__name text_subtitle-1">Молчанова Валентина Ивановна</div>
                <div class="doctor-card__service secondary-text">Акушер</div>
              </div>
            </div>
            <div class="personal-area__record-item doctor-card__min">
              <div class="doctor-card__left-side">
                <div class="doctor-card__img-wrapper">
                  <img src="../images/avatarDoctor.png" alt="">
                </div>
              </div>
              <div class="doctor-card__right-side">
                <div class="doctor-card__date secondary-text">
                  13 мая (сб), 10:40
                </div>
                <div class="doctor-card__name text_subtitle-1">Молчанова Валентина Ивановна</div>
                <div class="doctor-card__service secondary-text">Акушер</div>
              </div>
            </div>
          </div>
        </div>
        <div class="personal-area__item-container">
          <div class="personal-area__record-title big-title">Добавить врача</div>
          <div class="personal-area__form-container">
            <form action="#" class="personal-area__form-add form__item" novalidate>
              <div class="form__field-wrapper">
                <div class="input-wrapper">
                  <input type="text" placeholder="Имя" required class="input">
                </div>
                <div class="messages-wrapper">
                  <div class="messages__message error--text"></div>
                </div>
              </div>
              <div class="form__field-wrapper">
                <div class="input-wrapper">
                  <input type="text" placeholder="Фамилия" required class="input">
                </div>
                <div class="messages-wrapper">
                  <div class="messages__message error--text"></div>
                </div>
              </div>
              <div class="form__field-wrapper">
                <div class="input-wrapper">
                  <input type="text" placeholder="Отчество" class="input">
                </div>
                <div class="messages-wrapper">
                  <div class="messages__message error--text"></div>
                </div>
              </div>
              <div class="form__field-wrapper">
                <div class="input-wrapper">
                  <input type="text" placeholder="Телефон" required class="input">
                </div>
                <div class="messages-wrapper">
                  <div class="messages__message error--text"></div>
                </div>
              </div>
              <div class="form__field-wrapper">
                <div class="input-wrapper">
                  <input type="email" placeholder="Специализация" required class="input" list="specialization" multiple>
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
                  <div class="messages__message error--text"></div>
                </div>
              </div>
              <div class="form__field-wrapper">
                <div class="input-wrapper">
                  <input type="text" placeholder="Описание" required class="input">
                </div>
                <div class="messages-wrapper">
                  <div class="messages__message error--text"></div>
                </div>
              </div>
              <div class="form__wrapper-btn">
                <button class="form__btn button">Добавить врача</button>
              </div>
            </form>
          </div>
        </div>
        <div class="personal-area__item-container">
          <div class="personal-area__exit-wrapper">
            <div class="personal-area__exit-icon-wrapper">
              <img src="../images/icon-exit.svg" alt="">
            </div>
            <div class="personal-area__exit-content">
              <div class="personal-area__exit-title text_subtitle-1">Выйти</div>
              <div class="personal-area__exit-subtitle text_subtitle-2">выход из аккаунта</div>
            </div>
          </div>
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
  name: "ClinicProfile",
  components: {HeaderMin, FooterComponent}

}
</script>

<style src="../css/reset.css"></style>
<style src="../css/style.css"></style>
<style src="../css/personal-area.css"></style>
<style src="../css/form.css"></style>
<style src="../css/clinic-profile.css"></style>