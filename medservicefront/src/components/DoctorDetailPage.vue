<template>
  <HeaderBig></HeaderBig>
  <main class="main-wrapper">
    <div v-if="isLoading" class="loading-spinner"></div>
    <div v-else class="container">
      <div class="doctor-intro__wrapper">
        <div class="doctor-intro">
          <div class="doctor-intro__left-side">
            <div class="doctor-intro__img-wrapper">
              <img class="doctor-intro__img" :src="require('../images/users/' + doctor.photo)" alt="">
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
              {{this.pluralize(doctor.reviewDoctors.length, ['отзыв', 'отзыва', 'отзывов'])}}
            </a>
          </div>
          <div class="doctor-intro__right-side">
            <div class="doctor-intro__name">
              <a href="#" class="doctor-intro__name-link">{{`${doctor.surname} ${doctor.name} ${doctor.lastname}`}}</a>
            </div>
            <div class="doctor-intro__city">{{doctor.city}}</div>
            <div class="doctor-intro__spec">
              <a v-for="(spec, index) in doctor.specialization.split(', ')" :key="index" href="#" class="doctor-intro__spec-link">{{ spec }}</a>
            </div>
            <p class="doctor-intro__description">{{`${doctor.surname} ${doctor.name} ${doctor.lastname}, ${doctor.specialization}, запись на прием ☎ ${doctor.getClinics[0].number}.`}}</p>
            <button class="doctor-intro__send-review b-button-blue">
              <router-link to="reviewPage">
                <span>Оставить отзыв</span>
              </router-link>
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
                  <a class="doctor-contacts__clinic-link">{{doctor.getClinics[0].name}}</a>
                </div>
                <div class="doctor-contacts__address">{{doctor.getClinics[0].address}}</div>
                <div class="card-doctor__appointment-wrapper">
                  <div class="card-doctor__appointment-item">
                    <div class="card-doctor__appointment-icon">
                      <img src="../images/icon-clinic.svg" class="appointment__icon" alt="">
                    </div>
                    <div class="card-doctor__appointment-text">В клинике</div>
                    <div class="card-doctor__appointment-price" v-if="doctor.getServices.length > 0">от&nbsp;{{findMinPrice(doctor.getServices)}}&nbsp;₽</div>
                  </div>
                </div>
                <div class="doctor-contacts__prices">
                  <div v-for="service in doctor.getServices" :key="service.id" class="doctor-contacts__prices-item">{{`${service.name} — от ${service.price}₽`}}</div>
                </div>
                <div class="card-doctor__phone">
                  <div class="card-doctor__phone-icon"></div>
                  <div class="card-doctor__phone-num">{{doctor.getClinics[0].number}}</div>
                </div>
              </div>
              <div class="doctor-contacts__info-right">
                <TimeQuantumComponent :doctor="doctor"></TimeQuantumComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rating">
        <div class="rating-wrapper">
          <div class="rating__title">Рейтинг</div>
          <div class="rating__number-row">
            <div class="rating__number">4.0</div>
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
            <div class="rating__stat-number">4.0</div>
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
import TimeQuantumComponent from "@/components/TimeQuantumComponent";
export default {
  name: "DoctorDetailPage",
  components: {
    HeaderBig, FooterComponent, TimeQuantumComponent,
  },
  data() {
    return {
      isLoading: true,
    }
  },
  methods: {
    pluralize(count, forms) {
      const cases = [2, 0, 1, 1, 1, 2];
      const index = (count % 100 > 4 && count % 100 < 20) ? 2 : cases[Math.min(count % 10, 5)];
      return `${count} ${forms[index]}`;
    },
    findMinPrice(services) {
      let minPrice = Number.MAX_VALUE;

      for (let i = 0; i < services.length; i++) {
        const price = parseInt(services[i].price);

        if (price < minPrice) {
          minPrice = price;
        }
      }

      return minPrice;
    },
    getIdFromUrl(array) {
      return array.map(url => {
        const parts = url.split('/');
        return parseInt(parts[parts.length-1]);
      })
    },
    modifiedDoctorsObject(doctors, allClinics, allServices, allTimeSlots) {
      let updatedDoctors = doctors;

      this.addPropertyToDoctors(updatedDoctors, 'services', allServices);
      this.addPropertyToDoctors(updatedDoctors, 'timeSlots', allTimeSlots);
      this.addPropertyToDoctors(updatedDoctors, 'clinics', allClinics);

      return updatedDoctors;
    },
    addPropertyToDoctors(doctors, propertyName, allElements) {
      doctors.forEach(doctor => {
        let elementIds = doctor[propertyName];
        elementIds = this.getIdFromUrl(elementIds);

        let elements = [];

        elementIds.forEach(elementId => {
          let element = allElements.find(e => e.id === elementId);
          elements.push(element);
        });

        doctor['get' + propertyName.charAt(0).toUpperCase() + propertyName.slice(1)] = elements;
      });

      return doctors;
    },
  },
  computed: {
    doctor() {
      let doctors = this.$store.getters.allDoctors;
      let clinics = this.$store.getters.allClinics;
      let services = this.$store.getters.allServices;
      let slots = this.$store.getters.allTimeSlots;
      let updatedDoctors = this.modifiedDoctorsObject(doctors, clinics, services, slots);

      const id = this.$route.query.id;
      const doctor = updatedDoctors.find(doctor => doctor.id == id);
      console.log(doctors.find(doctor => doctor.id == id));
      return doctor;
    },
    currentClinic() {
      const currentClinic = this.$store.getters.currentClinic;

      return currentClinic;
    },
  },
  async mounted() {
    try {
      await this.$store.dispatch('fetchDoctors');
      await this.$store.dispatch('fetchClinics');
      await this.$store.dispatch('fetchServices');
      await this.$store.dispatch('fetchTimeSlots');
      this.isLoading = false;
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