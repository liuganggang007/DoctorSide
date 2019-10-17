<template>
<div class="box">
    <div class="title_wrap">
      <p>会议列表</p>
    </div>
    <div class="Release">
      <el-button type="primary" @click="toReleaseMeeting">发布会议</el-button>
    </div>

    <div class="top flex_s_c">
      <div class="top_input_date  flex_s_c">
        <div>时间：</div>
        <el-date-picker
          v-model="value7"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions2">
        </el-date-picker>
      </div>
      <div class="top_input flex_s_c">
        <div>会议类型：</div>
        <el-select v-model="typeValue" placeholder="请选择">
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </div>
      <div class="top_input flex_s_c">
        <div>状态：</div>
        <el-select v-model="stateValue" placeholder="请选择">
            <el-option
              v-for="item in stateOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </div>
      <el-button type="primary" icon="el-icon-search"></el-button>
      <el-button type="primary">清空</el-button>
      <el-button type="primary">刷新</el-button>
    </div>

    <div class="health">
        <el-table
            ref="multipleTable"
            :data="tableData3"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="title" label="会议标题"></el-table-column>
            <el-table-column prop="startDate" label="开始时间" ></el-table-column>
            <el-table-column prop="endDate" label="结束时间" ></el-table-column>
            <el-table-column prop="number" label="参会人数" ></el-table-column>
            <el-table-column prop="meetingtype" label="会议类型" ></el-table-column>
            <el-table-column prop="state" label="状态" ></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">修改</el-button>
                <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">查看</el-button>
                <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
        </el-table>
        <div class="health_paging flex_c_c">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
            </el-pagination>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"doctorMeeting",
  data(){
    return{
        input:"",
        value7:"",
        tableData3: [{
                  title:"药品发布会",
                  startDate: '2016-05-03 19：38：29',
                  endDate: '2016-05-03 19：38：29',
                  number:500,
                  meetingtype:"线上会议",
                  state:"已完成"
             },
             {
                       title:"药品发布会",
                       startDate: '2016-05-03 19：38：29',
                       endDate: '2016-05-03 19：38：29',
                       number:500,
                       meetingtype:"线上会议",
                       state:"已完成"
                    }],
        stateOptions: [{
                  value: '选项1',
                  label: '全部'
                }, {
                  value: '选项2',
                  label: '未开始'
                }, {
                  value: '选项3',
                  label: '进行中'
                }, {
                  value: '选项4',
                  label: '已完成'
                }],
        typeOptions: [{
                  value: '选项1',
                  label: '全部会议'
                }, {
                  value: '选项2',
                  label: '线上会议'
                }, {
                  value: '选项3',
                  label: '线下会议'
                }],
                stateValue: '全部',
                typeValue:'全部会议'

    }
  },
  methods:{
    toReleaseMeeting(){
      this.$router.push("doctorMeetingEdit")
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
.Release{
  padding-left: 20px;
  margin: 10px 0;
}
.top{
  height: 70px;
  padding-left: 50px;
  border-bottom: 1px solid #E4E4E4;
}
.top_input{
  width: 250px;
  margin-right: 20px;
}
.top_input_date{
  margin-right: 20px;
}
.top_input div:first-child{
  width: 100px;
  font-size: 14px;
  text-align: end;
}
.health{
  padding: 20px;
}
.health_paging{
  height: 100px;
}
</style>
