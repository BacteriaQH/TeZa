import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigation } from '@react-navigation/native';

dayjs.extend(relativeTime);

const ChatListItem = ({ chat }) => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate("Chat", { id: chat.id, name: chat.user.name })}>
            <View style={styles.container}>
                <Image
                    source={{ uri: chat.user.image }}
                    style={styles.image}
                />
                <View style={styles.content}>
                    <View style={styles.row}>
                        <Text style={styles.name} numberOfLines={1}>{chat.user.name}</Text>
                        <Text style={styles.time}>{dayjs(chat.lastMessage.createdAt).fromNow()}</Text>
                    </View>

                    <Text style={styles.subTitle} numberOfLines={1} ellipsizeMode={'tail'}>{chat.lastMessage.text}</Text>
                </View>
            </View>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "stretch",
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
    },
    image: {
        width: 60,
        aspectRatio: 1,
        borderRadius: 30,
        marginRight: 10,
    },
    content: {
        flex: 1,
        borderBottomColor: "lightgray",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    row: {
        flexDirection: "row",
        marginBottom: 5,
    },
    name: {
        fontWeight: "bold",
        flex: 1,
    },
    time: {
        color: "grey",
    },
    subTitle: {
        color: "grey",
        width: '70%'
    },
});
export default ChatListItem;