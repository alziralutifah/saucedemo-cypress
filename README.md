# Tugas Pekanan 4 - Cypress

## Test Cases

https://docs.google.com/spreadsheets/d/17sP-BW0wmr75tVwIhny43FWF7pI_IQkMW-ttCZez-zE/edit?usp=sharing

## Running the Tests
1. Cypress Open
```bash
npx cypress open
```

2. test-headless
```bash
npm run test-headless
```

3. test-headed
```bash
npm run test-headed
```


Here is the report generated using Mochawesome:
 ![report-mochawesome](https://github.com/alziralutifah/saucedemo-cypress/blob/main/report-mochawesome.png)

 atau dapat mengakses melalui file html pada folder:
 reports/html/index.html
 
 Failed test (Checkout without items):
 ![failed-test](https://github.com/alziralutifah/saucedemo-cypress/blob/main/cypress/screenshots/checkoutEmptyItem.cy.js/Negative%20-%20Checkout%20--%20Checkout%20without%20items%20(failed).png)
 ```bash
 Notes:
 The checkout process is completed successfully even though the cart is empty. No validation message is shown to the user to indicate that no items have been added to the cart. The system allows the user to proceed as if the checkout is valid.
```

## Demo Video
To see a demonstration of how to run web saucudemo using cypress, check out the following video:



This video will guide you through the process of running the tests and generating the test reports.


## Contributing
If you want to contribute to this project, please fork this repository and submit a pull request with a description of your changes.

## License
This repository does not have an official license. You are free to use and modify the code as needed.

## Contact
If you have any questions or suggestions regarding this repository, feel free to contact me at alziralutifah13@gmail.com.




