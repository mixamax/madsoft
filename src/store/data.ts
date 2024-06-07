import { Tquestion } from "../model/types";

export const questions: Tquestion[] = [
    {
        id: 1,
        type: "textOneAnswer",
        question: "What is React?",
        answers: [
            { id: 1, answer: "A library for managing user interfaces" },
            { id: 2, answer: "A library for server side rendering" },
            { id: 3, answer: "A library for client side rendering" },
        ],
    },
    {
        id: 2,
        type: "selfAnswer",
        question: "What is Document Object Model?",
        answers: [],
    },
    {
        id: 3,
        type: "img",
        src: "./1.jpg",
        question: "What is the value of result?",
        answers: [
            { id: 4, answer: "false" },
            { id: 5, answer: "true" },
        ],
    },
    {
        id: 4,
        type: "text",
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { id: 6, answer: "<js>" },
            { id: 7, answer: "<script>" },
            { id: 8, answer: "<scripting>" },
        ],
    },

    {
        id: 5,
        type: "text",
        question:
            "Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?",
        answers: [
            { id: 9, answer: "unshift()" },
            { id: 10, answer: "sort()" },
            { id: 11, answer: "splice()" },
        ],
    },

    {
        id: 6,
        type: "img",
        src: "./2.jpg",
        question: "What is the value of result?",
        answers: [
            { id: 12, answer: "false" },
            { id: 13, answer: "true" },
        ],
    },

    {
        id: 7,
        type: "img",
        src: "./3.jpg",
        question: "What is the value of result?",
        answers: [
            { id: 14, answer: "6" },
            { id: 15, answer: "5" },
            { id: 16, answer: "0" },
            { id: 17, answer: "15" },
            { id: 18, answer: "4" },
        ],
    },
];
