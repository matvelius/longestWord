var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var lineIndex = 0
var inputStringLength = 0


rl.on('line', function (line) {
    // console.log('current line: ', line)
    // console.log('current lineIndex: ', lineIndex)
    if (lineIndex == 0) { // 1st line: # of days

        inputStringLength = parseInt(line)

    } else {

        const inputString = line.trim().split(' ')

        if (inputStringLength == 1) {
            console.log(inputString)
            console.log(1)
            rl.close()
            return
        }

        var longestWord = inputString[0]
        var longestWordLength = longestWord.length

        inputString.forEach(word => {
            if (word.length > longestWordLength) {
                longestWord = word
                longestWordLength = word.length
            }
        })

        console.log(longestWord)
        console.log(longestWordLength)

        rl.close()

    }
    lineIndex += 1
})