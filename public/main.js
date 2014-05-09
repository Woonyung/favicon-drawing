paper.install(window);
    // Keep global references to both tools, so the HTML
    // links below can access them.
    var path;
    var tool1, tool2, tool3, tool4, tool5, tool6;
    var color1, color2, color3, color4, color5,
        color6, color7, color8, color8, color9,
        color10, color11, color12, color13, color14,
        color15, color16, color17, color18, color19, color20;
    // var size = 600;

    var currentTool;



    window.onload = function() {



        /******************************************************
          _             _                             _ 
         | |__  __ _ __| |____ _ _ _ ___ _  _ _ _  __| |
         | '_ \/ _` / _| / / _` | '_/ _ \ || | ' \/ _` |
         |_.__/\__,_\__|_\_\__, |_| \___/\_,_|_||_\__,_|
                           |___/                   
        ******************************************************/
        var canvas = document.getElementById('myCanvas');
        // Create an empty project and a view for the canvas:
        paper.setup(canvas);




        /////////////////// BUTTONS ///////////////////

        // gallery //
        $("#gallery").hover(function(){ 
            $('#gallery').attr('src','/public/sketch/00_1_r.png');
        });

        $("#gallery").mouseleave(function(){ 
            $('#gallery').attr('src','/public/sketch/00_1.png');
        });

        // reset //
        $("#reset").hover(function(){
            $('#reset').attr('src','/public/sketch/00_2_r.png');
        });
        $("#reset").mouseleave(function(){ 
            $('#reset').attr('src','/public/sketch/00_2.png');
        });

        $("#resetF").click(function(){
            paper.project.activeLayer.removeChildren();
        });



        // download //
        $("#download").hover(function(){
            $('#download').attr('src','/public/sketch/00_3_r.png');
                });
        $("#download").mouseleave(function(){ 
            $('#download').attr('src','/public/sketch/00_3.png');
        });


        // image download function
        $('#downloadF').click(function(){
            downloadCanvas(this, 'myCanvas', '01.png'); // download the favicon   
            // console.log(this.href);
            var imageString = this.href;
            //window.open(this.href, "toDataURL() image", "width=100, height=100");
            // $('#gallery').append("<img class='galleryImages' src='" + this.href + "'>");
 
            //add another function???
            resizeCanvas();
        });

        //download function
        function downloadCanvas(link, canvasId, filename) {
                    link.href = document.getElementById(canvasId).toDataURL();
                    link.download = filename;

        }



        // back //
        $("#back").hover(function(){
            $('#back').attr('src','/public/sketch/00_5_r.png');
                });
        $("#back").mouseleave(function(){ 
            $('#back').attr('src','/public/sketch/00_5.png');
        });



        //submit - function
        $('#theForm').submit(function(){
            // console.log("submit button!");
            downloadCanvas(this, 'myCanvas', '01.png'); // download the favicon 
            console.log(this.href);
            var imageString;
            imageString = this.href;

            var dataToSave = {
               imageData : imageString,
               title : $('#theTitle').val()
               // name : $('#theName').val()   
            };
            //console.log(dataToSave);
            //return false;

            $.ajax({
             url: '/submitFav',
             contentType: 'application/json',
             type: "POST",
             data: JSON.stringify(dataToSave),
             error: function(data){
              console.log(data.status);
             },
            success: function(data){
                //JSON.parse(data);
                console.log(data);


                //Add code to clear the canvas
                paper.project.activeLayer.removeChildren();
                
                //Thank them

                //Send them to the gallery
                document.location.href = '/gallery';

                }
            });

            // //prevent the form from submitting
            return false;
        });




        function resizeCanvas(){
            // var ctx = canvas.getContext("2d");
            // ctx.scale(2,2);
            // canvas.width=canvas.width*0.5; canvas.height=canvas.height*0.5;
            // console.log(canvas.width + "," + canvas.height);


            // console.log(paper.project.view._viewSize.width + "," + 
            //             paper.project.view._viewSize.height);
        }


        /******************************************************
           ___     _            
          / __|___| |___ _ _ ___
         | (__/ _ \ / _ \ '_(_-<
          \___\___/_\___/_| /__/
        ******************************************************/                        

        var currentColor = '#a5b2ac';

        color1 = new Tool();
        color1.onMouseDown = function(event){
            console.log('RED');
            currentColor = '#fd746c';
            console.log(currentTool);
            if (currentTool){
                currentTool.onMouseDown();
            }
        }


        color2 = new Tool();
        color2.onMouseDown = function(event){
            currentColor = '#e06962';
            console.log(currentTool);
            if (currentTool){
                curentTool.onMouseDown();
            }
        }

        color3 = new Tool();
        color3.onMouseDown = function(event){
            currentColor = '#fda96f';
            console.log(currentTool);
            if (currentTool){
                curentTool.onMouseDown();
            }
        }

        color4 = new Tool();
        color4.onMouseDown = function(event){
            currentColor = '#fec871';
            console.log(currentTool);
            if (currentTool){
                curentTool.onMouseDown();
            }
        }


        color5 = new Tool();
        color5.onMouseDown = function(event){
            currentColor = '#fee460';
            console.log(currentTool);
            if (currentTool){
                curentTool.onMouseDown();
            }
        }
               
        /////////////// second row ////////////////     
        color6 = new Tool();
        color6.onMouseDown = function(event){
            currentColor = '#dbfd76';
            console.log(currentTool);
            if (currentTool){
                currentTool.onMouseDown();
            }
        }


        color7 = new Tool();
        color7.onMouseDown = function(event){
            currentColor = '#83c7a9';
            console.log(currentTool);
            if (currentTool){
                curentTool.onMouseDown();
            }
        }

        color8 = new Tool();
        color8.onMouseDown = function(event){
            currentColor = '#7aae97';
            console.log(currentTool);
            if (currentTool){
                curentTool.onMouseDown();
            }
        }

        color9 = new Tool();
        color9.onMouseDown = function(event){
            currentColor = '#91c888';
            console.log(currentTool);
            if (currentTool){
                curentTool.onMouseDown();
            }
        }


        color10 = new Tool();
        color10.onMouseDown = function(event){
            currentColor = '#b8ed93';
            console.log(currentTool);
            if (currentTool){
                curentTool.onMouseDown();
            }
        }

        /////////////// third row ////////////////
        color11 = new Tool();
        color11.onMouseDown = function(event){
            currentColor = '#cbf36c';
            console.log(currentTool);
            if (currentTool){
                currentTool.onMouseDown();
            }
        }


        color12 = new Tool();
        color12.onMouseDown = function(event){
            currentColor = '#99ecc6';
            console.log(currentTool);
            if (currentTool){
                curentTool.onMouseDown();
            }
        }

        color13 = new Tool();
        color13.onMouseDown = function(event){
            currentColor = '#99e6ec';
            console.log(currentTool);
            if (currentTool){
                curentTool.onMouseDown();
            }
        }

        color14 = new Tool();
        color14.onMouseDown = function(event){
            currentColor = '#a0c9da';
            console.log(currentTool);
            if (currentTool){
                curentTool.onMouseDown();
            }
        }


        color15 = new Tool();
        color15.onMouseDown = function(event){
            currentColor = '#7e96af';
            console.log(currentTool);
            if (currentTool){
                curentTool.onMouseDown();
            }
        }

        /////////////// fourth row ////////////////
        color16 = new Tool();
        color16.onMouseDown = function(event){
            currentColor = '#b3a6d5';
            console.log(currentTool);
            if (currentTool){
                currentTool.onMouseDown();
            }
        }


        color17 = new Tool();
        color17.onMouseDown = function(event){
            currentColor = '#f4b9de';
            console.log(currentTool);
            if (currentTool){
                currentTool.onMouseDown();
            }
        }

        color18 = new Tool();
        color18.onMouseDown = function(event){
            currentColor = 'white';
            console.log(currentTool);
            if (currentTool){
                curentTool.onMouseDown();
            }
        }

        color19 = new Tool();
        color19.onMouseDown = function(event){
            currentColor = '#413d3f';
            console.log(currentTool);
            if (currentTool){
                curentTool.onMouseDown();
            }
        }


        color20 = new Tool();
        //random color
        color20.onMouseDown = function(event){
            currentColor = {
                hue: Math.random() * 360,
                saturation: 0.5,
                brightness: 1
            };
            console.log(currentTool);
            if (currentTool){
                curentTool.onMouseDown();
            }
        }       





        /******************************************************
          _            _    
         | |_ ___  ___| |___
         |  _/ _ \/ _ \ (_-<
          \__\___/\___/_/__/
                            
        ******************************************************/
        // Create two drawing tools.

        /////////////////// TOOL1 : COLOR PAPERS ///////////////////
        tool1 = new Tool();
        tool1.onMouseDown = function(event){
            currentTool = tool1;
            var copy = new Raster('brush1');
            copy.scale(1);
            copy.position.x = event.event.layerX;
            copy.position.y = event.event.layerY;
            // Colors1Copies.addChild(copy);
        }

        tool1.onMouseDrag = function(event) {
        }


        /////////////////// TOOL2 :  EYEDROPPER ///////////////////
        tool2 = new Tool();
        // tool2.minDistance = 20;
        tool2.onMouseDown = function(event){
            currentTool = tool2;
            var circle = new Path.Circle({
                center: event.middlePoint,
                radius: Math.random()* 10
            });
            circle.fillColor = currentColor;
                
        }

        tool2.onMouseDrag = function(event) {
            // Use the arcTo command to draw cloudy lines
            // path.arcTo(event.point);
            circle = new Path.Circle({
                center: event.middlePoint,
                radius: Math.random()* 20
            });
            circle.fillColor = currentColor;
        }


        /////////////////// TOOL3 : BRUSH 1 ///////////////////
        tool3 = new Tool();
        tool3.minDistance = 4;
        tool3.maxDistance = 16;


        tool3.onMouseDown = function(event){
            // console.log("mouseDowned");
            cuurentTool = tool3;
            console.log(currentTool);
        }

        tool3.onMouseDrag = function(event) {
            // console.log("mouseDragged");
            circle = new Path.Circle({
                center: event.middlePoint,
                radius: event.delta.length / 2
            });


            circle.fillColor = currentColor;
            // circle.fillColor = {
            //     hue: Math.random() * 360,
            //     saturation: 0.5,
            //     brightness: 1
            // };


        }

        tool3.onMouseUp= function(event){
            // console.log("mouseUp");

        }

        /////////////////// TOOL4 : BRUSH 2 ///////////////////
        tool4 = new Tool();
        tool4.minDistance = 20;
        tool4.maxDistance = 45;

        tool4.onMouseDown = function(event){
            cuurentTool = tool4;
            console.log(currentTool);
        }

        tool4.onMouseDrag = function(event) {
            circle = new Path.Circle({
                center: event.middlePoint,
                radius: event.delta.length / 2
            });


            // circle.fillColor = currentColor;
            circle.fillColor = {
                hue: Math.random() * 360,
                saturation: 0.5,
                brightness: 1
            };
        }

        tool4.onMouseUp = function(event){

        }


        /////////////////// TOOL5 : BUCKET ///////////////////
        // this guy is the problem.
        tool5 = new Tool();
        tool5.onMouseDown = function(event){
            cuurentTool = tool5;
            console.log(currentTool);
            path = new Path.Rectangle({
                point: (0 , 0),
                size: 600,
            });
            path.fillColor = currentColor;
        }

        tool5.onMouseUp = function(event){
            console.log("mouseUp");

        }



        /////////////////// TOOL6: COLOR TAPE ///////////////////
        tool6 = new Tool();
        tool6.onMouseDown = function(event){
            // console.log("??????");
            cuurentTool = tool6;
            console.log(currentTool);
            path = new Path.Rectangle({
                point: (event.event.layerX , event.event.layerY),
                size: 10,
                fillColor: currentColor
            });

        }

        tool6.onMouseDrag = function(event) {
        }

}




