# Notes: 

## Task
task is to create a simple currency conversion tool

## Requirements:

### Currency Selection:
1. Provide two select boxes for users to choose a currency to convert from and to.
1. Fetch a list of currencies from the https://api.currencybeacon.com/v1/currencies API.
1. Populate the select boxes with the available options returned from the API.

### Currency Conversion:
1. Allow users to input an amount for the “from” currency.
1. Fetch the converted value from the https://api.currencybeacon.com/v1/convert API.
1. Populate the “to” value based on the value returned from the API.

## To do Tasks 
- Setup base dev environment using vite for react with TS 
- install further dependencies ? 
  - daisyUI? 
  - reactQuery
  - axios
- Study docs https://api.currencybeacon.com/ 
- Get API Key and store securely 
- explore API with postman
- Setup an initial placeholder component 
- Setup an initial Get currencies query
- handle API calls for currency conversion 
- develop UI further 
  - populate select boxes 
  - manage selected currencies
  - ensure component is accessible
- Add in input and output UI


## Testing 

### Functionality: 
> Does the application meet the specified requirements? Does it accurately perform currency conversion?

### Code Quality:
> Is the code well-structured, readable, and maintainable? Are best practices followed?

### Component Composition:
> Are components appropriately structured and reused? Is there unnecessary duplication?

### User Experience:
> Is the user interface intuitive and easy to use? Does it provide clear feedback to users?

### Additional Features:
> Are any optional features implemented effectively?


- Deploy to Vercel ?
- setup environmental variables on vercel

