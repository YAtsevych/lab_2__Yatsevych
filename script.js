
        window.addEventListener("deviceorientation", onDeviceOrientation);

        function onDeviceOrientation(evt) {
            var gamma = evt.gamma;
            document.getElementById("gamma").innerHTML = gamma.toFixed(2);

            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            var center = { x: canvas.width / 2, y: canvas.height / 2 };
            var shapeSize = 50 + gamma; // Adjust the size based on the gamma value

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = "#6A0888";
            context.beginPath();
            context.fillRect(center.x - shapeSize / 2, center.y - shapeSize / 2, shapeSize, shapeSize);
        }
