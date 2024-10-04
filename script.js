window.onload = function() {
    document.getElementById('popup').style.display = 'block';
};

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('game').style.display = 'block';
}

function spreadVirus() {
    alert('Virus is spreading!');
    // Add your game logic here
}
