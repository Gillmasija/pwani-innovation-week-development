import React, { useState } from "react";
import { schedule } from "../../data/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const ScheduleItem = ({ time, title, venue, type, partners, moderator }) => {
  return (
    <div className="item item-other">
      <div className="meta">
        <h4 className="time mb-3">{time}</h4>
      </div>
      {/* //meta */}
      <div className="content">
        <h3 className="title mb-3">{title}</h3>
        <div className="location mb-3">
          <div className="location mb-3">
            {venue && (
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
            )}
            {venue}
          </div>
        </div>
        <div className="desc">
          {type && (
            <FontAwesomeIcon icon={faArrowCircleRight} className="me-2" />
          )}
          {type}
        </div>
        <div className="moderators">
          {moderator && (
            <div>
              <h3 className="title mb-3">Moderator:</h3>
              <ul>
                <li>{moderator}</li>
              </ul>
            </div>
          )}
        </div>

        {/* Add partner information */}
        {partners && partners.length > 0 && (
          <div className="partners">
            <h3 className="title mb-3">Partners:</h3>
            <ul>
              {partners.map((partner) => (
                <li key={partner.id}>{partner.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const ScheduleSection = () => {
  const [activeTab, setActiveTab] = useState("tab-2"); // Set the default active tab
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // Function to handle changes in search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section id="schedule-section" className="schedule-section section">
      <div className="container">
        <h3 className="section-heading text-center mb-5">Schedule</h3>
        {/* Search input */}
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {/* Nav tabs */}
        <ul
          className="schedule-nav nav nav-pills nav-fill"
          id="myTab"
          role="tablist"
        >
          {schedule.map((day) => (
            <li className="nav-item me-2" key={day.id}>
              <a
                className={`nav-link ${
                  activeTab === `tab-${day.id}` ? "active" : ""
                }`}
                id={`tab-${day.id}`}
                onClick={() => handleTabClick(`tab-${day.id}`)}
                data-bs-toggle="tab"
                href={`#tab-${day.id}-content`}
                role="tab"
                aria-controls={`tab-${day.id}-content`}
                aria-selected={activeTab === `tab-${day.id}`}
              >
                {day.day === "Hackathons" ? (
                  <>
                    <span className="">{day.day}</span>
                    <span className="">({day.date})</span>
                  </>
                ) : (
                  <>
                    <span className="">Day {day.day}</span>
                    <span className="">({day.date})</span>
                  </>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Tab panes for Schedule */}
        <div className="schedule-tab-content tab-content">
          {schedule.map((day) => (
            <div
              className={`tab-pane ${
                activeTab === `tab-${day.id}` ? "active" : ""
              }`}
              id={`tab-${day.id}-content`}
              role="tabpanel"
              aria-labelledby={`tab-${day.id}`}
              key={day.id}
            >
              <h4 className="text-center py-5 text-muted">
                {day.program.length === 0
                  ? `Day ${day.day} Schedule Will be Updated Soon`
                  : day.day === "Hackathons"
                  ? `${day.day} Schedule`
                  : `Day ${day.day} Schedule`}
              </h4>
              {day.program
                // Filter events based on search query
                .filter((event) =>
                  event.event_title.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((event) => (
                  <ScheduleItem
                    key={event.id}
                    time={event.time}
                    title={event.event_title}
                    venue={event.venue}
                    type={event.event_type}
                    moderator={event.moderator}
                    partners={event.partners}
                  />
                ))}
            </div>
          ))}
        </div>

        {/* Schedule CTA */}
        <div className="schedule-cta text-center mx-auto">
          <a
            href="https://afritickets.events/2270-pwani-innovation-week"
            className="btn btn-secondary btn-lg d-block d-md-inline-block"
          >
            Buy Tickets
          </a>
        </div>
      </div>
      {/* //container */}
    </section>
  );
};

export default ScheduleSection;
