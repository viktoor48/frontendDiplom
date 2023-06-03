<template>
  <HeaderBig></HeaderBig>
  <div class="intro-stat__wrapper">
    <div class="container">
      <div class="intro-stat">
        <div class="intro-stat__item">
          <div class="intro-stat__img background-review"></div>
          <div class="intro-stat__text">
            <div class="intro-stat__title">{{countReviews}}</div>
            <div class="intro-stat__subtitle">отзывов</div>
          </div>
        </div>
        <div class="intro-stat__item">
          <div class="intro-stat__img background-record"></div>
          <div class="intro-stat__text">
            <div class="intro-stat__title">{{countAppointment}}</div>
            <div class="intro-stat__subtitle">записей на прием</div>
          </div>
        </div>
        <div class="intro-stat__item">
          <div class="intro-stat__img background-doctors"></div>
          <div class="intro-stat__text">
            <div class="intro-stat__title">{{countDoctors}}</div>
            <div class="intro-stat__subtitle">врачей</div>
          </div>
        </div>
        <div class="intro-stat__item">
          <div class="intro-stat__img background-clinic"></div>
          <div class="intro-stat__text">
            <div class="intro-stat__title">{{countClinics}}</div>
            <div class="intro-stat__subtitle">клиник</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <main class="main-wrapper">
    <div class="container">
      <div class="card-info__wrapper">
        <div class="card-info">
          <div class="card-info__header">
            <div class="card-info__text">Врачи</div>
            <div class="card-info__number">{{this.countDoctors}}</div>
          </div>
          <div class="card-info__main">
            <div v-for="(value, key) in specializationDoctors" :key="key" class="card-info__main-row">
              <div class="card-info__text">{{key}}</div>
              <div class="card-info__number">{{value}}</div>
            </div>
          </div>
          <div class="card-info__footer">
            <button class="card-info__button button">
              <router-link to="listDoctors">Все врачи</router-link>
            </button>
          </div>
        </div>
        <div class="card-info">
          <div class="card-info__header">
            <div class="card-info__text">Клиники</div>
            <div class="card-info__number">{{this.countClinics}}</div>
          </div>
          <div class="card-info__main">
            <div v-for="(value, key) in specializationClinics" :key="key" class="card-info__main-row">
              <div class="card-info__text">{{ key }}</div>
              <div class="card-info__number">{{ value }}</div>
            </div>
          </div>
          <div class="card-info__footer">
            <button class="card-info__button button">
              <router-link to="listClinics">Все клиники</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footerComponent></footerComponent>
</template>

<script>
import HeaderBig from "@/components/HeaderBig";
import FooterComponent from "@/components/FooterComponent";
import {patchMethod, getMethod} from "@/assets/apiMethods";

export default {
  name: "MainPage",
  components: {
    HeaderBig, FooterComponent,
  },
  data() {
    return {
      doctors: [],
      clinics: [],
      reviewDoctors: [],
      reviewClinics: [],
      timeSlots: [],
    };
  },

  methods: {
    getClinics() {
      fetch('http://localhost:8000/api/clinics?page=1')
          .then((response) => response.json())
          .then((data) => this.clinics = [...data['hydra:member']]);
    },
    getDoctors() {
      fetch('http://localhost:8000/api/doctors?page=1')
          .then((response) => response.json())
          .then((data) => this.doctors = [...data['hydra:member']]);
    },
    getReviewsClinics() {
      fetch('http://localhost:8000/api/review_clinics?page=1')
          .then((response) => response.json())
          .then((data) => this.reviewClinics = [...data['hydra:member']]);
    },
    getReviewsDoctors() {
      fetch('http://localhost:8000/api/review_doctors?page=1')
          .then((response) => response.json())
          .then((data) => this.reviewDoctors = [...data['hydra:member']]);
    },
    specializationCount(array) {
      const specialtiesCount = {};

      array.forEach((element) => {
        const specialties = element.specialization.split(',');
        specialties.forEach((specialty) => {
          const trimmedSpecialty = specialty.trim();
          specialtiesCount[trimmedSpecialty] = (specialtiesCount[trimmedSpecialty] || 0) + 1;
        });
      });

      return specialtiesCount;
    },
    getTimeSlots() {
      getMethod('http://localhost:8000/api/time_slots?page=1')
          .then((response) => response.json())
          .then((data) => this.timeSlots = [...data['hydra:member']]);
    },
    patchClinic(id, data) {
      //добавить параметр для передачи объекта данных которые нужно изменить
      const url = `http://localhost:8000/api/clinics/${id}`;

      patchMethod(url, data)
          .then((response) => {

            if (!response.ok) {
              throw new Error('Error occurred');
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => console.log(error));

      // const data = {
      //   "photo": "ggfgfh",
      // это для привязки доктора к клиники
      //   "doctor": [
      //     "/api/doctors/2"
      //   ],
      // };
    },
  },
  computed: {
    countDoctors: function (){
      this.getReviewsClinics();
      this.getReviewsDoctors();
      return this.doctors.length;
    },
    countClinics: function (){
      return this.clinics.length;
    },
    specializationDoctors: function (){
      return this.specializationCount(this.doctors);
    },
    specializationClinics: function (){
      return this.specializationCount(this.clinics);
    },
    countReviews: function (){
      return this.reviewDoctors.length + this.reviewClinics.length;
    },
    countAppointment: function () {
      const filteredTimeSlots = this.timeSlots.filter((slot) => slot['booked'] === true);
      return filteredTimeSlots.length;
    },
  },
  created() {
    this.getClinics();
    this.getDoctors();
    this.getReviewsClinics();
    this.getReviewsDoctors();
    this.getTimeSlots();
    this.patchClinic(1, {
      "photo": "../images/avatarDoctor.png",
    });
  }
}


</script>


<style src="../css/reset.css"></style>
<style src="../css/style.css"></style>

