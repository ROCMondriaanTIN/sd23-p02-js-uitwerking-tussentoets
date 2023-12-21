console.log("--- Page 4 ---");

const container = document.querySelector('.container');

const education1 = {
    study: 'Software developer',
    level: 'MBO',
    duration: 3
}

const education2 = {
    study: 'Elektrotechniek',
    level: 'MBO',
    duration: 3
}

const education3 = {
    study: 'Schoonheidsspecialiste',
    level: 'MBO',
    duration: 4
}

const education4 = {
    study: 'Kapper',
    level: 'MBO',
    duration: 2
}

const educationArray = [education1, education2, education3, education4];

for (let i = 0; i < educationArray.length; i++) {
    const education = educationArray[i];
    console.log(education);
    const card = createCard(education);
    container.innerHTML += card;
}


/**
 * @description: Deze functie genereert een card
 * @message: parameter om een tekstbericht mee te geven
 **/
function createCard(education) {
    const cardElement = `
        <div class="card">
            <div class="message-box">
                <h2>${education.study}</h2>
                <p>Duur: ${education.duration} jaren</p>
                <p>Niveau: ${education.level}</p>
            </div>
            <div class="avatar">
                <img src="../images/female-avatar.svg" alt="avatar" srcset="" width="40" height="40">
            </div>
        </div>
    `;
    return cardElement;
}