import { useSelector } from "react-redux";
import { ItemInfoComponent } from "../../components";
import { selectedListItem } from "../../modules/selectors";

export const ItemInfoContainer: React.FC = (): JSX.Element | null => {
  const item = useSelector(selectedListItem);

  if (!item) return null;

  return <ItemInfoComponent item={item} />;
};
