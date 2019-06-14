const fs = require('fs');
const path = require('path');

const apis = [
  'EasyShip',
  'Feeds',
  'Finances',
  'FulfillmentInboundShipment',
  'FulfillmentInventory',
  'FulfillmentOutboundShipment',
  'MerchantFulfillment',
  'Orders',
  'Products',
  'Recommendations',
  'Reports',
  'Sellers',
  'Subscriptions'
];

for (const name of apis) {
  const filepath = path.join(__dirname, `Mws/${name}.ts`);
  fs.writeFileSync(filepath, ``);
}


