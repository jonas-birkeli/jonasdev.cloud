function typingEffect() {
    var app = document.getElementById('description');

    var typewriter = new Typewriter(app, {
        loop: true
    });
    var array = ['best frontend dev ','car enthusiast ','highly skilled noob ', 'average bmw fan ', 'insane rust beamer ', 'new discord bot dev']
    
    for(i = 0; i < array.length; i++)
    {
        typewriter.typeString(array[i])
        .deleteAll()
        .start();
    }
}