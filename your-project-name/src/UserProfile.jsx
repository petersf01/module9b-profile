import React from 'react';

function UserProfile(props) {
  const { name, bio, imageUrl } = props;

  return (
     <div style={{
      maxWidth: '350px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
      />
      <h1 style={{ margin: '0', fontSize: '22px' }}>{name}</h1>
      <p style={{ margin: '4px 0', fontSize: '16px' }}>{bio}</p>
    </div>
  );
}

export default UserProfile;
