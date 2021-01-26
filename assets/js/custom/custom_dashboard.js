/* ------------------------------------------------------------------------------
 *
 *  # Echarts - pies and donuts
 *
 *  Pies and donuts chart configurations
 *
 *  Version: 1.0
 *  Latest update: August 1, 2015
 *
 * ---------------------------------------------------------------------------- */

 
    
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




    // Set paths
    // ------------------------------

    require.config({
        paths: {
            echarts: 'assets/js/plugins/visualization/echarts'
        }
    });


    // Configuration
    // ------------------------------

    require(
        [
            'echarts',
            'echarts/theme/limitless',
            'echarts/chart/pie',
            'echarts/chart/funnel',
            'echarts/chart/line',  
            'echarts/chart/bar',
        ],


        // Charts setup
        function (ec, limitless) {


            // Initialize charts
            // ------------------------------

            var pie_timeline = ec.init(document.getElementById('pie_timeline'), limitless);
            var line_bar_VISITORS = ec.init(document.getElementById('line_bar'), limitless);


            line_bar_options_VISITORS = {

                // Setup grid
                grid: {
                    x: 55,
                    x2: 45,
                    y: 35,
                    y2: 25
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis'
                },

                // Enable drag recalculate
                calculable: true,

                // Add legend
                legend: {
                    data: ['Check-in', 'Failed to attend', 'Average']
                },

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12']
                }],

                // Vertical axis
                yAxis: [
                    {
                        type: 'value',
                        name: 'Visitors',
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    {
                        type: 'value',
                        name: 'AVG',
                        axisLabel: {
                            formatter: '{value} '
                        }
                    }
                ],

                // Add series
                series: [
                    {
                        name: 'Check-in',
                        type: 'bar',
                        data: [200, 409, 700, 2302, 2506, 7067, 1356, 1622, 3026, 2000, 740, 330]
                    },
                    {
                        name: 'Failed to attend',
                        type: 'bar',
                        data: [26, 509, 900, 264, 287, 707, 1756, 1822, 4807, 1808, 600, 230]
                    },
                    {
                        name: 'Average',
                        type: 'line',
                        yAxisIndex: 1,
                        data: [4.0, 6.2, 7.3, 7.5, 8.3, 10.2, 14.3, 18.4, 18.0, 16.5, 12.0, 6.2]
                    }
                ]
            };


            // Charts setup
            // ------------------------------                    

            //
            // Basic pie options
            //

            basic_pie_options = {

                // Add title
                title: {
                    text: 'Browser popularity',
                    subtext: 'Open source information',
                    x: 'center'
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['IE', 'Opera', 'Safari', 'Firefox', 'Chrome']
                },

                // Display toolbox
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    feature: {
                        mark: {
                            show: true,
                            title: {
                                mark: 'Markline switch',
                                markUndo: 'Undo markline',
                                markClear: 'Clear markline'
                            }
                        },
                        dataView: {
                            show: true,
                            readOnly: false,
                            title: 'View data',
                            lang: ['View chart data', 'Close', 'Update']
                        },
                        magicType: {
                            show: true,
                            title: {
                                pie: 'Switch to pies',
                                funnel: 'Switch to funnel',
                            },
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    y: '20%',
                                    width: '50%',
                                    height: '70%',
                                    funnelAlign: 'left',
                                    max: 1548
                                }
                            }
                        },
                        restore: {
                            show: true,
                            title: 'Restore'
                        },
                        saveAsImage: {
                            show: true,
                            title: 'Same as image',
                            lang: ['Save']
                        }
                    }
                },

                // Enable drag recalculate
                calculable: true,

                // Add series
                series: [{
                    name: 'Browsers',
                    type: 'pie',
                    radius: '70%',
                    center: ['50%', '57.5%'],
                    data: [
                        { value: 335, name: 'IE' },
                        { value: 310, name: 'Opera' },
                        { value: 234, name: 'Safari' },
                        { value: 135, name: 'Firefox' },
                        { value: 1548, name: 'Chrome' }
                    ]
                }]
            };


            //
            // Basic donut options
            //

            basic_donut_options = {

                // Add title
                title: {
                    text: 'Browser popularity',
                    subtext: 'Open source information',
                    x: 'center'
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['Internet Explorer', 'Opera', 'Safari', 'Firefox', 'Chrome']
                },

                // Display toolbox
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    feature: {
                        mark: {
                            show: true,
                            title: {
                                mark: 'Markline switch',
                                markUndo: 'Undo markline',
                                markClear: 'Clear markline'
                            }
                        },
                        dataView: {
                            show: true,
                            readOnly: false,
                            title: 'View data',
                            lang: ['View chart data', 'Close', 'Update']
                        },
                        magicType: {
                            show: true,
                            title: {
                                pie: 'Switch to pies',
                                funnel: 'Switch to funnel',
                            },
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    y: '20%',
                                    width: '50%',
                                    height: '70%',
                                    funnelAlign: 'left',
                                    max: 1548
                                }
                            }
                        },
                        restore: {
                            show: true,
                            title: 'Restore'
                        },
                        saveAsImage: {
                            show: true,
                            title: 'Same as image',
                            lang: ['Save']
                        }
                    }
                },

                // Enable drag recalculate
                calculable: true,

                // Add series
                series: [
                    {
                        name: 'Browsers',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        center: ['50%', '57.5%'],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true
                                },
                                labelLine: {
                                    show: true
                                }
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    formatter: '{b}' + '\n\n' + '{c} ({d}%)',
                                    position: 'center',
                                    textStyle: {
                                        fontSize: '17',
                                        fontWeight: '500'
                                    }
                                }
                            }
                        },

                        data: [
                            { value: 335, name: 'Internet Explorer' },
                            { value: 310, name: 'Opera' },
                            { value: 234, name: 'Safari' },
                            { value: 135, name: 'Firefox' },
                            { value: 1548, name: 'Chrome' }
                        ]
                    }
                ]
            };


            //
            // Nested pie charts options
            //

            nested_pie_options = {

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['Italy', 'Spain', 'Austria', 'Germany', 'Poland', 'Denmark', 'Hungary', 'Portugal', 'France', 'Netherlands']
                },

                // Display toolbox
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    feature: {
                        mark: {
                            show: true,
                            title: {
                                mark: 'Markline switch',
                                markUndo: 'Undo markline',
                                markClear: 'Clear markline'
                            }
                        },
                        dataView: {
                            show: true,
                            readOnly: false,
                            title: 'View data',
                            lang: ['View chart data', 'Close', 'Update']
                        },
                        magicType: {
                            show: true,
                            title: {
                                pie: 'Switch to pies',
                                funnel: 'Switch to funnel',
                            },
                            type: ['pie', 'funnel']
                        },
                        restore: {
                            show: true,
                            title: 'Restore'
                        },
                        saveAsImage: {
                            show: true,
                            title: 'Same as image',
                            lang: ['Save']
                        }
                    }
                },

                // Enable drag recalculate
                calculable: false,

                // Add series
                series: [

                    // Inner
                    {
                        name: 'Countries',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: [0, '40%'],

                        // for funnel
                        x: '15%',
                        y: '7.5%',
                        width: '40%',
                        height: '85%',
                        funnelAlign: 'right',
                        max: 1548,

                        itemStyle: {
                            normal: {
                                label: {
                                    position: 'inner'
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            emphasis: {
                                label: {
                                    show: true
                                }
                            }
                        },

                        data: [
                            { value: 535, name: 'Italy' },
                            { value: 679, name: 'Spain' },
                            { value: 1548, name: 'Austria' }
                        ]
                    },

                    // Outer
                    {
                        name: 'Countries',
                        type: 'pie',
                        radius: ['60%', '85%'],

                        // for funnel
                        x: '55%',
                        y: '7.5%',
                        width: '35%',
                        height: '85%',
                        funnelAlign: 'left',
                        max: 1048,

                        data: [
                            { value: 535, name: 'Italy' },
                            { value: 310, name: 'Germany' },
                            { value: 234, name: 'Poland' },
                            { value: 135, name: 'Denmark' },
                            { value: 948, name: 'Hungary' },
                            { value: 251, name: 'Portugal' },
                            { value: 147, name: 'France' },
                            { value: 202, name: 'Netherlands' }
                        ]
                    }
                ]
            };


            //
            // Infographic donut options
            //

            // Data style
            var dataStyle = {
                normal: {
                    label: { show: false },
                    labelLine: { show: false }
                }
            };

            // Placeholder style
            var placeHolderStyle = {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    label: { show: false },
                    labelLine: { show: false }
                },
                emphasis: {
                    color: 'rgba(0,0,0,0)'
                }
            };

            // // Set options
            // infographic_donut_options = {

            //     // Add title
            //     title: {
            //         text: 'Are you happy?',
            //         subtext: 'Utrecht, Netherlands',
            //         x: 'center',
            //         y: 'center',
            //         itemGap: 10,
            //         textStyle: {
            //             color: 'rgba(30,144,255,0.8)',
            //             fontSize: 19,
            //             fontWeight: '500'
            //         }
            //     },

            //     // Add tooltip
            //     tooltip: {
            //         show: true,
            //         formatter: "{a} <br/>{b}: {c} ({d}%)"
            //     },

            //     // Add legend
            //     legend: {
            //         orient: 'vertical',
            //         x: document.getElementById('infographic_donut').offsetWidth / 2,
            //         y: 30,
            //         x: '55%',
            //         itemGap: 15,
            //         data: ['60% Definitely yes','30% Could be better','10% Not at the moment']
            //     },

            //     // Add series
            //     series: [
            //         {
            //             name: '1',
            //             type: 'pie',
            //             clockWise: false,
            //             radius: ['75%', '90%'],
            //             itemStyle: dataStyle,
            //             data: [
            //                 {
            //                     value: 60,
            //                     name: '60% Definitely yes'
            //                 },
            //                 {
            //                     value: 40,
            //                     name: 'invisible',
            //                     itemStyle: placeHolderStyle
            //                 }
            //             ]
            //         },

            //         {
            //             name: '2',
            //             type:'pie',
            //             clockWise: false,
            //             radius: ['60%', '75%'],
            //             itemStyle: dataStyle,
            //             data: [
            //                 {
            //                     value: 30, 
            //                     name: '30% Could be better'
            //                 },
            //                 {
            //                     value: 70,
            //                     name: 'invisible',
            //                     itemStyle: placeHolderStyle
            //                 }
            //             ]
            //         },

            //         {
            //             name: '3',
            //             type: 'pie',
            //             clockWise: false,
            //             radius: ['45%', '60%'],
            //             itemStyle: dataStyle,
            //             data: [
            //                 {
            //                     value: 10, 
            //                     name: '10% Not at the moment'
            //                 },
            //                 {
            //                     value: 90,
            //                     name: 'invisible',
            //                     itemStyle: placeHolderStyle
            //                 }
            //             ]
            //         }
            //     ]
            // };


            //
            // Nightingale roses with hidden labels options
            //

            rose_diagram_hidden_options = {

                // Add title
                title: {
                    text: 'Employee\'s salary review',
                    subtext: 'Senior front end developer',
                    x: 'center'
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: +{c}$ ({d}%)"
                },

                // Add legend
                legend: {
                    x: 'left',
                    y: 'top',
                    orient: 'vertical',
                    data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                },

                // Display toolbox
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    feature: {
                        mark: {
                            show: true,
                            title: {
                                mark: 'Markline switch',
                                markUndo: 'Undo markline',
                                markClear: 'Clear markline'
                            }
                        },
                        dataView: {
                            show: true,
                            readOnly: false,
                            title: 'View data',
                            lang: ['View chart data', 'Close', 'Update']
                        },
                        magicType: {
                            show: true,
                            title: {
                                pie: 'Switch to pies',
                                funnel: 'Switch to funnel',
                            },
                            type: ['pie', 'funnel']
                        },
                        restore: {
                            show: true,
                            title: 'Restore'
                        },
                        saveAsImage: {
                            show: true,
                            title: 'Same as image',
                            lang: ['Save']
                        }
                    }
                },

                // Enable drag recalculate
                calculable: true,

                // Add series
                series: [
                    {
                        name: 'Increase (brutto)',
                        type: 'pie',
                        radius: ['15%', '73%'],
                        center: ['50%', '57%'],
                        roseType: 'radius',

                        // Funnel
                        width: '40%',
                        height: '78%',
                        x: '30%',
                        y: '17.5%',
                        max: 450,

                        itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            emphasis: {
                                label: {
                                    show: true
                                },
                                labelLine: {
                                    show: true
                                }
                            }
                        },
                        data: [
                            { value: 440, name: 'January' },
                            { value: 260, name: 'February' },
                            { value: 350, name: 'March' },
                            { value: 250, name: 'April' },
                            { value: 210, name: 'May' },
                            { value: 350, name: 'June' },
                            { value: 300, name: 'July' },
                            { value: 430, name: 'August' },
                            { value: 400, name: 'September' },
                            { value: 450, name: 'October' },
                            { value: 330, name: 'November' },
                            { value: 200, name: 'December' }
                        ]
                    }
                ]
            };


            //
            // Nightingale roses with visible labels options
            //

            rose_diagram_visible_options = {

                // Add title
                title: {
                    text: 'Employee\'s salary review',
                    subtext: 'Senior front end developer',
                    x: 'center'
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: +{c}$ ({d}%)"
                },

                // Add legend
                legend: {
                    x: 'left',
                    y: 'top',
                    orient: 'vertical',
                    data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                },

                // Display toolbox
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    feature: {
                        mark: {
                            show: true,
                            title: {
                                mark: 'Markline switch',
                                markUndo: 'Undo markline',
                                markClear: 'Clear markline'
                            }
                        },
                        dataView: {
                            show: true,
                            readOnly: false,
                            title: 'View data',
                            lang: ['View chart data', 'Close', 'Update']
                        },
                        magicType: {
                            show: true,
                            title: {
                                pie: 'Switch to pies',
                                funnel: 'Switch to funnel',
                            },
                            type: ['pie', 'funnel']
                        },
                        restore: {
                            show: true,
                            title: 'Restore'
                        },
                        saveAsImage: {
                            show: true,
                            title: 'Same as image',
                            lang: ['Save']
                        }
                    }
                },

                // Enable drag recalculate
                calculable: true,

                // Add series
                series: [
                    {
                        name: 'Increase (brutto)',
                        type: 'pie',
                        radius: ['15%', '73%'],
                        center: ['50%', '57%'],
                        roseType: 'area',

                        // Funnel
                        width: '40%',
                        height: '78%',
                        x: '30%',
                        y: '17.5%',
                        max: 450,
                        sort: 'ascending',

                        data: [
                            { value: 440, name: 'January' },
                            { value: 260, name: 'February' },
                            { value: 350, name: 'March' },
                            { value: 250, name: 'April' },
                            { value: 210, name: 'May' },
                            { value: 350, name: 'June' },
                            { value: 300, name: 'July' },
                            { value: 430, name: 'August' },
                            { value: 400, name: 'September' },
                            { value: 450, name: 'October' },
                            { value: 330, name: 'November' },
                            { value: 200, name: 'December' }
                        ]
                    }
                ]
            };


            //
            // Lasagna options
            //

            lasagna_donut_options = {

                // Add title
                title: {
                    text: 'Conrtact type distribution',
                    subtext: 'Based on shared research',
                    x: 'center'
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },

                // Add legend
                legend: {
                    x: 'left',
                    orient: 'vertical',
                    data: ['Chrome', 'Firefox', 'Safari', 'IE9+', 'IE8-']
                },

                // Enable drag recalculate
                calculable: false,

                // Add series
                series: (function () {
                    var series = [];
                    for (var i = 0; i < 30; i++) {
                        series.push({
                            name: 'Browser',
                            type: 'pie',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: i > 28
                                    },
                                    labelLine: {
                                        show: i > 28,
                                        length: 20
                                    }
                                }
                            },

                            radius: [i * 3.6 + 40, i * 3.6 + 43],
                            center: ['50%', '55%'],
                            data: [
                                { value: i * 128 + 80, name: 'Chrome' },
                                { value: i * 64 + 160, name: 'Firefox' },
                                { value: i * 32 + 320, name: 'Safari' },
                                { value: i * 16 + 640, name: 'IE9+' },
                                { value: i * 8 + 1280, name: 'IE8-' }
                            ]
                        })
                    }
                    return series;
                })()
            };


            //
            // Pie timeline options
            //

            var idx = 1;
            pie_timeline_options = {

                // Add timeline
                timeline: {
                    x: 10,
                    x2: 10,
                    data: [
                        '2014-01-01', '2014-02-01', '2014-03-01', '2014-04-01', '2014-05-01',
                        { name: '2014-06-01', symbol: 'emptyStar2', symbolSize: 8 },
                        '2014-07-01', '2014-08-01', '2014-09-01', '2014-10-01', '2014-11-01',
                        { name: '2014-12-01', symbol: 'star2', symbolSize: 8 }
                    ],
                    label: {
                        formatter: function (s) {
                            return s.slice(0, 7);
                        }
                    },
                    autoPlay: true,
                    playInterval: 3000
                },

                // Set options
                options: [
                    {

                        // Add title
                        title: {
                            text: 'Visit type distribution',
                            subtext: 'Real Time',
                            x: 'center'
                        },

                        // Add tooltip
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },

                        // Add legend
                        legend: {
                            x: 'left',
                            orient: 'vertical',
                            data: ['Zone A', 'Zone B', 'Zone c', 'Zone D', 'Zone E']
                        },

                        // Display toolbox
                        toolbox: {
                            show: true,
                            orient: 'vertical',
                            feature: {
                                mark: {
                                    show: true,
                                    title: {
                                        mark: 'Markline switch',
                                        markUndo: 'Undo markline',
                                        markClear: 'Clear markline'
                                    }
                                },
                                dataView: {
                                    show: true,
                                    readOnly: false,
                                    title: 'View data',
                                    lang: ['View chart data', 'Close', 'Update']
                                },
                                magicType: {
                                    show: true,
                                    title: {
                                        pie: 'Switch to pies',
                                        funnel: 'Switch to funnel',
                                    },
                                    type: ['pie', 'funnel'],
                                    option: {
                                        funnel: {
                                            x: '25%',
                                            width: '50%',
                                            funnelAlign: 'left',
                                            max: 1700
                                        }
                                    }
                                },
                                restore: {
                                    show: true,
                                    title: 'Restore'
                                },
                                saveAsImage: {
                                    show: true,
                                    title: 'Same as image',
                                    lang: ['Save']
                                }
                            }
                        },

                        // Add series
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            center: ['50%', '50%'],
                            radius: '60%',
                            data: [
                                { value: idx * 128 + 80, name: 'Zone A' },
                                { value: idx * 64 + 160, name: 'Zone B' },
                                { value: idx * 32 + 320, name: 'Zone c' },
                                { value: idx * 16 + 640, name: 'Zone D' },
                                { value: idx++ * 8 + 1280, name: 'Zone E' }
                            ]
                        }]
                    },

                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Zone A' },
                                { value: idx * 64 + 160, name: 'Zone B' },
                                { value: idx * 32 + 320, name: 'Zone c' },
                                { value: idx * 16 + 640, name: 'Zone D' },
                                { value: idx++ * 8 + 1280, name: 'Zone E' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Zone A' },
                                { value: idx * 64 + 160, name: 'Zone B' }, ,
                                { value: idx * 32 + 320, name: 'Zone c' },
                                { value: idx * 16 + 640, name: 'Zone D' },
                                { value: idx++ * 8 + 1280, name: 'Zone E' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Zone A' },
                                { value: idx * 64 + 160, name: 'Zone B' }, ,
                                { value: idx * 32 + 320, name: 'Zone c' },
                                { value: idx * 16 + 640, name: 'Zone D' },
                                { value: idx++ * 8 + 1280, name: 'Zone E' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Zone A' },
                                { value: idx * 64 + 160, name: 'Zone B' },
                                { value: idx * 32 + 320, name: 'Zone c' },
                                { value: idx * 16 + 640, name: 'Zone D' },
                                { value: idx++ * 8 + 1280, name: 'Zone E' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Zone A' },
                                { value: idx * 64 + 160, name: 'Zone B' },
                                { value: idx * 32 + 320, name: 'Zone c' },
                                { value: idx * 16 + 640, name: 'Zone D' },
                                { value: idx++ * 8 + 1280, name: 'Zone E' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Zone A' },
                                { value: idx * 64 + 160, name: 'Zone B' }, ,
                                { value: idx * 32 + 320, name: 'Zone c' },
                                { value: idx * 16 + 640, name: 'Zone D' },
                                { value: idx++ * 8 + 1280, name: 'Zone E' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Zone A' },
                                { value: idx * 64 + 160, name: 'Zone B' },
                                { value: idx * 32 + 320, name: 'Zone c' },
                                { value: idx * 16 + 640, name: 'Zone D' },
                                { value: idx++ * 8 + 1280, name: 'Zone E' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Zone A' },
                                { value: idx * 64 + 160, name: 'Zone B' }, ,
                                { value: idx * 32 + 320, name: 'Zone c' },
                                { value: idx * 16 + 640, name: 'Zone D' },
                                { value: idx++ * 8 + 1280, name: 'Zone E' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Zone A' },
                                { value: idx * 64 + 160, name: 'Zone B' },
                                { value: idx * 32 + 320, name: 'Zone c' },
                                { value: idx * 16 + 640, name: 'Zone D' },
                                { value: idx++ * 8 + 1280, name: 'Zone E' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Zone A' },
                                { value: idx * 64 + 160, name: 'Zone B' },
                                { value: idx * 32 + 320, name: 'Zone c' },
                                { value: idx * 16 + 640, name: 'Zone D' },
                                { value: idx++ * 8 + 1280, name: 'Zone E' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: 'Zone A' },
                                { value: idx * 64 + 160, name: 'Zone B' },
                                { value: idx * 32 + 320, name: 'Zone c' },
                                { value: idx * 16 + 640, name: 'Zone D' },
                                { value: idx++ * 8 + 1280, name: 'Zone E' }
                            ]
                        }]
                    }
                ]
            };


            //
            // Multiple donuts options
            //

            // Top text label
            var labelTop = {
                normal: {
                    label: {
                        show: true,
                        position: 'center',
                        formatter: '{b}\n',
                        textStyle: {
                            baseline: 'middle',
                            fontWeight: 300,
                            fontSize: 15
                        }
                    },
                    labelLine: {
                        show: false
                    }
                }
            };

            // Format bottom label
            var labelFromatter = {
                normal: {
                    label: {
                        formatter: function (params) {
                            return '\n\n' + (100 - params.value) + '%'
                        }
                    }
                }
            }

            // Bottom text label
            var labelBottom = {
                normal: {
                    color: '#eee',
                    label: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            baseline: 'middle'
                        }
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    color: 'rgba(0,0,0,0)'
                }
            };

            // Set inner and outer radius
            var radius = [60, 75];

            // Add options
            multiple_donuts_options = {

                // Add title
                title: {
                    text: 'The Application World',
                    subtext: 'from global web index',
                    x: 'center'
                },

                // Add legend
                legend: {
                    x: 'center',
                    y: '56%',
                    data: ['GoogleMaps', 'Facebook', 'Youtube', 'Google+', 'Weixin', 'Twitter', 'Skype', 'Messenger', 'Whatsapp', 'Instagram']
                },

                // Add series
                series: [
                    {
                        type: 'pie',
                        center: ['10%', '32.5%'],
                        radius: radius,
                        itemStyle: labelFromatter,
                        data: [
                            { name: 'other', value: 46, itemStyle: labelBottom },
                            { name: 'GoogleMaps', value: 54, itemStyle: labelTop }
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['30%', '32.5%'],
                        radius: radius,
                        itemStyle: labelFromatter,
                        data: [
                            { name: 'other', value: 56, itemStyle: labelBottom },
                            { name: 'Facebook', value: 44, itemStyle: labelTop }
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['50%', '32.5%'],
                        radius: radius,
                        itemStyle: labelFromatter,
                        data: [
                            { name: 'other', value: 65, itemStyle: labelBottom },
                            { name: 'Youtube', value: 35, itemStyle: labelTop }
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['70%', '32.5%'],
                        radius: radius,
                        itemStyle: labelFromatter,
                        data: [
                            { name: 'other', value: 70, itemStyle: labelBottom },
                            { name: 'Google+', value: 30, itemStyle: labelTop }
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['90%', '32.5%'],
                        radius: radius,
                        itemStyle: labelFromatter,
                        data: [
                            { name: 'other', value: 73, itemStyle: labelBottom },
                            { name: 'Weixin', value: 27, itemStyle: labelTop }
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['10%', '82.5%'],
                        radius: radius,
                        itemStyle: labelFromatter,
                        data: [
                            { name: 'other', value: 78, itemStyle: labelBottom },
                            { name: 'Twitter', value: 22, itemStyle: labelTop }
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['30%', '82.5%'],
                        radius: radius,
                        itemStyle: labelFromatter,
                        data: [
                            { name: 'other', value: 78, itemStyle: labelBottom },
                            { name: 'Skype', value: 22, itemStyle: labelTop }
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['50%', '82.5%'],
                        radius: radius,
                        itemStyle: labelFromatter,
                        data: [
                            { name: 'other', value: 78, itemStyle: labelBottom },
                            { name: 'Messenger', value: 22, itemStyle: labelTop }
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['70%', '82.5%'],
                        radius: radius,
                        itemStyle: labelFromatter,
                        data: [
                            { name: 'other', value: 83, itemStyle: labelBottom },
                            { name: 'Whatsapp', value: 17, itemStyle: labelTop }
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['90%', '82.5%'],
                        radius: radius,
                        itemStyle: labelFromatter,
                        data: [
                            { name: 'other', value: 89, itemStyle: labelBottom },
                            { name: 'Instagram', value: 11, itemStyle: labelTop }
                        ]
                    }
                ]
            };



            // Apply options
            // ------------------------------

            pie_timeline.setOption(pie_timeline_options);
            line_bar_VISITORS.setOption(line_bar_options_VISITORS);


            // Resize charts
            // ------------------------------

            window.onresize = function () {
                setTimeout(function () {
                    pie_timeline.resize();
                    line_bar_VISITORS.resize();
                }, 200);
            }
        }
    );
});


$(function () {


    // Switchery toggles
    // ------------------------------

    var switches = Array.prototype.slice.call(document.querySelectorAll('.switch'));
    switches.forEach(function (html) {
        var switchery = new Switchery(html, { color: '#4CAF50' });
    });




    // Daterange picker
    // ------------------------------

    $('.daterange-ranges').daterangepicker(
        {
            startDate: moment().subtract(29, 'days'),
            endDate: moment(),
            minDate: '01/01/2012',
            maxDate: '12/31/2016',
            dateLimit: { days: 60 },
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            opens: 'left',
            applyClass: 'btn-small bg-slate-600 btn-block',
            cancelClass: 'btn-small btn-default btn-block',
            format: 'MM/DD/YYYY'
        },
        function (start, end) {
            $('.daterange-ranges span').html(start.format('MMMM D') + ' - ' + end.format('MMMM D'));
        }
    );

    $('.daterange-ranges span').html(moment().subtract(29, 'days').format('MMMM D') + ' - ' + moment().format('MMMM D'));




    // Traffic sources stream chart
    // ------------------------------

    // trafficSources('#traffic-sources', 330); // initialize chart

    // Chart setup
    function trafficSources(element, height) {


        // Basic setup
        // ------------------------------

        // Define main variables
        var d3Container = d3.select(element),
            margin = { top: 5, right: 50, bottom: 40, left: 50 },
            width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
            height = height - margin.top - margin.bottom,
            tooltipOffset = 30;

        // Tooltip
        var tooltip = d3Container
            .append("div")
            .attr("class", "d3-tip e")
            .style("display", "none")

        // Format date
        var format = d3.time.format("%m/%d/%y %H:%M");
        var formatDate = d3.time.format("%H:%M");

        // Colors
        var colorrange = ['#03A9F4', '#29B6F6', '#4FC3F7', '#81D4FA', '#B3E5FC', '#E1F5FE'];



        // Construct scales
        // ------------------------------

        // Horizontal
        var x = d3.time.scale().range([0, width]);

        // Vertical
        var y = d3.scale.linear().range([height, 0]);

        // Colors
        var z = d3.scale.ordinal().range(colorrange);



        // Create axes
        // ------------------------------

        // Horizontal
        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .ticks(d3.time.hours, 4)
            .innerTickSize(4)
            .tickPadding(8)
            .tickFormat(d3.time.format("%H:%M")); // Display hours and minutes in 24h format

        // Left vertical
        var yAxis = d3.svg.axis()
            .scale(y)
            .ticks(6)
            .innerTickSize(4)
            .outerTickSize(0)
            .tickPadding(8)
            .tickFormat(function (d) { return (d / 1000) + "k"; });

        // Right vertical
        var yAxis2 = yAxis;

        // Dash lines
        var gridAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(6)
            .tickPadding(8)
            .tickFormat("")
            .tickSize(-width, 0, 0);



        // Create chart
        // ------------------------------

        // Container
        var container = d3Container.append("svg")

        // SVG element
        var svg = container
            .attr('width', width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



        // Construct chart layout
        // ------------------------------

        // Stack
        var stack = d3.layout.stack()
            .offset("silhouette")
            .values(function (d) { return d.values; })
            .x(function (d) { return d.date; })
            .y(function (d) { return d.value; });

        // Nest
        var nest = d3.nest()
            .key(function (d) { return d.key; });

        // Area
        var area = d3.svg.area()
            .interpolate("cardinal")
            .x(function (d) { return x(d.date); })
            .y0(function (d) { return y(d.y0); })
            .y1(function (d) { return y(d.y0 + d.y); });



        // Load data
        // ------------------------------

        d3.csv("assets/demo_data/dashboard/traffic_sources.csv", function (error, data) {

            // Pull out values
            data.forEach(function (d) {
                d.date = format.parse(d.date);
                d.value = +d.value;
            });

            // Stack and nest layers
            var layers = stack(nest.entries(data));



            // Set input domains
            // ------------------------------

            // Horizontal
            x.domain(d3.extent(data, function (d, i) { return d.date; }));

            // Vertical
            y.domain([0, d3.max(data, function (d) { return d.y0 + d.y; })]);



            // Add grid
            // ------------------------------

            // Horizontal grid. Must be before the group
            svg.append("g")
                .attr("class", "d3-grid-dashed")
                .call(gridAxis);



            //
            // Append chart elements
            //

            // Stream layers
            // ------------------------------

            // Create group
            var group = svg.append('g')
                .attr('class', 'streamgraph-layers-group');

            // And append paths to this group
            var layer = group.selectAll(".streamgraph-layer")
                .data(layers)
                .enter()
                .append("path")
                .attr("class", "streamgraph-layer")
                .attr("d", function (d) { return area(d.values); })
                .style('stroke', '#fff')
                .style('stroke-width', 0.5)
                .style("fill", function (d, i) { return z(i); });

            // Add transition
            var layerTransition = layer
                .style('opacity', 0)
                .transition()
                .duration(750)
                .delay(function (d, i) { return i * 50; })
                .style('opacity', 1)



            // Append axes
            // ------------------------------

            //
            // Left vertical
            //

            svg.append("g")
                .attr("class", "d3-axis d3-axis-left d3-axis-solid")
                .call(yAxis.orient("left"));

            // Hide first tick
            d3.select(svg.selectAll('.d3-axis-left .tick text')[0][0])
                .style("visibility", "hidden");


            //
            // Right vertical
            //

            svg.append("g")
                .attr("class", "d3-axis d3-axis-right d3-axis-solid")
                .attr("transform", "translate(" + width + ", 0)")
                .call(yAxis2.orient("right"));

            // Hide first tick
            d3.select(svg.selectAll('.d3-axis-right .tick text')[0][0])
                .style("visibility", "hidden");


            //
            // Horizontal
            //

            var xaxisg = svg.append("g")
                .attr("class", "d3-axis d3-axis-horizontal d3-axis-solid")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            // Add extra subticks for hidden hours
            xaxisg.selectAll(".d3-axis-subticks")
                .data(x.ticks(d3.time.hours), function (d) { return d; })
                .enter()
                .append("line")
                .attr("class", "d3-axis-subticks")
                .attr("y1", 0)
                .attr("y2", 4)
                .attr("x1", x)
                .attr("x2", x);



            // Add hover line and pointer
            // ------------------------------

            // Append group to the group of paths to prevent appearance outside chart area
            var hoverLineGroup = group.append("g")
                .attr("class", "hover-line");

            // Add line
            var hoverLine = hoverLineGroup
                .append("line")
                .attr("y1", 0)
                .attr("y2", height)
                .style('fill', 'none')
                .style('stroke', '#fff')
                .style('stroke-width', 1)
                .style('pointer-events', 'none')
                .style('shape-rendering', 'crispEdges')
                .style("opacity", 0);

            // Add pointer
            var hoverPointer = hoverLineGroup
                .append("rect")
                .attr("x", 2)
                .attr("y", 2)
                .attr("width", 6)
                .attr("height", 6)
                .style('fill', '#03A9F4')
                .style('stroke', '#fff')
                .style('stroke-width', 1)
                .style('shape-rendering', 'crispEdges')
                .style('pointer-events', 'none')
                .style("opacity", 0);



            // Append events to the layers group
            // ------------------------------

            layerTransition.each("end", function () {
                layer
                    .on("mouseover", function (d, i) {
                        svg.selectAll(".streamgraph-layer")
                            .transition()
                            .duration(250)
                            .style("opacity", function (d, j) {
                                return j != i ? 0.75 : 1; // Mute all except hovered
                            });
                    })

                    .on("mousemove", function (d, i) {
                        mouse = d3.mouse(this);
                        mousex = mouse[0];
                        mousey = mouse[1];
                        datearray = [];
                        var invertedx = x.invert(mousex);
                        invertedx = invertedx.getHours();
                        var selected = (d.values);
                        for (var k = 0; k < selected.length; k++) {
                            datearray[k] = selected[k].date
                            datearray[k] = datearray[k].getHours();
                        }
                        mousedate = datearray.indexOf(invertedx);
                        pro = d.values[mousedate].value;


                        // Display mouse pointer
                        hoverPointer
                            .attr("x", mousex - 3)
                            .attr("y", mousey - 6)
                            .style("opacity", 1);

                        hoverLine
                            .attr("x1", mousex)
                            .attr("x2", mousex)
                            .style("opacity", 1);

                        //
                        // Tooltip
                        //

                        // Tooltip data
                        tooltip.html(
                            "<ul class='list-unstyled mb-5'>" +
                            "<li>" + "<div class='text-size-base mt-5 mb-5'><i class='icon-circle-left2 position-left'></i>" + d.key + "</div>" + "</li>" +
                            "<li>" + "Visits: &nbsp;" + "<span class='text-semibold pull-right'>" + pro + "</span>" + "</li>" +
                            "<li>" + "Time: &nbsp; " + "<span class='text-semibold pull-right'>" + formatDate(d.values[mousedate].date) + "</span>" + "</li>" +
                            "</ul>"
                        )
                            .style("display", "block");

                        // Tooltip arrow
                        tooltip.append('div').attr('class', 'd3-tip-arrow');
                    })

                    .on("mouseout", function (d, i) {

                        // Revert full opacity to all paths
                        svg.selectAll(".streamgraph-layer")
                            .transition()
                            .duration(250)
                            .style("opacity", 1);

                        // Hide cursor pointer
                        hoverPointer.style("opacity", 0);

                        // Hide tooltip
                        tooltip.style("display", "none");

                        hoverLine.style("opacity", 0);
                    });
            });



            // Append events to the chart container
            // ------------------------------

            d3Container
                .on("mousemove", function (d, i) {
                    mouse = d3.mouse(this);
                    mousex = mouse[0];
                    mousey = mouse[1];

                    // Display hover line
                    //.style("opacity", 1);


                    // Move tooltip vertically
                    tooltip.style("top", (mousey - ($('.d3-tip').outerHeight() / 2)) - 2 + "px") // Half tooltip height - half arrow width

                    // Move tooltip horizontally
                    if (mousex >= ($(element).outerWidth() - $('.d3-tip').outerWidth() - margin.right - (tooltipOffset * 2))) {
                        tooltip
                            .style("left", (mousex - $('.d3-tip').outerWidth() - tooltipOffset) + "px") // Change tooltip direction from right to left to keep it inside graph area
                            .attr("class", "d3-tip w");
                    }
                    else {
                        tooltip
                            .style("left", (mousex + tooltipOffset) + "px")
                            .attr("class", "d3-tip e");
                    }
                });
        });



        // Resize chart
        // ------------------------------

        // Call function on window resize
        $(window).on('resize', resizeStream);

        // Call function on sidebar width change
        $(document).on('click', '.sidebar-control', resizeStream);

        // Resize function
        // 
        // Since D3 doesn't support SVG resize by default,
        // we need to manually specify parts of the graph that need to 
        // be updated on window resize
        function resizeStream() {

            // Layout
            // -------------------------

            // Define width
            width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;

            // Main svg width
            container.attr("width", width + margin.left + margin.right);

            // Width of appended group
            svg.attr("width", width + margin.left + margin.right);

            // Horizontal range
            x.range([0, width]);


            // Chart elements
            // -------------------------

            // Horizontal axis
            svg.selectAll('.d3-axis-horizontal').call(xAxis);

            // Horizontal axis subticks
            svg.selectAll('.d3-axis-subticks').attr("x1", x).attr("x2", x);

            // Grid lines width
            svg.selectAll(".d3-grid-dashed").call(gridAxis.tickSize(-width, 0, 0))

            // Right vertical axis
            svg.selectAll(".d3-axis-right").attr("transform", "translate(" + width + ", 0)");

            // Area paths
            svg.selectAll('.streamgraph-layer').attr("d", function (d) { return area(d.values); });
        }
    }




    // App sales lines chart
    // ------------------------------

    appSalesLines('#app_sales', 255); // initialize chart

    // Chart setup
    function appSalesLines(element, height) {


        // Basic setup
        // ------------------------------

        // Define main variables
        var d3Container = d3.select(element),
            margin = { top: 5, right: 30, bottom: 30, left: 50 },
            width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
            height = height - margin.top - margin.bottom;

        // Tooltip
        var tooltip = d3.tip()
            .attr('class', 'd3-tip')
            .html(function (d) {
                return "<ul class='list-unstyled mb-5'>" +
                    "<li>" + "<div class='text-size-base mt-5 mb-5'><i class='icon-circle-left2 position-left'></i>" + d.name + " app" + "</div>" + "</li>" +
                    "<li>" + "Sales: &nbsp;" + "<span class='text-semibold pull-right'>" + d.value + "</span>" + "</li>" +
                    "<li>" + "Revenue: &nbsp; " + "<span class='text-semibold pull-right'>" + "$" + (d.value * 25).toFixed(2) + "</span>" + "</li>" +
                    "</ul>";
            });

        // Format date
        var parseDate = d3.time.format("%Y/%m/%d").parse,
            formatDate = d3.time.format("%b %d, '%y");

        // Line colors
        var scale = ["#4CAF50", "#FF5722", "#5C6BC0"],
            color = d3.scale.ordinal().range(scale);



        // Create chart
        // ------------------------------

        // Container
        var container = d3Container.append('svg');

        // SVG element
        var svg = container
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .call(tooltip);



        // Add date range switcher
        // ------------------------------

        // Menu
        var menu = $("#select_date").multiselect({
            buttonClass: 'btn btn-link text-semibold',
            enableHTML: true,
            dropRight: true,
            onChange: function () { change(), $.uniform.update(); },
            buttonText: function (options, element) {
                var selected = '';
                options.each(function () {
                    selected += $(this).html() + ', ';
                });
                return '<span class="status-mark border-warning position-left"></span>' + selected.substr(0, selected.length - 2);
            }
        });

        var menu = $("#select_date2").multiselect({
            buttonClass: 'btn btn-link text-semibold',
            enableHTML: true,
            dropRight: true,
            onChange: function () { change(), $.uniform.update(); },
            buttonText: function (options, element) {
                var selected = '';
                options.each(function () {
                    selected += $(this).html() + ', ';
                });
                return '<span class="status-mark border-warning position-left"></span>' + selected.substr(0, selected.length - 2);
            }
        });
        

        // Radios
        $(".multiselect-container input").uniform({ radioClass: 'choice' });



        // Load data
        // ------------------------------

        d3.csv("assets/demo_data/dashboard/app_sales.csv", function (error, data) {
            formatted = data;
            redraw();
        });



        // Construct layout
        // ------------------------------

        // Add events
        var altKey;
        d3.select(window)
            .on("keydown", function () { altKey = d3.event.altKey; })
            .on("keyup", function () { altKey = false; });

        // Set terms of transition on date change   
        function change() {
            d3.transition()
                .duration(altKey ? 7500 : 500)
                .each(redraw);
        }



        // Main chart drawing function
        // ------------------------------

        function redraw() {

            // Construct chart layout
            // ------------------------------

            // Create data nests
            var nested = d3.nest()
                .key(function (d) { return d.type; })
                .map(formatted)

            // Get value from menu selection
            // the option values correspond
            //to the [type] value we used to nest the data  
            var series = menu.val();

            // Only retrieve data from the selected series using nest
            var data = nested[series];

            // For object constancy we will need to set "keys", one for each type of data (column name) exclude all others.
            color.domain(d3.keys(data[0]).filter(function (key) { return (key !== "date" && key !== "type"); }));

            // Setting up color map
            var linedata = color.domain().map(function (name) {
                return {
                    name: name,
                    values: data.map(function (d) {
                        return { name: name, date: parseDate(d.date), value: parseFloat(d[name], 10) };
                    })
                };
            });

            // Draw the line
            var line = d3.svg.line()
                .x(function (d) { return x(d.date); })
                .y(function (d) { return y(d.value); })
                .interpolate('cardinal');



            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.time.scale()
                .domain([
                    d3.min(linedata, function (c) { return d3.min(c.values, function (v) { return v.date; }); }),
                    d3.max(linedata, function (c) { return d3.max(c.values, function (v) { return v.date; }); })
                ])
                .range([0, width]);

            // Vertical
            var y = d3.scale.linear()
                .domain([
                    d3.min(linedata, function (c) { return d3.min(c.values, function (v) { return v.value; }); }),
                    d3.max(linedata, function (c) { return d3.max(c.values, function (v) { return v.value; }); })
                ])
                .range([height, 0]);



            // Create axes
            // ------------------------------

            // Horizontal
            var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom")
                .tickPadding(8)
                .ticks(d3.time.days)
                .innerTickSize(4)
                .tickFormat(d3.time.format("%a")); // Display hours and minutes in 24h format

            // Vertical
            var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left")
                .ticks(6)
                .tickSize(0 - width)
                .tickPadding(8);



            //
            // Append chart elements
            //

            // Append axes
            // ------------------------------

            // Horizontal
            svg.append("g")
                .attr("class", "d3-axis d3-axis-horizontal d3-axis-solid")
                .attr("transform", "translate(0," + height + ")");

            // Vertical
            svg.append("g")
                .attr("class", "d3-axis d3-axis-vertical d3-axis-transparent");



            // Append lines
            // ------------------------------

            // Bind the data
            var lines = svg.selectAll(".lines")
                .data(linedata)

            // Append a group tag for each line
            var lineGroup = lines
                .enter()
                .append("g")
                .attr("class", "lines")
                .attr('id', function (d) { return d.name + "-line"; });

            // Append the line to the graph
            lineGroup.append("path")
                .attr("class", "d3-line d3-line-medium")
                .style("stroke", function (d) { return color(d.name); })
                .style('opacity', 0)
                .attr("d", function (d) { return line(d.values[0]); })
                .transition()
                .duration(500)
                .delay(function (d, i) { return i * 200; })
                .style('opacity', 1);



            // Append circles
            // ------------------------------

            var circles = lines.selectAll("circle")
                .data(function (d) { return d.values; })
                .enter()
                .append("circle")
                .attr("class", "d3-line-circle d3-line-circle-medium")
                .attr("cx", function (d, i) { return x(d.date) })
                .attr("cy", function (d, i) { return y(d.value) })
                .attr("r", 3)
                .style('fill', '#fff')
                .style("stroke", function (d) { return color(d.name); });

            // Add transition
            circles
                .style('opacity', 0)
                .transition()
                .duration(500)
                .delay(500)
                .style('opacity', 1);



            // Append tooltip
            // ------------------------------

            // Add tooltip on circle hover
            circles
                .on("mouseover", function (d) {
                    tooltip.offset([-15, 0]).show(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 4);
                })
                .on("mouseout", function (d) {
                    tooltip.hide(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 3);
                });

            // Change tooltip direction of first point
            // to always keep it inside chart, useful on mobiles
            lines.each(function (d) {
                d3.select(d3.select(this).selectAll('circle')[0][0])
                    .on("mouseover", function (d) {
                        tooltip.offset([0, 15]).direction('e').show(d);

                        // Animate circle radius
                        d3.select(this).transition().duration(250).attr('r', 4);
                    })
                    .on("mouseout", function (d) {
                        tooltip.direction('n').hide(d);

                        // Animate circle radius
                        d3.select(this).transition().duration(250).attr('r', 3);
                    });
            })

            // Change tooltip direction of last point
            // to always keep it inside chart, useful on mobiles
            lines.each(function (d) {
                d3.select(d3.select(this).selectAll('circle')[0][d3.select(this).selectAll('circle').size() - 1])
                    .on("mouseover", function (d) {
                        tooltip.offset([0, -15]).direction('w').show(d);

                        // Animate circle radius
                        d3.select(this).transition().duration(250).attr('r', 4);
                    })
                    .on("mouseout", function (d) {
                        tooltip.direction('n').hide(d);

                        // Animate circle radius
                        d3.select(this).transition().duration(250).attr('r', 3);
                    })
            })



            // Update chart on date change
            // ------------------------------

            // Set variable for updating visualization
            var lineUpdate = d3.transition(lines);

            // Update lines
            lineUpdate.select("path")
                .attr("d", function (d, i) { return line(d.values); });

            // Update circles
            lineUpdate.selectAll("circle")
                .attr("cy", function (d, i) { return y(d.value) })
                .attr("cx", function (d, i) { return x(d.date) });

            // Update vertical axes
            d3.transition(svg)
                .select(".d3-axis-vertical")
                .call(yAxis);

            // Update horizontal axes
            d3.transition(svg)
                .select(".d3-axis-horizontal")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);



            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', appSalesResize);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', appSalesResize);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function appSalesResize() {

                // Layout
                // -------------------------

                // Define width
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;

                // Main svg width
                container.attr("width", width + margin.left + margin.right);

                // Width of appended group
                svg.attr("width", width + margin.left + margin.right);

                // Horizontal range
                x.range([0, width]);

                // Vertical range
                y.range([height, 0]);


                // Chart elements
                // -------------------------

                // Horizontal axis
                svg.select('.d3-axis-horizontal').call(xAxis);

                // Vertical axis
                svg.select('.d3-axis-vertical').call(yAxis.tickSize(0 - width));

                // Lines
                svg.selectAll('.d3-line').attr("d", function (d, i) { return line(d.values); });

                // Circles
                svg.selectAll('.d3-line-circle').attr("cx", function (d, i) { return x(d.date) })
            }
        }
    }




    // App sales heatmap chart
    // ------------------------------

    // salesHeatmap(); // initialize chart

    // Chart setup
    function salesHeatmap() {


        // Load data
        // ------------------------------

        d3.csv("assets/demo_data/dashboard/app_sales_heatmap.csv", function (error, data) {


            // Bind data
            // ------------------------------

            // Nest data
            var nested_data = d3.nest().key(function (d) { return d.app; }),
                nest = nested_data.entries(data);

            // Format date
            var format = d3.time.format("%Y/%m/%d %H:%M"),
                formatTime = d3.time.format("%H:%M");

            // Pull out values
            data.forEach(function (d, i) {
                d.date = format.parse(d.date),
                    d.value = +d.value
            });



            // Layout setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select('#sales-heatmap');
            margin = { top: 20, right: 0, bottom: 30, left: 0 },
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                gridSize = width / new Date(data[data.length - 1].date).getHours(), // dynamically set grid size
                rowGap = 40, // vertical gap between rows
                height = (rowGap + gridSize) * (d3.max(nest, function (d, i) { return i + 1 })) - margin.top,
                buckets = 5, // number of colors in range
                colors = ["#DCEDC8", "#C5E1A5", "#9CCC65", "#7CB342", "#558B2F"];



            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.time.scale().range([0, width]);

            // Vertical
            var y = d3.scale.linear().range([height, 0]);

            // Colors
            var colorScale = d3.scale.quantile()
                .domain([0, buckets - 1, d3.max(data, function (d) { return d.value; })])
                .range(colors);



            // Set input domains
            // ------------------------------

            // Horizontal
            x.domain([new Date(data[0].date), d3.time.hour.offset(new Date(data[data.length - 1].date), 1)]);

            // Vertical
            y.domain([0, d3.max(data, function (d) { return d.app; })]);



            // Create chart
            // ------------------------------

            // Container
            var container = d3Container.append('svg');

            // SVG element
            var svg = container
                .attr('width', width + margin.left + margin.right)
                .attr("height", height + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



            //
            // Append chart elements
            //

            // App groups
            // ------------------------------

            // Add groups for each app
            var hourGroup = svg.selectAll('.hour-group')
                .data(nest)
                .enter()
                .append('g')
                .attr('class', 'hour-group')
                .attr("transform", function (d, i) { return "translate(0, " + ((gridSize + rowGap) * i) + ")"; });

            // Add app name
            hourGroup
                .append("text")
                .attr('class', 'app-label')
                .attr('x', 0)
                .attr('y', -(margin.top / 2))
                .text(function (d, i) { return d.key; });

            // Sales count text
            hourGroup
                .append("text")
                .attr('class', 'sales-count')
                .attr('x', width)
                .attr('y', -(margin.top / 2))
                .style('text-anchor', 'end')
                .text(function (d, i) { return d3.sum(d.values, function (d) { return d.value; }) + " sales today" });



            // Add map elements
            // ------------------------------

            // Add map squares
            var heatMap = hourGroup.selectAll(".heatmap-hour")
                .data(function (d) { return d.values })
                .enter()
                .append("rect")
                .attr("x", function (d, i) { return x(d.date); })
                .attr("y", 0)
                .attr("class", "heatmap-hour")
                .attr("width", gridSize)
                .attr("height", gridSize)
                .style("fill", '#fff')
                .style('stroke', '#fff')
                .style('cursor', 'pointer')
                .style('shape-rendering', 'crispEdges');

            // Add loading transition    
            heatMap.transition()
                .duration(250)
                .delay(function (d, i) { return i * 20; })
                .style("fill", function (d) { return colorScale(d.value); })

            // Add user interaction
            hourGroup.each(function (d) {
                heatMap
                    .on("mouseover", function (d, i) {
                        d3.select(this).style('opacity', 0.75);
                        d3.select(this.parentNode).select('.sales-count').text(function (d) { return d.values[i].value + " sales at " + formatTime(d.values[i].date); })
                    })
                    .on("mouseout", function (d, i) {
                        d3.select(this).style('opacity', 1);
                        d3.select(this.parentNode).select('.sales-count').text(function (d, i) { return d3.sum(d.values, function (d) { return d.value; }) + " sales today" })
                    })
            })



            // Add legend
            // ------------------------------

            // Get min and max values
            var minValue, maxValue;
            data.forEach(function (d, i) {
                maxValue = d3.max(data, function (d) { return d.value; });
                minValue = d3.min(data, function (d) { return d.value; });
            });

            // Place legend inside separate group
            var legendGroup = svg.append('g')
                .attr('class', 'legend-group')
                .attr('width', width)
                .attr("transform", "translate(" + ((width / 2) - ((buckets * gridSize)) / 2) + "," + (height + (margin.bottom - margin.top)) + ")");

            // Then group legend elements
            var legend = legendGroup.selectAll(".heatmap-legend")
                .data([0].concat(colorScale.quantiles()), function (d) { return d; })
                .enter()
                .append("g")
                .attr("class", "heatmap-legend");

            // Add legend items
            legend.append("rect")
                .attr('class', 'heatmap-legend-item')
                .attr("x", function (d, i) { return gridSize * i; })
                .attr("y", -8)
                .attr("width", gridSize)
                .attr("height", 5)
                .style('stroke', '#fff')
                .style('shape-rendering', 'crispEdges')
                .style("fill", function (d, i) { return colors[i]; });

            // Add min value text label
            legendGroup.append("text")
                .attr("class", "min-legend-value")
                .attr("x", -10)
                .attr("y", -2)
                .style('text-anchor', 'end')
                .style('font-size', 11)
                .style('fill', '#999')
                .text(minValue);

            // Add max value text label
            legendGroup.append("text")
                .attr("class", "max-legend-value")
                .attr("x", (buckets * gridSize) + 10)
                .attr("y", -2)
                .style('font-size', 11)
                .style('fill', '#999')
                .text(maxValue);



            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', resizeHeatmap);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', resizeHeatmap);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function resizeHeatmap() {

                // Layout
                // -------------------------

                // Width
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,

                    // Grid size
                    gridSize = width / new Date(data[data.length - 1].date).getHours(),

                    // Height
                    height = (rowGap + gridSize) * (d3.max(nest, function (d, i) { return i + 1 })) - margin.top,

                    // Main svg width
                    container.attr("width", width + margin.left + margin.right).attr("height", height + margin.bottom);

                // Width of appended group
                svg.attr("width", width + margin.left + margin.right).attr("height", height + margin.bottom);

                // Horizontal range
                x.range([0, width]);


                // Chart elements
                // -------------------------

                // Groups for each app
                svg.selectAll('.hour-group')
                    .attr("transform", function (d, i) { return "translate(0, " + ((gridSize + rowGap) * i) + ")"; });

                // Map squares
                svg.selectAll(".heatmap-hour")
                    .attr("width", gridSize)
                    .attr("height", gridSize)
                    .attr("x", function (d, i) { return x(d.date); });

                // Legend group
                svg.selectAll('.legend-group')
                    .attr("transform", "translate(" + ((width / 2) - ((buckets * gridSize)) / 2) + "," + (height + margin.bottom - margin.top) + ")");

                // Sales count text
                svg.selectAll('.sales-count')
                    .attr("x", width);

                // Legend item
                svg.selectAll('.heatmap-legend-item')
                    .attr("width", gridSize)
                    .attr("x", function (d, i) { return gridSize * i; });

                // Max value text label
                svg.selectAll('.max-legend-value')
                    .attr("x", (buckets * gridSize) + 10);
            }
        });
    }




    // Monthly app sales area chart
    // ------------------------------

    monthlySalesArea("#monthly-sales-stats", 100, '#4DB6AC'); // initialize chart

    // Chart setup
    function monthlySalesArea(element, height, color) {


        // Basic setup
        // ------------------------------

        // Define main variables
        var d3Container = d3.select(element),
            margin = { top: 20, right: 35, bottom: 40, left: 35 },
            width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
            height = height - margin.top - margin.bottom;

        // Date and time format
        var parseDate = d3.time.format('%Y-%m-%d').parse,
            bisectDate = d3.bisector(function (d) { return d.date; }).left,
            formatDate = d3.time.format("%b %d");



        // Create SVG
        // ------------------------------

        // Container
        var container = d3Container.append('svg');

        // SVG element
        var svg = container
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")



        // Construct chart layout
        // ------------------------------

        // Area
        var area = d3.svg.area()
            .x(function (d) { return x(d.date); })
            .y0(height)
            .y1(function (d) { return y(d.value); })
            .interpolate('monotone')


        // Construct scales
        // ------------------------------

        // Horizontal
        var x = d3.time.scale().range([0, width]);

        // Vertical
        var y = d3.scale.linear().range([height, 0]);


        // Create axes
        // ------------------------------

        // Horizontal
        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .ticks(d3.time.days, 6)
            .innerTickSize(4)
            .tickPadding(8)
            .tickFormat(d3.time.format("%b %d"));


        // Load data
        // ------------------------------

        d3.json("assets/demo_data/dashboard/monthly_sales.json", function (error, data) {

            // Show what's wrong if error
            if (error) return console.error(error);

            // Pull out values
            data.forEach(function (d) {
                d.date = parseDate(d.date);
                d.value = +d.value;
            });

            // Get the maximum value in the given array
            var maxY = d3.max(data, function (d) { return d.value; });

            // Reset start data for animation
            var startData = data.map(function (datum) {
                return {
                    date: datum.date,
                    value: 0
                };
            });


            // Set input domains
            // ------------------------------

            // Horizontal
            x.domain(d3.extent(data, function (d, i) { return d.date; }));

            // Vertical
            y.domain([0, d3.max(data, function (d) { return d.value; })]);



            //
            // Append chart elements
            //

            // Append axes
            // -------------------------

            // Horizontal
            var horizontalAxis = svg.append("g")
                .attr("class", "d3-axis d3-axis-horizontal d3-axis-solid")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            // Add extra subticks for hidden hours
            horizontalAxis.selectAll(".d3-axis-subticks")
                .data(x.ticks(d3.time.days), function (d) { return d; })
                .enter()
                .append("line")
                .attr("class", "d3-axis-subticks")
                .attr("y1", 0)
                .attr("y2", 4)
                .attr("x1", x)
                .attr("x2", x);



            // Append area
            // -------------------------

            // Add area path
            svg.append("path")
                .datum(data)
                .attr("class", "d3-area")
                .attr("d", area)
                .style('fill', color)
                .transition() // begin animation
                .duration(1000)
                .attrTween('d', function () {
                    var interpolator = d3.interpolateArray(startData, data);
                    return function (t) {
                        return area(interpolator(t));
                    }
                });



            // Append crosshair and tooltip
            // -------------------------

            //
            // Line
            //

            // Line group
            var focusLine = svg.append("g")
                .attr("class", "d3-crosshair-line")
                .style("display", "none");

            // Line element
            focusLine.append("line")
                .attr("class", "vertical-crosshair")
                .attr("y1", 0)
                .attr("y2", -maxY)
                .style("stroke", "#e5e5e5")
                .style('shape-rendering', 'crispEdges')


            //
            // Pointer
            //

            // Pointer group
            var focusPointer = svg.append("g")
                .attr("class", "d3-crosshair-pointer")
                .style("display", "none");

            // Pointer element
            focusPointer.append("circle")
                .attr("r", 3)
                .style("fill", "#fff")
                .style('stroke', color)
                .style('stroke-width', 1)


            //
            // Text
            //

            // Text group
            var focusText = svg.append("g")
                .attr("class", "d3-crosshair-text")
                .style("display", "none");

            // Text element
            focusText.append("text")
                .attr("dy", -10)
                .style('font-size', 12);


            //
            // Overlay with events
            //

            svg.append("rect")
                .attr("class", "d3-crosshair-overlay")
                .style('fill', 'none')
                .style('pointer-events', 'all')
                .attr("width", width)
                .attr("height", height)
                .on("mouseover", function () {
                    focusPointer.style("display", null);
                    focusLine.style("display", null)
                    focusText.style("display", null);
                })
                .on("mouseout", function () {
                    focusPointer.style("display", "none");
                    focusLine.style("display", "none");
                    focusText.style("display", "none");
                })
                .on("mousemove", mousemove);


            // Display tooltip on mousemove
            function mousemove() {

                // Define main variables
                var mouse = d3.mouse(this),
                    mousex = mouse[0],
                    mousey = mouse[1],
                    x0 = x.invert(mousex),
                    i = bisectDate(data, x0),
                    d0 = data[i - 1],
                    d1 = data[i],
                    d = x0 - d0.date > d1.date - x0 ? d1 : d0;

                // Move line
                focusLine.attr("transform", "translate(" + x(d.date) + "," + height + ")");

                // Move pointer
                focusPointer.attr("transform", "translate(" + x(d.date) + "," + y(d.value) + ")");

                // Reverse tooltip at the end point
                if (mousex >= (d3Container.node().getBoundingClientRect().width - focusText.select('text').node().getBoundingClientRect().width - margin.right - margin.left)) {
                    focusText.select("text").attr('text-anchor', 'end').attr("x", function () { return (x(d.date) - 15) + "px" }).text(formatDate(d.date) + " - " + d.value + " sales");
                }
                else {
                    focusText.select("text").attr('text-anchor', 'start').attr("x", function () { return (x(d.date) + 15) + "px" }).text(formatDate(d.date) + " - " + d.value + " sales");
                }
            }



            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', monthlySalesAreaResize);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', monthlySalesAreaResize);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function monthlySalesAreaResize() {

                // Layout variables
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                // Layout
                // -------------------------

                // Main svg width
                container.attr("width", width + margin.left + margin.right);

                // Width of appended group
                svg.attr("width", width + margin.left + margin.right);


                // Axes
                // -------------------------

                // Horizontal range
                x.range([0, width]);

                // Horizontal axis
                svg.selectAll('.d3-axis-horizontal').call(xAxis);

                // Horizontal axis subticks
                svg.selectAll('.d3-axis-subticks').attr("x1", x).attr("x2", x);


                // Chart elements
                // -------------------------

                // Area path
                svg.selectAll('.d3-area').datum(data).attr("d", area);

                // Crosshair
                svg.selectAll('.d3-crosshair-overlay').attr("width", width);
            }
        });
    }




    // Messages area chart
    // ------------------------------

    // messagesArea("#messages-stats", 40, '#5C6BC0'); // initialize chart

    // Chart setup
    function messagesArea(element, height, color) {


        // Basic setup
        // ------------------------------

        // Define main variables
        var d3Container = d3.select(element),
            margin = { top: 0, right: 0, bottom: 0, left: 0 },
            width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
            height = height - margin.top - margin.bottom;

        // Date and time format
        var parseDate = d3.time.format('%Y-%m-%d').parse;


        // Create SVG
        // ------------------------------

        // Container
        var container = d3Container.append('svg');

        // SVG element
        var svg = container
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")


        // Construct chart layout
        // ------------------------------

        // Area
        var area = d3.svg.area()
            .x(function (d) { return x(d.date); })
            .y0(height)
            .y1(function (d) { return y(d.value); })
            .interpolate('monotone')


        // Construct scales
        // ------------------------------

        // Horizontal
        var x = d3.time.scale().range([0, width]);

        // Vertical
        var y = d3.scale.linear().range([height, 0]);


        // Load data
        // ------------------------------

        d3.json("assets/demo_data/dashboard/monthly_sales.json", function (error, data) {

            // Show what's wrong if error
            if (error) return console.error(error);

            // Pull out values
            data.forEach(function (d) {
                d.date = parseDate(d.date);
                d.value = +d.value;
            });

            // Get the maximum value in the given array
            var maxY = d3.max(data, function (d) { return d.value; });

            // Reset start data for animation
            var startData = data.map(function (datum) {
                return {
                    date: datum.date,
                    value: 0
                };
            });


            // Set input domains
            // ------------------------------

            // Horizontal
            x.domain(d3.extent(data, function (d, i) { return d.date; }));

            // Vertical
            y.domain([0, d3.max(data, function (d) { return d.value; })]);



            //
            // Append chart elements
            //

            // Add area path
            svg.append("path")
                .datum(data)
                .attr("class", "d3-area")
                .style('fill', color)
                .attr("d", area)
                .transition() // begin animation
                .duration(1000)
                .attrTween('d', function () {
                    var interpolator = d3.interpolateArray(startData, data);
                    return function (t) {
                        return area(interpolator(t));
                    }
                });


            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', messagesAreaResize);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', messagesAreaResize);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function messagesAreaResize() {

                // Layout variables
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                // Layout
                // -------------------------

                // Main svg width
                container.attr("width", width + margin.left + margin.right);

                // Width of appended group
                svg.attr("width", width + margin.left + margin.right);

                // Horizontal range
                x.range([0, width]);


                // Chart elements
                // -------------------------

                // Area path
                svg.selectAll('.d3-area').datum(data).attr("d", area);
            }
        });
    }




    // Sparklines
    // ------------------------------

    // Initialize chart
    // sparkline("#new-visitors", "line", 30, 35, "basis", 750, 2000, "#26A69A");
    // sparkline("#new-sessions", "line", 30, 35, "basis", 750, 2000, "#FF7043");
    // sparkline("#total-online", "line", 30, 35, "basis", 750, 2000, "#5C6BC0");
    // sparkline("#server-load", "area", 30, 50, "basis", 750, 2000, "rgba(255,255,255,0.5)");

    // Chart setup
    function sparkline(element, chartType, qty, height, interpolation, duration, interval, color) {


        // Basic setup
        // ------------------------------

        // Define main variables
        var d3Container = d3.select(element),
            margin = { top: 0, right: 0, bottom: 0, left: 0 },
            width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
            height = height - margin.top - margin.bottom;


        // Generate random data (for demo only)
        var data = [];
        for (var i = 0; i < qty; i++) {
            data.push(Math.floor(Math.random() * qty) + 5)
        }



        // Construct scales
        // ------------------------------

        // Horizontal
        var x = d3.scale.linear().range([0, width]);

        // Vertical
        var y = d3.scale.linear().range([height - 5, 5]);



        // Set input domains
        // ------------------------------

        // Horizontal
        x.domain([1, qty - 3])

        // Vertical
        y.domain([0, qty])



        // Construct chart layout
        // ------------------------------

        // Line
        var line = d3.svg.line()
            .interpolate(interpolation)
            .x(function (d, i) { return x(i); })
            .y(function (d, i) { return y(d); });

        // Area
        var area = d3.svg.area()
            .interpolate(interpolation)
            .x(function (d, i) {
                return x(i);
            })
            .y0(height)
            .y1(function (d) {
                return y(d);
            });



        // Create SVG
        // ------------------------------

        // Container
        var container = d3Container.append('svg');

        // SVG element
        var svg = container
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



        // Add mask for animation
        // ------------------------------

        // Add clip path
        var clip = svg.append("defs")
            .append("clipPath")
            .attr('id', function (d, i) { return "load-clip-" + element.substring(1) })

        // Add clip shape
        var clips = clip.append("rect")
            .attr('class', 'load-clip')
            .attr("width", 0)
            .attr("height", height);

        // Animate mask
        clips
            .transition()
            .duration(1000)
            .ease('linear')
            .attr("width", width);



        //
        // Append chart elements
        //

        // Main path
        var path = svg.append("g")
            .attr("clip-path", function (d, i) { return "url(#load-clip-" + element.substring(1) + ")" })
            .append("path")
            .datum(data)
            .attr("transform", "translate(" + x(0) + ",0)");

        // Add path based on chart type
        if (chartType == "area") {
            path.attr("d", area).attr('class', 'd3-area').style("fill", color); // area
        }
        else {
            path.attr("d", line).attr("class", "d3-line d3-line-medium").style('stroke', color); // line
        }

        // Animate path
        path
            .style('opacity', 0)
            .transition()
            .duration(750)
            .style('opacity', 1);



        // Set update interval. For demo only
        // ------------------------------

        setInterval(function () {

            // push a new data point onto the back
            data.push(Math.floor(Math.random() * qty) + 5);

            // pop the old data point off the front
            data.shift();

            update();

        }, interval);



        // Update random data. For demo only
        // ------------------------------

        function update() {

            // Redraw the path and slide it to the left
            path
                .attr("transform", null)
                .transition()
                .duration(duration)
                .ease("linear")
                .attr("transform", "translate(" + x(0) + ",0)");

            // Update path type
            if (chartType == "area") {
                path.attr("d", area).attr('class', 'd3-area').style("fill", color)
            }
            else {
                path.attr("d", line).attr("class", "d3-line d3-line-medium").style('stroke', color);
            }
        }



        // Resize chart
        // ------------------------------

        // Call function on window resize
        $(window).on('resize', resizeSparklines);

        // Call function on sidebar width change
        $(document).on('click', '.sidebar-control', resizeSparklines);

        // Resize function
        // 
        // Since D3 doesn't support SVG resize by default,
        // we need to manually specify parts of the graph that need to 
        // be updated on window resize
        function resizeSparklines() {

            // Layout variables
            width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


            // Layout
            // -------------------------

            // Main svg width
            container.attr("width", width + margin.left + margin.right);

            // Width of appended group
            svg.attr("width", width + margin.left + margin.right);

            // Horizontal range
            x.range([0, width]);


            // Chart elements
            // -------------------------

            // Clip mask
            clips.attr("width", width);

            // Line
            svg.select(".d3-line").attr("d", line);

            // Area
            svg.select(".d3-area").attr("d", area);
        }
    }




    // Daily revenue line chart
    // ------------------------------

    // dailyRevenue('#today-revenue', 50); // initialize chart

    // Chart setup
    function dailyRevenue(element, height) {


        // Basic setup
        // ------------------------------

        // Add data set
        var dataset = [
            {
                "date": "04/13/14",
                "alpha": "60"
            }, {
                "date": "04/14/14",
                "alpha": "35"
            }, {
                "date": "04/15/14",
                "alpha": "65"
            }, {
                "date": "04/16/14",
                "alpha": "50"
            }, {
                "date": "04/17/14",
                "alpha": "65"
            }, {
                "date": "04/18/14",
                "alpha": "20"
            }, {
                "date": "04/19/14",
                "alpha": "60"
            }
        ];

        // Main variables
        var d3Container = d3.select(element),
            margin = { top: 0, right: 0, bottom: 0, left: 0 },
            width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
            height = height - margin.top - margin.bottom,
            padding = 20;

        // Format date
        var parseDate = d3.time.format("%m/%d/%y").parse,
            formatDate = d3.time.format("%a, %B %e");



        // Add tooltip
        // ------------------------------

        var tooltip = d3.tip()
            .attr('class', 'd3-tip')
            .html(function (d) {
                return "<ul class='list-unstyled mb-5'>" +
                    "<li>" + "<div class='text-size-base mt-5 mb-5'><i class='icon-check2 position-left'></i>" + formatDate(d.date) + "</div>" + "</li>" +
                    "<li>" + "Sales: &nbsp;" + "<span class='text-semibold pull-right'>" + d.alpha + "</span>" + "</li>" +
                    "<li>" + "Revenue: &nbsp; " + "<span class='text-semibold pull-right'>" + "$" + (d.alpha * 25).toFixed(2) + "</span>" + "</li>" +
                    "</ul>";
            });



        // Create chart
        // ------------------------------

        // Add svg element
        var container = d3Container.append('svg');

        // Add SVG group
        var svg = container
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .call(tooltip);



        // Load data
        // ------------------------------

        dataset.forEach(function (d) {
            d.date = parseDate(d.date);
            d.alpha = +d.alpha;
        });



        // Construct scales
        // ------------------------------

        // Horizontal
        var x = d3.time.scale()
            .range([padding, width - padding]);

        // Vertical
        var y = d3.scale.linear()
            .range([height, 5]);



        // Set input domains
        // ------------------------------

        // Horizontal
        x.domain(d3.extent(dataset, function (d) {
            return d.date;
        }));

        // Vertical
        y.domain([0, d3.max(dataset, function (d) {
            return Math.max(d.alpha);
        })]);



        // Construct chart layout
        // ------------------------------

        // Line
        var line = d3.svg.line()
            .x(function (d) {
                return x(d.date);
            })
            .y(function (d) {
                return y(d.alpha)
            });



        //
        // Append chart elements
        //

        // Add mask for animation
        // ------------------------------

        // Add clip path
        var clip = svg.append("defs")
            .append("clipPath")
            .attr("id", "clip-line-small");

        // Add clip shape
        var clipRect = clip.append("rect")
            .attr('class', 'clip')
            .attr("width", 0)
            .attr("height", height);

        // Animate mask
        clipRect
            .transition()
            .duration(1000)
            .ease('linear')
            .attr("width", width);



        // Line
        // ------------------------------

        // Path
        var path = svg.append('path')
            .attr({
                'd': line(dataset),
                "clip-path": "url(#clip-line-small)",
                'class': 'd3-line d3-line-medium'
            })
            .style('stroke', '#fff');

        // Animate path
        svg.select('.line-tickets')
            .transition()
            .duration(1000)
            .ease('linear');



        // Add vertical guide lines
        // ------------------------------

        // Bind data
        var guide = svg.append('g')
            .selectAll('.d3-line-guides-group')
            .data(dataset);

        // Append lines
        guide
            .enter()
            .append('line')
            .attr('class', 'd3-line-guides')
            .attr('x1', function (d, i) {
                return x(d.date);
            })
            .attr('y1', function (d, i) {
                return height;
            })
            .attr('x2', function (d, i) {
                return x(d.date);
            })
            .attr('y2', function (d, i) {
                return height;
            })
            .style('stroke', 'rgba(255,255,255,0.3)')
            .style('stroke-dasharray', '4,2')
            .style('shape-rendering', 'crispEdges');

        // Animate guide lines
        guide
            .transition()
            .duration(1000)
            .delay(function (d, i) { return i * 150; })
            .attr('y2', function (d, i) {
                return y(d.alpha);
            });



        // Alpha app points
        // ------------------------------

        // Add points
        var points = svg.insert('g')
            .selectAll('.d3-line-circle')
            .data(dataset)
            .enter()
            .append('circle')
            .attr('class', 'd3-line-circle d3-line-circle-medium')
            .attr("cx", line.x())
            .attr("cy", line.y())
            .attr("r", 3)
            .style('stroke', '#fff')
            .style('fill', '#29B6F6');



        // Animate points on page load
        points
            .style('opacity', 0)
            .transition()
            .duration(250)
            .ease('linear')
            .delay(1000)
            .style('opacity', 1);


        // Add user interaction
        points
            .on("mouseover", function (d) {
                tooltip.offset([-10, 0]).show(d);

                // Animate circle radius
                d3.select(this).transition().duration(250).attr('r', 4);
            })

            // Hide tooltip
            .on("mouseout", function (d) {
                tooltip.hide(d);

                // Animate circle radius
                d3.select(this).transition().duration(250).attr('r', 3);
            });

        // Change tooltip direction of first point
        d3.select(points[0][0])
            .on("mouseover", function (d) {
                tooltip.offset([0, 10]).direction('e').show(d);

                // Animate circle radius
                d3.select(this).transition().duration(250).attr('r', 4);
            })
            .on("mouseout", function (d) {
                tooltip.direction('n').hide(d);

                // Animate circle radius
                d3.select(this).transition().duration(250).attr('r', 3);
            });

        // Change tooltip direction of last point
        d3.select(points[0][points.size() - 1])
            .on("mouseover", function (d) {
                tooltip.offset([0, -10]).direction('w').show(d);

                // Animate circle radius
                d3.select(this).transition().duration(250).attr('r', 4);
            })
            .on("mouseout", function (d) {
                tooltip.direction('n').hide(d);

                // Animate circle radius
                d3.select(this).transition().duration(250).attr('r', 3);
            })



        // Resize chart
        // ------------------------------

        // Call function on window resize
        $(window).on('resize', revenueResize);

        // Call function on sidebar width change
        $(document).on('click', '.sidebar-control', revenueResize);

        // Resize function
        // 
        // Since D3 doesn't support SVG resize by default,
        // we need to manually specify parts of the graph that need to 
        // be updated on window resize
        function revenueResize() {

            // Layout variables
            width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


            // Layout
            // -------------------------

            // Main svg width
            container.attr("width", width + margin.left + margin.right);

            // Width of appended group
            svg.attr("width", width + margin.left + margin.right);

            // Horizontal range
            x.range([padding, width - padding]);


            // Chart elements
            // -------------------------

            // Mask
            clipRect.attr("width", width);

            // Line path
            svg.selectAll('.d3-line').attr("d", line(dataset));

            // Circles
            svg.selectAll('.d3-line-circle').attr("cx", line.x());

            // Guide lines
            svg.selectAll('.d3-line-guides')
                .attr('x1', function (d, i) {
                    return x(d.date);
                })
                .attr('x2', function (d, i) {
                    return x(d.date);
                });
        }
    }




    // Marketing campaigns progress pie chart
    // ------------------------------

    // Initialize chart
    progressMeter("#today-progress", 20, 20, '#7986CB');
    progressMeter("#yesterday-progress", 20, 20, '#7986CB');

    // Chart setup
    function progressMeter(element, width, height, color) {


        // Basic setup
        // ------------------------------

        // Main variables
        var d3Container = d3.select(element),
            border = 2,
            radius = Math.min(width / 2, height / 2) - border,
            twoPi = 2 * Math.PI,
            progress = $(element).data('progress'),
            total = 100;



        // Construct chart layout
        // ------------------------------

        // Arc
        var arc = d3.svg.arc()
            .startAngle(0)
            .innerRadius(0)
            .outerRadius(radius)
            .endAngle(function (d) {
                return (d.value / d.size) * 2 * Math.PI;
            })



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



        //
        // Append chart elements
        //

        // Progress group
        var meter = svg.append("g")
            .attr("class", "progress-meter");

        // Background
        meter.append("path")
            .attr("d", arc.endAngle(twoPi))
            .style('fill', '#fff')
            .style('stroke', color)
            .style('stroke-width', 1.5);

        // Foreground
        var foreground = meter.append("path")
            .style('fill', color);

        // Animate foreground path
        foreground
            .transition()
            .ease("cubic-out")
            .duration(2500)
            .attrTween("d", arcTween);


        // Tween arcs
        function arcTween() {
            var i = d3.interpolate(0, progress);
            return function (t) {
                var currentProgress = progress / (100 / t);
                var endAngle = arc.endAngle(twoPi * (currentProgress));
                return arc(i(endAngle));
            };
        }
    }


    // Bar charts with random data
    // ------------------------------

    // Initialize charts
    generateBarChart("#hours-available-bars", 24, 40, true, "elastic", 1200, 50, "#EC407A", "hours");
    generateBarChart("#goal-bars", 24, 40, true, "elastic", 1200, 50, "#5C6BC0", "goal");
    // generateBarChart("#members-online", 24, 50, true, "elastic", 1200, 50, "rgba(255,255,255,0.5)", "members");

    // Chart setup
    function generateBarChart(element, barQty, height, animate, easing, duration, delay, color, tooltip) {


        // Basic setup
        // ------------------------------

        // Add data set
        var bardata = [];
        for (var i = 0; i < barQty; i++) {
            bardata.push(Math.round(Math.random() * 10) + 10)
        }

        // Main variables
        var d3Container = d3.select(element),
            width = d3Container.node().getBoundingClientRect().width;



        // Construct scales
        // ------------------------------

        // Horizontal
        var x = d3.scale.ordinal()
            .rangeBands([0, width], 0.3)

        // Vertical
        var y = d3.scale.linear()
            .range([0, height]);



        // Set input domains
        // ------------------------------

        // Horizontal
        x.domain(d3.range(0, bardata.length))

        // Vertical
        y.domain([0, d3.max(bardata)])



        // Create chart
        // ------------------------------

        // Add svg element
        var container = d3Container.append('svg');

        // Add SVG group
        var svg = container
            .attr('width', width)
            .attr('height', height)
            .append('g');



        //
        // Append chart elements
        //

        // Bars
        var bars = svg.selectAll('rect')
            .data(bardata)
            .enter()
            .append('rect')
            .attr('class', 'd3-random-bars')
            .attr('width', x.rangeBand())
            .attr('x', function (d, i) {
                return x(i);
            })
            .style('fill', color);



        // Tooltip
        // ------------------------------

        var tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0]);

        // Show and hide
        if (tooltip == "hours" || tooltip == "goal" || tooltip == "members") {
            bars.call(tip)
                .on('mouseover', tip.show)
                .on('mouseout', tip.hide);
        }

        // Daily meetings tooltip content
        if (tooltip == "hours") {
            tip.html(function (d, i) {
                return "<div class='text-center'>" +
                    "<h6 class='no-margin'>" + d + "</h6>" +
                    "<span class='text-size-small'>meetings</span>" +
                    "<div class='text-size-small'>" + i + ":00" + "</div>" +
                    "</div>"
            });
        }

        // Statements tooltip content
        if (tooltip == "goal") {
            tip.html(function (d, i) {
                return "<div class='text-center'>" +
                    "<h6 class='no-margin'>" + d + "</h6>" +
                    "<span class='text-size-small'>statements</span>" +
                    "<div class='text-size-small'>" + i + ":00" + "</div>" +
                    "</div>"
            });
        }

        // Online members tooltip content
        if (tooltip == "members") {
            tip.html(function (d, i) {
                return "<div class='text-center'>" +
                    "<h6 class='no-margin'>" + d + "0" + "</h6>" +
                    "<span class='text-size-small'>members</span>" +
                    "<div class='text-size-small'>" + i + ":00" + "</div>" +
                    "</div>"
            });
        }



        // Bar loading animation
        // ------------------------------

        // Choose between animated or static
        if (animate) {
            withAnimation();
        } else {
            withoutAnimation();
        }

        // Animate on load
        function withAnimation() {
            bars
                .attr('height', 0)
                .attr('y', height)
                .transition()
                .attr('height', function (d) {
                    return y(d);
                })
                .attr('y', function (d) {
                    return height - y(d);
                })
                .delay(function (d, i) {
                    return i * delay;
                })
                .duration(duration)
                .ease(easing);
        }

        // Load without animateion
        function withoutAnimation() {
            bars
                .attr('height', function (d) {
                    return y(d);
                })
                .attr('y', function (d) {
                    return height - y(d);
                })
        }



        // Resize chart
        // ------------------------------

        // Call function on window resize
        $(window).on('resize', barsResize);

        // Call function on sidebar width change
        $(document).on('click', '.sidebar-control', barsResize);

        // Resize function
        // 
        // Since D3 doesn't support SVG resize by default,
        // we need to manually specify parts of the graph that need to 
        // be updated on window resize
        function barsResize() {

            // Layout variables
            width = d3Container.node().getBoundingClientRect().width;


            // Layout
            // -------------------------

            // Main svg width
            container.attr("width", width);

            // Width of appended group
            svg.attr("width", width);

            // Horizontal range
            x.rangeBands([0, width], 0.3);


            // Chart elements
            // -------------------------

            // Bars
            svg.selectAll('.d3-random-bars')
                .attr('width', x.rangeBand())
                .attr('x', function (d, i) {
                    return x(i);
                });
        }
    }




    // Animated progress chart
    // ------------------------------

    // Initialize charts
    progressCounter('#delivery_delayed_widget', 38, 2, "#F06292", 0.93, "icon-watch text-pink-400", 'Performance and services', '18,000 Votes')
    progressCounter('#ontime_widget', 38, 2, "#5C6BC0", 0.86, "icon-trophy3 text-indigo-400", 'Visitor satisfaction rate', '30,000 Votes')

    // Chart setup
    function progressCounter(element, radius, border, color, end, iconClass, textTitle, textAverage) {


        // Basic setup
        // ------------------------------

        // Main variables
        var d3Container = d3.select(element),
            startPercent = 0,
            iconSize = 32,
            endPercent = end,
            twoPi = Math.PI * 2,
            formatPercent = d3.format('.0%'),
            boxSize = radius * 2;

        // Values count
        var count = Math.abs((endPercent - startPercent) / 0.01);

        // Values step
        var step = endPercent < startPercent ? -0.01 : 0.01;



        // Create chart
        // ------------------------------

        // Add SVG element
        var container = d3Container.append('svg');

        // Add SVG group
        var svg = container
            .attr('width', boxSize)
            .attr('height', boxSize)
            .append('g')
            .attr('transform', 'translate(' + (boxSize / 2) + ',' + (boxSize / 2) + ')');



        // Construct chart layout
        // ------------------------------

        // Arc
        var arc = d3.svg.arc()
            .startAngle(0)
            .innerRadius(radius)
            .outerRadius(radius - border);



        //
        // Append chart elements
        //

        // Paths
        // ------------------------------

        // Background path
        svg.append('path')
            .attr('class', 'd3-progress-background')
            .attr('d', arc.endAngle(twoPi))
            .style('fill', '#eee');

        // Foreground path
        var foreground = svg.append('path')
            .attr('class', 'd3-progress-foreground')
            .attr('filter', 'url(#blur)')
            .style('fill', color)
            .style('stroke', color);

        // Front path
        var front = svg.append('path')
            .attr('class', 'd3-progress-front')
            .style('fill', color)
            .style('fill-opacity', 1);



        // Text
        // ------------------------------

        // Percentage text value
        var numberText = d3.select(element)
            .append('h2')
            .attr('class', 'mt-15 mb-5')

        // Icon
        d3.select(element)
            .append("i")
            .attr("class", iconClass + " counter-icon")
            .attr('style', 'top: ' + ((boxSize - iconSize) / 2) + 'px');

        // Title
        d3.select(element)
            .append('div')
            .text(textTitle);

        // Subtitle
        d3.select(element)
            .append('div')
            .attr('class', 'text-size-small text-muted')
            .text(textAverage);



        // Animation
        // ------------------------------

        // Animate path
        function updateProgress(progress) {
            foreground.attr('d', arc.endAngle(twoPi * progress));
            front.attr('d', arc.endAngle(twoPi * progress));
            numberText.text(formatPercent(progress));
        }

        // Animate text
        var progress = startPercent;
        (function loops() {
            updateProgress(progress);
            if (count > 0) {
                count--;
                progress += step;
                setTimeout(loops, 10);
            }
        })();
    }




    // Bullet charts
    // ------------------------------

    // Initialize chart
    // bulletChart("#bullets", 80);

    // Chart setup
    function bulletChart(element, height) {


        // Bullet chart core
        // ------------------------------

        bulletCore();
        function bulletCore() {

            // Construct
            d3.bullet = function () {

                // Default layout variables
                var orient = "left",
                    reverse = false,
                    duration = 750,
                    ranges = bulletRanges,
                    markers = bulletMarkers,
                    measures = bulletMeasures,
                    height = 30,
                    tickFormat = null;

                // For each small multiple…
                function bullet(g) {
                    g.each(function (d, i) {

                        // Define variables
                        var rangez = ranges.call(this, d, i).slice().sort(d3.descending),
                            markerz = markers.call(this, d, i).slice().sort(d3.descending),
                            measurez = measures.call(this, d, i).slice().sort(d3.descending),
                            g = d3.select(this);

                        // Compute the new x-scale.
                        var x1 = d3.scale.linear()
                            .domain([0, Math.max(rangez[0], markerz[0], measurez[0])])
                            .range(reverse ? [width, 0] : [0, width]);

                        // Retrieve the old x-scale, if this is an update.
                        var x0 = this.__chart__ || d3.scale.linear()
                            .domain([0, Infinity])
                            .range(x1.range());

                        // Stash the new scale.
                        this.__chart__ = x1;

                        // Derive width-scales from the x-scales.
                        var w0 = bulletWidth(x0),
                            w1 = bulletWidth(x1);



                        // Setup range
                        // ------------------------------

                        // Update the range rects
                        var range = g.selectAll(".bullet-range")
                            .data(rangez);

                        // Append range rect
                        range.enter()
                            .append("rect")
                            .attr("class", function (d, i) { return "bullet-range bullet-range-" + (i + 1); })
                            .attr("width", w0)
                            .attr("height", height)
                            .attr('rx', 2)
                            .attr("x", reverse ? x0 : 0)

                            // Add loading animation
                            .transition()
                            .duration(duration)
                            .attr("width", w1)
                            .attr("x", reverse ? x1 : 0);

                        // Add update animation
                        range.transition()
                            .duration(duration)
                            .attr("x", reverse ? x1 : 0)
                            .attr("width", w1)
                            .attr("height", height);



                        // Setup measures
                        // ------------------------------

                        // Update the measure rects
                        var measure = g.selectAll(".bullet-measure")
                            .data(measurez);

                        // Append measure rect
                        measure.enter()
                            .append("rect")
                            .attr("class", function (d, i) { return "bullet-measure bullet-measure-" + (i + 1); })
                            .attr("width", w0)
                            .attr("height", height / 5)
                            .attr("x", reverse ? x0 : 0)
                            .attr("y", height / 2.5)
                            .style("shape-rendering", "crispEdges");

                        // Add loading animation
                        measure.transition()
                            .duration(duration)
                            .attr("width", w1)
                            .attr("x", reverse ? x1 : 0);

                        // Add update animation
                        measure.transition()
                            .duration(duration)
                            .attr("width", w1)
                            .attr("height", height / 5)
                            .attr("x", reverse ? x1 : 0)
                            .attr("y", height / 2.5);



                        // Setup markers
                        // ------------------------------

                        // Update the marker lines
                        var marker = g.selectAll(".bullet-marker")
                            .data(markerz);

                        // Append marker line
                        marker.enter()
                            .append("line")
                            .attr("class", function (d, i) { return "bullet-marker bullet-marker-" + (i + 1); })
                            .attr("x1", x0)
                            .attr("x2", x0)
                            .attr("y1", height / 6)
                            .attr("y2", height * 5 / 6);

                        // Add loading animation
                        marker.transition()
                            .duration(duration)
                            .attr("x1", x1)
                            .attr("x2", x1);

                        // Add update animation
                        marker.transition()
                            .duration(duration)
                            .attr("x1", x1)
                            .attr("x2", x1)
                            .attr("y1", height / 6)
                            .attr("y2", height * 5 / 6);



                        // Setup axes
                        // ------------------------------

                        // Compute the tick format.
                        var format = tickFormat || x1.tickFormat(8);

                        // Update the tick groups.
                        var tick = g.selectAll(".bullet-tick")
                            .data(x1.ticks(8), function (d) {
                                return this.textContent || format(d);
                            });

                        // Initialize the ticks with the old scale, x0.
                        var tickEnter = tick.enter()
                            .append("g")
                            .attr("class", "bullet-tick")
                            .attr("transform", bulletTranslate(x0))
                            .style("opacity", 1e-6);

                        // Append line
                        tickEnter.append("line")
                            .attr("y1", height)
                            .attr("y2", (height * 7 / 6) + 3);

                        // Append text
                        tickEnter.append("text")
                            .attr("text-anchor", "middle")
                            .attr("dy", "1em")
                            .attr("y", (height * 7 / 6) + 4)
                            .text(format);

                        // Transition the entering ticks to the new scale, x1.
                        tickEnter.transition()
                            .duration(duration)
                            .attr("transform", bulletTranslate(x1))
                            .style("opacity", 1);

                        // Transition the updating ticks to the new scale, x1.
                        var tickUpdate = tick.transition()
                            .duration(duration)
                            .attr("transform", bulletTranslate(x1))
                            .style("opacity", 1);

                        // Update tick line
                        tickUpdate.select("line")
                            .attr("y1", height + 3)
                            .attr("y2", (height * 7 / 6) + 3);

                        // Update tick text
                        tickUpdate.select("text")
                            .attr("y", (height * 7 / 6) + 4);

                        // Transition the exiting ticks to the new scale, x1.
                        tick.exit()
                            .transition()
                            .duration(duration)
                            .attr("transform", bulletTranslate(x1))
                            .style("opacity", 1e-6)
                            .remove();



                        // Resize chart
                        // ------------------------------

                        // Call function on window resize
                        $(window).on('resize', resizeBulletsCore);

                        // Call function on sidebar width change
                        $(document).on('click', '.sidebar-control', resizeBulletsCore);

                        // Resize function
                        // 
                        // Since D3 doesn't support SVG resize by default,
                        // we need to manually specify parts of the graph that need to 
                        // be updated on window resize
                        function resizeBulletsCore() {

                            // Layout variables
                            width = d3.select("#bullets").node().getBoundingClientRect().width - margin.left - margin.right;
                            w1 = bulletWidth(x1);


                            // Layout
                            // -------------------------

                            // Horizontal range
                            x1.range(reverse ? [width, 0] : [0, width]);


                            // Chart elements
                            // -------------------------

                            // Measures
                            g.selectAll(".bullet-measure").attr("width", w1).attr("x", reverse ? x1 : 0);

                            // Ranges
                            g.selectAll(".bullet-range").attr("width", w1).attr("x", reverse ? x1 : 0);

                            // Markers
                            g.selectAll(".bullet-marker").attr("x1", x1).attr("x2", x1)

                            // Ticks
                            g.selectAll(".bullet-tick").attr("transform", bulletTranslate(x1))
                        }
                    });

                    d3.timer.flush();
                }


                // Constructor functions
                // ------------------------------

                // Left, right, top, bottom
                bullet.orient = function (x) {
                    if (!arguments.length) return orient;
                    orient = x;
                    reverse = orient == "right" || orient == "bottom";
                    return bullet;
                };

                // Ranges (bad, satisfactory, good)
                bullet.ranges = function (x) {
                    if (!arguments.length) return ranges;
                    ranges = x;
                    return bullet;
                };

                // Markers (previous, goal)
                bullet.markers = function (x) {
                    if (!arguments.length) return markers;
                    markers = x;
                    return bullet;
                };

                // Measures (actual, forecast)
                bullet.measures = function (x) {
                    if (!arguments.length) return measures;
                    measures = x;
                    return bullet;
                };

                // Width
                bullet.width = function (x) {
                    if (!arguments.length) return width;
                    width = x;
                    return bullet;
                };

                // Height
                bullet.height = function (x) {
                    if (!arguments.length) return height;
                    height = x;
                    return bullet;
                };

                // Axex tick format
                bullet.tickFormat = function (x) {
                    if (!arguments.length) return tickFormat;
                    tickFormat = x;
                    return bullet;
                };

                // Transition duration
                bullet.duration = function (x) {
                    if (!arguments.length) return duration;
                    duration = x;
                    return bullet;
                };

                return bullet;
            };

            // Ranges
            function bulletRanges(d) {
                return d.ranges;
            }

            // Markers
            function bulletMarkers(d) {
                return d.markers;
            }

            // Measures
            function bulletMeasures(d) {
                return d.measures;
            }

            // Positioning
            function bulletTranslate(x) {
                return function (d) {
                    return "translate(" + x(d) + ",0)";
                };
            }

            // Width
            function bulletWidth(x) {
                var x0 = x(0);
                return function (d) {
                    return Math.abs(x(d) - x0);
                };
            }
        }



        // Basic setup
        // ------------------------------

        // Main variables
        var d3Container = d3.select(element),
            margin = { top: 20, right: 10, bottom: 35, left: 10 },
            width = width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
            height = height - margin.top - margin.bottom;



        // Construct chart layout
        // ------------------------------

        var chart = d3.bullet()
            .width(width)
            .height(height);



        // Load data
        // ------------------------------

        d3.json("assets/demo_data/dashboard/bullets.json", function (error, data) {

            // Show what's wrong if error
            if (error) return console.error(error);


            // Create SVG
            // ------------------------------

            // SVG container
            var container = d3Container.selectAll("svg")
                .data(data)
                .enter()
                .append('svg');

            // SVG group
            var svg = container
                .attr("class", function (d, i) { return "bullet-" + (i + 1); })
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                .call(chart);



            // Add title
            // ------------------------------

            // Title group
            var title = svg.append("g")
                .style("text-anchor", "start");

            // Bullet title text
            title.append("text")
                .attr("class", "bullet-title")
                .attr('y', -10)
                .text(function (d) { return d.title; });

            // Bullet subtitle text
            title.append("text")
                .attr("class", "bullet-subtitle")
                .attr('x', width)
                .attr('y', -10)
                .style("text-anchor", "end")
                .text(function (d) { return d.subtitle; })
                .style('opacity', 0)
                .transition()
                .duration(500)
                .delay(500)
                .style('opacity', 1);



            // Add random transition for demo
            // ------------------------------

            // Bind data
            var interval = function () {
                svg.datum(randomize).call(chart.duration(750));
            }

            // Set interval
            var intervalIds = [];
            intervalIds.push(
                setInterval(function () {
                    interval()
                }, 5000)
            );

            // Add Switchery toggle control
            var realtime = document.querySelector('.switcher');
            var realtimeInit = new Switchery(realtime);
            realtime.onchange = function () {
                if (realtime.checked) {
                    intervalIds.push(setInterval(function () { interval() }, 5000));
                }
                else {
                    for (var i = 0; i < intervalIds.length; i++) {
                        clearInterval(intervalIds[i]);
                    }
                }
            };



            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', bulletResize);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', bulletResize);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function bulletResize() {

                // Layout variables
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                // Layout
                // -------------------------

                // Main svg width
                container.attr("width", width + margin.left + margin.right);

                // Width of appended group
                svg.attr("width", width + margin.left + margin.right);


                // Chart elements
                // -------------------------

                // Subtitle
                svg.selectAll('.bullet-subtitle').attr("x", width);
            }
        });



        // Randomizers
        // ------------------------------

        function randomize(d) {
            if (!d.randomizer) d.randomizer = randomizer(d);
            d.ranges = d.ranges.map(d.randomizer);
            d.markers = d.markers.map(d.randomizer);
            d.measures = d.measures.map(d.randomizer);
            return d;
        }
        function randomizer(d) {
            var k = d3.max(d.ranges) * .2;
            return function (d) {
                return Math.max(0, d + k * (Math.random() - .5));
            };
        }
    }




    // Other codes
    // ------------------------------

    // Grab first letter and insert to the icon
    $(".table tr").each(function (i) {

        // Title
        var $title = $(this).find('.letter-icon-title'),
            letter = $title.eq(0).text().charAt(0).toUpperCase();

        // Icon
        var $icon = $(this).find('.letter-icon');
        $icon.eq(0).text(letter);
    });

    // Progress arc - single color
    // ------------------------------

    // Initialize chart
    progressArcSingle("#arc_single", 78);

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



    // Rounded progress - single arc
    // ------------------------------

    // Initialize chart
    roundedProgressSingle("#rounded_progress_single", 150, 700, '#EC407A');

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
            .text("Hours")
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

    animatedPieWithLegend("#pie_basic_legend", 120);

    // Chart setup
    function animatedPieWithLegend(element, size) {

        // Add data set
        var data = [
            {
                "status": "New",
                "value": 578,
                "color": "#29B6F6"
            }, {
                "status": "Pending",
                "value": 983,
                "color": "#66BB6A"
            }, {
                "status": "Resolved",
                "value": 459,
                "color": "#EF5350"
            }
        ];

        // Main variables
        var d3Container = d3.select(element),
            distance = 2, // reserve 2px space for mouseover arc moving
            radius = (size / 2) - distance,
            sum = d3.sum(data, function (d) { return d.value; });


        // Create chart
        // ------------------------------

        // Add svg element
        var container = d3Container.append("svg");

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
            .outerRadius(radius);


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


        // Add interactions
        arcPath
            .on('mouseover', function (d, i) {

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

                // Animate legend
                $(element + ' [data-slice]').css({
                    'opacity': 0.3,
                    'transition': 'all ease-in-out 0.15s'
                });
                $(element + ' [data-slice=' + i + ']').css({ 'opacity': 1 });
            })
            .on('mouseout', function (d, i) {

                // Mouseout transition
                d3.select(this)
                    .transition()
                    .duration(500)
                    .ease('bounce')
                    .attr('transform', 'translate(0,0)');

                // Revert legend animation
                $(element + ' [data-slice]').css('opacity', 1);
            });

        // Animate chart on load
        arcPath
            .transition()
            .delay(function (d, i) { return i * 500; })
            .duration(500)
            .attrTween("d", function (d) {
                var interpolate = d3.interpolate(d.startAngle, d.endAngle);
                return function (t) {
                    d.endAngle = interpolate(t);
                    return arc(d);
                };
            });


        //
        // Append counter
        //

        // Append element
        d3Container
            .append('h2')
            .attr('class', 'mt-15 mb-5 text-semibold');

        // Animate counter
        d3Container.select('h2')
            .transition()
            .duration(1500)
            .tween("text", function (d) {
                var i = d3.interpolate(this.textContent, sum);

                return function (t) {
                    this.textContent = d3.format(",d")(Math.round(i(t)));
                };
            });


        //
        // Append legend
        //

        // Add element
        var legend = d3.select(element)
            .append('ul')
            .attr('class', 'chart-widget-legend')
            .selectAll('li').data(pie(data))
            .enter().append('li')
            .attr('data-slice', function (d, i) {
                return i;
            })
            .attr('style', function (d, i) {
                return 'border-bottom: 2px solid ' + d.data.color;
            })
            .text(function (d, i) {
                return d.data.status + ': ';
            });

        // Add value
        legend.append('span')
            .text(function (d, i) {
                return d.data.value;
            });
    }

});