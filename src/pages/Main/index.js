import React, { useState, useEffect, useCallback } from 'react';

import { MdPlayArrow, MdStop, MdPause } from 'react-icons/md';
import {
  Container,
  Button,
  ButtonContainer,
  TextContainer,
  Text,
} from './styles';

export default function Main() {
  /**
   * States
   */
  const [seconds, setSeconds] = useState(1490);
  const [play, setPlay] = useState(false);
  const [inWork, setInWork] = useState(true);

  /**
   * Function
   */
  function showNotification(textNotification) {
    try {
      const notification = new Notification('Pomodoro Timer', {
        body: textNotification,
      });
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Handles
   */
  const handleStop = useCallback(() => {
    setSeconds(0);
    setPlay(false);
    setInWork(true);
  }, []);

  const handlePlayPause = useCallback(() => {
    setPlay(prev => !prev);
  }, []);

  /**
   * Effects
   */
  // start main interval
  useEffect(() => {
    const idInterval = setInterval(() => {
      if (play) {
        setSeconds(prev => prev + 1);
      }
    }, 1000);

    return () => {
      clearInterval(idInterval);
    };
  }, [play]);

  // work or rest
  useEffect(() => {
    if (inWork) {
      if (seconds === 1500) {
        setInWork(false);
        setSeconds(0);
      }
    }
  }, [inWork, seconds]);

  useEffect(() => {
    if (!inWork) {
      if (seconds === 300) {
        setInWork(true);
        setSeconds(0);
      }
    }
  }, [inWork, seconds]);

  // notification request
  useEffect(() => {
    Notification.requestPermission();
  }, []);

  // notification
  useEffect(() => {
    if (play) {
      if (inWork) {
        showNotification('time to work!!!');
      }
      if (!inWork) {
        showNotification('time to rest!!!');
      }
    }
  }, [inWork, play]);

  /**
   * Returns
   */
  return (
    <Container>
      <TextContainer>
        <Text>
          {`${Math.floor(seconds / 60)}:${seconds -
            Math.floor(seconds / 60) * 60}`}
        </Text>
      </TextContainer>
      <ButtonContainer>
        <Button onClick={handlePlayPause}>
          {play ? (
            <MdPause size={22} color="#333" />
          ) : (
            <MdPlayArrow size={22} color="#333" />
          )}
        </Button>
        <Button onClick={handleStop}>
          <MdStop size={22} color="#333" />
        </Button>
      </ButtonContainer>
    </Container>
  );
}
