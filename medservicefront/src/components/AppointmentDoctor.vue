<template>
  <HeaderBig></HeaderBig>
  <main class="main-wrapper">
    <div class="container">
      <div v-if="isLoading" class="loading-spinner"></div>
      <div class="appointment-doctor" v-else>
        <h1 class="appointment-doctor__title">Запись на приём к врачу</h1>
        <div class="appointment-doctor__inner">
          <form action="#" @submit.prevent="onSubmit" class="appointment-doctor__main">
            <div class="appointment-doctor__header">
              <div class="appointment-doctor__img-wrapper">
                <img :src="require('../images/' + getSlot.getDoctor.photo)" alt="">
              </div>
              <div class="appointment-doctor__info-doctor">
                <a href="#" class="appointment-doctor__name text_subtitle-1">{{`${getSlot.getDoctor.surname} ${getSlot.getDoctor.name} ${getSlot.getDoctor.lastname}`}}</a>
                <div class="appointment-doctor__description text_subtitle-2">{{getSlot.getDoctor.description}}</div>
              </div>
            </div>
            <div class="appointment-doctor__clinic-info">
              <div class="appointment-doctor__clinic-name text_subtitle-1">{{getSlot.getClinic.name}}</div>
              <div class="appointment-doctor__clinic-address text_subtitle-2">{{`адрес: ${getSlot.getClinic.address}`}}</div>
            </div>
            <div class="appointment-doctor__speciality">
              <div v-for="service in getServices" :key="service.id" class="appointment-doctor__speciality-row">
                <label class="appointment-doctor__speciality-label active">
                  <input type="radio"
                         name="radio-spec"
                         :value="`${service.id}`"
                         class="appointment-doctor__speciality-radio"
                         v-model="getServices[0].id" :checked="service.id === getServices[0].id">
                </label>
                <div class="appointment-doctor__label-text">
                  <div class="appointment-doctor__label-text-row">
                    <div class="appointment-doctor__label-title">{{ service.name }}</div>
                    <div class="appointment-doctor__label-price">{{`${service.price} ₽`}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="appointment-doctor__calendar-wrapper">
              <div class="appointment-doctor__calendar">
                <div class="appointment-doctor__calendar-title text_subtitle-1">{{this.formatDateAndTime(getSlot.date, getSlot.start)}}</div>
              </div>
            </div>
            <div class="appointment-doctor__inputs-wrapper">
              <div class="appointment-doctor__field-wrapper">
                <div class="appointment-doctor__input-wrapper">
                  <input type="text" name="surname" placeholder="Фамилия"  :value="`${getCurrentClient.surname}`" class="appointment-doctor__input">
                </div>
                <div class="messages-wrapper">
                  <div class="messages__message error--text"></div>
                </div>
              </div>
              <div class="appointment-doctor__field-wrapper">
                <div class="appointment-doctor__input-wrapper">
                  <input type="text" placeholder="Имя" name="name" :value="`${getCurrentClient.name}`" class="appointment-doctor__input">
                </div>
                <div class="messages-wrapper">
                  <div class="messages__message error--text"></div>
                </div>
              </div>
              <div class="appointment-doctor__field-wrapper">
                <div class="appointment-doctor__input-wrapper">
                  <input type="text" name="dateOfBirth" placeholder="Дата рождения" :value="`${extractDate(getCurrentClient.date)}`" class="appointment-doctor__input">
                </div>
                <div class="messages-wrapper">
                  <div class="messages__message error--text"></div>
                </div>
              </div>
            </div>
            <div class="appointment-doctor__btn-wrapper">
              <button class="appointment-doctor__btn b-button-blue" type="submit">Записаться</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
  <FooterComponent></FooterComponent>
</template>

<script>
import HeaderBig from "@/components/HeaderBig";
import FooterComponent from "@/components/FooterComponent";
import router from "@/router";
export default {
  name: "AppointmentDoctor",
  components: {HeaderBig, FooterComponent},
  data() {
    return {
      isLoading: true,
    }
  },
  methods: {
    async onSubmit(event) {
      const surname = event.target.surname.value;
      const name = event.target.name.value;
      const dateOfBirth = event.target.dateOfBirth.value;
      const serviceId = event.target['radio-spec'].value;
      const shortDate = event.target.querySelector('.appointment-doctor__calendar-title').textContent;
      const fullDateAppointment = this.combineDateTime(this.getSlot.date, this.getSlot.start);
      const currentClient = this.getCurrentClient;

      const dataAppointment = {
        service: `/api/services/${serviceId}`,
        client: `/api/clients/${currentClient.id}`,
        booked: true,
      }
      console.log(dataAppointment);

      try {
        const response = await this.$store.dispatch('patchTimeSlot', {id: this.getSlot.id, data: dataAppointment});
        console.log(response);
        if (response) {
          router.push({name: 'home'});
        } else {
          alert('Что-то пошло не так');
        }
      } catch (error) {
        console.log(error);
      }

      //этот объект будет отправляться клинике если указан url
      const dataToClinic = {
        clientSurname: surname,
        clientName: name,
        clientDateOfBirth: dateOfBirth,
        clientNumber: currentClient.number,
        shortDate: shortDate,
        fullDateAppointment: fullDateAppointment,
        idClient: currentClient.id,
        doctor: {
          name: this.getSlot.getDoctor.name,
          surname: this.getSlot.getDoctor.surname,
          lastname: this.getSlot.getDoctor.lastname,
          city: this.getSlot.getDoctor.city,
          email: this.getSlot.getDoctor.email,
          id: this.getSlot.getDoctor.id,
        },
        clinic: {
          name: this.getSlot.getClinic.name,
          address: this.getSlot.getClinic.address,
          email: this.getSlot.getClinic.email,
          specialization: this.getSlot.getClinic.specialization,
          id: this.getSlot.getClinic.id,
        },
      }

      console.log(dataToClinic);
    },
    combineDateTime(date, start) {
      const dateObj = new Date(date);
      const startObj = new Date(start);

      const year = dateObj.getFullYear();
      const month = dateObj.getMonth() + 1;
      const day = dateObj.getDate();

      const hours = startObj.getHours();
      const minutes = startObj.getMinutes();
      const seconds = startObj.getSeconds();

      const newDate = new Date(year, month - 1, day, hours, minutes, seconds);

      return newDate.toISOString();
    },
    extractDate(dateString) {
      const date = new Date(dateString);

      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');

      return `${day}.${month}.${date.getFullYear()}`;
    },
    addPropertyToProperty(property, propertyName, allElements) {
      let elementId = property[propertyName];
      const parts = elementId.split('/');
      elementId = parseInt(parts[parts.length - 1]);

      let element = allElements.find(e => e.id === elementId);

      property['get' + propertyName.charAt(0).toUpperCase() + propertyName.slice(1)] = element;
    },
    formatDateAndTime(dateString, startString) {
      const date = new Date(dateString);
      const monthNames = [
        "Янв", "Фев", "Мар", "Апр", "Май", "Июн",
        "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"
      ];
      const dayNames = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

      const output = `${date.getDate()} ${monthNames[date.getMonth()]} (${dayNames[date.getDay()]}), ${this.extractTime(startString)}`;
      return output;
    },
    extractTime(str) {
      const regex = /\d{4}-\d{2}-\d{2}T(\d{2}:\d{2})/;
      const match = str.match(regex);
      return match ? match[1] : null;
    },
    getIdFromUrl(url) {
      const parts = url.split('/');
      return parseInt(parts[parts.length - 1]);
    },
  },
  computed: {
    getSlot() {
      let slot = this.$store.getters.getCurrentSlot;
      const doctors = this.$store.getters.allDoctors;
      const clinics = this.$store.getters.allClinics;
      this.addPropertyToProperty(slot, 'doctor', doctors);
      this.addPropertyToProperty(slot, 'clinic', clinics);
      console.log(slot);
      return slot;
    },
    getServices() {
      const services = this.$store.getters.allServices;
      const doctorId = this.getSlot.getDoctor.id;

      return services.filter(service => this.getIdFromUrl(service.doctor) == doctorId);
    },
    getCurrentClient() {
      const client = this.$store.getters.getCurrentClient;
      return client;
    },
  },
  async mounted() {
    try {
      const slotId = this.$route.query.id;
      const clientId = await this.$store.getters.getToken;
      await this.$store.dispatch('fetchClient', clientId);
      await this.$store.dispatch('fetchTimeSlot', slotId);
      await this.$store.dispatch('fetchDoctors');
      await this.$store.dispatch('fetchServices');
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
<style src="../css/appointment-doctor.css"></style>