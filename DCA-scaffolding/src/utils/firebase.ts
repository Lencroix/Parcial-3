
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { getFirestore } from "firebase/firestore";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

import { collection, addDoc } from "firebase/firestore";
import { Recipe } from "../types/recipes";

const saveRecipesInDB = async (recipe: Recipe) => {
    try {
        const docRef = await addDoc(collection(db, "recipes"), recipe)
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export default{
    saveRecipesInDB
}

