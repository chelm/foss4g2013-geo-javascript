var deck = bespoke.horizontal.from('article', {
  bullets: 'li, .bullet',
  hash: true,
  state: true
});

slideConfig = [

];

//slideConfig[10] = {css: {background: 'none', color: '#fff'}, img: 'images/chimp_dog.gif'};
slideConfig[35] = {css: {background: 'none', color: '#fff'}, img: 'images/kitty1.gif'};
slideConfig[44] = {css: {background: 'none', color: '#fff'}, img: 'images/apollorockygif1.gif'};

function update(e){
  var config = slideConfig[ e.index ];

  if ( config ) { 

    if (e.slide && config.css){
      var slide = $(e.slide);
      slide.css(config.css);
    }

    var el = $('.bespoke-parent');
    if (config.img) {
      el.css("background", 'url('+config.img+')' );
    } else {
      el.css("background", '');
    }

    if ( config.credit ){
      $('.credit').html(config.credit);
    } else {
      $('.credit').html('');
    }

  } else {
     var el = $('.bespoke-parent');
     el.css("background", '');
     $('.credit').html('');
  }

}

deck.on('activate', update);

update({index:0});
