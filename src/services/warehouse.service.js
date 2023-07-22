import { db } from "../firebase-config";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'

const warehouseCollectionRef = collection(db, "warehouse");
class WarehouseDataService {
    //to add data
    addItem = (newItem) => {
        return addDoc(warehouseCollectionRef, newItem)
    }

    //get all data
    getAllItems = () => {
        return getDocs(warehouseCollectionRef);
    }

    //get data by id
    getItem = (id) => {
        const warehouseDoc = doc(db, 'warehouse', id);
        return getDoc(warehouseDoc);
    }

    //update data
    updateItem = (id, updatedItem) => {
        const warehouseDoc = doc(db, 'warehouse', id);
        return updateDoc(warehouseDoc, updatedItem);
    }
}

export default new WarehouseDataService();