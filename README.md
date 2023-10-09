# shattleX-chat

React Native task

Title:
Simple chat application.

Description:
Users should be able to create chats, search for chats, connect to exist and delete if the user created the chat. When a user connects to chat, it should be able to write some text, see hardcoded messages from other users.

Tech stack:
- React Native;
- Redux;
- TypeScript

Architecture:
app ┐
      ┠ core ┐                                           <- business logic / redux actions
       │         ┠  module-1 / service-1        <- for ex, logic to create/update/delete chat
       │         ┠  module-2 / service-2
       │          └ …
      ┠ static ┐                                         <- ‘routing components’ - just represent pages
       │           ┠  component-1                 <- for ex, Home or Chat page
       │           ┠  component-2
       │            └ …
      ┠ shared ┐                                       <- components to be used in ‘routing components’
                      ┠  component-1               <- for ex, styled button or completed widget
                      ┠  component-2
                       └ …

Requirements:
- The whole tech stack has been used;
- Architecture used in the correct way;
- There are at least 2 pages;
- There are at least 4 api requests (for each CRUD operation);
- There is at least 1 websocket connection;
- There is at least 1 unit test (it’s up to you which library for testing you want to use);
- Clean code;

Notes:
- IMPORTANT: Task is only for React Native (Just React usage denied).
- For testing purposes (as mock backend server for api and websockets), you can use Postman or another tool (How to setup mock server in Postman: https://learning.postman.com/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/ )
- It’s ok to search for existing logic/source code but you have to be aware how logic is working, how to extend and maintain it.
- Please, store your ready solution in github/gitlab/another and share the link to it to HR
- An user can delete only those chats which he created. It’s restricted to delete all other (hardcoded) chats (from other users).
- It’s ok to use Expo and different libraries like React Native Elements / React Native UI / Redux toolkit / thunk

****************************************************************************************************************
WHAT DONE?

Tech stack:
- React Native -yes;
- Redux -no, used instead it Firebase;
- TypeScript - no, but possible migrate;

Requirements:
- The whole tech stack has been used - no;
- Architecture used in the correct way - no;
- There are at least 2 pages - yes;
- There are at least 4 api requests (for each CRUD operation) - yes;
- There is at least 1 websocket connection -yes;
- There is at least 1 unit test (it’s up to you which library for testing you want to use) - no, but possible - look my example testing - https://github.com/Alex52-62/HW_React_ls10/tree/HW_React_lesson10;
- Clean code - no, need more time for refactoring (because I use alien ready project );
  

