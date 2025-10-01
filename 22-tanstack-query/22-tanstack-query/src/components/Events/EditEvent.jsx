import { Link, redirect, useNavigate, useNavigation, useParams, useSubmit } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEvent, updateEvent, queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';

export default function EditEvent() {
  const { state } = useNavigation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isError, error } = useQuery({
    queryKey: ["events", id],
    queryFn: (obj) => fetchEvent({...obj, id}),
    staleTime: 10000,
  })
  const submit = useSubmit();
  /*
  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const newEvent = data.event;

      await queryClient.cancelQueries({queryKey: ['events', id]});
      const previousEvent = queryClient.getQueryData(['events', id]);

      queryClient.setQueryData(['events', id], newEvent);

      return { previousEvent: previousEvent} ;
    },
    onError: (error, data, context) => {
      const prevEvent = context.previousEvent;
      queryClient.setQueryData(["events", id], prevEvent);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["events", id])
    },
  })
  */
  function handleSubmit(formData) {
    submit(formData, { method: "PUT" });
  }

  function handleClose() {
    navigate('../');
  }

  return (
    <Modal onClose={handleClose}>
      <EventForm inputData={isError ? null : data} onSubmit={handleSubmit}>
        {state === "submitting" ? <LoadingIndicator /> :<>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button></>}
        {isError && <ErrorBlock title={"Failed to prepopulate data."} message={error.info?.message || "Please try again later"} />}
      </EventForm>
    </Modal>
  );
}

export function loader({params}){
  const id = params.id;
  return queryClient.fetchQuery({
    queryKey: ["events", id],
    queryFn: (obj) => fetchEvent({...obj, id})
  })
}

export async function action({request, params}){
  const id = params.id;
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);
  await updateEvent({id, event: updatedEventData});
  queryClient.invalidateQueries(["events"]);
  return redirect("../");
}