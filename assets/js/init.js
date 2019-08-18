var sound = new Howl({
    src: ['./assets/audio/spidey-theme.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.03,
    onend: function() {
        console.log('spidey theme');
    }
});