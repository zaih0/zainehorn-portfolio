alert("Why are you trying to get excuses.BE BETTER jk accept to enter website")

function generateExcuse() {
    const situation = document.getElementById('situation').value.toLowerCase();

    let catagory;
    if (situation.includes('school') || situation.includes('class') || situation.includes('homework')){
        catagory = 'school';
    } else if (situation.includes('work') || situation.includes('meeting') || situation.includes('boss')) {
        catagory: 'work';
    } else if (situation.includes('family') || situation.includes('kids') || situation.includes('friends')){
        catagory = 'social';
    } else {
        catagory = 'generic';
    }

    const excuses = {
        school: [
            "I was studying all night and overslept.",
            "My dog chewed up my homework.",
            "The bus broke down, and I couldn't get to school in time.",
            "I had a family emergency and couldn't attend class.",
            "Hayden Ate it! 0-0"
        ],
        work: [
            "I got stuck in traffic because of a huge accident.",
            "I had a last minute meeting with a client.",
            "My computer crashed, and I lost my presentation.",
            "I had a sudden health issue and had to see the doctor"
        ],
        family: [
            "My child had a doctor's appointment.",
            "There was a family emergency I had to attend to.",
            "I had to pick up my kid from school unexpectedly",
            "I had to take care of a sick family member."
        ],
        social: [
            "I wasn't feeling well and couldn't make it.",
            "I had a prior engagement that I completely forgot about.",
            "Something came up last minute, and I had to take care of it.",
            "I had an emergency call and hat to bail out."
        ],
        generic: [
            "I was dealing with some personal issues.",
            "Something urgent came up last minute.",
            "I completely lost track of time, my apologies.",
            "I was under a lot of stress and forgot."
        ]
    };

    const catagoryExcuses = excuses[catagory];
    const randomExcuse = catagoryExcuses[Math.floor(Math.random() * catagoryExcuses.length)];
    const excuseOutput = `For the situation: "${situation}", your excuse is: ${randomExcuse}`;
    document.getElementById('excuse').innerHTML = excuseOutput;
}