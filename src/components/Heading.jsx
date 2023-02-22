import Navbar from "./Navbar";

const Heading = () => {
  return (
    <div className="heading">
      <Navbar />
      <div className="headingContainer">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja Developer.</p>
        <button>Awesome!</button>
      </div>
    </div>
  );
};

export default Heading;