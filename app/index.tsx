import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

export default function Index() {
  const {} = useNetInfo();
  const demo = async () => {
    try {
      await AsyncStorage.setItem(
        "person",
        JSON.stringify({
          Name: "Marvin",
          id: 1,
          Age: 14,
        })
      );

      const value = await AsyncStorage.getItem("person");
      const person = JSON.parse(value!);
      console.log(person);
    } catch (error) {
      console.log(error);
    }
  };
  demo();
  return null;
}
