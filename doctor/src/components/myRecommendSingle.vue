<template>
<div class="box">
    <div class="top flex_s_c">
      <div class="top_input flex_s_c">
        <div>姓名：</div><el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <div class="top_input_date  flex_s_c">
        <div>患者类型：</div>
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
      <el-button type="primary" icon="el-icon-search"></el-button>
      <el-button type="primary">清空</el-button>
    </div>
    <div class="health">
        <el-table :data="tableData4" style="width: 100%">
          <el-table-column prop="num" label="序号" width="50"></el-table-column>
          <el-table-column prop="number" label="推荐单号" sortable></el-table-column>
          <el-table-column prop="name" label="姓名" sortable></el-table-column>
          <el-table-column prop="date" label="开单时间" sortable></el-table-column>
          <el-table-column prop="type" label="类型" sortable></el-table-column>
          <el-table-column prop="state" label="状态" sortable></el-table-column>
          <el-table-column label="操作" sortable>
            <template slot-scope="scope">
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small" class="el-icon-view">查看</el-button>
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
  name:"myRecommendSingle",
  data(){
    return {
            value7: '',
            tableData4: [{
                      num:1,
                      name: '张三',
                      Recommendtype:"门诊器械推荐单",
                      state:"已执行"
                    }],
    }
  }
}
</script>

<style scoped>
.top{
  height: 70px;
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
