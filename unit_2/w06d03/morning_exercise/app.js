const vowelCheck = (string) => {
    let splitString = string.replace([^\w\s|_]/g, '').split('');
    let stringObject = {};
    const vowels = ['a','e','i','o','u']
    for (let i = 0; i < splitString.length; i++) {
        for (let x = 0; x < vowels.length; x++) {
            if (splitString[i] === vowels[x]) {
                console.log(true);

            } else {
                console.log(false);
            }
        }
    }
}
