const IconColor = '#0a0a23';
const IconSize = '60';

const directoryToSuperblock = {
  '00-certifications': 'certifications', // treating certifications as a superblock for simplicity
  '01-responsive-web-design': 'responsive-web-design',
  '02-javascript-algorithms-and-data-structures':
    'javascript-algorithms-and-data-structures',
  '03-front-end-development-libraries': 'front-end-development-libraries',
  '04-data-visualization': 'data-visualization',
  '05-back-end-development-and-apis': 'back-end-development-and-apis',
  '06-quality-assurance': 'quality-assurance',
  '07-scientific-computing-with-python': 'scientific-computing-with-python',
  '08-data-analysis-with-python': 'data-analysis-with-python',
  '09-information-security': 'information-security',
  '10-coding-interview-prep': 'coding-interview-prep',
  '11-machine-learning-with-python': 'machine-learning-with-python',
  '13-relational-databases': 'relational-database',
  '14-responsive-web-design-22': '2022/responsive-web-design',
  '15-javascript-algorithms-and-data-structures-22':
    '2022/javascript-algorithms-and-data-structures',
  '16-the-odin-project': 'the-odin-project',
  '17-college-algebra-with-python': 'college-algebra-with-python',
  '18-project-euler': 'project-euler',
};

interface CompletedLesson {
  lessonId: string;
  code: string;
}

interface Course {
  name: string;
  completedLessons: CompletedLesson[];
}

interface UserData {
  courses: Course[];
}

const userData: UserData = {
  courses: [
    {
      name: 'Sass',
      completedLessons: [
        {
          lessonId: '587d7dbd367417b2b2512bb4',
          code: '/* Code for lesson 1 */',
        },
        {
          lessonId: '587d7dbd367417b2b2512bb5',
          code: '/* Code for lesson 2 */',
        },
        // Add more completed lessons here
      ],
    },
    // Add more courses here
  ],
};
/* In this updated structure, the Course object has a completedLessons property, which is an array of CompletedLesson objects. Each CompletedLesson object contains the lessonId of the completed lesson and the code that has been added by the user for that lesson.

  By storing only the completed lessons and their corresponding code, you can reduce the amount of data stored and retrieve the necessary information efficiently.

  Remember to update the localStorage saving and retrieving logic accordingly:

  typescript
  Copy code
  const userDataString = JSON.stringify(userData);
  localStorage.setItem('userData', userDataString); */

const storedDataString = localStorage.getItem('userData');
if (storedDataString) {
  const storedData: UserData = JSON.parse(storedDataString);
  // Use the storedData object
}

/*   Note that you may need to update other parts of your application to handle this simplified data structure. For example, when rendering the course details, you can iterate over the completedLessons array to display the completed lessons and their associated code.
 */

export const TITLES = [
  {
    url: 'javascript-algorithms-and-data-structures',
    label: 'JavaScript Algorithms and Data Structures',
    description:
      "While HTML and CSS control the content and styling of a page, JavaScript is used to make it interactive. In the JavaScript Algorithm and Data Structures Certification, you'll learn the fundamentals of JavaScript including variables, arrays, objects, loops, and functions.\nOnce you have the fundamentals down, you'll apply that knowledge by creating algorithms to manipulate strings, factorialize numbers, and even calculate the orbit of the International Space Station.\nAlong the way, you'll also learn two important programming styles or paradigms: Object Oriented Programming (OOP) and Functional Programming (FP).",
    icon: (
      <svg width={IconSize} height={IconSize} viewBox="0 0 448 512">
        <path
          fill={IconColor}
          d="M32 32v448h448V32Zm240 348c0 43.61-25.76 64.87-63.05 64.87c-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65c12 0 21.86-5.41 21.86-26.46V240h44Zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56c17.44 0 27.57-7.72 27.57-19.75c0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45c0-31.57 24.05-54.63 61.64-54.63c26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18c-12.33 0-20.15 7.82-20.15 18c0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16c.01 37.9-29.76 57.64-69.76 57.64Z"
        ></path>
      </svg>
    ),
    bigIcon: (
      <svg width="100" height="100" viewBox="0 0 448 512">
        <path
          fill={IconColor}
          d="M32 32v448h448V32Zm240 348c0 43.61-25.76 64.87-63.05 64.87c-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65c12 0 21.86-5.41 21.86-26.46V240h44Zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56c17.44 0 27.57-7.72 27.57-19.75c0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45c0-31.57 24.05-54.63 61.64-54.63c26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18c-12.33 0-20.15 7.82-20.15 18c0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16c.01 37.9-29.76 57.64-69.76 57.64Z"
        ></path>
      </svg>
    ),
    topics: [
      {
        name: 'Basic JavaScript',
        isUpcomingChange: false,
        dashedName: 'basic-javascript',
        description:
          "JavaScript is a scripting language you can use to make web pages interactive. It is one of the core technologies of the web, along with HTML and CSS, and is supported by all modern browsers.\nIn this course, you'll learn fundamental programming concepts in JavaScript. You'll start with basic data structures like numbers and strings. Then you'll learn to work with arrays, objects, functions, loops, if/else statements, and more.",
        order: 0,
        time: '10 hours',
        superBlock: '02-javascript-algorithms-and-data-structures',
        challengeOrder: [
          ['bd7123c9c441eddfaeb4bdef', 'Comment Your JavaScript Code'],
          ['bd7123c9c443eddfaeb5bdef', 'Declare JavaScript Variables'],
          [
            '56533eb9ac21ba0edf2244a8',
            'Storing Values with the Assignment Operator',
          ],
          [
            '5ee127a03c3b35dd45426493',
            'Assigning the Value of One Variable to Another',
          ],
          [
            '56533eb9ac21ba0edf2244a9',
            'Initializing Variables with the Assignment Operator',
          ],
          ['bd7123c9c444eddfaeb5bdef', 'Declare String Variables'],
          ['56533eb9ac21ba0edf2244aa', 'Understanding Uninitialized Variables'],
          [
            '56533eb9ac21ba0edf2244ab',
            'Understanding Case Sensitivity in Variables',
          ],
          [
            '587d7b87367417b2b2512b3f',
            'Explore Differences Between the var and let Keywords',
          ],
          [
            '587d7b87367417b2b2512b41',
            'Declare a Read-Only Variable with the const Keyword',
          ],
          ['cf1111c1c11feddfaeb3bdef', 'Add Two Numbers with JavaScript'],
          [
            'cf1111c1c11feddfaeb4bdef',
            'Subtract One Number from Another with JavaScript',
          ],
          ['cf1231c1c11feddfaeb5bdef', 'Multiply Two Numbers with JavaScript'],
          [
            'cf1111c1c11feddfaeb6bdef',
            'Divide One Number by Another with JavaScript',
          ],
          ['56533eb9ac21ba0edf2244ac', 'Increment a Number with JavaScript'],
          ['56533eb9ac21ba0edf2244ad', 'Decrement a Number with JavaScript'],
          [
            'cf1391c1c11feddfaeb4bdef',
            'Create Decimal Numbers with JavaScript',
          ],
          ['bd7993c9c69feddfaeb7bdef', 'Multiply Two Decimals with JavaScript'],
          [
            'bd7993c9ca9feddfaeb7bdef',
            'Divide One Decimal by Another with JavaScript',
          ],
          ['56533eb9ac21ba0edf2244ae', 'Finding a Remainder in JavaScript'],
          [
            '56533eb9ac21ba0edf2244af',
            'Compound Assignment With Augmented Addition',
          ],
          [
            '56533eb9ac21ba0edf2244b0',
            'Compound Assignment With Augmented Subtraction',
          ],
          [
            '56533eb9ac21ba0edf2244b1',
            'Compound Assignment With Augmented Multiplication',
          ],
          [
            '56533eb9ac21ba0edf2244b2',
            'Compound Assignment With Augmented Division',
          ],
          ['56533eb9ac21ba0edf2244b5', 'Escaping Literal Quotes in Strings'],
          ['56533eb9ac21ba0edf2244b4', 'Quoting Strings with Single Quotes'],
          ['56533eb9ac21ba0edf2244b6', 'Escape Sequences in Strings'],
          [
            '56533eb9ac21ba0edf2244b7',
            'Concatenating Strings with Plus Operator',
          ],
          [
            '56533eb9ac21ba0edf2244b8',
            'Concatenating Strings with the Plus Equals Operator',
          ],
          ['56533eb9ac21ba0edf2244b9', 'Constructing Strings with Variables'],
          ['56533eb9ac21ba0edf2244ed', 'Appending Variables to Strings'],
          ['bd7123c9c448eddfaeb5bdef', 'Find the Length of a String'],
          [
            'bd7123c9c549eddfaeb5bdef',
            'Use Bracket Notation to Find the First Character in a String',
          ],
          ['56533eb9ac21ba0edf2244ba', 'Understand String Immutability'],
          [
            'bd7123c9c450eddfaeb5bdef',
            'Use Bracket Notation to Find the Nth Character in a String',
          ],
          [
            'bd7123c9c451eddfaeb5bdef',
            'Use Bracket Notation to Find the Last Character in a String',
          ],
          [
            'bd7123c9c452eddfaeb5bdef',
            'Use Bracket Notation to Find the Nth-to-Last Character in a String',
          ],
          ['56533eb9ac21ba0edf2244bb', 'Word Blanks'],
          [
            'bd7993c9c69feddfaeb8bdef',
            'Store Multiple Values in one Variable using JavaScript Arrays',
          ],
          ['cf1111c1c11feddfaeb7bdef', 'Nest one Array within Another Array'],
          ['56bbb991ad1ed5201cd392ca', 'Access Array Data with Indexes'],
          ['cf1111c1c11feddfaeb8bdef', 'Modify Array Data With Indexes'],
          [
            '56592a60ddddeae28f7aa8e1',
            'Access Multi-Dimensional Arrays With Indexes',
          ],
          ['56bbb991ad1ed5201cd392cb', 'Manipulate Arrays With push()'],
          ['56bbb991ad1ed5201cd392cc', 'Manipulate Arrays With pop()'],
          ['56bbb991ad1ed5201cd392cd', 'Manipulate Arrays With shift()'],
          ['56bbb991ad1ed5201cd392ce', 'Manipulate Arrays With unshift()'],
          ['56533eb9ac21ba0edf2244bc', 'Shopping List'],
          [
            '56bbb991ad1ed5201cd392cf',
            'Write Reusable JavaScript with Functions',
          ],
          [
            '56533eb9ac21ba0edf2244bd',
            'Passing Values to Functions with Arguments',
          ],
          [
            '56533eb9ac21ba0edf2244c2',
            'Return a Value from a Function with Return',
          ],
          ['56533eb9ac21ba0edf2244be', 'Global Scope and Functions'],
          ['56533eb9ac21ba0edf2244bf', 'Local Scope and Functions'],
          ['56533eb9ac21ba0edf2244c0', 'Global vs. Local Scope in Functions'],
          [
            '598e8944f009e646fc236146',
            'Understanding Undefined Value returned from a Function',
          ],
          ['56533eb9ac21ba0edf2244c3', 'Assignment with a Returned Value'],
          ['56533eb9ac21ba0edf2244c6', 'Stand in Line'],
          ['bd7123c9c441eddfaeb5bdef', 'Understanding Boolean Values'],
          [
            'cf1111c1c12feddfaeb3bdef',
            'Use Conditional Logic with If Statements',
          ],
          ['56533eb9ac21ba0edf2244d0', 'Comparison with the Equality Operator'],
          [
            '56533eb9ac21ba0edf2244d1',
            'Comparison with the Strict Equality Operator',
          ],
          ['599a789b454f2bbd91a3ff4d', 'Practice comparing different values'],
          [
            '56533eb9ac21ba0edf2244d2',
            'Comparison with the Inequality Operator',
          ],
          [
            '56533eb9ac21ba0edf2244d3',
            'Comparison with the Strict Inequality Operator',
          ],
          [
            '56533eb9ac21ba0edf2244d4',
            'Comparison with the Greater Than Operator',
          ],
          [
            '56533eb9ac21ba0edf2244d5',
            'Comparison with the Greater Than Or Equal To Operator',
          ],
          [
            '56533eb9ac21ba0edf2244d6',
            'Comparison with the Less Than Operator',
          ],
          [
            '56533eb9ac21ba0edf2244d7',
            'Comparison with the Less Than Or Equal To Operator',
          ],
          [
            '56533eb9ac21ba0edf2244d8',
            'Comparisons with the Logical And Operator',
          ],
          [
            '56533eb9ac21ba0edf2244d9',
            'Comparisons with the Logical Or Operator',
          ],
          ['56533eb9ac21ba0edf2244da', 'Introducing Else Statements'],
          ['56533eb9ac21ba0edf2244db', 'Introducing Else If Statements'],
          ['5690307fddb111c6084545d7', 'Logical Order in If Else Statements'],
          ['56533eb9ac21ba0edf2244dc', 'Chaining If Else Statements'],
          ['5664820f61c48e80c9fa476c', 'Golf Code'],
          [
            '56533eb9ac21ba0edf2244dd',
            'Selecting from Many Options with Switch Statements',
          ],
          [
            '56533eb9ac21ba0edf2244de',
            'Adding a Default Option in Switch Statements',
          ],
          [
            '56533eb9ac21ba0edf2244df',
            'Multiple Identical Options in Switch Statements',
          ],
          ['56533eb9ac21ba0edf2244e0', 'Replacing If Else Chains with Switch'],
          [
            '5679ceb97cbaa8c51670a16b',
            'Returning Boolean Values from Functions',
          ],
          ['56533eb9ac21ba0edf2244c4', 'Return Early Pattern for Functions'],
          ['565bbe00e9cc8ac0725390f4', 'Counting Cards'],
          ['56bbb991ad1ed5201cd392d0', 'Build JavaScript Objects'],
          [
            '56533eb9ac21ba0edf2244c7',
            'Accessing Object Properties with Dot Notation',
          ],
          [
            '56533eb9ac21ba0edf2244c8',
            'Accessing Object Properties with Bracket Notation',
          ],
          [
            '56533eb9ac21ba0edf2244c9',
            'Accessing Object Properties with Variables',
          ],
          ['56bbb991ad1ed5201cd392d1', 'Updating Object Properties'],
          [
            '56bbb991ad1ed5201cd392d2',
            'Add New Properties to a JavaScript Object',
          ],
          [
            '56bbb991ad1ed5201cd392d3',
            'Delete Properties from a JavaScript Object',
          ],
          ['56533eb9ac21ba0edf2244ca', 'Using Objects for Lookups'],
          ['567af2437cbaa8c51670a16c', 'Testing Objects for Properties'],
          ['56533eb9ac21ba0edf2244cb', 'Manipulating Complex Objects'],
          ['56533eb9ac21ba0edf2244cc', 'Accessing Nested Objects'],
          ['56533eb9ac21ba0edf2244cd', 'Accessing Nested Arrays'],
          ['56533eb9ac21ba0edf2244cf', 'Record Collection'],
          ['cf1111c1c11feddfaeb1bdef', 'Iterate with JavaScript While Loops'],
          ['cf1111c1c11feddfaeb5bdef', 'Iterate with JavaScript For Loops'],
          ['56104e9e514f539506016a5c', 'Iterate Odd Numbers With a For Loop'],
          ['56105e7b514f539506016a5e', 'Count Backwards With a For Loop'],
          [
            '5675e877dbd60be8ad28edc6',
            'Iterate Through an Array with a For Loop',
          ],
          ['56533eb9ac21ba0edf2244e1', 'Nesting For Loops'],
          [
            '5a2efd662fb457916e1fe604',
            'Iterate with JavaScript Do...While Loops',
          ],
          ['5cfa3679138e7d9595b9d9d4', 'Replace Loops using Recursion'],
          ['5688e62ea601b2482ff8422b', 'Profile Lookup'],
          [
            'cf1111c1c11feddfaeb9bdef',
            'Generate Random Fractions with JavaScript',
          ],
          [
            'cf1111c1c12feddfaeb1bdef',
            'Generate Random Whole Numbers with JavaScript',
          ],
          [
            'cf1111c1c12feddfaeb2bdef',
            'Generate Random Whole Numbers within a Range',
          ],
          ['587d7b7e367417b2b2512b23', 'Use the parseInt Function'],
          [
            '587d7b7e367417b2b2512b22',
            'Use the parseInt Function with a Radix',
          ],
          [
            '587d7b7e367417b2b2512b24',
            'Use the Conditional (Ternary) Operator',
          ],
          [
            '587d7b7e367417b2b2512b21',
            'Use Multiple Conditional (Ternary) Operators',
          ],
          ['5cd9a70215d3c4e65518328f', 'Use Recursion to Create a Countdown'],
          [
            '5cc0bd7a49b71cb96132e54c',
            'Use Recursion to Create a Range of Numbers',
          ],
        ],
      },
      {
        name: 'ES6',
        isUpcomingChange: false,
        dashedName: 'es6',
        helpCategory: 'JavaScript',
        description:
          "ECMAScript, or ES, is a standardized version of JavaScript. Because all major browsers follow this specification, the terms ECMAScript and JavaScript are interchangeable.\nMost of the JavaScript you've learned up to this point was in ES5 (ECMAScript 5), which was finalized in 2009. While you can still write programs in ES5, JavaScript is constantly evolving, and new features are released every year.\nES6, released in 2015, added many powerful new features to the language. In this course, you'll learn these new features, including arrow functions, destructuring, classes, promises, and modules.",
        order: 1,
        time: '5 hours',
        template: '',
        required: [],
        superBlock: '02-javascript-algorithms-and-data-structures',
        challengeOrder: [
          [
            '587d7b87367417b2b2512b40',
            'Compare Scopes of the var and let Keywords',
          ],
          ['587d7b87367417b2b2512b42', 'Mutate an Array Declared with const'],
          ['598f48a36c8c40764b4e52b3', 'Prevent Object Mutation'],
          [
            '587d7b87367417b2b2512b43',
            'Use Arrow Functions to Write Concise Anonymous Functions',
          ],
          ['587d7b88367417b2b2512b44', 'Write Arrow Functions with Parameters'],
          [
            '587d7b88367417b2b2512b46',
            'Set Default Parameters for Your Functions',
          ],
          [
            '587d7b88367417b2b2512b47',
            'Use the Rest Parameter with Function Parameters',
          ],
          [
            '587d7b89367417b2b2512b48',
            'Use the Spread Operator to Evaluate Arrays In-Place',
          ],
          [
            '5cfa550e84205a357704ccb6',
            'Use Destructuring Assignment to Extract Values from Objects',
          ],
          [
            '587d7b89367417b2b2512b49',
            'Use Destructuring Assignment to Assign Variables from Objects',
          ],
          [
            '587d7b89367417b2b2512b4a',
            'Use Destructuring Assignment to Assign Variables from Nested Objects',
          ],
          [
            '587d7b89367417b2b2512b4b',
            'Use Destructuring Assignment to Assign Variables from Arrays',
          ],
          [
            '587d7b8a367417b2b2512b4c',
            'Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements',
          ],
          [
            '587d7b8a367417b2b2512b4d',
            "Use Destructuring Assignment to Pass an Object as a Function's Parameters",
          ],
          [
            '587d7b8a367417b2b2512b4e',
            'Create Strings using Template Literals',
          ],
          [
            '587d7b8a367417b2b2512b4f',
            'Write Concise Object Literal Declarations Using Object Property Shorthand',
          ],
          [
            '587d7b8b367417b2b2512b50',
            'Write Concise Declarative Functions with ES6',
          ],
          [
            '587d7b8b367417b2b2512b53',
            'Use class Syntax to Define a Constructor Function',
          ],
          [
            '587d7b8c367417b2b2512b54',
            'Use getters and setters to Control Access to an Object',
          ],
          ['5cddbfd622f1a59093ec611d', 'Create a Module Script'],
          ['587d7b8c367417b2b2512b56', 'Use export to Share a Code Block'],
          ['587d7b8c367417b2b2512b55', 'Reuse JavaScript Code Using import'],
          [
            '587d7b8c367417b2b2512b57',
            'Use * to Import Everything from a File',
          ],
          [
            '587d7b8c367417b2b2512b58',
            'Create an Export Fallback with export default',
          ],
          ['587d7b8d367417b2b2512b59', 'Import a Default Export'],
          ['5cdafbb0291309899753167f', 'Create a JavaScript Promise'],
          [
            '5cdafbc32913098997531680',
            'Complete a Promise with resolve and reject',
          ],
          ['5cdafbd72913098997531681', 'Handle a Fulfilled Promise with then'],
          ['5cdafbe72913098997531682', 'Handle a Rejected Promise with catch'],
        ],
      },
      {
        name: 'Regular Expressions',
        isUpcomingChange: false,
        dashedName: 'regular-expressions',
        helpCategory: 'JavaScript',
        description: `Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text. Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.\nIn this course, you'll learn how to use special characters, capture groups, positive and negative lookaheads, and other techniques to match any text you want.`,
        order: 2,
        time: '5 hours',
        template: '',
        required: [],
        superBlock: '02-javascript-algorithms-and-data-structures',
        challengeOrder: [
          ['587d7db3367417b2b2512b8e', 'Using the Test Method'],
          ['587d7db3367417b2b2512b8f', 'Match Literal Strings'],
          [
            '587d7db4367417b2b2512b90',
            'Match a Literal String with Different Possibilities',
          ],
          ['587d7db4367417b2b2512b91', 'Ignore Case While Matching'],
          ['587d7db4367417b2b2512b92', 'Extract Matches'],
          ['587d7db4367417b2b2512b93', 'Find More Than the First Match'],
          ['587d7db5367417b2b2512b94', 'Match Anything with Wildcard Period'],
          [
            '587d7db5367417b2b2512b95',
            'Match Single Character with Multiple Possibilities',
          ],
          ['587d7db5367417b2b2512b96', 'Match Letters of the Alphabet'],
          [
            '587d7db5367417b2b2512b97',
            'Match Numbers and Letters of the Alphabet',
          ],
          ['587d7db6367417b2b2512b98', 'Match Single Characters Not Specified'],
          [
            '587d7db6367417b2b2512b99',
            'Match Characters that Occur One or More Times',
          ],
          [
            '587d7db6367417b2b2512b9a',
            'Match Characters that Occur Zero or More Times',
          ],
          ['587d7db6367417b2b2512b9b', 'Find Characters with Lazy Matching'],
          ['587d7db7367417b2b2512b9c', 'Find One or More Criminals in a Hunt'],
          ['587d7db7367417b2b2512b9d', 'Match Beginning String Patterns'],
          ['587d7db7367417b2b2512b9e', 'Match Ending String Patterns'],
          ['587d7db7367417b2b2512b9f', 'Match All Letters and Numbers'],
          [
            '587d7db8367417b2b2512ba0',
            'Match Everything But Letters and Numbers',
          ],
          ['5d712346c441eddfaeb5bdef', 'Match All Numbers'],
          ['587d7db8367417b2b2512ba1', 'Match All Non-Numbers'],
          ['587d7db8367417b2b2512ba2', 'Restrict Possible Usernames'],
          ['587d7db8367417b2b2512ba3', 'Match Whitespace'],
          ['587d7db9367417b2b2512ba4', 'Match Non-Whitespace Characters'],
          [
            '587d7db9367417b2b2512ba5',
            'Specify Upper and Lower Number of Matches',
          ],
          [
            '587d7db9367417b2b2512ba6',
            'Specify Only the Lower Number of Matches',
          ],
          ['587d7db9367417b2b2512ba7', 'Specify Exact Number of Matches'],
          ['587d7dba367417b2b2512ba8', 'Check for All or None'],
          ['587d7dba367417b2b2512ba9', 'Positive and Negative Lookahead'],
          [
            '5c3dda8b4d8df89bea71600f',
            'Check For Mixed Grouping of Characters',
          ],
          ['587d7dbb367417b2b2512baa', 'Reuse Patterns Using Capture Groups'],
          [
            '587d7dbb367417b2b2512bab',
            'Use Capture Groups to Search and Replace',
          ],
          ['587d7dbb367417b2b2512bac', 'Remove Whitespace from Start and End'],
        ],
      },
      {
        name: 'Debugging',
        isUpcomingChange: false,
        dashedName: 'debugging',
        helpCategory: 'JavaScript',
        description:
          "Debugging is the process of going through your code, finding any issues, and fixing them.\nIssues in code generally come in three forms: syntax errors that prevent your program from running, runtime errors where your code has unexpected behavior, or logical errors where your code doesn't do what you intended.\nIn this course, you'll learn how to use the JavaScript console to debug programs and prevent common issues before they happen.",
        order: 3,
        time: '1 hour',
        template: '',
        required: [],
        superBlock: '02-javascript-algorithms-and-data-structures',
        challengeOrder: [
          [
            '587d7b83367417b2b2512b33',
            'Use the JavaScript Console to Check the Value of a Variable',
          ],
          [
            '587d7b83367417b2b2512b37',
            'Understanding the Differences between the freeCodeCamp and Browser Console',
          ],
          [
            '587d7b84367417b2b2512b34',
            'Use typeof to Check the Type of a Variable',
          ],
          [
            '587d7b84367417b2b2512b35',
            'Catch Misspelled Variable and Function Names',
          ],
          [
            '587d7b84367417b2b2512b36',
            'Catch Unclosed Parentheses, Brackets, Braces and Quotes',
          ],
          [
            '587d7b84367417b2b2512b37',
            'Catch Mixed Usage of Single and Double Quotes',
          ],
          [
            '587d7b85367417b2b2512b38',
            'Catch Use of Assignment Operator Instead of Equality Operator',
          ],
          [
            '587d7b85367417b2b2512b39',
            'Catch Missing Open and Closing Parenthesis After a Function Call',
          ],
          [
            '587d7b85367417b2b2512b3a',
            'Catch Arguments Passed in the Wrong Order When Calling a Function',
          ],
          [
            '587d7b86367417b2b2512b3b',
            'Catch Off By One Errors When Using Indexing',
          ],
          [
            '587d7b86367417b2b2512b3c',
            'Use Caution When Reinitializing Variables Inside a Loop',
          ],
          [
            '587d7b86367417b2b2512b3d',
            'Prevent Infinite Loops with a Valid Terminal Condition',
          ],
        ],
      },
      {
        name: 'Basic Data Structures',
        isUpcomingChange: false,
        dashedName: 'basic-data-structures',
        helpCategory: 'JavaScript',
        description:
          "Data can be stored and accessed in many ways. You already know some common JavaScript data structures — arrays and objects.\nIn this Basic Data Structures course, you'll learn more about the differences between arrays and objects, and which to use in different situations. You'll also learn how to use helpful JS methods like splice() and Object.keys() to access and manipulate data.",
        order: 4,
        time: '1 hour',
        template: '',
        required: [],
        superBlock: '02-javascript-algorithms-and-data-structures',
        challengeOrder: [
          [
            '587d7b7e367417b2b2512b20',
            'Use an Array to Store a Collection of Data',
          ],
          [
            '5a661e0f1068aca922b3ef17',
            "Access an Array's Contents Using Bracket Notation",
          ],
          [
            '587d78b2367417b2b2512b0e',
            'Add Items to an Array with push() and unshift()',
          ],
          [
            '587d78b2367417b2b2512b0f',
            'Remove Items from an Array with pop() and shift()',
          ],
          ['587d78b2367417b2b2512b10', 'Remove Items Using splice()'],
          ['587d78b3367417b2b2512b11', 'Add Items Using splice()'],
          ['587d7b7a367417b2b2512b12', 'Copy Array Items Using slice()'],
          [
            '587d7b7b367417b2b2512b13',
            'Copy an Array with the Spread Operator',
          ],
          [
            '587d7b7b367417b2b2512b17',
            'Combine Arrays with the Spread Operator',
          ],
          [
            '587d7b7b367417b2b2512b14',
            'Check For The Presence of an Element With indexOf()',
          ],
          [
            '587d7b7b367417b2b2512b15',
            "Iterate Through All an Array's Items Using For Loops",
          ],
          [
            '587d7b7b367417b2b2512b16',
            'Create complex multi-dimensional arrays',
          ],
          [
            '587d7b7c367417b2b2512b18',
            'Add Key-Value Pairs to JavaScript Objects',
          ],
          [
            '587d7b7c367417b2b2512b19',
            'Modify an Object Nested Within an Object',
          ],
          [
            '587d7b7c367417b2b2512b1a',
            'Access Property Names with Bracket Notation',
          ],
          [
            '587d7b7c367417b2b2512b1b',
            'Use the delete Keyword to Remove Object Properties',
          ],
          ['587d7b7d367417b2b2512b1c', 'Check if an Object has a Property'],
          [
            '587d7b7d367417b2b2512b1d',
            'Iterate Through the Keys of an Object with a for...in Statement',
          ],
          [
            '587d7b7d367417b2b2512b1e',
            'Generate an Array of All Object Keys with Object.keys()',
          ],
          ['587d7b7d367417b2b2512b1f', 'Modify an Array Stored in an Object'],
        ],
      },
      {
        name: 'Basic Algorithm Scripting',
        isUpcomingChange: false,
        dashedName: 'basic-algorithm-scripting',
        helpCategory: 'JavaScript',
        description:
          "An algorithm is a series of step-by-step instructions that describe how to do something.\nTo write an effective algorithm, it helps to break a problem down into smaller parts and think carefully about how to solve each part with code.\nIn this course, you'll learn the fundamentals of algorithmic thinking by writing algorithms that do everything from converting temperatures to handling complex 2D arrays.",
        order: 5,
        time: '50 hours',
        template: '',
        required: [],
        superBlock: '02-javascript-algorithms-and-data-structures',
        challengeOrder: [
          ['56533eb9ac21ba0edf2244b3', 'Convert Celsius to Fahrenheit'],
          ['a202eed8fc186c8434cb6d61', 'Reverse a String'],
          ['a302f7aae1aa3152a5b413bc', 'Factorialize a Number'],
          ['a26cbbe9ad8655a977e1ceb5', 'Find the Longest Word in a String'],
          ['a789b3483989747d63b0e427', 'Return Largest Numbers in Arrays'],
          ['acda2fb1324d9b0fa741e6b5', 'Confirm the Ending'],
          ['afcc8d540bea9ea2669306b6', 'Repeat a String Repeat a String'],
          ['ac6993d51946422351508a41', 'Truncate a String'],
          ['a6e40f1041b06c996f7b2406', 'Finders Keepers'],
          ['a77dbc43c33f39daa4429b4f', 'Boo who'],
          ['ab6137d4e35944e21037b769', 'Title Case a Sentence'],
          ['579e2a2c335b9d72dd32e05c', 'Slice and Splice'],
          ['adf08ec01beb4f99fc7a68f2', 'Falsy Bouncer'],
          ['a24c1a4622e3c05097f71d67', 'Where do I Belong'],
          ['af2170cad53daa0770fabdea', 'Mutations'],
          ['a9bd25c716030ec90084d8a1', 'Chunky Monkey'],
        ],
      },
      {
        name: 'Object Oriented Programming',
        isUpcomingChange: false,
        dashedName: 'object-oriented-programming',
        helpCategory: 'JavaScript',
        description:
          "OOP, or Object Oriented Programming, is one of the major approaches to the software development process. In OOP, objects and classes organize code to describe things and what they can do.\nIn this course, you'll learn the basic principles of OOP in JavaScript, including the this keyword, prototype chains, constructors, and inheritance.",
        order: 6,
        time: '5 hours',
        template: '',
        required: [],
        superBlock: '02-javascript-algorithms-and-data-structures',
        challengeOrder: [
          ['587d7dac367417b2b2512b73', 'Create a Basic JavaScript Object'],
          [
            '587d7dac367417b2b2512b74',
            'Use Dot Notation to Access the Properties of an Object',
          ],
          ['587d7dad367417b2b2512b75', 'Create a Method on an Object'],
          [
            '587d7dad367417b2b2512b76',
            'Make Code More Reusable with the this Keyword',
          ],
          ['587d7dad367417b2b2512b77', 'Define a Constructor Function'],
          ['587d7dad367417b2b2512b78', 'Use a Constructor to Create Objects'],
          [
            '587d7dae367417b2b2512b79',
            'Extend Constructors to Receive Arguments',
          ],
          [
            '587d7dae367417b2b2512b7a',
            "Verify an Object's Constructor with instanceof",
          ],
          ['587d7dae367417b2b2512b7b', 'Understand Own Properties'],
          [
            '587d7dae367417b2b2512b7c',
            'Use Prototype Properties to Reduce Duplicate Code',
          ],
          ['587d7daf367417b2b2512b7d', 'Iterate Over All Properties'],
          ['587d7daf367417b2b2512b7e', 'Understand the Constructor Property'],
          ['587d7daf367417b2b2512b7f', 'Change the Prototype to a New Object'],
          [
            '587d7daf367417b2b2512b80',
            'Remember to Set the Constructor Property when Changing the Prototype',
          ],
          [
            '587d7db0367417b2b2512b81',
            'Understand Where an Object’s Prototype Comes From',
          ],
          ['587d7db0367417b2b2512b82', 'Understand the Prototype Chain'],
          [
            '587d7db0367417b2b2512b83',
            "Use Inheritance So You Don't Repeat Yourself",
          ],
          ['587d7db0367417b2b2512b84', 'Inherit Behaviors from a Supertype'],
          [
            '587d7db1367417b2b2512b85',
            "Set the Child's Prototype to an Instance of the Parent",
          ],
          [
            '587d7db1367417b2b2512b86',
            'Reset an Inherited Constructor Property',
          ],
          ['587d7db1367417b2b2512b87', 'Add Methods After Inheritance'],
          ['587d7db1367417b2b2512b88', 'Override Inherited Methods'],
          [
            '587d7db2367417b2b2512b89',
            'Use a Mixin to Add Common Behavior Between Unrelated Objects',
          ],
          [
            '587d7db2367417b2b2512b8a',
            'Use Closure to Protect Properties Within an Object from Being Modified Externally',
          ],
          [
            '587d7db2367417b2b2512b8b',
            'Understand the Immediately Invoked Function Expression (IIFE)',
          ],
          ['587d7db2367417b2b2512b8c', 'Use an IIFE to Create a Module'],
        ],
      },
      {
        name: 'Functional Programming',
        isUpcomingChange: false,
        dashedName: 'functional-programming',
        helpCategory: 'JavaScript',
        description:
          "Functional Programming is another popular approach to software development. In Functional Programming, code is organized into smaller, basic functions that can be combined to build complex programs.\nIn this course, you'll learn the core concepts of Functional Programming including pure functions, how to avoid mutations, and how to write cleaner code with methods like .map() and .filter().",
        order: 7,
        time: '5 hours',
        template: '',
        required: [],
        superBlock: '02-javascript-algorithms-and-data-structures',
        challengeOrder: [
          ['587d7b8d367417b2b2512b5b', 'Learn About Functional Programming'],
          [
            '587d7b8e367417b2b2512b5c',
            'Understand Functional Programming Terminology',
          ],
          [
            '587d7b8e367417b2b2512b5d',
            'Understand the Hazards of Using Imperative Code',
          ],
          [
            '587d7b8e367417b2b2512b5e',
            'Avoid Mutations and Side Effects Using Functional Programming',
          ],
          [
            '587d7b8e367417b2b2512b5f',
            'Pass Arguments to Avoid External Dependence in a Function',
          ],
          [
            '587d7b8f367417b2b2512b60',
            'Refactor Global Variables Out of Functions',
          ],
          [
            '587d7b8f367417b2b2512b61',
            'Use the map Method to Extract Data from an Array',
          ],
          ['587d7b8f367417b2b2512b62', 'Implement map on a Prototype'],
          [
            '587d7b8f367417b2b2512b63',
            'Use the filter Method to Extract Data from an Array',
          ],
          [
            '587d7b8f367417b2b2512b64',
            'Implement the filter Method on a Prototype',
          ],
          [
            '587d7b90367417b2b2512b65',
            'Return Part of an Array Using the slice Method',
          ],
          [
            '9d7123c8c441eeafaeb5bdef',
            'Remove Elements from an Array Using slice Instead of splice',
          ],
          [
            '587d7da9367417b2b2512b66',
            'Combine Two Arrays Using the concat Method',
          ],
          [
            '587d7da9367417b2b2512b67',
            'Add Elements to the End of an Array Using concat Instead of push',
          ],
          ['587d7da9367417b2b2512b68', 'Use the reduce Method to Analyze Data'],
          [
            '587d7b88367417b2b2512b45',
            'Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem',
          ],
          [
            '587d7da9367417b2b2512b69',
            'Sort an Array Alphabetically using the sort Method',
          ],
          [
            '587d7da9367417b2b2512b6a',
            'Return a Sorted Array Without Changing the Original Array',
          ],
          [
            '587d7daa367417b2b2512b6b',
            'Split a String into an Array Using the split Method',
          ],
          [
            '587d7daa367417b2b2512b6c',
            'Combine an Array into a String Using the join Method',
          ],
          [
            '587d7dab367417b2b2512b6d',
            'Apply Functional Programming to Convert Strings to URL Slugs',
          ],
          [
            '587d7dab367417b2b2512b6e',
            'Use the every Method to Check that Every Element in an Array Meets a Criteria',
          ],
          [
            '587d7dab367417b2b2512b6f',
            'Use the some Method to Check that Any Elements in an Array Meet a Criteria',
          ],
          [
            '587d7dab367417b2b2512b70',
            'Introduction to Currying and Partial Application',
          ],
        ],
      },
      {
        name: 'Intermediate Algorithm Scripting',
        isUpcomingChange: false,
        dashedName: 'intermediate-algorithm-scripting',
        helpCategory: 'JavaScript',
        description:
          'Now that you know the basics of algorithmic thinking, along with OOP and Functional Programming, test your skills with the Intermediate Algorithm Scripting challenges.',
        order: 8,
        time: '50 hours',
        template: '',
        required: [],
        superBlock: '02-javascript-algorithms-and-data-structures',
        challengeOrder: [
          ['a3566b1109230028080c9345', 'Sum All Numbers in a Range'],
          ['a5de63ebea8dbee56860f4f2', 'Diff Two Arrays'],
          ['a39963a4c10bc8b4d4f06d7e', 'Seek and Destroy'],
          ['a8e512fbe388ac2f9198f0fa', 'Wherefore art thou'],
          ['a103376db3ba46b2d50db289', 'Spinal Tap Case'],
          ['aa7697ea2477d1316795783b', 'Pig Latin'],
          ['a0b5010f579e69b815e7c5d6', 'Search and Replace'],
          ['afd15382cdfb22c9efe8b7de', 'DNA Pairing'],
          ['af7588ade1100bde429baf20', 'Missing letters'],
          ['a105e963526e7de52b219be9', 'Sorted Union'],
          ['a6b0bb188d873cb2c8729495', 'Convert HTML Entities'],
          ['a5229172f011153519423690', 'Sum All Odd Fibonacci Numbers'],
          ['a3bfc1673c0526e06d3ac698', 'Sum All Primes'],
          ['ae9defd7acaf69703ab432ea', 'Smallest Common Multiple'],
          ['a5deed1811a43193f9f1c841', 'Drop it'],
          ['ab306dbdcc907c7ddfc30830', 'Steamroller'],
          ['a8d97bd4c764e91f9d2bda01', 'Binary Agents'],
          ['a10d2431ad0c6a099a4b8b52', 'Everything Be True'],
          ['a97fd23d9b809dac9921074f', 'Arguments Optional'],
          ['a2f1d72d9b908d0bd72bb9f6', 'Make a Person'],
          ['af4afb223120f7348cdfc9fd', 'Map the Debris'],
        ],
      },
      {
        name: 'JavaScript Algorithms and Data Structures Projects',
        isUpcomingChange: false,
        dashedName: 'javascript-algorithms-and-data-structures-projects',
        helpCategory: 'JavaScript',
        description:
          "This is it — time to put your new JavaScript skills to work. These projects are similar to the algorithm scripting challenges you've done before – just much more difficult.\nComplete these 5 JavaScript projects to earn the JavaScript Algorithms and Data Structures certification.",
        order: 9,
        time: '50 hours',
        template: '',
        required: [],
        superBlock: '02-javascript-algorithms-and-data-structures',
        challengeOrder: [
          ['aaa48de84e1ecc7c742e1124', 'Palindrome Checker'],
          ['a7f4d8f2483413a6ce226cac', 'Roman Numeral Converter'],
          ['56533eb9ac21ba0edf2244e2', 'Caesars Cipher'],
          ['aff0395860f5d3034dc0bfc9', 'Telephone Number Validator'],
          ['aa2e6f85cab2ab736c9a9b24', 'Cash Register'],
        ],
      },
    ],
  },
  {
    url: 'front-end-development-libraries',
    label: 'Front End Development Libraries',
    description:
      "Now that you're familiar with HTML, CSS, and JavaScript, level up your skills by learning some of the most popular front end libraries in the industry.\nIn the Front End Development Libraries Certification, you'll learn how to style your site quickly with Bootstrap. You'll also learn how to add logic to your CSS styles and extend them with Sass.\nLater, you'll build a shopping cart and other applications to learn how to create powerful Single Page Applications (SPAs) with React and Redux.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={IconSize}
        height={IconSize}
        viewBox="0 0 32 32"
      >
        <path
          fill={IconColor}
          d="M15.902 11.974a2.41 2.41 0 1 1-4.82 0a2.41 2.41 0 0 1 4.82 0z"
        ></path>
        <path
          fill={IconColor}
          d="M13.491 17.494a27.278 27.278 0 0 1-8.749-1.206l.193.051a10.886 10.886 0 0 1-3.541-1.903l.021.016a3.414 3.414 0 0 1-1.41-2.467l-.001-.013c0-1.594 1.747-3.154 4.681-4.172c2.512-.827 5.403-1.304 8.405-1.304l.417.003h-.021a27.489 27.489 0 0 1 8.885 1.334l-.195-.055a11.058 11.058 0 0 1 3.433 1.814l-.024-.018a3.274 3.274 0 0 1 1.386 2.387l.001.013c0 1.656-1.954 3.332-5.103 4.374c-2.363.729-5.08 1.149-7.895 1.149c-.17 0-.339-.002-.508-.005h.025zm0-9.84c-.106-.002-.232-.002-.358-.002c-2.881 0-5.656.452-8.259 1.289l.191-.053c-2.698.941-3.908 2.228-3.908 3.087c0 .893 1.301 2.3 4.153 3.274c2.249.697 4.834 1.099 7.513 1.099c.235 0 .469-.003.702-.009l-.034.001a26.452 26.452 0 0 0 8.205-1.138l-.187.049c2.96-.984 4.32-2.391 4.32-3.28a2.247 2.247 0 0 0-.966-1.515l-.008-.005a9.806 9.806 0 0 0-2.97-1.574l-.07-.02c-2.368-.766-5.093-1.208-7.92-1.208c-.142 0-.283.001-.424.003h.021z"
        ></path>
        <path
          fill={IconColor}
          d="m8.023 23.986l-.053.001c-.453 0-.878-.119-1.245-.327l.013.007c-1.378-.8-1.858-3.092-1.28-6.141c.697-3.128 1.827-5.894 3.344-8.4l-.069.124a27.856 27.856 0 0 1 5.425-6.872l.02-.018A10.943 10.943 0 0 1 17.365.332l.073-.027c.407-.196.885-.31 1.39-.31c.501 0 .976.113 1.4.314l-.02-.008c1.435.826 1.911 3.36 1.238 6.606c-.72 2.967-1.818 5.58-3.262 7.959l.07-.123c-1.452 2.63-3.209 4.882-5.266 6.819l-.014.013a10.872 10.872 0 0 1-3.321 2.082l-.074.026c-.46.181-.992.292-1.549.305h-.006zM9.228 9.539l.499.288c-1.381 2.28-2.465 4.926-3.106 7.74l-.034.18c-.533 2.809-.019 4.498.72 4.926c.191.102.417.161.657.161l.061-.001h-.003c.955 0 2.458-.605 4.196-2.122a26.398 26.398 0 0 0 4.972-6.404l.068-.135a26.071 26.071 0 0 0 3.025-7.307l.038-.182c.629-3.058.086-4.93-.686-5.378a2.246 2.246 0 0 0-1.814.092l.013-.006a9.858 9.858 0 0 0-2.907 1.846l.007-.006a26.608 26.608 0 0 0-5.136 6.468l-.069.132z"
        ></path>
        <path
          fill={IconColor}
          d="M18.96 24c-1.306 0-2.96-.787-4.69-2.276a27.794 27.794 0 0 1-5.464-6.834l-.072-.137c-1.43-2.349-2.551-5.075-3.215-7.975l-.036-.185a10.75 10.75 0 0 1-.255-2.357c0-.527.037-1.044.108-1.551l-.007.058A3.271 3.271 0 0 1 6.701.344l.01-.007c1.43-.83 3.865.024 6.342 2.228a27.865 27.865 0 0 1 5.118 6.54l.072.138a26.769 26.769 0 0 1 3.242 7.798l.038.186c.163.709.257 1.524.257 2.36c0 .577-.044 1.143-.13 1.696l.008-.062a3.419 3.419 0 0 1-1.429 2.456l-.011.007a2.435 2.435 0 0 1-1.207.316l-.054-.001h.003zm-9.228-9.823a27.066 27.066 0 0 0 5.271 6.656l.02.018c2.166 1.863 3.884 2.266 4.628 1.834c.773-.446 1.339-2.276.754-5.233c-.702-2.89-1.787-5.434-3.219-7.741l.065.112a26.77 26.77 0 0 0-4.948-6.384l-.012-.011C9.957 1.354 8.066.888 7.293 1.334a2.234 2.234 0 0 0-.825 1.593v.007a9.854 9.854 0 0 0 .162 3.499l-.013-.066c.673 2.952 1.747 5.559 3.182 7.924l-.066-.117z"
        ></path>
      </svg>
    ),
    bigIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 32 32"
      >
        <path
          fill={IconColor}
          d="M20 5H4v11h16V5zm-4.53 10.03l-2.09-2.09c-1.35.87-3.17.71-4.36-.47c-1.37-1.37-1.37-3.58 0-4.95s3.58-1.37 4.95 0c1.18 1.18 1.34 3 .47 4.36l2.09 2.09l-1.06 1.06z"
          opacity=".3"
        ></path>
        <path
          fill={IconColor}
          d="M4 18h16c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2zM4 5h16v11H4V5zM1 19h22v2H1z"
        ></path>
        <path
          fill={IconColor}
          d="M13.97 7.53c-1.37-1.37-3.58-1.37-4.95 0s-1.37 3.58 0 4.95c1.18 1.18 3 1.34 4.36.47l2.09 2.09l1.06-1.06l-2.09-2.09c.87-1.36.72-3.18-.47-4.36zm-1.06 3.88c-.78.78-2.05.78-2.83 0c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0c.78.79.78 2.05 0 2.83z"
        ></path>
      </svg>
    ),
    topics: [
      {
        name: 'Bootstrap',
        isUpcomingChange: false,
        dashedName: 'bootstrap',
        description:
          "Bootstrap is a front end framework used to design responsive web pages and applications. It takes a mobile-first approach to web development, and includes pre-built CSS styles and classes, plus some JavaScript functionality.\nIn this course, you'll learn how to build responsive websites with Bootstrap, and use its included classes to style buttons, images, forms, navigation, and other common elements.",
        helpCategory: 'HTML-CSS',
        order: 0,
        time: '5 hours',
        template: '',
        required: [
          {
            link: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css',
          },
        ],
        superBlock: '03-front-end-development-libraries',
        challengeOrder: [
          [
            'bad87fee1348bd9acde08712',
            'Use Responsive Design with Bootstrap Fluid Containers',
          ],
          ['bad87fee1348bd9acde08812', 'Make Images Mobile Responsive'],
          ['bad87fee1348bd8acde08812', 'Center Text with Bootstrap'],
          ['bad87fee1348cd8acdf08812', 'Create a Bootstrap Button'],
          [
            'bad87fee1348cd8acef08812',
            'Create a Block Element Bootstrap Button',
          ],
          [
            'bad87fee1348cd8acef08811',
            'Taste the Bootstrap Button Color Rainbow',
          ],
          [
            'bad87fee1348cd8acef08813',
            'Call out Optional Actions with btn-info',
          ],
          [
            'bad87fee1348ce8acef08814',
            'Warn Your Users of a Dangerous Action with btn-danger',
          ],
          [
            'bad88fee1348ce8acef08815',
            'Use the Bootstrap Grid to Put Elements Side By Side',
          ],
          ['bad87fee1347bd9aedf08845', 'Ditch Custom CSS for Bootstrap'],
          ['bad87fee1348bd9aedf08845', 'Use a span to Target Inline Elements'],
          ['bad87fee1348bd9aede08845', 'Create a Custom Heading'],
          ['bad87fee1348bd9aedd08845', 'Add Font Awesome Icons to our Buttons'],
          [
            'bad87fee1348bd9aedc08845',
            'Add Font Awesome Icons to all of our Buttons',
          ],
          ['bad87fee1348bd9aedb08845', 'Responsively Style Radio Buttons'],
          ['bad87fee1348bd9aeda08845', 'Responsively Style Checkboxes'],
          ['bad87fee1348bd9aed908845', 'Style Text Inputs as Form Controls'],
          [
            'bad87fee1348bd9aec908845',
            'Line up Form Elements Responsively with Bootstrap',
          ],
          ['bad87fee1348bd9aec908846', 'Create a Bootstrap Headline'],
          [
            'bad87fee1348bd9aec908746',
            'House our page within a Bootstrap container-fluid div',
          ],
          ['bad87fee1348bd9bec908846', 'Create a Bootstrap Row'],
          ['bad87fee1348bd9aec908847', 'Split Your Bootstrap Row'],
          ['bad87fee1348bd9aec908848', 'Create Bootstrap Wells'],
          [
            'bad87fee1348bd9aec908849',
            'Add Elements within Your Bootstrap Wells',
          ],
          [
            'bad87fee1348bd9aec908850',
            'Apply the Default Bootstrap Button Style',
          ],
          [
            'bad87fee1348bd9aec908852',
            'Create a Class to Target with jQuery Selectors',
          ],
          [
            'bad87fee1348bd9aec908853',
            'Add id Attributes to Bootstrap Elements',
          ],
          ['bad87fee1348bd9aec908854', 'Label Bootstrap Wells'],
          ['bad87fee1348bd9aec908855', 'Give Each Element a Unique id'],
          ['bad87fee1348bd9aec908856', 'Label Bootstrap Buttons'],
          ['bad87fee1348bd9aec908857', 'Use Comments to Clarify Code'],
        ],
      },
      {
        name: 'jQuery',
        isUpcomingChange: false,
        dashedName: 'jquery',
        description:
          "jQuery is one of the most widely used JavaScript libraries in the world.\nIn 2006 when it was released, all major browsers handled JavaScript slightly differently. jQuery simplified the process of writing client-side JavaScript, and also ensured that your code worked the same way in all browsers.\nIn this course, you'll learn how to use jQuery to select, remove, clone, and modify different elements on the page.",
        helpCategory: 'JavaScript',
        order: 1,
        time: '3 hours',
        template: '',
        required: [
          {
            link: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css',
          },
          {
            src: 'https://code.jquery.com/jquery-3.6.0.min.js',
          },
        ],
        superBlock: '03-front-end-development-libraries',
        challengeOrder: [
          [
            'bad87fee1348bd9acdd08826',
            'Learn How Script Tags and Document Ready Work',
          ],
          [
            'bad87fee1348bd9bedc08826',
            'Target HTML Elements with Selectors Using jQuery',
          ],
          ['bad87fee1348bd9aedc08826', 'Target Elements by Class Using jQuery'],
          ['bad87fee1348bd9aeda08826', 'Target Elements by id Using jQuery'],
          ['bad87fee1348bd9aeda08726', 'Delete Your jQuery Functions'],
          [
            'bad87fee1348bd9aed908626',
            'Target the Same Element with Multiple jQuery Selectors',
          ],
          [
            'bad87fee1348bd9aed918626',
            'Remove Classes from an Element with jQuery',
          ],
          [
            'bad87fee1348bd9aed908826',
            'Change the CSS of an Element Using jQuery',
          ],
          ['bad87fee1348bd9aed808826', 'Disable an Element Using jQuery'],
          [
            '564944c91be2204b269d51e3',
            'Change Text Inside an Element Using jQuery',
          ],
          ['bad87fee1348bd9aed708826', 'Remove an Element Using jQuery'],
          [
            'bad87fee1348bd9aed608826',
            'Use appendTo to Move Elements with jQuery',
          ],
          ['bad87fee1348bd9aed508826', 'Clone an Element Using jQuery'],
          [
            'bad87fee1348bd9aed308826',
            'Target the Parent of an Element Using jQuery',
          ],
          [
            'bad87fee1348bd9aed208826',
            'Target the Children of an Element Using jQuery',
          ],
          [
            'bad87fee1348bd9aed108826',
            'Target a Specific Child of an Element Using jQuery',
          ],
          ['bad87fee1348bd9aed008826', 'Target Even Elements Using jQuery'],
          ['bad87fee1348bd9aecb08826', 'Use jQuery to Modify the Entire Page'],
        ],
      },
      {
        name: 'Sass',
        isUpcomingChange: false,
        dashedName: 'sass',
        description: `Sass, or "Syntactically Awesome StyleSheets", is a language extension of CSS. It adds features that aren't available in basic CSS, which make it easier for you to simplify and maintain the style sheets for your projects.\nIn this Sass course, you'll learn how to store data in variables, nest CSS, create reusable styles with mixins, add logic and loops to your styles, and more.`,
        helpCategory: 'HTML-CSS',
        order: 2,
        time: '5 hours',
        template: '',
        required: [],
        superBlock: '03-front-end-development-libraries',
        challengeOrder: [
          ['587d7dbd367417b2b2512bb4', 'Store Data with Sass Variables'],
          ['587d7dbd367417b2b2512bb5', 'Nest CSS with Sass'],
          ['587d7dbd367417b2b2512bb6', 'Create Reusable CSS with Mixins'],
          [
            '587d7dbe367417b2b2512bb8',
            'Use @if and @else to Add Logic To Your Styles',
          ],
          ['587d7dbe367417b2b2512bb9', 'Use @for to Create a Sass Loop'],
          ['587d7dbf367417b2b2512bba', 'Use @each to Map Over Items in a List'],
          [
            '587d7dbf367417b2b2512bbb',
            'Apply a Style Until a Condition is Met with @while',
          ],
          [
            '587d7dbf367417b2b2512bbc',
            'Split Your Styles into Smaller Chunks with Partials',
          ],
          [
            '587d7fa5367417b2b2512bbd',
            'Extend One Set of CSS Styles to Another Element',
          ],
        ],
      },
      {
        name: 'React',
        isUpcomingChange: false,
        dashedName: 'react',
        description:
          "React is a popular JavaScript library for building reusable, component-driven user interfaces for web pages or applications.\nReact combines HTML with JavaScript functionality into its own markup language called JSX. React also makes it easy to manage the flow of data throughout the application.\nIn this course, you'll learn how to create different React components, manage data in the form of state props, use different lifecycle methods like componentDidMount, and much more.",
        helpCategory: 'JavaScript',
        order: 3,
        time: '5 hours',
        template:
          "<body><div id='root'></div><div id='challenge-node'></div>${ source || '' }</body>",
        required: [
          {
            src: 'https://unpkg.com/react@16.4.0/umd/react.production.min.js',
          },
          {
            src: 'https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js',
          },
        ],
        superBlock: '03-front-end-development-libraries',
        challengeOrder: [
          ['587d7dbc367417b2b2512bb1', 'Create a Simple JSX Element'],
          ['5a24bbe0dba28a8d3cbd4c5d', 'Create a Complex JSX Element'],
          ['5a24bbe0dba28a8d3cbd4c5e', 'Add Comments in JSX'],
          ['5a24bbe0dba28a8d3cbd4c5f', 'Render HTML Elements to the DOM'],
          ['5a24c314108439a4d4036160', 'Define an HTML Class in JSX'],
          ['5a24c314108439a4d4036161', 'Learn About Self-Closing JSX Tags'],
          [
            '5a24c314108439a4d4036162',
            'Create a Stateless Functional Component',
          ],
          ['5a24c314108439a4d4036163', 'Create a React Component'],
          ['5a24c314108439a4d4036164', 'Create a Component with Composition'],
          ['5a24c314108439a4d4036165', 'Use React to Render Nested Components'],
          ['5a24c314108439a4d4036166', 'Compose React Components'],
          ['5a24c314108439a4d4036167', 'Render a Class Component to the DOM'],
          ['5a24c314108439a4d4036168', 'Write a React Component from Scratch'],
          [
            '5a24c314108439a4d4036169',
            'Pass Props to a Stateless Functional Component',
          ],
          ['5a24c314108439a4d403616a', 'Pass an Array as Props'],
          ['5a24c314108439a4d403616b', 'Use Default Props'],
          ['5a24c314108439a4d403616c', 'Override Default Props'],
          [
            '5a24c314108439a4d403616d',
            'Use PropTypes to Define the Props You Expect',
          ],
          ['5a24c314108439a4d403616e', 'Access Props Using this.props'],
          [
            '5a24c314108439a4d403616f',
            'Review Using Props with Stateless Functional Components',
          ],
          ['5a24c314108439a4d4036170', 'Create a Stateful Component'],
          ['5a24c314108439a4d4036171', 'Render State in the User Interface'],
          [
            '5a24c314108439a4d4036172',
            'Render State in the User Interface Another Way',
          ],
          ['5a24c314108439a4d4036173', 'Set State with this.setState'],
          ['5a24c314108439a4d4036174', "Bind 'this' to a Class Method"],
          ['5a24c314108439a4d4036176', 'Use State to Toggle an Element'],
          ['5a24c314108439a4d4036177', 'Write a Simple Counter'],
          ['5a24c314108439a4d4036178', 'Create a Controlled Input'],
          ['5a24c314108439a4d4036179', 'Create a Controlled Form'],
          [
            '5a24c314108439a4d403617a',
            'Pass State as Props to Child Components',
          ],
          ['5a24c314108439a4d403617b', 'Pass a Callback as Props'],
          [
            '5a24c314108439a4d403617c',
            'Use the Lifecycle Method componentWillMount',
          ],
          [
            '5a24c314108439a4d403617d',
            'Use the Lifecycle Method componentDidMount',
          ],
          ['5a24c314108439a4d403617e', 'Add Event Listeners'],
          [
            '5a24c314108439a4d4036180',
            'Optimize Re-Renders with shouldComponentUpdate',
          ],
          ['5a24c314108439a4d4036181', 'Introducing Inline Styles'],
          ['5a24c314108439a4d4036182', 'Add Inline Styles in React'],
          [
            '5a24c314108439a4d4036183',
            'Use Advanced JavaScript in React Render Method',
          ],
          ['5a24c314108439a4d4036184', 'Render with an If-Else Condition'],
          ['5a24c314108439a4d4036185', 'Use && for a More Concise Conditional'],
          [
            '5a24c314108439a4d4036187',
            'Use a Ternary Expression for Conditional Rendering',
          ],
          ['5a24c314108439a4d4036188', 'Render Conditionally from Props'],
          [
            '5a24c314108439a4d4036189',
            'Change Inline CSS Conditionally Based on Component State',
          ],
          [
            '5a24c314108439a4d403618a',
            'Use Array.map() to Dynamically Render Elements',
          ],
          [
            '5a24c314108439a4d403618b',
            'Give Sibling Elements a Unique Key Attribute',
          ],
          [
            '5a24c314108439a4d403618c',
            'Use Array.filter() to Dynamically Filter an Array',
          ],
          [
            '5a24c314108439a4d403618d',
            'Render React on the Server with renderToString',
          ],
        ],
      },
      {
        name: 'Redux',
        isUpcomingChange: false,
        dashedName: 'redux',
        helpCategory: 'JavaScript',
        description: `As applications grow in size and scope, managing shared data becomes much more difficult. Redux is defined as a "predictable state container for JavaScript apps" that helps ensure your apps work predictably, and are easier to test.\nWhile you can use Redux with any view library, we introduce Redux here before combining it with React in the next set of courses.\nIn this course, you'll learn the fundamentals of Redux stores, actions, reducers and middleware to manage data throughout your application.`,
        order: 4,
        time: '5 hours',
        template: '',
        required: [
          {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.min.js',
          },
          {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/redux-thunk/2.2.0/redux-thunk.min.js',
          },
        ],
        superBlock: 'front-end-development-libraries',
        challengeOrder: [
          ['5a24c314108439a4d403614b', 'Create a Redux Store'],
          ['5a24c314108439a4d403614c', 'Get State from the Redux Store'],
          ['5a24c314108439a4d403614d', 'Define a Redux Action'],
          ['5a24c314108439a4d403614e', 'Define an Action Creator'],
          ['5a24c314108439a4d403614f', 'Dispatch an Action Event'],
          ['5a24c314108439a4d4036150', 'Handle an Action in the Store'],
          [
            '5a24c314108439a4d4036151',
            'Use a Switch Statement to Handle Multiple Actions',
          ],
          ['5a24c314108439a4d4036152', 'Use const for Action Types'],
          ['5a24c314108439a4d4036153', 'Register a Store Listener'],
          ['5a24c314108439a4d4036154', 'Combine Multiple Reducers'],
          ['5a24c314108439a4d4036155', 'Send Action Data to the Store'],
          [
            '5a24c314108439a4d4036156',
            'Use Middleware to Handle Asynchronous Actions',
          ],
          ['5a24c314108439a4d4036157', 'Write a Counter with Redux'],
          ['5a24c314108439a4d4036158', 'Never Mutate State'],
          ['5a24c314108439a4d4036159', 'Use the Spread Operator on Arrays'],
          ['5a24c314108439a4d403615a', 'Remove an Item from an Array'],
          ['5a24c314108439a4d403615b', 'Copy an Object with Object.assign'],
        ],
      },
      {
        name: 'React and Redux',
        isUpcomingChange: false,
        dashedName: 'react-and-redux',
        helpCategory: 'JavaScript',
        description:
          "React and Redux are often mentioned together, and with good reason. The developer who created Redux was a React developer who wanted to make it easier to share data across different components.\nNow that you know how to manage the flow of shared data with Redux, it's time to combine that knowledge with React. In the React and Redux courses, you'll build a React component and learn how to manage state locally at the component level, and throughout the entire application with Redux.",
        order: 5,
        time: '5 hours',
        template: "<body><div id='root'></div>${ source || '' }</body>",
        required: [
          {
            src: 'https://unpkg.com/react@16.4.0/umd/react.production.min.js',
          },
          {
            src: 'https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js',
          },
          {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.min.js',
          },
          {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.7/react-redux.min.js',
          },
        ],
        superBlock: '03-front-end-development-libraries',
        challengeOrder: [
          ['5a24c314108439a4d4036141', 'Getting Started with React Redux'],
          ['5a24c314108439a4d4036142', 'Manage State Locally First'],
          ['5a24c314108439a4d4036143', 'Extract State Logic to Redux'],
          [
            '5a24c314108439a4d4036144',
            'Use Provider to Connect Redux to React',
          ],
          ['5a24c314108439a4d4036145', 'Map State to Props'],
          ['5a24c314108439a4d4036146', 'Map Dispatch to Props'],
          ['5a24c314108439a4d4036147', 'Connect Redux to React'],
          ['5a24c314108439a4d4036148', 'Connect Redux to the Messages App'],
          ['5a24c314108439a4d4036149', 'Extract Local State into Redux'],
          ['5a24c314108439a4d403614a', 'Moving Forward From Here'],
        ],
      },
      {
        name: 'Front End Development Libraries Projects',
        isUpcomingChange: false,
        dashedName: 'front-end-development-libraries-projects',
        helpCategory: 'JavaScript',
        order: 6,
        time: '150 hours',
        template: '',
        required: [],
        superBlock: '03-front-end-development-libraries',
        challengeOrder: [
          ['bd7158d8c442eddfaeb5bd13', 'Build a Random Quote Machine'],
          ['bd7157d8c242eddfaeb5bd13', 'Build a Markdown Previewer'],
          ['587d7dbc367417b2b2512bae', 'Build a Drum Machine'],
          ['bd7158d8c442eddfaeb5bd17', 'Build a JavaScript Calculator'],
          ['bd7158d8c442eddfaeb5bd0f', 'Build a 25 + 5 Clock'],
        ],
      },
    ],
  },
];
