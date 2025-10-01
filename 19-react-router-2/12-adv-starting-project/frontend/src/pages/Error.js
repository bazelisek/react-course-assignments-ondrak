import PageContent from "../components/PageContent";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    
    let title = "An error occured!";
    let message = "Something went wrong...";

    if (isRouteErrorResponse(error)){
        if (error.status === 500){
            message = JSON.parse(error.data).message;
        }

        if (error.status === 404) {
            title = "Not found";
            message = "this site wasnt found"
        }
    }

    

    return (
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>
    )
}