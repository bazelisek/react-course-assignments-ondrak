import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';

import Header from '../Header.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteEvent, fetchEvent } from '../../util/http.js';
import { queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import { useState } from 'react';
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const { data: deleteData, isError: isDeleteError, isPending: isDeletePending, mutate: deleteMutate} = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: 'none'
      })
      navigate("/events");
    },
  })

  const { data, isLoading, isError } = useQuery({
    queryKey: ['events', id],
    queryFn: ({ signal, queryKey }) => fetchEvent({ signal, id }),
  })

  function handleStartDelete() {
    setIsDeleting(true);
  }

  function handleStopDelete() {
    setIsDeleting(false);
  }

  function handleDelete() {
    
    deleteMutate({ id });
  }

  return (
    <>
      {isDeleting && <Modal onClose={handleStopDelete}>
        <h2>Are you sure?</h2>
        <p>Do you really want to delete this event? This action cannot be undone.</p>
        <div className='form-actions'>
          {isDeletePending && <LoadingIndicator />}
          <button onClick={handleStopDelete} className='button-text' disabled={isDeletePending}>Cancel</button>
          <button onClick={handleDelete} className='button' disabled={isDeletePending}>Delete</button>
        </div>
        {isDeleteError && <ErrorBlock title="Someething went wrong..." message={deleteData?.info?.message || "Failed to delete event."}/>}
      </Modal>}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {isError && <ErrorBlock title="Something went wrong..." message="Please try again later" />}
        {isLoading &&
         <div id="event-details-content" className='center'>
          <LoadingIndicator />
         </div>
        }
        {data && !isError && !isLoading &&
        <>
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={handleStartDelete}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={"http://localhost:3000/" + data.image} alt={data.image} />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>{new Date(data.date).toLocaleDateString("en-US", {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })} @ {data.time}</time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </>
        }
      </article>
    </>
  );
}
