class newMap {
    constructor(listOfCity) {
        this.listOfCity = listOfCity;
    }
    getNorthernmostCity() {
        let northestCity = this.listOfCity.reduce((northestCity, oneOfListCity) => {
            if (oneOfListCity[2] > northestCity[2]) {
                northestCity = oneOfListCity;
            }
            return northestCity;
        })
        return console.log(northestCity[0]);
    }
    getEasternmostCity() {
        let eastestCity = this.listOfCity.reduce((eastestCity, oneOfListCity) => {
            if (oneOfListCity[1] > eastestCity[1]) {
                eastestCity = oneOfListCity;
            }
            return eastestCity;
        })
        return console.log(eastestCity[0]);
    }
    getSouthernmostCity() {
        let southestCity = this.listOfCity.reduce((southestCity, oneOfListCity) => {
            if (oneOfListCity[2] < southestCity[2]) {
                southestCity = oneOfListCity;
            }
            return southestCity;
        })
        return console.log(southestCity[0]);
    }
    getWesternmostCity() {
        let westestCity = this.listOfCity.reduce((westestCity, oneOfListCity) => {
            if (oneOfListCity[1] < westestCity[1]) {
                westestCity = oneOfListCity;
            }
            return westestCity;
        })
        return console.log(westestCity[0]);
    }
    getNearestCity(latitude, longitude) {
        let nearestCity = this.listOfCity.reduce((nearestCity, oneOfListCity) => {
            function distance(city) {
                let distanceOfLatitude = Math.abs(city[1] - latitude);
                let distanceOfLongitude = Math.abs(city[2] - longitude);
                let distance = Math.sqrt(Math.pow(distanceOfLatitude, 2) + Math.pow(distanceOfLongitude, 2));
                return distance;
            }
            if (distance(nearestCity) > distance(oneOfListCity)) {
                nearestCity = oneOfListCity;
            }
            return nearestCity;
        })
        return console.log(nearestCity[0]);
    }
    getListOfAbbreviations() {
        let listOfAbbreviations = [];
        this.listOfCity.forEach((item) => {
            item.forEach((item, index) => {
                if (index === 0) {
                    listOfAbbreviations.push(item);
                }
            });
        });
        listOfAbbreviations = listOfAbbreviations.map((item) => {
            return item.substr(item.length - 2, 2);
        });
        listOfAbbreviations = [...new Set(listOfAbbreviations)];
        listOfAbbreviations = listOfAbbreviations.join(" ");
        return console.log(listOfAbbreviations);
    }

}


(function () {
    let map = new newMap([
        ["Nashville, TN", 36.17, -86.78],
        ["New York, NY", 40.71, -74.00],
        ["Atlanta, GA", 33.75, -84.39],
        ["Denver, CO", 39.74, -104.98],
        ["Seattle, WA", 47.61, -122.33],
        ["Los Angeles, CA", 34.05, -118.24],
        ["Memphis, TN", 35.15, -90.05]
    ]);
    map.getNorthernmostCity();
    map.getSouthernmostCity();
    map.getEasternmostCity();
    map.getWesternmostCity();
    map.getNearestCity(40, -90);
    map.getListOfAbbreviations();
}());