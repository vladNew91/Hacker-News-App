import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ItemInfoComponent } from "../../components";
import { selectedListItem } from "../../modules/selectors";
import { ItemCommentsContainer } from "../../containers";

export const ItemContainer: React.FC = (): JSX.Element | null => {
    const item = useSelector(selectedListItem);
    const navigate = useNavigate();

    useEffect(() => {
        if (!item) navigate("/");
    }, [item, navigate]);

    if (!item) return null;

    return (
        <>
            <ItemInfoComponent item={item} />

            {item.kids && (
                <ItemCommentsContainer comments={item.kids} />
            )}
        </>
    );
};
