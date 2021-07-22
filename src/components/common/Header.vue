<template>
  <header>
    <!-- style="width: 150px" -->
      <h1><a href="/" class="log"><img alt="june mat logo" src="../../img/junemat.png"/></a></h1>
      <div calss="menuWrap">
          <ul class="menu">
              <li><a href="/">홈!</a></li>
              <li><a href="/junemat">준맛!</a></li>
              <li><a href="/jinmat">찐맛!</a></li>
              <li><a href="/youtube">유튜브</a></li>
              <li><a href="/adminReg">관리자(저장)</a></li>
              <li><a href="/adminView">관리자(화면)</a></li>
          </ul>
      </div>
  </header>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    created() {
    },
    methods: {
    }

}
</script>

<style scoped>
@font-face {
    font-family: 'jua';
    src:url('../../../public/fonts/BMJUA_ttf.ttf')
}
@font-face {
    font-family: 'dohyeon';
    src:url('../../../public/fonts/BMDOHYEON_ttf.ttf')
}
header{
  width: 100%;
  text-align: center;
  position: relative;
  height: 120px;
  border-bottom: 1px solid #35495e
}
header h1 {
  position: absolute;
  top: 0;
  left: 100px;
}
header ul .menu:after {
  display: block;
  clear: both;
  content: '';
}
header ul.menu {
  position: absolute;
  top: 20px;
  right:100px;
}
header ul.menu li {
  float: left;
  padding: 10px 20px;
  list-style: none;
}
img {
  height: 98px;
  width: 200px;
}
a {
  text-decoration: none;
  color: #333;
  font-family: jua;
  font-size: 30px;
}
</style>