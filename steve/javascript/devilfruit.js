function devilfruit(curlev,reqlev)
{
	var low,high,price;
	low = 0;
	high = 0;
	price = 0;
	
    if (reqlev <= 350) {
            price = reqlev - curlev;
            price /= 2;
        } else if (curlev < 350) {
           high = reqlev - 350;
           low = 350 - curlev;
           low /= 2;
           price = low + high;
        } else {
      		price = reqlev - curlev;
        }
	return price;
}

