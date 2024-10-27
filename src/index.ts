interface HasId {
    id: number;
}

interface HasTimestamps {
    createdAt: Date;
    updatedAt: Date;
}

// Improved function with proper type merging
function addTimeStamps<T extends HasId>(obj: T): T & HasTimestamps {
    const timestamps = new Date();
    
    // Create a new object with all properties
    const timestampedObj = {
        ...obj,
        createdAt: timestamps,
        updatedAt: timestamps
    };

    return timestampedObj;
}

// Example usage with multiple types
interface Book extends HasId {
    title: string;
    author?: string;
}

interface Task extends HasId {
    description: string;
    completed: boolean;
}

// Test with Book
const book: Book = { 
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
const task: Task = {
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
function updateTimestamps<T extends HasId & HasTimestamps>(obj: T): T {
    return {
        ...obj,
        updatedAt: new Date()
    };
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
function hasTimestamps(obj: any): obj is HasTimestamps {
    return obj.createdAt instanceof Date && obj.updatedAt instanceof Date;
}

// Example usage of type guard
if (hasTimestamps(timestampedBook)) {
    console.log("Time since creation:", 
        new Date().getTime() - timestampedBook.createdAt.getTime(),
        "ms");
}