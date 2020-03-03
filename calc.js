var Level = document.getElementById("Level").value,
Strength = document.getElementById("Strength").value,
Power = document.getElementById("Power").value,
Defense = document.getElementById("Defense").value,
Magic = document.getElementById("Magic").value,
Mdef = document.getElementById("Mdef").value,
Vit = document.getElementById("Vit").value,
Dex = document.getElementById("Dex").value,
ELevel = document.getElementById("ELevel").value,
EStrength = document.getElementById("EStrength").value,
EPower = document.getElementById("EPower").value,
EDefense = document.getElementById("EDefense").value,
EMagic = document.getElementById("EMagic").value,
EMdef = document.getElementById("EMdef").value,
EVit = document.getElementById("EVit").value,
EDex = document.getElementById("EDex").value,
randomNumber = (Math.floor((Math.random()*271)+240)/100);
ErandomNumber = (Math.floor((Math.random()*271)+240)/100);

// below here does not work
function damageCalc() {
    var Level = document.getElementById("Level").value,
Strength = document.getElementById("Strength").value,
Power = document.getElementById("Power").value,
Defense = document.getElementById("Defense").value,
Magic = document.getElementById("Magic").value,
Mdef = document.getElementById("Mdef").value,
Vit = document.getElementById("Vit").value,
Dex = document.getElementById("Dex").value,
ELevel = document.getElementById("ELevel").value,
EStrength = document.getElementById("EStrength").value,
EPower = document.getElementById("EPower").value,
EDefense = document.getElementById("EDefense").value,
EMagic = document.getElementById("EMagic").value,
EMdef = document.getElementById("EMdef").value,
EVit = document.getElementById("EVit").value,
EDex = document.getElementById("EDex").value,
randomNumber = (Math.floor((Math.random()*171)+140)/100);
ErandomNumber = (Math.floor((Math.random()*171)+140)/100);
    Redux = EDefense/10;
    dam = Math.round(((Power/10)*(Strength)*randomNumber));
    ans = dam-((dam/100)*Redux);
    return ans;
};

function EdamageCalc() {

    var Level = document.getElementById("Level").value,
Strength = document.getElementById("Strength").value,
Power = document.getElementById("Power").value,
Defense = document.getElementById("Defense").value,
Magic = document.getElementById("Magic").value,
Mdef = document.getElementById("Mdef").value,
Vit = document.getElementById("Vit").value,
Dex = document.getElementById("Dex").value,
ELevel = document.getElementById("ELevel").value,
EStrength = document.getElementById("EStrength").value,
EPower = document.getElementById("EPower").value,
EDefense = document.getElementById("EDefense").value,
EMagic = document.getElementById("EMagic").value,
EMdef = document.getElementById("EMdef").value,
EVit = document.getElementById("EVit").value,
EDex = document.getElementById("EDex").value,
randomNumber = (Math.floor((Math.random()*271)+240)/100);
ErandomNumber = (Math.floor((Math.random()*271)+240)/100);
Redux = Defense/10;
    dam = Math.round((EPower/10)*(EStrength)*ErandomNumber);
    ans = dam-((dam/100)*Redux);
    return ans;
};


function damageCalcMagic() {

    var Level = document.getElementById("Level").value,
Strength = document.getElementById("Strength").value,
Power = document.getElementById("Power").value,
Defense = document.getElementById("Defense").value,
Magic = document.getElementById("Magic").value,
Mdef = document.getElementById("Mdef").value,
Vit = document.getElementById("Vit").value,
Dex = document.getElementById("Dex").value,
ELevel = document.getElementById("ELevel").value,
EStrength = document.getElementById("EStrength").value,
EPower = document.getElementById("EPower").value,
EDefense = document.getElementById("EDefense").value,
EMagic = document.getElementById("EMagic").value,
EMdef = document.getElementById("EMdef").value,
EVit = document.getElementById("EVit").value,
EDex = document.getElementById("EDex").value,
randomNumber = (Math.floor((Math.random()*271)+240)/100);
ErandomNumber = (Math.floor((Math.random()*271)+240)/100);

Redux = EMdef/10;
    dam = Math.round((Power/10)*(Magic)*randomNumber);
    ans = dam-((dam/100)*Redux);
    return ans;
};


function EdamageCalcMagic() {

    var Level = document.getElementById("Level").value,
Strength = document.getElementById("Strength").value,
Power = document.getElementById("Power").value,
Defense = document.getElementById("Defense").value,
Magic = document.getElementById("Magic").value,
Mdef = document.getElementById("Mdef").value,
Vit = document.getElementById("Vit").value,
Dex = document.getElementById("Dex").value,
ELevel = document.getElementById("ELevel").value,
EStrength = document.getElementById("EStrength").value,
EPower = document.getElementById("EPower").value,
EDefense = document.getElementById("EDefense").value,
EMagic = document.getElementById("EMagic").value,
EMdef = document.getElementById("EMdef").value,
EVit = document.getElementById("EVit").value,
EDex = document.getElementById("EDex").value,
randomNumber = (Math.floor((Math.random()*271)+240)/100);
ErandomNumber = (Math.floor((Math.random()*271)+240)/100);

Redux = Mdef/10;
    dam = Math.round((EPower/10)*(EMagic)*ErandomNumber);
    ans = dam-((dam/100)*Redux);
    return ans;
};

function Damage() {
    var answer = Math.floor(damageCalc());
    document.getElementById("answer").innerHTML =answer;
};

function EDamage() {
    var Eanswer = Math.floor(EdamageCalc());
    document.getElementById("Eanswer").innerHTML =Eanswer;
};

function DamageMagic() {
    var rrr = Math.floor(damageCalcMagic());
    document.getElementById("MDam").innerHTML =rrr;
};

function EDamageMagic() {
    var rrr = Math.floor(EdamageCalcMagic());
    document.getElementById("EMDam").innerHTML =rrr;
};

function HP() {

    var Level = document.getElementById("Level").value,
Strength = document.getElementById("Strength").value,
Power = document.getElementById("Power").value,
Defense = document.getElementById("Defense").value,
Magic = document.getElementById("Magic").value,
Mdef = document.getElementById("Mdef").value,
Vit = document.getElementById("Vit").value,
Dex = document.getElementById("Dex").value,
ELevel = document.getElementById("ELevel").value,
EStrength = document.getElementById("EStrength").value,
EPower = document.getElementById("EPower").value,
EDefense = document.getElementById("EDefense").value,
EMagic = document.getElementById("EMagic").value,
EMdef = document.getElementById("EMdef").value,
EVit = document.getElementById("EVit").value,
EDex = document.getElementById("EDex").value,
randomNumber = (Math.floor((Math.random()*271)+240)/100);
ErandomNumber = (Math.floor((Math.random()*271)+240)/100);

    var HP = Math.floor((Level*10)+(Vit*14.5)+100);
    document.getElementById("Health").innerHTML =HP;
};

function EHP() {

    var Level = document.getElementById("Level").value,
Strength = document.getElementById("Strength").value,
Power = document.getElementById("Power").value,
Defense = document.getElementById("Defense").value,
Magic = document.getElementById("Magic").value,
Mdef = document.getElementById("Mdef").value,
Vit = document.getElementById("Vit").value,
Dex = document.getElementById("Dex").value,
ELevel = document.getElementById("ELevel").value,
EStrength = document.getElementById("EStrength").value,
EPower = document.getElementById("EPower").value,
EDefense = document.getElementById("EDefense").value,
EMagic = document.getElementById("EMagic").value,
EMdef = document.getElementById("EMdef").value,
EVit = document.getElementById("EVit").value,
EDex = document.getElementById("EDex").value,
randomNumber = (Math.floor((Math.random()*271)+240)/100);
ErandomNumber = (Math.floor((Math.random()*271)+240)/100);


    var EHP = Math.floor((ELevel*10)+(EVit*14.5)+100);
    document.getElementById("EHealth").innerHTML =EHP;
};

function Crit() {
    var Dex = document.getElementById("Dex").value
    var criticalHit = Math.floor((Math.random() * 15) + 1);
    var crit = Math.floor(criticalHit+(Dex/10));
    document.getElementById("logCrit").innerHTML =crit + '%';
};

function ECrit() {
    var EDex = document.getElementById("EDex").value
    var EcriticalHit = Math.floor((Math.random() * 15) + 1);
    var Ecrit = Math.floor(EcriticalHit+(EDex/10));
    document.getElementById("ElogCrit").innerHTML =Ecrit + '%';
};

document.getElementById("calculate").onclick = function(){
    HP();
    Damage();
    Crit();
    DamageMagic();
    EHP();
    ECrit();
    EDamage();
    EDamageMagic();
};

// hp
// 100 + (level * 10) + (vit *14.5) {basic, change on class?}

// Mp
// (level * 5) + (mag * 8)

// str
// Increases Physical Attack: 1 point = 2.62 P.Att
// Increases Double-Attack rate: 1 point = 0.05~ Double Att Rate
// Diminishing return on Double Att Rate.
// Increases Critical Damage: 1 point = 0.3334% Crit Dmg
// Increases Physical Defense Piercing: 1 point = 0.03% P.Def Pierce

// dex
// Increases ranged Physical Attack: 1 point = 2.62 P.Att (nah)
// Increase Critcal Rate: 1 points = 0.05~ Crit Rate (or 0.1~ for DG and RM) (higher for rouges?)
// Diminishing return on Crit Rate.
// Reduces Cooldown Time: 1 point = 0.04% CD reduction (dex?)
// Reduces cast time?
// Increases Hit Rate: 1 point = 0.1 Hit Rate (by moving faster)
// Increase Dodge Rate: 1 point = 0.05 Dodge (by moving faster)

// mag
// Increases Magic Attack: 1 point = 3.28 M.Att (nah)
// Increase Heal Rate: 1 point = 6.9 Heal Rate (nah)
// 0.075% if INT is from equipment, blue stats, or enchantments. (???)
// Increases Magical Defense Piercing: 1 point = 0.03 M.Def Pierce
// Increases Maximum MP: 1 point = 27.5 MP (mag)
// Increases MP Recovery: 1 point = 3 MP Recovery (mag)

// vit
// Increases Maximum HP: 1 point = 27.5 HP (14.5?)
// Increases HP Recovery: 1 point = 3 HP Recovery (0.1hp?)
// Increases Critical Resistance: 1 point = 0.1 Crit Resist
// Increases Perfect Critical Resistance: 1 point = 0.04 P.Crit Resist
// Increases Abnormal Status Resistance: 1 point = 0.1 ASR (vit)

// ??
// Increases Skill Attack Max: 1 point = 5.24 SAM


// First 
//     Dam = Math.round(((Power)*(Strength/defence)*randomNumber));
//  Secound 
//     randomNumber = (Math.floor((Math.random()*171)+140)/100);
//     ErandomNumber = (Math.floor((Math.random()*171)+140)/100);
//     Redux = EDefense/10;
//     dam = Math.round(((Power/10)*(Strength)*randomNumber));
//     ans = dam-((dam/100)*Redux);
//     return ans;
// Third 
//     (Power*randomNumber*Strength)/Defense