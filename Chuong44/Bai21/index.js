import mediaData from "./data.js";

function getUniqueTags(data){
    const tags = data.map(podcast => podcast.tags).flat();
    const uniqueTags = {};

    return tags.filter(tag => {

         if(!uniqueTags[tag]){
             uniqueTags[tag] = true;
            return true;
         }
         return false;
    });
}

console.log(getUniqueTags(mediaData));

