function load() {
    var link1 = document.getElementById('link1');
    var link2 = document.getElementById('link2');
    var link3 = document.getElementById('link3');

    var border = document.getElementsByTagName('header')[0]

    // Styles 
    setTimeout(function() {
        border.style.borderBottom = '2px solid var(--cor2)';
        border.style.transitionDuration = '.8s';
    }, 1000);

    setTimeout(function() {
        link1.style.font = 'normal normal 27px var(--fonte3)';
        link1.style.color = 'var(--cor3)';
        link1.style.transitionDuration = '.3s';
        setTimeout(function() {
            link1.style.font = '';
            link1.style.color = '';
        }, 1600);
    }, 1000);
    setTimeout(function() {
        link2.style.font = 'normal normal 27px var(--fonte3)';
        link2.style.color = 'var(--cor3)';
        link2.style.transitionDuration = '.3s';
        setTimeout(function() {
            link2.style.font = '';
            link2.style.color = '';
        }, 1600);
    }, 2500);
    setTimeout(function() {
        link3.style.font = 'normal normal 27px var(--fonte3)';
        link3.style.color = 'var(--cor3)';
        link3.style.transitionDuration = '.3s';
        setTimeout(function() {
            link3.style.font = '';
            link3.style.color = '';
        }, 2000);
    }, 4000);
};