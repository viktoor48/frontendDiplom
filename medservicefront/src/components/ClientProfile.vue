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
                <input type="number" placeholder="+7 (919) 256-93-30" class="personal-area__data-text">
              </div>
            </div>
            <div class="personal-area__data-row">
              <div class="personal-area__data-icon">
                <img src="../images/icon-edit.svg" alt="">
              </div>
              <div class="personal-area__data-content">
                <input type="text" placeholder="Косенков Виктор Дмитриевич" class="personal-area__data-text">
              </div>
            </div>
            <div class="personal-area__data-row">
              <div class="personal-area__data-icon">
                <img src="../images/icon-calendar.svg" alt="">
              </div>
              <div class="personal-area__data-content">
                <input type="text" placeholder="Дата рождения" class="personal-area__data-text">
              </div>
            </div>
            <div class="personal-area__data-row">
              <div class="personal-area__data-icon">
                <img src="../images/icon-mail.svg" alt="">
              </div>
              <div class="personal-area__data-content">
                <input type="text" placeholder="kosenkov.viktor@list.ru" class="personal-area__data-text">
              </div>
            </div>
            <div class="personal-area__data-row">
              <div class="personal-area__data-icon">
                <img src="../images/icon-gender.svg" alt="">
              </div>
              <div class="personal-area__data-content">
                <input type="text" placeholder="Мужской" class="personal-area__data-text">
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
          <div class="personal-area__record-title big-title">Записи на прием</div>
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
          <div class="personal-area__record-title big-title">Избранное</div>
          <div class="personal-area__record-list">
            <div class="personal-area__record-item doctor-card__min">
              <div class="doctor-card__left-side">
                <div class="doctor-card__img-wrapper">
                  <img src="../images/avatarDoctor.png" alt="">
                </div>
              </div>
              <div class="doctor-card__right-side">
                <div class="doctor-card__name text_subtitle-1">Молчанова Валентина Ивановна</div>
                <div class="doctor-card__specialization secondary-text">Акушер, гинеколог</div>
              </div>
              <div class="card-doctor__favorite-wrapper active">
                <div class="card-doctor__favorite-icon"></div>
              </div>
            </div>
            <div class="personal-area__record-item doctor-card__min">
              <div class="doctor-card__left-side">
                <div class="doctor-card__img-wrapper">
                  <img src="../images/avatarDoctor.png" alt="">
                </div>
              </div>
              <div class="doctor-card__right-side">
                <div class="doctor-card__name text_subtitle-1">Молчанова Валентина Ивановна</div>
                <div class="doctor-card__specialization secondary-text">Акушер, гинеколог</div>
              </div>
              <div class="card-doctor__favorite-wrapper active">
                <div class="card-doctor__favorite-icon"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="personal-area__item-container">
          <div class="personal-area__record-title big-title">Ваши отзывы</div>
          <div class="personal-area__review-title secondary-text">
            Оставляйте отзывы на ПроДокторов и помогайте другим пациентам с выбором
          </div>
          <div class="personal-area__btn-review-wrapper">
            <button class="button">Оставить отзыв</button>
          </div>
        </div>
        <div class="personal-area__item-container">
          <div class="personal-area__exit-wrapper">
            <div class="personal-area__exit-icon-wrapper">
              <img src="../images/icon-exit.svg" alt="">
            </div>
            <div @click="onLogout" class="personal-area__exit-content">
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
import router from "@/router";
export default {
  name: "clientProfile",
  components: {HeaderMin, FooterComponent},
  methods: {
    onLogout() {
      this.$store.dispatch('onLogout');
      router.push({name: 'home'});
    },
  },
}
</script>

<style scoped>

</style>