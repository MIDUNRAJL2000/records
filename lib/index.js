"use strict";
function addTimeStamps(temp) {
    const timestamps = new Date();
    temp.createdAt = timestamps;
    temp.updatedAt = timestamps;
    return temp;
}
const book = { id: 1, title: "TypeScript Guide" };
const timeStampedBook = addTimeStamps(book);
console.log(timeStampedBook.createdAt);
