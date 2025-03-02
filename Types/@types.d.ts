interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

interface ITask {
    task: Todo;
    imageSrc?: string;
}

interface IUrl {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  }
  
  interface IPic {
    urls : IUrl;
  }
  