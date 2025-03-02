// here we'll fetch the data from the JSONPlaceholder API


export const fetchData = async ():Promise<Todo[]> => {
    return fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response)=> response.json())
        .then((result) => result as Todo[]);
}