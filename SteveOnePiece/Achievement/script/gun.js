function gun(curlev,reqlev)
{
	var low,high,price;
	low = 0;
	high = 0;
	price = 0;
	if (reqlev >= 600) {
                    if (curlev > 600 && curlev <= 750) {
                        price = reqlev - curlev;
                        price *= 2.5;
                    } else if (curlev > 400 && curlev <= 600) {
                        low = 600 - curlev;
                        low *= 2.0;
                        high = reqlev - 600;
                        high *= 2.5;
                        price = low + high;
                    } else if (curlev > 200 && curlev <= 400) {
                        low = 400 - curlev;
                        low *= 1.5;
                        high = reqlev - 600;
                        high *= 2.5;
                        price = low + high + 400;
                    } else if (curlev > 0 && curlev <= 200) {
                        low = 200 - curlev;
                        low *= 1.0;
                        high = reqlev - 600;
                        high *= 2.5;
                        price = low + high + 300 + 400;
                    }
                } else if (reqlev >= 400) {

                    if (curlev > 400 && curlev <= 600) {
                        price = reqlev - curlev;
                        price *= 2.0;
                    } else if (curlev > 200 && curlev <= 400) {
                        low = 400 - curlev;
                        low *= 1.5;
                        high = reqlev - 400;
                        high *= 2.0;
                        price = low + high;
                    } else if (curlev > 0 && curlev <= 200) {
                        low = 200 - curlev;
                        low *= 1.0;
                        high = reqlev - 400;
                        high *= 2.0;
                        price = low + high + 300;
                    }
                } else if (reqlev >= 200) {
                    if (curlev > 200 && curlev <= 400) {
                        price = reqlev - curlev;
                        price *= 1.5;

                    } else if (curlev > 0 && curlev <= 200) {
                        low = 200 - curlev;
                        low *= 1.0;
                        high = reqlev - 200;
                        high *= 1.5;
                        price = high + low;
                    }
                } else if (curlev >= 0) {
                    price = reqlev - curlev;
                    price *= 1.0;
                }
	return price;
}
