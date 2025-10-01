import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

export async function eventsLoader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        //return {
        //    isError: true, message: "Could not fetch events"
        //}
        throw new Response(
            JSON.stringify({message: "Could not fetch events..."}),{
            status: 500
        });
    } else {
        return response;
    }
}

function EventsPage() {
    const data = useLoaderData();
    if (data.isError){
        return (<p>{data.message}</p>)
    }

    return (
        <>
            <EventsList events={data.events} />
        </>
    );
}

export default EventsPage;