<template>
  <HeaderBig></HeaderBig>
  <main class="main-wrapper">
    <div class="container" v-if="doctor">
      <div class="doctor-intro__wrapper">
        <div class="doctor-intro">
          <div class="doctor-intro__left-side">
            <div class="doctor-intro__img-wrapper">
              <img class="doctor-intro__img" :src="require('../images/' + doctor.photo)" alt="">
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
            <a href="#" class="doctor-intro__link-review">
              27&nbsp;отзывов
            </a>
          </div>
          <div class="doctor-intro__right-side">
            <div class="doctor-intro__name">
              <a href="#" class="doctor-intro__name-link">{{`${doctor.surname} ${doctor.name} ${doctor.lastname}`}}</a>
            </div>
            <div class="doctor-intro__city">Липецк</div>
            <div class="doctor-intro__spec">
              <a v-for="(spec, index) in doctor.specialization.split(', ')" :key="index" href="#" class="doctor-intro__spec-link">{{ spec }}</a>
            </div>
            <p class="doctor-intro__description">{{`${doctor.surname} ${doctor.name} ${doctor.lastname}, ${doctor.specialization}, запись на прием ☎ (8452) 31-81-36).`}}</p>
            <button class="doctor-intro__send-review b-button-blue">
              <span>Оставить отзыв</span>
            </button>
          </div>
        </div>
      </div>
      <div class="doctor-contacts">
        <h2 class="doctor-contacts__title">Записаться на прием к врачу</h2>
        <div class="doctor-contacts__body">
          <div class="doctor-contacts__map-preview">
            <div class="doctor-contacts__map">
              <span class="doctor-contacts__map-text">Посмотреть на карте</span>
            </div>
          </div>
          <div class="doctor-contacts__info">
            <div class="doctor-contacts__info-row">
              <div class="doctor-contacts__info-left">
                <div class="doctor-contacts__clinic-name">
                  <a class="doctor-contacts__clinic-link">«Лечебно-диагностический центр №1» на Коммунальной</a>
                </div>
                <div class="doctor-contacts__address">пл. Коммунальная, д. 9</div>
                <div class="card-doctor__appointment-wrapper">
                  <div class="card-doctor__appointment-item">
                    <div class="card-doctor__appointment-icon">
                      <img src="../images/icon-clinic.svg" class="appointment__icon" alt="">
                    </div>
                    <div class="card-doctor__appointment-text">В клинике</div>
                    <div class="card-doctor__appointment-price">от&nbsp;800&nbsp;₽</div>
                  </div>
                </div>
                <div class="doctor-contacts__prices">
                  <div class="doctor-contacts__prices-item">Акушер (от 14 лет) — от 1500₽</div>
                  <div class="doctor-contacts__prices-item">Врач УЗИ (от 14 лет) — от 800₽</div>
                  <div class="doctor-contacts__prices-item">Гинеколог (от 14 лет) — от 1500₽</div>
                </div>
                <div class="card-doctor__phone">
                  <div class="card-doctor__phone-icon"></div>
                  <div class="card-doctor__phone-num">(4742) 52-26-07</div>
                </div>
              </div>
              <div class="doctor-contacts__info-right">
                <div class="time-quantums-container">
                  <div class="time-quantums-navigation">
                    <button class="time-quantum-nav-button time-quantum-nav-back">&#8249;</button>
                    <div class="time-quantum-nav-week">1-7 декабря</div>
                    <button class="time-quantum-nav-button time-quantum-nav-forward">&#8250;</button>
                  </div>
                  <div class="time-quantums-days">
                    <div class="time-quantum-day active">Пн</div>
                    <div class="time-quantum-day">Вт</div>
                    <div class="time-quantum-day">Ср</div>
                    <div class="time-quantum-day">Чт</div>
                    <div class="time-quantum-day">Пт</div>
                    <div class="time-quantum-day">Сб</div>
                    <div class="time-quantum-day">Вс</div>
                  </div>
                  <div class="time-quantums-slots">
                    <div class="time-quantum-slot">
                      <div class="time-quantum-slot-time">8:00-10:00</div>
                    </div>
                    <div class="time-quantum-slot">
                      <div class="time-quantum-slot-time">10:00-12:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rating">
        <div class="rating-wrapper">
          <div class="rating__title">Рейтинг</div>
          <div class="rating__number-row">
            <div class="rating__number">5.0</div>
            <div class="card-doctor__stars-container">
              <div class="rating-result">
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="rating__stat-wrapper accordion">
          <div class="rating__stat-title">Отзывы</div>
          <div class="rating__number-row">
            <div class="rating__stat-number">5.0</div>
            <div class="card-doctor__stars-container">
              <div class="rating-result">
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="rating__stat-expansion panel">
          <div class="rating__stat-row">
            <div class="rating__stat-info-block">
              <span class="rating__stat-info-left">Народный рейтинг</span>
              <span class="rating__stat-info-right">+9.8</span>
            </div>
            <div class="rating__stat-bar">
              <div class="rating__stat-progress"></div>
            </div>
          </div>
          <div class="rating__stat-row">
            <div class="rating__stat-info-block">
              <span class="rating__stat-info-left">Народный рейтинг</span>
              <span class="rating__stat-info-right">+9.8</span>
            </div>
            <div class="rating__stat-bar">
              <div class="rating__stat-progress"></div>
            </div>
          </div>
          <div class="rating__stat-row">
            <div class="rating__stat-info-block">
              <span class="rating__stat-info-left">Народный рейтинг</span>
              <span class="rating__stat-info-right">+9.8</span>
            </div>
            <div class="rating__stat-bar">
              <div class="rating__stat-progress"></div>
            </div>
          </div>
          <div class="rating__stat-row">
            <div class="rating__stat-info-block">
              <span class="rating__stat-info-left">Народный рейтинг</span>
              <span class="rating__stat-info-right">+9.8</span>
            </div>
            <div class="rating__stat-bar">
              <div class="rating__stat-progress"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="review-doctor">
        <div class="review-doctor__wrapper">
          <div class="review-doctor__header">
            <div class="review-doctor__title">Отзывы</div>
            <button class="review-doctor__review-btn b-button-blue">Оставить отзыв</button>
          </div>
          <div class="review-doctor__container">
            <div class="review-doctor__card">
              <div class="review-doctor__card-aside">
                <div class="review-doctor__author-name">Пациент</div>
                <div class="review-doctor__author-phone">+7-951-30XXXXX</div>
                <div class="review-doctor__date-published">26 апреля в 19:17</div>
                <div class="review-doctor__rate-wrapper">
                  <div class="review-doctor__rate">
                    <div class="review-doctor__rate-num text_subtitle">+2.0</div>
                    <div class="review-doctor__rate-name text_subtitle">отлично</div>
                    <div class="review-doctor__detail-rate">
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="review-doctor__card-body">
                <div class="review-doctor__card-comments">
                  <div class="review-doctor__card-logo"></div>
                  <div class="review-doctor__card-comment-wrapper">
                    <div class="review-doctor__card-comment-title">Понравилось</div>
                    <div class="review-doctor__card-comment">Врач очень располагает к себе. Никакого дискомфорта во время осмотра и УЗИ. Всё аккуратно и тактично. Ответила на все вопросы. Ничего не навязывает: всё по делу. Во время осмотра всё комментирует доступным языком, и после приёма выдаётся подробный отчёт УЗИ. Рекомендую данного специалиста, особенно девочкам подросткам, очень комфортно на приёме.</div>
                  </div>
                  <div class="review-doctor__card-comment-wrapper">
                    <div class="review-doctor__card-comment-title">Комментарий</div>
                    <div class="review-doctor__card-comment">Пришла сдать анализы для планирования беременности.</div>
                  </div>
                </div>
                <footer class="review-doctor__card-footer">
                  <div class="review-doctor__footer-date">
                    <div class="review-doctor__footer-icon"></div>
                    <div class="review-doctor__date">Посетили&nbsp;в апреле 2023</div>
                  </div>
                  <div class="review-doctor__footer-address">
                    «Лечебно-диагностический центр №1» на Коммунальной-пл. Коммунальная, д. 9
                  </div>
                </footer>
              </div>
            </div>
            <div class="review-doctor__card">
              <div class="review-doctor__card-aside">
                <div class="review-doctor__author-name">Пациент</div>
                <div class="review-doctor__author-phone">+7-951-30XXXXX</div>
                <div class="review-doctor__date-published">26 апреля в 19:17</div>
                <div class="review-doctor__rate-wrapper">
                  <div class="review-doctor__rate">
                    <div class="review-doctor__rate-num text_subtitle">+2.0</div>
                    <div class="review-doctor__rate-name text_subtitle">отлично</div>
                    <div class="review-doctor__detail-rate">
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="review-doctor__card-body">
                <div class="review-doctor__card-comments">
                  <div class="review-doctor__card-logo"></div>
                  <div class="review-doctor__card-comment-wrapper">
                    <div class="review-doctor__card-comment-title">Понравилось</div>
                    <div class="review-doctor__card-comment">Врач очень располагает к себе. Никакого дискомфорта во время осмотра и УЗИ. Всё аккуратно и тактично. Ответила на все вопросы. Ничего не навязывает: всё по делу. Во время осмотра всё комментирует доступным языком, и после приёма выдаётся подробный отчёт УЗИ. Рекомендую данного специалиста, особенно девочкам подросткам, очень комфортно на приёме.</div>
                  </div>
                  <div class="review-doctor__card-comment-wrapper">
                    <div class="review-doctor__card-comment-title">Комментарий</div>
                    <div class="review-doctor__card-comment">Пришла сдать анализы для планирования беременности.</div>
                  </div>
                </div>
                <footer class="review-doctor__card-footer">
                  <div class="review-doctor__footer-date">
                    <div class="review-doctor__footer-icon"></div>
                    <div class="review-doctor__date">Посетили&nbsp;в апреле 2023</div>
                  </div>
                  <div class="review-doctor__footer-address">
                    «Лечебно-диагностический центр №1» на Коммунальной-пл. Коммунальная, д. 9
                  </div>
                </footer>
              </div>
            </div>
            <div class="review-doctor__card">
              <div class="review-doctor__card-aside">
                <div class="review-doctor__author-name">Пациент</div>
                <div class="review-doctor__author-phone">+7-951-30XXXXX</div>
                <div class="review-doctor__date-published">26 апреля в 19:17</div>
                <div class="review-doctor__rate-wrapper">
                  <div class="review-doctor__rate">
                    <div class="review-doctor__rate-num text_subtitle">+2.0</div>
                    <div class="review-doctor__rate-name text_subtitle">отлично</div>
                    <div class="review-doctor__detail-rate">
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="review-doctor__card-body">
                <div class="review-doctor__card-comments">
                  <div class="review-doctor__card-logo"></div>
                  <div class="review-doctor__card-comment-wrapper">
                    <div class="review-doctor__card-comment-title">Понравилось</div>
                    <div class="review-doctor__card-comment">Врач очень располагает к себе. Никакого дискомфорта во время осмотра и УЗИ. Всё аккуратно и тактично. Ответила на все вопросы. Ничего не навязывает: всё по делу. Во время осмотра всё комментирует доступным языком, и после приёма выдаётся подробный отчёт УЗИ. Рекомендую данного специалиста, особенно девочкам подросткам, очень комфортно на приёме.</div>
                  </div>
                  <div class="review-doctor__card-comment-wrapper">
                    <div class="review-doctor__card-comment-title">Комментарий</div>
                    <div class="review-doctor__card-comment">Пришла сдать анализы для планирования беременности.</div>
                  </div>
                </div>
                <footer class="review-doctor__card-footer">
                  <div class="review-doctor__footer-date">
                    <div class="review-doctor__footer-icon"></div>
                    <div class="review-doctor__date">Посетили&nbsp;в апреле 2023</div>
                  </div>
                  <div class="review-doctor__footer-address">
                    «Лечебно-диагностический центр №1» на Коммунальной-пл. Коммунальная, д. 9
                  </div>
                </footer>
              </div>
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
  name: "DoctorDetailPage",
  components: {
    HeaderBig, FooterComponent,
  },
  data() {
    return {

    }
  },
  computed: {
    doctor() {
      const doctors = this.$store.getters.allDoctors;
      const id = this.$route.query.id;
      console.log(doctors.find(doctor => doctor.id == id));
      return doctors.find(doctor => doctor.id == id);
    },
    currentClinic() {
      const currentClinic = this.$store.getters.currentClinic;

      return currentClinic;
    },
  },
  async mounted() {
    try {
      await this.$store.dispatch('fetchDoctors');
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style src="../css/reset.css"></style>
<style src="../css/style.css"></style>
<style src="../css/doctors.css"></style>
<style src="../css/doctor-details.css"></style>