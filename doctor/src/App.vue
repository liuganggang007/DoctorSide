<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
a,a:hover,a:visited,a:active,a:focus{text-decoration: none;color: #666;}
img{
  width: 100%;
  height: 100%;
}
.flex_b{
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
}
.flex_b_c{
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
}
.flex_s_c{
  display: flex;
  display: -webkit-flex;
  justify-content: flex-start;
  align-items: center;
}
.flex_s{
  display: flex;
  display: -webkit-flex;
  justify-content: flex-start;
}
.flex_c_c{
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}
.flex_c{
  display: flex;
  display: -webkit-flex;
  justify-content: center;
}
.flex_e{
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
}
.flex_e_c{
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
