const characters = [
    {
        title: 'Ninja',
        emoji: '🥷',
        powers: ['agility', 'stealth', 'aggression'],
    },
    {
        title: 'Sorcerer',
        emoji: '🧙',
        powers: ['magic', 'invisibility', 'necromancy'],
    },
    { 
        title: 'Ogre',
        emoji: '👹',
        powers: ['power', 'stamina', 'shapeshifting'],
    },  
    { 
        title: 'Unicorn',
        emoji: '🦄',
        powers: [ 'flight', 'power', 'purity'],
    }
]

// for (let character of characters){
//     console.log(character)
// }

characters.forEach(function(character, index){
    console.log(index, character.title)


// characters.forEach(function(character){
//     character.powers.forEach(function(power){
//         console.log(power)
//     })
/*
Thử thách:
1. Lồng một vòng forEach để ghi ra mỗi sức mạnh riêng lẻ
   trong mảng sức mạnh của từng nhân vật.
*/
})

