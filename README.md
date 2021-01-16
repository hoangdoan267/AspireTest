# Aspire Code Chanllenge

An Entrance Coding Challenge from Aspire

[![GitHub issues](https://img.shields.io/github/issues/hoangdoan267/AspireTest)](https://github.com/hoangdoan267/AspireTest/issues)
![GitHub last commit](https://img.shields.io/github/last-commit/hoangdoan267/AspireTest)

## Table of contents

- [User Stories](#userstory)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Notes](#notes)

### 1. User Stories

- [x] As an User, I want to have a Debit Card screen which I can manage my debit card
- [x] As an User, I want to see my Available balance on this screen
- [x] As an User, I want to see my Card Information and can hide it to avoid other people looking for it.
- [x] As an User, I want some buttons to Topup my Account, Set my Weekly spending limit, Freeze my card, Get a new Card and Deactive cards.
- [x] As an User, I want to have screen which contains Amount Number that I can choose to set my weekly spending limit.
- [x] As an User, I want to unset my Weekly spending limit.
- [x] As an User, I want the app run both iOS and Android
- [x] As a Technical Leader, I want to use Redux, Redux Saga and Typescript in this project.
- [ ] As a Technical Leader, I want to have Unit Test of every files.

### 2. Installation

To use this project, follow these steps below:

1. Clone the project: `$ git clone https://github.com/hoangdoan267/AspireTest.git`
2. Run: `$ yarn` to install all dependencies
3. For ios, you have to link native modules using Pod
   `$ cd ios/ && pod install` or `$ npx pod-install`

### 3. Usage

Running on iOS
`$ npx react-native run-ios`
![iOS](https://imgur.com/X84ZKfN.png)
Running on Android
`$ npx react-native run-android`
![Android](https://imgur.com/7UYnKH5.png)

### 3. Testing

Run `$ yarn test` to run some components Unit Test .

### 4. Notes

1. Progress Bar UI
   I set Spending Amount to 345, if you want to see how the Progress Bar works, please edit **src/screens/DebitCard/index.tsx:83**, change the value to the number you want.

   **Before**
   ![Before](https://imgur.com/EFGn2Qh.png)
   **After**
   ![After](https://imgur.com/TPbOt34.png)

[(Back to top)](#table-of-contents)
