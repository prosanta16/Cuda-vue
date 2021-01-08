<template>
  <div id="app">
    <header id="home">
        <nav>
            <div class="row">
                <a href="#home">
                    <img src="./assets/resources/img/logo.png" alt="cuda" class="logo">
                </a>
                <ul class="main-nav">
                    <li class="active"><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#skill">Skills</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#testimonial">Testimonial</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
        <div class="row">
            <div class="hero-text-box">
                <h1>Hi there! We are the new kids on the block and we build awesome websites and mobile apps.</h1>
                <a href="#" class="btn btn-hero">Work with us</a>
            </div>
        </div>

    </header>
    
    
    <Services />
    <Team/>
    <Skill/>
    <Portfolio/>
    <Testimonial/>
    <AccountFooter/>
  </div>
</template>

<script>
import Services from './components/Services.vue'
import Team from './components/Team.vue'
import Skill from './components/Skill.vue'
import Portfolio from './components/Portfolio.vue'
import Testimonial from './components/Testimonial.vue'
import AccountFooter from './components/AccountFooter.vue'

export default {
  name: 'App',
  components: {
    Services,
    Team,
    Skill,
    Portfolio,
    Testimonial,
    AccountFooter
  }
}
</script>

<style scoped>

header{
    background:linear-gradient(rgba(135, 80, 156, 0.9), rgba(135, 80, 156, 0.9)),url("./assets/resources/css/img/hero-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center center;
    background-attachment: fixed;
    height:85vh;
    position: relative;
}
.logo{
    height: 3.55rem;
    width: auto;
    margin-top: 3.5rem;
    float: left;
}
.hero-text-box{
    width: 114rem;
    
}
h1{
    font-size: 4.2rem;
    color: #fff;
    display: inline-block;
}
/* main navigation */
.main-nav {
    float: right;
    margin-top: 4rem;
}
.main-nav li{
    display: inline-block;
    margin-left: 1rem;
}
.main-nav li:first-child{
    margin-left: 0;
}
.main-nav li a:link,
.main-nav li a:visited{
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    background: rgba(100, 58,121, 0);
    padding:6px 16px;
    border-radius: 3px;
    display: inline-block;
    font-size: 1.6rem;
    transition: 0.3s;
}
.main-nav li:hover a:link,
.main-nav li:hover a:visited{   
    background:rgba(100, 58,121, 1);
}
.active{
    background:rgba(100, 58,121, 1);
    border-radius: .3rem;
}
.hero-text-box{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align:center;
}
.btn-hero:link,
.btn-hero:visited{
    background: #eb7d4b;
    border-color: #c86a40;
}


</style>
