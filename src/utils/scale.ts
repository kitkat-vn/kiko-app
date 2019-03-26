import { Dimensions, PixelRatio } from 'react-native';

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

let dims = Dimensions.get("window");
const handler = (newDims) => (dims = newDims);
Dimensions.addEventListener("change", handler);
const isLandscape = () => (dims.width > dims.height);
let screenWidth = dims.width;
let screenHeight = dims.height;
const [shortDimension, longDimension] = screenWidth < screenHeight ? [screenWidth, screenHeight] : [screenHeight, screenWidth];

const scaleFactor = shortDimension / guidelineBaseWidth;

const scale = size => PixelRatio.roundToNearestPixel(size * scaleFactor);
const scaleModerate = (size, factor = 0.5) => PixelRatio.roundToNearestPixel(size + (scale(size) - size) * factor);

const widthPercentageToDP = widthPercent => {
  // Parse string percentage input and convert it to number.
  const elemWidth = typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(dims.width * elemWidth / 100);
};

const heightPercentageToDP = heightPercent => {
  // Parse string percentage input and convert it to number.
  const elemHeight = typeof heightPercent === "number" ? heightPercent : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel(dims.height * elemHeight / 100);
};

const sc = scale;
const sm = scaleModerate;
const wp = widthPercentageToDP;
const hp = heightPercentageToDP;

export { sc, sm, wp, hp, isLandscape };