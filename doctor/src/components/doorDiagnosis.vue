<template>
<div>
  <doorPatientList></doorPatientList>
  <PatientInfo></PatientInfo>
</div>
</template>

<script>
import doorPatientList from './PatientList/doorPatientList'
import PatientInfo from './PatientList/PatientInfo'
export default {
  name:"doorDiagnosis",
  components:{
    doorPatientList,PatientInfo
  },
  data(){
    return {
    }
  }
}
</script>

<style scoped>
</style>
