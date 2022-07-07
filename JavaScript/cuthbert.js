const { NlpManager } = require('node-nlp');
const corpus = require('./intents.json');
const manager = new NlpManager({ languages: ['en'], forceNER: true, nlu: { useNoneFeature: true } });

const readline = require("readline");
const consoleInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

manager.load();

consoleInterface.question("Say something: ", function(query) {
    manager.process('en', query.toLowerCase()).then(result => {
        const intent = result.intent;
        if (intent == "None") console.log("Lmao no idea what to say here");
        else {
            const responses = corpus.intents.filter(i => i.tag == intent)[0].responses;
            console.log(getRandomResponse(responses));
        }
    });
});