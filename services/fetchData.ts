// here we'll fetch the data from the JSONPlaceholder API
const accessKey = "9yLQtV9KdLnj-Y1jUKDaTuIZ6URKv9HeD4DaZsR4kYg";

export const fetchData = async ():Promise<Todo[]> => {
    return fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response)=> response.json())
        .then((result) => result as Todo[]);
}

export const fetchRandomPhotos = async () => {
  try {
    const response = await fetch(
      "https://api.unsplash.com/photos/random?count=10", // Fetch 10 random photos
      {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
};