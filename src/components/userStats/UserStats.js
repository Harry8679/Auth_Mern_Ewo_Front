import React from 'react';
import './UserStats.scss';
import InfoBox from '../infoBox/InfoBox';
import { LuUserCheck } from "react-icons/lu";
import { FiUserX } from "react-icons/fi";
import { LuUserMinus } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";

const UserStats = () => {
  // Icons
  const icon1 = <FaUsers size={40} color='#fff' />
  const icon2 = <LuUserCheck size={40} color='#fff' />
  const icon3 = <LuUserMinus size={40} color='#fff' />
  const icon4 = <FiUserX size={40} color='#fff' />
  
  return (
    <div className='user-summary'>
        <h3 className="--mt">Users Stats</h3>
        <div className="info-summary">
            <InfoBox icon={icon1} title='Total Users' count='3' bgColor='card1' />
            <InfoBox icon={icon2} title='Verified Users' count='6' bgColor='card2' />
            <InfoBox icon={icon3} title='Unverified Users' count='2' bgColor='card3' />
            <InfoBox icon={icon4} title='Suspended Users' count='5' bgColor='card4' />
        </div>
    </div>
  )
}

export default UserStats;