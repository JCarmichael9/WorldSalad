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
let firstVerb = prompt ('Conjure an appropriate action term. Present tense not ending in -ing i.e. run')

//animal variable//
let animal = prompt ('Identify a creature from the animal kingdom')

//vehicle variable//
let vehicle = prompt ('Envision a mode of transport')

//verb variable//
let secondVerb = prompt ('Conjure an appropriate action term. Present tense not ending in -ing i.e. run')

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
let myStory = `I don't know how I put up with <b>${userName}</b>. Every single day, they walk around with their <b>${firstAdjective}</b> 
<b>${bodyPart}</b> held high, acting like they're the <b>${secondAdjective}</b> gift to this planet. Just hearing their <b>${thirdAdjective}</b> voice makes 
me want to <b>${firstVerb}</b>.

Their laugh? It's like listening to a <b>${animal}</b> getting run over by a <b>${vehicle}</b>. And don't even get me started on how they <b>${secondVerb}</b> during 
<b>${schoolClass}</b> class. It's so annoying, it makes my <b>${secondBodyPart}</b> twitch.

Every moment with them feels like <b>${time}</b> in <b>${place}</b>. Honestly, if there was an award for being the most <b>${negAdjecticve}</b> person, <b>${userName}</b>
 would win it hands down.`
console.log(myStory)
//this connects the story to the id called story//
document.getElementById('story').innerHTML = myStory