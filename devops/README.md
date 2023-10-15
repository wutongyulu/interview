# Requirement:
    * The whole stack should be run successful locally.
    * Install the playwright for frontend, and use the playwright to test the frontend.
        1. Test coverage need to over 80%, which means the you need to test:
            a. Login the system
            b. Add the first one to do item
            c. Check if todo item is added
            d. Edit the item which is added
            d. Remove the todo item
    * Run the stack in github action, and
        1. Should run the e2e test for frontend
        2. Only trigger the github action when PR is ready

# Bonus points:
    * Find out the incorrect configuration in the compose file, and fix it.
    * For the e2e test, it can start the test without authentification in login page.
    * Run the cronjob in CI, which will test the frontend e2e in every 2 hours.
    * Fix the backend unit test
    * Deploy the stack to the cloud, and provide the accessable url.
