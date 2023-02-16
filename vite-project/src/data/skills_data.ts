
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
        title: "Full Stack Software Developer",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quas necessitatibus, obcaecati officia qui minima. Voluptate ullam at quisquam. Repellat dicta ipsum inventore perspiciatis ratione dolore recusandae architecto tempore praesentium.",
        img: Code
    },
    {
        title: "AWS Cloud Practitioner",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quas necessitatibus, obcaecati officia qui minima. Voluptate ullam at quisquam. Repellat dicta ipsum inventore perspiciatis ratione dolore recusandae architecto tempore praesentium.",
        img: Aws
    },
    {
        title: "Agile Methodology",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quas necessitatibus, obcaecati officia qui minima. Voluptate ullam at quisquam. Repellat dicta ipsum inventore perspiciatis ratione dolore recusandae architecto tempore praesentium.",
        img: Agile
    }
]