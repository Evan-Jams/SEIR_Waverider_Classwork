const findWordFrequencies = (string) => {
    let words = string.split(' ')
    // console.log(words);
    let newObjects = {};
    for (let i = 0; i < words.length; i++){
        let freq = 0;
        for (let x = 0; x < words.length; x++) {
            if(words[i] === words[x]){
                freq++
            }
        }
        let key = words[i]
        {newObjects[key] = freq}
    }
    console.log(newObjects);
    return newObjects
}

findWordFrequencies('the the cat kept jumping at my face')
