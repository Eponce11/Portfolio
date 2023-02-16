
import Html from "../static/technologies/html.svg"
import Css from "../static/technologies/css.svg"
import Javascript from "../static/technologies/javascript.svg"
import Typescript from "../static/technologies/typescript.svg"
import Csharp from "../static/technologies/Csharp.svg"
import Python from "../static/technologies/python.svg"

import React from "../static/technologies/react.svg"
import Nodejs from "../static/technologies/nodejs.svg"
import Expressjs from "../static/technologies/expressjs.svg"
import Flask from "../static/technologies/flask.svg"
import Netcore from "../static/technologies/netcore.svg"
import Mongoose from "../static/technologies/mongoose.svg"
import EntityFramework from "../static/technologies/entityframework.jpg"
import Redux from "../static/technologies/redux.svg"
import Tailwind from "../static/technologies/tailwind.svg"

import Postman from "../static/technologies/postman.png"
import Figma from "../static/technologies/figma.svg"
import Vscode from "../static/technologies/vscode.svg"

import Mysql from "../static/technologies/mysql.svg"
import Mongodb from "../static/technologies/mongodb.svg"

import Git from "../static/technologies/git.svg"
import Github from "../static/technologies/github.svg"

import Jest from "../static/technologies/jest.svg"

interface Technology {
    name: string,
    img: string
}

export const languages: Array<Technology> = [
    {
        name: "HTML",
        img: Html
    },
    {
        name: "CSS",
        img: Css
    },
    {
        name: "JS",
        img: Javascript
    },
    {
        name: "TS",
        img: Typescript
    },
    {
        name: "C#",
        img: Csharp
    },
    {
        name: "PY",
        img: Python
    }
]

export const frameworks: Array<Technology> = [
    {
        name: "React",
        img: React
    },
    {
        name: "NodeJS",
        img: Nodejs
    },
    {
        name: "ExpressJS",
        img: Expressjs
    },
    {
        name: "ASP.NET Core",
        img: Netcore
    },
    {
        name: "Entity Framework ORM",
        img: EntityFramework
    },
    {
        name: "Flask",
        img: Flask
    },
    {
        name: "Mongoose ODM",
        img: Mongoose
    },
    {
        name: "Redux Toolkit",
        img: Redux
    },
    {
        name: "Tailwind",
        img: Tailwind
    }
]

export const others: Array<Technology> = [
    {
        name: "Postman",
        img: Postman
    },
    {
        name: "Figma",
        img: Figma
    },
    {
        name: "VSCode",
        img: Vscode
    },
    {
        name: "VSCode",
        img: Html
    },
    {
        name: "VSCode",
        img: Html
    }
]

export const databases: Array<Technology> = [
    {
        name: "MySQL",
        img: Mysql
    },
    {
        name: "Mongo",
        img: Mongodb
    }
]

export const versionControl: Array<Technology> = [
    {
        name: "Git",
        img: Git
    },
    {
        name: "Github",
        img: Github
    }
]

export const tests: Array<Technology> = [
    {
        name: "Jest",
        img: Jest
    }
]








