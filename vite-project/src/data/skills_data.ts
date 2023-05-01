
import Code from "../static/skills/code.png"
import Aws from "../static/skills/aws.png"
import Agile from "../static/skills/agile.png"

interface Skill {
    title: string,
    body: string,
    img: string
}

export const skills: Array<Skill> = [
    {
        title: "Coding Bootcamp Graduate",
        body: "Coding Dojo Software Development Bootcamp Allumni. 14 Weeks, 2 Weeks Web Fundamentals, 4 Weeks of Python Full Stack Development with Flask Framework and MySQL database. 4 Weeks of MERN Development MongDB, Express.js, React, Node.js. 4 Weeks of .Net Core Development. 8 hour days with more work after class, coding average 50 hours per week",
        img: Code
    },
    {
        title: "AWS Cloud Practitioner",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quas necessitatibus, obcaecati officia qui minima. Voluptate ullam at quisquam. Repellat dicta ipsum inventore perspiciatis ratione dolore recusandae architecto tempore praesentium.",
        img: Aws
    },
    {
        title: "Agile Methodology",
        body: "Working with other developers following the Agile Methodology. ",
        img: Agile
    }
]
