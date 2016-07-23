var envelope = require('./envelope.js');

function kick(ctx, freq, a, d, s, r){
  this.osc = ctx.createOscillator();
  this.env = envelope(ctx, a, d, s, r);

  this.osc.type = 'sine';
  this.osc.frequency.value = freq;

  this.osc.start(0);
  this.osc.connect(this.env);
  this.env.connect(ctx.destination);
}

kick.prototype.trigger = function(){
  this.env.trigger(0.05);
}

module.exports = function(AudioContext, opts){
  var defaults = {
    freq: 50,
    attack: 0.001,
    decay: 0.1,
    sustain: 0,
    release: 0.25
  };
  opts = Object.assign({}, defaults, opts);

  return new kick(AudioContext, opts.freq,
                  opts.attack, opts.decay, opts.sustain, opts.release);
}
