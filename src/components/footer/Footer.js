import React from 'react'

const Footer = () => {
  const myDate = new Date();
  const year = myDate.getFullYear();
  return (
    <>
        <hr className='--color-dark' />
        <div className="--flex-center --py2 --bg-grey">
            <p>All Rights Reserved. &copy; {year}</p>
        </div>
    </>
  )
}

export default Footer;