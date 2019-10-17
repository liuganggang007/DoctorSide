<template>
<div class="PatientNav">
        <div class="PatientNav_top">
          <div class="PatientNav_top_title">我的住院患者（3）</div>
          <div class="PatientNav_top_search flex_c_c">
            <span>姓名：</span><input type="text" placeholder="请输入患者姓名/身份证号"><button><i class="el-icon-search"></i></button>
          </div>
        </div>
        <div class="PatientNavList">
          <div>
            <div class="PatientNavListOne flex_s_c">
                <div class="userimg"><img src="" alt=""></div>
                <div class="userinfo">
                  <p>张安/35/女</p>
                  <p><span>胆囊结石</span><span>已入院30天</span></p>
                  <p>普通内科</p>
                </div>
            </div>
          </div>
           <div class="PatientNavList_paging flex_c_c">
             <el-pagination
               background
               small
               layout="prev, pager, next"
               :page-sizes="[100, 200, 300, 400]"
               :current-page="currentPage4"
               :total="4000">
             </el-pagination>
           </div>

        </div>
      </div>
</template>

<script>
export default {
  data(){
    return {
      currentPage4:4
    }
  }
}
</script>

<style scoped>
.PatientNav{
  width: 350px;
  position: fixed;
  height: 100%;
  top: 80px;
  left: 200px;
  border-right: 1px solid #E4E4E4;
}
.PatientNav_top{
  width: 100%;
  height: 70px;
  padding-top: 10px;
}
.PatientNav_top_title{
  line-height: 30px;
  padding-left: 10px;
  color: #4A69ff;
}
.PatientNav_top_search{
  height: 40px;
  width: 100%;
  line-height: 40px;
  box-sizing: border-box;
  padding-left: 10px;
}
.PatientNav_top_search input,.PatientNav_top_search button{
  border-radius: 3px;
}
.PatientNav_top_search input{
  height: 25px;
  border: 1px solid #999999;
  padding-left: 8px;
  font-size: 12px;
  line-height: 25px;
}
.PatientNav_top_search button{
  margin-left: 10px;
  height: 28px;
  width: 40px;
  background-color: #2E69EE;
  border: 0;
}
.PatientNavList{
  width: 100%;
}
.PatientNavListOne{
  height: 70px;
  padding-left: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #E4E4E4;
}
.userimg{
width: 40px;
height: 40px;
border-radius: 50%;
background-color: red;
overflow: hidden;
margin-right: 5px;
}
.userinfo{
height: 60px;
}
.userinfo p{
height: 20px;
line-height: 20px;
font-size: 14px;
}
.userinfo p:last-child{
font-size: 12px;
}
.userinfo p span{
  margin-right: 20px;
  font-size: 12px;
}
.userinfo_paging{
margin-top: 10px;
}
.PatientNavList_paging{
  width: 100%;
  margin-top: 20px;
}
</style>
