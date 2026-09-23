# 3 Fishes Aquarium

This project uses PixiJS to build a small animated aquarium scene with five fish, moving plants, decorative gravel, a tank frame, and drifting bubbles.

## Beginner Roadmap

If you are trying to understand the project step by step, read the code in this order:

1. Page styling and Pixi setup in [index.html](index.html#L7).
2. Aquarium background and decorations in [index.html](index.html#L51).
3. Reusable fish and plant builder functions in [index.html](index.html#L92) and [index.html](index.html#L140).
4. Fish, school, and bubble creation in [index.html](index.html#L170) through [index.html](index.html#L204).
5. The animation loop in [index.html](index.html#L213).

The main idea is that the file first builds the scene, then the ticker updates it every frame.

## Coding Strategy

I started from the existing one-fish Pixi demo in `index.html` and kept the structure simple by building the whole aquarium as a scene graph of Pixi containers and graphics objects.

The main strategy was:

1. Build the aquarium environment first using `Graphics` objects for the tank, water, gravel, plants, rock arch, and glass highlights.
2. Reuse the provided fish texture with different scale, tint, and movement settings so each fish feels distinct without needing separate image files.
3. Animate everything from one Pixi ticker so the scene stays lightweight and easy to tune.
4. Add a few different motion patterns to satisfy the assignment goals and bonus ideas:
   - one fish swims back and forth,
   - one fish shifts color over time,
   - three fish move together inside a container to create a small school,
   - bubbles continuously rise through the tank.

## Animation Notes

- Solo fish use sine-based horizontal motion and vertical bobbing.
- The back-and-forth fish flips direction as it changes course.
- The school is wrapped in a shared container so the group can move together.
- Plant rotation and bubble drift add movement to the background so the aquarium does not feel static.

## Beginner Notes

- `Application` creates the Pixi app and canvas.
- `Container` groups objects so they can move together.
- `Sprite` shows the fish image file.
- `Graphics` draws custom shapes like the tank, gravel, plants, and bubbles.
- `app.ticker.add(...)` is the repeating animation loop.

## Artwork Sources

- `img/fish.png` was provided in the starter project materials.
- All other visual elements were drawn directly in PixiJS code for this project.