import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goalsList, setGoalsList] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const addGoalsHandler = (enteredGoalText) => {
    setGoalsList((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  };

  const deleteGoalHandler = (id) => {
    setGoalsList((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  const closeModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          addGoalsHandler={addGoalsHandler}
          visible={modalIsVisible}
          onCancel={closeModalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalsList}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
          >
            <Text style={{ marginBottom: 10 }}>List of my goals...</Text>
          </FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
