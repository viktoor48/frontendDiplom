<template>
  <HeaderBig></HeaderBig>
  <main class="main-wrapper">
    <div class="container">
      <div v-if="isLoading" class="loading-spinner"></div>
      <div v-else class="card-clinic__container">
        <div v-for="clinic in getClinics" :key="clinic.id" class="card-doctor card-clinic">
          <div class="card-doctor__row">
            <div class="card-doctor__avatar card-clinic__avatar">
              <div class="card-doctor__profile">
                <div class="card-doctor__img-wrapper">
                  <div class="card-doctor__favorite-wrapper card-clinic__favorite-wrapper">
                    <div class="card-doctor__favorite-icon"></div>
                  </div>
                  <img :src="require('../images/users/' + clinic.photo)">
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
                  {{`${clinic.reviewClinics.length}&nbsp;отзывов`}}
                </a>
              </div>
            </div>
            <div class="card-doctor__main-content">
              <div class="card-doctor__info">
                <div class="card-doctor__name">
                  <a href="#clinicDetail" class="card-doctor__name-link clinic__name-link">
                    {{ clinic.name }}
                  </a>
                </div>
                <div class="card-doctor__spec card-clinic__spec">{{ clinic.specialization }}</div>
                <div class="card-doctor__experience card-clinic__count-doctors">{{this.pluralize(clinic.getDoctor.length, ['врач', 'врача', 'врачей'])}}</div>
                <div class="card-clinic__contacts-wrapper">
                  <div class="card-clinic__contacts-row">
                    <div class="card-clinic__icon-contact">
                      <img src="../images/icon-phone.svg" alt="">
                    </div>
                    <div class="card-clinic__contact-text">{{ clinic.address }}</div>
                  </div>
                  <div class="card-clinic__contacts-row">
                    <div class="card-clinic__icon-contact">
                      <img src="../images/icon-phone.svg" alt="">
                    </div>
                    <div class="card-clinic__contact-text">
                      {{ clinic.number }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-clinic__description-block">
              <div class="card-clinic__description-title text_subtitle-1">
                Описание
              </div>
              <div class="card-clinic__description-text text_subtitle-2">{{ clinic.description }}</div>
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
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
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
    modifiedClinicsObject(clinics, allDoctors) {
      let updatedClinics = clinics;

      this.addPropertyToClinics(updatedClinics, 'doctor', allDoctors);

      return updatedClinics;
    },
    addPropertyToClinics(clinics, propertyName, allElements) {
      clinics.forEach(clinic => {
        let elementIds = clinic[propertyName];
        elementIds = this.getIdFromUrl(elementIds);

        let elements = [];

        elementIds.forEach(elementId => {
          let element = allElements.find(e => e.id === elementId);
          elements.push(element);
        });

        clinic['get' + propertyName.charAt(0).toUpperCase() + propertyName.slice(1)] = elements;
      });

      return clinics;
    },
  },
  computed: {
    getClinics() {
      let doctors = this.$store.getters.allDoctors;
      let clinics = this.$store.getters.allClinics;

      let updatedClinics = this.modifiedClinicsObject(clinics, doctors);

      console.log(updatedClinics);
      return updatedClinics;
    },
  },
  async mounted() {
    try {
      await this.$store.dispatch('fetchDoctors');
      await this.$store.dispatch('fetchClinics');
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style src="../css/reset.css"></style>
<style src="../css/style.css"></style>
<style src="../css/clinicsList.css"></style>