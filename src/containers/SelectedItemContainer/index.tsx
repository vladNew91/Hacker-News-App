import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectedItem } from "../../modules/selectors";
import { SelectedItemComponent } from "../../components";

export const SelectedItemContainer: React.FC = (): JSX.Element | null => {
  const navigate = useNavigate();
  const item = useSelector(selectedItem);

  useEffect(() => {
    if (!item) navigate("/");
  }, [item, navigate]);

  return <SelectedItemComponent item={item} />;
};
