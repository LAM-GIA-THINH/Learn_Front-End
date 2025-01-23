import podcasts from "./data.js";


function createDescriptionsFor(data){
    return data.map(podcast => {
        const {title, duration, genre, hosts} = podcast;
        return {
            ...podcast,
            description: `${title} is a ${duration} minute ${genre} podcast hosted 
            by ${hosts[0]}.`
        };
    })
        
        
}

console.log(createDescriptionsFor(podcasts))
