function wordsTracker(inputArray) {
    const searchWords = inputArray[0].split(" ");
    const wordCounts = {};

    // Initialize word counts
    searchWords.forEach((word) => {
        wordCounts[word] = 0;
    });

    // Count word occurrences
    for (let i = 1; i < inputArray.length; i++) {
        const currentWord = inputArray[i];
        if (wordCounts.hasOwnProperty(currentWord)) {
            wordCounts[currentWord]++;
        }
    }

    // Sort word counts in descending order
    const sortedCounts = Object.entries(wordCounts).sort(([, countA], [, countB]) => countB - countA);

    // Print results
    sortedCounts.forEach(([word, count]) => {
        console.log(`${word} - ${count}`);
    });
}

wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );

wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    );