# PC Drum - Bass Drum Kick

Module for `PC Drum`.

## Install

```bash
npm install pcdrum-kick
```

## Usage

```js
var kick = require('pcdrum-kick'),
    context = new AudioContext(),
    bd = kick(context,
              {freq: 50,
               attack: 0.001,
               decay: 0.1,
               sustain: 0,
               release: 0.25
              })
;

bd.trigger();
```

## License

See [LICENSE](LICENSE)
