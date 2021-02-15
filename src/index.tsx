import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const min = Math.min(width, height);
const max = Math.max(width, height);

const FontSize = (fontSize: number) => {
  return (fontSize * min) / (max - min);
};

export default FontSize;
