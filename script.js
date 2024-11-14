//these are the variable prompts//
//Name variable//
let userName = prompt ('What did your parents write as your name on your birth certificate? (In the first and last name boxes)')

//first adjective variable//
let firstAdjective = prompt ('Conceive of a suitable descriptive term')

//body part variable//
let bodyPart = prompt ('Specify an anatomical feature')

//adjective variable//
let secondAdjective = prompt ('Conceive of a suitable descriptive term')

//adjective variable//
let thirdAdjective = prompt ('Conceive of a suitable descriptive term')

//verb variable//
let firstVerb = prompt ('Conjure an appropriate action term')

//animal variable//
let animal = prompt ('Identify a creature from the animal kingdom')

//vehicle variable//
let vehicle = prompt ('Envision a mode of transport')

//verb variable//
let secondVerb = prompt ('Conjure an appropriate action term')

//subject variable//
let schoolClass = prompt ('Conjure an educational subject')

//body part variable//
let secondBodyPart = prompt ('Specify an anatomical feature')

//time variable//
let time = prompt ('Indicate a span of time, i.e. 2 minutes')

//bad location variable//
let place = prompt ('Identify a location that evokes disdain')

//bad adjective variable//
let negAdjecticve = prompt ('Select an adjective that conveys negativity or unfavorable qualities')



//this the story text//
let myStory = `I don't know how I put up with ${userName}. Every single day, they walk around with their ${firstAdjective} 
${bodyPart} held high, acting like they're the ${secondAdjective} gift to this planet. Just hearing their ${thirdAdjective} voice makes 
me want to ${firstVerb}.

Their laugh? It's like listening to a ${animal} getting run over by a ${vehicle}. And don't even get me started on how they ${secondVerb} during ${schoolClass} class. 
It's so annoying, it makes my ${secondBodyPart} twitch.

Every moment with them feels like ${time} in ${place}. Honestly, if there was an award for being the most ${negAdjecticve} person, ${userName} would win it hands down. `
console.log(myStory)
//this connects the story to the id called story//
document.getElementById('story').innerHTML = myStory