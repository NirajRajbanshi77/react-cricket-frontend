import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const HomePage = () => {
  const navigate = useNavigate(); // For navigation

  // Navigate to analyze page
  const handleGetStarted = () => {
    navigate("/analyze");
  };

  return (
    <div className="home-page bg-light min-vh-100">

      {/* Header Section */}
      <header className="container text-center mt-5 pt-5">
        <h1 className="display-3 fw-bold text-primary mb-4">
          Welcome to Cricket Analytics & Guide
        </h1>
        <p className="lead text-muted mb-4">
          Your go-to app for analyzing cricket shots and improving your game.
        </p>

      </header>

      {/* Features Section */}
      <section className="container mt-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="Shot Analysis"
              />
              <div className="card-body">
                <h5 className="card-title">Shot Analysis</h5>
                <p className="card-text">
                  Upload your videos to get detailed analysis on your cricket
                  shots using our advanced AI technology.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="Personalized Feedback"
              />
              <div className="card-body">
                <h5 className="card-title">Personalized Feedback</h5>
                <p className="card-text">
                  Receive personalized tips and suggestions to improve your
                  technique.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src="https://via.placeholder.com/300x200"
                className="card-img-top"
                alt="Track Progress"
              />
              <div className="card-body">
                <h5 className="card-title">Track Your Progress</h5>
                <p className="card-text">
                  Keep track of your performance over time and see how much
                  you've improved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="d-flex justify-content-center mt-5">
  <button
    onClick={handleGetStarted}
    className="btn btn-lg btn-success text-white fw-bold px-4 py-2"
  >
    <a
      href="/analyze"
      className="text-white text-decoration-none"
    >
      Get Started
    </a>
  </button>
</div>



      {/* About Section */}
      <section className="container mt-5 text-center">
        <h2 className="display-4 mb-4 text-primary">About the App</h2>
        <p className="lead text-muted">
          Cricket Analytics & Guide is built to help cricketers of all levels
          analyze and improve their shots. By leveraging advanced AI technology
          and PoseNet for pose analysis, our app provides insightful feedback to
          enhance your game. Whether you're a beginner or a professional, this
          app will guide you through the process of refining your cricket shots
          and techniques.
        </p>
      </section>


    </div>
  );
};

export default HomePage;
