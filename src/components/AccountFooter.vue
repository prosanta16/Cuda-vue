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
<style >

</style>