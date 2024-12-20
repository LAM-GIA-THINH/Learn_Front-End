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

for (let character of characters){
    for (let power of character.powers){
        console.log(power)
    }
/*
Thử thách:
1. Lồng một vòng lặp for...of bên trong vòng lặp hiện tại để duyệt qua 
   mảng powers của từng nhân vật. Ghi log từng sức mạnh.
*/

}


