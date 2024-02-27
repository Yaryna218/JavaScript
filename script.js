function triangle(element1, type1, element2, type2) {
    console.log(`triangle(${element1}, "${type1}", ${element2}, "${type2}")`);

    const validTypes = ['leg', 'hypotenuse', 'opposite angle','adjacent angle', 'angle'];
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log('Помилка: Неправильний тип елементу. Перевірте інструкцію.');
        return 'failed';
    }

    // Перевірка на некоректність уведених значень
    if (element1 <= 0 || element2 <= 0) {
        console.log('Помилка: Значення мають бути додатні.Перевірте інструкцію.');
        return 'failed';
    }
   if(element1==='opposite angle'|| element1==='adjacent angle'||element2==='opposite angle'|| element2==='adjacent angle'||element1==='angle'||element2==='angle'&& element1>90 ||element2>90){
    console.log('Помилка:Кут не є гострим або значення є від"ємним.');
    return 'failed';
   }
    if (type1 === 'leg' && type2 === 'leg') {
        
        const hypotenuse = Math.sqrt(element1**2 + element2**2);
        const adjacentAngle = Math.atan(element1/element2) * (180/Math.PI);
        const oppositeAngle = Math.atan(element2/element1) * (180/Math.PI);
        console.log(`а = ${element1}`),
        console.log(`b = ${element2}`),
        console.log(`c = ${hypotenuse}`);
        console.log(`alpha = ${adjacentAngle}°`), 
        console.log(`beta = ${oppositeAngle}°`);
       
    } else if (type1 === 'leg' && type2 === 'hypotenuse') {
        const Leg = Math.sqrt(element2**2 - element1**2);
        const adjacentAngle= Math.atan(element1/element2) * (180/Math.PI);
        const oppositeAngle = Math.atan(element2/element1) * (180/Math.PI);
        console.log(`a = ${element1}`),
        console.log(`b = ${Leg}`),
        console.log(`c = ${element2}`);
        console.log(`alpha = ${adjacentAngle}°`),
        console.log(`beta = ${oppositeAngle}°`);
    } else if (type1  === 'leg' && type2 === 'adjacent angle') {
        const hypotenuse = element1/Math.cos(element2*(Math.PI / 180));
        const leg1 = element1*Math.tan(element2* (180/Math.PI)) ;
        const oppositeAngle = 90 - element2;
        console.log(`a = ${leg1}`),
        console.log(`b = ${element1}`), 
        console.log(`c= ${hypotenuse}`);
        console.log(`alpha = ${element2}°`),
        console.log(`beta ${oppositeAngle}°`);
        
    
    }else if(type1==='leg'&& type2==='opposite angle'){
        const hypotenuse = element1/Math.sin(element2*(Math.PI / 180));
        const leg = element1*Math.tan(element2* (180/Math.PI)) ;
        const oppositeAngle = 90 - element2;
        console.log(`a = ${leg}`),
        console.log(`b = ${element1}`), 
        console.log(`c= ${hypotenuse}`);
        console.log(`alpha = ${element2}°`),
        console.log(`beta ${oppositeAngle}°`);
    }else if (type1 === 'hypotenuse' && type2 === 'angle') {
        const alpha=90-element2;
        const leg = element1*Math.sin(element2);
        const leg1 = element1*Math.cos(element2);

        console.log(`a = ${leg}`),
        console.log(`b = ${leg1}`) ,
        console.log(`c = ${element1}`);
        console.log(`alpha= ${element2}°`),
        console.log(`beta= ${alpha}°`) ; 
        
    }   
    console.log("success");

}
triangle(3, 'leg', 4, 'leg');
triangle(3, 'leg', 4, 'hypotenuse');
triangle(3, 'leg', 76, 'adjacent angle');
triangle(3, 'hypotenuse', 20, 'angle');
