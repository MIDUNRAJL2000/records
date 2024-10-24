interface HasId {
    id: number;
}

interface HasTimestamps {
    createdAt: Date;
    updatedAt: Date;
}

function addTimeStamps<T extends HasId>(temp:T): T{
    const timestamps = new Date();
    (temp as T & HasTimestamps).createdAt = timestamps;
    (temp as T & HasTimestamps).updatedAt = timestamps;
    return temp
}
interface Book {
    id: number;
    title: string;
}

const book: Book = { id: 1, title: "TypeScript Guide" };
const timeStampedBook = addTimeStamps(book);
console.log(timeStampedBook.createdAt)
