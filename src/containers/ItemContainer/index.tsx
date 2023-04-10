import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ItemInfoComponent } from "../../components";
import { selectedItem } from "../../modules/selectors";
import { ItemCommentsContainer } from "../../containers";

export const ItemContainer: React.FC = (): JSX.Element | null => {
    const item = useSelector(selectedItem);
    const navigate = useNavigate();

    useEffect(() => {
        if (!item) navigate("/");
    }, [item, navigate]);

    if (!item) return null;

    return (
        <>
            <ItemInfoComponent item={item} />

            {item.data.kids && (
                <ItemCommentsContainer comments={item.data.kids} />
            )}
        </>
    );
};
