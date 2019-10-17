<template>
  <div class="box">
    <div class="title_wrap">
      <p>发布会议</p>
    </div>
    <div class="edit_row flex_s_c">
      <div class="tips"><span>*</span>会议标题：</div>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
    <div class="edit_row flex_s_c">
      <div class="tips">会议简介：</div>
      <el-input type="textarea" autosize placeholder="请输入内容,最多50字" v-model="textarea2"></el-input>
    </div>
    <div class="edit_row flex_s_c">
      <div class="tips"><span>*</span>会议说明：</div>
      <el-input type="textarea" autosize placeholder="请输入内容,最多50字" v-model="textarea2"></el-input>
    </div>
    <div class="edit_row flex_s_c">
      <div class="tips"><span>*</span>开始时间：</div>
      <el-date-picker class="dateChoose" v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
    </div>
    <div class="edit_row flex_s_c">
      <div class="tips"><span>*</span>结束时间：</div>
      <el-date-picker class="dateChoose" v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
    </div>
    <div class="edit_row flex_s_c">
      <div class="tips"><span>*</span>是否需要报名：</div>
      <div class="dateChoose">
        <el-radio v-model="radio" label="1">是</el-radio>
        <el-radio v-model="radio" label="2">否</el-radio>
      </div>
    </div>
    <div class="edit_row flex_s_c">
      <div class="tips">报名费用：</div>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <span class="unit">元</span>
    </div>
    <div class="edit_row flex_s_c">
      <div class="tips"><span>*</span>报名截至时间：</div>
      <el-date-picker class="dateChoose" v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
    </div>
    <div class="edit_row flex_s_c">
      <div class="tips">主办单位：</div>
      <el-input v-model="input" placeholder="请输入内容（20个汉字以内）"></el-input>
    </div>
    <div class="edit_row flex_s_c">
      <div class="tips">协办单位：</div>
      <el-input v-model="input" placeholder="请输入内容（20个汉字以内）"></el-input>
    </div>
    <div class="edit_row flex_s_c">
      <div class="tips">是否公开：</div>
      <div class="dateChoose">
        <el-radio v-model="radio" label="1">是</el-radio>
        <el-radio v-model="radio" label="2">否</el-radio>
      </div>
    </div>
    <div class="edit_row flex_s_c">
      <div class="tips"><span>*</span>参与人员：</div>
      <div class="tree_bgc">
          <el-tree
            :data="data2"
            show-checkbox
            default-expand-all
            node-key="id"
            ref="tree"
            highlight-current
            :props="defaultProps">
          </el-tree>
      </div>
    </div>

    <div class="edit_row_last flex_e_c">
       <el-button type="primary">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name:"doctorMeetingEdit",
  data(){
    return{
        input:"",
        data2: [{
                  id: 1,
                  label: '一级 1',
                  children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                      id: 9,
                      label: '三级 1-1-1'
                    }, {
                      id: 10,
                      label: '三级 1-1-2'
                    }]
                  }]
                }, {
                  id: 2,
                  label: '一级 2',
                  children: [{
                    id: 5,
                    label: '二级 2-1'
                  }, {
                    id: 6,
                    label: '二级 2-2'
                  }]
                }, {
                  id: 3,
                  label: '一级 3',
                  children: [{
                    id: 7,
                    label: '二级 3-1'
                  }, {
                    id: 8,
                    label: '二级 3-2'
                  }]
                }],
    }
  }
}
</script>

<style scoped>
.title_wrap{
  padding: 5px 10px;
}
.title_wrap p{
  height: 30px;
  line-height: 30px;
  border-left: 5px solid #2E69EE;
  padding-left: 10px;
  box-sizing: border-box;
}
.edit_row{
  width: 800px;
  padding: 0 10px;
  margin: 15px 0;
  box-sizing: border-box;
}
.edit_row div:first-child{
  width: 150px;
  text-align: end;
}
.edit_row div:first-child span{
  color: red;
}
.edit_row_last{
  width: 800px;
  height: 100px;
}
.dateChoose,.tree_bgc{
  width: 100%;
}
.tree_bgc{
  padding: 10px;
  background-color: #E4E4E4;
}
.el-tree{
  background-color: #E4E4E4;
  width: 100% !important;
}
.unit{
  margin-left: 5px;
}
</style>
