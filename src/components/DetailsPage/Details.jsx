import React from "react";
import { useParams, useLocation } from "react-router-dom";
const Details = () => {
  const { state } = useLocation();
  const { positionId } = useParams();
  const { data } = state;

  const positionItem = data.find((element) => {
    return element.id === Number(positionId);
  });

  const { company, website, apply, description, requirements, role } =
    positionItem;

  const { content: reqContents, items: reqItems } = requirements;
  const { content: rolesContents, items: rolesItems } = role;
  return (
    <div>
      <header>
        <div className="details-header-bar">
          <div className="details-company-name">{company}</div>
          <div className="details-company-name-site">
            <p className="company-name">{company}</p>
            <p className="company-site">{website}</p>
          </div>
          <div className="details-company-website-container">
            <button>company site</button>
          </div>
        </div>
      </header>
      <main>
        <div className="position-about">
          <div>
            <ul>
              <li className="details-posted-at"></li>
              <li className="details-contract"></li>
            </ul>
            <h3 className="position"></h3>
            <h2 className="company-location"></h2>
          </div>
          <div className="apply-now-btn-container">
            <button>Apply Now</button>
          </div>
        </div>
        <div className="position-requirements">
          <h3 className="requirements-heading">Requirements</h3>
          <div className="requirements-description">{reqContents}</div>
          <ul className="requirements-list">{/* list points here */}</ul>
        </div>
        <div className="position-roles-container">
          <h3 className="roles-heading">What you will do</h3>
          <div className="roles-description">{rolesContents}</div>
          <ul className="roles-list">{/* list points here */}</ul>
        </div>
      </main>
      <footer>
        <div className="details-footer-position">
          <p></p>
          <p></p>
        </div>
        <div className="details-footer-apply-btn-container">
          <button>apply Now</button>
        </div>
      </footer>
    </div>
  );
};

export default Details;
