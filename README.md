NOTEPLAYER.JS
===

## Installation:

    git clone
    npm install


## Node.js module
```javascript
var np = require('notePlayer') 
```

## plain JS import
```html
<script type="text/javascript" src="https://github.com/laopunk/notePlayer/blob/master/lib/notePlayer.min.js"></script>
```
```javascript
//the module is instanciated in the object np, which you can use right away
np.buildFromName("C4").play()
```

## Constructors
There are several ways to instanciate the class:
- `buildFromFrequency(freq,[audioContext])`

 Builds a notePlayer from a specific frequence. 
 audioContext is created if not provided.
 ```javascript
 n = np.buildFromFrequency(440);     //will return a A4
 n = np.buildFromFrequency(439);     //will return a A4
 n = np.buildFromFrequency(460);     //will return a A#4
 ```

- `buildFromKeyNb(noteKeyNb, [audioContext])`

 Builds a notePlayer from a specific piano key number 
 audioContext is created if not provided
 ```javascript
 n = np.buildFromKeyNb(49);     //will return a A4
 ```

- `buildFromName(noteName, [audioContext])`

  Builds a notePlayer from a specific musical note name
  audioContext is created if not provided
 ```javascript
 n = np.buildFromName("A4")     //will return a A4
 ```
## Methods
- `play([callback])`

  Plays the note
 ```javascript
 n = np.buildFromName("A4")
 n.play(function(){
   console.log("end play")
 })
 ```

Setters: 
- `setAudioContext(audioContext)`
- `setDestinationNode(node)`
- `setDuration(duration)`
- `setVolume(volume)`
