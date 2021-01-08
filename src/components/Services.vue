<template>
  <div class="service">
    <section class="services-section js--services-section" id="services">
         <div class="row">
             <h2>SERVICES WE PROVIDE</h2>
             <p class="little-des">We are working with both individuals and businesses from all over the globe 
                to create awesome websites and applications.
                </p>
         </div>
         <diV class="row">
             <div class="col span_1_of_4 box">
                 <img src="../assets/resources/img/flag.png" alt="Flag" class="services-icon">
                 <h3>BRANDING</h3>
                 <P>Lorem ipsum dolor sit amet,consectetuer adipiscing elit, sed diam nonummy nibh.</P>
             </div>
            <div class="col span_1_of_4 box">
                <img src="../assets/resources/img/crayan.png" alt="Crayan" class="services-icon">
                <h3>Design</h3>
                <P>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</P>
            </div>
            <div class="col span_1_of_4 box">
                <img src="../assets/resources/img/gear.png" alt="Gear" class="services-icon">
                <h3>Development</h3>
                <P>At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium.</P>
            </div>
            <div class="col span_1_of_4 box">
                <img src="../assets/resources/img/rocket.png" alt="Rocket" class="services-icon">
                <h3>ROCKET SCIENCE</h3>
                <P>Et harum quidem rerum est et expedita distinctio. Nam libero tempore.</P>
            </div>
         </diV>
     </section>
  </div>
</template>

<script>
export default {
  name: 'Services',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row{
    max-width: 114rem;
    margin: 0 auto;
}
section{
    padding: 8rem 0;
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
.services-section{
    color: #fff;
    text-align: center;
    background: linear-gradient(rgba(23, 194, 163, 0.9),rgba(23, 194, 163, 0.9)), url("../assets/resources/css/img/services-bg.jpg") ;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    height: 60rem;
    background-attachment: fixed;
}
.services-section h2::after{
    background: #14a58c;
}
.services-icon{
    height: 12rem;
    margin-top: 4.5rem;
    margin-bottom: 3.5rem;
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

</style>>

