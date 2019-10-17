import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import doorDiagnosis from '@/components/doorDiagnosis'
import liveDiagnosis from '@/components/liveDiagnosis'
import RecommendSingle from '@/components/RecommendSingle'
import myRecommendSingle from '@/components/myRecommendSingle'
import doctorInformation from '@/components/doctorInformation'
import patientInformation from '@/components/patientInformation'
import doctorMeeting from '@/components/doctorMeeting'
import doctorMeetingEdit from '@/components/edit/doctorMeetingEdit'
import doctorInformationEdit from '@/components/edit/doctorInformationEdit'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path:'/',
          name:'doorDiagnosis',
          component:doorDiagnosis
        },
        {
          path:'/liveDiagnosis',
          name:'liveDiagnosis',
          component:liveDiagnosis
        },
        {
          path:'/RecommendSingle',
          name:'RecommendSingle',
          component:RecommendSingle
        },
        {
          path:'/myRecommendSingle',
          name:'myRecommendSingle',
          component:myRecommendSingle
        },
        {
          path:'/doctorInformation',
          name:'doctorInformation',
          component:doctorInformation
        },
        {
          path:'/patientInformation',
          name:'patientInformation',
          component:patientInformation
        },
        {
          path:'/doctorMeeting',
          name:'doctorMeeting',
          component:doctorMeeting
        },
        {
          path:'/doctorMeetingEdit',
          name:'doctorMeetingEdit',
          component:doctorMeetingEdit
        },
        {
          path:'/doctorInformationEdit',
          name:'doctorInformationEdit',
          component:doctorInformationEdit
        }
      ]
    },
    {
      path:'/Login',
      name:'Login',
      component:Login
    }
  ]
})
