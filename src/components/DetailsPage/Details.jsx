import React, { useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
const Details = ({ darkTheme }) => {
  const deviceSize = useRef(window.innerWidth);
  const { state } = useLocation();
  const { positionId } = useParams();
  const { data } = state;
  const positionItem = data.find((element) => {
    return element.id === Number(positionId);
  });

  const {
    logo,
    logoBackground,
    position,
    postedAt,
    contract,
    company,
    location,
    website,
    apply,
    description,
    requirements,
    role,
  } = positionItem;
  const { content: reqContents, items: reqItems } = requirements;
  const { content: rolesContents, items: rolesItems } = role;
  return (
    <div>
      <header>
        <div
          className="details-header-bar"
          style={{
            background: darkTheme ? "var(--very-dark-blue)" : "",
          }}>
          <div
            className="details-company-logo"
            style={{ background: logoBackground }}>
            <img src={`.${logo}`} alt="" />
          </div>
          <div className="details-companyNameSite-container">
            <p
              className="details-company-name"
              style={{
                color: darkTheme ? "var(--white)" : "",
              }}>
              {company}
            </p>
            <p className="details-company-site">{website}</p>
          </div>
          <div className="details-companyLink-btn-container">
            <a href={website}>
              <button
                className={`${darkTheme ? "dark-button" : "button-light-grey"}`}
                style={
                  darkTheme && deviceSize.current < 767
                    ? {
                        background: "#1f273f",
                        color: "var(--violet)",
                        border: "1px solid #1f273f",
                      }
                    : {}
                }>
                Company Site
              </button>
            </a>
          </div>
        </div>
      </header>
      <main
        className="details-position-info-container"
        style={{
          background: darkTheme ? "var(--very-dark-blue)" : "",
        }}>
        <div className="details-main-info-container">
          <div className="details-position-about">
            <div>
              <ul className="details-time-contract-container">
                <li className="posted-at details-posted-at">{postedAt}</li>
                <li className="dot"></li>
                <li className="contract details-contract">{contract}</li>
              </ul>
              <h3
                className="details-position"
                style={{
                  color: darkTheme ? "var(--white)" : "",
                }}>
                {position}
              </h3>
              <h2 className="location details-location">{location}</h2>
            </div>
            <div className="main-apply-now-btn-container">
              <a href={apply}>
                <button className="button-violet btn-applyNow">
                  Apply Now
                </button>
              </a>
            </div>
          </div>
          <div className="details-position-description details-description">
            {description}
          </div>
          <div className="position-requirements-container">
            <div className="requirements-description-container">
              <h3
                className="requirements-heading details-h3"
                style={{
                  color: darkTheme ? "var(--white)" : "",
                }}>
                Requirements
              </h3>
              <div className="requirements-description details-description">
                {reqContents}
              </div>
            </div>
            <ul className="requirements-list list-container">
              {reqItems.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="position-roles-container">
            <div className="roles-description-container">
              <h3
                className="roles-heading details-h3"
                style={{
                  color: darkTheme ? "var(--white)" : "",
                }}>
                What you will do
              </h3>
              <div className="roles-description details-description">
                {rolesContents}
              </div>
            </div>
            <ol className="roles-list list-container">
              {rolesItems.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ol>
          </div>
        </div>
      </main>
      <footer
        className="details-footer"
        style={{
          background: darkTheme ? "var(--very-dark-blue)" : "",
        }}>
        <div className="details-footer-position">
          <p
            className="position-typo"
            style={{
              marginBottom: "7px",
              color: darkTheme ? "var(--white)" : "",
            }}>
            {position}
          </p>
          <p className="posted-at">So Digital Inc.</p>
        </div>
        <div className="details-footer-apply-btn-container">
          <a href={apply}>
            <button className="button-violet btn-applyNow">Apply Now</button>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Details;
