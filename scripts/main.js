var deck = bespoke.horizontal.from('article', {
  bullets: 'li, .bullet',
  hash: true,
  state: true
});

slideConfig = [

];

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

  }

}

deck.on('activate', update);

update({index:0});
