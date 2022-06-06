import { useState } from "react";
import "./App.css";

function App() {
  async function sendButton(e) {
    e.preventDefault();
    const response = await fetch(
      "https://graph.facebook.com/v13.0/100129666066310/messages",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        Authorization:
          "",
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: phone,
        text: { body: message },
      }
    );
  }

  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={sendButton}>
        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            onChange={handlePhoneChange}
            required
          ></input>
        </div>
        <div>
          <label>Message</label>
          <input
            type="text"
            name="message"
            onChange={handleMessageChange}
            required
          ></input>
        </div>
        <div>
          <button type="submit">Envoyer le message</button>
        </div>
      </form>
    </div>
  );
}

export default App;
