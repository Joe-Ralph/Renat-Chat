import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Pressable,
  Image,
  Text,
  Platform
} from "react-native";
export default function Users({
  users,
  userToAdd,
  setUserToAdd,
  onClickUser,
  onAddUser,
}) {
  const renderUser = ({ item }) => {
    return (
      <Pressable
        onPress={() => onClickUser(item)}
        style={styles.row}
      >
          <Image style={styles.avatar} source ={{uri: item.avatar}}/>
          <Text>{item.name}</Text>
      </Pressable>
    );
  };
  return (
    <>
      <View style={styles.addUser}>
        <TextInput
          style={styles.input}
          onChangeText={setUserToAdd}
          value={userToAdd}
        />
        <Button title={"Add User"} onPress={onAddUser}></Button>
      </View>
      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
}

const styles = StyleSheet.create({
    avatar: {
        width:50,
        height:50,
        marginRight:10
    },
    row:{
        flexDirection:'row',
        padding:10,
        alignItems:'center',
        borderBottomColor:"#cacaca",
        borderBottomWidth:1
    },
  addUser: {
    flexDirection: "row",
    padding: 10,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  input: {
    backgroundColor: "#cacaca",
    height: 45,
    width: "80%",
    marginRight: 20,
    paddingHorizontal: 10,
  },
});
