const questions = [
    {
        name: 'projectName',
        type: 'input',
        message: 'Whats the name of your project?',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Description of project?',
    },
    {
        name: 'projectType',
        type: 'list',
        choices: ['Web', 'Ecommerce']
    },
    {
        name: 'webProject',
        type: 'list',
        choices: ['Portfolio', 'Brochure'],
        when(pastAnswers) {
            return pastAnswers.projectType === 'Web'
        }
    },
    {
        name: 'ecommProject',
        type: 'list',
        choices: ['Shop', 'Marketplace'],
        when({ projectType }) {
            return projectType === 'Ecommerce'
        }
    }
];

module.exports = {
    questions,
};