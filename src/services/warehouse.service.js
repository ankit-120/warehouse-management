import { db } from "../firebase-config";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'

const warehouseCollectionRef = collection(db, "warehouse");
class WarehouseDataService {
    addItem = (newItem) => {
        return addDoc(warehouseCollectionRef, newItem)
    }

    getAllItems = () => {
        return getDocs(warehouseCollectionRef);
    }
}

export default new WarehouseDataService();