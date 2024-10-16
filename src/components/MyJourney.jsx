import React from 'react';

const MyJourney = () => {
  return (
    <section className="education py-8 bg-blue-950 text-center" id="education"
    style={{
      backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 10%, transparent 10%)`,
      backgroundSize: '20px 20px',
    }}
    >
      <div className="education-content flex flex-col items-center justify-center text-left sm: pl-16">
        <h1 className="text-4xl font-bold mb-8 text-blue-400">
          My <span className="text-white">Journey</span>
        </h1>
        <div className="eduline relative border-l-4 border-white justify-center flex flex-col">
          {/* Education Box 1 */}
          <div className="education-box relative bg-blue-800 border-2 border-yellow-400 p-6 my-6 rounded-lg shadow-lg sm: w-11/12">
            <div className="year text-sm text-yellow-400 mb-2 flex items-center">
              <i className="bx bxs-calendar mr-2"></i>2023-2026
            </div>
            <div className="university">
              <h3 className="text-lg font-semibold text-white">Vivekanand Education Society Information of Technology, Chembur</h3>
            </div>
            <div className="uni-para text-sm text-white mt-2">
              I am currently enrolled at Vivekanand College, where I am in my Third year pursuing a Bachelor of Engineering (B.E) degree.
            </div>
          </div>

          {/* Education Box 2 */}
          <div className="education-box relative bg-blue-800 border-2 border-yellow-400 p-6 my-6 rounded-lg shadow-lg sm: w-11/12">
            <div className="year text-sm text-yellow-400 mb-2 flex items-center">
              <i className="bx bxs-calendar mr-2"></i>2020-2023
            </div>
            <div className="university">
              <h3 className="text-lg font-semibold text-white">Vivekanad eduction society of polytechnic, Chembur</h3>
            </div>
            <div className="uni-para text-sm text-white mt-2">
              I attended VESP for my Diploma in Computer Engineering, and achieved an impressive 85.5% on my MSBTE examinations.
            </div>
          </div>

          {/* Education Box 3 */}
          <div className="education-box relative bg-blue-800 border-2 border-yellow-400 p-6 my-6 rounded-lg shadow-lg sm: w-11/12">
            <div className="year text-sm text-yellow-400 mb-2 flex items-center">
              <i className="bx bxs-calendar mr-2"></i>2006-2020
            </div>
            <div className="university">
              <h3 className="text-lg font-semibold text-white">Sri Satya Sai Nickten High School, Ulhasnagar</h3>
            </div>
            <div className="uni-para text-sm text-white mt-2">
              I attended Sri Staya Sai Nickten High School until my 10th grade and achieved an impressive 78% on my SSC board exams.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
