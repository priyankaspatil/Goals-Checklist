import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ text, onDeleteItem, id }) {
    const deleteItem = () => {
        console.log(id);
        onDeleteItem(id);
    }
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddds" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={deleteItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
