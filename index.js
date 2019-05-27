// Import stylesheets
import './style.css';
var width = 600;
                    var height = 450;
              
                    var stage = new Konva.Stage({
                        container: 'container',
                        width: width,
                        height: height
                    });
              
                    var layer = new Konva.Layer();
              
                    var rectHeight = 50;
                    var rectWidth = 100;
                    var rectY = (stage.height() - rectHeight) / 2;
              
                    var tableVr = 460;
                    for (var x = 60; x <= tableVr; x += 30) {
                        var vrMidLine = new Konva.Line({
                            points: [10, 10, 10, 400],
                            stroke: '#cccccc',
                            strokeWidth: 1,
                            x:x,
                        });

                        layer.add(vrMidLine);
                    }

                    var tableHr = 400;
                    for (var y = 0; y <= tableHr; y += 30) {
                        var hrMidLine = new Konva.Line({
                                points: [400,10,10 ,10],
                                stroke: '#cccccc',
                                strokeWidth: 1,
                                x:60,
                                y:y
                            });

                            layer.add(hrMidLine);
                    }

                    var rectOuter = new Konva.Rect({
                        x: 70,
                        y: 10,
                        width: 30,
                        height: 30,
                        stroke: '#b22602',
                        strokeWidth: 1
                    });

                    layer.add(rectOuter);

                    var hrLeftLine = new Konva.Line({
                        points: [10, 0, 10, 20],
                        stroke: 'black',
                        strokeWidth: 2,
                        x:60,
                        y:420
                    });

                    var hrMidLine = new Konva.Line({
                        points: [400,10,10 ,10],
                        stroke: 'black',
                        strokeWidth: 2,
                        x:60,
                        y:420
                    });

                    var hrRightLine = new Konva.Line({
                        points: [10, 0, 10, 20],
                        stroke: 'black',
                        strokeWidth: 2,
                        x:450,
                        y:420
                    });
                    var hrBullet = 30;
                    var hrCircle = new Konva.Circle({
                        x: 80,
                        y: 430,
                        radius: 10,
                        fill: '#b22602',
                        stroke: 'black',
                        strokeWidth: 0,
                        draggable: true,
                      dragBoundFunc: function(pos) {
                          var POS = pos.x;
                          
                         if(pos.x<80){
                            POS = 80;
                            hrBullet=30;
                         }else if(pos.x>450){
                            POS = 450;
                            hrBullet=390;
                         }
                         rectOuter.setAttr('width', hrBullet); 
                         if(pos.x<hrBullet){
                            hrBullet = hrBullet - 30;
                         }else{
                            hrBullet = hrBullet + 30;
                         }
                         
                        return {
                          x: POS,
                          y: 430
                        };
                      }
                    });
                    layer.add(hrRightLine);
                    layer.add(hrLeftLine);
                    layer.add(hrMidLine);
                    layer.add(hrCircle);

                    var vrTopLine = new Konva.Line({
                        points: [30,10,10 ,10],
                        stroke: 'black',
                        strokeWidth: 2,
                        y:0
                    });

                    var vrMidLine = new Konva.Line({
                        points: [10, 10, 10, 400],
                        stroke: 'black',
                        strokeWidth: 2,
                        x:10
                    });

                    var vrBottomLine = new Konva.Line({
                        points: [30,10,10 ,10],
                        stroke: 'black',
                        strokeWidth: 2,
                        y:390
                    });
                    var vrBullet = 90;
                    var postionVr = 390; 
                    var vrCircle = new Konva.Circle({
                        x: 20,
                        y: 390,
                        radius: 10,
                        fill: '#b22602',
                        stroke: 'black',
                        strokeWidth: 0,
                        draggable: true,
                      dragBoundFunc: function(pos) {
                          var POS = pos.y;
                         if(pos.y<20){
                            POS = 20;
                            vrBullet = 30;
                          
                         }else if(pos.y>390){
                            POS = 390;
                            vrBullet = 390;
                            
                         }
                         
                         rectOuter.setAttr('height', vrBullet); 
                         
                         if(pos.y<vrBullet){
                            
                            vrBullet = vrBullet - 30;
                            
                         }else{
                            vrBullet = vrBullet + 30;
                            
                         }  
                         

                         

                        return {
                          x: 20,
                          y: POS
                        };
                      }
                    });
                    
                    layer.add(vrTopLine);
                    layer.add(vrMidLine);
                    layer.add(vrBottomLine);
                    layer.add(vrCircle);
                    

                    var imageObj = new Image();
                    imageObj.onload = function() {
                        var yoda = new Konva.Image({
                        x: 70,
                        y: 280,
                        image: imageObj,
                        width: 120,
                        height: 120
                        });

                        // add the shape to the layer
                        layer.add(yoda);

                        // add the layer to the stage
                        stage.add(layer);
                    };
                    imageObj.src = '/images/img_3_1_2.jpg';

                    
                    
                    // add the layer to the stage
                    stage.add(layer);
