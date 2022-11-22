# Lab 8 - Starter

Chun Hang Chan

1. **Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.**

    1. Within a Github action that runs whenever code is pushed
    2. Manually run them locally before pushing code
    3. Run them all after all development is completed

    I would fit my automated tests in my Recipe project development pipeline within a Github action that runs whenever code is pushed. It is because I can check if the code works correctly after the tests run for all the pushes.

2. **Would you use an end to end test to check if a function is returning the correct output? (yes/no)**

    No, it is because an end to end test is used for emulating user actions from start to finish.
3. **Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.**

    No, it is because many components will interact with each other if testing the "message" feature of a messaging application. While unit tests only test individual parts in the code.

4. **Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.**

    Yes, it is because there will be no interaection with other components for testing the "max message length" feature of a messaging application as only the input is needed.