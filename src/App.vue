<template>
  <div id="app">
    <header id="home">
        <nav>
            <div class="row">
                <a href="#home">
                    <img src="src/assets/resources/img/logo.png" alt="cuda" class="logo">
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

<style>

</style>
