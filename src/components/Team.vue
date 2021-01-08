<template>
    <div class="team">
        <section class="team-section clearfix" id="team">
           <div class="row">
               <h2>MEET OUR BEAUTIFUL TEAM</h2>
               <p class="little-des">We are a small team of designers and developers, who help brands with big ideas.</p>
           </div>
           <div class="row">
               <div class="col span_1_of_4 box">
                   <img src="../assets/resources/css/img/1.jpg" alt="ANNE HATHAWAY" class="team-member">
                   <h3>ANNE HATHAWAY</h3>
                   <span class="role">CEO / Marketing Guru</span>
                   <p>Lorem ipsum dolor sit amet,consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
                   <div class="social-link">
                       <ul>
                           <li><a href="https://www.facebook.com/prosanta.paul.3914/"><i class="fab fa-facebook-f"></i></a></li>
                           <li><a href="https://twitter.com/Prosanta_Paul16"><i class="fab fa-twitter-square"></i></a></li>
                           <li><a href="https://www.linkedin.com/in/prosanta-paul-ba1424164/"><i class="fab fa-linkedin"></i></a></li>
                           <li><a href="#"><i class="far fa-envelope"></i></a></li>
                       </ul>
                   </div>
               </div>
               <div class="col span_1_of_4 box">
                <img src="../assets/resources/css/img/2.jpg" alt="Kate Upton" class="team-member">
                <h3>Kate Upton</h3>
                <span class="role">Creative Director</span>
                <p>Duis aute irure dolor in in voluptate velit esse cillum \n\n
                    dolore fugiat nulla pariatur. Excepteur sint occaecat non diam proident.</p>
                <div class="social-link">
                    <ul>
                        <li><a href="https://www.facebook.com/prosanta.paul.3914/"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://twitter.com/Prosanta_Paul16"><i class="fab fa-twitter-square"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/prosanta-paul-ba1424164/"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="far fa-envelope"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="col span_1_of_4 box">
                <img src="../assets/resources/css/img/3.jpg" alt="Olivia Wilde" class="team-member">
                <h3>Olivia Wilde</h3>
                <span class="role">Lead Designer</span>
                <p>Nemo enim ipsam voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem nesciunt.</p>
                <div class="social-link">
                    <ul>
                        <li><a href="https://www.facebook.com/prosanta.paul.3914/"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://twitter.com/Prosanta_Paul16"><i class="fab fa-twitter-square"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/prosanta-paul-ba1424164/"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="far fa-envelope"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="col span_1_of_4 box">
                <img src="../assets/resources/css/img/4.jpg" alt="Ashley Greene" class="team-member">
                <h3>Ashley Greene</h3>
                <span class="role">SEO / Developer</span>
                <p>Sed ut perspiciatis unde \n\n omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                <div class="social-link">
                    <ul>
                        <li><a href="https://www.facebook.com/prosanta.paul.3914/"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://twitter.com/Prosanta_Paul16"><i class="fab fa-twitter-square"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/prosanta-paul-ba1424164/"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="far fa-envelope"></i></a></li>
                    </ul>
                </div>
            </div>
           </div>

       </section>
    </div>
</template>
<script>
export default {
    name:'Team'
}
</script>
<style scoped>
.team-section{
    background: linear-gradient(rgba(231,241,248,0.9),rgba(231,241,248,0.9)),url(../assets/resources/css/img/team-bg.jpg);
    text-align: center;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    background-position: cover cover;
    background-attachment: fixed;
}
.team-section h2{
    color: #3c4761;
    margin: auto;
}
.team-section h2::after{
    color:#c8d9e5;
}
.team-member{
    margin-top: 4.5rem;
    margin-bottom: 3.5rem;
    height: 20rem;
    width: 20rem;
    border-radius: 50%;
}
.team-section h3{
    color:#27283d;  
}
.role{
    color: #30bae7;
    font-size: 1.6rem;
    text-transform: uppercase;
    margin-top: .5rem;
}
.team-section .box p{
    color: #3c4761;
}
.social-link{
    margin-top: 4.5rem;
}
.social-link ul li{
    display:inline-block;
    margin: 0 .5rem;
}
.social-link ul li a:link{
    color: #fff;
}
.social-link ul li a:link i::before{
    background: #bdd1df;
    height: 2rem;
    width: 2rem;
    display:inline-block;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 50%;
    transition: .5s;
}
.social-link ul li a:hover i::before{
    background: #393939;
    transform: rotate(360deg);
}
.clearfix::after{
    content: "";
    clear: both;
    display: block;
    height: 0;
    visibility: hidden;
}
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
</style>

