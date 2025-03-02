import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello I am Pic Seek </h1>
            <p className="py-6"> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. </p>
            <Link to={"/generate-image"} className="btn btn-primary"> Generate Image </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;