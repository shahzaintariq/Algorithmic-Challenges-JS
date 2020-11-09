/*
Description:
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases.

*/

function whoLike(likes){
    switch(likes.length){
        case 0: 
            return "no one likes this"
            break;
        case 1:
            return `${likes[0]} likes this`
            break;
        case 2:
            return `${likes[0]} and ${likes[1]} likes this`
            break;
        case 3: 
            return `${likes[0],likes[1]} and ${likes[2]} likes this` 
            break;
    }

    if(likes.length > 3){
        return `${likes[0]} , ${likes[1]} and ${likes.length - 2} others likes this`
    }
}

console.log(whoLike(["Alex", "Jacob", "Mark", "Max"]));//Alex , Jacob and 2 others likes this