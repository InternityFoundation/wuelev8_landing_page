import { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = props => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        result => {
          console.log(result.text);
          clearState();
        },
        error => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
              </div>
            </div>
            <div className='contact-info'>
              <div className='col-md-3 contact-item'>
                <p>We are just a mail away.</p>
              </div>
              <div className='col-md-3 contact-item'>
                <p>
                  <span>
                    <i className='fa fa-envelope-o'></i> Email
                  </span>{" "}
                  {props.data ? props.data.email : "loading"}
                </p>
              </div>
              <div className='col-md-3 contact-item'>
                <p>
                  <span>
                    <i className='fa fa-map-marker'></i> Address
                  </span>
                  {props.data ? props.data.companyname : "loading"}
                  <br />
                  {props.data ? props.data.address : "loading"}
                </p>
              </div>
              <div className='col-md-3 contact-item'>
                <p>
                  <span>
                    <i className='fa fa-phone'></i> Phone
                  </span>{" "}
                  {props.data ? props.data.phone1 : "loading"} <br />
                  {props.data ? props.data.phone2 : "loading"}
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.linkedin : "/"}>
                      <i className='fa fa-linkedin'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>&copy; 2021 Internity Education Services LLP</p>
        </div>
      </div>
    </div>
  );
};
