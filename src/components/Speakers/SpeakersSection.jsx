import React, { useState } from 'react';
import { SpeakerMembers } from './Speakerdata';
import SpeakerItem from './SpeakerItem';

const TeamSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTeam, setFilteredTeam] = useState(SpeakerMembers);

  const handleSearch = () => {
    const filtered = SpeakerMembers.filter((member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredTeam(filtered);
  };

  const handleKeyUp = (e) => {
    const userInput = e.target.value.toLowerCase();
    setSearchQuery(userInput);

    const filtered = SpeakerMembers.filter((member) =>
      member.name.toLowerCase().includes(userInput),
    );
    setFilteredTeam(filtered);
  };

  return (
    <>
      <section id="team-section" className="team-section section">
        <div className="container content-space-1">
          <h3 className="section-heading text-center mb-3">Speaker</h3>
          <div className="section-intro text-center single-col-max mx-auto mb-5">
            Meet our amazing Speakers!
          </div>
          <div
            className="team-cta text-center py-3 d-flex"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <input
              type="text"
              style={{ width: '300px', height: '50px', padding: '5px' }}
              className="form-control"
              placeholder="Search Speakers"
              value={searchQuery}
              onChange={handleKeyUp}
            />
            <div>
              <button className="btn btn-primary btn-lg" type="button" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>

          <div className="row">
            {searchQuery ? (
              filteredTeam.map((member) => (
                <SpeakerItem
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  imageUrl={member.imageUrl}
                />
              ))
            ) : SpeakerMembers.length > 0 ? (
              SpeakerMembers.map((member) => (
                <SpeakerItem
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  imageUrl={member.imageUrl}
                />
              ))
            ) : (
              <h4 className="text-center py-5 text-muted">
                Our Team List is getting ready; we will update soon!
              </h4>
            )}
          </div>

          
        </div>
      </section>
      <div className="container">
        <hr />
      </div>
    </>
  );
};

export default TeamSection;
