import React, { useState } from "react";
import {
  FaStar,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaArrowLeft,
  FaCheckCircle,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ReviewSection = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar
          key={i}
          className={`cursor-pointer text-4xl ${
            i < (hoverRating || selectedRating)
              ? "text-yellow-400"
              : "text-gray-300"
          } transition-colors duration-200`}
          onMouseEnter={() => setHoverRating(i + 1)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => handleStarClick(i + 1)}
        />
      ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {selectedRating === 0 ? (
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24  rounded-full flex items-center justify-center text-white text-2xl font-bold">
              <img src="public/logo.png" alt="Rich System Solutions" />
            </div>
          </div>

          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
            How was your experience with Rich System Solutions Pvt Ltd
          </h1>

          <p className="text-gray-600 text-center mb-8">
            Share your feedback to help us improve
          </p>

          <div className="flex justify-center space-x-2 mb-8">
            {renderStars()}
          </div>

          <div className="text-center text-gray-500 text-sm">
            Powered by{" "}
            <span className="font-semibold">Rich System Solutions Pvt Ltd</span>
          </div>
        </div>
      ) : selectedRating <= 3 ? (
        formSubmitted ? (
          <ThankYouMessage
            goBack={() => {
              setSelectedRating(0);
              setFormSubmitted(false);
            }}
          />
        ) : (
          <BadExperiencePage
            rating={selectedRating}
            goBack={() => setSelectedRating(0)}
            onSubmit={() => setFormSubmitted(true)}
          />
        )
      ) : (
        <GoodExperiencePage
          rating={selectedRating}
          goBack={() => setSelectedRating(0)}
        />
      )}
    </div>
  );
};

const BadExperiencePage = ({ rating, goBack, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    review: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    onSubmit();
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
      <button
        onClick={goBack}
        className="flex items-center text-indigo-600 mb-4"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>

      <div className="flex justify-center mb-6">
        <div className="w-24 h-24  rounded-full flex items-center justify-center text-white text-2xl font-bold">
          <img src="public/logo.png" alt="Rich System Solutions" />
        </div>
      </div>

      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
        We want to improve
      </h1>

      <p className="text-gray-600 text-center mb-6">
        We want our customers to be 100% satisfied. Please let us know why you
        had a bad experience, so we can improve our service.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="phone">
            Phone with area code
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="review">
            Review
          </label>
          <textarea
            id="review"
            name="review"
            value={formData.review}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
        >
          Submit Feedback
        </button>
      </form>

      <div className="mt-6 text-center text-gray-500 text-sm">
        Powered by{" "}
        <span className="font-semibold">Rich System Solutions Pvt Ltd</span>
      </div>
    </div>
  );
};

const ThankYouMessage = ({ goBack }) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <FaCheckCircle className="text-5xl text-green-500" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>

        <p className="text-gray-600 mb-6">
          We appreciate you taking the time to share your feedback with us. Your
          comments are valuable in helping us improve our service.
        </p>

        <p className="text-gray-600 mb-8">
          We'll review your feedback and contact you if needed at the email
          address you provided.
        </p>

        <button
          onClick={goBack}
          className="bg-indigo-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
        >
          Return to Home
        </button>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        Powered by{" "}
        <span className="font-semibold">Rich System Solutions Pvt Ltd</span>
      </div>
    </div>
  );
};

const GoodExperiencePage = ({ rating, goBack }) => {
  const openReviewPlatform = (platform) => {
    // These would be replaced with your actual URLs
    const urls = {
      google: "https://google.com/reviews",
      facebook: "https://facebook.com/reviews",
      twitter:
        "https://twitter.com/intent/tweet?text=Great experience with Company Name!",
      instagram: "",
    };

    window.open(urls[platform], "_blank");
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
      <button
        onClick={goBack}
        className="flex items-center text-indigo-600 mb-4"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>

      <div className="flex justify-center mb-6">
        <div className="w-24 h-24  rounded-full flex items-center justify-center text-white text-2xl font-bold">
          <img src="public/logo.png" alt="Rich System Solutions" />
        </div>
      </div>

      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Thank you for your feedback!
      </h1>

      <p className="text-gray-600 text-center mb-8">
        Leave us a review, it will help us grow and better serve our customers
        like you.
      </p>

      <div className="flex justify-center space-x-6 mb-8 ">
        <button
          onClick={() => openReviewPlatform("google")}
          className="flex flex-col items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
        >
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-2">
            <FaGoogle className="text-2xl text-red-500" />
          </div>
          <span className="text-sm">Google</span>
        </button>

        <button
          onClick={() => openReviewPlatform("facebook")}
          className="flex flex-col items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
        >
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
            <FaFacebook className="text-2xl text-blue-600" />
          </div>
          <span className="text-sm">Facebook</span>
        </button>

        <button
          onClick={() => openReviewPlatform("twitter")}
          className="flex flex-col items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
        >
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
            <FaXTwitter className="text-2xl text-blue-400" />
          </div>
          <span className="text-sm">Twitter</span>
        </button>
        <button
          onClick={() => openReviewPlatform("twitter")}
          className="flex flex-col items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
        >
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2 ">
            <FaInstagram className="text-2xl text-blue-400" />
          </div>
          <span className="text-sm">Twitter</span>
        </button>
      </div>

      <div className="text-center text-gray-500 text-sm">
        Powered by{" "}
        <span className="font-semibold">Rich System Solutions Pvt Ltd</span>
      </div>
    </div>
  );
};

export default ReviewSection;
