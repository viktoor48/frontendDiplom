<template>
  <main class="main-wrapper">
    <div class="container">
      <div class="clinic-intro__wrapper">
        <div class="doctor-intro">
          <div class="doctor-intro__left-side">
            <div class="doctor-intro__img-wrapper">
              <img class="doctor-intro__img" src="../images/avatar-clinic.png" alt="">
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
            <a href="#" class="doctor-intro__link-review">
              27&nbsp;отзывов
            </a>
          </div>
          <div class="doctor-intro__right-side">
            <div class="doctor-intro__name">
              <div class="doctor-intro__name-link clinic-intro__name">Стоматология «Винир»</div>
            </div>
            <div class="doctor-intro__city">Липецк</div>
            <div class="doctor-intro__spec">
              <div class="clinic-intro__spec">Стоматология</div>
            </div>
            <div class="card-clinic__contacts-wrapper">
              <div class="card-clinic__contacts-row">
                <div class="card-clinic__icon-contact">
                  <img src="../images/icon-phone.svg" alt="">
                </div>
                <div class="card-clinic__contact-text">Открыто до 20:00</div>
              </div>
              <div class="card-clinic__contacts-row">
                <div class="card-clinic__icon-contact">
                  <img src="../images/icon-phone.svg" alt="">
                </div>
                <div class="card-clinic__contact-text">ул. Соколовая, д. 10/16</div>
              </div>
              <div class="card-clinic__contacts-row">
                <div class="card-clinic__icon-contact">
                  <img src="../images/icon-phone.svg" alt="">
                </div>
                <div class="card-clinic__contact-text">
                  +7 (8452) 49-27-84
                </div>
              </div>
            </div>
            <p class="clinic-intro__description">Стоматологическая клиника «Винир» города Саратова оказывает весь спектр профильных услуг. Применятся щадящие методики работы и качественные материалы. Деятельность стоматологической клиники «Винир» лицензирована.</p>
            <button class="doctor-intro__send-review b-button-blue">
              <span>Оставить отзыв</span>
            </button>
          </div>
        </div>
      </div>
      <div class="clinic-intro__doctor-list">
        <div class="clinic__title-row">
          <h2 class="doctor-contacts__title">Врачи клиники Стоматология «Винир»</h2>
          <span class="clinic__doctors-count">17 врачей</span>
        </div>
        <div class="card-doctor__container">
          <div class="card-doctor">
            <div class="card-doctor__row">
              <div class="card-doctor__avatar">
                <div class="card-doctor__profile">
                  <div class="card-doctor__img-wrapper">
                    <div class="card-doctor__favorite-wrapper">
                      <div class="card-doctor__favorite-icon"></div>
                    </div>
                    <img src="../images/avatarDoctor.png" alt="">
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
                    27&nbsp;отзывов
                  </a>
                </div>
              </div>
              <div class="card-doctor__main-content">
                <div class="card-doctor__info">
                  <div class="card-doctor__name">
                    <a href="#" class="card-doctor__name-link">Молчанова Валентина Ивановна</a>
                  </div>
                  <div class="card-doctor__spec">Гинеколог, акушер, врач УЗИ</div>
                  <div class="card-doctor__experience">Стаж 16 лет</div>
                  <div class="card-doctor__appointment-wrapper">
                    <div class="card-doctor__appointment-item">
                      <div class="card-doctor__appointment-icon">
                        <img src="../images/icon-clinic.svg" class="appointment__icon" alt="">
                      </div>
                      <div class="card-doctor__appointment-text">В клинике</div>
                      <div class="card-doctor__appointment-price">от&nbsp;800&nbsp;₽</div>
                    </div>
                  </div>
                  <div class="card-doctor__phone-container">
                    <div class="card-doctor__phone-title">Запись на приём:</div>
                    <div class="card-doctor__phone">
                      <div class="card-doctor__phone-icon"></div>
                      <div class="card-doctor__phone-num">(4742) 52-26-07</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-doctor__appointment">
                <div class="time-quantums-container">
                  <div class="time-quantums-navigation">
                    <button class="time-quantum-nav-button time-quantum-nav-back">&#8249;</button>
                    <div class="time-quantum-nav-week">1-7 декабря</div>
                    <button class="time-quantum-nav-button time-quantum-nav-forward">&#8250;</button>
                  </div>
                  <div class="time-quantums-days">
                    <div class="time-quantum-day active">Пн</div>
                    <div class="time-quantum-day">Вт</div>
                    <div class="time-quantum-day">Ср</div>
                    <div class="time-quantum-day">Чт</div>
                    <div class="time-quantum-day">Пт</div>
                    <div class="time-quantum-day">Сб</div>
                    <div class="time-quantum-day">Вс</div>
                  </div>
                  <div class="time-quantums-slots">
                    <div class="time-quantum-slot">
                      <div class="time-quantum-slot-time">8:00-10:00</div>
                    </div>
                    <div class="time-quantum-slot">
                      <div class="time-quantum-slot-time">10:00-12:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-doctor">
            <div class="card-doctor__row">
              <div class="card-doctor__avatar">
                <div class="card-doctor__profile">
                  <div class="card-doctor__img-wrapper">
                    <div class="card-doctor__favorite-wrapper active">
                      <div class="card-doctor__favorite-icon"></div>
                    </div>
                    <img src="../images/avatarDoctor.png" alt="">
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
                    27&nbsp;отзывов
                  </a>
                </div>
              </div>
              <div class="card-doctor__main-content">
                <div class="card-doctor__info">
                  <div class="card-doctor__name">
                    <a href="#" class="card-doctor__name-link">Молчанова Валентина Ивановна</a>
                  </div>
                  <div class="card-doctor__spec">Гинеколог, акушер, врач УЗИ</div>
                  <div class="card-doctor__experience">Стаж 16 лет</div>
                  <div class="card-doctor__appointment-wrapper">
                    <div class="card-doctor__appointment-item">
                      <div class="card-doctor__appointment-icon">
                        <img src="../images/icon-clinic.svg" class="appointment__icon" alt="">
                      </div>
                      <div class="card-doctor__appointment-text">В клинике</div>
                      <div class="card-doctor__appointment-price">от&nbsp;800&nbsp;₽</div>
                    </div>
                  </div>
                  <div class="card-doctor__phone-container">
                    <div class="card-doctor__phone-title">Запись на приём:</div>
                    <div class="card-doctor__phone">
                      <div class="card-doctor__phone-icon"></div>
                      <div class="card-doctor__phone-num">(4742) 52-26-07</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-doctor__appointment">
                <div class="time-quantums-container">
                  <div class="time-quantums-navigation">
                    <button class="time-quantum-nav-button time-quantum-nav-back">&#8249;</button>
                    <div class="time-quantum-nav-week">1-7 декабря</div>
                    <button class="time-quantum-nav-button time-quantum-nav-forward">&#8250;</button>
                  </div>
                  <div class="time-quantums-days">
                    <div class="time-quantum-day">Пн</div>
                    <div class="time-quantum-day active">Вт</div>
                    <div class="time-quantum-day">Ср</div>
                    <div class="time-quantum-day">Чт</div>
                    <div class="time-quantum-day">Пт</div>
                    <div class="time-quantum-day">Сб</div>
                    <div class="time-quantum-day">Вс</div>
                  </div>
                  <div class="time-quantums-slots">
                    <div class="time-quantum-slot">
                      <div class="time-quantum-slot-time">8:00-10:00</div>
                    </div>
                    <div class="time-quantum-slot">
                      <div class="time-quantum-slot-time">10:00-12:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rating">
        <div class="rating-wrapper">
          <div class="rating__title">Рейтинг</div>
          <div class="rating__number-row">
            <div class="rating__number">5.0</div>
            <div class="card-doctor__stars-container">
              <div class="rating-result">
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="rating__stat-wrapper accordion">
          <div class="rating__stat-title">Отзывы</div>
          <div class="rating__number-row">
            <div class="rating__stat-number">5.0</div>
            <div class="card-doctor__stars-container">
              <div class="rating-result">
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
                <span class="active"></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="rating__stat-expansion panel">
          <div class="rating__stat-row">
            <div class="rating__stat-info-block">
              <span class="rating__stat-info-left">Народный рейтинг</span>
              <span class="rating__stat-info-right">+9.8</span>
            </div>
            <div class="rating__stat-bar">
              <div class="rating__stat-progress"></div>
            </div>
          </div>
          <div class="rating__stat-row">
            <div class="rating__stat-info-block">
              <span class="rating__stat-info-left">Народный рейтинг</span>
              <span class="rating__stat-info-right">+9.8</span>
            </div>
            <div class="rating__stat-bar">
              <div class="rating__stat-progress"></div>
            </div>
          </div>
          <div class="rating__stat-row">
            <div class="rating__stat-info-block">
              <span class="rating__stat-info-left">Народный рейтинг</span>
              <span class="rating__stat-info-right">+9.8</span>
            </div>
            <div class="rating__stat-bar">
              <div class="rating__stat-progress"></div>
            </div>
          </div>
          <div class="rating__stat-row">
            <div class="rating__stat-info-block">
              <span class="rating__stat-info-left">Народный рейтинг</span>
              <span class="rating__stat-info-right">+9.8</span>
            </div>
            <div class="rating__stat-bar">
              <div class="rating__stat-progress"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="review-doctor">
        <div class="review-doctor__wrapper">
          <div class="review-doctor__header">
            <div class="review-doctor__title">Отзывы</div>
            <button class="review-doctor__review-btn b-button-blue">Оставить отзыв</button>
          </div>
          <div class="review-doctor__container">
            <div class="review-doctor__card">
              <div class="review-doctor__card-aside">
                <div class="review-doctor__author-name">Пациент</div>
                <div class="review-doctor__author-phone">+7-951-30XXXXX</div>
                <div class="review-doctor__date-published">26 апреля в 19:17</div>
                <div class="review-doctor__rate-wrapper">
                  <div class="review-doctor__rate">
                    <div class="review-doctor__rate-num text_subtitle">+2.0</div>
                    <div class="review-doctor__rate-name text_subtitle">отлично</div>
                    <div class="review-doctor__detail-rate">
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="review-doctor__card-body">
                <div class="review-doctor__card-comments">
                  <div class="review-doctor__card-logo"></div>
                  <div class="review-doctor__card-comment-wrapper">
                    <div class="review-doctor__card-comment-title">Понравилось</div>
                    <div class="review-doctor__card-comment">Врач очень располагает к себе. Никакого дискомфорта во время осмотра и УЗИ. Всё аккуратно и тактично. Ответила на все вопросы. Ничего не навязывает: всё по делу. Во время осмотра всё комментирует доступным языком, и после приёма выдаётся подробный отчёт УЗИ. Рекомендую данного специалиста, особенно девочкам подросткам, очень комфортно на приёме.</div>
                  </div>
                  <div class="review-doctor__card-comment-wrapper">
                    <div class="review-doctor__card-comment-title">Комментарий</div>
                    <div class="review-doctor__card-comment">Пришла сдать анализы для планирования беременности.</div>
                  </div>
                </div>
                <footer class="review-doctor__card-footer">
                  <div class="review-doctor__footer-date">
                    <div class="review-doctor__footer-icon"></div>
                    <div class="review-doctor__date">Посетили&nbsp;в апреле 2023</div>
                  </div>
                  <div class="review-doctor__footer-address">
                    «Лечебно-диагностический центр №1» на Коммунальной-пл. Коммунальная, д. 9
                  </div>
                </footer>
              </div>
            </div>
            <div class="review-doctor__card">
              <div class="review-doctor__card-aside">
                <div class="review-doctor__author-name">Пациент</div>
                <div class="review-doctor__author-phone">+7-951-30XXXXX</div>
                <div class="review-doctor__date-published">26 апреля в 19:17</div>
                <div class="review-doctor__rate-wrapper">
                  <div class="review-doctor__rate">
                    <div class="review-doctor__rate-num text_subtitle">+2.0</div>
                    <div class="review-doctor__rate-name text_subtitle">отлично</div>
                    <div class="review-doctor__detail-rate">
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="review-doctor__card-body">
                <div class="review-doctor__card-comments">
                  <div class="review-doctor__card-logo"></div>
                  <div class="review-doctor__card-comment-wrapper">
                    <div class="review-doctor__card-comment-title">Понравилось</div>
                    <div class="review-doctor__card-comment">Врач очень располагает к себе. Никакого дискомфорта во время осмотра и УЗИ. Всё аккуратно и тактично. Ответила на все вопросы. Ничего не навязывает: всё по делу. Во время осмотра всё комментирует доступным языком, и после приёма выдаётся подробный отчёт УЗИ. Рекомендую данного специалиста, особенно девочкам подросткам, очень комфортно на приёме.</div>
                  </div>
                  <div class="review-doctor__card-comment-wrapper">
                    <div class="review-doctor__card-comment-title">Комментарий</div>
                    <div class="review-doctor__card-comment">Пришла сдать анализы для планирования беременности.</div>
                  </div>
                </div>
                <footer class="review-doctor__card-footer">
                  <div class="review-doctor__footer-date">
                    <div class="review-doctor__footer-icon"></div>
                    <div class="review-doctor__date">Посетили&nbsp;в апреле 2023</div>
                  </div>
                  <div class="review-doctor__footer-address">
                    «Лечебно-диагностический центр №1» на Коммунальной-пл. Коммунальная, д. 9
                  </div>
                </footer>
              </div>
            </div>
            <div class="review-doctor__card">
              <div class="review-doctor__card-aside">
                <div class="review-doctor__author-name">Пациент</div>
                <div class="review-doctor__author-phone">+7-951-30XXXXX</div>
                <div class="review-doctor__date-published">26 апреля в 19:17</div>
                <div class="review-doctor__rate-wrapper">
                  <div class="review-doctor__rate">
                    <div class="review-doctor__rate-num text_subtitle">+2.0</div>
                    <div class="review-doctor__rate-name text_subtitle">отлично</div>
                    <div class="review-doctor__detail-rate">
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                      <div class="review-doctor__detail-row">
                        <div class="review-doctor__detail-rate-name">Тщательность обследования</div>
                        <div class="review-doctor__detail-rate-value">Отлично</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="review-doctor__card-body">
                <div class="review-doctor__card-comments">
                  <div class="review-doctor__card-logo"></div>
                  <div class="review-doctor__card-comment-wrapper">
                    <div class="review-doctor__card-comment-title">Понравилось</div>
                    <div class="review-doctor__card-comment">Врач очень располагает к себе. Никакого дискомфорта во время осмотра и УЗИ. Всё аккуратно и тактично. Ответила на все вопросы. Ничего не навязывает: всё по делу. Во время осмотра всё комментирует доступным языком, и после приёма выдаётся подробный отчёт УЗИ. Рекомендую данного специалиста, особенно девочкам подросткам, очень комфортно на приёме.</div>
                  </div>
                  <div class="review-doctor__card-comment-wrapper">
                    <div class="review-doctor__card-comment-title">Комментарий</div>
                    <div class="review-doctor__card-comment">Пришла сдать анализы для планирования беременности.</div>
                  </div>
                </div>
                <footer class="review-doctor__card-footer">
                  <div class="review-doctor__footer-date">
                    <div class="review-doctor__footer-icon"></div>
                    <div class="review-doctor__date">Посетили&nbsp;в апреле 2023</div>
                  </div>
                  <div class="review-doctor__footer-address">
                    «Лечебно-диагностический центр №1» на Коммунальной-пл. Коммунальная, д. 9
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ClinicDetailPage"
}
</script>

<style src="../css/reset.css"></style>
<style src="../css/style.css"></style>
<style src="../css/doctors.css"></style>
<style src="../css/clinic-details.css"></style>
<style src="../css/doctor-details.css"></style>