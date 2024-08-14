const alphabets = document.querySelector(".alphabets")
const word = document.querySelector(".word")
const animation = document.querySelector(".animation")
const gameover = document.querySelector(".gameover")
const hint = document.querySelector(".hint")
const won = document.querySelector(".won")

// functions
let showWord = function(){
    word.innerHTML = ``
    for(i = 0; i < user_word.length; i++){
        word.innerHTML += `<div class="alphabet">${user_word[i]}</div>`
    }
}
let checkWon = function(){
    var counter = 0
    for(i = 0; i < user_word.length; i++){
        if(user_word[i] != "_"){counter++}
    }
    console.log(counter)
    if(counter < user_word.length){
        return false
    }else{
        return true
    }
}

var chance = 0
var flag = true

// create keyboard
for(i = 0; i < 26; i++){
    alphabets.innerHTML += `<div class="alphabet">${String.fromCharCode(i + 65)}</div>`
}

// words
const words = [
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height."
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive."
    },
]

randomIndex = Math.floor(Math.random() * words.length)
const pickedWord = words[randomIndex].word

gameover.innerHTML += `<div class="forUser">${pickedWord}</div>`

// create an array for showing to user
var user_word = []
for(i = 0; i < pickedWord.length; i++){
    user_word.push("_")
}
hint.innerHTML = words[randomIndex].hint

// alert(pickedWord)

showWord()
const btn = document.querySelectorAll(".alphabets .alphabet")
for(i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function(e){
        if(chance >= 5){
            gameover.style.display = "flex"
        }
        
        for(i = 0; i < pickedWord.length; i++){
            if(pickedWord[i] == (e.target.innerHTML).toLowerCase()){
                if(user_word[i] == (e.target.innerHTML).toLowerCase()){
                    continue
                }
                user_word[i] = (e.target.innerHTML).toLowerCase()
                showWord()
                flag = false
            }
            
        }
        if(flag){
            chance += 1
            animation.innerHTML = `<img src="./images/${chance}.jpg" alt="">`
        }
        flag=true
        if(checkWon()){
            won.style.display = "flex"
        }
        
    })
}