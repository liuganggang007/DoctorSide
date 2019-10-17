<template>
<div>
  <liveDoorPatientList></liveDoorPatientList>
  <livePatientInfo></livePatientInfo>
</div>
</template>

<script>

import liveDoorPatientList from './PatientList/liveDoorPatientList'
import livePatientInfo from './PatientList/livePatientInfo'
export default {
  name:"liveDiagnosis",
  components:{
    liveDoorPatientList,livePatientInfo
  },
  data(){
    return {
    }
  }
}
</script>

<style scoped>
</style>
