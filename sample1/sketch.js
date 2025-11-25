t = 0;
noise_value = 0;
bodyColors = [];
lastChange = 0;
colorIndex = 0;

function gradian_arc(x, y, r, g, b, rotate, s, e) {
    for (var i = s; i <= e; i++) {
        noStroke();
        fill(r, g, b, (255/12) * i);
        arc(x, y, 80, 80, radians(i*(360/12)-((rotate+1)*(360/12))), radians((i*(360/12)-((rotate+1)*(360/12))) + (360/12)));
    }
}

function setup() {
    createCanvas(600, 400);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(16);

    i = 0;
    k = 0;
    j = 0;

    bodyColors = [];
    for(i=0; i<=5; i++)
        bodyColors.push(color(i * 255 / 5,j * 255 / 5, k * 255 / 5));
    
    for(j=0; j<=5; j++)
        bodyColors.push(color(i * 255 / 5,j * 255 / 5, k * 255 / 5));
    
    for(i=5; i>=0; i--)
        bodyColors.push(color(i * 255 / 5,j * 255 / 5, k * 255 / 5));

    for(k=0; k<=5; k++)
        bodyColors.push(color(i * 255 / 5,j * 255 / 5, k * 255 / 5));
    
    for(j=5; j>=0; j--)
        bodyColors.push(color(i * 255 / 5,j * 255 / 5, k * 255 / 5));
    
    for(i=0; i<=5; i++)
        bodyColors.push(color(i * 255 / 5,j * 255 / 5, k * 255 / 5));

    for(k=5; k>=0; k--)
        bodyColors.push(color(i * 255 / 5,j * 255 / 5, k * 255 / 5));
}

function draw() {
    background(10);

    noise_value += 0.03;

    for (i = 0; i < 10; i++) {
        ny = (noise(100 + noise_value * i * 0.1) * 300) + 100;
        stroke(200);
        strokeWeight(2);
        if(ny < 270) line(0, ny + 30, width, ny);
        else line(0, ny - 50, width, ny);
    }

    if (millis() - lastChange > 200) {
        colorIndex = (colorIndex + 1) % bodyColors.length;
        lastChange = millis();
    }

    dy = cos(frameCount * 0.05) * 5;

    baseY = 330;
    amp = 10;

    noStroke();
    fill(80);
    beginShape();
    for (x = 0; x <= width; x += 5) {
        y = baseY + cos(frameCount * 0.08 - x * 0.01) * 35;
        vertex(x, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);

    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);

    fill(255);
    text("Choose your color", width / 2, 30);

    gradian_arc(100-20, 100, 255,   0,   0, 0, 1, 12);
    gradian_arc(140-20, 100, 255, 135,   0, 6, 1, 12);
    gradian_arc(180-20, 100, 255, 255,   0, 0, 1, 12);
    gradian_arc(220-20, 100, 135, 255,   0, 6, 1, 12);
    gradian_arc(260-20, 100,   0, 255,   0, 0, 1, 12);
    gradian_arc(300-20, 100,   0, 255, 135, 6, 1, 12);
    gradian_arc(340-20, 100,   0, 255, 255, 0, 1, 12);
    gradian_arc(380-20, 100,   0, 135, 255, 6, 1, 12);
    gradian_arc(420-20, 100,   0,   0, 255, 0, 1, 12);
    gradian_arc(460-20, 100, 135,   0, 255, 6, 1, 12);
    gradian_arc(500-20, 100, 255,   0, 255, 0, 1, 12);
    gradian_arc(540-20, 100, 255,   0, 135, 6, 1, 12);

    fill(bodyColors[colorIndex]);
    beginShape();
    vertex(80, 330 + dy);
    vertex(80, 270 + dy);
    vertex(120, 230 + dy);
    vertex(190, 230 + dy);
    vertex(250, 180 + dy);
    vertex(450, 180 + dy);
    vertex(500, 200 + dy);
    vertex(530, 230 + dy);
    vertex(530, 330 + dy);
    endShape(CLOSE);

    fill(10, 10, 10);
    circle(160, 330 + dy, 110);
    circle(450, 330 + dy, 110);

    fill(50, 50, 50);
    circle(160, 330 + dy, 100);
    circle(450, 330 + dy, 100);

    fill(10, 10, 10);
    circle(160, 330 + dy, 20);
    circle(450, 330 + dy, 20);

    fill(0, 30, 80);
    triangle(80, 270 + dy, 120, 230 + dy, 110, 260 + dy);

    fill(0, 30, 80);
    triangle(210, 230 + dy, 260, 190 + dy, 260, 230 + dy);
    rect(260, 190 + dy, 80, 40);
    rect(350, 190 + dy, 100, 40);
    
    fill(50, 50, 50);
    rect(80, 290 + dy, 30, 5);
    rect(80, 280 + dy, 30, 5);

    rect(290, 250 + dy, 30, 5);
    rect(410, 250 + dy, 30, 5);
    
    fill(220, 220, 50);
    rect(500, 240 + dy, 30, 15);
    rect(500, 260 + dy, 30, 7);

    stroke(30, 30, 30);
    strokeWeight(3);
    line(80, 270 + dy, 530, 270 + dy);

    for (i = 0; i < 4; i++) {
        ny = (noise(100 + noise_value * i * 0.1) * 300) + 150;
        stroke(200);
        strokeWeight(2);
        if(ny < 270) line(0, ny + 30, width, ny);
        else line(0, ny - 50, width, ny);
    }
    stroke(30, 30, 30);
    strokeWeight(3);
    line(80, 270 + dy, 530, 270 + dy);
}

function keyPressed() {
    if (key === 's' || key === 'S') {
        saveGif('mygif.gif', 10);
    }
}