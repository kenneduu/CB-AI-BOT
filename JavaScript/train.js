const { NlpManager } = require('node-nlp');
const corpus = require('./intents.json');
const manager = new NlpManager({ languages: ['en'], forceNER: true, nlu: { useNoneFeature: true } });

for (i of corpus.intents) {
    const intent = i.tag;
    for (j of i.patterns) {
        manager.addDocument('en', j, intent);
    }
}
manager.train();