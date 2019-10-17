<template>
  <div class="box">
    <div class="title_wrap">
      <p>资讯列表</p>
    </div>
    <div class="Release">
      <el-button type="primary" @click="toReleaseInformation">发布资讯</el-button>
    </div>
    <div class="top flex_s_c">
      <div class="top_input flex_s_c">
        <div>资讯标题：</div><el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <div class="top_input flex_s_c">
        <div>发布时间：</div>
        <el-date-picker
              v-model="value2"
              type="datetime"
              placeholder="选择日期时间"
              align="right"
              :picker-options="pickerOptions1">
            </el-date-picker>
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
            <el-table-column prop="title" label="资讯标题"></el-table-column>
            <el-table-column prop="date" label="发布时间" ></el-table-column>
            <el-table-column prop="Keyword" label="关键字"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small" class="el-icon-view">修改</el-button>
                <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small" class="el-icon-view">查看</el-button>
                <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small" class="el-icon-view">删除</el-button>
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
  name:"doctorInformation",
  data(){
    return{
      input:"",
      value2:"",
      tableData3: [{
                title:"药品发布会",
                date: '2016-05-03 19：38：29',
                Keyword:"药品发布"
             },
             {
                       title:"药品发布会",
                       date: '2016-05-03 19：38：29',
                       Keyword:"药品发布"
                    }]
    }
  },
  methods:{
    toReleaseInformation(){
      this.$router.push("doctorInformationEdit")
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
