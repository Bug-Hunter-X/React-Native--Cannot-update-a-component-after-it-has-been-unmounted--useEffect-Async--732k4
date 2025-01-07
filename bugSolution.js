import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err);
      }
      finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function to prevent updates after unmount
    return () => {
      // Cancel any ongoing requests or timers here if needed
    };
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      {/* Render data here */}
    </View>
  );
};

export default MyComponent;