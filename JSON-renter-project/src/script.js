const projects = [
    {
        id: 1,
        title: "Create and style simple mark-up language",
        tools: "Languages & Tools: HTML, CSS, VS Code",
        description: "The objective of this project is to assess my knowledge and performance to design, create and save basic mark-up language documents and cascading style sheets (CSS) to define and style a website. This is my first webiste proejct.",
        code: "https://github.com/bestryan/Sorrento_project_tafe",
        demo: "https://bestryan.github.io/Sorrento_project_tafe/",
        photo: "../public/web_proj.png"
    },
    {
        id: 2,
        title: "Java code challenge - read weather data, export csv file & arraylist manipulate",
        tools: "Languages & Tools: Java & IDE",
        description: "The objective of this project is to assess my skills required to perform coding, testing and debugging activities in Java. Task one read any given day's observations, calculates rolling averages temperature, dew point, humidity and wind Speed. Write new record to a csv file. Task two declare an array to perform insertion algorithms, random access algorithms, deletion algorithms, sequential access algorithm and binary search algorithm.",
        code: "https://github.com/bestryan/Java_code_challenges",
        demo: "#",
        photo: "../public/web_proj.png"
    },
    {
        id: 3,
        title: "Mastermind - simple game with Java",
        tools: "Languages & Tools: Java & IDE",
        description: "This simple Mastermind number guess game build with Java. The computer will think of 4 secret numbers. You try to guess what numbers are in the code and what order they are in. After making a guess the result will be displayed. Every time you make a guess you get feedback. If you have guessed the right number in the right place you get a Sun. If you have guessed the right number in the wrong place you get a Moon If you have guessed the wrong number you get no feedback.",
        code: "https://github.com/bestryan/Mastermind",
        demo: "",
        photo: "../public/web_proj.png"
    }
]

const myContent = document.querySelector(".Content")

const showInHtml = projects.map((project) => {
    return `
        <div class="proj_text_box w-[580px]">
            <h2 class="text-xl font-bold">${project.title}</h2>
            <h3 class="font-bold">${project.tools}</h3>
            <p>${project.description}</p>
            <div class="launch">
                <a href=${project.code} target="_blank"><h4 class="font-semibold">Code</h4></a>
                <a href=${project.code} target="_blank"><img src="../public/code_icon.svg"></a>
                <a href=${project.demo} target="_blank"><h4 class="demo font-semibold">Live Demo</h4></a>
                <a href=${project.demo} target="_blank"><img src="../public/launch_icon.svg"></a>
            </div>
            <img class="py-4" src=${project.photo} alt="img"/>
        </div>
    `
}).join('');

myContent.innerHTML = showInHtml;