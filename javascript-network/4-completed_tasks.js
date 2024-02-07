const request = require('request')
const apiURL = 'https://jsonplaceholder.typicode.com/todos'

// Function to compute the number of tasks completed by user ID
function TasksByUser(apiUrl) {
    request.get(apiUrl, (error, response, body) => {
        if (error) {
            console.log('Error:', error);
            return;
        }

        if (response.statusCode !== 200) {
            console.log('Unexpected status code:', response.statusCode);
            return;
        }

        try {
            const todos = JSON.parse(body);
            const completedTasksByUser = {};

            // Using a for loop 
            for (let i = 0; i < todos.length; i++) {
                const task = todos[i];
                if (task.completed) {
                    if (completedTasksByUser[task.userId]) {
                        completedTasksByUser[task.userId]++;
                    } else {
                        completedTasksByUser[task.userId] = 1;
                    }
                }
            }

            // Print users with completed tasks
            Object.keys(completedTasksByUser).forEach(userId => {
                console.log(`${completedTasksByUser[userId]}`);
            });
        } catch (parseError) {
            console.log('Parse error:', parseError);
        }
    });
}
