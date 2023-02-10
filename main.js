function generateCss() {
    let textWindow = document.querySelector('.window_text');
    text.onchange = function() {
        if(text.value == "") textWindow.innerHTML = "TEXT EXAMPLE TEXT EXAMPLE TEXT EXAMPLE"
        else textWindow.innerHTML = `${text.value}`
    }

    let color1 = document.getElementById('color__one').value
    let color2 = document.getElementById('color__second').value

    let direction;
    for(let item of document.querySelectorAll('input[name="radio"]')) {
        if(item.checked) { 
            direction = item.value
        }
    }

    if(!isNaN(degree.value) && degree.value != "") direction = `linear-gradient(${degree.value}deg, `
    let result = `${direction}${color1}, ${color2})`
    textWindow.style.backgroundImage = result;
    document.querySelector('.cssResultP').innerHTML = `background-image: ${result};`

    document.querySelector('.random').onclick = function() {
        color1 = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
        color2 = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()

        result = `${direction}${color1}, ${color2})`
        textWindow.style.backgroundImage = result;
        document.querySelector('.cssResultP').innerHTML = `background-image: ${result};`
    }
}

for(let item of document.querySelectorAll('input')) {
    item.addEventListener('input', generateCss)
}

generateCss()