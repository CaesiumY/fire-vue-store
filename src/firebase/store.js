import { firebaseApp } from "./init";
import "firebase/firestore";

// firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export const db = firebaseApp.firestore();
