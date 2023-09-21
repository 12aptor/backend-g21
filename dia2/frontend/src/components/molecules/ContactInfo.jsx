const ContactInfo = ()=>{
    return(
        <div className="col-lg-8">
              <ul className="links_list links_list-align-right align-center-desktop topbar-contacts">
                <li>
                  <p className="links_list-label">
                    Our Address
                  </p>
                  <p className="links_list-value">
                    <a href="http://maps.google.com">15th Street, Miami, USA</a>
                  </p>
                </li>
                <li>
                  <p className="links_list-label">
                    Contact Us
                  </p>
                  <p className="links_list-value">
                    <a href="mailto:support@email.com">Support@Email.com</a>
                  </p>
                </li>
                <li>
                  <p className="links_list-label">
                    Phone
                  </p>
                  <p className="links_list-value">
                    <a href="tel:4785929899">(478)-592-9899</a>
                  </p>
                </li>
              </ul>
            </div>
    )
}

export default ContactInfo