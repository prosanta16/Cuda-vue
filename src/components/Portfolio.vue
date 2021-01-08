<template>
    <div class="portfolio">
        <section class="portfolio-section" id="portfolio">
            <div class="row">
                <h2>OUR portpolio</h2>
                <p class="little-des">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
                    consectetur, adipisci velit, sed quia non numquam
                </p>
            </div>
            <div class="row">
                <div class="portfolio-filter">
                    <button type="button" data-filter="all">all</button>
                    <button type="button" data-filter=".web">web</button>
                    <button type="button" data-filter=".apps">apps</button>
                    <button type="button" data-filter=".icon">icon</button>
                </div>
            </div>
            <div class="row container">
                <div class="col span_1_of_2 box mix apps">
                    <img src="../assets/resources/img/1.png" class="portfolio-image" alt="Isometric Perspective Mock-Up">
                    <h4>Isometric Perspective Mock-Up</h4>
                </div>
                <div class="col span_1_of_2 box mix apps web">
                    <img src="../assets/resources/img/2.png" class="portfolio-image" alt="Time Zone App UI">
                    <h4>Time Zone App UI</h4>
                </div>
                <div class="col span_1_of_2 box mix icon">
                    <img src="../assets/resources/img/3.png" class="portfolio-image" alt="Viro Media Players UI">
                    <h4>Viro Media Players UI</h4>
                </div>
                <div class="col span_1_of_2 box mix icon web apps">
                    <img src="../assets/resources/img/4.png" class="portfolio-image" alt="Blog / Magazine Flat UI Kit">
                    <h4>Blog / Magazine Flat UI Kit</h4>
                </div>
            </div>
             <div class="row">
                <a href="#" class="btn btn-load">LOAD MORE PROJECTS</a>
            </div> 
        </section>
    </div>
</template>
<script>
export default {
    name:'Portfolio'
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
.span_1_of_2 {
	width: 49.2%;
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
.portfolio-section{
    background: linear-gradient(rgba(255, 221, 153, 0.8),rgba(255, 221, 153, 0.8)),url("../assets/resources/css/img/portfolio-bg.jpg");
    background-size: cover;
    color: #393939;
    text-align: center;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    text-align: center;
}
.portfolio-section h2::after{
    background: #e5c37f;
}

.portfolio-filter{
    margin: 4.5rem 0;
}
.portfolio-filter button{
    background: #ebc985;
    font-size: 1.8rem;
    padding: 1.0rem 2.0rem;
    border: none;
    border-radius: 0.5rem;
    text-transform: uppercase;
    margin: 0 0.5rem;
    
}
.portfolio-filter button:hover{
    cursor: pointer;
    box-shadow: inset 0rem 0.3rem 0.5rem #393939;
}

.portfolio-image{
    width: 100%;
    height: 30rem;
}

.portfolio-section .col:nth-child(3){
    margin-left: 0rem;
}

.portfolio-section .btn-load{
    background: #17c2a4;
    border-color: #14a58c;
}

.portfolio-section .mixitup-control-active{
    background: #fff;
}

</style>