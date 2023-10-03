import { useEffect, useState } from 'react';

function UserLocation() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      {location ? (
        <p>
          Your location: {location.latitude}, {location.longitude}
        </p>
      ) : (
        <p>Fetching your location...</p>
      )}
    </div>
  );
}

export default UserLocation;
