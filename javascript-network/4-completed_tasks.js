const request = require('request')
const url = 'https://jsonplaceholder.typicode.com/todos'

// Function to compute the number of tasks completed by user ID
function computeCompletedTasksByUser(apiUrl) {
    request.get(apiUrl, (error, response, body) => {
        if (error) {
            console.error('Error:', error);
            return;
        }

        if (response.statusCode !== 200) {
            console.error('Unexpected status code:', response.statusCode);
            return;
        }

        try {
            const todos = JSON.parse(body);
            const completedTasksByUser = {};

            todos.forEach(task => {
                if (task.completed) {
                    if (completedTasksByUser[task.userId]) {
                        completedTasksByUser[task.userId]++;
                    } else {
                        completedTasksByUser[task.userId] = 1;
                    }
                }
            });

            // Print users with completed tasks
            Object.keys(completedTasksByUser).forEach(userId => {
                console.log(`${completedTasksByUser[userId]} `);
            });
        } catch (parseError) {
            console.error('Parse error:', parseError);
        }
    });
}

// Example usage: Compute completed tasks by user ID
computeCompletedTasksByUser('https://jsonplaceholder.typicode.com/todos');
