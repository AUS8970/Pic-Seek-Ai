import React from 'react';

const GenerateImage = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <h2 className="text-center text-2xl font-bold"> Generate Image </h2>
      <form>
        <fieldset className="w-80">
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item" />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default GenerateImage;