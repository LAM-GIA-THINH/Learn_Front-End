
const anagrams = [
    "moz biblical torchbearers",  
    "it's razorbill beachcomber", 
    "och mcrobbie trailblazers", 
    "bib chorizo cellarmaster", 
    "thor scribble carbimazole", 
    "zilla borscht abercrombie", 
    "brazil scorcher batmobile", 
    "dame shelburne characterizing", 
    "uber englishman characterized", 
    "agnes rhumbline characterized", 
    "rehab scrutinized charlemagne", 
    "dreams zurich interchangeable", 
    "bam hamster technocratic", 
    "mechatronic masterbatch", 
    "bam ratchet mechatronics"
]

function sortPhrase(phrase){
    return phrase.toLowerCase().split('').sort().join('').trim();
}

function isAnagramInArray(anagram, arr){
    return arr.filter(item => {
        const word1 = sortPhrase(anagram);
        const word2 = sortPhrase(item);
        
        return word1 === word2;
    })
}

console.log(isAnagramInArray("Tom Teacher", anagrams));
//console.log(isAnagramInArray("treat", ["tater", "tree", "teart", "tetra", "heart", "hamster"]))
