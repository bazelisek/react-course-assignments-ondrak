export async function fetchPlaces(type = "places") {
    const response = await fetch(`http://localhost:3000/${type}`);

    const resData = await response.json();

    if (!response.ok) {
        throw new Error("Failed to fetch places")
    }
    return resData.places
}

export async function updateUserPlaces(places) {
    const response = await fetch("http://localhost:3000/user-places", {
        method: "PUT",
        body: JSON.stringify({places}),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const resData = await response.json()

    if (!response.ok) {
        throw new Error("Failed to put user places")
    }
    return resData.places;
}