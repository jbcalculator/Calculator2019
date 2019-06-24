function gun(curlev,reqlev)
{
	var low,high,price;
	low = 0;
	high = 0;
	price = 0;
		
    if (reqlev > 800 && reqlev <= 850) {
            if (curlev <= 850 && curlev > 800) {
                price = reqlev - curlev;
                price *= 5.0;
            }
            if (curlev <= 800 && curlev > 700) {
                low = 800 - curlev;
                low *= 4.5;
                high = reqlev - 800;
                high *= 5.0;
                price = high + low;
            }
            if (curlev <= 700 && curlev > 600) {
                low = 700 - curlev;
                low *= 4.0;
                high = reqlev - 800;
                high *= 5.0;
                price = high + low + 150;
            }
            if ((curlev <= 600) && (curlev > 500)) {
                low = 600 - curlev;
                low *= 3.5;
                high = reqlev - 800;
                high *= 5.0;
                price = high + low + 350;
            }
            if ((curlev <= 500) && (curlev > 400)) {
                low = 500 - curlev;
                low *= 3.0;
                high = reqlev - 800;
                high *= 5.0;
                price = high + low + 600;

            }
            if ((curlev <= 400) && (curlev > 300)) {
                low = 400 - curlev;
                low *= 2.5;
                high = reqlev - 800;
                high *= 5.0;
                price = high + low + 900;
            }
            if ((curlev <= 300) && (curlev > 200)) {

                low = 300 - curlev;
                low *= 2.0;
                high = reqlev - 800;
                high *= 5.0;
                price = high + low + 1250;
            }
            if ((curlev <= 200) && (curlev > 100)) {

                low = 200 - curlev;
                low *= 1.5;
                high = reqlev - 800;
                high *= 5.0;
                price = high + low + 1650;
            }
            if ((curlev <= 100) && (curlev > 0)) {
                low = 100 - curlev;
                low *= 1.0;
                high = reqlev - 800;
                high *= 5.0;
                price = high + low + 2100;
            }
        } else if (reqlev > 700 && reqlev <= 800) {
            if (curlev <= 800 && curlev > 700) {
                price = reqlev - curlev;
                price *= 4.5;
            }
            if (curlev <= 700 && curlev > 600) {
                low = 700 - curlev;
                low *= 4.0;
                high = reqlev - 700;
                high *= 4.5;
                price = high + low;
            }
            if ((curlev <= 600) && (curlev > 500)) {
                low = 600 - curlev;
                low *= 3.5;
                high = reqlev - 700;
                high *= 4.5;
                price = high + low + 200;

            }
            if ((curlev <= 500) && (curlev > 400)) {
                low = 500 - curlev;
                low *= 3.0;
                high = reqlev - 700;
                high *= 4.5;
                price = high + low + 350;

            }
            if ((curlev <= 400) && (curlev > 300)) {
                low = 400 - curlev;
                low *= 2.5;
                high = reqlev - 700;
                high *= 4.5;
                price = high + low + 600;

            }
            if ((curlev <= 300) && (curlev > 200)) {

                low = 300 - curlev;
                low *= 2.0;
                high = reqlev - 700;
                high *= 4.5;
                price = high + low + 900;

            }
            if ((curlev <= 200) && (curlev > 100)) {

                low = 200 - curlev;
                low *= 1.5;
                high = reqlev - 700;
                high *= 4.5;
                price = high + low + 1250;

            }
            if ((curlev <= 100) && (curlev > 0)) {
                low = 100 - curlev;
                low *= 1.0;
                high = reqlev - 700;
                high *= 4.5;
                price = high + low + 1650;
            }
        } else if (reqlev > 600 && reqlev <= 700) {
            if ((curlev <= 650) && (curlev > 600)) {
                price = reqlev - curlev;
                price *= 4.0;

            }
            if ((curlev <= 600) && (curlev > 500)) {
                low = 600 - curlev;
                low *= 3.5;
                high = reqlev - 600;
                high *= 4.0;
                price = high + low;

            }
            if ((curlev <= 500) && (curlev > 400)) {
                low = 500 - curlev;
                low *= 3.0;
                high = reqlev - 600;
                high *= 3.5;
                price = high + low + 150;

            }
            if ((curlev <= 400) && (curlev > 300)) {
                low = 400 - curlev;
                low *= 2.5;
                high = reqlev - 600;
                high *= 4.0;
                price = high + low + 350;

            }
            if ((curlev <= 300) && (curlev > 200)) {

                low = 300 - curlev;
                low *= 2.0;
                high = reqlev - 600;
                high *= 4.0;
                price = high + low + 600;

            }
            if ((curlev <= 200) && (curlev > 100)) {

                low = 200 - curlev;
                low *= 1.5;
                high = reqlev - 600;
                high *= 4.0;
                price = high + low + 900;

            }
            if ((curlev <= 100) && (curlev > 0)) {
                low = 100 - curlev;
                low *= 1.0;
                high = reqlev - 600;
                high *= 4.0;
                price = high + low + 1250;

            }

        } else if (reqlev > 500 && reqlev <= 600) {
            if ((curlev <= 600) && (curlev > 500)) {
                price = reqlev - curlev;
                price *= 3.5;

            }
            if ((curlev <= 500) && (curlev > 400)) {
                low = 500 - curlev;
                low *= 3.0;
                high = reqlev - 500;
                high *= 3.5;
                price = high + low;

            }
            if ((curlev <= 400) && (curlev > 300)) {
                low = 400 - curlev;
                low *= 2.5;
                high = reqlev - 500;
                high *= 3.5;
                price = high + low + 150;

            }
            if ((curlev <= 300) && (curlev > 200)) {
                low = 300 - curlev;
                low *= 2.0;
                high = reqlev - 500;
                high *= 3.5;
                price = high + low + 350;

            }
            if ((curlev <= 200) && (curlev > 100)) {

                low = 200 - curlev;
                low *= 1.5;
                high = reqlev - 500;
                high *= 3.5;
                price = high + low + 600;

            }
            if ((curlev <= 100) && (curlev > 0)) {
                low = 100 - curlev;
                low *= 1.0;
                high = reqlev - 500;
                high *= 3.5;
                price = high + low + 900;

            }
        } else if (reqlev > 400 && reqlev <= 500) {
            if ((curlev <= 500) && (curlev > 400)) {
                price = reqlev - curlev;
                price *= 3.0;

            }
            if ((curlev <= 400) && (curlev > 300)) {
                low = 400 - curlev;
                low *= 2.5;
                high = reqlev - 400;
                high *= 3.0;
                price = high + low;

            }
            if ((curlev <= 300) && (curlev > 200)) {
                low = 300 - curlev;
                low *= 2.0;
                high = reqlev - 400;
                high *= 3.0;
                price = high + low + 150;

            }
            if ((curlev <= 200) && (curlev > 100)) {
                low = 200 - curlev;
                low *= 1.5;
                high = reqlev - 400;
                high *= 3.0;
                price = high + low + 350;

            }
            if ((curlev <= 100) && (curlev > 000)) {
                low = 100 - curlev;
                low *= 1.0;
                high = reqlev - 400;
                high *= 3.0;
                price = high + low + 600;

            }

        } else if (reqlev > 300 && reqlev <= 400) {

            if ((curlev <= 400) && (curlev > 300)) {
                price = reqlev - curlev;
                price *= 2.5;

            }
            if ((curlev <= 300) && (curlev > 200)) {
                low = 300 - curlev;
                low *= 2.0;
                high = reqlev - 300;
                high *= 2.5;
                price = high + low;

            }
            if ((curlev <= 200) && (curlev > 100)) {
                low = 200 - curlev;
                low *= 1.5;
                high = reqlev - 300;
                high *= 2.5;
                price = high + low + 150;

            }
            if ((curlev <= 100) && (curlev > 0)) {
                low = 100 - curlev;
                low *= 1.0;
                high = reqlev - 300;
                high *= 2.5;
                price = high + low + 350;

            }
        } else if (reqlev > 200 && reqlev <= 300) {

            if ((curlev <= 300) && (curlev > 200)) {
                price = reqlev - curlev;
                price *= 2.0;

            }
            if ((curlev <= 200) && (curlev > 100)) {
                low = 200 - curlev;
                low *= 1.5;
                high = reqlev - 200;
                high *= 2.0;
                price = high + low;

            }
            if ((curlev <= 100) && (curlev > 0)) {
                low = 100 - curlev;
                low *= 1.0;
                high = reqlev - 200;
                high *= 2.0;
                price = high + low + 150;

            }

        } else if (reqlev > 100 && reqlev <= 200) {

            if ((curlev <= 200) && (curlev > 100)) {
                price = reqlev - curlev;
                price *= 1.5;

            }
            if ((curlev <= 100) && (curlev > 0)) {
                low = 100 - curlev;
                low *= 1.0;
                high = reqlev - 100;
                high *= 1.5;
                price = high + low;

            }

        } else if (reqlev > 1 && reqlev <= 850) {
            if ((curlev <= 100) && (curlev > 0)) {
                price = reqlev - curlev;
                price *= 1.0;

            }
        }
	return price;
}
