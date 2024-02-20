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

# Waht is Cypress?
Cypress is a next genaration front end testing tool built for the modern web. Vypress address the key pain points developers and QA engineers face when testing modern applications.

# Why Cypress?
1. Cypress is all-in-one testing framework, assertion library, with mocking and stubbing. 
2. Cypress focus on E2E and component testing -- real world testing.
3. Cypress runs in the browser and wrote in JavaScript. (Why JavaScript? According to the HackerRack report of 2023, JavaScript is the fifth-most popular language that used in web development; huge community support.)
4. Good performance and can be integrates in CI/CD quite easily.
5. Native access to the DOM to your app.
6. Great developer UX.
7. If you follow the best practices, it is not flaky.

# Selenium VS Cypress
| Tool                 | Selenium                                               | Cypress                                     |
| :------------------: | :----------------------------------------------------: | :-----------------------------------------: |
| Application Support  | Only Web                                               | Web & API                                   |
| Cost                 | Free                                                   | Test Runner -Free, Dashboard -Paid          |
| Setup & Installation | Difficult                                              | Easier                                      |
| Languages            | Java, Python, Ruby, C#, JavaScript                     | JavaScript, TypeScript                      |
| Browsers             | Chrome, Edge, Firefox, Safari, Opera, IE11             | Chrome, Edge, Firefox, Electron             |
| Frameworks Support   | Junit, testNG, pyTest. based on programming language   | Mocha JS                                    |
| Performance          | Run outside of the browser, performance is slow        | Faster since it runs inside of the browser  |
| Reporting            | Integrate with Extent, Allure etc..                    | Mocha reporters, Cypress dashboard          |

# Cypress Eco System
1. TestRunner - open source. locally installed.
2. Dashboard - paid.

# Special Features
1. Time travel - Cypress takes snapshots as your tests run. Simple hover over commands in the command log to see exactly what happened at each step.
2. Debuggability - Debug directly from familiar tools like Chrome DevTool. Readable errors and stack traces make debugging lighting fast.
3. Automatic waits - Never add waits or sleeps to your tests/ Cypress automatically waits for commands and assertions before move on.
5. Real time records - Cypress automatically realoads whenever you make changes to your test. Able to have screenshoot & video recording.
6. Cross browser testing - Cypress able to run locally or remotely.

# Limitations
1. Not able to automate Window based and Mobile application.
2. Limited supports browser.
3. Language only support JavaScript and Typescript.
4. Readind and writing data into files is difficults (need some thress party plug in).
5. lImited third party reporting tool integration.

# Environment setup on Windows
1. Download & install nodejs.
    1. Go to "https://nodejs.org/en/download" download the Windows installer and install it.
    2. Open command prompt and type "node --version" and verify the nodejs version to confirm nodejs is installed in your Windows machine. 
2. Download & install visual studio code.
    1. Got to "https://code.visualstudio.com/download" download the Windows installer and install it.

# Clone and run the test
1. Create a folder for the project 
    1. Open git bash.
    2. type git init.
    3. clone the project.
2. Install Cypress
    1. Open visual studio code.
    2. Go to terminal and type "npm install cypress".
3. Start Cypress
    1. Go to terminal and type "npx cypress open".
4. Run Test in Cypress.
    1. Select E2E Testing.
    2. Select Chrome and press Start E2E Testing in Chrome.
    3. Select Specs and press WebAutomationTaskV2.

# Testing Fundamentals
1. Describe blocks
    Your test will exists in a describe block. This block takes two arguments. The first is a description of what you are testing. The second is a callback function for your actually tests witn that block.
2. It blocks
    Within your describe block, you will also have it blocks. It blocks will be single test within an overall test file. The API for() is the same as describe. The first argument is the title of an individual test, and the second argument is a callback function containing your test code. 
3. Commands & interacting with elements
    Cypress gives you various commands to help you test. You can use these commands on these commands on the cy object. For example, cy.visit(/) will navigate the cypress runner to your home page. You have various other commands like cy.click(), cy.type(), cy.check() 
    # Understading the Asynchronous nature of Cypress (https://learn.cypress.io/cypress-fundamentals/understanding-the-asynchronous-nature-of-cypress)
4. Getting elements
    You are often going to want to get an element from the DOM and make some sort of assertion. For example, my h1 contans certian text. You can get elements in Cypress by using the get function, and pass in a CSS query selector.
5. Command chaining & asssertions
    After you get the element you probably want to do something with that element. like make an assertion. You can do this by chaining on an assertion after getting an element. For example, get(h1).contains('tex'). Cypress has various ways of making an assertion. 
6. Focussing on a single test
    You can use it.only() to run a single test.
7. beforeEach
    You can use a beforeEach function to perform certain actions prior to every test.
8. Custom commands
    You are not limited to just the cy.X commands, but you create your own custom commands. You add your custom commands to cypress/support/commands.ts. For example, you might add a custom command getData that gets an element by data-test. 

# Best Practices (recommended by Cypress)
1. Test unhappy path
    Don't just test the 'happy path' of the user. Make sure to test users that might be maliciously using your app or actions that might not be common.
2. Use stable selectors
    Use data attributes to provide context to your selectors and isolate them from CSS and JS changes. Don't target elements based on CSS attributes such as id, class, tag. Don't use too genetic selector (e.g. cy.get('button')). Don't couple it to styles.
3. Do not assign return values
    Cypress does not run synchonously.
4. Do not test external sites
    Only test websites that you control. Try to avoid visiting or requiring a 3rd party server. If you choose, you may use cy.request() to talk to 3rd party servers via their APIs. If possible, cache results cia cy.session() to avoid repeat visits.
5. Keep tests independent
    Don't make one test dependent on another. This becomes extremely difficult to manage.
6. Do not worry about writing tiny tests
    Writing ting tests, like unit tests, is not-performant and excessive. Cypress resets various state and tests between tests that takes a long time. Some small tests hurt performance. Plus you will still know exactly assertion fails in a longer e2e test.
7. Clean up state before tests run
    Don't clean up state with after or afterEach. One benefit of Cypress is incrementally writing tests and application code. And if the state isn't maintained after a test, it can make it more difficult to know what you should test next. If something fails in the middle of your test, the after cleanup functions won't get a chance to run. Cypress already cleans up state between tests, so this might not be something you need to worry about at all. 
8. Using arvitrary cy.wait()
    Use route aliases or assertions to guard Cypress from proceeding until an explicit condition is met. 