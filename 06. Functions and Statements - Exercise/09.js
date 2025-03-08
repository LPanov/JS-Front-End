function loadingBar(number) {
    let loaded = number/10;
    let nonLoaded = 10 - loaded;

    let resultLoaded = '';
    let result = '';

    if (loaded == 10) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else {
        for (let i = 0; i < loaded; i++) {
            resultLoaded += '%';
        } 
        for (let i = 0; i < nonLoaded; i++) {
            result += '.';
        } 

        console.log(number + '% [' + resultLoaded + result + ']');
        console.log('Still loading...');
    }
    
    
}   


loadingBar(30);
loadingBar(50);
loadingBar(100);
