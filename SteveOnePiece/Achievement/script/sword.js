function sword(curlev,reqlev)
{
	var low,high,price;
	low =0;
	high=0;
	price=0;
	
	if (reqlev >= 450) {

                    if (curlev > 450 && curlev <= 750) {
                        price = reqlev - curlev;
                        price *= 2.0;
                    } else if (curlev > 250 && curlev <= 450) {
                        low = 450 - curlev;
                        low *= 1.5;
                        high = reqlev - 450;
                        high *= 2.0;
                        price = low + high;
                    } else if (curlev > 0 && curlev <= 250) {
                        low = 250 - curlev;
                        low *= 1.0;
                        high = reqlev - 450;
                        high *= 2.0;
                        price = low + high + 300;
                    }
                } else if (reqlev >= 250) {
                    if (curlev > 250 && curlev <= 450) {
                        price = reqlev - curlev;
                        price *= 1.5;
                    } else if (curlev > 0 && curlev <= 250) {
                        low = 250 - curlev;
                        low *= 1.0;
                        high = reqlev - 250;
                        high *= 1.5;
                        price = high + low;
                    }
                } else if (curlev >= 0) {
                    price = reqlev - curlev;
                    price *= 1.0;
                }
	return price;
}
               