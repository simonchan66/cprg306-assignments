import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc } from "firebase/firestore";

// Function to retrieve all items for a specific user
export async function getItems(userId) {
  const items = [];

  try {
    const itemsRef = collection(db, "users", userId, "items");
    const querySnapshot = await getDocs(query(itemsRef));

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });
  } catch (error) {
    console.error("Error fetching items:", error);
  }

  return items;
}

// Function to add a new item to a user's list of items
export async function addItem(userId, item) {
  let newItemId = null;

  try {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    newItemId = docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
  }

  return newItemId;
}