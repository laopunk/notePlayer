NOTEPLAYER.JS
===

## Installation:
You may import the code into an existing node.js project or import it directly into your HTML code
- Node module import
```shell
# local install to your project
npm install --save-dev noteplayer
```
```javascript
// import module into your js code
var np = require('noteplayer') 
```
- plain JS import
```html
<!-- minified version, not human friendly, 55kb-->
<script type="text/javascript" src="notePlayer.min.js"></script>
<!-- uncompressed version, human friendly, 416kb -->
<script type="text/javascript" src="notePlayer.js"></script>
```
The module is instanciated in the object np, which you can use right away
```javascript
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

- Setters: 
	- `setAudioContext(audioContext)`
	- `setDestinationNode(node)`
	- `setDuration(duration)`
	- `setVolume(volume)`
	- `setVerbose(bool)`
	- `setAttack(duration)`
	- `setRelease(duration)`
