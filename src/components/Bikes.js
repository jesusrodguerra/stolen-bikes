import React from "react";
import Logo from "./../assets/bike.png";

const Bikes = ({ bikes, loading }) => {
  if (loading) {
    return (
      <div className="sk-fading-circle">
        <div className="sk-circle1 sk-circle"></div>
        <div className="sk-circle2 sk-circle"></div>
        <div className="sk-circle3 sk-circle"></div>
        <div className="sk-circle4 sk-circle"></div>
        <div className="sk-circle5 sk-circle"></div>
        <div className="sk-circle6 sk-circle"></div>
        <div className="sk-circle7 sk-circle"></div>
        <div className="sk-circle8 sk-circle"></div>
        <div className="sk-circle9 sk-circle"></div>
        <div className="sk-circle10 sk-circle"></div>
        <div className="sk-circle11 sk-circle"></div>
        <div className="sk-circle12 sk-circle"></div>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {bikes.map((bike) => (
          <div key={bike.id} className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-4by3">
                  <img
                    src={
                      bike.media.image_url === null
                        ? Logo
                        : bike.media.image_url
                    }
                    alt={bike.id}
                  />
                </figure>
                <div>
                  {" "}
                  <strong> Location </strong> <br />{" "}
                  <span> {bike.address} </span>{" "}
                </div>
              </div>
              <div className="media-content">
                <div className="content">
                  <h1> {bike.title} </h1>
                  <br />
                  <p>
                    {bike.description === null || bike.description === ""
                      ? "No description added on this report"
                      : bike.description}
                  </p>
                  <hr />
                  <div className="content-date">
                    <p>
                      {" "}
                      <strong id="stolen">Stolen</strong> <br />{" "}
                      {bike.occurred_at}{" "}
                    </p>
                    <p>
                      {" "}
                      <strong>Reported Date</strong> <br /> {bike.updated_at}{" "}
                    </p>
                    <p> {bike.id} </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Bikes;
