import heroimage from "../../assets/speakerhero.jpeg";

const MastHead = () => {
  return (
    <>
      {/* Hero */}
      <div className="shape-container overflow-hidden">
        <div className="bg-orange position-relative" style={{ backgroundColor: 'orange' }}>
          <div className="container" style={{ paddingTop: '3cm' }}>
            <div className="position-relative w-lg-75 text-center mx-lg-auto">
              <div className="mb-7">
                <h1 className="text-white">
                  Pwani Innovation Week 2024: <span className="text-white">Speakers</span>
                </h1>
                <p className="lead text-white-70">
                  The Pwani We Desire: Youth, Culture, Peace, and Innovation in the Decade of Action
                </p>
              
              </div>
              
              {/* End Row */}
              {/* Background Shapes */}
              
              {/* End Background Shapes */}
            </div>
          </div>
        </div>
        {/* Shape */}
        
        {/* End Shape */}
      </div>
      {/* End Hero */}
    </>
  );
};

export default MastHead;