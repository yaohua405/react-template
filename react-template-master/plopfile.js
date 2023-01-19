module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?'
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{pascalCase name}}.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'templates/component.tsx.hbs',
      },
    ],
  }),
  plop.setGenerator('atom', {
    description: 'Create an atom component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your atom name?'
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/atoms/{{pascalCase name}}.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'templates/atom.tsx.hbs',
      },
    ],
	})
	
};