function changeMode(size,weight,transform,background,color){
    return function(){
        dom.body.sytle.fontSize = size + 'px';
        dom.body.sytle.fontWeight = weight;
        dom.body.sytle.textTransform = transform;
        dom.body.sytle.backgroundColor = background;
        dom.body.sytle.color = color;

    }
}
function main(){
    const spooky= changeMode(9, bold, uppercase, pink, green);
    const darkMode= changeMode(12, bold, capitalize, black, white);
    const screamMode= changeMode(12, normal, lowercase, white, black);
    
    document.getElementById('spookyButton').addEventListener('click',Spooky);
    document.getElementById('darkModeButton').addEventListener('click',DarkMode);
    document.getElementById('screamModeButton').addEventListener('click',ScreamMode);
}
main();