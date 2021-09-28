const generatePassword = (config) => {
    const characters = {
        numbers: '0 1 2 3 4 5 6 7 8 9',
        symbols: '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < > ? /',
        lowercaseLetters: 'a b c d e f g h i j k l m n o p q r s t u v w x y z',
        uppercaseLetters: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'
    }

    let finalCharacters = '';  
    let password = '';

    for(let property in config) {
        if(config[property] === true) {
            finalCharacters += characters[property] + ' ';
        }
    }

    finalCharacters += characters['lowercaseLetters'];

    /* Eliminamos espacios vacios al principio y al final del string con .trim() */
    finalCharacters = finalCharacters.trim(); 

    /* Convertimos el string de caracteres finales en un arreglo con .split() */
    finalCharacters = finalCharacters.split(' ');

    for(let i = 0; i < config.charactersNumber; i++){

        /* Accedemos a una posicion aleatoria en el arreglo y guardamos su valor en password */
        password += finalCharacters[Math.floor(Math.random() * finalCharacters.length)];
    }

    return password;
}

export default generatePassword;
