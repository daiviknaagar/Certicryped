import React, { useState } from 'react';

const CertificateForm = ({ generateCertificate }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [achievement, setAchievement] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    generateCertificate({ name, date, achievement });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        Achievement:
        <input
          type="text"
          value={achievement}
          onChange={(e) => setAchievement(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Generate Certificate</button>
    </form>
  );
};

export default CertificateForm;
