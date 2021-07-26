<template>
  <footer>  
        <div class="footer-content">
            <p>술과 음식을 좋아하는 우리가 직접 방문한 맛집들을 소개해주는 블로그입니다.</p>
            <ul class="socials">
                <li class="icon s2"><a href="https://www.youtube.com/channel/UCOY2brQ_esbkHEqUEHwPJfg"><img alt="youtube logo(icons8)" style="width: 30px" src="../../img/youtube.png" /></a></li>
                <li class="icon s2"><a href="http://localhost:8081"><img alt="youtube logo(icons8)" style="width: 30px" src="../../img/admin.png" /></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>Copyright &copy;2021 programjy.tistory.com Designed by <span>jyshin</span></p>
        </div>
    </footer>
</template>

<script>
export default {
    // name: 'footer',
    data() {
        return {

        }
    },
    created() {
    },
    methods: {
        kakaoShare() {
            alert('카카오톡 공유하기')
        } 
    }

}
</script>

<style>
@font-face {
    font-family: 'jua';
    src:url('../../../public/fonts/BMJUA_ttf.ttf')
}
@font-face {
    font-family: 'dohyeon';
    src:url('../../../public/fonts/BMDOHYEON_ttf.ttf')
}
a {
    cursor:pointer;
}
footer{
    bottom: 0;
    left: 0;
    right: 0;
    background:rgba(114, 113, 113, 0.54);
    height: auto;
    width: 100vw;
    font-family: "Open Sans";
    padding-top: 10px;
    color: #111;
}
.footer-content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-family:'dohyeon';
}

.footer-content p{
    max-width: 500px;
    margin: 10px auto;
    line-height: 28px;
    font-size: 14px;
}
.footer-bottom {
    width: 100vw;
    padding: 10px 0;
    text-align: center;
}
.footer-bottom p {
    font-size: 14px;
    word-spacing: 2px;
}
.footer-bottom span {
    font-weight: bold;
}

.socials{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 1rem 0;
}
.socials li{
    margin: 0 10px;
}
.socials a{
    text-decoration: none;
    color: #111;
}
.socials a i{
    font-size: 1.1rem;
    transition: color .4s ease;

}
.socials a:hover i{
    color: aqua;
}
</style>