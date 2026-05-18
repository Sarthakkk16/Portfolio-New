import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>CreditSea</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing and maintaining fintech dashboards to monitor daily
              customer interactions, engagement metrics, and operational KPIs.
              Built automated data pipelines, performed advanced customer
              segmentation using SQL and Python, and led end-to-end loan
              portfolio analytics including collections tracking and delinquency
              metrics. Collaborated with cross-functional teams analysing 2M+
              records supporting 100+ Cr loan disbursement.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>Shree Vasu Logistics Ltd</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Automated company-wise and region-specific ROI analysis, improving
              decision-making speed and accuracy. Streamlined billing processes
              using Excel Macros, VBA, and Power Query, saving 3–4 hours of
              manual work daily. Developed daily operational and ROI reports,
              contributing to a 23% reduction in per-case transportation costs
              and increasing per-vehicle profit by 7%.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>AI Innovation World</h5>
              </div>
              <h3>Internship</h3>
            </div>
            <p>
              Worked on AI and machine learning projects during a 1-month
              internship, gaining hands-on experience with ML workflows and
              model development.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ML Intern</h4>
                <h5>Internshala</h5>
              </div>
              <h3>Internship</h3>
            </div>
            <p>
              Completed a 2-month machine learning internship, applying
              supervised and unsupervised learning techniques to real-world
              datasets and contributing to model building and evaluation.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;