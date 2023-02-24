let lanCode = prompt('Enter language code: ')

if (lanCode === 'es'){
    document.write( 'Hello World translatd in spanish is: Hola Mundo ');
} else if( lanCode === 'de'){
    document.write( 'Hello World translatd in Dutch is: Hallo Wereld ');
}else if( lanCode === 'en'){
    document.write( 'Hello World translatd in English is: Hello World ');
}else if( lanCode === 'fr'){
    document.write( 'Hello World translated in French is: Bonjour le monde ');
} else {
    document.write('Incorrect selection');
}