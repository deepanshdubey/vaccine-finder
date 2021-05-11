import React from "react";
import slotsNotFound from "../images/slotsNotFound.jpg";
import { useState } from "react";

const Response = ({ Error, response }) => {
  console.log(Error, response);
  const [isClicked18, setIsClicked18] = useState(false);
  const [isClicked45, setIsClicked45] = useState(false);
  const [isClickedCovishield, setIsClickedCovishield] = useState(false);
  const [isClickedCovaxin, setIsClickedCovaxin] = useState(false);
  const [isClickedPaid, setIsClickedPaid] = useState(false);
  const [isClickedFree, setIsClickedFree] = useState(false);
  let d = new Date();
  let date = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
  const getUpdatedDate = (increment) => {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + increment);
    let date = `${tomorrow.getDate()}-${tomorrow.getMonth()}-${tomorrow.getFullYear()}`;
    return date;
  };
  const getSlotsInfo = (increment, sessions) => {
    let rawdate = new Date();
    rawdate.setDate(rawdate.getDate() + increment);
    let date = `${rawdate.getDate()}-${
      rawdate.getMonth() > 9 ? rawdate.getMonth() : "0" + rawdate.getMonth()
    }-${rawdate.getFullYear()}`;

    let slot = sessions.find((session) => session.date === date);
    // console.log(slot);
    if (typeof slot === "undefined") {
      return <p>NA</p>;
    } else {
      return (
        <>
          <p>{slot.available_capacity}</p>
          <p>{slot.min_age_limit}+</p>
          <p>{slot.vaccine}</p>
        </>
      );
    }
  };

  return (
    <>
      {Error ? (
        <section className="response-error-section">
          <h3>Something went wrong....</h3>
          <p>Please try again later.</p>
        </section>
      ) : (
        <section className="response-section">
          {response.length == 0 ? (
            <>
              <h4>No slots available</h4>
              <div className="slots-not-found-img-container">
                <img
                  src={slotsNotFound}
                  alt="slots not available"
                  className="slots-not-found-img"
                />
              </div>
            </>
          ) : (
            <article className="response">
              <ul className="filter-btns">
                <li
                  className={`filter-btn ${
                    isClicked18 ? "filter-btn-clicked" : " "
                  }`}
                  onClick={() => setIsClicked18(!isClicked18)}
                >
                  Age 18+
                </li>
                <li
                  className={`filter-btn ${
                    isClicked45 ? "filter-btn-clicked" : " "
                  }`}
                  onClick={() => setIsClicked45(!isClicked45)}
                >
                  Age 45+
                </li>
                <li
                  className={`filter-btn ${
                    isClickedCovishield ? "filter-btn-clicked" : " "
                  }`}
                  onClick={() => setIsClickedCovishield(!isClickedCovishield)}
                >
                  Covishield
                </li>
                <li
                  className={`filter-btn ${
                    isClickedCovaxin ? "filter-btn-clicked" : " "
                  }`}
                  onClick={() => setIsClickedCovaxin(!isClickedCovaxin)}
                >
                  Covaxin
                </li>
                <li
                  className={`filter-btn ${
                    isClickedPaid ? "filter-btn-clicked" : " "
                  }`}
                  onClick={() => setIsClickedPaid(!isClickedPaid)}
                >
                  Paid
                </li>
                <li
                  className={`filter-btn ${
                    isClickedFree ? "filter-btn-clicked" : " "
                  }`}
                  onClick={() => setIsClickedFree(!isClickedFree)}
                >
                  Free
                </li>
              </ul>
              <div className="response-table">
                <div className="table-headings">
                  <div className="table-heading">Center Name and details</div>
                  <div className="table-heading">{date}</div>
                  <div className="table-heading">{getUpdatedDate(1)}</div>
                  <div className="table-heading">{getUpdatedDate(2)}</div>
                  <div className="table-heading">{getUpdatedDate(3)}</div>
                  <div className="table-heading">{getUpdatedDate(4)}</div>
                  <div className="table-heading">{getUpdatedDate(5)}</div>
                  <div className="table-heading">{getUpdatedDate(6)}</div>
                </div>
                {response.map((singleResponse) => {
                  return (
                    <div className="table-row">
                      <div className="table-col">
                        <p>{singleResponse.name} </p>
                        <p>{singleResponse.fee_type}</p>
                        <p>{singleResponse.pincode}</p>
                      </div>
                      <div className="table-col">
                        {getSlotsInfo(0, singleResponse.sessions)}
                      </div>
                      <div className="table-col">
                        {getSlotsInfo(1, singleResponse.sessions)}
                      </div>
                      <div className="table-col">
                        {getSlotsInfo(2, singleResponse.sessions)}
                      </div>
                      <div className="table-col">
                        {getSlotsInfo(3, singleResponse.sessions)}
                      </div>
                      <div className="table-col">
                        {getSlotsInfo(4, singleResponse.sessions)}
                      </div>
                      <div className="table-col">
                        {getSlotsInfo(5, singleResponse.sessions)}
                      </div>
                      <div className="table-col">
                        {getSlotsInfo(6, singleResponse.sessions)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          )}
        </section>
      )}
    </>
  );
};

export default Response;
