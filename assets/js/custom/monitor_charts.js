

$(function () {


    // Charts
    // ------------------------------

    // Set paths
    require.config({
        paths: {
            echarts: 'assets/js/plugins/visualization/echarts'
        }
    });


    // Configuration
    require(
        [
            'echarts',
            'echarts/theme/limitless',
            'echarts/chart/line',   // load-on-demand, don't forget the Magic switch type.
            'echarts/chart/bar',
            'echarts/chart/pie',
            'echarts/chart/funnel',
            'echarts/chart/gauge',


            'echarts/chart/scatter',

        ],


        // Charts setup
        function (ec, limitless) {

            // @ VISITORS
            var funnel_left_VISITORS = ec.init(document.getElementById('funnel_left'), limitless);
            var line_bar_VISITORS = ec.init(document.getElementById('line_bar'), limitless);

            // GATES
            var connect_pie_GATELOAD = ec.init(document.getElementById('connect_pie'), limitless);
            var connect_column_GATELOAD = ec.init(document.getElementById('connect_column'), limitless);
            var multiple_donuts_GATE = ec.init(document.getElementById('multiple_donuts'), limitless);

            // PARKING
            var gauge_basic_PARKING = ec.init(document.getElementById('gauge_basic'), limitless);
            var gauge_basic_PARKING2 = ec.init(document.getElementById('gauge_basic2'), limitless);
            var gauge_basic_PARKING3 = ec.init(document.getElementById('gauge_basic3'), limitless);





            // Text label options
            var labelRight = { normal: { color: '#FF7043', label: { position: 'right' } } };


            // ---------------------------------------------
            // VISITORS
            // ---------------------------------------------
            funnel_left_options_VISITORS = {

                // Add title
                title: {
                    text: 'Traffic Source',
                    subtext: 'Live Stream',
                    x: 'center'
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c}%"
                },

                // Display toolbox
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    y: 75,
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
                                pie: {
                                    radius: '75%',
                                    center: ['50%', '55%']
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

                // Add legend
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    y: 75,
                    data: [
                        'Pray',
                        'Photography',
                        'Shopping',
                        'Office',
                        'Other',
                    ]
                },

                // Enable drag recalculate
                calculable: true,

                // Add series
                series: [
                    {
                        name: 'Statistics',
                        type: 'funnel',
                        funnelAlign: 'left',
                        x: '25%',
                        x2: '25%',
                        y: '17.5%',
                        width: '50%',
                        height: '80%',
                        data: [
                            { value: 60, name: 'Shopping' },
                            { value: 30, name: 'Office' },
                            { value: 10, name: 'Other' },
                            { value: 80, name: 'Photography' },
                            { value: 100, name: 'Pray' }
                        ]
                    }
                ]
            };

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
                    data: ['Check-in', 'Check-out', 'Temprature']
                },

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']
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
                        name: 'Temp',
                        axisLabel: {
                            formatter: '{value} °C'
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
                        name: 'Check-out',
                        type: 'bar',
                        data: [26, 509, 900, 264, 287, 707, 1756, 1822, 4807, 1808, 600, 230]
                    },
                    {
                        name: 'Temprature',
                        type: 'line',
                        yAxisIndex: 1,
                        data: [4.0, 6.2, 7.3, 7.5, 8.3, 10.2, 14.3, 18.4, 18.0, 16.5, 12.0, 6.2]
                    }
                ]
            };


            // ---------------------------------------------
            // PARKING
            // ---------------------------------------------
            gauge_basic_options_PARKING = {

                // Add title
                title: {
                    text: 'Parking Floor 1 Carrying Capacity',
                    subtext: 'real time',
                    x: 'center'
                },

                // Add tooltip
                tooltip: {
                    formatter: "{a} <br/>{b}: {c}%"
                },

                // Add series
                series: [
                    {
                        name: 'Usage',
                        type: 'gauge',
                        center: ['50%', '55%'],
                        detail: { formatter: '{value}%' },
                        data: [{ value: 50, name: 'Usage' }]
                    }
                ]
            };

            gauge_basic_options_PARKING2 = gauge_basic_options_PARKING
            gauge_basic_options_PARKING2.title.text= 'Parking Floor 2 Carrying Capacity'
            gauge_basic_options_PARKING3 = gauge_basic_options_PARKING
            gauge_basic_options_PARKING3.title.text= 'Parking Floor 3 Carrying Capacity'

            // Add random data
            clearInterval(timeTicket);
            var timeTicket = setInterval(function () {
                gauge_basic_options_PARKING.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
                gauge_basic_PARKING.setOption(gauge_basic_options_PARKING, true);

                gauge_basic_options_PARKING2.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
                gauge_basic_PARKING2.setOption(gauge_basic_options_PARKING2, true);

                gauge_basic_options_PARKING3.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
                gauge_basic_PARKING3.setOption(gauge_basic_options_PARKING3, true);
            }, 2000);

            // ---------------------------------------------
            // GATE
            // ---------------------------------------------

            // GATE LOAD
            connect_pie_options_GATELOAD = {

                // Add title
                title: {
                    text: 'Gates Load Distribution',
                    subtext: 'Live Stream',
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
                    data: ['Gate A-1', 'Gate A-2', 'Gate B-1', 'Gate B-2', 'Gate C-1']
                },

                // Enable drag recalculate
                calculable: true,

                // Add series
                series: [{
                    name: 'Browser',
                    type: 'pie',
                    radius: '75%',
                    center: ['50%', '57.5%'],
                    data: [
                        { value: 335, name: 'Gate A-1' },
                        { value: 310, name: 'Gate A-2' },
                        { value: 234, name: 'Gate B-1' },
                        { value: 135, name: 'Gate B-2' },
                        { value: 1548, name: 'Gate C-1' }
                    ]
                }]
            };

            // GATE LOAD
            connect_column_options_GATELOAD = {

                // Setup grid
                grid: {
                    x: 40,
                    x2: 47,
                    y: 35,
                    y2: 25
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                // Add legend
                legend: {
                    data: ['Gate A-1', 'Gate A-2', 'Gate B-1', 'Gate B-2', 'Gate C-1']
                },

                // Add toolbox
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    x: 'right',
                    y: 35,
                    feature: {
                        mark: {
                            show: true,
                            title: {
                                mark: 'Markline switch',
                                markUndo: 'Undo markline',
                                markClear: 'Clear markline'
                            }
                        },
                        magicType: {
                            show: true,
                            title: {
                                line: 'Switch to line chart',
                                bar: 'Switch to bar chart',
                                stack: 'Switch to stack',
                                tiled: 'Switch to tiled'
                            },
                            type: ['line', 'bar', 'stack', 'tiled']
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

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                    splitArea: { show: true }
                }],

                // Add series
                series: [
                    {
                        name: 'Gate A-1',
                        type: 'bar',
                        stack: 'Total',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: 'Gate A-2',
                        type: 'bar',
                        stack: 'Total',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'Gate B-1',
                        type: 'bar',
                        stack: 'Total',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'Gate B-2',
                        type: 'bar',
                        stack: 'Total',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: 'Gate C-1',
                        type: 'bar',
                        stack: 'Total',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
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
            multiple_donuts_options_GATE = {

                // Add title
                title: {
                    text: 'Carrying capacity per gate',
                    subtext: 'Live Stream',
                    x: 'center'
                },

                // Add legend
                legend: {
                    x: 'center',
                    y: '90%',
                    data: ['Gate A-1', 'Gate A-2', 'Gate B-1', 'Gate B-2', 'Gate C-1']
                },

                // Add series
                series: [
                    {
                        type: 'pie',
                        center: ['20%', '30.5%'],
                        radius: radius,
                        itemStyle: labelFromatter,
                        data: [
                            { name: 'other', value: 46, itemStyle: labelBottom },
                            { name: 'Gate A-1', value: 54, itemStyle: labelTop }
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['50%', '30.5%'],
                        radius: radius,
                        itemStyle: labelFromatter,
                        data: [
                            { name: 'other', value: 56, itemStyle: labelBottom },
                            { name: 'Gate A-2', value: 44, itemStyle: labelTop }
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['20%', '70.5%'],
                        radius: radius,
                        itemStyle: labelFromatter,
                        data: [
                            { name: 'other', value: 65, itemStyle: labelBottom },
                            { name: 'Gate B-1', value: 35, itemStyle: labelTop }
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['50%', '70.5%'],
                        radius: radius,
                        itemStyle: labelFromatter,
                        data: [
                            { name: 'other', value: 65, itemStyle: labelBottom },
                            { name: 'Gate B-2', value: 35, itemStyle: labelTop }
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['80%', '30.5%'],
                        radius: radius,
                        itemStyle: labelFromatter,
                        data: [
                            { name: 'other', value: 65, itemStyle: labelBottom },
                            { name: 'Gate C-1', value: 35, itemStyle: labelTop }
                        ]
                    },
                    {
                        type: 'pie',
                        center: ['80%', '70.5%'],
                        radius: radius,
                        itemStyle: labelFromatter,
                        data: [
                            { name: 'other', value: 65, itemStyle: labelBottom },
                            { name: 'Gate C-2', value: 35, itemStyle: labelTop }
                        ]
                    }
                ]
            };


            // @@ VISITORS
            funnel_left_VISITORS.setOption(funnel_left_options_VISITORS);
            line_bar_VISITORS.setOption(line_bar_options_VISITORS);

            // @ PARKING
            gauge_basic_PARKING.setOption(gauge_basic_options_PARKING);


            // @@ GATES
            connect_pie_GATELOAD.setOption(connect_pie_options_GATELOAD);
            connect_column_GATELOAD.setOption(connect_column_options_GATELOAD);
            multiple_donuts_GATE.setOption(multiple_donuts_options_GATE);


            // @ VISITORS 

            //
            // Resize chart
            //

            window.onresize = function () {
                setTimeout(function () {
                    funnel_left_VISITORS.resize();
                    line_bar_VISITORS.resize();

                    gauge_basic_PARKING.resize();
                    gauge_basic_PARKING2.resize();
                    gauge_basic_PARKING3.resize();


                    connect_pie_GATELOAD.resize();
                    connect_column_GATELOAD.resize();
                    multiple_donuts_GATE.resize();
                }, 200);
            }

            $('.collapse li').click(function () {

                
                //fixes on load
                setTimeout(function () {
                    funnel_left_VISITORS.resize();
                    line_bar_VISITORS.resize();

                    gauge_basic_PARKING.resize();
                    gauge_basic_PARKING2.resize();
                    gauge_basic_PARKING3.resize();

                    connect_pie_GATELOAD.resize();
                    connect_column_GATELOAD.resize();
                    multiple_donuts_GATE.resize();
                }, 300);

            })


        })
})
