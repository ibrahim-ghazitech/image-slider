 // var prevButton = document.querySelector(".pre-btn");
        // var nextButton = document.querySelector(".next-btn");
        
        // CAROUSEL START 

        var i = 0; 
        var carouselImages = document.querySelector("#img");

        carouselImages.src = "assest/images/img1.jpg";
        //console.log(carouselImages.src);

        var images=["assest/images/img1.jpg", "assest/images/img2.jpg", "assest/images/img3.jpg", "assest/images/img4.jpg", "assest/images/img5.jpg"];

        function changeImages(){
            carouselImages.src = images[i];
            //console.log(carouselImages.src);
        }


        function next(){
          // debugger;
          i++;                      
          if (i >= images.length){      // If i is less than or equal to the value in the image array, then i will become zero.
                i = 0;
            }
            changeImages(); 
        }
        function previous(){
            //debugger;
            i--;
            if (i < 0){
                i = images.length -1; // Subtract one because the length of the array is 5, and the index 4 is equivalent to the length of the array minus one. So, if you access index 4, it is the last element of the array, and the array length is effectively the index plus one.
                                         
                //console.log(i);
            }
            changeImages()
        }

        // CAROUSEL END
        