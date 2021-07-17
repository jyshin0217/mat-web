<template>
  <footer>
      <div class="footer_main">
          <div class="footer_info_top">
              <div>쭈니 찌니</div>
              <div>어쩌구 저쩌구 내용들</div>
          </div>
          <div class="footer_info_bottom">
              <div>
                  <a href="#"><img alt="kakao logo(icons8)" style="width: 30px" src="../../img/kakao.png" /></a>
              </div>
              <div>
                  <a href="#"><img alt="youtube logo(icons8)" style="width: 30px" src="../../img/youtube.png" /></a>
              </div>
              

          </div>
          
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
.footer_main {
    border: 1px solid blue;
    display: flex;
    height: 60px;
}
.footer_info_top {
    border: 1px solid green;
    width: 50%;
}
.footer_info_bottom {
    border: 1px solid red;
    width: 50%;
    display: flex;
}
</style>