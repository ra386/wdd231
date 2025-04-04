// Get Copy-symbol
const copy = document.querySelector("#copysymbol");
copy.innerHTML = '©';


  // Get the current year and set it in the footer
  const currentYear = new Date().getFullYear();
  document.querySelector("#currentyear").textContent = currentYear;   


// Get last modified date
const lastmod = document.querySelector("#lastmodified");
lastmod.textContent = `Last Modified: ${document.lastModified}`;




const courses = [
  {
      subject: 'CSE',
      number: 110,
      title: 'Introduction to Programming',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
      technology: [
          'Python'
      ],
      completed: true
  },
  {
      subject: 'WDD',
      number: 130,
      title: 'Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
      technology: [
          'HTML',
          'CSS'
      ],
      completed: true
      
  },
  {
      subject: 'CSE',
      number: 111,
      title: 'Programming with Functions',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
      technology: [
          'Python'
      ],
      completed: true
      
  },
  {
      subject: 'CSE',
      number: 210,
      title: 'Programming with Classes',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
      technology: [
          'C#'
      ],
      completed: true
      
  },
  {
      subject: 'WDD',
      number: 131,
      title: 'Dynamic Web Fundamentals',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
      technology: [
          'HTML',
          'CSS',
          'JavaScript'
      ],
      completed: true
      
  },
  {
      subject: 'WDD',
      number: 231,
      title: 'Frontend Web Development I',
      credits: 2,
      certificate: 'Web and Computer Programming',
      description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
      technology: [
          'HTML',
          'CSS',
          'JavaScript'
      ],
      completed: false
  }
]

function myCourses(filteredCourses) {
    const container = document.querySelector("#cards");
    container.innerHTML = "";

    filteredCourses.forEach(courses => {
        let wallet = document.createElement("div");
        let box = document.createElement("button");
        box.style.width = "90%";
        box.style.height = "50px";
        box.style.color = "black";
        box.style.marginBottom = "10px";
        box.style.marginTop = "20px";
       
        if (courses.completed) {
            box.style.backgroundColor = "#588157"; 
        } else {
            box.style.backgroundColor = "#7f4f24"; 
            box.style.color = "whitesmoke";
        }

        // content of button
        box.textContent = `${courses.subject} ${courses.number}`;
        
        
        wallet.appendChild(box);
        container.appendChild(wallet);
    });

   

}

myCourses(courses);

// Event Listeners to filter

document.querySelector("#tout").addEventListener("click",() => {
    
    myCourses(courses);
})

document.querySelector("#science").addEventListener("click", () => {
    const cse = courses.filter(courses => courses.subject === "CSE");
    myCourses(cse);
});

document.querySelector("#web").addEventListener("click", () => {
    const web = courses.filter(courses => courses.subject === "WDD");
    myCourses(web);
});



const menu = document.querySelector("#navig");
const hamburgerButton = document.querySelector("#ham");

hamburgerButton.addEventListener('click', () => {
    menu.classList.toggle('active'); 
    hamburgerButton.textContent = menu.classList.contains('active') ? '✖' : '☰';
});