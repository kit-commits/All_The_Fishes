# Quick Handwritten Notes

Use this as the shortest possible study sheet.

## Main Flow

1. HTML page loads.
2. Pixi app creates a canvas.
3. Fish image loads.
4. Aquarium shapes get drawn.
5. Fish and bubbles get created.
6. The ticker updates everything every frame.

## Important Pixi Words

- `Application`: the Pixi program.
- `stage`: the root scene.
- `Container`: a group of objects.
- `Sprite`: an image on screen.
- `Graphics`: shapes drawn with code.
- `ticker`: the animation heartbeat.

## What Each Big Section Does

- [index.html](index.html#L7): Styles the page and canvas.
- [index.html](index.html#L29): Imports Pixi tools.
- [index.html](index.html#L37): Creates the Pixi app.
- [index.html](index.html#L47): Loads the fish texture.
- [index.html](index.html#L48): Creates the aquarium container.
- [index.html](index.html#L51): Stores tank measurements.
- [index.html](index.html#L62): Draws the tank and water.
- [index.html](index.html#L82): Draws random gravel pebbles.
- [index.html](index.html#L92): Builds plants.
- [index.html](index.html#L140): Builds fish.
- [index.html](index.html#L170): Creates solo fish.
- [index.html](index.html#L177): Creates the school container.
- [index.html](index.html#L189): Creates bubbles.
- [index.html](index.html#L213): Animates the whole scene.

## Motion Rules To Remember

- `Math.sin(...)` makes smooth repeating motion.
- Fish flap by changing scale slightly.
- Fish bob by changing `y`.
- The back-and-forth fish flips by changing x-scale sign.
- The school moves as one container.
- Bubbles rise by decreasing `y`.
- Plants sway by changing rotation.

## One-Sentence Summary

The code builds an aquarium out of shapes and sprites, then uses the ticker to keep the fish, plants, and bubbles moving.