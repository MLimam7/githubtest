

custom-background {
  background-color: #f0f0f0;
  background-image: url('C:\Users\moham\Desktop\app\Newfolder\community\abc.jpg');
  background-size: cover;
}



import React from 'react';

function YourComponent() {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
  };

  return (
    <div className="custom-background">
      <input type="file" onChange={handleFileUpload} />
      {/* Other content */}
    </div>
  );
}

export default YourComponent;
