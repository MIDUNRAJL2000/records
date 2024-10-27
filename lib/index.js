"use strict";
// interface HasId {
//     id: number;
// }
// Improved function with proper type merging
function addTimeStamps(obj) {
    const timestamps = new Date();
    // Create a new object with all properties
    const timestampedObj = Object.assign(Object.assign({}, obj), { createdAt: timestamps, updatedAt: timestamps });
    return timestampedObj;
}
// Test with Book
const book = {
    id: 1,
    title: "TypeScript Guide"
};
const timestampedBook = addTimeStamps(book);
console.log("Timestamped Book:", {
    id: timestampedBook.id,
    title: timestampedBook.title,
    createdAt: timestampedBook.createdAt.toISOString(),
    updatedAt: timestampedBook.updatedAt.toISOString()
});
// Test with Task
const task = {
    id: 1,
    description: "Learn TypeScript",
    completed: false
};
const timestampedTask = addTimeStamps(task);
console.log("Timestamped Task:", {
    id: timestampedTask.id,
    description: timestampedTask.description,
    completed: timestampedTask.completed,
    createdAt: timestampedTask.createdAt.toISOString(),
    updatedAt: timestampedTask.updatedAt.toISOString()
});
// Add function to update timestamps
function updateTimestamps(obj) {
    return Object.assign(Object.assign({}, obj), { updatedAt: new Date() });
}
// Test updating timestamps
const updatedBook = updateTimestamps(timestampedBook);
console.log("Updated Book:", {
    id: updatedBook.id,
    title: updatedBook.title,
    createdAt: updatedBook.createdAt.toISOString(),
    updatedAt: updatedBook.updatedAt.toISOString()
});
// Type guard to check if object has timestamps
function hasTimestamps(obj) {
    return obj.createdAt instanceof Date && obj.updatedAt instanceof Date;
}
// Example usage of type guard
if (hasTimestamps(timestampedBook)) {
    console.log("Time since creation:", new Date().getTime() - timestampedBook.createdAt.getTime(), "ms");
}
