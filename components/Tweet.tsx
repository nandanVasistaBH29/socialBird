import { StyleSheet, Image } from "react-native";
import { Text, View } from "./Themed";
import { TweetType } from "../types";
import { Entypo } from "@expo/vector-icons";
import IconButton from "./IconButton";

type TweetProps = {
  tweet: TweetType;
};
const Tweet = ({ tweet }: TweetProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: tweet.user.image }} style={styles.user_image} />
      <View style={styles.main_container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>{tweet.user.username} · 2hrs</Text>
          <Entypo
            name="dots-three-horizontal"
            size={16}
            color="gray"
            style={{ marginLeft: "auto" }}
          />
        </View>

        <Text style={styles.content}>{tweet.content}</Text>
        {tweet.image && (
          <Image source={{ uri: tweet.image }} style={styles.img} />
        )}
        <View style={styles.footer}>
          <IconButton icon="comment" text={tweet.numberOfComments} />
          <IconButton icon="retweet" text={tweet.numberOfRetweets} />
          <IconButton icon="heart" text={tweet.numberOfLikes} />
          <IconButton icon="chart" text={tweet.impressions || 0} />
          <IconButton icon="share-apple" />
        </View>
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
  img: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginTop: 10,
    borderRadius: 15,
  },
  username: {
    color: "gray",
    marginLeft: 5,
  },
  footer: {
    padding: 1,
    flexDirection: "row",
    marginVertical: 7,
    justifyContent: "space-between",
  },
});

export default Tweet;
