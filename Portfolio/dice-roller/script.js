function tests(){
    const numOfDice = document.getElementById("input-num").value;
    const diceResult = document.getElementById("result");
    const diceImages = document.getElementById("dice-img");

    const values = [];
    const images = [];
    
    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice-image/${value}.svg" />`)
        console.log(values);

    }
    diceResult.textContent = `dice : ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
}