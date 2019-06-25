function getMastery(money, clevel) {


    while (money > 0) {

        if (clevel >= 0 && clevel < 25 && money >= 1) {
            clevel += 1;
            money -= 1;
            // return 1f;
        } else if (clevel >= 25 && clevel < 50 && money >= 1.5) {
            clevel += 1;
            money -= 1.5;
            //  return 1.5f;
        } else if (clevel >= 50 && clevel < 75 && money >= 2) {
            clevel += 1;
            money -= 2;
            // return 2f;
        } else if (clevel >= 75 && clevel < 100 && money >= 2.5) {
            clevel += 1;
            money -= 2.5;
            // return 2.5f;
        } else if (clevel >= 100 && clevel < 125 && money >= 3) {
            clevel += 1;
            money -= 3;
            // return 3f;
        } else if (clevel >= 125 && clevel < 150 && money >= 3.5) {
            clevel += 1;
            money -= 3.5;
            // return 3.5f;
        } else if (clevel >= 150 && clevel < 175 && money >= 4) {
            clevel += 1;
            money -= 4;
            // return 4f;
        } else if (clevel >= 175 && clevel < 200 && money >= 4.5) {
            clevel += 1;
            money -= 4.5;
            // return 4.5f;
        } else if (clevel >= 200 && clevel < 225 && money >= 5) {
            clevel += 1;
            money -= 5;
            // return 5f;
        } else if (clevel >= 225 && clevel < 250 && money >= 5.5) {
            clevel += 1;
            money -= 5.5;
            // return 5.5f;
        } else if (clevel >= 250 && clevel < 275 && money >= 6) {
            clevel += 1;
            money -= 6;
            // return 6f;
        } else if (clevel >= 275 && clevel < 300 && money >= 6.5) {
            clevel += 1;
            money -= 6.5;
            // return 6.5f;
        } else if (clevel >= 300 && clevel < 325 && money >= 7) {
            clevel += 1;
            money -= 7;
            // return 7f;
        } else if (clevel >= 325 && clevel < 350 && money >= 7.5) {
            clevel += 1;
            money -= 7.5;
            // return 7.5f;
        } else if (clevel >= 350 && clevel < 375 && money >= 8) {
            clevel += 1;
            money -= 8;
            // return 8f;
        } else if (clevel >= 375 && clevel < 400 && money >= 8.5) {
            clevel += 1;
            money -= 8.5;
            // return 8.5f;
        } else if (clevel >= 400 && clevel < 425 && money >= 9) {
            clevel += 1;
            money -= 9;
            // return 9f;
        } else if (clevel >= 425 && clevel < 450 && money >= 9.5) {
            clevel += 1;
            money -= 9.5;
            // return 9.5f;
        } else if (clevel >= 450 && clevel < 475 && money >= 10) {
            clevel += 1;
            money -= 10;
            // return 10f;
        } else if (clevel >= 475 && clevel < 500 && money >= 10.5) {
            clevel += 1;
            money -= 10.5;
            //  return 10.5f;
        } else if (clevel >= 500 && clevel < 525 && money >= 11) {
            clevel += 1;
            money -= 11;
            //  return 11f;
        } else if (clevel >= 525 && clevel < 550 && money >= 11.5) {
            clevel += 1;
            money -= 11.5;
            // return 11.5f;
        } else if (clevel >= 550 && clevel < 575 && money >= 12) {
            clevel += 1;
            money -= 12;
            // return 12f;
        } else if (clevel >= 575 && clevel < 600 && money >= 12.5) {
            clevel += 1;
            money -= 12.5;
            // return 12.5f;
        } else {

            break;
        }


    }

    alert("Level :" + clevel + "\n" + "เงินทอน :" + money);
}

function getMoney(rlevel, clevel) {
    var money = 0;
    while (rlevel > 0) {

        if (clevel >= 0 && clevel < 25) {
            clevel++;
            rlevel--;
            money += 1;
            // return 1f;
        } else if (clevel >= 25 && clevel < 50) {
            clevel++;
            rlevel--;
            money += 1.5;
            //  return 1.5f;
        } else if (clevel >= 50 && clevel < 75) {
            clevel++;
            rlevel--;
            money += 2;
            // return 2f;
        } else if (clevel >= 75 && clevel < 100) {
            clevel++;
            rlevel--;
            money += 2.5;
            // return 2.5f;
        } else if (clevel >= 100 && clevel < 125) {
            clevel++;
            rlevel--;
            money += 3;
            // return 3f;
        } else if (clevel >= 125 && clevel < 150) {
            clevel++;
            rlevel--;
            money += 3.5;
            // return 3.5f;
        } else if (clevel >= 150 && clevel < 175) {
            clevel++;
            rlevel--;
            money += 4;
            // return 4f;
        } else if (clevel >= 175 && clevel < 200) {
            clevel++;
            rlevel--;
            money += 4.5;
            // return 4.5f;
        } else if (clevel >= 200 && clevel < 225) {
            clevel++;
            rlevel--;
            money += 5;
            // return 5f;
        } else if (clevel >= 225 && clevel < 250) {
            clevel++;
            rlevel--;
            money += 5.5;
            // return 5.5f;
        } else if (clevel >= 250 && clevel < 275) {
            clevel++;
            rlevel--;
            money += 6;
            // return 6f;
        } else if (clevel >= 275 && clevel < 300) {
            clevel++;
            rlevel--;
            money += 6.5;
            // return 6.5f;
        } else if (clevel >= 300 && clevel < 325) {
            clevel++;
            rlevel--;
            money += 7;
            // return 7f;
        } else if (clevel >= 325 && clevel < 350) {
            clevel++;
            rlevel--;
            money += 7.5;
            // return 7.5f;
        } else if (clevel >= 350 && clevel < 375) {
            clevel++;
            rlevel--;
            money += 8;
            // return 8f;
        } else if (clevel >= 375 && clevel < 400) {
            clevel++;
            rlevel--;
            money += 8.5;
            // return 8.5f;
        } else {
            break;
        }


    }
    alert("ค่าใช่จ่าย :" + money);
}
