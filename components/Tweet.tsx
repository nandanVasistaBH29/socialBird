import { StyleSheet, Image } from "react-native";
import { Text, View } from "./Themed";
type UserType = {
  name: string;
  image?: string;
  id: string;
  username: string;
};
type TweetType = {
  user: UserType;
  content: string;
};
type TweetProps = {
  tweet: TweetType;
};
const Tweet = ({ tweet }: TweetProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: tweet.user.image }} style={styles.user_image} />
      <View style={styles.main_container}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.content}>{tweet.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth, //smallest val u can give
    borderColor: "lightgray",
    backgroundColor: "white",
  },
  user_image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  main_container: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: "600",
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
});

export default Tweet;
