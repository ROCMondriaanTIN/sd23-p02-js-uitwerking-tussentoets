console.log("--- Page 3 ---");

const container = document.querySelector('.container');
const button = document.querySelector('.btn');
const input = document.querySelector('input');

button.addEventListener('click', function(){
    const inputValue = input.value;
    console.log(inputValue);
    const card = createCard(inputValue);
    container.innerHTML += card;
});






/**
 * @description: Deze functie genereert een card
 * @message: parameter om een tekstbericht mee te geven
 **/
function createCard(message) {
    const cardElement = `
        <div class="card">
            <div class="message-box">
                <div class="message-content">${message}</div>
            </div>
            <div class="avatar">
                <img src="../images/female-avatar.svg" alt="avatar" srcset="" width="40" height="40">
            </div>
        </div>
    `;
    return cardElement;
}