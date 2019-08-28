/*



	" Reimplement the wheel to either learn, or make it better. "

    http://www.hayder.design/
    https://www.youtube.com/watch?v=QOlTGA3RE8I
    
    Product Name: YouTubeTracker,
	Description: Tracking YouTube"s data.
	Beneficiary: COSMOS
	
	Copyright © 1992 - 2019 HAYDER, All Rights Reserved.
	
	
	
*/



document.addEventListener("DOMContentLoaded", function() {

    // Header

    class Header {

        constructor() {

            this.header = document.querySelector("header");
            this.initialize();

        }

        initialize() {

            

        }

        addCSSClass(cssClass) {

            this.header.classList.add(cssClass);

        }

        removeCSSClass(cssClass) {

            this.header.classList.remove(cssClass);

        }

    }


    // Initialization

    let header = new Header();

});