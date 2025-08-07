import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Head = () => {
    const navigate = useNavigate();
    return (
        <header>
            <img
                onClick={() => { navigate('/') }}
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="luckyDori 손글씨 모양의 핑크색 로고"
            />
            <div onClick={() => { navigate('/cart') }}>
                <FaShoppingCart />
                <p>쇼핑 카트</p>
            </div>
        </header>
    );
};

export default Head;