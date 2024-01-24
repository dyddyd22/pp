'use strict';

new TypeIt('.home-title-strong', {
    loop: true,
    speed:50,
})
    .move(-13)
    .type('Amazing ')
    .pause(1000)
    .move(null, { to: 'END' })
    .delete()
    .go();