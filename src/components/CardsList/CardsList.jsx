import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import cards from "../../assets/data.json";

const CardList = () => {

  const items = cards.map((el) => (
    <img
      key={el._id}
      src={el.src}
      style={{ maxwidth: "201px", borderRadius: "13px", marginBottom: "15px" }}
    />
  ));

  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 200: 1, 500: 2, 700: 3, 1200: 6 }}
      >
        <Masonry gutter="14px">{items}</Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default CardList;
