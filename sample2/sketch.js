let closetColor;
let largeMouse;

function setup() {
    createCanvas(600, 400);
    background(202, 201, 199);
    closetColor = color(30, 30, 30);
    largeMouse = false;
}

function draw() {
    background(202, 201, 199);
    draw_ear();
    draw_neck();
    draw_closet()
    draw_face();
    draw_haire();
    draw_shinhan();
}

function draw_face() {
    stroke(0);
    strokeWeight(2);
    fill(224, 177, 152);
    ellipse(300, 160, 130, 180);
    
    triangle(300, 152, 286, 184, 319, 184);

    fill(228, 156, 153);
    ellipse(302, 210, 46, 6);
    ellipse(302, 214, 50, largeMouse ? 30 : 6);
    
    fill(20, 20, 20);
    rect(240, 120, 40, 8);
    rect(320, 120, 40, 8);
    
    fill(255, 255, 255);
    ellipse(271, 145, 30, 7);
    ellipse(333, 145, 30, 7);

    noStroke();
    fill(10);

    let leftEyeX = 271;
    let leftEyeY = 145;
    let rightEyeX = 333;
    let rightEyeY = 145;

    let leftDx = constrain((mouseX - leftEyeX) * 0.05, -5, 5);
    let leftDy = constrain((mouseY - leftEyeY) * 0.05, -3, 3);
    let rightDx = constrain((mouseX - rightEyeX) * 0.05, -5, 5);
    let rightDy = constrain((mouseY - rightEyeY) * 0.05, -3, 3);

    circle(leftEyeX + leftDx, leftEyeY + leftDy, 10);
    circle(rightEyeX + rightDx, rightEyeY + rightDy, 10); 
}

function draw_haire() {
    stroke(0);
    strokeWeight(2);
    fill(10, 10, 10);
    beginShape();
    curveVertex(236, 156);
    curveVertex(226, 96);
    curveVertex(249, 49);
    curveVertex(297, 35);
    curveVertex(349, 46);
    curveVertex(373, 79);
    curveVertex(367, 152);
    curveVertex(360, 127);
    curveVertex(318, 121);
    curveVertex(306, 100);
    curveVertex(302, 120);
    curveVertex(244, 123);
    endShape(CLOSE);
}

function draw_ear() {
    stroke(0);
    strokeWeight(2);
    fill(224, 177, 152);
    beginShape();
    curveVertex(355, 154);
    curveVertex(366, 143);
    curveVertex(374, 133);
    curveVertex(379, 131);
    curveVertex(382, 138);
    curveVertex(379, 174);
    curveVertex(367, 186);
    curveVertex(353, 190);
    curveVertex(343, 179);
    curveVertex(347, 166);
    endShape(CLOSE);

    stroke(0);
    strokeWeight(2);
    fill(224, 177, 152);
    beginShape();
    curveVertex(242, 151);
    curveVertex(234, 141);
    curveVertex(226, 133);
    curveVertex(221, 135);
    curveVertex(219, 159);
    curveVertex(224, 174);
    curveVertex(232, 182);
    curveVertex(245, 187);
    curveVertex(254, 168);
    endShape(CLOSE);
}

function draw_neck() {
    stroke(0);
    strokeWeight(2);
    fill(224, 177, 152);
    beginShape();
    curveVertex(249, 210);
    curveVertex(257, 228);
    curveVertex(255, 263);
    curveVertex(213, 290);
    curveVertex(215, 322);
    curveVertex(276, 343);
    curveVertex(323, 347);
    curveVertex(366, 342);
    curveVertex(388, 324);
    curveVertex(379, 297);
    curveVertex(356, 270);
    curveVertex(347, 249);
    curveVertex(346, 223);
    curveVertex(347, 210);
    curveVertex(322, 190);
    curveVertex(284, 175);
    curveVertex(261, 170);
    endShape(CLOSE);
}

function draw_closet() {
    stroke(0);
    strokeWeight(2);
    fill(255, 255, 255);
    beginShape();
    curveVertex(238, 278);
    curveVertex(251, 295);
    curveVertex(280, 314);
    curveVertex(303, 320);
    curveVertex(325, 314);
    curveVertex(359, 287);
    curveVertex(363, 279);
    curveVertex(409, 315);
    curveVertex(420, 390);
    curveVertex(307, 426);
    curveVertex(201, 394);
    curveVertex(204, 313);
    endShape(CLOSE);

    stroke(0);
    strokeWeight(2);
    fill(closetColor);

    beginShape();
    vertex(244, 271);
    vertex(106, 327);
    vertex(102, 405);
    vertex(239, 410);
    endShape(CLOSE);

    beginShape();
    vertex(246, 268);
    vertex(216, 284);
    vertex(199, 321);
    vertex(214, 331);
    vertex(246, 306);
    endShape(CLOSE);

    beginShape();
    vertex(246, 306);
    vertex(192, 345);
    vertex(215, 409);
    vertex(263, 407);
    endShape(CLOSE);

    beginShape();
    vertex(357, 272);
    vertex(499, 325);
    vertex(507, 408);
    vertex(346, 417);
    endShape(CLOSE);
    
    beginShape();
    vertex(357, 271);
    vertex(358, 311);
    vertex(390, 334);
    vertex(405, 325);
    vertex(386, 288);
    endShape(CLOSE);

    beginShape();
    vertex(358, 311);
    vertex(344, 408);
    vertex(392, 405);
    vertex(415, 346);
    endShape(CLOSE);
}
function draw_shinhan() {
    let cx = mouseX;
    let cy = mouseY;

    stroke(0);
    fill(0, 70, 255);
    circle(cx, cy, 80);

    noStroke();
    fill(255);

    beginShape();
    curveVertex(cx - 28, cy + 11);
    curveVertex(cx - 30, cy + 11);
    curveVertex(cx - 26, cy + 21);
    curveVertex(cx - 19, cy + 28);
    curveVertex(cx - 8, cy + 33);
    curveVertex(cx + 2, cy + 32);
    curveVertex(cx - 5, cy + 28);
    curveVertex(cx - 4, cy + 19);
    curveVertex(cx - 12, cy + 21);
    curveVertex(cx - 16, cy + 12);
    curveVertex(cx - 21, cy + 16);
    endShape(CLOSE);

    beginShape();
    curveVertex(cx - 8, cy - 34);
    curveVertex(cx - 10, cy - 34);
    curveVertex(cx - 25, cy - 20);
    curveVertex(cx - 25, cy - 12);
    curveVertex(cx - 17, cy - 2);
    curveVertex(cx + 11, cy + 17);
    curveVertex(cx + 15, cy + 22);
    curveVertex(cx + 12, cy + 31);
    curveVertex(cx + 24, cy + 22);
    curveVertex(cx + 23, cy + 11);
    curveVertex(cx + 16, cy + 6);
    curveVertex(cx - 15, cy - 17);
    curveVertex(cx - 16, cy - 23);
    endShape(CLOSE);

    beginShape();
    curveVertex(cx + 1, cy - 32);
    curveVertex(cx + 4, cy - 25);
    curveVertex(cx + 3, cy - 13);
    curveVertex(cx + 9, cy - 9);
    curveVertex(cx + 13, cy - 10);
    curveVertex(cx + 12, cy - 19);
    curveVertex(cx + 20, cy - 12);
    curveVertex(cx + 25, cy - 17);
    curveVertex(cx + 17, cy - 24);
    curveVertex(cx + 22, cy - 24);
    curveVertex(cx + 17, cy - 29);
    curveVertex(cx + 9, cy - 31);
    endShape(CLOSE);
}


function keyPressed() {
    if (key === 's' || key === 'S') {
        saveGif('과제.gif', 7);  
    }
    if (key === 'c' || key === 'C') {
        closetColor = color(random(255), random(255), random(255));
    }
    if (key === 'l' || key === 'L') {
        largeMouse = largeMouse ? false : true;
    }
}