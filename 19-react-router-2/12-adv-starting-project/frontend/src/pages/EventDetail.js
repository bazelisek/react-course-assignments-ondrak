import { useParams } from "react-router-dom";

export default function EventDetailPage() {
    const {eventId} = useParams();

    return(
        <div>
            <h1>Event detail page</h1>
            <p>{eventId}</p>
        </div>
    );
}