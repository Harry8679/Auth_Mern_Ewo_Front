import React, { useState } from 'react';
import './Profile.scss';
import Card from '../../components/card/Card';
import profileImg from '../../assets/avatarr.png';
import PageMenu from '../../components/pageMenu/PageMenu';

const Profile = () => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    bio: '',
    photo: '',
    role: '',
    isVerified: false
  };

  const { name, email, phone, bio, photo, role, isVerified } = initialState;
  const handleImageChange = () => {};
  const handleInputChange = () => {};

  const [profile, setProfile] = useState(initialState);
  return (
    <section>
        <div className="container">
            <PageMenu />
            <h2>Profile</h2>
            <div className="--flex-start profile">
                <Card cardClass='card'>
                    <>
                        <div>
                            <div className="profile-photo">
                                <img src={profileImg} alt="profile img" />
                                <h3>Role : Subscriber</h3>
                            </div>
                        </div>
                        <form>
                            <p>
                                <label>Change Photo :</label>
                                <input type="file" accept='image/*' name='image' onChange={handleImageChange} />
                            </p>
                            <p>
                                <label>Name :</label>
                                <input type="text" name='name' onChange={handleInputChange} value={name} />
                            </p>
                            <p>
                                <label>Email :</label>
                                <input type="email" name='email' onChange={handleInputChange} value={email} disabled />
                            </p>
                            <p>
                                <label>Phone :</label>
                                <input type="text" name='phone' onChange={handleInputChange} value={phone} />
                            </p>
                            <p>
                                <label>Biography :</label>
                                <textarea name="bio" value={bio} onChange={handleInputChange} cols='30' rows='10'></textarea>
                            </p>
                            <button className="--btn --btn-primary --btn-block">Update Profile</button>
                        </form>
                    </>
                </Card>
            </div>
        </div>
    </section>
  )
}

export default Profile;