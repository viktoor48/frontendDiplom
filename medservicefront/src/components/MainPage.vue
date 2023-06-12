<template>
  <HeaderBig></HeaderBig>
  <div class="intro-stat__wrapper">
    <div class="container">
      <div v-if="isLoading" class="loading-spinner"></div>
      <div v-else class="intro-stat">
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

export default {
  name: "MainPage",
  components: {
    HeaderBig, FooterComponent,
  },
  data() {
    return {
      isLoading: true,
    };
  },

  methods: {
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
  },
  computed: {
    countDoctors: function (){
      return this.$store.getters.allDoctors.length;
    },
    countClinics: function (){
      return this.$store.getters.allClinics.length;
    },
    specializationDoctors: function (){
      return this.specializationCount(this.$store.getters.allDoctors);
    },
    specializationClinics: function (){
      return this.specializationCount(this.$store.getters.allClinics);
    },
    countReviews: function (){
      return this.$store.getters.getReviewsDoctors.length + this.$store.getters.getReviewsClinics.length;
    },
    countAppointment: function () {
      const timeSlot = this.$store.getters.allTimeSlots;
      const filteredTimeSlots = timeSlot.filter((slot) => slot['booked'] === true);
      return filteredTimeSlots.length;
    },
  },
  async mounted() {
    await this.$store.dispatch('fetchDoctors');
    await this.$store.dispatch('fetchClinics');
    await this.$store.dispatch('fetchTimeSlots');
    await this.$store.dispatch('fetchReviewsDoctors');
    this.isLoading = false;
  }
}


</script>


<style src="../css/reset.css"></style>
<style src="../css/style.css"></style>

