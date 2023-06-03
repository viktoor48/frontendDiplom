<template>
  <HeaderBig></HeaderBig>
  <main class="main-wrapper">
    <div class="container">
      <div class="card-clinic__container">
        <div class="card-doctor card-clinic">
          <div class="card-doctor__row">
            <div class="card-doctor__avatar card-clinic__avatar">
              <div class="card-doctor__profile">
                <div class="card-doctor__img-wrapper">
                  <div class="card-doctor__favorite-wrapper">
                    <div class="card-doctor__favorite-icon"></div>
                  </div>
                  <img src="../images/avatar-clinic.png" alt="">
                </div>
                <div class="card-doctor__stars-container">
                  <div class="rating-result">
                    <span class="active"></span>
                    <span class="active"></span>
                    <span class="active"></span>
                    <span class="active"></span>
                    <span></span>
                  </div>
                </div>
                <a href="#" class="card-doctor__link-review">
                  27&nbsp;отзывов
                </a>
              </div>
            </div>
            <div class="card-doctor__main-content">
              <div class="card-doctor__info">
                <div class="card-doctor__name">
                  <a href="#clinicDetail" class="card-doctor__name-link clinic__name-link">
                    Стоматология «Винир»
                  </a>
                </div>
                <div class="card-doctor__spec card-clinic__spec">Стоматология</div>
                <div class="card-doctor__experience card-clinic__count-doctors">17 врачей</div>
                <div class="card-clinic__contacts-wrapper">
                  <div class="card-clinic__contacts-row">
                    <div class="card-clinic__icon-contact">
                      <img src="../images/icon-phone.svg" alt="">
                    </div>
                    <div class="card-clinic__contact-text">Открыто до 20:00</div>
                  </div>
                  <div class="card-clinic__contacts-row">
                    <div class="card-clinic__icon-contact">
                      <img src="../images/icon-phone.svg" alt="">
                    </div>
                    <div class="card-clinic__contact-text">ул. Соколовая, д. 10/16</div>
                  </div>
                  <div class="card-clinic__contacts-row">
                    <div class="card-clinic__icon-contact">
                      <img src="../images/icon-phone.svg" alt="">
                    </div>
                    <div class="card-clinic__contact-text">
                      +7 (8452) 49-27-84
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-clinic__description-block">
              <div class="card-clinic__description-text text_subtitle-2">Стоматологическая клиника «Винир» города Саратова оказывает весь спектр профильных услуг. Применятся щадящие методики работы и качественные материалы. Деятельность стоматологической клиники «Винир» лицензирована.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <FooterComponent></FooterComponent>
</template>

<script>
import HeaderBig from "@/components/HeaderBig";
import FooterComponent from "@/components/FooterComponent";
export default {
  name: "ListClinicsPage",
  components: {
    HeaderBig, FooterComponent,
  },
  props: {
    clinics: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style src="../css/reset.css"></style>
<style src="../css/style.css"></style>
<style src="../css/clinicsList.css"></style>