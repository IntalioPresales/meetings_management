/* ------------------------------------------------------------------------------
*
*  # Fullcalendar advanced options
*
*  Specific JS code additions for extra_fullcalendar_advanced.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function () {


    // Add events
    // ------------------------------

    // Default events
    var events = [

    ];


    // Event colors
    var eventColors = [
        // {
        //     title: 'All Day Event',
        //     start: '2014-11-01',
        //     color: '#EF5350'
        // },
        // {
        //     title: 'Long Event',
        //     start: '2014-11-07',
        //     end: '2014-11-10',
        //     color: '#26A69A'
        // },
        // {
        //     id: 999,
        //     title: 'Repeating Event',
        //     start: '2014-11-09T16:00:00',
        //     color: '#26A69A'
        // },
        // {
        //     id: 999,
        //     title: 'Repeating Event',
        //     start: '2014-11-16T16:00:00',
        //     color: '#5C6BC0'
        // },
        // {
        //     title: 'Conference',
        //     start: '2014-11-11',
        //     end: '2014-11-13',
        //     color: '#546E7A'
        // },
        // {
        //     title: 'Meeting',
        //     start: '2014-11-12T10:30:00',
        //     end: '2014-11-12T12:30:00',
        //     color: '#546E7A'
        // },
        // {
        //     title: 'Lunch',
        //     start: '2014-11-12T12:00:00',
        //     color: '#546E7A'
        // },
        // {
        //     title: 'Meeting',
        //     start: '2014-11-12T14:30:00',
        //     color: '#546E7A'
        // },
        // {
        //     title: 'Happy Hour',
        //     start: '2014-11-12T17:30:00',
        //     color: '#546E7A'
        // },
        // {
        //     title: 'Dinner',
        //     start: '2014-11-12T20:00:00',
        //     color: '#546E7A'
        // },
        // {
        //     title: 'Birthday Party',
        //     start: '2014-11-13T07:00:00',
        //     color: '#546E7A'
        // },
        // {
        //     title: 'Click for Google',
        //     url: 'http://google.com/',
        //     start: '2014-11-28',
        //     color: '#FF7043'
        // }
    ];

    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const room = urlParams.get('room');

    let meetings = getMeetings();

    console.log(meetings)

    meetings.forEach(function (meeting) {
        
        if (!!meeting && !!meeting.room && meeting.room == 'room' + room)
            events.push(meeting)
    })

    // External events
    // ------------------------------

    // Add switcher for events removal
    // var remove = document.querySelector('.switch');
    // var removeInit = new Switchery(remove);


    // Initialize the calendar
    $('.fullcalendar-external').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        // defaultDate: '2014-11-12',
        events: events,
        eventClick: function (info) {
            console.log(info);
            window.location.href = `meeting_details.html?meeting_id=${info.id}`
            // change the border color just for fun
            // info.el.style.borderColor = 'red';
        },
        locale: 'en',
        droppable: true, // this allows things to be dropped onto the calendar
        drop: function () {
            // if ($('#drop-remove').is(':checked')) { // is the "remove after drop" checkbox checked?
            $(this).remove(); // if so, remove the element from the "Draggable Events" list
            // }
        }
    });

    // Initialize the external events
    $('#external-events .fc-event').each(function () {

        // Different colors for events
        $(this).css({ 'backgroundColor': $(this).data('color'), 'borderColor': $(this).data('color') });

        // Store data so the calendar knows to render an event upon drop
        $(this).data('event', {
            title: $.trim($(this).html()), // use the element's text as the event title
            color: $(this).data('color'),
            stick: true // maintain when user navigates (see docs on the renderEvent method)
        });

        // Make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 999,
            revert: true, // will cause the event to go back to its
            revertDuration: 0 // original position after the drag
        });
    });



    // RTL direction
    // ------------------------------



});
