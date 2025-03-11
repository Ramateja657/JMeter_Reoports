/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 113.0, "minX": 0.0, "maxY": 1214.0, "series": [{"data": [[0.0, 113.0], [0.1, 114.0], [0.2, 115.0], [0.3, 115.0], [0.4, 115.0], [0.5, 115.0], [0.6, 116.0], [0.7, 116.0], [0.8, 116.0], [0.9, 116.0], [1.0, 116.0], [1.1, 116.0], [1.2, 116.0], [1.3, 117.0], [1.4, 117.0], [1.5, 117.0], [1.6, 117.0], [1.7, 117.0], [1.8, 117.0], [1.9, 117.0], [2.0, 117.0], [2.1, 117.0], [2.2, 117.0], [2.3, 117.0], [2.4, 117.0], [2.5, 118.0], [2.6, 118.0], [2.7, 118.0], [2.8, 118.0], [2.9, 118.0], [3.0, 118.0], [3.1, 118.0], [3.2, 118.0], [3.3, 118.0], [3.4, 118.0], [3.5, 118.0], [3.6, 118.0], [3.7, 118.0], [3.8, 118.0], [3.9, 118.0], [4.0, 118.0], [4.1, 118.0], [4.2, 118.0], [4.3, 118.0], [4.4, 118.0], [4.5, 118.0], [4.6, 119.0], [4.7, 119.0], [4.8, 119.0], [4.9, 119.0], [5.0, 119.0], [5.1, 119.0], [5.2, 119.0], [5.3, 119.0], [5.4, 119.0], [5.5, 119.0], [5.6, 119.0], [5.7, 119.0], [5.8, 119.0], [5.9, 119.0], [6.0, 119.0], [6.1, 119.0], [6.2, 119.0], [6.3, 119.0], [6.4, 119.0], [6.5, 119.0], [6.6, 119.0], [6.7, 119.0], [6.8, 119.0], [6.9, 119.0], [7.0, 119.0], [7.1, 119.0], [7.2, 120.0], [7.3, 120.0], [7.4, 120.0], [7.5, 120.0], [7.6, 120.0], [7.7, 120.0], [7.8, 120.0], [7.9, 120.0], [8.0, 120.0], [8.1, 120.0], [8.2, 120.0], [8.3, 120.0], [8.4, 120.0], [8.5, 120.0], [8.6, 120.0], [8.7, 120.0], [8.8, 120.0], [8.9, 120.0], [9.0, 120.0], [9.1, 120.0], [9.2, 120.0], [9.3, 120.0], [9.4, 120.0], [9.5, 120.0], [9.6, 120.0], [9.7, 120.0], [9.8, 120.0], [9.9, 120.0], [10.0, 120.0], [10.1, 120.0], [10.2, 120.0], [10.3, 120.0], [10.4, 120.0], [10.5, 120.0], [10.6, 121.0], [10.7, 121.0], [10.8, 121.0], [10.9, 121.0], [11.0, 121.0], [11.1, 121.0], [11.2, 121.0], [11.3, 121.0], [11.4, 121.0], [11.5, 121.0], [11.6, 121.0], [11.7, 121.0], [11.8, 121.0], [11.9, 121.0], [12.0, 121.0], [12.1, 121.0], [12.2, 121.0], [12.3, 121.0], [12.4, 121.0], [12.5, 121.0], [12.6, 121.0], [12.7, 121.0], [12.8, 121.0], [12.9, 121.0], [13.0, 121.0], [13.1, 121.0], [13.2, 121.0], [13.3, 121.0], [13.4, 121.0], [13.5, 121.0], [13.6, 121.0], [13.7, 121.0], [13.8, 121.0], [13.9, 121.0], [14.0, 122.0], [14.1, 122.0], [14.2, 122.0], [14.3, 122.0], [14.4, 122.0], [14.5, 122.0], [14.6, 122.0], [14.7, 122.0], [14.8, 122.0], [14.9, 122.0], [15.0, 122.0], [15.1, 122.0], [15.2, 122.0], [15.3, 122.0], [15.4, 122.0], [15.5, 122.0], [15.6, 122.0], [15.7, 122.0], [15.8, 122.0], [15.9, 122.0], [16.0, 122.0], [16.1, 122.0], [16.2, 122.0], [16.3, 122.0], [16.4, 122.0], [16.5, 122.0], [16.6, 122.0], [16.7, 122.0], [16.8, 122.0], [16.9, 122.0], [17.0, 122.0], [17.1, 122.0], [17.2, 122.0], [17.3, 122.0], [17.4, 123.0], [17.5, 123.0], [17.6, 123.0], [17.7, 123.0], [17.8, 123.0], [17.9, 123.0], [18.0, 123.0], [18.1, 123.0], [18.2, 123.0], [18.3, 123.0], [18.4, 123.0], [18.5, 123.0], [18.6, 123.0], [18.7, 123.0], [18.8, 123.0], [18.9, 123.0], [19.0, 123.0], [19.1, 123.0], [19.2, 123.0], [19.3, 123.0], [19.4, 123.0], [19.5, 123.0], [19.6, 123.0], [19.7, 123.0], [19.8, 123.0], [19.9, 123.0], [20.0, 123.0], [20.1, 123.0], [20.2, 123.0], [20.3, 123.0], [20.4, 123.0], [20.5, 123.0], [20.6, 123.0], [20.7, 123.0], [20.8, 123.0], [20.9, 123.0], [21.0, 123.0], [21.1, 124.0], [21.2, 124.0], [21.3, 124.0], [21.4, 124.0], [21.5, 124.0], [21.6, 124.0], [21.7, 124.0], [21.8, 124.0], [21.9, 124.0], [22.0, 124.0], [22.1, 124.0], [22.2, 124.0], [22.3, 124.0], [22.4, 124.0], [22.5, 124.0], [22.6, 124.0], [22.7, 124.0], [22.8, 124.0], [22.9, 124.0], [23.0, 124.0], [23.1, 124.0], [23.2, 124.0], [23.3, 124.0], [23.4, 124.0], [23.5, 124.0], [23.6, 124.0], [23.7, 125.0], [23.8, 125.0], [23.9, 125.0], [24.0, 125.0], [24.1, 125.0], [24.2, 125.0], [24.3, 125.0], [24.4, 125.0], [24.5, 125.0], [24.6, 125.0], [24.7, 125.0], [24.8, 125.0], [24.9, 125.0], [25.0, 125.0], [25.1, 125.0], [25.2, 125.0], [25.3, 125.0], [25.4, 125.0], [25.5, 125.0], [25.6, 125.0], [25.7, 125.0], [25.8, 125.0], [25.9, 125.0], [26.0, 125.0], [26.1, 126.0], [26.2, 126.0], [26.3, 126.0], [26.4, 126.0], [26.5, 126.0], [26.6, 126.0], [26.7, 126.0], [26.8, 126.0], [26.9, 126.0], [27.0, 126.0], [27.1, 126.0], [27.2, 126.0], [27.3, 126.0], [27.4, 126.0], [27.5, 126.0], [27.6, 126.0], [27.7, 126.0], [27.8, 126.0], [27.9, 126.0], [28.0, 126.0], [28.1, 127.0], [28.2, 127.0], [28.3, 127.0], [28.4, 127.0], [28.5, 127.0], [28.6, 127.0], [28.7, 127.0], [28.8, 127.0], [28.9, 127.0], [29.0, 127.0], [29.1, 127.0], [29.2, 127.0], [29.3, 127.0], [29.4, 127.0], [29.5, 127.0], [29.6, 127.0], [29.7, 127.0], [29.8, 127.0], [29.9, 127.0], [30.0, 127.0], [30.1, 127.0], [30.2, 128.0], [30.3, 128.0], [30.4, 128.0], [30.5, 128.0], [30.6, 128.0], [30.7, 128.0], [30.8, 128.0], [30.9, 128.0], [31.0, 128.0], [31.1, 128.0], [31.2, 128.0], [31.3, 128.0], [31.4, 128.0], [31.5, 128.0], [31.6, 128.0], [31.7, 128.0], [31.8, 128.0], [31.9, 128.0], [32.0, 128.0], [32.1, 128.0], [32.2, 128.0], [32.3, 129.0], [32.4, 129.0], [32.5, 129.0], [32.6, 129.0], [32.7, 129.0], [32.8, 129.0], [32.9, 129.0], [33.0, 129.0], [33.1, 129.0], [33.2, 129.0], [33.3, 129.0], [33.4, 129.0], [33.5, 129.0], [33.6, 129.0], [33.7, 129.0], [33.8, 129.0], [33.9, 129.0], [34.0, 129.0], [34.1, 129.0], [34.2, 129.0], [34.3, 129.0], [34.4, 129.0], [34.5, 129.0], [34.6, 130.0], [34.7, 130.0], [34.8, 130.0], [34.9, 130.0], [35.0, 130.0], [35.1, 130.0], [35.2, 130.0], [35.3, 130.0], [35.4, 130.0], [35.5, 130.0], [35.6, 130.0], [35.7, 130.0], [35.8, 130.0], [35.9, 130.0], [36.0, 130.0], [36.1, 130.0], [36.2, 130.0], [36.3, 130.0], [36.4, 130.0], [36.5, 130.0], [36.6, 130.0], [36.7, 130.0], [36.8, 130.0], [36.9, 130.0], [37.0, 130.0], [37.1, 130.0], [37.2, 130.0], [37.3, 130.0], [37.4, 130.0], [37.5, 130.0], [37.6, 130.0], [37.7, 131.0], [37.8, 131.0], [37.9, 131.0], [38.0, 131.0], [38.1, 131.0], [38.2, 131.0], [38.3, 131.0], [38.4, 131.0], [38.5, 131.0], [38.6, 131.0], [38.7, 131.0], [38.8, 131.0], [38.9, 131.0], [39.0, 131.0], [39.1, 131.0], [39.2, 131.0], [39.3, 131.0], [39.4, 131.0], [39.5, 131.0], [39.6, 131.0], [39.7, 131.0], [39.8, 131.0], [39.9, 131.0], [40.0, 131.0], [40.1, 131.0], [40.2, 131.0], [40.3, 131.0], [40.4, 131.0], [40.5, 131.0], [40.6, 131.0], [40.7, 131.0], [40.8, 131.0], [40.9, 131.0], [41.0, 131.0], [41.1, 131.0], [41.2, 131.0], [41.3, 131.0], [41.4, 131.0], [41.5, 132.0], [41.6, 132.0], [41.7, 132.0], [41.8, 132.0], [41.9, 132.0], [42.0, 132.0], [42.1, 132.0], [42.2, 132.0], [42.3, 132.0], [42.4, 132.0], [42.5, 132.0], [42.6, 132.0], [42.7, 132.0], [42.8, 132.0], [42.9, 132.0], [43.0, 132.0], [43.1, 132.0], [43.2, 132.0], [43.3, 132.0], [43.4, 132.0], [43.5, 132.0], [43.6, 132.0], [43.7, 132.0], [43.8, 132.0], [43.9, 132.0], [44.0, 132.0], [44.1, 132.0], [44.2, 132.0], [44.3, 132.0], [44.4, 132.0], [44.5, 132.0], [44.6, 132.0], [44.7, 132.0], [44.8, 132.0], [44.9, 132.0], [45.0, 132.0], [45.1, 132.0], [45.2, 133.0], [45.3, 133.0], [45.4, 133.0], [45.5, 133.0], [45.6, 133.0], [45.7, 133.0], [45.8, 133.0], [45.9, 133.0], [46.0, 133.0], [46.1, 133.0], [46.2, 133.0], [46.3, 133.0], [46.4, 133.0], [46.5, 133.0], [46.6, 133.0], [46.7, 133.0], [46.8, 133.0], [46.9, 133.0], [47.0, 133.0], [47.1, 133.0], [47.2, 133.0], [47.3, 133.0], [47.4, 133.0], [47.5, 133.0], [47.6, 133.0], [47.7, 133.0], [47.8, 133.0], [47.9, 133.0], [48.0, 133.0], [48.1, 133.0], [48.2, 133.0], [48.3, 133.0], [48.4, 133.0], [48.5, 133.0], [48.6, 133.0], [48.7, 133.0], [48.8, 133.0], [48.9, 133.0], [49.0, 133.0], [49.1, 133.0], [49.2, 134.0], [49.3, 134.0], [49.4, 134.0], [49.5, 134.0], [49.6, 134.0], [49.7, 134.0], [49.8, 134.0], [49.9, 134.0], [50.0, 134.0], [50.1, 134.0], [50.2, 134.0], [50.3, 134.0], [50.4, 134.0], [50.5, 134.0], [50.6, 134.0], [50.7, 134.0], [50.8, 134.0], [50.9, 134.0], [51.0, 134.0], [51.1, 134.0], [51.2, 134.0], [51.3, 134.0], [51.4, 134.0], [51.5, 134.0], [51.6, 134.0], [51.7, 134.0], [51.8, 134.0], [51.9, 134.0], [52.0, 134.0], [52.1, 134.0], [52.2, 134.0], [52.3, 134.0], [52.4, 134.0], [52.5, 134.0], [52.6, 134.0], [52.7, 134.0], [52.8, 134.0], [52.9, 134.0], [53.0, 135.0], [53.1, 135.0], [53.2, 135.0], [53.3, 135.0], [53.4, 135.0], [53.5, 135.0], [53.6, 135.0], [53.7, 135.0], [53.8, 135.0], [53.9, 135.0], [54.0, 135.0], [54.1, 135.0], [54.2, 135.0], [54.3, 135.0], [54.4, 135.0], [54.5, 135.0], [54.6, 135.0], [54.7, 135.0], [54.8, 135.0], [54.9, 135.0], [55.0, 135.0], [55.1, 135.0], [55.2, 135.0], [55.3, 135.0], [55.4, 135.0], [55.5, 135.0], [55.6, 135.0], [55.7, 135.0], [55.8, 135.0], [55.9, 135.0], [56.0, 135.0], [56.1, 135.0], [56.2, 135.0], [56.3, 136.0], [56.4, 136.0], [56.5, 136.0], [56.6, 136.0], [56.7, 136.0], [56.8, 136.0], [56.9, 136.0], [57.0, 136.0], [57.1, 136.0], [57.2, 136.0], [57.3, 136.0], [57.4, 136.0], [57.5, 136.0], [57.6, 136.0], [57.7, 136.0], [57.8, 136.0], [57.9, 136.0], [58.0, 136.0], [58.1, 136.0], [58.2, 136.0], [58.3, 136.0], [58.4, 136.0], [58.5, 136.0], [58.6, 136.0], [58.7, 136.0], [58.8, 136.0], [58.9, 136.0], [59.0, 136.0], [59.1, 137.0], [59.2, 137.0], [59.3, 137.0], [59.4, 137.0], [59.5, 137.0], [59.6, 137.0], [59.7, 137.0], [59.8, 137.0], [59.9, 137.0], [60.0, 137.0], [60.1, 137.0], [60.2, 137.0], [60.3, 137.0], [60.4, 137.0], [60.5, 137.0], [60.6, 137.0], [60.7, 137.0], [60.8, 137.0], [60.9, 137.0], [61.0, 137.0], [61.1, 137.0], [61.2, 137.0], [61.3, 137.0], [61.4, 137.0], [61.5, 137.0], [61.6, 137.0], [61.7, 137.0], [61.8, 138.0], [61.9, 138.0], [62.0, 138.0], [62.1, 138.0], [62.2, 138.0], [62.3, 138.0], [62.4, 138.0], [62.5, 138.0], [62.6, 138.0], [62.7, 138.0], [62.8, 138.0], [62.9, 138.0], [63.0, 138.0], [63.1, 138.0], [63.2, 138.0], [63.3, 138.0], [63.4, 138.0], [63.5, 138.0], [63.6, 138.0], [63.7, 138.0], [63.8, 138.0], [63.9, 138.0], [64.0, 139.0], [64.1, 139.0], [64.2, 139.0], [64.3, 139.0], [64.4, 139.0], [64.5, 139.0], [64.6, 139.0], [64.7, 139.0], [64.8, 139.0], [64.9, 139.0], [65.0, 139.0], [65.1, 139.0], [65.2, 139.0], [65.3, 139.0], [65.4, 139.0], [65.5, 140.0], [65.6, 140.0], [65.7, 140.0], [65.8, 140.0], [65.9, 140.0], [66.0, 140.0], [66.1, 140.0], [66.2, 140.0], [66.3, 140.0], [66.4, 140.0], [66.5, 140.0], [66.6, 140.0], [66.7, 140.0], [66.8, 141.0], [66.9, 141.0], [67.0, 141.0], [67.1, 141.0], [67.2, 141.0], [67.3, 141.0], [67.4, 141.0], [67.5, 141.0], [67.6, 141.0], [67.7, 141.0], [67.8, 141.0], [67.9, 141.0], [68.0, 141.0], [68.1, 142.0], [68.2, 142.0], [68.3, 142.0], [68.4, 142.0], [68.5, 142.0], [68.6, 142.0], [68.7, 142.0], [68.8, 142.0], [68.9, 143.0], [69.0, 143.0], [69.1, 143.0], [69.2, 143.0], [69.3, 143.0], [69.4, 144.0], [69.5, 144.0], [69.6, 144.0], [69.7, 144.0], [69.8, 144.0], [69.9, 144.0], [70.0, 145.0], [70.1, 145.0], [70.2, 145.0], [70.3, 145.0], [70.4, 145.0], [70.5, 145.0], [70.6, 145.0], [70.7, 146.0], [70.8, 146.0], [70.9, 146.0], [71.0, 146.0], [71.1, 146.0], [71.2, 146.0], [71.3, 146.0], [71.4, 146.0], [71.5, 146.0], [71.6, 147.0], [71.7, 147.0], [71.8, 147.0], [71.9, 147.0], [72.0, 147.0], [72.1, 147.0], [72.2, 147.0], [72.3, 147.0], [72.4, 147.0], [72.5, 147.0], [72.6, 148.0], [72.7, 148.0], [72.8, 148.0], [72.9, 148.0], [73.0, 148.0], [73.1, 148.0], [73.2, 148.0], [73.3, 148.0], [73.4, 148.0], [73.5, 149.0], [73.6, 149.0], [73.7, 149.0], [73.8, 149.0], [73.9, 149.0], [74.0, 149.0], [74.1, 149.0], [74.2, 149.0], [74.3, 149.0], [74.4, 149.0], [74.5, 150.0], [74.6, 150.0], [74.7, 150.0], [74.8, 150.0], [74.9, 150.0], [75.0, 150.0], [75.1, 150.0], [75.2, 150.0], [75.3, 150.0], [75.4, 150.0], [75.5, 150.0], [75.6, 150.0], [75.7, 151.0], [75.8, 151.0], [75.9, 151.0], [76.0, 151.0], [76.1, 151.0], [76.2, 151.0], [76.3, 151.0], [76.4, 151.0], [76.5, 151.0], [76.6, 151.0], [76.7, 152.0], [76.8, 152.0], [76.9, 152.0], [77.0, 152.0], [77.1, 152.0], [77.2, 152.0], [77.3, 152.0], [77.4, 153.0], [77.5, 153.0], [77.6, 153.0], [77.7, 153.0], [77.8, 153.0], [77.9, 153.0], [78.0, 153.0], [78.1, 153.0], [78.2, 154.0], [78.3, 154.0], [78.4, 154.0], [78.5, 154.0], [78.6, 154.0], [78.7, 154.0], [78.8, 155.0], [78.9, 155.0], [79.0, 155.0], [79.1, 155.0], [79.2, 155.0], [79.3, 155.0], [79.4, 156.0], [79.5, 156.0], [79.6, 156.0], [79.7, 156.0], [79.8, 156.0], [79.9, 156.0], [80.0, 157.0], [80.1, 157.0], [80.2, 157.0], [80.3, 157.0], [80.4, 157.0], [80.5, 158.0], [80.6, 158.0], [80.7, 158.0], [80.8, 158.0], [80.9, 158.0], [81.0, 159.0], [81.1, 159.0], [81.2, 159.0], [81.3, 159.0], [81.4, 159.0], [81.5, 159.0], [81.6, 160.0], [81.7, 160.0], [81.8, 160.0], [81.9, 160.0], [82.0, 160.0], [82.1, 161.0], [82.2, 161.0], [82.3, 161.0], [82.4, 161.0], [82.5, 161.0], [82.6, 161.0], [82.7, 162.0], [82.8, 162.0], [82.9, 162.0], [83.0, 162.0], [83.1, 162.0], [83.2, 162.0], [83.3, 163.0], [83.4, 163.0], [83.5, 163.0], [83.6, 163.0], [83.7, 163.0], [83.8, 164.0], [83.9, 164.0], [84.0, 164.0], [84.1, 164.0], [84.2, 164.0], [84.3, 165.0], [84.4, 165.0], [84.5, 165.0], [84.6, 165.0], [84.7, 166.0], [84.8, 166.0], [84.9, 166.0], [85.0, 166.0], [85.1, 167.0], [85.2, 167.0], [85.3, 167.0], [85.4, 167.0], [85.5, 167.0], [85.6, 168.0], [85.7, 168.0], [85.8, 168.0], [85.9, 168.0], [86.0, 169.0], [86.1, 169.0], [86.2, 169.0], [86.3, 170.0], [86.4, 170.0], [86.5, 171.0], [86.6, 171.0], [86.7, 171.0], [86.8, 172.0], [86.9, 172.0], [87.0, 172.0], [87.1, 173.0], [87.2, 173.0], [87.3, 174.0], [87.4, 174.0], [87.5, 175.0], [87.6, 175.0], [87.7, 175.0], [87.8, 176.0], [87.9, 176.0], [88.0, 176.0], [88.1, 177.0], [88.2, 177.0], [88.3, 177.0], [88.4, 177.0], [88.5, 177.0], [88.6, 178.0], [88.7, 178.0], [88.8, 178.0], [88.9, 179.0], [89.0, 179.0], [89.1, 179.0], [89.2, 180.0], [89.3, 180.0], [89.4, 180.0], [89.5, 180.0], [89.6, 181.0], [89.7, 181.0], [89.8, 181.0], [89.9, 181.0], [90.0, 181.0], [90.1, 182.0], [90.2, 182.0], [90.3, 182.0], [90.4, 182.0], [90.5, 182.0], [90.6, 182.0], [90.7, 183.0], [90.8, 183.0], [90.9, 183.0], [91.0, 184.0], [91.1, 184.0], [91.2, 184.0], [91.3, 184.0], [91.4, 185.0], [91.5, 185.0], [91.6, 185.0], [91.7, 186.0], [91.8, 186.0], [91.9, 186.0], [92.0, 187.0], [92.1, 187.0], [92.2, 187.0], [92.3, 187.0], [92.4, 188.0], [92.5, 188.0], [92.6, 188.0], [92.7, 188.0], [92.8, 188.0], [92.9, 189.0], [93.0, 189.0], [93.1, 189.0], [93.2, 189.0], [93.3, 189.0], [93.4, 190.0], [93.5, 190.0], [93.6, 190.0], [93.7, 190.0], [93.8, 191.0], [93.9, 191.0], [94.0, 191.0], [94.1, 191.0], [94.2, 192.0], [94.3, 192.0], [94.4, 192.0], [94.5, 192.0], [94.6, 193.0], [94.7, 193.0], [94.8, 193.0], [94.9, 194.0], [95.0, 194.0], [95.1, 194.0], [95.2, 194.0], [95.3, 195.0], [95.4, 195.0], [95.5, 196.0], [95.6, 196.0], [95.7, 197.0], [95.8, 197.0], [95.9, 197.0], [96.0, 198.0], [96.1, 198.0], [96.2, 199.0], [96.3, 199.0], [96.4, 200.0], [96.5, 200.0], [96.6, 201.0], [96.7, 201.0], [96.8, 202.0], [96.9, 202.0], [97.0, 203.0], [97.1, 203.0], [97.2, 204.0], [97.3, 204.0], [97.4, 205.0], [97.5, 205.0], [97.6, 206.0], [97.7, 207.0], [97.8, 208.0], [97.9, 209.0], [98.0, 210.0], [98.1, 212.0], [98.2, 213.0], [98.3, 214.0], [98.4, 216.0], [98.5, 219.0], [98.6, 222.0], [98.7, 224.0], [98.8, 227.0], [98.9, 234.0], [99.0, 238.0], [99.1, 242.0], [99.2, 246.0], [99.3, 256.0], [99.4, 270.0], [99.5, 297.0], [99.6, 359.0], [99.7, 518.0], [99.8, 758.0], [99.9, 1060.0], [100.0, 1214.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 100.0, "maxY": 9633.0, "series": [{"data": [[1100.0, 6.0], [300.0, 11.0], [600.0, 5.0], [1200.0, 3.0], [700.0, 5.0], [400.0, 8.0], [800.0, 4.0], [200.0, 317.0], [100.0, 9633.0], [900.0, 2.0], [1000.0, 3.0], [500.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 31.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 9969.0, "series": [{"data": [[0.0, 9969.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 31.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 5.281499999999995, "minX": 1.74168324E12, "maxY": 5.9322333529758415, "series": [{"data": [[1.74168348E12, 5.285499999999999], [1.7416833E12, 5.297648824412188], [1.74168342E12, 5.281499999999995], [1.74168324E12, 5.9322333529758415], [1.74168354E12, 5.349834983498352], [1.74168336E12, 5.297351324337823]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74168354E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 119.7728813559322, "minX": 1.0, "maxY": 1210.0, "series": [{"data": [[32.0, 880.0], [2.0, 132.0], [35.0, 911.5], [34.0, 547.0], [37.0, 1010.0], [36.0, 1127.0], [38.0, 301.0], [40.0, 487.5], [42.0, 531.3333333333334], [3.0, 134.0], [4.0, 119.7728813559322], [5.0, 136.9448046813225], [6.0, 151.22354813046928], [7.0, 174.952380952381], [8.0, 203.03125000000006], [9.0, 296.1538461538462], [10.0, 231.0], [11.0, 239.0], [14.0, 246.0], [1.0, 176.0], [19.0, 719.0], [20.0, 1089.0], [24.0, 1210.0], [26.0, 548.5714285714287], [28.0, 725.0], [30.0, 1163.5], [31.0, 856.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[5.401200000000004, 144.34479999999942]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 42.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 5721.65, "minX": 1.74168324E12, "maxY": 2337173.2666666666, "series": [{"data": [[1.74168348E12, 2336007.7], [1.7416833E12, 2334824.6], [1.74168342E12, 2336004.6], [1.74168324E12, 1982085.4833333334], [1.74168354E12, 353902.9666666667], [1.74168336E12, 2337173.2666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74168348E12, 37766.666666666664], [1.7416833E12, 37747.78333333333], [1.74168342E12, 37766.666666666664], [1.74168324E12, 32045.016666666666], [1.74168354E12, 5721.65], [1.74168336E12, 37785.55]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74168354E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 141.0174912543727, "minX": 1.74168324E12, "maxY": 158.73954036535085, "series": [{"data": [[1.74168348E12, 141.24649999999977], [1.7416833E12, 141.6453226613307], [1.74168342E12, 141.23149999999976], [1.74168324E12, 158.73954036535085], [1.74168354E12, 144.50825082508243], [1.74168336E12, 141.0174912543727]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74168354E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 89.90204897551219, "minX": 1.74168324E12, "maxY": 105.87566293459045, "series": [{"data": [[1.74168348E12, 90.3694999999999], [1.7416833E12, 90.14107053526769], [1.74168342E12, 89.91500000000012], [1.74168324E12, 105.87566293459045], [1.74168354E12, 92.95379537953797], [1.74168336E12, 89.90204897551219]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74168354E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 55.94549999999993, "minX": 1.74168324E12, "maxY": 69.037713612257, "series": [{"data": [[1.74168348E12, 55.94549999999993], [1.7416833E12, 56.414207103551796], [1.74168342E12, 56.248500000000035], [1.74168324E12, 69.037713612257], [1.74168354E12, 56.993399339933944], [1.74168336E12, 56.20139930034978]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74168354E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 113.0, "minX": 1.74168324E12, "maxY": 1214.0, "series": [{"data": [[1.74168348E12, 320.0], [1.7416833E12, 623.0], [1.74168342E12, 625.0], [1.74168324E12, 1214.0], [1.74168354E12, 610.0], [1.74168336E12, 319.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74168348E12, 181.0], [1.7416833E12, 180.0], [1.74168342E12, 179.9000000000001], [1.74168324E12, 190.0], [1.74168354E12, 182.0], [1.74168336E12, 180.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74168348E12, 222.0], [1.7416833E12, 227.0], [1.74168342E12, 216.99], [1.74168324E12, 856.4799999999996], [1.74168354E12, 208.87999999999994], [1.74168336E12, 215.96000000000004]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74168348E12, 193.0], [1.7416833E12, 193.0], [1.74168342E12, 191.0], [1.74168324E12, 208.0999999999999], [1.74168354E12, 192.8], [1.74168336E12, 191.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74168348E12, 114.0], [1.7416833E12, 114.0], [1.74168342E12, 113.0], [1.74168324E12, 115.0], [1.74168354E12, 117.0], [1.74168336E12, 113.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74168348E12, 134.0], [1.7416833E12, 133.0], [1.74168342E12, 133.0], [1.74168324E12, 135.0], [1.74168354E12, 135.0], [1.74168336E12, 133.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74168354E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 132.0, "minX": 3.0, "maxY": 405.0, "series": [{"data": [[33.0, 133.0], [32.0, 134.0], [34.0, 134.0], [35.0, 134.0], [36.0, 134.5], [37.0, 135.5], [40.0, 132.5], [3.0, 168.0], [63.0, 405.0], [28.0, 133.0], [29.0, 132.0], [30.0, 138.0], [31.0, 134.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 85.0, "minX": 3.0, "maxY": 306.0, "series": [{"data": [[33.0, 85.0], [32.0, 85.0], [34.0, 85.0], [35.0, 86.0], [36.0, 86.0], [37.0, 86.0], [40.0, 86.0], [3.0, 110.0], [63.0, 306.0], [28.0, 86.0], [29.0, 85.0], [30.0, 89.0], [31.0, 85.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 4.983333333333333, "minX": 1.74168324E12, "maxY": 33.333333333333336, "series": [{"data": [[1.74168348E12, 33.333333333333336], [1.7416833E12, 33.333333333333336], [1.74168342E12, 33.333333333333336], [1.74168324E12, 28.35], [1.74168354E12, 4.983333333333333], [1.74168336E12, 33.333333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74168354E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 5.05, "minX": 1.74168324E12, "maxY": 33.35, "series": [{"data": [[1.74168348E12, 33.333333333333336], [1.7416833E12, 33.31666666666667], [1.74168342E12, 33.333333333333336], [1.74168324E12, 28.283333333333335], [1.74168354E12, 5.05], [1.74168336E12, 33.35]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74168354E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 5.05, "minX": 1.74168324E12, "maxY": 33.35, "series": [{"data": [[1.74168348E12, 33.333333333333336], [1.7416833E12, 33.31666666666667], [1.74168342E12, 33.333333333333336], [1.74168324E12, 28.283333333333335], [1.74168354E12, 5.05], [1.74168336E12, 33.35]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74168354E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 5.05, "minX": 1.74168324E12, "maxY": 33.35, "series": [{"data": [[1.74168348E12, 33.333333333333336], [1.7416833E12, 33.31666666666667], [1.74168342E12, 33.333333333333336], [1.74168324E12, 28.283333333333335], [1.74168354E12, 5.05], [1.74168336E12, 33.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74168354E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

