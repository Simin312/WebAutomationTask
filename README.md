# WebAutomationTask
Test Automation: Practical and Questionnaire Assignment

# Question
Question 2: Web Automation task

Open two ecommerce websites say amazon.com and ebay.com or any other E-Commerce website, example: lazada /shopee (available at your respective location).

Search for "iPhone 15 Pro" on the website and validate that the result is shown for the mentioned product

Now, combine the outputs of both the websites and display the result in ascending order of price.

The output should consist of the following info: 
Name of the Website, 
Name of the product, 
Price of the product,
Link to the product.

You can print the output in any reporter of your choice or even in the console.

# Tool Selection -> Cypress
Why Cypress?
1. Cypress is all-in-one testing framework, assertion library, with mocking and stubbing. 
2. Cypress focus on E2E and component testing -- real world testing.
3. Cypress runs in the browser and wrote in JavaScript. (Why JavaScript? According to the HackerRack report of 2023, JavaScript is the fifth-most popular language that used in web development; huge community support.)
4. Good performance and can be integrates in CI/CD quite easily.
5. Native access to the DOM to your app.
6. Great developer UX.
7. If you follow the best practices, it is not flaky.

# Overview & Install
1. install Cypress via npm:
    cd /your/project/path
    npm install cypress --save-dev
2. Cypress open using npx:
    npx cypress open

