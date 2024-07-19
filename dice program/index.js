function rollDice (){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceResult2 = document.getElementById("diceResult2");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    let total = 0;
    Number(total);

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6)+1;
        values.push(value);
        total += value;
        console.log(total);
        images.push(`<img src="images/${value}.png">`);
    }
    

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceResult2.textContent = "Total: "+ total;
    diceImages.innerHTML = images.join('');
}