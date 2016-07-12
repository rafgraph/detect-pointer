# Detect Pointer

JavaScript wrapper for `pointer` and `any-pointer` media queries.

[Live detection test][liveDetectionTest] &#8212; [view on npm][onNpm]

Exports a reference to a singleton object (a micro state machine with an update function) with its state set to the results of the `pointer` and `any-pointer` media queries, as well as an `update()` function which re-runs the tests and updates the object's state.

Note that `detect-pointer` is one of the micro state machines used by [`detect-it`][detectItRepo] to determine if a device is `mouseOnly`, `touchOnly`, or `hybrid`.

*For more information on the `pointer` and `any-pointer` media queries, please see the [W3C Media Queries Level 4 specification][w3cSpecLatest]. For information on browser compatibility, please see [Can I Use matchMedia][canIUseMatchMedia].*


## `detectPointer` micro state machine
```javascript
const detectPointer = {
  // mutually exclusive (only one will be true)
  fine: boolean,
  coarse: boolean,
  none: boolean,

  // not mutually exclusive
  anyFine: boolean,
  anyCoarse: boolean,
  anyNone: boolean,

  // re-run all the detection tests and update state
  update() {...},
}
```

## Installing `detect-pointer`
```terminal
$ npm install detect-pointer
```

## Importing `detect-pointer`
```javascript
import detectPointer from 'detect-pointer';
```


## Using `detect-pointer`
```javascript
// using the state
detectPointer.fine === true; // primary input mechanism of the device includes an accurate pointing device (e.g. mouse, stylus)
detectPointer.coarse === true; // primary input mechanism of the device includes a pointing device of limited accuracy (e.g. touchscreen, motion-detector)
detectPointer.none === true; // primary input mechanism of the device does not include a pointing device

/*
 * identical to the pointer media feature, but they correspond to the
 * union of capabilities of all the pointing devices available to the user -
 * more than one of their values can be true, if different input mechanisms have
 * different characteristics
 */
detectPointer.anyFine === true;
detectPointer.anyCoarse === true;
detectPointer.anyNone === true;


// updating the state - most apps won't need to use this at all
detectPointer.update();
```
Note that the `update()` function is run once at the time of import to set the object's initial state, and generally doesn't need to be run again. If it doesn't have access to the `window` or the browser doesn't support the `matchMedia()` function (all modern browser do), then the state will be `undefined` (`detect-pointer` will not throw an error). If `detect-pointer` doesn't have access to the `window` at the time of import, you will have to call the `update()` function manually at a later time to update its state.

## Part of the [`detect-it`][detectItRepo] family
- [`detect-it`][detectItRepo]
  - [`detect-hover`][detectHoverRepo]
  - **`detect-pointer`**
  - [`detect-touch-events`][detectTouchEventsRepo]
  - [`detect-pointer-events`][detectPointerEventsRepo]


<!-- links -->
[liveDetectionTest]: http://detect-it.rafrex.com/#detect-pointer
[onNpm]: https://www.npmjs.com/package/detect-pointer
[w3cSpecLatest]: https://www.w3.org/TR/mediaqueries-4/#pointer
[canIUseMatchMedia]: http://caniuse.com/#feat=matchmedia
[detectItRepo]: https://github.com/rafrex/detect-it
[detectHoverRepo]: https://github.com/rafrex/detect-hover
[detectTouchEventsRepo]: https://github.com/rafrex/detect-touch-events
[detectPointerEventsRepo]: https://github.com/rafrex/detect-pointer-events
