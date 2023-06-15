<template>
  <HeaderBig></HeaderBig>
  <main class="main-wrapper">
    <div class="container">
      <div class="review__container">
        <div class="review__title-row">
          <h1 class="big-title">Оставить отзыв о <span class="big-title text-grey">Леонтьеве Евгении Владимировиче</span></h1>
        </div>
        <div class="review__form-container">
          <form action="#" class="review__form">
            <div class="review__row-stars">
              <div class="review__stars-title-wrapper">
                <div class="review__stars-title">Тщательность обследования</div>
                <div class="review__stars-error">Поставьте оценку</div>
              </div>
              <div class="rating-area">
                <input type="radio" id="star-5" name="rating-view" value="5">
                <label for="star-5" title="Оценка «5»"></label>
                <input type="radio" id="star-4" name="rating-view" value="4">
                <label for="star-4" title="Оценка «4»"></label>
                <input type="radio" id="star-3" name="rating-view" value="3">
                <label for="star-3" title="Оценка «3»"></label>
                <input type="radio" id="star-2" name="rating-view" value="2">
                <label for="star-2" title="Оценка «2»"></label>
                <input type="radio" id="star-1" name="rating-view" value="1">
                <label for="star-1" title="Оценка «1»"></label>
              </div>
            </div>
            <div class="review__row-stars">
              <div class="review__stars-title-wrapper">
                <div class="review__stars-title">Эффективность лечения</div>
                <div class="review__stars-error">Поставьте оценку</div>
              </div>
              <div class="rating-area">
                <input type="radio" id="star-5-rating-efficiency" name="rating-efficiency" value="5">
                <label for="star-5-rating-efficiency" title="Оценка «5»"></label>
                <input type="radio" id="star-4-rating-efficiency" name="rating-efficiency" value="4">
                <label for="star-4-rating-efficiency" title="Оценка «4»"></label>
                <input type="radio" id="star-3-rating-efficiency" name="rating-efficiency" value="3">
                <label for="star-3-rating-efficiency" title="Оценка «3»"></label>
                <input type="radio" id="star-2-rating-efficiency" name="rating-efficiency" value="2">
                <label for="star-2-rating-efficiency" title="Оценка «2»"></label>
                <input type="radio" id="star-1-rating-efficiency" name="rating-efficiency" value="1">
                <label for="star-1-rating-efficiency" title="Оценка «1»"></label>
              </div>
            </div>
            <div class="review__row-stars">
              <div class="review__stars-title-wrapper">
                <div class="review__stars-title">Посоветуете ли Вы врача</div>
                <div class="review__stars-error">Поставьте оценку</div>
              </div>
              <div class="rating-area">
                <input type="radio" id="star-5-rating-recommend" name="rating-recommend" value="5">
                <label for="star-5-rating-recommend" title="Оценка «5»"></label>
                <input type="radio" id="star-4-rating-recommend" name="rating-recommend" value="4">
                <label for="star-4-rating-recommend" title="Оценка «4»"></label>
                <input type="radio" id="star-3-rating-recommend" name="rating-recommend" value="3">
                <label for="star-3-rating-recommend" title="Оценка «3»"></label>
                <input type="radio" id="star-2-rating-recommend" name="rating-recommend" value="2">
                <label for="star-2-rating-recommend" title="Оценка «2»"></label>
                <input type="radio" id="star-1-rating-recommend" name="rating-recommend" value="1">
                <label for="star-1-rating-recommend" title="Оценка «1»"></label>
              </div>
            </div>
            <div class="form__field-wrapper">
              <label for="select-clinic" class="label-input text_subtitle-1 text-grey">Клиника</label>
              <div class="input-wrapper">
                <input id="select-clinic" type="text" placeholder="Выберите клинику" required class="input" list="clinics-list">
                <datalist id="clinics-list">
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
              <label for="select-visit-date" class="label-input text_subtitle-1 text-grey">Дата посещения</label>
              <div class="input-wrapper">
                <input id="select-visit-date" type="date" placeholder="Выберите клинику" required class="input" list="clinics-list">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text"></div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <label for="textarea-like" class="label-input text_subtitle-1 text-grey">Понравилось</label>
              <div class="input-wrapper">
                <textarea id="textarea-like" type="date" placeholder="Здесь можно указать главные плюсы" required class="input" list="clinics-list"></textarea>
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text"></div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <label for="textarea-dislike" class="label-input text_subtitle-1 text-grey">Не понравилось</label>
              <div class="input-wrapper">
                <textarea id="textarea-dislike" type="date" placeholder="Какие недостатки вы отметили ?" required class="input" list="clinics-list"></textarea>
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text"></div>
              </div>
            </div>
            <div class="form__field-wrapper">
              <label for="review-number" class="label-input text_subtitle-1 text-grey">Номер телефона</label>
              <div class="input-wrapper">
                <input id="review-number" type="number" placeholder="+7" required class="input">
              </div>
              <div class="messages-wrapper">
                <div class="messages__message error--text"></div>
              </div>
            </div>
            <div class="review__submit-btn personal-area__btn-review-wrapper">
              <button class="b-button-blue">Оставить отзыв</button>
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
export default {
  name: "ReviewPage",
  components: {HeaderBig, FooterComponent}

}
</script>

<style src="../css/reset.css"></style>
<style src="../css/style.css"></style>
<style src="../css/review-page.css"></style>
<style src="../css/form.css"></style>