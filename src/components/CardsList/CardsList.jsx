import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { selectVisibleItems } from "../../redux/services/selectors";
import { useSelector } from "react-redux";

const CardList = () => {
  const items = useSelector(selectVisibleItems);

  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 200: 1, 500: 2, 700: 3, 1200: 6 }}
      >
        <Masonry gutter="14px">
          {items &&
            items.map((el) => (
              <img
                key={el._id}
                src={el.src}
                style={{
                  maxwidth: "201px",
                  borderRadius: "13px",
                  marginBottom: "15px",
                }}
              />
            ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default CardList;
