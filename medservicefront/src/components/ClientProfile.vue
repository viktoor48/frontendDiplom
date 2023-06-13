<template>
  <HeaderMin></HeaderMin>
  <main class="main-wrapper">
    <div class="min-container">
      <div v-if="isLoading" class="loading-spinner"></div>
      <div v-else class="personal-area">
        <div class="personal-area__profile">
          <div class="personal-area__profile-row">
            <div class="personal-area__avatar-wrapper">
              <img src="../images/icon-profile.svg" alt="">
            </div>
            <div class="personal-area__column">
              <div class="personal-area__title">{{ getClient.number }}</div>
              <div class="personal-area__subtitle">Профиль</div>
            </div>
          </div>
          <div class="personal-area__personal-data">
            <div class="personal-area__data-row">
              <div class="personal-area__data-icon">
                <img src="../images/icon-phone.svg" alt="">
              </div>
              <div class="personal-area__data-content">
                <input type="number" :placeholder="`${getClient.number}`" class="personal-area__data-text">
              </div>
            </div>
            <div class="personal-area__data-row">
              <div class="personal-area__data-icon">
                <img src="../images/icon-edit.svg" alt="">
              </div>
              <div class="personal-area__data-content">
                <input type="text" :placeholder="`${getClient.surname} ${getClient.name} ${getClient.lastname}`" class="personal-area__data-text">
              </div>
            </div>
            <div class="personal-area__data-row">
              <div class="personal-area__data-icon">
                <img src="../images/icon-calendar.svg" alt="">
              </div>
              <div class="personal-area__data-content">
                <input type="text" :placeholder="`${extractDate(getClient.date)}`" class="personal-area__data-text">
              </div>
            </div>
            <div class="personal-area__data-row">
              <div class="personal-area__data-icon">
                <img src="../images/icon-mail.svg" alt="">
              </div>
              <div class="personal-area__data-content">
                <input type="text" :placeholder="`${getClient.email}`" class="personal-area__data-text">
              </div>
            </div>
            <div class="personal-area__data-row">
              <div class="personal-area__data-icon">
                <img src="../images/icon-gender.svg" alt="">
              </div>
              <div class="personal-area__data-content">
                <input type="text" :placeholder="`${getClient.gender}`" class="personal-area__data-text">
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
            <div v-for="slot in getClient.getTimeSlots" :key="slot.id" class="personal-area__record-item doctor-card__min">
              <div class="doctor-card__left-side">
                <div class="doctor-card__img-wrapper">
                  <img :src="require('../images/users/' + slot.getDoctor.photo)" alt="">
                </div>
              </div>
              <div class="doctor-card__right-side">
                <div class="doctor-card__date secondary-text">
                  {{this.formatDateAndTime(slot.date, slot.start)}}
                </div>
                <div class="doctor-card__name text_subtitle-1">{{`${slot.getDoctor.surname } ${slot.getDoctor.name } ${slot.getDoctor.lastname }`}}</div>
                <div class="doctor-card__service secondary-text">{{slot.getService.name}}</div>
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
  data() {
    return {
      isLoading: true,
    }
  },
  computed: {
    getClient() {
      let client = this.$store.getters.getCurrentClient;
      const slots = this.$store.getters.allTimeSlots;
      const doctors = this.$store.getters.allDoctors;
      const services = this.$store.getters.allServices;

      this.addPropertyToClient(client, 'timeSlots', slots);
      this.addPropertyToProperty(client.getTimeSlots, 'doctor', doctors);
      this.addPropertyToProperty(client.getTimeSlots, 'service', services);

      console.log(client);
      return client;
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch('onLogout');
      router.push({name: 'home'});
    },
    extractTime(str) {
      const regex = /\d{4}-\d{2}-\d{2}T(\d{2}:\d{2})/;
      const match = str.match(regex);
      return match ? match[1] : null;
    },
    addPropertyToProperty(arrayProperty, propertyName,allElements) {
      arrayProperty.forEach(property => {
        let elementId = property[propertyName];
        const parts = elementId.split('/');
        elementId = parseInt(parts[parts.length-1]);

        let elements = {};


        let element = allElements.find(e => e.id === elementId);
        elements = element;

        property['get' + propertyName.charAt(0).toUpperCase() + propertyName.slice(1)] = elements;
      });
    },
    formatDateAndTime(dateString, startString) {
      const date = new Date(dateString);
      const monthNames = [
        "Янв", "Фев", "Мар", "Апр", "Май", "Июн",
        "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"
      ];
      const dayNames = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

      const output = `${date.getDate()} ${monthNames[date.getMonth()]} (${dayNames[date.getDay()]}),
      ${this.extractTime(startString)}`;
      return output;
    },
    extractDate(dateString) {
      const date = new Date(dateString);

      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');

      return `${day}.${month}.${date.getFullYear()}`;
    },
    addPropertyToClient(client, propertyName, allElements) {
        let elementIds = client[propertyName];
        elementIds = this.getIdFromUrl(elementIds);

        let elements = [];

        elementIds.forEach(elementId => {
          let element = allElements.find(e => e.id === elementId);
          elements.push(element);
        });

        client['get' + propertyName.charAt(0).toUpperCase() + propertyName.slice(1)] = elements;

      return client;
    },
    getIdFromUrl(array) {
      return array.map(url => {
        const parts = url.split('/');
        return parseInt(parts[parts.length-1]);
      })
    },
  },
  async mounted() {
    try {
      const id = await this.$store.getters.getToken;
      await this.$store.dispatch('fetchClient', id);
      await this.$store.dispatch('fetchTimeSlots');
      await this.$store.dispatch('fetchDoctors');
      await this.$store.dispatch('fetchServices');
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style scoped>

</style>