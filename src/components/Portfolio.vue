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
                    <img src="resources/img/1.png" class="portfolio-image" alt="Isometric Perspective Mock-Up">
                    <h4>Isometric Perspective Mock-Up</h4>
                </div>
                <div class="col span_1_of_2 box mix apps web">
                    <img src="resources/img/2.png" class="portfolio-image" alt="Time Zone App UI">
                    <h4>Time Zone App UI</h4>
                </div>
                <div class="col span_1_of_2 box mix icon">
                    <img src="resources/img/3.png" class="portfolio-image" alt="Viro Media Players UI">
                    <h4>Viro Media Players UI</h4>
                </div>
                <div class="col span_1_of_2 box mix icon web apps">
                    <img src="resources/img/4.png" class="portfolio-image" alt="Blog / Magazine Flat UI Kit">
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
<style >

</style>