const Contact = () => {
    return ( 
        <section className="contact-sec" id="contact">
            <h1 className="contact-me-heading">Contact me</h1>
            <div className="div-form">
                <div>
                    <p className="colab-interest">If you have an application you are interested in developing, 
                    a feature that you need built or a project that needs coding. 
                    I’d love to help with it 🙌. </p>
                </div>
                <form className="contact-form" action="https://formspree.io/f/xeqdyldr" method="POST">
                    <fieldset className="form-fieldset">
                        <input id="name" type="text" name="name" placeholder="Name" maxLength="30" required/>
                        <input id="email" type="email" name="email" required placeholder="Email"/>
                        <textarea id="textarea" name="comment" cols="30" rows="10" required maxLength="500" placeholder="Write your message here"></textarea>
                    </fieldset>
                    <button id="submit-button" type="submit" name="submit">Get It Touch</button>
                </form>
            </div>
      </section>
    );
}
 
export default Contact;