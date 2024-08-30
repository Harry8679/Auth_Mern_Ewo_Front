import React from 'react';
import './Loader.scss';
import ReactDOM from 'react-dom';
import loadingImg from '../../assets/loader.gif';

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <img src={loadingImg} alt="Loading ..." />
      </div>
    </div>, document.getElementById('loader')
  );
};

export const Spinner = () => {
  return (
    <div className="--center-all">
      <img src={loadingImg} alt='Loading ...' />
    </div>
  );
}

export default Loader;