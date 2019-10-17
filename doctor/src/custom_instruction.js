import Vue from 'vue'
// 自动获取焦点
Vue.directive('focus',{
   inserted:function(el){
     el.focus()
   }
})
// 主题色
Vue.directive('ThemeColor',{
  bind:function(el,binding,vnode){
    el.style.backgroundColor = "#D7D7D7"
  }
})
export default {}
