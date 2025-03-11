import { Image, type ImageSource } from "expo-image";
import { StyleSheet } from "react-native";

type Props = {
  imgSource: ImageSource;
};

export default function ImageViewer({ imgSource }: Props) {
  return (
    <Image
      source={imgSource}
      style={styles.image}
      contentFit="cover" // Ensures the image fully covers the screen
      contentPosition={{ top: 0 }} // Forces the image to align from the top
    />
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1, // Ensures it fills the screen
    width: "100%",
    height: "100%",
  },
});
