# warehouse-management
 To manage warehouse
 **Live link** : https://warehouse-management-ankit-120.netlify.app/

 **Instructions on how to run the application locally**
1-Clone the repositorie on your system.

2-Open the folder in any code editor(eg: VsCode)

3-Open the terminal of the editor(ctrl+` for vscode) and run the command 'npm install'

4-After thar run the command 'npm run dev' and the application will be ready to run locally.

Warehouse Management Application Functionality:

1. Add New Warehouses:
   - Users can add new warehouses to the application.
   - When adding a new warehouse, users can provide details such as warehouse name, unique code, ID, city, available space, type, cluster, and registration status.
   - The information entered by the user is saved in the Firestore database.

2. Filter Warehouses:
   - The application provides the functionality to filter warehouses based on different criteria:
   - City Filter: Users can filter warehouses based on the city they are located in.
   - Cluster Filter: Users can filter warehouses based on specific clusters they belong to.
   - Space Availability Filter: Users can filter warehouses based on the available space within a specified range.

3. Search Warehouses:
   - Users can search for warehouses based on their name and city.
   - The application allows users to enter a search query, and the relevant warehouses matching the query will be displayed.

4. Warehouse Details:
   - Users can click on any warehouse in the list to view its full details.
   - The application displays all the warehouse information, including name, code, ID, city, available space, type, cluster, and registration status.

5. Edit Warehouse Details:
   - Users can edit the details of a selected warehouse.
   - When editing a warehouse, users can modify the existing information such as name, code, city, available space, type, cluster, and registration status.
   - The edited information is updated and saved in the Firestore database.

6. Additional Custom Fields:
   - The application allows users to add additional custom fields to a warehouse.
   - Users can dynamically add new fields, providing the field name and its corresponding value.
   - These additional custom fields are associated with the specific warehouse and are also saved in the Firestore database.

7. Data Storage in Firestore:
   - All warehouse information, including the additional custom fields, is stored in the Firestore database.
   - Whenever users add, edit, or remove warehouses or custom fields, the changes are reflected in the Firestore database, ensuring data integrity and real-time updates.

This Warehouse Management Application provides a comprehensive set of features to manage and organize warehouses effectively, with seamless integration with Firestore for data storage and retrieval.

