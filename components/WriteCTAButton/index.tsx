import { router } from 'expo-router';
import { PencilIcon } from 'react-native-heroicons/outline';
import { Pressable } from 'react-native';
import { classed } from '@tw-classed/react';
import colors from 'tailwindcss/colors';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const StyledPressable = classed(AnimatedPressable, 'w-16 h-16 rounded-full justify-center items-center mb-8');

const WriteCTAButton = () => {
  const pressed = useSharedValue(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? colors.green[700] : colors.green[600],
      transform: [{ scale: withTiming(pressed.value ? 0.97 : 1, { duration: 100 }) }]
    };
  });

  return (
    <StyledPressable
      onPressIn={() => {
        pressed.value = true;
      }}
      onPressOut={() => {
        pressed.value = false;
      }}
      onPress={() => {
        router.push('/(tabs)/Write');
      }}
      style={animatedStyle}
    >
      <PencilIcon size={24} color="#ffffff" />
    </StyledPressable>
  );
};

export default WriteCTAButton;
