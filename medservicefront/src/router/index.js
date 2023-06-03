import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from "@/components/MainPage";
import RegistrationPatientPage from "@/components/RegistrationPatientPage";
import RegistrationDoctorPage from "@/components/RegistrationDoctorPage";
import RegistrationClinicPage from "@/components/RegistrationClinicPage";
import ListDoctorsPage from "@/components/ListDoctorsPage";
import ListClinicsPage from "@/components/ListClinicsPage";
import DoctorDetailPage from "@/components/DoctorDetailPage";
import ClinicDetailPage from "@/components/ClinicDetailPage";
import FormEnterPatient from "@/components/FormEnterPatient";
import FormEnterDoctor from "@/components/FormEnterDoctor";
import FormEnterClinic from "@/components/FormEnterClinic";

const routes = [
  {
    path: '/',
    component: MainPage,
    alias: '/'
  },
  {
    path: '/registrationPatient',
    name: 'registrationPatientPage',
    component: RegistrationPatientPage,
  },
  {
    path: '/registrationDoctor',
    name: 'registrationDoctorPage',
    component: RegistrationDoctorPage,
  },
  {
    path: '/registrationClinic',
    name: 'registrationClinicPage',
    component: RegistrationClinicPage,
  },
  {
    path: '/listDoctors',
    name: 'listDoctors',
    component: ListDoctorsPage,
  },
  {
    path: '/listClinics',
    name: 'listClinicsPage',
    component: ListClinicsPage,
  },
  {
    path: '/clinicDetail',
    name: 'clinicDetailPage',
    component: ClinicDetailPage,
  },
  {
    path: '/doctorDetail',
    name: 'doctorDetailPage',
    component: DoctorDetailPage,
    props: true,
  },
  {
    path: '/formEnterPatient',
    name: 'formEnterPatient',
    component: FormEnterPatient,
  },
  {
    path: '/formEnterDoctor',
    name: 'formEnterDoctor',
    component: FormEnterDoctor,
  },
  {
    path: '/formEnterClinic',
    name: 'formEnterClinic',
    component: FormEnterClinic,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router