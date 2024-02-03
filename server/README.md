Authentication Endpoints:
POST /api/users/signup: Create a new user account.

POST /api/users/login: Authenticate and obtain an access token.

User Endpoints:
GET /api/users/:userId: Get user details.

PUT /api/users/:userId: Update user information.

DELETE /api/users/:userId: Delete a user account.

Driver Endpoints:

GET /api/drivers/:driverId/orders: Get orders assigned to a specific driver.

POST /api/drivers/:driverId/orders/:orderId/complete: Mark an order as completed by a driver.

Food Vendor Endpoints:
GET /api/vendors/:vendorId/ads: Get ads or foods offered by a specific vendor.

POST /api/vendors/:vendorId/ads: Create a new ad or food item for a vendor.

PUT /api/vendors/:vendorId/ads/:adId: Update an existing ad or food item.

DELETE /api/vendors/:vendorId/ads/:adId: Delete an ad or food item.

Super Admin Endpoints:
GET /api/superadmin/users: Get a list of all users.

GET /api/superadmin/orders: Get a list of all orders.

GET /api/superadmin/transactions: Get a list of all transactions.

Order Endpoints:

GET /api/orders/:orderId: Get details of a specific order.

POST /api/orders: Place a new order.

PUT /api/orders/:orderId: Update the status of an order.

DELETE /api/orders/:orderId: Cancel an order.

Transaction Endpoints:

GET /api/transactions/:transactionId: Get details of a specific transaction.

POST /api/transactions: Initiate a new transaction (e.g., payment).

PUT /api/transactions/:transactionId: Update the status of a transaction.


