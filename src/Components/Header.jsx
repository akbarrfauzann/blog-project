import { AiOutlineInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { FaRss } from "react-icons/fa";

function HeaderContainer() {
  return (
    <header>
      <div className="container-header">
        <div className="logo">baydesign</div>
        <div className="icon">
          <a href="https://instagram.com/akbarrfauzannn" style={{ color: "black" }}>
            <AiOutlineInstagram style={{ marginRight: "10px" }} />
          </a>
          <a href="https://twitter.com/akbarfauzannnn" style={{ color: "black" }}>
            <AiFillTwitterCircle style={{ marginRight: "10px" }} />
          </a>
          <AiFillYoutube style={{ marginRight: "10px" }} />
          <FaRss />
        </div>
      </div>
    </header>
  );
}
const CustomHeader = () => {
  return <HeaderContainer />;
};

export default CustomHeader;
