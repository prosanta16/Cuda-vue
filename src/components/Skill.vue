<template>
<div class="skill">
    <section class="skill-section" id="skill">
            <div class="row">
                <h2>
                    WE GOT SKILLS!
                </h2>
                <p class="little-des">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>
    
            </div>
            <div class="row">
                <div class="col span_1_of_4 box">
                    <svg class="radial-progress web-design" data-percentage="90" viewBox="0 0 80 80">
                        <circle class="incomplete" cx="40" cy="40" r="35"></circle>
                        <circle class="complete" cx="40" cy="40" r="35" style="stroke-dashoffset: 39.58406743523136;">
                        </circle>
                        <text class="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">90%</text>
                    </svg>
                    <h3>Web Design</h3>
                </div>
                <div class="col span_1_of_4 box">
                    <svg class="radial-progress html-css" data-percentage="75" viewBox="0 0 80 80">
                        <circle class="incomplete" cx="40" cy="40" r="35"></circle>
                        <circle class="complete" cx="40" cy="40" r="35" style="stroke-dashoffset: 39.58406743523136;">
                        </circle>
                        <text class="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">75%</text>
                    </svg>
                    <h3>Html / css</h3>
                </div>
                <div class="col span_1_of_4 box">
                    <svg class="radial-progress gc-design" data-percentage="70" viewBox="0 0 80 80">
                        <circle class="incomplete" cx="40" cy="40" r="35"></circle>
                        <circle class="complete" cx="40" cy="40" r="35" style="stroke-dashoffset: 39.58406743523136;">
                        </circle>
                        <text class="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">70%</text>
                    </svg>
                    <h3>Graphics design</h3>
                </div>
                <div class="col span_1_of_4 box">
                    <svg class="radial-progress ui-ux" data-percentage="85" viewBox="0 0 80 80">
                        <circle class="incomplete" cx="40" cy="40" r="35"></circle>
                        <circle class="complete" cx="40" cy="40" r="35" style="stroke-dashoffset: 39.58406743523136;">
                        </circle>
                        <text class="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">85%</text>
                    </svg>
                    <h3>UI / UX</h3>
                </div>
            </div>
        </section>
</div>
</template>
<script>
export default {
    name:'Skill'
}
</script>
<style scoped>
.row{
    max-width: 114rem;
    margin: 0 auto;
}

.col {
	display: block;
	float:left;
	margin: 1% 0 1% 1.6%;
}

.col:first-child { margin-left: 0; }
.span_1_of_4 {
	width: 23.8%; 
}
.box{
    padding: 0 2%;
}
.box p{
    font-size: 1.6rem;
    font-weight: 300;
    margin-top: 2rem;
    color: #fff;
}
.skill-section{
    color: #3c4761;
    text-align: center;
    background: linear-gradient(rgba(255, 255, 255, 0.8),rgba(255, 255, 255, 0.8)) ,url("../assets/resources/css/img/skill-bg.jpg");
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    background-attachment: fixed;
    height:60rem;
}
.skill-section h2,
.skill-section h3{
    color: #3c4761;
}
.skill-section h2::after{
    background: #dfe8ed;
}
.skill-section .box{
    margin-top: 4.5rem;
}
svg.radial-progress circle{
    stroke-width: 5;
}

svg.web-design circle{
    stroke: #30bae7;
}

svg.html-css circle{
    stroke: #d74680;
}

svg.gc-design circle{
    stroke: #15c7a8;
}
svg.ui-ux circle{
    stroke: #eb7d4b;
}
.little-des{
    font-size: 1.8rem;
    width: 60%;
    margin-left: 20%;
    line-height: 3rem;

}
h2{
    font-size: 4rem;
    text-transform: uppercase;
    letter-spacing:0.3rem;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 2rem;
    color: #fff;
}
h2::after{
    content: "";
    display: block;
    height: .4rem;
    background: #fff;
    width: 8.5rem;
    margin: auto;
    margin-top: 2rem;
    text-align: center;

}
h3{
    font-size: 2.4rem;
    text-transform: uppercase;
    font-weight: 600;
    color: #fff;
}
.clearfix::after{
    content: "";
    clear: both;
    display: block;
    height: 0;
    visibility: hidden;
}
</style>

