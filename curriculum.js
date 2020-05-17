'use strict'

/**
 * My informations about my knoledges, skills, carrier, etc...
*/
function myCurriculum() {
    const fullName = 'Felipe Alves da Silva'
    const age = 22
    const objectives = ['Front-end Engineer', 'Fullstack Engineer']
    const resume = `
        I'm a softare consultant, focused and enthusiast about web technologies, and always 
        looking for them, learning the latest frameworks and libraries. A Front-end developer
        always willing for new challenges and new knowledges, getting ready to build web solutions 
        focusing to solve some problems or something totally new in our world.
    `
    const technologies = {
        languages: [
            'JavaScript',
            'Typescript',
            'Python',
            'C#',
            'Java'
        ],
        libraries: [
            'ReactJs Ecosystem',
            'Chart.js',
            'Webpack',
            'Ember.js',
            'Brain.js'
        ],
        frameworks: [
            'Angular',
            'GraphQL',
            'Jest',
            'Apollo GraphQL',
            'MongoDB',
            'Redux',
            'React Testing Library',
            'Enzyme'
        ]
    }
    const skills = [
        'Team Work',
        'Self-Taught',
        'Communicative',
        'Organization',
        'Design Patterns',
        'Clean Code'
    ]
    const knowledges = [
        'React Hooks',
        'GIT',
        'MVC',
        'es6',
        'Scrum',
        'REST',
        'Microservices',
        'Docker',
        'TDD'
    ]
    const courses = {
        finished: [
            {
                course: 'Advanced Teachings with JavaScript - OO with es6',
                platform: 'Alura Courses'
            },
            {
                course: 'Testing React Applications using Jest framework',
                platform: 'Pluralsight'
            },
            {
                course: 'Omnistack week 11.0 - (NodeJs, ReactJs and React Native)',
                platform: 'Rocketseat'
            }
        ],
        inProgress: [
            {
                course: 'Microservices with Node JS and React',
                platform: 'Udemy Courses'
            },
            {
                course: 'Docker and Kubernetes: The Complete Guide',
                platform: 'Udemy Courses'
            }
        ]
    }
}
module.exports = myCurriculum