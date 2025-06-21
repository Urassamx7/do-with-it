import Icon from "./components/icon-component";
import ListItem from "./components/list-item";
import { Screen } from "./components/screen";

export default function Index() {
  return (
    <Screen>
      <ListItem title="sadds " ImageComponent={<Icon />} />
    </Screen>
  );
}
