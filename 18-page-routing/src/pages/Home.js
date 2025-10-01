import { Link, useNavigate } from "react-router-dom";

export default function HomePage(){
    const navigate = useNavigate();

    function navigateHandler() {
        navigate("/products");
    }

    return(
        <>
            <h1>My HomePage!</h1>
            <p>
                Go to the list of <Link to="/products">products</Link>
            </p>
        
            <p>
                <button onClick={navigateHandler}>Navigate</button>
            </p>
        </>
    )
}