<template>
  <div class="displayPanel_right">
    <div class="row_wrap">
      <el-radio v-model="radio" label="初诊">初诊</el-radio>
      <el-radio v-model="radio" label="复诊">复诊</el-radio>
    </div>
    <div class="basic_info">
        <div class="basic_info_row"><span>姓名：张三</span><span>姓名：张三</span><span>姓名：张三</span></div>
        <div class="basic_info_row"><span>个人史：</span><span>经常居留地：本地；</span></span><span>吸烟史：无；</span><span>饮酒史：平均2两/日；</span><span>毒品接触史：无；</span></div>
        <div class="basic_info_row"><span>家庭史：高血压、糖尿病</span></div>
        <div class="basic_info_row"><span>既往史：</span><span>平常健康状况：良好；</span></span><span>疾病史：无；</span><span>预防接种史：无；</span><span>手术史：无；</span><span>输血史：无；</span><span>药品过敏史：无；</span></div>
    </div>
    <div class="row_wrap flex_s"><div class="row_wrap_title">主诉：</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
    <div class="row_wrap flex_s"><div class="row_wrap_title">现病史：</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
    <div class="row_wrap flex_s"><div class="row_wrap_title">初步诊断：</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
    <div class="row_wrap flex_s">
      <div class="row_wrap_title">体格检查：</div>
      <div class="row_wrap_Physique flex_s_c"><div>体温<input type="text">°C</div><div>脉搏<input type="text">次/分</div><div>呼吸<input type="text">次/分</div><div>血压<input type="text">/<input type="text">mmhg</div></div>
      </div>
    <div class="row_wrap flex_s">
      <div class="row_wrap_title">其它检查：</div>
      <div class="row_wrap_other">
         <el-input v-model="input" placeholder="请输入内容"></el-input>
         <p>上传影视资料（检查报告，X光等）</p>
         <el-upload
           action=""
           list-type="picture-card"
           :on-preview="handlePictureCardPreview"
           :on-remove="handleRemove" :http-request="fn">
           <i class="el-icon-plus"></i>
         </el-upload>
         <el-dialog :visible.sync="dialogVisible" size="tiny">
           <img width="100%" :src="dialogImageUrl" alt="">
         </el-dialog>
      </div>
    </div>
    <div class="row_wrap flex_s"><div class="row_wrap_title">诊断依据：</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
    <div class="row_wrap flex_s"><div class="row_wrap_title">鉴别诊断：</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
    <div class="row_wrap flex_s"><div class="row_wrap_title">诊断禁忌：</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
    <div class="recommend">
      <el-button-group>
        <el-button @click="showPrescriptionTo">用药推荐</el-button>
        <el-button @click="showPrescriptionTo">器械推荐</el-button>
      </el-button-group>
      <div class="prescription flex_s">
        <div class="write_prescription" v-if="showPrescription">
          <div class="write_row flex_b">
            <div class="write_row_one flex_s_c"><div>组号：</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            <div class="write_row_one flex_s_c"><div>药品：</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
          </div>
          <div class="write_row flex_b">
            <div class="write_row_one flex_s_c"><div>规格：</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            <div class="write_row_one flex_s_c"><div>数量：</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
          </div>
          <div class="write_row flex_b">
            <div class="write_row_one flex_s_c"><div>用量：</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            <div class="write_row_one flex_s_c"><div>用法：</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
          </div>
          <div class="write_row flex_s_c">
            <div class="write_row_two">频率：</div><el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="write_row flex_s_c">
            <div class="write_row_two">医嘱：</div><el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="write_row flex_b_c">
            <div class="delete_write"><i class="el-icon-delete"></i>清空</div>
            <div>保存到右侧<el-button class="preserve_write" size="small" type="primary" icon="el-icon-d-arrow-right"></el-button></div>
          </div>
        </div>
        <div class="write_prescription" v-else>
          <div class="write_row flex_b">
            <div class="write_row_one flex_s_c"><div>组号：</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            <div class="write_row_one flex_s_c"><div>药械：</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
          </div>
          <div class="write_row flex_b">
            <div class="write_row_one flex_s_c"><div>规格：</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
            <div class="write_row_one flex_s_c"><div>数量：</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
          </div>
          <div class="write_row flex_s_c">
            <div class="write_row_two">医嘱：</div><el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="write_row flex_b_c">
            <div class="delete_write"><i class="el-icon-delete"></i>清空</div>
            <div>保存到右侧<el-button class="preserve_write" size="small" type="primary" icon="el-icon-d-arrow-right"></el-button></div>
          </div>
        </div>
        <div class="show_prescription" v-if="showPrescription">
          <div class="show_prescription_top flex_b_c">
            <div class="top_logo">Rp.</div>
            <div><el-button @click="showCallTemplateTo">调用模板</el-button><el-button @click="showSaveTemplateTo">存为模板</el-button></div>
          </div>
          <div class="show_panel">
            <div class="show_single flex_s">
              <div class="number">1、</div>
              <div class="info">
                <p><span>抗骨增生片</span><span>25mg*14</span><span>x4</span></p>
                <p><span>用法：口服</span><span>用量：25mg</span><span>频率：一日三次</span></p>
                <p><span>医嘱：饭后服用</span></p>
              </div>
            </div>
            <div class="show_single flex_s">
              <div class="number">2、</div>
              <div class="info">
                <p><span>抗骨增生片</span><span>25mg*14</span><span>x4</span></p>
                <p><span>用法：口服</span><span>用量：25mg</span><span>频率：一日三次</span></p>
                <p><span>医嘱：饭后服用</span></p>
              </div>
            </div>
            <div class="show_single flex_s">
              <div class="number">3、</div>
              <div class="info">
                <p><span>抗骨增生片</span><span>25mg*14</span><span>x4</span></p>
                <p><span>用法：口服</span><span>用量：25mg</span><span>频率：一日三次</span></p>
                <p><span>医嘱：饭后服用</span></p>
              </div>
            </div>
            <div class="show_single flex_s">
              <div class="number">4、</div>
              <div class="info">
                <p><span>抗骨增生片</span><span>25mg*14</span><span>x4</span></p>
                <p><span>用法：口服</span><span>用量：25mg</span><span>频率：一日三次</span></p>
                <p><span>医嘱：饭后服用</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="show_prescription" v-else>
          <div class="show_prescription_top flex_b_c">
            <div class="top_logo">Rp.</div>
            <div><el-button>调用模板</el-button><el-button>存为模板</el-button></div>
          </div>
          <div class="show_panel">
            <div class="show_single flex_s">
              <div class="number">1、</div>
              <div class="info">
                <p><span>一次性医用口罩</span></p>
                <p><span>规格：1盒/10</span><span>x4</span></p>
              </div>
            </div>
            <div class="show_single flex_s">
              <div class="number">2、</div>
              <div class="info">
                <p><span>一次性医用口罩</span></p>
                <p><span>规格：1盒/10</span><span>x4</span></p>
              </div>
            </div>
            <div class="show_single flex_s">
              <div class="number">3、</div>
              <div class="info">
                <p><span>一次性医用口罩</span></p>
                <p><span>规格：1盒/10</span><span>x4</span></p>
              </div>
            </div>
            <div class="show_single flex_s">
              <div class="number">4、</div>
              <div class="info">
               <p><span>一次性医用口罩</span></p>
               <p><span>规格：1盒/10</span><span>x4</span></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>



    <div class="Submission flex_c_c">
       <el-button>提交审核</el-button>
    </div>


    <div class="Save_template flex_c_c" v-if="showSaveTemplate">
      <div class="Save_input">
        <div class="Save_input_top flex_b_c">
          <div>新增模板</div><i class="close el-icon-close" @click="showSaveTemplateTo"></i>
        </div>
        <div class="Save_row flex_s_c"><div>模板名称：</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
        <div class="Save_row flex_s_c"><div>模板备注：</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
        <div class="Save_row flex_e_c"><el-button size="mini">保存</el-button><el-button size="mini" @click="showSaveTemplateTo">取消</el-button></div>
      </div>
    </div>
    <div class="call_template flex_c_c" v-if="showCallTemplate">
      <div class="call_panel">
        <div class="call_row_top flex_b_c">
          <div>处方调用</div><i class="close el-icon-close" @click="showCallTemplateTo"></i>
        </div>
        <div class="call_btn flex_c_c">
          <el-button @click="showCallLists">用药模板</el-button><el-button @click="showCallLists">器械模板</el-button>
        </div>
        <div class="call_search">
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input21">
          </el-input>
        </div>
        <div class="call_list" v-if="showCallList">
          <el-table :data="tableData4" style="width: 100%" max-height="250">
              <el-table-column prop="num" label="序号" width="50"></el-table-column>
              <el-table-column prop="name" label="模板名称"></el-table-column>
              <el-table-column prop="remarks" label="模板备注"></el-table-column>
              <el-table-column prop="date" label="创建日期"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">调用</el-button>
                  <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">详情</el-button>
                  <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
        </div>
        <div class="call_list" v-else>
          <el-table :data="tableData5" style="width: 100%" max-height="250">
              <el-table-column prop="num" label="序号" width="50"></el-table-column>
              <el-table-column prop="name" label="模板名称"></el-table-column>
              <el-table-column prop="remarks" label="模板备注"></el-table-column>
              <el-table-column prop="date" label="创建日期"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">调用</el-button>
                  <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">详情</el-button>
                  <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        showSaveTemplate:false,
        showPrescription:true,
        showCallTemplate:false,
        showCallList:true,
        radio:"",
        input:"",
        dialogImageUrl: '',
        dialogVisible: false,
        tableData4: [{
                  num:1,
                  name: '高血压用药模板',
                  remarks: '无备注',
                  date: '2016-05-03'
               }],
        tableData5: [{
                  num:1,
                  name: '轮椅药械模板',
                  remarks: '无备注',
                  date: '2016-05-03'
               }]
      }
    },
    methods:{
      showSaveTemplateTo(){
        this.showSaveTemplate = !this.showSaveTemplate;
      },
      showPrescriptionTo(){
        this.showPrescription = !this.showPrescription;
      },
      showCallTemplateTo(){
        this.showCallTemplate = !this.showCallTemplate;
      },
      showCallLists(){
        this.showCallList = !this.showCallList;
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      fn(){

      }
    }
  }
</script>

<style scoped>




.displayPanel_right{
  width: 100%;
  padding-left: 361px;
  box-sizing: border-box;
}
.row_wrap{
  width: 100%;
  margin: 10px 0;
}
.row_wrap_title{
  width: 90px;
  text-align: end;
  line-height: 40px;
}
.basic_info{
  margin: 10px 0;
  background-color: #F2F2F2;
  padding: 10px 10px;
}
.basic_info_row{
  line-height: 30px;
}
.basic_info .basic_info_row:first-child span{
  margin-right: 30px;
}
.basic_info_row span{
  margin-right: 10px;
}
.inputs{
  margin: 5px 0;
}
.inputs div{
  width: 80px;
  text-align: end;
  line-height: 40px;
}
.row_wrap_Physique{
  width: 100%;
  height: 40px;
  margin-right: 20px;
}
.row_wrap_Physique div{
  margin-right: 30px;
}
.row_wrap_Physique input{
  width: 50px;
  border: 0;
  border-bottom: 1px solid #E4E4E4;
  outline: none;
  text-align: center;
}
.row_wrap_other{
  width: 100%;
}
.row_wrap_other p{
  line-height: 40px;
}
.recommend{
  width: 100%;
  padding-top: 20px;
  border-bottom: 1px solid #E4E4E4;
}



.prescription{
  width: 100%;
  margin-top: 20px;
  position: relative;
}
.write_prescription{
  width: 400px;
  padding: 0 15px;
  box-sizing: border-box;
  border-right: 1px solid #E4E4E4;
  background-color: white;
}
.write_row_one div:first-child,.write_row_two{
  width: 50px;
  font-size: 12px;
}
.write_row{
  height: 40px;
  margin-bottom: 15px;
  font-size: 12px;
}
.write_row .write_row_one:first-child{
  margin-right: 10px;
}
.delete_write i{
  margin-right: 3px;
}
.preserve_write{
  margin-left: 10px;
}
.show_prescription{
  width: 100%;
  margin-left: 10px;
  box-sizing: border-box;
}
.show_prescription_top{
  height:40px;
  background-color: white;
}

.show_panel{
  width: 100%;
  /* height: 290px;
  overflow-y: auto; */
  padding-left: 20px;
  box-sizing: border-box;
}
.show_single{
  margin: 10px 0;
  font-size: 12px;
}
.show_single .number{
  text-align: end;
  line-height: 25px;
}
.show_single .info p{
  line-height: 25px;
}
.show_single .info p span{
  margin-right: 20px;
}



.Save_template,.call_template{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background-color: rgba(0,0,0,0.5);
}
.Save_template .Save_input{
  width: 300px;
  height: 200px;
  background-color: #FFFFFF;
  border-radius: 5px;
}
.Save_template .Save_input_top{
  height: 45px;
  padding: 0 10px;
  border-bottom: 1px solid #E4E4E4;
}
.Save_template .Save_input_top i{
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
.Save_template .Save_row{
  padding: 0 10px;
  height: 40px;
  margin-top: 10px;
}

.Save_template .Save_row div:first-child{
  width: 80px;
  font-size: 12px;
}
.call_template .call_panel{
  width: 600px;
  box-shadow: 5px 5px 5px #999999;
  background-color: white;
}

.call_template .call_row_top{
  height: 45px;
  line-height: 45px;
  background-color: #E4E4E4;
  padding: 0 10px;
}
.call_template .close{
  cursor: pointer;
}
.call_template .call_btn{
  height: 80px;
}
.call_template .call_search{
  width: 200px;
  padding-left: 10px;
}
.call_template .call_list{
  width: 100%;
  padding:10px 10px 40px 10px;
  box-sizing: border-box;
}



.Submission{
  width: 100%;
  height: 100px;
}
</style>
