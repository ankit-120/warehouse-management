import React, { useEffect } from 'react'
import WarehouseDataService from './services/warehouse.service'
import WarehouseForm from './components/WarehouseForm';

const App = () => {

  useEffect(() => {
    // addItem();
  }, []);

  const getItems = async () => {
    const data = await WarehouseDataService.getAllItems();
    console.log(data.docs[0].data());
    data.forEach(doc => {
      console.log(doc.data());
    })
  }

  const addItem = async () => {
    const newData = {
      name: "Warehouse-4345",
      code: "W-00006",
      id: 6,
      city: "Chennai",
      space_available: 1,
      type: "Leasable Space",
      cluster: "cluster-a-21",
      is_registered: true,
      is_live: false
    }

    const data = await WarehouseDataService.addItem(newData);
    console.log(data);
  }

  return (
    <div>
      <WarehouseForm />
    </div>
  )
}

export default App