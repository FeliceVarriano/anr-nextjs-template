import emailjs from "emailjs-com";
import styled, { createGlobalStyle, css } from "styled-components";
import SectionHeading from "../components/section-header";

const ContactComponent = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vkxca6q",
        "template_bgz0k9b",
        e.target,
        "HYaMVbPXGuWv3T5Jo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <SectionHeading slogan="Contact Us" title="Let's get in touch!" />{" "}
      <GlobalStyle />
      <StyledFormWrapper className="container">
        <StyledForm onSubmit={sendEmail}>
          <StyledHeader>Contact Us!</StyledHeader>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <StyledInput
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <StyledInput
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <StyledInput
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <StyledTextArea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
              ></StyledTextArea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <StyledButton
                type="submit"
                className="btn btn-info"
                value="Send Message"
              >
                Send Message
              </StyledButton>
            </div>
          </div>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default ContactComponent;

const styles = {
  heading: {
    mb: [30, 30, 40, 60],
  },
};

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

const StyledHeader = styled.h3`
  color: var(--secondaryColor);
  font-weight: bold;
`;

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;
const StyledButton = styled.button`
  display: block;
  background-color: var(--primary);
  color: var(--secondaryColor);
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;
