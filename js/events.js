console.log("This is separate js file");

// Option 2
function makeRed () {
    document.body.style.backgroundColor = 'Red';
}

// option 3
const makeBlueButton = document.getElementById('make-blue');
        makeBlueButton.onclick = makeBlue;
        function makeBlue() {
            document.body.style.backgroundColor = "blue";
        }

// option 4
const purpleButton = document.getElementById('make-purple');
        purpleButton.onclick = function makePurple() {
            document.body.style.backgroundColor = 'purple';
        }

// option 5

const orangeButton = document.getElementById('make-orange');
orangeButton.addEventListener('click', makeOrange);
function makeOrange () {
    document.body.style.backgroundColor = 'orange';
}