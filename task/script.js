/*
 * Complete the 'possibleChanges' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY usernames as parameter.
 */

function possibleChanges(usernames) {
    // Write your code here
    //use usernames are limit values for users and this function changes the one swap alphabetical order and return string if swapping alphabetical order is correct and small then print yes else no in the returning array 


    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const usernamesCount = parseInt(readLine().trim(), 10);

    let usernames = [];

    for (let i = 0; i < usernamesCount; i++) {
        const usernamesItem = readLine();
        usernames.push(usernamesItem);
    }

    const result = possibleChanges(usernames);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
