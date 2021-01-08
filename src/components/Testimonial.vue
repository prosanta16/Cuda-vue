<template>
    <div class="testimonial">
        <section class="testimonial" id="testimonial">
        <div class="row">
            <h2>WHAT POEPLE SAY ABOUT US</h2>
            <p class="little-des">
                Our clients love us!
            </p>
        </div>
        <div class="row">
            <div class="col span_1_of_2 box">
                <div class="client-pic">
                    <img src="../assets/resources/css/img/1.jpg" alt="c-1">
                </div>
                <div class="client-review">
                    <p>“Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl
                        scelerisque.”
                    </p>
                    <h3>Chanel Iman
                    </h3>
                    <span class="role">CEO of Pinterest
                    </span>

                </div>
            </div>

            <div class="col span_1_of_2 box">
                <div class="client-pic">
                    <img src="../assets/resources/css/img/2.jpg" alt="c-1">
                </div>
                <div class="client-review">
                    <p>“Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl
                        scelerisque.”
                    </p>
                    <h3>Chanel Iman
                    </h3>
                    <span class="role">CEO of Pinterest
                    </span>

                </div>
            </div>

            <div class="col span_1_of_2 box">
                <div class="client-pic">
                    <img src="../assets/resources/css/img/3.jpg" alt="c-1">
                </div>
                <div class="client-review">
                    <p>“Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl
                        scelerisque.”
                    </p>
                    <h3>Chanel Iman
                    </h3>
                    <span class="role">CEO of Pinterest
                    </span>

                </div>
            </div>

            <div class="col span_1_of_2 box">
                <div class="client-pic">
                    <img src="../assets/resources/css/img/4.jpg" alt="c-1">
                </div>
                <div class="client-review">
                    <p>“Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl
                        scelerisque.”
                    </p>
                    <h3>Chanel Iman
                    </h3>
                    <span class="role">CEO of Pinterest
                    </span>

                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
export default {
    name:'Testimonial'
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
.testimonial{
    background: linear-gradient(rgba(215, 70, 128, 0.89),rgba(215, 70, 128, 0.89)), url("../assets/resources/css/img/testimonial-bg.jpg");
    background-size: cover;
    color: #fff;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    height: 70rem;
}
.testimonial h2, .little-des{
    text-align: center;
}
.testimonial .col:nth-child(3){
    margin-left: 0rem;
}
.testimonial .col:nth-child(1),
.testimonial .col:nth-child(2){
    margin-top: 4rem;
}

.testimonial .col:nth-child(3),
.testimonial .col:nth-child(4){
    margin-top: 8rem;
}
.client-pic{
    width: 10rem;
    float: left;
}

.client-pic img{
    height: 8rem;
    border-radius: 50%;
    margin-bottom: 3rem;
}
.client-review{
    float: left;
    width: 35rem;
}
.client-review p{
    font-size: 2.1rem;
    font-style: italic;
    margin-top: 0;
    margin-bottom: 2rem;
}
.client-review .role{
    color: #ffdd99;
}

</style>