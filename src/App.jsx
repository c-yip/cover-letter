import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    recipient: "",
    company: "",
    title: "",
    position: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setData({ ...data, [name]: value.trim() });
    console.log(data);
  }

  function handleCheck(event) {
    const { checked } = event.target;
    console.log("checked");
    if (checked) {
      setData((prevState) => ({
        ...prevState,
        recipient: "Hiring manager",
      }));
    } else {
      setData((prevState) => ({
        ...prevState,
        recipient: "",
      }));
    }
  }

  //edit these to change paragraphs

  function paragraph1() {
    return (
      <p>
        Please accept my application for the {data.title} position at{" "}
        {data.company}. Earlier this year, I decided to switch my focus in life
        from advising and advocating for others as an attorney to building
        software. Although I may not have professional experience as a{" "}
        {data.position}, through my years of working as an attorney in a
        fast-paced, stressful, and demanding environment, I have learned how to
        self-manage, work proactively, and self-teach to keep up with the
        ever-changing legal environment. My goal is to apply the analytical,
        problem-solving, and communication skills I developed as an attorney to
        a {data.position} position to connect people to technology in a seamless
        and impactful fashion.
      </p>
    );
  }

  function paragraph2() {
    return (
      <p>
        Over the course of this year, I have learned to build dynamic web
        applications, utilizing frameworks and libraries like React, Bootstrap,
        and Jest for web development, while controlling all my projects on
        GitHub. Some of my projects include a React e-commerce website, a React
        application that generates resumes, and a weather application. My
        projects and their associated GitHub repositories are featured in my
        portfolio, <a href="https://cyip.dev">cyip.dev</a>. Currently, I am
        learning Node.js in order to start building full-stack applications. I
        look forward to sharing more about my skills and experiences and how
        they could help me hit the ground running with {data.company}. Feel free
        to contact me at (818) 319-2005 or christianyip92@gmail.com.
      </p>
    );
  }

  return (
    <div className="App">
      <h1>Cover letter generator</h1>
      <h2>Inputs</h2>
      <div className="inputs">
        <div className="recipient-container">
          <label htmlFor="recipient">Recipient:</label>
          <br />
          <input type="text" name="recipient" onChange={handleInputChange} />
          <br />
          <input type="checkbox" name="anon" onChange={handleCheck} />
          <label htmlFor="anon">Anon</label>
        </div>

        <label htmlFor="company">Company:</label>
        <input type="text" name="company" onChange={handleInputChange} />

        <label htmlFor="title">Title:</label>
        <input type="text" name="title" onChange={handleInputChange} />

        <label htmlFor="position">Position:</label>
        <input type="text" name="position" onChange={handleInputChange} />
      </div>

      <h2>Display</h2>
      <div className="display" contentEditable="true">
        <p>Dear {data.recipient},</p>
        {paragraph1()}
        {paragraph2()}
        <p>
          Sincerely, <br /> <br />
          Christian Yip
        </p>
      </div>
    </div>
  );
}

export default App;
