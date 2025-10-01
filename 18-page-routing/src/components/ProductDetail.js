import { useParams } from "react-router-dom"

export default function ProductDetail(){
    const params = useParams();
    const id = params.productId;
    return (
        <>
            <h2>Product detail</h2>
            <p>The id: {id}</p>
        </>
    )
}