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

    getItem = (id) => {
        const warehouseDoc = doc(db, 'warehouse', id);
        return getDoc(warehouseDoc);
    }

    updateItem = (id, updatedItem) => {
        const warehouseDoc = doc(db, 'warehouse', id);
        return updateDoc(warehouseDoc, updatedItem);
    }
}

export default new WarehouseDataService();