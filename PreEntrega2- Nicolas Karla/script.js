let a;
let personaje= {
    nombre: '',
    vida: 10,
    fuerza: 1
}
let enemigo= {
    vida: 5,
}
let nombre = personaje.nombre
alert ('Bienvenido/a a KING OF DRAGONS ');
juego()
function juego (){
menu()
caracteristicas()
pelea()
}
function menu () { 
    for(let i = 0; i < 3; i++){
        let opcion = prompt ('Elige tu clase de guerrero \n 1-Barbaro \n 2-Mago \n 3-Troll')
        switch(opcion){
            case '1':
                
                alert('sos barbaro');
                return personaje.nombre = 'barbaro'
            case '2':
                
                alert('sos mago');
                return personaje.nombre = 'mago'
            case '3':
                
                alert('sos troll');
                return personaje.nombre = 'troll'
            default:
            'opcion invalida';
    
        }
    }
alert ('me cansaste no vas a poder jugar')
return document.write('fin del juego')
}
function caracteristicas (){
for(let i = 0 ; i < 2 ; i++){
        let fuerzauno = parseInt(prompt(`Muy buena eleccion ${personaje.nombre} Ahora dime, del 1 al 10 que tan fuerte eres?`))
        if (fuerzauno > 10){
            alert('no peques de ego guerrero que te puede ir muy mal')
    }else if (fuerzauno <= 10){
        alert('Bueno, tu fuerza es de ' + fuerzauno + ' ya la mejoraras a lo largo de tu aventura')
        return personaje.fuerza = fuerzauno
        
    }
    
    }
    alert('por creido has muerto')
}
function pelea(){
    alert('Bueno... creo que vas a tener tu primera pelea')
    while(personaje.vida>0 && enemigo.vida>0){
        let opcion = prompt('el enemigo tiene '+ enemigo.vida+' de vida,que quieres hacer?\n 1-Atacar\n2-Hacerte amigo')
        if(opcion==1){
            enemigo.vida --
            alert('ahora la vida del enemigo es '+ enemigo.vida)
        }else if(opcion==2){
            if(personaje.fuerza>=7){
                alert('no hay porque pelear, el no te ha hecho nada!!!')
            }else if(personaje.fuerza<7){
                personaje.vida--
                alert('el enemigo te ataco de inprovisto, tu vida ahora es de '+personaje.vida)
            }
        }
    }
}