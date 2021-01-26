
let map, heatmap;

const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)"
];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: {
            lat: 24.412433,
            lng: 54.474797
            // lat: 37.775,
            // lng: -122.434
        },
        mapTypeId: "satellite"
    });
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map
    });

    heatmap.set("gradient", gradient);
    heatmap.set("radius", 29);
    heatmap.set("opacity", 0.34);

}

function getPoints() {
    return [
        new google.maps.LatLng(24.4124, 54.4749),
        new google.maps.LatLng(24.4125, 54.4748),
        new google.maps.LatLng(24.4124, 54.4748),
        new google.maps.LatLng(24.4123, 54.4748),
        new google.maps.LatLng(24.4123, 54.4742),
        new google.maps.LatLng(24.4123, 54.4743),
        new google.maps.LatLng(24.4123, 54.4744),
        new google.maps.LatLng(24.4122, 54.4744),
        new google.maps.LatLng(24.4122, 54.4742),
        new google.maps.LatLng(24.4124, 54.4742),
        new google.maps.LatLng(24.4124, 54.4743),
        new google.maps.LatLng(24.4124, 54.4744),
        new google.maps.LatLng(24.4125, 54.4744),
        new google.maps.LatLng(24.4125, 54.4742),
        new google.maps.LatLng(24.4125, 54.4745),
        new google.maps.LatLng(24.4125, 54.4746),
        new google.maps.LatLng(24.4125, 54.4747),
        new google.maps.LatLng(24.4124, 54.4747),
        new google.maps.LatLng(24.4119, 54.4742),
        new google.maps.LatLng(24.4119, 54.4743),
        new google.maps.LatLng(24.4119, 54.4744),
        new google.maps.LatLng(24.4118, 54.4744),
        new google.maps.LatLng(24.4120, 54.4744),
        new google.maps.LatLng(24.4120, 54.4743),
        new google.maps.LatLng(24.4110, 54.4743),
        new google.maps.LatLng(24.4111, 54.4753),
        new google.maps.LatLng(24.4111, 54.4754),
        new google.maps.LatLng(24.4111, 54.4755),
        new google.maps.LatLng(24.4112, 54.4755),
        new google.maps.LatLng(24.4112, 54.4756),
        new google.maps.LatLng(24.4112, 54.4753),
        new google.maps.LatLng(24.4112, 54.4751),
        new google.maps.LatLng(24.4110, 54.4746),
        new google.maps.LatLng(24.4110, 54.4745),
        new google.maps.LatLng(24.4110, 54.4744),
        new google.maps.LatLng(24.4110, 54.4743),
        new google.maps.LatLng(24.4110, 54.4742),
        new google.maps.LatLng(24.4110, 54.4741),
        new google.maps.LatLng(24.4110, 54.4740),
        new google.maps.LatLng(24.4110, 54.4750),
        new google.maps.LatLng(24.4110, 54.4751),
        new google.maps.LatLng(24.4110, 54.4752),
        new google.maps.LatLng(24.4110, 54.4753),
        new google.maps.LatLng(24.4110, 54.4754),
        new google.maps.LatLng(24.4110, 54.4755),
        new google.maps.LatLng(24.4111, 54.4756),
        new google.maps.LatLng(24.4111, 54.4757),
        new google.maps.LatLng(24.4111, 54.4759),
        new google.maps.LatLng(24.4111, 54.4742),


    ];
}

$(function () {

    // ------------------------------------
    // OVERALL
    // ------------------------------------

    // Initialize chart
    progressArcMulti("#arc_multi_overcrowding", 78, 700);

    // Chart setup
    function progressArcMulti(element, size, goal) {

        // Main variables
        var d3Container = d3.select(element),
            radius = size,
            thickness = 20,
            startColor = '#66BB6A',
            midColor = '#FFA726',
            endColor = '#EF5350';

        // Colors
        var color = d3.scale.linear()
            .domain([0, 70, 100])
            .range([startColor, midColor, endColor]);


        // Create chart
        // ------------------------------

        // Add svg element
        var container = d3Container.append("svg");

        // Add SVG group
        var svg = container
            .attr('width', radius * 2)
            .attr('height', radius + 20);


        // Construct chart layout
        // ------------------------------

        // Pie
        var arc = d3.svg.arc()
            .innerRadius(radius - thickness)
            .outerRadius(radius)
            .startAngle(-Math.PI / 2);


        // Append chart elements
        // ------------------------------

        //
        // Group arc elements
        //

        // Group
        var chart = svg.append('g')
            .attr('transform', 'translate(' + radius + ',' + radius + ')');

        // Background
        var background = chart.append('path')
            .datum({
                endAngle: Math.PI / 2
            })
            .attr({
                'd': arc,
                'fill': '#eee'
            });

        // Foreground
        var foreground = chart.append('path')
            .datum({
                endAngle: -Math.PI / 2
            })
            .style('fill', startColor)
            .attr('d', arc);

        // Counter value
        var value = svg.append('g')
            .attr('transform', 'translate(' + radius + ',' + (radius * 0.9) + ')')
            .append('text')
            .text(0 + '%')
            .attr({
                'text-anchor': 'middle',
                'fill': '#555'
            })
            .style({
                'font-size': 19,
                'font-weight': 400
            });


        //
        // Min and max text
        //

        // Group
        var scale = svg.append('g')
            .attr('transform', 'translate(' + radius + ',' + (radius + 15) + ')')
            .style({
                'font-size': 12,
                'fill': '#999'
            });

        // Max
        scale.append('text')
            .text(100)
            .attr({
                'text-anchor': 'middle',
                'x': (radius - thickness / 2)
            });

        // Min
        scale.append('text')
            .text(0)
            .attr({
                'text-anchor': 'middle',
                'x': -(radius - thickness / 2)
            });


        //
        // Animation
        //

        // Interval
        setInterval(function () {
            update(Math.random() * 100);
        }, 1500);

        // Update
        function update(v) {
            v = d3.format('.0f')(v);
            foreground.transition()
                .duration(750)
                .style('fill', function () {
                    return color(v);
                })
                .call(arcTween, v);

            value.transition()
                .duration(750)
                .call(textTween, v);
        }

        // Arc
        function arcTween(transition, v) {
            var newAngle = v / 100 * Math.PI - Math.PI / 2;
            transition.attrTween('d', function (d) {
                var interpolate = d3.interpolate(d.endAngle, newAngle);
                return function (t) {
                    d.endAngle = interpolate(t);
                    return arc(d);
                };
            });
        }

        // Text
        function textTween(transition, v) {
            transition.tween('text', function () {
                var interpolate = d3.interpolate(this.innerHTML, v),
                    split = (v + '').split('.'),
                    round = (split.length > 1) ? Math.pow(10, split[1].length) : 1;
                return function (t) {
                    this.innerHTML = d3.format('.0f')(Math.round(interpolate(t) * round) / round) + '<tspan>%</tspan>';
                };
            });
        }
    }



    // Initialize chart
    segmentedGauge("#segmented_gauge_PARKING", 200, 0, 100, 5);
    segmentedGauge("#segmented_gauge_overcrowding", 200, 0, 100, 5);

    // Setup chart
    function segmentedGauge(element, size, min, max, sliceQty) {

        // Main variables
        var d3Container = d3.select(element),
            width = size,
            height = (size / 2) + 20,
            radius = (size / 2),
            ringInset = 15,
            ringWidth = 20,

            pointerWidth = 10,
            pointerTailLength = 5,
            pointerHeadLengthPercent = 0.75,

            minValue = min,
            maxValue = max,

            minAngle = -90,
            maxAngle = 90,

            slices = sliceQty,
            range = maxAngle - minAngle,
            pointerHeadLength = Math.round(radius * pointerHeadLengthPercent);

        // Colors
        var colors = d3.scale.linear()
            .domain([0, slices - 1])
            .interpolate(d3.interpolateHsl)
            .range(['#66BB6A', '#EF5350']);


        // Create chart
        // ------------------------------

        // Add SVG element
        var container = d3Container.append('svg');

        // Add SVG group
        var svg = container
            .attr('width', width)
            .attr('height', height);


        // Construct chart layout
        // ------------------------------

        // Donut  
        var arc = d3.svg.arc()
            .innerRadius(radius - ringWidth - ringInset)
            .outerRadius(radius - ringInset)
            .startAngle(function (d, i) {
                var ratio = d * i;
                return deg2rad(minAngle + (ratio * range));
            })
            .endAngle(function (d, i) {
                var ratio = d * (i + 1);
                return deg2rad(minAngle + (ratio * range));
            });

        // Linear scale that maps domain values to a percent from 0..1
        var scale = d3.scale.linear()
            .range([0, 1])
            .domain([minValue, maxValue]);

        // Ticks
        var ticks = scale.ticks(slices);
        var tickData = d3.range(slices)
            .map(function () {
                return 1 / slices;
            });

        // Calculate angles
        function deg2rad(deg) {
            return deg * Math.PI / 180;
        }

        // Calculate rotation angle
        function newAngle(d) {
            var ratio = scale(d);
            var newAngle = minAngle + (ratio * range);
            return newAngle;
        }


        // Append chart elements
        // ------------------------------

        //
        // Append arc
        //

        // Wrap paths in separate group
        var arcs = svg.append('g')
            .attr('transform', "translate(" + radius + "," + radius + ")")
            .style({
                'stroke': '#fff',
                'stroke-width': 2,
                'shape-rendering': 'crispEdges'
            });

        // Add paths
        arcs.selectAll('path')
            .data(tickData)
            .enter()
            .append('path')
            .attr('fill', function (d, i) {
                return colors(i);
            })
            .attr('d', arc);


        //
        // Text labels
        //

        // Wrap text in separate group
        var arcLabels = svg.append('g')
            .attr('transform', "translate(" + radius + "," + radius + ")");

        // Add text
        arcLabels.selectAll('text')
            .data(ticks)
            .enter()
            .append('text')
            .attr('transform', function (d) {
                var ratio = scale(d);
                var newAngle = minAngle + (ratio * range);
                return 'rotate(' + newAngle + ') translate(0,' + (10 - radius) + ')';
            })
            .style({
                'text-anchor': 'middle',
                'font-size': 11,
                'fill': '#999'
            })
            .text(function (d) { return d + "%"; });


        //
        // Pointer
        //

        // Line data
        var lineData = [
            [pointerWidth / 2, 0],
            [0, -pointerHeadLength],
            [-(pointerWidth / 2), 0],
            [0, pointerTailLength],
            [pointerWidth / 2, 0]
        ];

        // Create line
        var pointerLine = d3.svg.line()
            .interpolate('monotone');

        // Wrap all lines in separate group
        var pointerGroup = svg
            .append('g')
            .data([lineData])
            .attr('transform', "translate(" + radius + "," + radius + ")");

        // Paths
        pointer = pointerGroup
            .append('path')
            .attr('d', pointerLine)
            .attr('transform', 'rotate(' + minAngle + ')');


        // Random update
        // ------------------------------

        // Update values
        function update() {
            var ratio = scale(Math.random() * max);
            var newAngle = minAngle + (ratio * range);
            pointer.transition()
                .duration(2500)
                .ease('elastic')
                .attr('transform', 'rotate(' + newAngle + ')');
        }
        update();

        // Update values every 5 seconds
        setInterval(function () {
            update();
        }, 5000);
    }



    // Initialize chart
    progressArcSingle("#arc_single_ZONES", 78);
    progressArcSingle("#arc_single_SERVICES", 78);
    progressArcSingle("#arc_single_EMPLOYEES", 78);
    progressArcSingle("#arc_single_GATES", 78);

    // Chart setup
    function progressArcSingle(element, size) {

        // Main variables
        var d3Container = d3.select(element),
            radius = size,
            thickness = 20,
            color = '#29B6F6';


        // Create chart
        // ------------------------------

        // Add svg element
        var container = d3Container.append("svg");

        // Add SVG group
        var svg = container
            .attr('width', radius * 2)
            .attr('height', radius + 20)
            .attr('class', 'gauge');


        // Construct chart layout
        // ------------------------------

        // Pie
        var arc = d3.svg.arc()
            .innerRadius(radius - thickness)
            .outerRadius(radius)
            .startAngle(-Math.PI / 2);


        // Append chart elements
        // ------------------------------

        //
        // Group arc elements
        //

        // Group
        var chart = svg.append('g')
            .attr('transform', 'translate(' + radius + ',' + radius + ')');

        // Background
        var background = chart.append('path')
            .datum({
                endAngle: Math.PI / 2
            })
            .attr({
                'd': arc,
                'fill': '#eee'
            });

        // Foreground
        var foreground = chart.append('path')
            .datum({
                endAngle: -Math.PI / 2
            })
            .style('fill', color)
            .attr('d', arc);

        // Counter value
        var value = svg.append('g')
            .attr('transform', 'translate(' + radius + ',' + (radius * 0.9) + ')')
            .append('text')
            .text(0 + '%')
            .attr({
                'text-anchor': 'middle',
                'fill': '#555'
            })
            .style({
                'font-size': 19,
                'font-weight': 400
            });


        //
        // Min and max text
        //

        // Group
        var scale = svg.append('g')
            .attr('transform', 'translate(' + radius + ',' + (radius + 15) + ')')
            .style({
                'font-size': 12,
                'fill': '#999'
            });

        // Max
        scale.append('text')
            .text(100)
            .attr({
                'text-anchor': 'middle',
                'x': (radius - thickness / 2)
            });

        // Min
        scale.append('text')
            .text(0)
            .attr({
                'text-anchor': 'middle',
                'x': -(radius - thickness / 2)
            });


        //
        // Animation
        //

        // Interval
        setInterval(function () {
            update(Math.random() * 100);
        }, 1500);

        // Update
        function update(v) {
            v = d3.format('.0f')(v);
            foreground.transition()
                .duration(750)
                .call(arcTween, v);

            value.transition()
                .duration(750)
                .call(textTween, v);
        }

        // Arc
        function arcTween(transition, v) {
            var newAngle = v / 100 * Math.PI - Math.PI / 2;
            transition.attrTween('d', function (d) {
                var interpolate = d3.interpolate(d.endAngle, newAngle);
                return function (t) {
                    d.endAngle = interpolate(t);
                    return arc(d);
                };
            });
        }

        // Text
        function textTween(transition, v) {
            transition.tween('text', function () {
                var interpolate = d3.interpolate(this.innerHTML, v),
                    split = (v + '').split('.'),
                    round = (split.length > 1) ? Math.pow(10, split[1].length) : 1;
                return function (t) {
                    this.innerHTML = d3.format('.0f')(Math.round(interpolate(t) * round) / round) + '<tspan>%</tspan>';
                };
            });
        }
    }


    // Initialize chart
    roundedProgressSingle("#rounded_progress_single_VISITORS_CAPACITY", 150, 20000, '#EC407A');

    // Chart setup
    function roundedProgressSingle(element, size, goal, color) {

        // Add random data
        var dataset = function () {
            return [
                { percentage: Math.random() * 100 }
            ];
        };

        // Main variables
        var d3Container = d3.select(element),
            padding = 2,
            strokeWidth = 16,
            width = size,
            height = size,
            τ = 2 * Math.PI;


        // Create chart
        // ------------------------------

        // Add svg element
        var container = d3Container.append("svg");

        // Add SVG group
        var svg = container
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


        // Construct chart layout
        // ------------------------------

        // Foreground arc
        var arc = d3.svg.arc()
            .startAngle(0)
            .endAngle(function (d) {
                return d.percentage / 100 * τ;
            })
            .innerRadius((size / 2) - strokeWidth)
            .outerRadius((size / 2) - padding)
            .cornerRadius(20);

        // Background arc
        var background = d3.svg.arc()
            .startAngle(0)
            .endAngle(τ)
            .innerRadius((size / 2) - strokeWidth)
            .outerRadius((size / 2) - padding);


        // Append chart elements
        // ------------------------------

        //
        // Group arc elements
        //

        // Group
        var field = svg.selectAll("g")
            .data(dataset)
            .enter().append("g");

        // Foreground arc
        field
            .append("path")
            .attr("class", "arc-foreground")
            .attr('fill', color);

        // Background arc
        field
            .append("path")
            .attr("d", background)
            .style({
                "fill": color,
                "opacity": 0.2
            });


        //
        // Text
        //

        // Goal
        field
            .append("text")
            .text("Out of " + goal)
            .attr("transform", "translate(0,20)")
            .style({
                'font-size': 11,
                'fill': '#999',
                'font-weight': 500,
                'text-transform': 'uppercase',
                'text-anchor': 'middle'
            });

        // Count
        field
            .append("text")
            .attr('class', 'arc-goal-completed')
            .attr("transform", "translate(0,0)")
            .style({
                'font-size': 23,
                'font-weight': 500,
                'text-anchor': 'middle'
            });


        //
        // Animate elements
        //

        // Add transition
        d3.transition().duration(2500).each(update);


        // Animation
        function update() {
            field = field
                .each(function (d) {
                    this._value = d.percentage;
                })
                .data(dataset)
                .each(function (d) {
                    d.previousValue = this._value;
                });

            // Foreground arc
            field
                .select(".arc-foreground")
                .transition()
                .duration(600)
                .ease("easeInOut")
                .attrTween("d", arcTween);

            // Update count text
            field
                .select(".arc-goal-completed")
                .text(function (d) {
                    return Math.round(d.percentage / 100 * goal);
                });

            // Animate count text
            svg.select('.arc-goal-completed')
                .transition()
                .duration(600)
                .tween("text", function (d) {
                    var i = d3.interpolate(this.textContent, d.percentage);
                    return function (t) {
                        this.textContent = Math.floor(d.percentage / 100 * goal);
                    };
                });

            // Update every 4 seconds (for demo)
            setTimeout(update, 4000);
        }

        // Arc animation
        function arcTween(d) {
            var i = d3.interpolateNumber(d.previousValue, d.percentage);
            return function (t) {
                d.percentage = i(t);
                return arc(d);
            };
        }
    }

     // Initialize chart
     donutWithDetails("#donut_basic_details_distribution", 146);

     // Chart setup
     function donutWithDetails(element, size) {
 
 
         // Basic setup
         // ------------------------------
 
         // Add data set
         var data = [
             {
                 "status": "Individuals",
                 "icon": "<i class='status-mark border-blue-300 position-left'></i>",
                 "value": 7200,
                 "color": "#29B6F6"
             }, {
                 "status": "Groups",
                 "icon": "<i class='status-mark border-success-300 position-left'></i>",
                 "value": 9900,
                 "color": "#66BB6A"
             }, {
                 "status": "Photography",
                 "icon": "<i class='status-mark border-danger-300 position-left'></i>",
                 "value": 7200,
                 "color": "#EF5350"
             }
         ];
 
         // Main variables
         var d3Container = d3.select(element),
             distance = 2, // reserve 2px space for mouseover arc moving
             radius = (size/2) - distance,
             sum = d3.sum(data, function(d) { return d.value; });
 
 
         // Tooltip
         // ------------------------------
 
         var tip = d3.tip()
             .attr('class', 'd3-tip')
             .offset([-10, 0])
             .direction('e')
             .html(function (d) {
                 return "<ul class='list-unstyled mb-5'>" +
                     "<li>" + "<div class='text-size-base mb-5 mt-5'>" + d.data.icon + d.data.status + "</div>" + "</li>" +
                     "<li>" + "Total: &nbsp;" + "<span class='text-semibold pull-right'>" + d.value + "</span>" + "</li>" +
                     "<li>" + "Share: &nbsp;" + "<span class='text-semibold pull-right'>" + (100 / (sum / d.value)).toFixed(2) + "%" + "</span>" + "</li>" +
                 "</ul>";
             });
 
 
         // Create chart
         // ------------------------------
 
         // Add svg element
         var container = d3Container.append("svg").call(tip);
         
         // Add SVG group
         var svg = container
             .attr("width", size)
             .attr("height", size)
             .append("g")
                 .attr("transform", "translate(" + (size / 2) + "," + (size / 2) + ")");  
 
 
         // Construct chart layout
         // ------------------------------
 
         // Pie
         var pie = d3.layout.pie()
             .sort(null)
             .startAngle(Math.PI)
             .endAngle(3 * Math.PI)
             .value(function (d) { 
                 return d.value;
             }); 
 
         // Arc
         var arc = d3.svg.arc()
             .outerRadius(radius)
             .innerRadius(radius / 1.35);
 
 
         //
         // Append chart elements
         //
 
         // Group chart elements
         var arcGroup = svg.selectAll(".d3-arc")
             .data(pie(data))
             .enter()
             .append("g") 
                 .attr("class", "d3-arc")
                 .style({
                     'stroke': '#fff',
                     'stroke-width': 2,
                     'cursor': 'pointer'
                 });
         
         // Append path
         var arcPath = arcGroup
             .append("path")
             .style("fill", function (d) {
                 return d.data.color;
             });
 
 
         //
         // Add interactions
         //
 
         // Mouse
         arcPath
             .on('mouseover', function(d, i) {
 
                 // Transition on mouseover
                 d3.select(this)
                 .transition()
                     .duration(500)
                     .ease('elastic')
                     .attr('transform', function (d) {
                         d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                         var x = Math.sin(d.midAngle) * distance;
                         var y = -Math.cos(d.midAngle) * distance;
                         return 'translate(' + x + ',' + y + ')';
                     });
 
                 $(element + ' [data-slice]').css({
                     'opacity': 0.3,
                     'transition': 'all ease-in-out 0.15s'
                 });
                 $(element + ' [data-slice=' + i + ']').css({'opacity': 1});
             })
             .on('mouseout', function(d, i) {
 
                 // Mouseout transition
                 d3.select(this)
                 .transition()
                     .duration(500)
                     .ease('bounce')
                     .attr('transform', 'translate(0,0)');
 
                 $(element + ' [data-slice]').css('opacity', 1);
             });
 
         // Animate chart on load
         arcPath
             .transition()
             .delay(function(d, i) {
                 return i * 500;
             })
             .duration(500)
             .attrTween("d", function(d) {
                 var interpolate = d3.interpolate(d.startAngle,d.endAngle);
                 return function(t) {
                     d.endAngle = interpolate(t);
                     return arc(d);  
                 }; 
             });
 
 
         //
         // Add text
         //
 
         // Total
         svg.append('text')
             .attr('class', 'text-muted')
             .attr({
                 'class': 'half-donut-total',
                 'text-anchor': 'middle',
                 'dy': -13
             })
             .style({
                 'font-size': '12px',
                 'fill': '#999'
             })
             .text('Total');
 
         // Count
         svg
             .append('text')
             .attr('class', 'half-donut-count')
             .attr('text-anchor', 'middle')
             .attr('dy', 14)
             .style({
                 'font-size': '21px',
                 'font-weight': 500
             });
 
         // Animate count
         svg.select('.half-donut-count')
             .transition()
             .duration(1500)
             .ease('linear')
             .tween("text", function(d) {
                 var i = d3.interpolate(this.textContent, sum);
 
                 return function(t) {
                     this.textContent = d3.format(",d")(Math.round(i(t)));
                 };
             });
 
 
         //
         // Add legend
         //
 
         // Append list
         var legend = d3.select(element)
             .append('ul')
             .attr('class', 'chart-widget-legend')
             .selectAll('li')
             .data(pie(data))
             .enter()
             .append('li')
             .attr('data-slice', function(d, i) {
                 return i;
             })
             .attr('style', function(d, i) {
                 return 'border-bottom: solid 2px ' + d.data.color;
             })
             .text(function(d, i) {
                 return d.data.status + ': ';
             });
 
         // Append text
         legend.append('span')
             .text(function(d, i) {
                 return d.data.value;
             });
     }

});