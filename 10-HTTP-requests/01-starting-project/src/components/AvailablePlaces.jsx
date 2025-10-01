import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import ErrorPage from "./Error.jsx"
import { sortPlacesByDistance } from '../loc.js';
import { fetchPlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchAvailablePlaces() {
      setIsFetching(true);

      try{
        const fetchedPlaces = await fetchPlaces("places");

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            fetchedPlaces, 
            position.coords.latitude, 
            position.coords.longitude
          )
          
          setAvailablePlaces(sortedPlaces)
          setIsFetching(false);
        });

        //setAvailablePlaces(resData.places);
      } catch (error) {
        setIsFetching(false);
        setError({message: error.message || "Couldn't fetch places. please try again later."})
      }      
    }

    fetchAvailablePlaces()
  }, [])
  
  if (error) {
    return <ErrorPage title="Something went wrong..." message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
