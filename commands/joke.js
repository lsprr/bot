const fetch = require('node-fetch');

module.exports = {
    name: 'joke',
    description: 'Random joke',
    async execute(message) {
        const getJoke = async () => {
            const result = await fetch('https://official-joke-api.appspot.com/random_joke')
            const json = await result.json()
            return json
        }
        const joke = await getJoke()
        message.channel.send(`${joke.setup}... ${joke.punchline}`)
    }
}