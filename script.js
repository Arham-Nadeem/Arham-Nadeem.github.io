// script.js

// Function to open the resume
function openResume() {
    window.open('A_Nadeem_Resume.pdf', '_blank');
}

function showGames() {
    const projectContent = document.getElementById('project-content');
    projectContent.innerHTML = `
        <li>
        <strong>Connect 4 Game (C++) :</strong>
        <p>Developed a Connect 4 game in C++ incorporating advanced features such as undo and move history functionalities. Utilized linked lists to implement these features, allowing players to revert to previous moves and view the history of plays. Demonstrated expertise in object-oriented programming by designing a dedicated class to manage game state and player moves, and employed efficient algorithms to handle game logic and backtracking mechanisms.</p>
        </li>
        <li>
        <strong>Pong Game (Python) :</strong>
        <p>Created a classic Pong game using Python's Turtle module. Designed and implemented smooth paddle and ball mechanics, score tracking, and dynamic background customization. Demonstrated proficiency in handling real-time user inputs and optimizing game performance to ensure an engaging player experience.</p>
        </li>
        <li>
        <strong>Snake Game (Python) :</strong>
        <p>Developed a classic Snake game using Python's Turtle module. Implemented smooth gameplay mechanics and an engaging user interface, including customizable elements such as caterpillar colors and a dynamic background. Enhanced coding skills by managing game state, handling user inputs, and optimizing performance.</p>
        </li>
    `;
}

function showDataAnalysis() {
    const projectContent = document.getElementById('project-content');
    projectContent.innerHTML = `
        <li>
        <strong>BiasInData Project (Python) :</strong>
        <p>Conducted a comprehensive analysis of the RateMyProfessors review site to detect demographic biases in student evaluations. Implemented file reading and data manipulation techniques to tally reviews based on gender and sentiment. Utilized matplotlib for visualizing trends, generating bar graphs that highlight disparities in ratings. Demonstrated proficiency in data handling, algorithm development, and visualization to assess the validity and reliability of user-generated content.</p>
        </li>
        <li>
        <strong>Ciphers Project (C++) :</strong>
        <p>Developed an encryption and decryption application supporting Caesar and Vigenère ciphers. Utilized functions for character rotation, alphabet indexing, and text processing to implement the ciphers. Demonstrated proficiency in string manipulation, algorithm development, and handling user inputs. The project highlights expertise in implementing cryptographic techniques to secure data and showcases a solid understanding of fundamental encryption methods.</p>
        </li>
    `;
}

function showInteractivePrograms() {
    const projectContent = document.getElementById('project-content');
    projectContent.innerHTML = `
        <li>
        <strong>WordLadder Program (C) :</strong>
        <p>Created a dynamic program to generate word ladders, where each step changes only one letter from the previous word. Utilized user input, dictionary file reading, and character comparison functions to create and validate the word ladder. Demonstrated expertise in string manipulation, file handling, and algorithm development. This project showcases proficiency in problem-solving and the ability to implement complex logic to achieve specific outcomes.</p>
        </li>
        <li>
        <strong>Allstate Insurance Program (Python) :</strong>
        <p>Designed an interactive program for Allstate Insurance to enhance user engagement. The program features a welcoming interface with a custom Allstate logo, allowing users to explore various insurance types. Users can navigate through options for vehicle, pet, and travel insurance, each providing detailed descriptions and price ranges. Additionally, a personalized quiz offers potential discounts based on user responses. Demonstrated skills in user interface design, interactive programming, and personalized user experiences.</p>
        </li>
        <li>
        <strong>PhotoEditor Program (Python) :</strong>
        <p>Created a Photoshop-like application using Python's Turtle module. The program allows users to edit images by providing tools for color picking, drawing, and clearing edits. Features include adjustable pen sizes, a masking tool for selective editing, and a text function for adding custom text. Demonstrated expertise in user interface design, interactive programming, and advanced Turtle graphics to deliver a robust image editing experience.</p>
        </li>
    `;
}

