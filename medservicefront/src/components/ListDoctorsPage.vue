<template>
  <HeaderBig></HeaderBig>
  <main class="main-wrapper">
    <div class="container">
      <div v-if="isLoading" class="loading-spinner"></div>
      <div class="card-doctor__container" v-else>
        <div class="card-doctor" v-for="doctor in allDoctors" :key="doctor.id">
          <div class="card-doctor__row">
            <div class="card-doctor__avatar">
              <div class="card-doctor__profile">
                <div class="card-doctor__img-wrapper">
<!--                  card-doctor__favorite-wrapper active для красного сердца-->
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
                  {{doctor.reviewDoctors.length}}&nbsp;отзывов
                </a>
              </div>
            </div>
            <div class="card-doctor__main-content">
              <div class="card-doctor__info">
                <div class="card-doctor__name">
                  <a :href="`#doctorDetail?id=${doctor.id}`" class="card-doctor__name-link">{{`${doctor.surname} ${doctor.name} ${doctor.lastname}`}}</a>
                </div>
                <div class="card-doctor__spec">{{doctor['specialization']}}</div>
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
                    <div class="card-doctor__phone-num">{{doctor.getClinics && doctor.getClinics.length > 0 ? doctor.getClinics[0].number : 'номер телефона не указан'}}</div>
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
  </main>
  <FooterComponent></FooterComponent>
</template>

<script>
import HeaderBig from "@/components/HeaderBig";
import FooterComponent from "@/components/FooterComponent";
import TimeQuantumComponent from "@/components/TimeQuantumComponent";

export default {
  name: "ListDoctorsPage",
  components: {
    HeaderBig, FooterComponent, TimeQuantumComponent,
  },
  data() {
    return {
      isLoading: true,
      selectedClinic: '',
    };
  },
  methods: {
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
  },
  computed: {
    allDoctors() {
      let doctors = this.$store.getters.allDoctors;
      let clinics = this.$store.getters.allClinics;
      let services = this.$store.getters.allServices;
      let slots = this.$store.getters.allTimeSlots;

      let updatedDoctors = this.modifiedDoctorsObject(doctors, clinics, services, slots);

      return updatedDoctors;
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

<style>
.loading-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #3498db;
  animation: spinner 0.8s ease-in-out infinite;
}

@keyframes spinner {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>