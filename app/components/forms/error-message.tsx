import { StyleSheet } from "react-native";
import { colors } from "../../config/colors";
import Apptext from "../text";

const ErrorMessage = ({
  error,
  visible,
}: {
  error: string | undefined;
  visible: boolean;
}) => {
  
  if (!visible || !error) return null;
  return <Apptext text={error} style={styles.error}></Apptext>;
};

const styles = StyleSheet.create({
  error: {
    color: colors.red,
  },
});
export default ErrorMessage;
