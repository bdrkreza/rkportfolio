import './Contact.scss'
import emailjs from 'emailjs-com';
const ContactUs = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_j4mwq5t', e.target, 'user_yAAIFGCOxRqdJxDNikjCV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="section-title">
            <h2>Contact Us</h2>
            <section id="hire">
                <form className="contact-form" onSubmit={sendEmail}>
                    <div class="field name-box">
                        <input type="text" id="name" name="name" placeholder="Enter Your Name" />
                        <label for="name">Name</label>
                        <span class="ss-icon">check</span>
                    </div>

                    <div class="field email-box">
                        <input type="text" id="email" name="email" placeholder="name@email.com" />
                        <label for="email">Email</label>
                        <span class="ss-icon">check</span>
                    </div>

                    <div class="field msg-box">
                        <textarea id="msg" rows="4" name="message" placeholder="Your message goes here...">
                        </textarea>
                        <label for="msg">Msg</label>
                        <span class="ss-icon">check</span>
                    </div>

                    <input class="button" type="submit" value="Send" />
                </form>
            </section>
        </div>
    );
};

export default ContactUs;