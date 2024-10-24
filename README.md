# Lecture-data-types
Grundläggande termer, datatyper och variablerLära oss grundläggande verktyg för användar-input och output, Operatorer i JS, If-satser


### String
 string is just a collection of characters with in quotes. It can be both double quotes and single quote. But there also exist a third way of writing strings.
 ```js 
"Jerry" // valid string
'Jerry' // valid string
`Jerry` // valid string
 ```
 These above are all equal, but the backticks-version have some extra functionality.

 For instance, backtics allows multiline strings. The other two dont't.

 ```js
 "My name
 is Jerry" // This wont work in a js file.

 `My name
 is Jerry" // This works just fine.
 ```

 Another example of added funtionality with backtics is the avility to inject variables inside the string, if it is defined woth backtics. 

 ```js
 const name = "Jerry";
 const lastName = "Lundahl";

 `Hello, my name is ${name} ${lastName}!`
``` 
This is also called a string literal.

If we want to do the same thing with regular quation marks, we need to concatinate _(add)_,

```js
const name = "Jerry";
const lastName = "Lundahl";
"Hello, my name is " + name + lastName + ".";
```

