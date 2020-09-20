const accounts_data = [];
var faker = require("faker");
for (let i = 0; i < 100; i++) {
  accounts_data.push({
    id: (i + 1).toString(),
    account_number: faker.finance.mask(),
    account_name: faker.company.companyName(),
    email: faker.internet.email(),
    OS: faker.finance.amount(),
    UA: faker.finance.amount(),
    CL: faker.finance.amount(),
    AE: faker.finance.amount(),
  });
}
/**
 * 
 * 
 * [
    {
      id: 1,
      account_number: "100",
      account_name: "Xays Company",
      email: "info@xays.com",
      OS: 100.44,
      UA: 10.4,
      CL: 0,
      AE: 211.44,
    },
]
 */
export default accounts_data;
