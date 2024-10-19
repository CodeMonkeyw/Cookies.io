let score = 0;
let upgrades = 0;
let upgradeCost = 10;
const scoreDisplay = document.getElementById('zero');

const ClickButton = document.getElementById('upgrades');
const upgradesDisplay = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');


ClickButton.addEventListener('click',() =>{
score += pointsPerClick;
updateDisplay();

});

upgradeButton.addEventListener('click',()=>{
 if(score >= upgradeCost){
    score -= upgradeCost;
    upgrades += 1;
    pointsPerClick += 1
    upgradeCost = Math.floor(upgradeCost *1.5)
    upgradesDisplay();
    upgradeButton.innerText = `Upgrade (Cost: ${upgradeCost})`;
 }
});

function updateDisplay(){
    scoreDisplay.innerText = `Score: ${score};`
    upgradesDisplay.innerText = ` Upgrades ${upgrades}`
}