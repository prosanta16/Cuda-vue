<template>
    <div class="acc">
        <section class="contact-section" id="contact">
        <div class="row">
            <h2>GET IN TOUCH</h2>
            <p class="little-des">1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America. Tel:
                (202) 456-1111
            </p>
        </div>
        <div class="row">
            <form action="https://formspree.io/prosantapaulbsmrstu@gmail.com" method="POST">
                <div class="col span_1_of_2">
                    <input type="text" name="Name"  placeholder="Your Name *" required>
                </div>

                <div class="col span_1_of_2">
                    <input type="email" name="Email"  placeholder="Your Email *" required>
                </div>

                <div class="row">
                    <div class="col span_2_of_2">
                        <textarea name="message"  cols="30" rows="10" placeholder="Your Message *"
                            required></textarea>
                    </div>
                </div>
                <div class="row">
                    <input type="submit" value="SEND MESSAGE" class="btn btn-submit">
                </div>
            </form>
        </div>
    </section>
    <!-- END CONTACT SECTION -->
    <!-- START FOOTER -->
    <footer class="footer-section">
        <div class="row">
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Google</a></li>
                <li><a href="#">Behance</a></li>
                <li><a href="#">Dribble</a></li>
                <li><a href="#">Github</a></li>
                
            </ul>
        </div>
    </footer>
    </div>
</template>

<script>
export default {
    name:'AccountFooter'
}
</script>
<style scoped>
.btn:link,
.btn:visited,
.btn{
    background: #333;
    border-bottom: .3rem solid #000;;
    font-size: 1.8rem;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    padding: 1.5rem 6rem;
    border-radius: .3rem;
    display: inline-block;
    margin-top: 4.5rem;
  
}
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
.span_2_of_2 {
		width: 100%; 
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
.contact-section{
    background: linear-gradient(rgba(60, 84, 154, 0.842),rgba(60, 84, 154, 0.842)),url("../assets/resources/css/img/contact-bg.jpg");
    background-size: cover;
    text-align: center;
    color: #fff;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    height:70rem;
}
.contact-section h2::after{
    background-color: #273a71;
}
.contact-section .little-des{
    color: #fff;
}
.contact-section form input[type="text"],
.contact-section form input[type="email"],
.contact-section form textarea{
    background: #273a71;
    border: 0.1rem solid #273a71;
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem ;
    font-size: 1.8rem;
    color: #fff;
    margin: 0.5rem 0;
}
.contact-section textarea{
    height: 20rem;
}
.contact-section form ::placeholder{
    color: #fff;
    opacity: 1;
}
.btn-submit{
    border: 0;
    background: #30bae7;
    border-bottom: 0.3rem solid #299ec5;
}
.btn-submit:hover{
    cursor: pointer;
}
footer{
    background: #344b8e;
    padding: 3rem 0;
    text-align: center;
    border-top: 0.1rem solid rgba(255, 255, 255, 0.308) ;
    font-size: 2.4rem;
}
footer ul li{
    display: inline-block;
    margin: 0 3rem;
}
footer ul li a{
    text-decoration: none;
    color: #fff;
    text-transform: capitalize;
}
footer ul li a:hover{
    color: #31aedc;
}

</style>