//Animate object
let Animate = {};

function lerp(a, b, n) {
    return a + ((b - a) * n);
}

function splitTint(tint) {
    return {
        red: (tint >> 16) & 0xFF,
        green: (tint >> 8) & 0xFF,
        blue: tint & 0xFF
    };
}

function combineTint(red, green, blue) {
    return (Math.round(red) << 16) + (Math.round(green) << 8) + Math.round(blue);
}

function lerpTint(startTint, endTint, amount) {
    const start = splitTint(startTint);
    const end = splitTint(endTint);

    return combineTint(
        lerp(start.red, end.red, amount),
        lerp(start.green, end.green, amount),
        lerp(start.blue, end.blue, amount)
    );
}

//Interpolation functions
Animate.linear = (x) => x;
Animate.easeIn = (x) => x * x;
Animate.easeOut = (x) => 1 - (1-x)*(1-x);
Animate.easeInOut = (x) => {
    if (x < .5) {
        return 2 * x*x;
    }
    else return 1 - Math.pow(-2 * x + 2, 2) / 2;
};

//Basic animation
Animate.to = function(obj, end) {

    //Make it a Promise
    return new Promise ( (resolve,reject) => {

        //Duration
        let duration = end.duration;

        //Where is it now? (Beginning state)
        let start = {
            x : obj.x,
            y : obj.y,
            tint: obj.tint,
            alpha: obj.alpha,
            rotation: obj.rotation,
            angle: obj.angle,
            scaleX: obj.scale ? obj.scale.x : undefined,
            scaleY: obj.scale ? obj.scale.y : undefined
        };

        //Set defaults
        if (end.easing == undefined) end.easing = Animate.linear;
        if (end.x == undefined) end.x = start.x;
        if (end.y == undefined) end.y = start.y;
        if (end.tint == undefined) end.tint = start.tint;
        if (end.alpha == undefined) end.alpha = start.alpha;
        if (end.rotation == undefined) end.rotation = start.rotation;
        if (end.angle == undefined) end.angle = start.angle;

        if (end.scale != undefined) {
            if (end.scaleX == undefined) end.scaleX = end.scale;
            if (end.scaleY == undefined) end.scaleY = end.scale;
        }

        if (end.scaleX == undefined) end.scaleX = start.scaleX;
        if (end.scaleY == undefined) end.scaleY = start.scaleY;

        if (end.angle != undefined && end.rotation == start.rotation)
            end.rotation = end.angle * (Math.PI / 180);

        if (end.rotation != undefined && end.angle == start.angle)
            end.angle = end.rotation * (180 / Math.PI);

        //Start time
        let startTime = Date.now();

        //Loop (does the animation)
        function loop() {

            //Calculate times
            let ticker = Date.now() - startTime;
            let delta = Math.min(ticker/duration, 1); //0.0 (just started) - 1.0 (done)
            let ease = end.easing(delta);

            //Check if we're done
            if(delta >= 1) {
                obj.x = end.x;
                obj.y = end.y;
                if (end.tint != undefined)
                    obj.tint = end.tint;
                obj.alpha = end.alpha;
                obj.rotation = end.rotation;

                if (obj.angle != undefined)
                    obj.angle = end.angle;

                if (obj.scale && end.scaleX != undefined && end.scaleY != undefined) {
                    obj.scale.x = end.scaleX;
                    obj.scale.y = end.scaleY;
                }

                resolve();
                return;
            }

            //Lerp our coordinates
            obj.x = lerp(start.x,end.x,ease);
            obj.y = lerp(start.y,end.y,ease);
            if (start.tint != undefined && end.tint != undefined)
                obj.tint = lerpTint(start.tint, end.tint, ease);
            obj.alpha = lerp(start.alpha, end.alpha, ease);
            obj.rotation = lerp(start.rotation, end.rotation, ease);

            if (obj.angle != undefined)
                obj.angle = lerp(start.angle, end.angle, ease);

            if (obj.scale && start.scaleX != undefined && start.scaleY != undefined) {
                obj.scale.x = lerp(start.scaleX, end.scaleX, ease);
                obj.scale.y = lerp(start.scaleY, end.scaleY, ease);
            }

            //Loop again
            requestAnimationFrame(loop);
        }
        loop();

    } ); //End Promise

};

const sleep = function (ms) {
    //Make it a Promise
    return new Promise ( (resolve,reject) => {
        setTimeout(resolve,ms);
    });
};

export { Animate, sleep };