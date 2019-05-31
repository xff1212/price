module.exports = function main(inputs) {
    // write your code here...
	distance = inputs.distance;
	parkTime = inputs.parkTime;
	if (distance <= 2){
		price = Math.round(6 + 0.25*parkTime);
	} else if (distance <= 8){
		price = Math.round(6 + 0.8*(distance-2) + 0.25*parkTime);
	} else {
		price = Math.round(6 + 0.8*6 + 1.2*(distance-8) + 0.25*parkTime);
	}
    return price;
};
