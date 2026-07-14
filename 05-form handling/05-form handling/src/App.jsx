import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    console.log("form submit");
    
    setTitle('')
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submithandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
