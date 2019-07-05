function defense(curlev,reqlev)
{
	var low,high,price;
	low = 0;
	high = 0;
	price = 0;
		
     if (reqlev > 650 && reqlev <= 850) {
            if (curlev <= 250) {
                high = reqlev - 650;
                high *= 3;
                low = 250 - curlev;
                low *= 1;
                price = high + low + 850;
            } else if (curlev <= 350) {
                high = reqlev - 650;
                high *= 3;
                low = 350 - curlev;
                low *= 1.5;
                price = high + low + 700;
            } else if (curlev <= 450) {
                high = reqlev - 650;
                high *= 3;
                low = 450 - curlev;
                low *= 2;
                price = high + low + 500;
            } else if (curlev <= 650) {
                high = reqlev - 650;
                high *= 3;
                low = 650 - curlev;
                low *= 2.5;
                price = high + low;

            } else if (curlev <= 850) {
                price = reqlev - curlev;
                price *= 3;
            }
        } else if (reqlev > 450) {
            if (curlev <= 250) {
                high = reqlev - 450;
                high *= 2.5;
                low = 250 - curlev;
                low *= 1;
                price = high + low + 350;
            } else if (curlev <= 350) {
                high = reqlev - 450;
                high *= 2.5;
                low = 350 - curlev;
                low *= 1.5;
                price = high + low + 200;
            } else if (curlev <= 450) {
                high = reqlev - 450;
                high *= 2.5;
                low = 450 - curlev;
                low *= 2;
                price = high + low;
            } else if (curlev <= 650) {
                price = reqlev - curlev;
                price *= 2.5;
            }
        } else if (reqlev >= 350) {
            if (curlev <= 250) {
                high = reqlev - 350;
                high *= 2;
                low = 250 - curlev;
                low *= 1;
                price = high + low + 150;
            } else if (curlev <= 350) {
                high = reqlev - 350;
                high *= 2;
                low = 350 - curlev;
                low *= 1.5;
                price = high + low;
            } else if (curlev <= 450) {
                price = reqlev - curlev;
                price *= 2;
            }
        } else if (reqlev > 250) {
            if (curlev <= 250) {
                high = reqlev - 250;
                high *= 1.5;
                low = 250 - curlev;
                low *= 1;
                price = high + low;
            } else if (curlev <= 350) {
                price = reqlev - curlev;
                price *= 1.5;
            }
        } else if (reqlev > 1) {
            price = reqlev - curlev;
            price *= 1;
        }
	return price;
}
