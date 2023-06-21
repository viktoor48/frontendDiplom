<template>
  <HeaderBig></HeaderBig>
  <main class="main-wrapper">
    <div v-if="isLoading" class="loading-spinner"></div>
    <div v-else class="container">
      <div class="clinic-intro__wrapper">
        <div class="doctor-intro">
          <div class="doctor-intro__left-side">
            <div class="doctor-intro__img-wrapper">
              <img class="doctor-intro__img" :src="require('../images/users/' + getClinic.photo)" alt="">
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
              0&nbsp;отзывов
            </a>
          </div>
          <div class="doctor-intro__right-side">
            <div class="doctor-intro__name">
              <div class="doctor-intro__name-link clinic-intro__name">{{ getClinic.name }}</div>
            </div>
            <div class="doctor-intro__city">{{ getClinic.city }}</div>
            <div class="doctor-intro__spec">
              <div class="clinic-intro__spec">{{ getClinic.specialization }}</div>
            </div>
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
                <div class="card-clinic__contact-text">{{ getClinic.address }}</div>
              </div>
              <div class="card-clinic__contacts-row">
                <div class="card-clinic__icon-contact">
                  <img src="../images/icon-phone.svg" alt="">
                </div>
                <div class="card-clinic__contact-text">
                  {{ getClinic.number }}
                </div>
              </div>
            </div>
            <p class="clinic-intro__description">{{ getClinic.description }}</p>
            <button class="doctor-intro__send-review b-button-blue">
              <router-link to="reviewPage">
                <span>Оставить отзыв</span>
              </router-link>
            </button>
          </div>
        </div>
      </div>
      <div class="clinic-intro__doctor-list">
        <div class="clinic__title-row">
          <h2 class="doctor-contacts__title">{{`Врачи клиники ${getClinic.name}`}}</h2>
          <span class="clinic__doctors-count">{{ getClinic.doctor.length }} врач</span>
        </div>
        <div class="card-doctor__container">
          <div class="card-doctor">
            <div v-for="doctor in getClinic.getDoctor" :key="doctor.id" class="card-doctor__row">
              <div class="card-doctor__avatar">
                <div class="card-doctor__profile">
                  <div class="card-doctor__img-wrapper">
                    <div class="card-doctor__favorite-wrapper">
                      <div class="card-doctor__favorite-icon"></div>
                    </div>
                    <img :src="require('../images/users/' + doctor.photo)" alt="">
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
                    {{this.pluralize(getClinic.reviewClinics.length, ['отзыв', 'отзыва', 'отзывов'])}}
                  </a>
                </div>
              </div>
              <div class="card-doctor__main-content">
                <div class="card-doctor__info">
                  <div class="card-doctor__name">
                    <a href="#" class="card-doctor__name-link">{{ `${doctor.surname} ${doctor.name} ${doctor.lastname}` }}</a>
                  </div>
                  <div class="card-doctor__spec">{{ doctor.specialization }}</div>
                  <div class="card-doctor__experience">{{ doctor.description }}</div>
                  <div class="card-doctor__appointment-wrapper">
                    <div class="card-doctor__appointment-item">
                      <div class="card-doctor__appointment-icon">
                        <img src="../images/icon-clinic.svg" class="appointment__icon" alt="">
                      </div>
                      <div class="card-doctor__appointment-text">В клинике</div>
                      <div class="card-doctor__appointment-price">от&nbsp;{{findMinPrice(doctor.getServices)}}&nbsp;₽</div>
                    </div>
                  </div>
                  <div class="card-doctor__phone-container">
                    <div class="card-doctor__phone-title">Запись на приём:</div>
                    <div class="card-doctor__phone">
                      <div class="card-doctor__phone-icon"></div>
                      <div class="card-doctor__phone-num">{{ getClinic.number }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-doctor__appointment">
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
import TimeQuantumComponent from "@/components/TimeQuantumComponent";

export default {
  name: "ClinicDetailPage",
  components: {HeaderBig, FooterComponent, TimeQuantumComponent},
  data() {
    return {
      isLoading: true,
    }
  },
  methods: {
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
    pluralize(count, forms) {
      const cases = [2, 0, 1, 1, 1, 2];
      const index = (count % 100 > 4 && count % 100 < 20) ? 2 : cases[Math.min(count % 10, 5)];
      return `${count} ${forms[index]}`;
    },
    getIdFromUrl(array) {
      return array.map(url => {
        const parts = url.split('/');
        return parseInt(parts[parts.length-1]);
      })
    },
    addPropertyToClinic(clinic, propertyName, allElements) {
      let elementIds = clinic[propertyName];
      elementIds = this.getIdFromUrl(elementIds);


      let elements = [];

      elementIds.forEach(elementId => {
        let element = allElements.find(e => e.id === elementId);
        elements.push(element);
      });

      clinic['get' + propertyName.charAt(0).toUpperCase() + propertyName.slice(1)] = elements;

      return clinic;
    },
    addPropertyToProperty(arrayProperty, propertyName,allElements) {
      arrayProperty.forEach(property => {
        let elementIds = property[propertyName];
        elementIds = this.getIdFromUrl(elementIds);

        let elements = [];

        elementIds.forEach(elementId => {
          let element = allElements.find(e => e.id === elementId);
          elements.push(element);
        });

        property['get' + propertyName.charAt(0).toUpperCase() + propertyName.slice(1)] = elements;
      });
    },
  },
  computed: {
    getClinic() {
      let clinic = this.$store.getters.currentClinic;
      const services = this.$store.getters.allServices;
      const doctors = this.$store.getters.allDoctors;
      let clinics = this.$store.getters.allClinics;
      let slots = this.$store.getters.allTimeSlots;

      let updateClinic = this.addPropertyToClinic(clinic, 'doctor', doctors);
      this.addPropertyToProperty(updateClinic.getDoctor, 'services', services);
      this.addPropertyToProperty(updateClinic.getDoctor, 'clinics', clinics);
      this.addPropertyToProperty(updateClinic.getDoctor, 'timeSlots', slots);

      console.log(updateClinic);
      return updateClinic;
    },
  },
  async mounted() {
    try {
      const id = this.$route.query.id;
      await this.$store.dispatch('fetchClinicId', id);
      await this.$store.dispatch('fetchDoctors');
      await this.$store.dispatch('fetchServices');
      await this.$store.dispatch('fetchClinics');
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
<style src="../css/clinic-details.css"></style>
<style src="../css/doctor-details.css"></style>