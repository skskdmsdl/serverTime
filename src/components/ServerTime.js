import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const ServerTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View>
      <Text>현재 시간: {currentTime.toLocaleString()}</Text>
    </View>
  );
};

export default ServerTime;