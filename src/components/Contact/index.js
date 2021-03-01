import "../../scss/base.scss" 

export const ContactItem = (props) => {
    return (
        <div className="contact">
            <div className="contact-title">Location</div>
            <div className="contact-item">198 West 21th Street,New <br /> York, NY 10010</div>
      </div>
    )
}

const Contact = (props) => {
    return (
        <div className="container">
      <div className="description-item">
            <h3 className="description-little-title">{ props.subtitle }</h3>
            <h1 className="description-title">{ props.title }</h1>
            <div className="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8607281452664!2d-73.9988057500495!3d40.74308997922708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bb65ffb4b7%3A0xfb6f9cef91401b93!2sEvents%20Coverage%20and%20Photography!5e0!3m2!1sru!2sua!4v1612791841057!5m2!1sru!2sua"
                width="100%" height="300" frameborder="0" style={{border: 0}} allowfullscreen="" aria-hidden="false"
                tabindex="0"></iframe>
        </div>
            <div className="contact-box small">  
          <ContactItem />  
          <ContactItem />  
          <ContactItem />  
          <ContactItem />  
        </div>
      </div>
      </div>
    );
}
export default Contact