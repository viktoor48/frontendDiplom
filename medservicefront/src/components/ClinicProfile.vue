<template>
  <HeaderMin></HeaderMin>
  <main class="main-wrapper">
    <div class="min-container">
      <div v-if="isLoading" class="loading-spinner"></div>
      <div v-else class="personal-area">
        <div class="personal-area__profile">
          <div class="personal-area__profile-row">
            <div class="personal-area__avatar-wrapper">
              <img :src="require('../images/users/' + getClinic.photo)" alt="">
            </div>
            <div class="personal-area__column">
              <div class="personal-area__title">{{ getClinic.number }}</div>
              <div class="personal-area__subtitle">Профиль</div>
            </div>
          </div>
          <div class="personal-area__personal-data">
            <div class="personal-area__data-row">
              <div class="personal-area__data-icon">
                <img src="../images/icon-phone.svg" alt="">
              </div>
              <div class="personal-area__data-content">
                <input type="number" :placeholder="`${getClinic.number}`" class="personal-area__data-text">
              </div>
            </div>
            <div class="personal-area__data-row">
              <div class="personal-area__data-icon">
                <img src="../images/icon-edit.svg" alt="">
              </div>
              <div class="personal-area__data-content">
                <input type="text" :placeholder="`${getClinic.name}`" class="personal-area__data-text">
              </div>
            </div>
            <div class="personal-area__data-row">
              <div class="personal-area__data-icon">
                <img src="../images/icon-edit.svg" alt="">
              </div>
              <div class="personal-area__data-content">
                <input type="text" :placeholder="`${getClinic.specialization}`" class="personal-area__data-text">
              </div>
            </div>
            <div class="personal-area__data-row">
              <div class="personal-area__data-icon">
                <img src="../images/icon-edit.svg" alt="">
              </div>
              <div class="personal-area__data-content">
                <input type="text" :placeholder="`${getClinic.address}`" class="personal-area__data-text">
              </div>
            </div>
            <div class="personal-area__data-row">
              <div class="personal-area__data-icon">
                <img src="../images/icon-edit.svg" alt="">
              </div>
              <div class="personal-area__data-content">
                <input type="text" :placeholder="`${getClinic.city}`" class="personal-area__data-text">
              </div>
            </div>
            <div class="personal-area__data-row">
              <div class="personal-area__data-icon">
                <img src="../images/icon-edit.svg" alt="">
              </div>
              <div class="personal-area__data-content">
                <textarea class="personal-area__data-textarea" :placeholder="`${getClinic.description}`"></textarea>
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
          <div class="personal-area__record-title big-title">Врачи</div>
          <div class="personal-area__record-list">
            <div v-for="doctor in getClinic.getDoctor" :key="doctor.id" class="personal-area__record-item doctor-card__min">
              <div class="doctor-card__left-side">
                <div class="doctor-card__img-wrapper">
                  <img :src="require('../images/users/' + doctor.photo)" alt="">
                </div>
              </div>
              <div class="doctor-card__right-side">
                <div class="doctor-card__name text_subtitle-1">{{ `${doctor.surname} ${doctor.name} ${doctor.lastname}` }}</div>
                <div class="doctor-card__service secondary-text">{{ doctor.specialization }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="personal-area__item-container">
          <div class="personal-area__record-title big-title">Добавить врача</div>
          <div class="personal-area__form-container">
            <form action="#" class="personal-area__form-add form__item" novalidate>
              <div class="form__field-wrapper">
                <div class="input-wrapper">
                  <input type="text" placeholder="Имя" required class="input">
                </div>
                <div class="messages-wrapper">
                  <div class="messages__message error--text"></div>
                </div>
              </div>
              <div class="form__field-wrapper">
                <div class="input-wrapper">
                  <input type="text" placeholder="Фамилия" required class="input">
                </div>
                <div class="messages-wrapper">
                  <div class="messages__message error--text"></div>
                </div>
              </div>
              <div class="form__field-wrapper">
                <div class="input-wrapper">
                  <input type="text" placeholder="Отчество" class="input">
                </div>
                <div class="messages-wrapper">
                  <div class="messages__message error--text"></div>
                </div>
              </div>
              <div class="form__field-wrapper">
                <div class="input-wrapper">
                  <input type="text" placeholder="Телефон" required class="input">
                </div>
                <div class="messages-wrapper">
                  <div class="messages__message error--text"></div>
                </div>
              </div>
              <div class="form__field-wrapper">
                <div class="input-wrapper">
                  <input type="email" placeholder="Специализация" required class="input" list="specialization" multiple>
                  <datalist id="specialization">
                    <option value="Аллерголог">Аллерголог</option>
                    <option value="Анестезиолог-реаниматолог">Анестезиолог-реаниматолог</option>
                    <option value="Эпидемиолог">Эпидемиолог</option>
                    <option value="Кардиолог">Кардиолог</option>
                    <option value="Онколог">Онколог</option>
                    <option value="Травматолог-ортопед">Травматолог-ортопед</option>
                    <option value="Физиотерапевт">Физиотерапевт</option>
                  </datalist>
                </div>
                <div class="messages-wrapper">
                  <div class="messages__message error--text"></div>
                </div>
              </div>
              <div class="form__field-wrapper">
                <div class="input-wrapper">
                  <input type="text" placeholder="Описание" required class="input">
                </div>
                <div class="messages-wrapper">
                  <div class="messages__message error--text"></div>
                </div>
              </div>
              <div class="form__wrapper-btn">
                <button class="form__btn button">Добавить врача</button>
              </div>
            </form>
          </div>
        </div>
        <div class="personal-area__item-container">
          <div class="personal-area__record-title big-title">Загрузить врачей</div>
          <form>
            <div class="form__field-wrapper load-doctors">
              <label class="choose-file" for="jsonFile">Выберите файл JSON:</label>
              <input type="file" id="jsonFile" name="jsonFile" accept="application/json">
            </div>
            <button class="form__btn button" type="submit">Отправить</button>
          </form>
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
  name: "ClinicProfile",
  components: {HeaderMin, FooterComponent},
  methods: {
    onLogout() {
      this.$store.dispatch('onLogout');
      router.push({name: 'home'});
    },
    getIdFromUrl(array) {
      return array.map(url => {
        const parts = url.split('/');
        return parseInt(parts[parts.length-1]);
      })
    },
    addPropertyToClinic(clinic, propertyName, allElements) {
      let elementIds = clinic[propertyName];
      console.log(elementIds);
      elementIds = this.getIdFromUrl(elementIds);

      let elements = [];

      elementIds.forEach(elementId => {
        let element = allElements.find(e => e.id === elementId);
        elements.push(element);
      });

      clinic['get' + propertyName.charAt(0).toUpperCase() + propertyName.slice(1)] = elements;

      return clinic;
    },
  },
  data() {
    return {
      isLoading: true,
      clinicId: '',
    }
  },
  computed: {
    getClinic() {
      let clinic = this.$store.getters.currentClinic;
      const doctors = this.$store.getters.allDoctors;

      let updateClinic = this.addPropertyToClinic(clinic, 'doctor', doctors);
      console.log(updateClinic);
      return updateClinic;
    },
  },
  async mounted() {
    try {
      const id = await this.$store.getters.getToken;
      await this.$store.dispatch('fetchClinicId', id);
      await this.$store.dispatch('fetchDoctors');
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style src="../css/reset.css"></style>
<style src="../css/style.css"></style>
<style src="../css/personal-area.css"></style>
<style src="../css/form.css"></style>
<style src="../css/clinic-profile.css"></style>

<style>
.load-doctors {
  margin-bottom: 10px;
  margin-top: 10px;
}

.choose-file {
  margin-right: 10px;
}
</style>