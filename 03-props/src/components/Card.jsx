import React from "react";

const Card = (props) => {
    console.log(props);

  return (
    <div className="parent">
    <div className="card">
      <h1>{props.user} {props.age}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
        tempore. Beatae, veritatis accusantium non quas laborum suscipit nisi
        itaque at doloremque incidunt, dolorem blanditiis pariatur. Autem eius
        similique consequuntur atque?
      </p>
      <button>View button</button>
    </div>
    </div>
  );
};

export default Card;
