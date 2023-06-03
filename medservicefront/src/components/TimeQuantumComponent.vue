<template>
  <div class="time-quantums-container">
    <div class="time-quantums-navigation">
      <button class="time-quantum-nav-button time-quantum-nav-back">&#8249;</button>
      <div class="time-quantum-nav-week">1-7 декабря</div>
      <button class="time-quantum-nav-button time-quantum-nav-forward">&#8250;</button>
    </div>
    <div class="time-quantums-days">
      <div v-for="(day, index) in daysOfWeek" :key="index" class="time-quantum-day__wrapper" :class="{ 'active': index+1 === new Date().getDay() }">
        <div class="time-quantum-day">{{ day }}</div>
        <div class="time-quantum-day-number">{{ index + 1 }}</div>
      </div>
    </div>
    <div class="time-quantums-slots">
      <div class="time-quantum-slot" v-for="slot in doctor.getTimeSlots" :key="slot.id">
        <div class="time-quantum-slot-time">{{ extractTime(slot.start) }} - {{ extractTime(slot.timeEnd) }}</div>
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
    }
  },
  data() {
    return {
      daysOfWeek: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    };
  },
  methods: {
    extractTime(str) {
      const regex = /\d{4}-\d{2}-\d{2}T(\d{2}:\d{2})/;
      const match = str.match(regex);
      return match ? match[1] : null;
    },
    getDateRange() {
      const startDate = new Date()
      const dates = []

      for (let i = 0; i < 5; i++) {
        const currentDate = new Date(startDate.getTime() + (i * 24 * 60 * 60 * 1000))
        const dateString = currentDate.getDate().toString().padStart(2, '0')
        dates.push(dateString)
      }

      return dates
    },
  },
  mounted() {
    console.log(this.doctor.getTimeSlots);
  }
}
</script>

<style>

</style>