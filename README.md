### Problem
Given two lists where each list is containing a set of words. Each list contains words that are matching some how by using anagrams. the task is to group these words and sort them alphabetically within the group. then sort the groups alphabetically and use the first word of each group while sorting. One last note, we don't want duplicates in each final sorted result.

A sample of the required sorting:
```console
A1, A2, A3 

B1

C1, C2 
```

### Sample Input
Lists of words

    {  
        "input_words_lists": [ 
            ["Hemarn", "Rispa", "Spari", "Terdamrot", "Amsterdam", "Arnhem", "Erdamamst", "Damrotter", "Rotterdam", "Paris"], ["Erdamamst", "Spari", "Paris", "Rispa", "Rotterdam", "Rispa", "Damrotter", "Arnhem", "Terdamrot", "Amsterdam", "Hemarn", "Erdamamst"]  
        ]
    }

### Sample Output
Lists of words

    {
        "0":[["Amsterdam","Erdamamst"],["Arnhem","Hemarn"],["Damrotter","Rotterdam","Terdamrot"],["Paris","Rispa","Spari"]],"1":[["Amsterdam","Erdamamst"],["Arnhem","Hemarn"],["Damrotter","Rotterdam","Terdamrot"],["Paris","Rispa","Spari"]]
    }

### Installation
**directly using your Node**
```bat
- cd to dist folder
- excecute **node main.js**
- node version used v12.18.2
```

**or you can install nest CLI and run the app in dev mode by using the following commands**
```bat
- npm i -g @nestjs/cli
- cd <project-folder>
- npm install
- npm start
```

**and you can run unit tests by using the following command**
```bat
- npm run test
```

### Technology Used
- this application is built using NestJS that supports TypeScript.

### Using the Algorithm over API 
- run the application as explained in the installation section above.
- make a post request on the url `localhost:3000/api/sorter/group-and-sort-words`
- the request payload sample will be:
`{  "input_words_lists": [ ["Hemarn", "Rispa", "Spari", "Terdamrot", "Amsterdam", "Arnhem", "Erdamamst", "Damrotter", "Rotterdam", "Paris"],  ["Erdamamst", "Spari", "Paris", "Rispa", "Rotterdam", "Rispa", "Damrotter", "Arnhem", "Terdamrot", "Amsterdam", "Hemarn", "Erdamamst"]  ]
}`

- you can pass "algorithm" (optional) to select which algorithm to use to solve this porblem. now only "SORT_AND_COMPARE" algorithm is implemented.

- the reponse will be an object with keys as dataset-number and an array of groupped anagrams, ex:`{"0":[["Amsterdam","Erdamamst"],["Arnhem","Hemarn"],["Damrotter","Rotterdam","Terdamrot"],["Paris","Rispa","Spari"]],"1":[["Amsterdam","Erdamamst"],["Arnhem","Hemarn"],["Damrotter","Rotterdam","Terdamrot"],["Paris","Rispa","Spari"]]}`

- postman collection url https://www.getpostman.com/collections/9f9e6b6da6a6f685ee98