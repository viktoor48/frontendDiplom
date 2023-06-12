<template>
  <select class="card-doctor__choice-clinic" ref="clinicSelect" @change="handleClinicSelection">
    <option v-if="doctor.getClinics.length === 0" value="default" selected>Не привязан к клинике</option>
    <option v-else v-for="(clinic, index) in doctor.getClinics" :key="clinic.id" :value="clinic.id" :selected="index === 0">{{ clinic.name }}</option>
  </select>
  <div class="time-quantums-container" v-if="weeks">
    <div class="time-quantums-navigation">
      <button class="time-quantum-nav-button time-quantum-nav-back" @click="getPrevWeek">&#8249;</button>
      <div class="time-quantum-nav-week">{{getDateRange}}</div>
      <button class="time-quantum-nav-button time-quantum-nav-forward" @click="getNextWeek">&#8250;</button>
    </div>
    <div class="time-quantums-days">
      <div v-for="(day, index) in getCurrentWeek" :key="index" class="time-quantum-day__wrapper" :class="{ 'active': day.active }" @click="setActive(day)">
        <div class="time-quantum-day">{{ day.dayOfWeek }}</div>
        <div class="time-quantum-day-number">{{ extractDayFromDateString(day.fullDate) }}</div>
      </div>
    </div>
    <div class="time-quantums-slots">
      <div class="time-quantum-slot" v-for="slot in getCurrentSlots" :key="slot.id">
        <router-link :to="`/appointmentDoctor?id=${slot.id}`">
          <div class="time-quantum-slot-time">{{ extractTime(slot.start) }} - {{ extractTime(slot.timeEnd)}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeQuantumComponent",
  props: {
    doctor: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      activeViewWeek: 0,
      weeks: null,
      selectClinic: '',
      activeDay: {},
    };
  },
  computed: {
    getCurrentWeek() {
      return this.weeks[this.activeViewWeek];
    },
    getDateRange() {
      return `${this.weeks[0][0].fullDate} - ${this.weeks[1][6].fullDate}`;
    },
    getCurrentSlots() {
      let currentDay = {};
      this.weeks.forEach(week => {
        week.forEach(day => {
          if (day.active) {
            currentDay = day;
          }
        })
      })

      let slots = this.doctor.getTimeSlots.filter(slot => {

        return this.extractDate(slot.date) == currentDay.fullDate
            && this.selectClinic == this.getIdFromUrl(slot.clinic)
            && slot.booked == false
            && this.compareDates(this.extractDate(slot.date), this.getToday()) >= 0;
      })

      return slots;
    },
  },
  methods: {
    compareDates(dateStr1, dateStr2) {
      const [day1, month1, year1] = dateStr1.split(".");
      const [day2, month2, year2] = dateStr2.split(".");

      const date1 = new Date(`${year1}-${month1}-${day1}`);
      const date2 = new Date(`${year2}-${month2}-${day2}`);

      if (date1.getTime() < date2.getTime()) {
        return -1;
      } else if (date1.getTime() > date2.getTime()) {
        return 1;
      } else {
        return 0;
      }
    },
    getIdFromUrl(url) {
      const parts = url.split('/');
      return parseInt(parts[parts.length - 1]);
    },
    setActive(clickedDay) {
      this.weeks.forEach(week => {
        week.forEach(day => {
          day.active = false;
        });
        clickedDay.active = true;
      })
    },
    handleClinicSelection() {
      const clinicSelect = this.$refs.clinicSelect;
      const selectedClinicId = clinicSelect.options[clinicSelect.selectedIndex].value;
      this.selectClinic = selectedClinicId;
    },
    extractDayFromDateString(date) {
      return date.split('.')[0];
    },
    extractTime(str) {
      const regex = /\d{4}-\d{2}-\d{2}T(\d{2}:\d{2})/;
      const match = str.match(regex);
      return match ? match[1] : null;
    },
    extractDate(dateString) {
      const date = new Date(dateString);

      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');

      return `${day}.${month}.${date.getFullYear()}`;
    },
    getNextWeek() {
      this.activeViewWeek = 1;
    },
    getPrevWeek() {
      this.activeViewWeek = 0;
    },
    getWeekDates() {
      const days = {
        0: 'Вс',
        1: 'Пн',
        2: 'Вт',
        3: 'Ср',
        4: 'Чт',
        5: 'Пт',
        6: 'Сб'
      };

      const today = new Date();
      const firstMonday = new Date(today.getFullYear(), today.getMonth(),
          today.getDate() - (today.getDay() + 6) % 7);

      const nextSunday = new Date(firstMonday.getFullYear(), firstMonday.getMonth(),
          firstMonday.getDate() + 6);

      const firstWeek = [];
      const secondWeek = [];

      let currentDate = new Date(firstMonday);
      while (currentDate <= nextSunday) {
        firstWeek.push({
          dayOfWeek: days[currentDate.getDay()],
          fullDate: currentDate.toLocaleDateString('ru-RU')
        });
        currentDate.setDate(currentDate.getDate() + 1);
      }

      const secondMonday = new Date(nextSunday.getFullYear(), nextSunday.getMonth(),
          nextSunday.getDate() + 1);

      const secondNextSunday = new Date(secondMonday.getFullYear(), secondMonday.getMonth(),
          secondMonday.getDate() + 6);

      currentDate = new Date(secondMonday);
      while (currentDate <= secondNextSunday) {
        secondWeek.push({
          dayOfWeek: days[currentDate.getDay()],
          fullDate: currentDate.toLocaleDateString('ru-RU')
        });
        currentDate.setDate(currentDate.getDate() + 1);
      }

      const weeks = [firstWeek, secondWeek];
      weeks.forEach(week => {
        week.forEach(day => {
          day.active = this.extractDayFromDateString(day.fullDate) == this.extractDayFromDateString(this.getToday());
        })
      })
      this.weeks = weeks;
    },
    getToday() {
      const date = new Date();
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear().toString();
      return `${day}.${month}.${year}`;
    }
  },
  mounted() {
    this.getWeekDates();
    this.handleClinicSelection();
  }
}
</script>

<style>

</style>