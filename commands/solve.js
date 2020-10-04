const Equation = require('equations').default; 

module.exports = {
	name: 'solve',
	description: 'Solve math expressions or create equationsfor repeated and complex Math tasks',
	execute(message) {
        message.content = message.content.trim();
        const flag = '!solve';

        if (message.content.startsWith(flag)) {
            const toSolve = message.content.slice(flag.length, message.content.length);

            try {
                const solved = Equation.solve(toSolve);

                message.channel.send(`${solved}`)
            } catch (err) {
                message.channel.send(`Could not solve the equation '${toSolve}'`)
            }
        }
	},
};