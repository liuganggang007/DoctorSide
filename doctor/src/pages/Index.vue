<template>
  <div class="box">
    <div class="top flex_s_c" v-ThemeColor>
      <div class="logo"><img src="" alt=""></div>
      <div class="logoName">医智诺服务平台</div>
    </div>
    <div class="nav" v-ThemeColor>
      <ul class="navList">
      	<li v-for="(navList,index) in navLists" :key="index">
          <div class="navListWords" v-ThemeColor @click="showSubtitle(index)">{{navList.title}}</div>
          <div v-show="navList.showSubtitle" class="subnavs" v-for="(subtitle,subindex) in navList.subtitle" :key="subindex" @click="selected(index,subindex)">
            <router-link :to="subtitle.url" :class="{subnavs_selected:subtitle.showStyle}">{{subtitle.subtitleAny}}</router-link>
          </div>
      	</li>
      </ul>
    </div>
    <div class="displayPanel">
      <router-view/>
    </div>
  </div>

</template>

<script>
export default {
  name:"Index",
  data(){
    return{
      radio:"",
      navLists:[
        {
          title:"患者管理",
          showSubtitle:false,
          subtitle:[
            {subtitleAny:"门诊患者",showStyle:false,url:"/"},
            {subtitleAny:"住院患者",showStyle:false,url:"liveDiagnosis"}
          ]
        },
        {
          title:"推荐管理",
          showSubtitle:false,
          subtitle:[
            {subtitleAny:"用药推荐单",showStyle:false,url:"RecommendSingle"},
            {subtitleAny:"我的推荐单",showStyle:false,url:"myRecommendSingle"}
          ]
        },
        {
          title:"资讯",
          showSubtitle:false,
          subtitle:[
            {subtitleAny:"医生资讯",showStyle:false,url:"doctorInformation"},
            {subtitleAny:"患者资讯",showStyle:false,url:"patientInformation"}
          ]
        },
        {
          title:"会议",
          showSubtitle:false,
          subtitle:[
            {subtitleAny:"医生会议",showStyle:false,url:"doctorMeeting"}
          ]
        }
        // {
        //   title:"系统设置",
        //   showSubtitle:false,
        //   subtitle:[
        //     {subtitleAny:"处方模板",showStyle:false}
        //   ]
        // }
      ]
    }
  },
  methods:{
    selected(m,n){
      for(let i=0;i<this.navLists.length;i++){
        for(let j=0;j<this.navLists[i].subtitle.length;j++){
          if(i==m && j==n){
            this.navLists[i].subtitle[j].showStyle = true;
            continue;
          }else{
            this.navLists[i].subtitle[j].showStyle = false;
          }
        }
      }
    },
    showSubtitle(m){
      for(let i=0;i<this.navLists.length;i++){
        if(i == m){
          this.navLists[i].showSubtitle = !this.navLists[i].showSubtitle;
          continue;
        }else{
          this.navLists[i].showSubtitle = false;
        }
      }
    }
  }
}
</script>

<style scoped>

.top{
  width: 100%;
  height: 80px;
  padding: 0 20px;
  position: fixed;
  top: 0;
  z-index: 999;
}
.logo{
  width: 60px;
  height: 50px;
  border-radius: 5px;
  overflow: hidden;
  margin-right: 15px;
  background-color: #42B983;
}
.logoName{
  font-weight: bold;
  font-size: 16px;
}
.nav{
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 888;
  padding-top: 150px;
}
.displayPanel{
  position: fixed;
  width: 100%;
  height: 100%;
  padding-left: 200px;
  padding-top: 80px;
  box-sizing: border-box;
  padding-right: 10px;
  overflow-y: auto;
}
.navListWords{
  height: 30px;
  width: 200px;
  line-height: 30px;
  box-sizing: border-box;
  padding-left: 30px;
  padding-left: 10px;
  font-size: 16px;
  cursor: pointer;
}
.subnavs{
  height: 30px;
  width: 200px;
  line-height: 30px;
  box-sizing: border-box;
  padding-left: 30px;
  background-color: #E4E4E4;
  cursor: pointer;
  font-size: 14px;
}

.subnavs:hover{
  color: red;
}
.subnavs_selected{
  font-weight: bold;
  color: red;
}



</style>
