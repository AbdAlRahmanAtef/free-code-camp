const iconColor = '#0a0a23';
const iconSize = '60';

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
    url: 'responsive-web-design',
    label: 'Responsive Web Design',
    description:
      "In this Responsive Web Design Certification, you'll learn the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.\nFirst, you'll build a cat photo app to learn the basics of HTML and CSS. Later, you'll learn modern techniques like CSS variables by building a penguin, and best practices for accessibility by building a web form.\nFinally, you'll learn how to make webpages that respond to different screen sizes by building a Twitter card with Flexbox, and a complex blog layout with CSS Grid.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
      >
        <path
          fill={iconColor}
          d="M22 17h-4v-7h4m1-2h-6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M4 6h18V4H4a2 2 0 0 0-2 2v11H0v3h14v-3H4V6Z"
        />
      </svg>
    ),
    bigIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
      >
        <path
          fill={iconColor}
          d="M22 17h-4v-7h4m1-2h-6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M4 6h18V4H4a2 2 0 0 0-2 2v11H0v3h14v-3H4V6Z"
        />
      </svg>
    ),
    topics: [
      {
        name: 'Basic HTML and HTML5',
        isUpcomingChange: false,
        dashedName: 'basic-html-and-html5',
        helpCategory: 'HTML-CSS',
        order: 0,
        description:
          "HTML is a markup language that uses a special syntax or notation to describe the structure of a webpage to the browser. HTML elements usually have opening and closing tags that surround and give meaning to content. For example, different elements can describe text as a heading, paragraph, or list item.\nIn this course, you'll build a cat photo app to learn some of the most common HTML elements — the building blocks of any webpage.",
        time: '5 hours',
        template: '',
        required: [],
        superBlock: '01-responsive-web-design',
        challengeOrder: [
          ['bd7123c8c441eddfaeb5bdef', 'Say Hello to HTML Elements'],
          ['bad87fee1348bd9aedf0887a', 'Headline with the h2 Element'],
          ['bad87fee1348bd9aedf08801', 'Inform with the Paragraph Element'],
          [
            'bad87fee1348bd9aedf08833',
            'Fill in the Blank with Placeholder Text',
          ],
          ['bad87fee1348bd9aedf08802', 'Uncomment HTML'],
          ['bad87fee1348bd9aedf08804', 'Comment out HTML'],
          ['bad87fed1348bd9aedf08833', 'Delete HTML Elements'],
          ['bad87fee1348bd9aecf08801', 'Introduction to HTML5 Elements'],
          ['bad87fee1348bd9aedf08812', 'Add Images to Your Website'],
          [
            'bad87fee1348bd9aedf08816',
            'Link to External Pages with Anchor Elements',
          ],
          [
            'bad88fee1348bd9aedf08816',
            'Link to Internal Sections of a Page with Anchor Elements',
          ],
          [
            'bad87fee1348bd9aede08817',
            'Nest an Anchor Element within a Paragraph',
          ],
          ['bad87fee1348bd9aedf08817', 'Make Dead Links Using the Hash Symbol'],
          ['bad87fee1348bd9aedf08820', 'Turn an Image into a Link'],
          ['bad87fee1348bd9aedf08827', 'Create a Bulleted Unordered List'],
          ['bad87fee1348bd9aedf08828', 'Create an Ordered List'],
          ['bad87fee1348bd9aedf08829', 'Create a Text Field'],
          ['bad87fee1348bd9aedf08830', 'Add Placeholder Text to a Text Field'],
          ['bad87fee1348bd9aede08830', 'Create a Form Element'],
          ['bad87fee1348bd9aedd08830', 'Add a Submit Button to a Form'],
          ['bad87fee1348bd9aedc08830', 'Use HTML5 to Require a Field'],
          ['bad87fee1348bd9aedf08834', 'Create a Set of Radio Buttons'],
          ['bad87fee1348bd9aedf08835', 'Create a Set of Checkboxes'],
          [
            '5c6c06847491271903d37cfd',
            'Use the value attribute with Radio Buttons and Checkboxes',
          ],
          [
            'bad87fee1348bd9aedd08835',
            'Check Radio Buttons and Checkboxes by Default',
          ],
          [
            'bad87fee1348bd9aede08835',
            'Nest Many Elements within a Single div Element',
          ],
          [
            '587d78aa367417b2b2512aed',
            'Declare the Doctype of an HTML Document',
          ],
          [
            '587d78aa367417b2b2512aec',
            'Define the Head and Body of an HTML Document',
          ],
        ],
      },
      {
        name: 'Basic CSS',
        isUpcomingChange: false,
        dashedName: 'basic-css',
        helpCategory: 'HTML-CSS',
        description:
          "CSS, or Cascading Style Sheets, tell the browser how to display the text and other content that you write in HTML. With CSS, you can control the color, font, size, spacing, and many other aspects of HTML elements.\nNow that you've described the structure of your cat photo app, give it some style with CSS.",
        order: 1,
        time: '5 hours',
        template: '',
        required: [],
        superBlock: '01-responsive-web-design',
        challengeOrder: [
          ['bad87fee1348bd9aedf08803', 'Change the Color of Text'],
          ['bad87fee1348bd9aedf08805', 'Use CSS Selectors to Style Elements'],
          ['bad87fee1348bd9aecf08806', 'Use a CSS Class to Style an Element'],
          [
            'bad87fee1348bd9aefe08806',
            'Style Multiple Elements with a CSS Class',
          ],
          ['bad87fee1348bd9aedf08806', 'Change the Font Size of an Element'],
          ['bad87fee1348bd9aede08807', 'Set the Font Family of an Element'],
          ['bad87fee1348bd9aedf08807', 'Import a Google Font'],
          ['bad87fee1348bd9aedf08808', 'Specify How Fonts Should Degrade'],
          ['bad87fee1348bd9acdf08812', 'Size Your Images'],
          ['bad87fee1348bd9bedf08813', 'Add Borders Around Your Elements'],
          [
            'bad87fee1348bd9aedf08814',
            'Add Rounded Corners with border-radius',
          ],
          [
            'bad87fee1348bd9aedf08815',
            'Make Circular Images with a border-radius',
          ],
          [
            'bad87fed1348bd9aede07836',
            'Give a Background Color to a div Element',
          ],
          ['bad87eee1348bd9aede07836', 'Set the id of an Element'],
          [
            'bad87dee1348bd9aede07836',
            'Use an id Attribute to Style an Element',
          ],
          ['bad88fee1348bd9aedf08825', 'Adjust the Padding of an Element'],
          ['bad87fee1348bd9aedf08822', 'Adjust the Margin of an Element'],
          ['bad87fee1348bd9aedf08823', 'Add a Negative Margin to an Element'],
          [
            'bad87fee1348bd9aedf08824',
            'Add Different Padding to Each Side of an Element',
          ],
          [
            'bad87fee1248bd9aedf08824',
            'Add Different Margins to Each Side of an Element',
          ],
          [
            'bad87fee1348bd9aedf08826',
            'Use Clockwise Notation to Specify the Padding of an Element',
          ],
          [
            'bad87fee1348bd9afdf08726',
            'Use Clockwise Notation to Specify the Margin of an Element',
          ],
          [
            '58c383d33e2e3259241f3076',
            'Use Attribute Selectors to Style Elements',
          ],
          [
            'bad82fee1322bd9aedf08721',
            'Understand Absolute versus Relative Units',
          ],
          ['bad87fee1348bd9aedf08736', 'Style the HTML Body Element'],
          ['bad87fee1348bd9aedf08746', 'Inherit Styles from the Body Element'],
          ['bad87fee1348bd9aedf08756', 'Prioritize One Style Over Another'],
          ['bad87fee1348bd9aedf04756', 'Override Styles in Subsequent CSS'],
          [
            'bad87fee1348bd8aedf06756',
            'Override Class Declarations by Styling ID Attributes',
          ],
          [
            'bad87fee1348bd9aedf06756',
            'Override Class Declarations with Inline Styles',
          ],
          [
            'bad87fee1348bd9aedf07756',
            'Override All Other Styles by using Important',
          ],
          ['bad87fee1348bd9aedf08726', 'Use Hex Code for Specific Colors'],
          ['bad87fee1348bd9aedf08721', 'Use Hex Code to Mix Colors'],
          ['bad87fee1348bd9aedf08719', 'Use Abbreviated Hex Code'],
          ['bad87fee1348bd9aede08718', 'Use RGB values to Color Elements'],
          ['bad82fee1348bd9aedf08721', 'Use RGB to Mix Colors'],
          [
            '5a9d725e424fe3d0e10cad10',
            'Use CSS Variables to change several elements at once',
          ],
          ['5a9d726c424fe3d0e10cad11', 'Create a custom CSS Variable'],
          ['5a9d727a424fe3d0e10cad12', 'Use a custom CSS Variable'],
          [
            '5a9d7286424fe3d0e10cad13',
            'Attach a Fallback value to a CSS Variable',
          ],
          [
            '5b7d72c338cd7e35b63f3e14',
            'Improve Compatibility with Browser Fallbacks',
          ],
          ['5a9d7295424fe3d0e10cad14', 'Inherit CSS Variables'],
          ['5a9d72a1424fe3d0e10cad15', 'Change a variable for a specific area'],
          [
            '5a9d72ad424fe3d0e10cad16',
            'Use a media query to change a variable',
          ],
        ],
      },
      {
        name: 'Applied Visual Design',
        isUpcomingChange: false,
        dashedName: 'applied-visual-design',
        helpCategory: 'HTML-CSS',
        description:
          "Visual design is a combination of typography, color theory, graphics, animation, page layout, and more to help deliver your unique message.\nIn this course, you'll learn how to apply these different elements of visual design to your webpages.",
        order: 2,
        time: '5 hours',
        template: '',
        required: [],
        superBlock: '01-responsive-web-design',
        challengeOrder: [
          [
            '587d7791367417b2b2512ab3',
            'Create Visual Balance Using the text-align Property',
          ],
          [
            '587d7791367417b2b2512ab4',
            'Adjust the Width of an Element Using the width Property',
          ],
          [
            '587d7791367417b2b2512ab5',
            'Adjust the Height of an Element Using the height Property',
          ],
          ['587d781a367417b2b2512ab7', 'Use the strong Tag to Make Text Bold'],
          ['587d781a367417b2b2512ab8', 'Use the u Tag to Underline Text'],
          ['587d781a367417b2b2512ab9', 'Use the em Tag to Italicize Text'],
          ['587d781b367417b2b2512aba', 'Use the s Tag to Strikethrough Text'],
          [
            '587d781b367417b2b2512abb',
            'Create a Horizontal Line Using the hr Element',
          ],
          [
            '587d781b367417b2b2512abc',
            'Adjust the background-color Property of Text',
          ],
          [
            '587d781b367417b2b2512abd',
            'Adjust the Size of a Heading Element Versus a Paragraph Element',
          ],
          [
            '587d781b367417b2b2512abe',
            'Add a box-shadow to a Card-like Element',
          ],
          ['587d781c367417b2b2512abf', 'Decrease the Opacity of an Element'],
          [
            '587d781c367417b2b2512ac0',
            'Use the text-transform Property to Make Text Uppercase',
          ],
          [
            '587d781c367417b2b2512ac2',
            'Set the font-size for Multiple Heading Elements',
          ],
          [
            '587d781c367417b2b2512ac3',
            'Set the font-weight for Multiple Heading Elements',
          ],
          ['587d781c367417b2b2512ac4', 'Set the font-size of Paragraph Text'],
          ['587d781d367417b2b2512ac5', 'Set the line-height of Paragraphs'],
          [
            '587d781d367417b2b2512ac8',
            'Adjust the Hover State of an Anchor Tag',
          ],
          ['587d781e367417b2b2512ac9', "Change an Element's Relative Position"],
          [
            '587d781e367417b2b2512aca',
            'Move a Relatively Positioned Element with CSS Offsets',
          ],
          [
            '587d781e367417b2b2512acb',
            'Lock an Element to its Parent with Absolute Positioning',
          ],
          [
            '587d781e367417b2b2512acc',
            'Lock an Element to the Browser Window with Fixed Positioning',
          ],
          [
            '587d78a3367417b2b2512ace',
            'Push Elements Left or Right with the float Property',
          ],
          [
            '587d78a3367417b2b2512acf',
            'Change the Position of Overlapping Elements with the z-index Property',
          ],
          [
            '587d78a3367417b2b2512ad0',
            'Center an Element Horizontally Using the margin Property',
          ],
          ['587d78a3367417b2b2512ad1', 'Learn about Complementary Colors'],
          ['587d78a4367417b2b2512ad2', 'Learn about Tertiary Colors'],
          [
            '587d78a4367417b2b2512ad3',
            'Adjust the Color of Various Elements to Complementary Colors',
          ],
          ['587d78a4367417b2b2512ad4', 'Adjust the Hue of a Color'],
          ['587d78a4367417b2b2512ad5', 'Adjust the Tone of a Color'],
          ['587d78a5367417b2b2512ad6', 'Create a Gradual CSS Linear Gradient'],
          [
            '587d78a5367417b2b2512ad7',
            'Use a CSS Linear Gradient to Create a Striped Element',
          ],
          [
            '587d78a5367417b2b2512ad8',
            'Create Texture by Adding a Subtle Pattern as a Background Image',
          ],
          [
            '587d78a5367417b2b2512ad9',
            'Use the CSS Transform scale Property to Change the Size of an Element',
          ],
          [
            '587d78a5367417b2b2512ada',
            'Use the CSS Transform scale Property to Scale an Element on Hover',
          ],
          [
            '587d78a6367417b2b2512adb',
            'Use the CSS Transform Property skewX to Skew an Element Along the X-Axis',
          ],
          [
            '587d78a6367417b2b2512adc',
            'Use the CSS Transform Property skewY to Skew an Element Along the Y-Axis',
          ],
          ['587d78a6367417b2b2512add', 'Create a Graphic Using CSS'],
          [
            '587d78a6367417b2b2512ade',
            'Create a More Complex Shape Using CSS and HTML',
          ],
          [
            '587d78a7367417b2b2512adf',
            'Learn How the CSS @keyframes and animation Properties Work',
          ],
          [
            '587d78a7367417b2b2512ae0',
            'Use CSS Animation to Change the Hover State of a Button',
          ],
          ['58a7a6ebf9a6318348e2d5aa', 'Modify Fill Mode of an Animation'],
          ['587d78a7367417b2b2512ae1', 'Create Movement Using CSS Animation'],
          [
            '587d78a7367417b2b2512ae2',
            'Create Visual Direction by Fading an Element from Left to Right',
          ],
          [
            '587d78a8367417b2b2512ae3',
            'Animate Elements Continually Using an Infinite Animation Count',
          ],
          [
            '587d78a8367417b2b2512ae4',
            'Make a CSS Heartbeat using an Infinite Animation Count',
          ],
          ['587d78a8367417b2b2512ae5', 'Animate Elements at Variable Rates'],
          [
            '587d78a8367417b2b2512ae6',
            'Animate Multiple Elements at Variable Rates',
          ],
          ['587d78a8367417b2b2512ae7', 'Change Animation Timing with Keywords'],
          ['587d78a9367417b2b2512ae8', 'Learn How Bezier Curves Work'],
          ['587d78a9367417b2b2512ae9', 'Use a Bezier Curve to Move a Graphic'],
          [
            '587d78a9367417b2b2512aea',
            'Make Motion More Natural Using a Bezier Curve',
          ],
        ],
      },
      {
        name: 'Applied Accessibility',
        isUpcomingChange: false,
        dashedName: 'applied-accessibility',
        helpCategory: 'HTML-CSS',
        description:
          "In web development, accessibility refers to web content and a UI (user interface) that can be understood, navigated, and interacted with by a broad audience. This includes people with visual, auditory, mobility, or cognitive disabilities.\nIn this course, you'll learn best practices for building webpages that are accessible to everyone.",
        order: 3,
        time: '5 hours',
        template: '',
        required: [],
        superBlock: '01-responsive-web-design',
        challengeOrder: [
          [
            '587d774c367417b2b2512a9c',
            'Add a Text Alternative to Images for Visually Impaired Accessibility',
          ],
          [
            '587d774c367417b2b2512a9d',
            'Know When Alt Text Should be Left Blank',
          ],
          [
            '587d774d367417b2b2512a9e',
            'Use Headings to Show Hierarchical Relationships of Content',
          ],
          [
            '587d774e367417b2b2512a9f',
            'Jump Straight to the Content Using the main Element',
          ],
          ['587d774e367417b2b2512aa0', 'Wrap Content in the article Element'],
          [
            '587d7787367417b2b2512aa1',
            'Make Screen Reader Navigation Easier with the header Landmark',
          ],
          [
            '587d7788367417b2b2512aa2',
            'Make Screen Reader Navigation Easier with the nav Landmark',
          ],
          [
            '587d7788367417b2b2512aa3',
            'Make Screen Reader Navigation Easier with the footer Landmark',
          ],
          [
            '587d7789367417b2b2512aa4',
            'Improve Accessibility of Audio Content with the audio Element',
          ],
          [
            '587d778a367417b2b2512aa5',
            'Improve Chart Accessibility with the figure Element',
          ],
          [
            '587d778a367417b2b2512aa6',
            'Improve Form Field Accessibility with the label Element',
          ],
          [
            '587d778b367417b2b2512aa7',
            'Wrap Radio Buttons in a fieldset Element for Better Accessibility',
          ],
          ['587d778b367417b2b2512aa8', 'Add an Accessible Date Picker'],
          [
            '587d778c367417b2b2512aa9',
            'Standardize Times with the HTML5 datetime Attribute',
          ],
          [
            '587d778d367417b2b2512aaa',
            'Make Elements Only Visible to a Screen Reader by Using Custom CSS',
          ],
          [
            '587d778e367417b2b2512aab',
            'Improve Readability with High Contrast Text',
          ],
          [
            '587d778f367417b2b2512aac',
            'Avoid Colorblindness Issues by Using Sufficient Contrast',
          ],
          [
            '587d778f367417b2b2512aad',
            'Avoid Colorblindness Issues by Carefully Choosing Colors that Convey Information',
          ],
          [
            '587d778f367417b2b2512aae',
            'Give Links Meaning by Using Descriptive Link Text',
          ],
          [
            '587d7790367417b2b2512aaf',
            'Make Links Navigable with HTML Access Keys',
          ],
          [
            '587d7790367417b2b2512ab0',
            'Use tabindex to Add Keyboard Focus to an Element',
          ],
          [
            '587d7790367417b2b2512ab1',
            'Use tabindex to Specify the Order of Keyboard Focus for Several Elements',
          ],
        ],
      },
      {
        name: 'Responsive Web Design Principles',
        isUpcomingChange: false,
        dashedName: 'responsive-web-design-principles',
        helpCategory: 'HTML-CSS',
        order: 4,
        description:
          "There are many devices that can access the web, and they come in all shapes and sizes. Responsive web design is the practice of designing flexible websites that can respond to different screen sizes, orientations, and resolutions.\nIn this course, you'll learn how to use CSS to make your webpages look good, no matter what device they're viewed on.",
        time: '1 hour',
        template: '',
        required: [],
        superBlock: '01-responsive-web-design',
        challengeOrder: [
          ['587d78b0367417b2b2512b08', 'Create a Media Query'],
          ['587d78b1367417b2b2512b09', 'Make an Image Responsive'],
          [
            '587d78b1367417b2b2512b0a',
            'Use a Retina Image for Higher Resolution Displays',
          ],
          ['587d78b1367417b2b2512b0c', 'Make Typography Responsive'],
        ],
      },
      {
        name: 'CSS Flexbox',
        isUpcomingChange: false,
        dashedName: 'css-flexbox',
        helpCategory: 'HTML-CSS',
        description:
          "Flexbox is a powerful, well-supported layout method that was introduced with the latest version of CSS, CSS3. With flexbox, it's easy to center elements on the page and create dynamic user interfaces that shrink and expand automatically.\nIn this course, you'll learn the fundamentals of flexbox and dynamic layouts by building a Twitter card.",
        order: 5,
        time: '5 hours',
        template: '',
        required: [],
        superBlock: '01-responsive-web-design',
        challengeOrder: [
          [
            '587d78ab367417b2b2512af0',
            'Use display: flex to Position Two Boxes',
          ],
          [
            '587d78ab367417b2b2512af1',
            'Add Flex Superpowers to the Tweet Embed',
          ],
          [
            '587d78ab367417b2b2512af2',
            'Use the flex-direction Property to Make a Row',
          ],
          [
            '587d78ab367417b2b2512af3',
            'Apply the flex-direction Property to Create Rows in the Tweet Embed',
          ],
          [
            '587d78ac367417b2b2512af4',
            'Use the flex-direction Property to Make a Column',
          ],
          [
            '587d78ac367417b2b2512af5',
            'Apply the flex-direction Property to Create a Column in the Tweet Embed',
          ],
          [
            '587d78ac367417b2b2512af6',
            'Align Elements Using the justify-content Property',
          ],
          [
            '587d78ac367417b2b2512af7',
            'Use the justify-content Property in the Tweet Embed',
          ],
          [
            '587d78ad367417b2b2512af8',
            'Align Elements Using the align-items Property',
          ],
          [
            '587d78ad367417b2b2512af9',
            'Use the align-items Property in the Tweet Embed',
          ],
          [
            '587d78ad367417b2b2512afa',
            'Use the flex-wrap Property to Wrap a Row or Column',
          ],
          [
            '587d78ad367417b2b2512afb',
            'Use the flex-shrink Property to Shrink Items',
          ],
          [
            '587d78ae367417b2b2512afc',
            'Use the flex-grow Property to Expand Items',
          ],
          [
            '587d78ae367417b2b2512afd',
            'Use the flex-basis Property to Set the Initial Size of an Item',
          ],
          ['587d78ae367417b2b2512afe', 'Use the flex Shorthand Property'],
          [
            '587d78ae367417b2b2512aff',
            'Use the order Property to Rearrange Items',
          ],
          ['587d78af367417b2b2512b00', 'Use the align-self Property'],
        ],
      },
      {
        name: 'CSS Grid',
        isUpcomingChange: false,
        dashedName: 'css-grid',
        helpCategory: 'HTML-CSS',
        description:
          "The CSS grid is a newer standard that makes it easy to build complex responsive layouts. It works by turning an HTML element into a grid, and lets you place child elements anywhere within.\nIn this course, you'll learn the fundamentals of CSS grid by building different complex layouts, including a blog.",
        order: 6,
        time: '5 hours',
        template: '',
        required: [],
        superBlock: 'responsive-web-design',
        challengeOrder: [
          ['5a858944d96184f06fd60d61', 'Create Your First CSS Grid'],
          [
            '5a9036d038fddaf9a66b5d32',
            'Add Columns with grid-template-columns',
          ],
          ['5a9036e138fddaf9a66b5d33', 'Add Rows with grid-template-rows'],
          [
            '5a9036ee38fddaf9a66b5d34',
            'Use CSS Grid units to Change the Size of Columns and Rows',
          ],
          [
            '5a9036ee38fddaf9a66b5d35',
            'Create a Column Gap Using grid-column-gap',
          ],
          ['5a9036ee38fddaf9a66b5d36', 'Create a Row Gap using grid-row-gap'],
          ['5a9036ee38fddaf9a66b5d37', 'Add Gaps Faster with grid-gap'],
          ['5a90372638fddaf9a66b5d38', 'Use grid-column to Control Spacing'],
          ['5a90373638fddaf9a66b5d39', 'Use grid-row to Control Spacing'],
          [
            '5a90374338fddaf9a66b5d3a',
            'Align an Item Horizontally using justify-self',
          ],
          [
            '5a90375238fddaf9a66b5d3b',
            'Align an Item Vertically using align-self',
          ],
          [
            '5a90376038fddaf9a66b5d3c',
            'Align All Items Horizontally using justify-items',
          ],
          [
            '5a94fdf869fb03452672e45b',
            'Align All Items Vertically using align-items',
          ],
          ['5a94fe0569fb03452672e45c', 'Divide the Grid Into an Area Template'],
          [
            '5a94fe1369fb03452672e45d',
            'Place Items in Grid Areas Using the grid-area Property',
          ],
          [
            '5a94fe2669fb03452672e45e',
            'Use grid-area Without Creating an Areas Template',
          ],
          [
            '5a94fe3669fb03452672e45f',
            'Reduce Repetition Using the repeat Function',
          ],
          [
            '5a94fe4469fb03452672e460',
            'Limit Item Size Using the minmax Function',
          ],
          [
            '5a94fe5469fb03452672e461',
            'Create Flexible Layouts Using auto-fill',
          ],
          [
            '5a94fe6269fb03452672e462',
            'Create Flexible Layouts Using auto-fit',
          ],
          [
            '5a94fe7769fb03452672e463',
            'Use Media Queries to Create Responsive Layouts',
          ],
          ['5a94fe8569fb03452672e464', 'Create Grids within Grids'],
        ],
      },
    ],
  },
  {
    url: 'javascript-algorithms-and-data-structures',
    label: 'JavaScript Algorithms and Data Structures',
    description:
      "While HTML and CSS control the content and styling of a page, JavaScript is used to make it interactive. In the JavaScript Algorithm and Data Structures Certification, you'll learn the fundamentals of JavaScript including variables, arrays, objects, loops, and functions.\nOnce you have the fundamentals down, you'll apply that knowledge by creating algorithms to manipulate strings, factorialize numbers, and even calculate the orbit of the International Space Station.\nAlong the way, you'll also learn two important programming styles or paradigms: Object Oriented Programming (OOP) and Functional Programming (FP).",
    icon: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 448 512">
        <path
          fill={iconColor}
          d="M32 32v448h448V32Zm240 348c0 43.61-25.76 64.87-63.05 64.87c-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65c12 0 21.86-5.41 21.86-26.46V240h44Zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56c17.44 0 27.57-7.72 27.57-19.75c0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45c0-31.57 24.05-54.63 61.64-54.63c26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18c-12.33 0-20.15 7.82-20.15 18c0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16c.01 37.9-29.76 57.64-69.76 57.64Z"
        ></path>
      </svg>
    ),
    bigIcon: (
      <svg width="100" height="100" viewBox="0 0 448 512">
        <path
          fill={iconColor}
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
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
      >
        <path
          fill={iconColor}
          d="M15.902 11.974a2.41 2.41 0 1 1-4.82 0a2.41 2.41 0 0 1 4.82 0z"
        ></path>
        <path
          fill={iconColor}
          d="M13.491 17.494a27.278 27.278 0 0 1-8.749-1.206l.193.051a10.886 10.886 0 0 1-3.541-1.903l.021.016a3.414 3.414 0 0 1-1.41-2.467l-.001-.013c0-1.594 1.747-3.154 4.681-4.172c2.512-.827 5.403-1.304 8.405-1.304l.417.003h-.021a27.489 27.489 0 0 1 8.885 1.334l-.195-.055a11.058 11.058 0 0 1 3.433 1.814l-.024-.018a3.274 3.274 0 0 1 1.386 2.387l.001.013c0 1.656-1.954 3.332-5.103 4.374c-2.363.729-5.08 1.149-7.895 1.149c-.17 0-.339-.002-.508-.005h.025zm0-9.84c-.106-.002-.232-.002-.358-.002c-2.881 0-5.656.452-8.259 1.289l.191-.053c-2.698.941-3.908 2.228-3.908 3.087c0 .893 1.301 2.3 4.153 3.274c2.249.697 4.834 1.099 7.513 1.099c.235 0 .469-.003.702-.009l-.034.001a26.452 26.452 0 0 0 8.205-1.138l-.187.049c2.96-.984 4.32-2.391 4.32-3.28a2.247 2.247 0 0 0-.966-1.515l-.008-.005a9.806 9.806 0 0 0-2.97-1.574l-.07-.02c-2.368-.766-5.093-1.208-7.92-1.208c-.142 0-.283.001-.424.003h.021z"
        ></path>
        <path
          fill={iconColor}
          d="m8.023 23.986l-.053.001c-.453 0-.878-.119-1.245-.327l.013.007c-1.378-.8-1.858-3.092-1.28-6.141c.697-3.128 1.827-5.894 3.344-8.4l-.069.124a27.856 27.856 0 0 1 5.425-6.872l.02-.018A10.943 10.943 0 0 1 17.365.332l.073-.027c.407-.196.885-.31 1.39-.31c.501 0 .976.113 1.4.314l-.02-.008c1.435.826 1.911 3.36 1.238 6.606c-.72 2.967-1.818 5.58-3.262 7.959l.07-.123c-1.452 2.63-3.209 4.882-5.266 6.819l-.014.013a10.872 10.872 0 0 1-3.321 2.082l-.074.026c-.46.181-.992.292-1.549.305h-.006zM9.228 9.539l.499.288c-1.381 2.28-2.465 4.926-3.106 7.74l-.034.18c-.533 2.809-.019 4.498.72 4.926c.191.102.417.161.657.161l.061-.001h-.003c.955 0 2.458-.605 4.196-2.122a26.398 26.398 0 0 0 4.972-6.404l.068-.135a26.071 26.071 0 0 0 3.025-7.307l.038-.182c.629-3.058.086-4.93-.686-5.378a2.246 2.246 0 0 0-1.814.092l.013-.006a9.858 9.858 0 0 0-2.907 1.846l.007-.006a26.608 26.608 0 0 0-5.136 6.468l-.069.132z"
        ></path>
        <path
          fill={iconColor}
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
          fill={iconColor}
          d="M20 5H4v11h16V5zm-4.53 10.03l-2.09-2.09c-1.35.87-3.17.71-4.36-.47c-1.37-1.37-1.37-3.58 0-4.95s3.58-1.37 4.95 0c1.18 1.18 1.34 3 .47 4.36l2.09 2.09l-1.06 1.06z"
          opacity=".3"
        ></path>
        <path
          fill={iconColor}
          d="M4 18h16c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2zM4 5h16v11H4V5zM1 19h22v2H1z"
        ></path>
        <path
          fill={iconColor}
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
    ],
  },
  {
    url: 'data-visualization',
    label: 'Data Visualization',
    description:
      "Data is all around us, but it doesn't mean much without shape or context.\nIn the Data Visualization Certification, you'll build charts, graphs, and maps to present different types of data with the D3.js library.\nYou'll also learn about JSON (JavaScript Object Notation), and how to work with data online using an API (Application Programming Interface).",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 512 512"
      >
        <path
          fill={iconColor}
          d="M0 13.338h41.332c134.019 0 242.662 108.644 242.662 242.662S175.351 498.662 41.332 498.662H0V391.997h41.332c75.11 0 135.998-60.888 135.998-135.997S116.442 120.003 41.332 120.003H0V13.338zm363.992 295.994H322.66a286.338 286.338 0 0 0 0-106.664h41.332c51.253.06 57.816-80.122 0-82.665h-70.679a286.338 286.338 0 0 0-99.978-106.665h170.663c81.736 0 147.997 66.26 147.998 147.996c0 34.586-12.112 68.08-34.235 94.666c52.282 62.829 43.732 156.144-19.097 208.426a147.997 147.997 0 0 1-94.666 34.236H193.335a286.338 286.338 0 0 0 99.978-106.665h70.68c54.726 0 54.726-82.665 0-82.665z"
        />
      </svg>
    ),
    bigIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 512 512"
      >
        <path
          fill={iconColor}
          d="M0 13.338h41.332c134.019 0 242.662 108.644 242.662 242.662S175.351 498.662 41.332 498.662H0V391.997h41.332c75.11 0 135.998-60.888 135.998-135.997S116.442 120.003 41.332 120.003H0V13.338zm363.992 295.994H322.66a286.338 286.338 0 0 0 0-106.664h41.332c51.253.06 57.816-80.122 0-82.665h-70.679a286.338 286.338 0 0 0-99.978-106.665h170.663c81.736 0 147.997 66.26 147.998 147.996c0 34.586-12.112 68.08-34.235 94.666c52.282 62.829 43.732 156.144-19.097 208.426a147.997 147.997 0 0 1-94.666 34.236H193.335a286.338 286.338 0 0 0 99.978-106.665h70.68c54.726 0 54.726-82.665 0-82.665z"
        />
      </svg>
    ),
    topics: [
      {
        name: 'Data Visualization with D3',
        isUpcomingChange: false,
        dashedName: 'data-visualization-with-d3',
        helpCategory: 'JavaScript',
        description:
          "D3, or D3.js, stands for Data Driven Documents. It's a JavaScript library for creating dynamic and interactive data visualizations in the browser.\nD3 is built to work with common web standards – namely HTML, CSS, and Scalable Vector Graphics (SVG).\nD3 supports many different kinds of input data formats. Then, using its powerful built-in methods, you can transform those data into different charts, graphs, and maps.\nIn the Data Visualization with D3 courses, you'll learn how to work with data to create different charts, graphs, hover elements, and other ingredients to create dynamic and attractive data visualizations.",
        order: 0,
        time: '5 hours',
        template: '',
        required: [
          {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js',
          },
        ],
        superBlock: '04-data-visualization',
        challengeOrder: [
          ['587d7fa6367417b2b2512bc2', 'Add Document Elements with D3'],
          ['587d7fa6367417b2b2512bc3', 'Select a Group of Elements with D3'],
          ['587d7fa7367417b2b2512bc4', 'Work with Data in D3'],
          ['587d7fa7367417b2b2512bc5', 'Work with Dynamic Data in D3'],
          ['587d7fa7367417b2b2512bc6', 'Add Inline Styling to Elements'],
          ['587d7fa7367417b2b2512bc7', 'Change Styles Based on Data'],
          ['587d7fa7367417b2b2512bc8', 'Add Classes with D3'],
          [
            '587d7fa8367417b2b2512bc9',
            'Update the Height of an Element Dynamically',
          ],
          [
            '587d7fa8367417b2b2512bca',
            'Change the Presentation of a Bar Chart',
          ],
          ['587d7fa8367417b2b2512bcb', 'Learn About SVG in D3'],
          ['587d7fa8367417b2b2512bcc', 'Display Shapes with SVG'],
          [
            '587d7fa8367417b2b2512bcd',
            'Create a Bar for Each Data Point in the Set',
          ],
          [
            '587d7fa9367417b2b2512bce',
            'Dynamically Set the Coordinates for Each Bar',
          ],
          [
            '587d7fa9367417b2b2512bcf',
            'Dynamically Change the Height of Each Bar',
          ],
          ['587d7fa9367417b2b2512bd0', 'Invert SVG Elements'],
          ['587d7fa9367417b2b2512bd1', 'Change the Color of an SVG Element'],
          ['587d7faa367417b2b2512bd2', 'Add Labels to D3 Elements'],
          ['587d7faa367417b2b2512bd3', 'Style D3 Labels'],
          ['587d7faa367417b2b2512bd4', 'Add a Hover Effect to a D3 Element'],
          ['587d7faa367417b2b2512bd6', 'Add a Tooltip to a D3 Element'],
          ['587d7fab367417b2b2512bd7', 'Create a Scatterplot with SVG Circles'],
          ['587d7fab367417b2b2512bd8', 'Add Attributes to the Circle Elements'],
          ['587d7fab367417b2b2512bd9', 'Add Labels to Scatter Plot Circles'],
          ['587d7fab367417b2b2512bda', 'Create a Linear Scale with D3'],
          ['587d7fac367417b2b2512bdb', 'Set a Domain and a Range on a Scale'],
          [
            '587d7fac367417b2b2512bdc',
            'Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset',
          ],
          ['587d7fac367417b2b2512bdd', 'Use Dynamic Scales'],
          [
            '587d7fac367417b2b2512bde',
            'Use a Pre-Defined Scale to Place Elements',
          ],
          ['587d7fad367417b2b2512bdf', 'Add Axes to a Visualization'],
        ],
      },
      {
        name: 'JSON APIs and AJAX',
        isUpcomingChange: false,
        dashedName: 'json-apis-and-ajax',
        helpCategory: 'JavaScript',
        description:
          'Similar to how UIs help people use programs, APIs (Application Programming Interfaces) help programs interact with other programs. APIs are tools that computers use to communicate with one another, in part to send and receive data.\nProgrammers often use AJAX (Asynchronous JavaScript and XML) when working with APIs. AJAX refers to a group of technologies that make asynchronous requests to a server to transfer data, then load any returned data into the page. And the data transferred between the browser and server is often in a format called JSON (JavaScript Object Notation).\nThis course will teach you the basics about working with APIs and different AJAX technologies in the browser.',
        order: 1,
        time: '2 hours',
        template: '',
        required: [
          {
            link: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css',
          },
        ],
        superBlock: '04-data-visualization',
        challengeOrder: [
          [
            '587d7fad367417b2b2512be1',
            'Handle Click Events with JavaScript using the onclick property',
          ],
          ['587d7fad367417b2b2512be2', 'Change Text with click Events'],
          [
            '587d7fae367417b2b2512be3',
            'Get JSON with the JavaScript XMLHttpRequest Method',
          ],
          [
            '5ccfad82bb2dc6c965a848e5',
            'Get JSON with the JavaScript fetch method',
          ],
          ['587d7fae367417b2b2512be4', 'Access the JSON Data from an API'],
          ['587d7fae367417b2b2512be5', 'Convert JSON Data to HTML'],
          ['587d7fae367417b2b2512be6', 'Render Images from Data Sources'],
          [
            '587d7fae367417b2b2512be7',
            'Pre-filter JSON to Get the Data You Need',
          ],
          [
            '587d7faf367417b2b2512be8',
            "Get Geolocation Data to Find A User's GPS Coordinates",
          ],
          [
            '587d7faf367417b2b2512be9',
            'Post Data with the JavaScript XMLHttpRequest Method',
          ],
        ],
      },
    ],
  },
  {
    url: 'back-end-development-and-apis',
    label: 'Back End Development And APIs',
    description:
      "Until this point, you've only used JavaScript on the front end to add interactivity to a page, solve algorithm challenges, or build an SPA. But JavaScript can also be used on the back end, or server, to build entire web applications.\nToday, one of the popular ways to build applications is through microservices, which are small, modular applications that work together to form a larger whole.\nIn the Back End Development and APIs Certification, you'll learn how to write back end apps with Node.js and npm. You'll also build web applications with the Express framework, and build a People Finder microservice with MongoDB and the Mongoose library.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
      >
        <g fill={iconColor}>
          <path
            fill-rule="evenodd"
            d="M4.975 2.25h14.05c.445 0 .816 0 1.12.02c.317.022.617.069.907.19a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.822 2.822 0 0 1-.19.907a2.75 2.75 0 0 1-.652.948c.279.264.503.586.653.948c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.822 2.822 0 0 1-.19.907a2.75 2.75 0 0 1-.652.948c.279.264.503.586.653.948c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.822 2.822 0 0 1-.19.907a2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188c-.304.021-.675.021-1.12.021H4.975c-.445 0-.816 0-1.12-.02a2.822 2.822 0 0 1-.907-.19a2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12a2.84 2.84 0 0 1 .19-.907A2.75 2.75 0 0 1 2.112 15a2.75 2.75 0 0 1-.654-.948c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12c.022-.318.07-.617.19-.907A2.75 2.75 0 0 1 2.112 9a2.75 2.75 0 0 1-.654-.948c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12a2.84 2.84 0 0 1 .19-.907a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188c.304-.021.675-.021 1.12-.021Zm.025 6c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.032-.077-.061-.194-.078-.435A17.09 17.09 0 0 1 2.75 6c0-.476 0-.796.017-1.043c.017-.241.046-.358.078-.435c.127-.307.37-.55.677-.677c.077-.032.194-.061.435-.078A17.09 17.09 0 0 1 5 3.75h14c.476 0 .796 0 1.043.017c.241.017.358.046.435.078c.307.127.55.37.677.677c.032.077.061.194.078.435c.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017H5Zm0 1.5c-.476 0-.796 0-1.043.017c-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435c-.017.247-.017.567-.017 1.043s0 .796.017 1.043c.017.241.046.358.078.435c.127.307.37.55.677.677c.077.032.194.061.435.078c.247.017.567.017 1.043.017h14c.476 0 .796 0 1.043-.017c.241-.017.358-.046.435-.078c.307-.127.55-.37.677-.677c.032-.077.061-.194.078-.435c.017-.247.017-.567.017-1.043s0-.796-.017-1.043c-.017-.241-.046-.358-.078-.435a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17.091 17.091 0 0 0 19 9.75H5Zm0 6c-.476 0-.796 0-1.043.017c-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435c-.017.247-.017.567-.017 1.043s0 .796.017 1.043c.017.241.046.358.078.435c.127.307.37.55.677.677c.077.032.194.061.435.078c.247.017.567.017 1.043.017h14c.476 0 .796 0 1.043-.017c.241-.017.358-.046.435-.078c.307-.127.55-.37.677-.677c.032-.077.061-.194.078-.435c.017-.247.017-.567.017-1.043s0-.796-.017-1.043c-.017-.241-.046-.358-.078-.435a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17.073 17.073 0 0 0 19 15.75H5Z"
            clip-rule="evenodd"
          />
          <path d="M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0-6a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
        </g>
      </svg>
    ),
    bigIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
      >
        <g fill={iconColor}>
          <path
            fill-rule="evenodd"
            d="M4.975 2.25h14.05c.445 0 .816 0 1.12.02c.317.022.617.069.907.19a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.822 2.822 0 0 1-.19.907a2.75 2.75 0 0 1-.652.948c.279.264.503.586.653.948c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.822 2.822 0 0 1-.19.907a2.75 2.75 0 0 1-.652.948c.279.264.503.586.653.948c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.822 2.822 0 0 1-.19.907a2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188c-.304.021-.675.021-1.12.021H4.975c-.445 0-.816 0-1.12-.02a2.822 2.822 0 0 1-.907-.19a2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12a2.84 2.84 0 0 1 .19-.907A2.75 2.75 0 0 1 2.112 15a2.75 2.75 0 0 1-.654-.948c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12c.022-.318.07-.617.19-.907A2.75 2.75 0 0 1 2.112 9a2.75 2.75 0 0 1-.654-.948c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12a2.84 2.84 0 0 1 .19-.907a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188c.304-.021.675-.021 1.12-.021Zm.025 6c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.032-.077-.061-.194-.078-.435A17.09 17.09 0 0 1 2.75 6c0-.476 0-.796.017-1.043c.017-.241.046-.358.078-.435c.127-.307.37-.55.677-.677c.077-.032.194-.061.435-.078A17.09 17.09 0 0 1 5 3.75h14c.476 0 .796 0 1.043.017c.241.017.358.046.435.078c.307.127.55.37.677.677c.032.077.061.194.078.435c.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017H5Zm0 1.5c-.476 0-.796 0-1.043.017c-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435c-.017.247-.017.567-.017 1.043s0 .796.017 1.043c.017.241.046.358.078.435c.127.307.37.55.677.677c.077.032.194.061.435.078c.247.017.567.017 1.043.017h14c.476 0 .796 0 1.043-.017c.241-.017.358-.046.435-.078c.307-.127.55-.37.677-.677c.032-.077.061-.194.078-.435c.017-.247.017-.567.017-1.043s0-.796-.017-1.043c-.017-.241-.046-.358-.078-.435a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17.091 17.091 0 0 0 19 9.75H5Zm0 6c-.476 0-.796 0-1.043.017c-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435c-.017.247-.017.567-.017 1.043s0 .796.017 1.043c.017.241.046.358.078.435c.127.307.37.55.677.677c.077.032.194.061.435.078c.247.017.567.017 1.043.017h14c.476 0 .796 0 1.043-.017c.241-.017.358-.046.435-.078c.307-.127.55-.37.677-.677c.032-.077.061-.194.078-.435c.017-.247.017-.567.017-1.043s0-.796-.017-1.043c-.017-.241-.046-.358-.078-.435a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17.073 17.073 0 0 0 19 15.75H5Z"
            clip-rule="evenodd"
          />
          <path d="M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0-6a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
        </g>
      </svg>
    ),
    topics: [
      {
        name: 'Managing Packages with npm',
        isUpcomingChange: false,
        dashedName: 'managing-packages-with-npm',
        helpCategory: 'JavaScript',
        description:
          "npm (Node Package Manager), is a command line tool to install, create, and share packages of JavaScript code written for Node.js. There are many open source packages available on npm, so before starting a project, take some time to explore so you don't end up recreating the wheel for things like working with dates or fetching data from an API.\nIn this course, you'll learn the basics of using npm, including how to work with the package.json and how to manage your installed dependencies.",
        order: 0,
        time: '5 hours',
        superBlock: '05-back-end-development-and-apis',
        challengeOrder: [
          [
            '587d7fb3367417b2b2512bfb',
            'How to Use package.json, the Core of Any Node.js Project or npm Package',
          ],
          [
            '587d7fb3367417b2b2512bfc',
            'Add a Description to Your package.json',
          ],
          ['587d7fb4367417b2b2512bfd', 'Add Keywords to Your package.json'],
          ['587d7fb4367417b2b2512bfe', 'Add a License to Your package.json'],
          ['587d7fb4367417b2b2512bff', 'Add a Version to Your package.json'],
          [
            '587d7fb4367417b2b2512c00',
            'Expand Your Project with External Packages from npm',
          ],
          [
            '587d7fb5367417b2b2512c01',
            'Manage npm Dependencies By Understanding Semantic Versioning',
          ],
          [
            '587d7fb5367417b2b2512c02',
            'Use the Tilde-Character to Always Use the Latest Patch Version of a Dependency',
          ],
          [
            '587d7fb5367417b2b2512c03',
            'Use the Caret-Character to Use the Latest Minor Version of a Dependency',
          ],
          [
            '587d7fb5367417b2b2512c04',
            'Remove a Package from Your Dependencies',
          ],
        ],
      },
      {
        name: 'Basic Node and Express',
        isUpcomingChange: false,
        dashedName: 'basic-node-and-express',
        helpCategory: 'JavaScript',
        description:
          "Node.js is a JavaScript runtime that allows developers to write backend (server-side) programs in JavaScript. Node.js comes with a handful of built-in modules — small, independent programs — that help with this. Some of the core modules include HTTP, which acts like a server, and File System, a module to read and modify files.\nIn the last set of courses you learned to install and manage packages from npm, which are collections of smaller modules. These packages can help you build larger, more complex applications.\nExpress is a lightweight web application framework, and is one of the most popular packages on npm. Express makes it much easier to create a server and handle routing for your application, which handles things like directing people to the correct page when they visit a certain endpoint like /blog.\nIn this course, you'll learn the basics of Node and Express including how to create a server, serve different files, and handle different requests from the browser.",
        order: 1,
        time: '5 hours',
        superBlock: '05-back-end-development-and-apis',
        challengeOrder: [
          ['587d7fb0367417b2b2512bed', 'Meet the Node console'],
          ['587d7fb0367417b2b2512bee', 'Start a Working Express Server'],
          ['587d7fb0367417b2b2512bef', 'Serve an HTML File'],
          ['587d7fb0367417b2b2512bf0', 'Serve Static Assets'],
          ['587d7fb1367417b2b2512bf1', 'Serve JSON on a Specific Route'],
          ['587d7fb1367417b2b2512bf2', 'Use the .env File'],
          [
            '587d7fb1367417b2b2512bf3',
            'Implement a Root-Level Request Logger Middleware',
          ],
          [
            '587d7fb1367417b2b2512bf4',
            'Chain Middleware to Create a Time Server',
          ],
          [
            '587d7fb2367417b2b2512bf5',
            'Get Route Parameter Input from the Client',
          ],
          [
            '587d7fb2367417b2b2512bf6',
            'Get Query Parameter Input from the Client',
          ],
          [
            '587d7fb2367417b2b2512bf7',
            'Use body-parser to Parse POST Requests',
          ],
          ['587d7fb2367417b2b2512bf8', 'Get Data from POST Requests'],
        ],
      },
      {
        name: 'MongoDB and Mongoose',
        isUpcomingChange: false,
        dashedName: 'mongodb-and-mongoose',
        helpCategory: 'JavaScript',
        description: `MongoDB is a database application that stores JSON documents (or records) that you can use in your application. Unlike SQL, another type of database, MongoDB is a non-relational or "NoSQL" database. This means MongoDB stores all associated data within one record, instead of storing it across many preset tables as in a SQL database.\nMongoose is a popular npm package for interacting with MongoDB. With Mongoose, you can use plain JavaScript objects instead of JSON, which makes it easier to work with MongoDB. Also, it allows you to create blueprints for your documents called schemas, so you don't accidentally save the wrong type of data and cause bugs later.\nIn the MongoDB and Mongoose courses, you'll learn the fundamentals of working with persistent data including how to set up a model, and save, delete, and find documents in the`,
        order: 2,
        time: '5 hours',
        superBlock: '05-back-end-development-and-apis',
        challengeOrder: [
          ['587d7fb6367417b2b2512c06', 'Install and Set Up Mongoose'],
          ['587d7fb6367417b2b2512c07', 'Create a Model'],
          ['587d7fb6367417b2b2512c09', 'Create and Save a Record of a Model'],
          [
            '587d7fb7367417b2b2512c0a',
            'Create Many Records with model.create()',
          ],
          [
            '587d7fb7367417b2b2512c0b',
            'Use model.find() to Search Your Database',
          ],
          [
            '587d7fb7367417b2b2512c0c',
            'Use model.findOne() to Return a Single Matching Document from Your Database',
          ],
          [
            '587d7fb7367417b2b2512c0d',
            'Use model.findById() to Search Your Database By _id',
          ],
          [
            '587d7fb8367417b2b2512c0e',
            'Perform Classic Updates by Running Find, Edit, then Save',
          ],
          [
            '587d7fb8367417b2b2512c0f',
            'Perform New Updates on a Document Using model.findOneAndUpdate()',
          ],
          [
            '587d7fb8367417b2b2512c10',
            'Delete One Document Using model.findByIdAndRemove',
          ],
          [
            '587d7fb8367417b2b2512c11',
            'Delete Many Documents with model.remove()',
          ],
          [
            '587d7fb9367417b2b2512c12',
            'Chain Search Query Helpers to Narrow Search Results',
          ],
        ],
      },
    ],
  },
  {
    url: 'quality-assurance',
    label: 'Quality Assurance',
    description:
      "As your programs or web applications become more complex, you'll want to test them to make sure that new changes don't break their original functionality.\nIn the Quality Assurance Certification, you'll learn how to write tests with Chai to ensure your applications work the way you expect them to.\nThen you'll build a chat application to learn advanced Node and Express concepts. You'll also use Pug as a template engine, Passport for authentication, and Socket.io for real-time communication between the server and connected clients.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
      >
        <g fill={iconColor}>
          <path
            fill-rule="evenodd"
            d="M4.975 2.25h14.05c.445 0 .816 0 1.12.02c.317.022.617.069.907.19a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.822 2.822 0 0 1-.19.907a2.75 2.75 0 0 1-.652.948c.279.264.503.586.653.948c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.822 2.822 0 0 1-.19.907a2.75 2.75 0 0 1-.652.948c.279.264.503.586.653.948c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.822 2.822 0 0 1-.19.907a2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188c-.304.021-.675.021-1.12.021H4.975c-.445 0-.816 0-1.12-.02a2.822 2.822 0 0 1-.907-.19a2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12a2.84 2.84 0 0 1 .19-.907A2.75 2.75 0 0 1 2.112 15a2.75 2.75 0 0 1-.654-.948c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12c.022-.318.07-.617.19-.907A2.75 2.75 0 0 1 2.112 9a2.75 2.75 0 0 1-.654-.948c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12a2.84 2.84 0 0 1 .19-.907a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188c.304-.021.675-.021 1.12-.021Zm.025 6c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.032-.077-.061-.194-.078-.435A17.09 17.09 0 0 1 2.75 6c0-.476 0-.796.017-1.043c.017-.241.046-.358.078-.435c.127-.307.37-.55.677-.677c.077-.032.194-.061.435-.078A17.09 17.09 0 0 1 5 3.75h14c.476 0 .796 0 1.043.017c.241.017.358.046.435.078c.307.127.55.37.677.677c.032.077.061.194.078.435c.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017H5Zm0 1.5c-.476 0-.796 0-1.043.017c-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435c-.017.247-.017.567-.017 1.043s0 .796.017 1.043c.017.241.046.358.078.435c.127.307.37.55.677.677c.077.032.194.061.435.078c.247.017.567.017 1.043.017h14c.476 0 .796 0 1.043-.017c.241-.017.358-.046.435-.078c.307-.127.55-.37.677-.677c.032-.077.061-.194.078-.435c.017-.247.017-.567.017-1.043s0-.796-.017-1.043c-.017-.241-.046-.358-.078-.435a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17.091 17.091 0 0 0 19 9.75H5Zm0 6c-.476 0-.796 0-1.043.017c-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435c-.017.247-.017.567-.017 1.043s0 .796.017 1.043c.017.241.046.358.078.435c.127.307.37.55.677.677c.077.032.194.061.435.078c.247.017.567.017 1.043.017h14c.476 0 .796 0 1.043-.017c.241-.017.358-.046.435-.078c.307-.127.55-.37.677-.677c.032-.077.061-.194.078-.435c.017-.247.017-.567.017-1.043s0-.796-.017-1.043c-.017-.241-.046-.358-.078-.435a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17.073 17.073 0 0 0 19 15.75H5Z"
            clip-rule="evenodd"
          />
          <path d="M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0-6a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
        </g>
      </svg>
    ),
    bigIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
      >
        <g fill={iconColor}>
          <path
            fill-rule="evenodd"
            d="M4.975 2.25h14.05c.445 0 .816 0 1.12.02c.317.022.617.069.907.19a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.822 2.822 0 0 1-.19.907a2.75 2.75 0 0 1-.652.948c.279.264.503.586.653.948c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.822 2.822 0 0 1-.19.907a2.75 2.75 0 0 1-.652.948c.279.264.503.586.653.948c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.822 2.822 0 0 1-.19.907a2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188c-.304.021-.675.021-1.12.021H4.975c-.445 0-.816 0-1.12-.02a2.822 2.822 0 0 1-.907-.19a2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12a2.84 2.84 0 0 1 .19-.907A2.75 2.75 0 0 1 2.112 15a2.75 2.75 0 0 1-.654-.948c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12c.022-.318.07-.617.19-.907A2.75 2.75 0 0 1 2.112 9a2.75 2.75 0 0 1-.654-.948c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12a2.84 2.84 0 0 1 .19-.907a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188c.304-.021.675-.021 1.12-.021Zm.025 6c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.032-.077-.061-.194-.078-.435A17.09 17.09 0 0 1 2.75 6c0-.476 0-.796.017-1.043c.017-.241.046-.358.078-.435c.127-.307.37-.55.677-.677c.077-.032.194-.061.435-.078A17.09 17.09 0 0 1 5 3.75h14c.476 0 .796 0 1.043.017c.241.017.358.046.435.078c.307.127.55.37.677.677c.032.077.061.194.078.435c.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017H5Zm0 1.5c-.476 0-.796 0-1.043.017c-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435c-.017.247-.017.567-.017 1.043s0 .796.017 1.043c.017.241.046.358.078.435c.127.307.37.55.677.677c.077.032.194.061.435.078c.247.017.567.017 1.043.017h14c.476 0 .796 0 1.043-.017c.241-.017.358-.046.435-.078c.307-.127.55-.37.677-.677c.032-.077.061-.194.078-.435c.017-.247.017-.567.017-1.043s0-.796-.017-1.043c-.017-.241-.046-.358-.078-.435a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17.091 17.091 0 0 0 19 9.75H5Zm0 6c-.476 0-.796 0-1.043.017c-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435c-.017.247-.017.567-.017 1.043s0 .796.017 1.043c.017.241.046.358.078.435c.127.307.37.55.677.677c.077.032.194.061.435.078c.247.017.567.017 1.043.017h14c.476 0 .796 0 1.043-.017c.241-.017.358-.046.435-.078c.307-.127.55-.37.677-.677c.032-.077.061-.194.078-.435c.017-.247.017-.567.017-1.043s0-.796-.017-1.043c-.017-.241-.046-.358-.078-.435a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17.073 17.073 0 0 0 19 15.75H5Z"
            clip-rule="evenodd"
          />
          <path d="M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0-6a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
        </g>
      </svg>
    ),
    topics: [
      {
        name: 'Quality Assurance and Testing with Chai',
        isUpcomingChange: false,
        dashedName: 'quality-assurance-and-testing-with-chai',
        helpCategory: 'JavaScript',
        description:
          "Chai is a JavaScript testing library that helps you confirm that your program still behaves the way you expect it to after you make changes to your code.\nUsing Chai, you can write tests that describe your program's requirements and see if your program meets them.\nIn this course, you'll learn about assertions, deep equality, truthiness, testing APIs, and other fundamentals for testing JavaScript applications.",
        order: 0,
        time: '5 hours',
        template: '',
        required: [],
        superBlock: '06-quality-assurance',
        challengeOrder: [
          ['587d824a367417b2b2512c46', 'Learn How JavaScript Assertions Work'],
          [
            '587d824b367417b2b2512c47',
            'Test if a Variable or Function is Defined',
          ],
          ['587d824b367417b2b2512c48', 'Use Assert.isOK and Assert.isNotOK'],
          ['587d824b367417b2b2512c49', 'Test for Truthiness'],
          [
            '587d824b367417b2b2512c4a',
            'Use the Double Equals to Assert Equality',
          ],
          [
            '587d824b367417b2b2512c4b',
            'Use the Triple Equals to Assert Strict Equality',
          ],
          [
            '587d824c367417b2b2512c4c',
            'Assert Deep Equality with .deepEqual and .notDeepEqual',
          ],
          [
            '587d824c367417b2b2512c4d',
            'Compare the Properties of Two Elements',
          ],
          [
            '587d824c367417b2b2512c4e',
            'Test if One Value is Below or At Least as Large as Another',
          ],
          [
            '587d824c367417b2b2512c4f',
            'Test if a Value Falls within a Specific Range',
          ],
          ['587d824d367417b2b2512c50', 'Test if a Value is an Array'],
          ['587d824d367417b2b2512c51', 'Test if an Array Contains an Item'],
          ['587d824d367417b2b2512c52', 'Test if a Value is a String'],
          ['587d824d367417b2b2512c53', 'Test if a String Contains a Substring'],
          [
            '587d824d367417b2b2512c54',
            'Use Regular Expressions to Test a String',
          ],
          ['587d824e367417b2b2512c55', 'Test if an Object has a Property'],
          [
            '587d824e367417b2b2512c56',
            'Test if a Value is of a Specific Data Structure Type',
          ],
          [
            '587d824e367417b2b2512c57',
            'Test if an Object is an Instance of a Constructor',
          ],
          [
            '587d824e367417b2b2512c58',
            'Run Functional Tests on API Endpoints using Chai-HTTP',
          ],
          [
            '587d824f367417b2b2512c59',
            'Run Functional Tests on API Endpoints using Chai-HTTP II',
          ],
          [
            '587d824f367417b2b2512c5a',
            'Run Functional Tests on an API Response using Chai-HTTP III - PUT method',
          ],
          [
            '587d824f367417b2b2512c5b',
            'Run Functional Tests on an API Response using Chai-HTTP IV - PUT method',
          ],
          [
            '587d824f367417b2b2512c5c',
            'Simulate Actions Using a Headless Browser',
          ],
          [
            '587d8250367417b2b2512c5d',
            'Run Functional Tests Using a Headless Browser',
          ],
          [
            '5f8884f4c46685731aabfc41',
            'Run Functional Tests Using a Headless Browser II',
          ],
        ],
      },
      {
        name: 'Advanced Node and Express',
        isUpcomingChange: false,
        dashedName: 'advanced-node-and-express',
        helpCategory: 'JavaScript',
        description:
          "Now it's time to take a deep dive into Node.js and Express.js by building a chat application with a sign-in system.\nTo implement the sign-in system safely, you'll need to learn about authentication. This is the act of verifying the identity of a person or process.\nIn this course, you'll learn how to use Passport to manage authentication, Pug to create reusable templates for quickly building the front end, and web sockets for real-time communication between the clients and server.",
        order: 1,
        time: '5 hours',
        template: '',
        required: [],
        superBlock: '06-quality-assurance',
        challengeOrder: [
          ['5895f700f9fc0f352b528e63', 'Set up a Template Engine'],
          ['5895f70bf9fc0f352b528e64', "Use a Template Engine's Powers"],
          ['5895f70cf9fc0f352b528e65', 'Set up Passport'],
          ['5895f70cf9fc0f352b528e66', 'Serialization of a User Object'],
          [
            '5895f70cf9fc0f352b528e67',
            'Implement the Serialization of a Passport User',
          ],
          ['5895f70df9fc0f352b528e68', 'Authentication Strategies'],
          ['5895f70df9fc0f352b528e69', 'How to Use Passport Strategies'],
          ['5895f70df9fc0f352b528e6a', 'Create New Middleware'],
          ['5895f70ef9fc0f352b528e6b', 'How to Put a Profile Together'],
          ['58965611f9fc0f352b528e6c', 'Logging a User Out'],
          ['58966a17f9fc0f352b528e6d', 'Registration of New Users'],
          ['58a25c98f9fc0f352b528e7f', 'Hashing Your Passwords'],
          ['589690e6f9fc0f352b528e6e', 'Clean Up Your Project with Modules'],
          [
            '589a69f5f9fc0f352b528e70',
            'Implementation of Social Authentication',
          ],
          [
            '589a69f5f9fc0f352b528e71',
            'Implementation of Social Authentication II',
          ],
          [
            '589a8eb3f9fc0f352b528e72',
            'Implementation of Social Authentication III',
          ],
          ['589fc830f9fc0f352b528e74', 'Set up the Environment'],
          ['589fc831f9fc0f352b528e75', 'Communicate by Emitting'],
          ['589fc831f9fc0f352b528e76', 'Handle a Disconnect'],
          ['589fc831f9fc0f352b528e77', 'Authentication with Socket.IO'],
          ['589fc832f9fc0f352b528e78', 'Announce New Users'],
          ['589fc832f9fc0f352b528e79', 'Send and Display Chat Messages'],
        ],
      },
    ],
  },
];
