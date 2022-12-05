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

  //edit these to change paragraphs

  function paragraph1() {
    return (
      <p>
        Please accept my application for the {data.title} position at{" "}
        {data.company}. Although I may not have professional experience as a{" "}
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
        Earlier this year, I decided to switch my focus in life from advising
        and advocating for others as an attorney to building software. Over the
        course of this year I have learned to build dynamic websites, utilizing
        frameworks and libraries like React, Bootstrap, and Jest for web
        development, while controlling all my projects on GitHub. I look forward
        to sharing more about my skills and experiences and how they could help
        me hit the ground running with {data.company}. Feel free to contact me
        at (818) 319-2005 or christianyip92@gmail.com.
      </p>
    );
  }

  return (
    <div className="App">
      <h1>Cover letter generator</h1>
      <h2>Inputs</h2>
      <div className="inputs">
        <label htmlFor="recipient">Recipient:</label>
        <input type="text" name="recipient" onChange={handleInputChange} />

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
