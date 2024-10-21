interface HasId {
    id: number;
}

interface HasTimestamps {
    createdAt: Date;
    updatedAt: Date;
}

function addTimeStamps<T extends HasId>(temp:T): T{
    const timestamps = new Date();
    return temp
}
interface Book {
    id: number;
    title: string;
}

const book: Book = { id: 1, title: "TypeScript Guide" };
const timeStampedBook = addTimeStamps(book);
console.log(timeStampedBook.createdAt)
