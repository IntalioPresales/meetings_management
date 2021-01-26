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

    let meetings = getMeetings();

    // Add events
    // ------------------------------

    // Default events
    var events = [
        {
            title: 'All Day Event',
            start: '2020-11-01'
        },
        {
            title: 'Long Event',
            start: '2020-11-07',
            end: '2020-11-10'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2020-12-09T16:00:00'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2020-12-16T16:00:00'
        },
        {
            title: 'Conference',
            start: '2020-12-11',
            end: '2020-12-13'
        },
        {
            title: 'Meeting',
            start: '2020-12-12T10:30:00',
            end: '2020-12-12T12:30:00'
        },
        {
            title: 'Lunch',
            start: '2020-12-12T12:00:00'
        },
        {
            title: 'Meeting',
            start: '2020-12-12T14:30:00'
        },
        {
            title: 'Happy Hour',
            start: '2020-12-12T17:30:00'
        },
        {
            title: 'Dinner',
            start: '2020-12-12T20:00:00'
        },
        {
            title: 'Birthday Party',
            start: '2020-12-13T07:00:00'
        },
        {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2020-12-28'
        }
    ];

    events = [...meetings, ...events]

    // Event colors
    var eventColors = [
        {
            title: 'All Day Event',
            start: '2020-11-01',
            color: '#EF5350',
            type: 'outlook',
        },
        {
            title: 'Long Event',
            start: '2020-11-07',
            end: '2020-11-10',
            type: 'google',
            color: '#26A69A'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2020-11-09T16:00:00',
            type: 'google',
            color: '#26A69A'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2020-11-16T16:00:00',
            type: 'outlook',
            color: '#5C6BC0'
        },
        {
            title: 'Conference',
            start: '2020-11-11',
            end: '2020-11-13',
            type: 'outlook',
            color: '#546E7A'
        },
        {
            title: 'Meeting',
            start: '2020-11-12T10:30:00',
            end: '2020-11-12T12:30:00',
            type: 'outlook',
            color: '#546E7A'
        },
        {
            title: 'Lunch',
            start: '2020-11-12T12:00:00',
            type: 'outlook',
            color: '#546E7A'
        },
        {
            title: 'Meeting',
            start: '2020-12-12T14:30:00',
            type: 'outlook',
            color: '#546E7A'
        },
        {
            title: 'Happy Hour',
            start: '12/16/2020, 8:00:00 AM',
            type: 'outlook',
            color: '#546E7A'
        },
        {
            title: 'Dinner',
            start: '2020-11-12T20:00:00',
            type: 'google',
            color: '#546E7A'
        },
        {
            title: 'Birthday Party',
            start: '2020-11-13T07:00:00',
            type: 'outlook',
            color: '#546E7A'
        },
        {
            title: 'Click for Google',
            url: 'http://google.com/',
            type: 'google',
            start: '2020-11-28',
            color: '#FF7043'
        }
    ];

    eventColors = [...meetings, ...eventColors]
    let filteredEvents = [];
    Object.assign(filteredEvents, eventColors)
    $('.multiselect-select-all').change(function (e) {
        let filterBy = $(e.target).val();
        filteredEvents = [];

        eventColors.forEach(function (event) {
            if (!filterBy || !filterBy.length) return;

            if (event.type && filterBy.findIndex(e => e == event.type) > -1) {
                filteredEvents.push(event)
            }
        })

        console.log(filteredEvents);

        $('.fullcalendar-external').fullCalendar('removeEvents');
        $('.fullcalendar-external').fullCalendar('addEventSource', filteredEvents);
        $('.fullcalendar-external').fullCalendar('refetchEvents');
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
        eventClick: function (info) {
            console.log(info);
            if(info.id){
                window.location.href = `meeting_member.html?meeting_id=${info.id}`
            }
        },
        eventRender: function (event, element, view) {
            // <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48"><path fill="#fff" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"/><path fill="#0072C6" d="M28 16V21.8913L29.921 23.1877C29.9717 23.2035 30.0815 23.2047 30.1321 23.1877L38.4 17.2138C38.4 16.5068 37.7846 16 37.4374 16H28Z"/><path fill="#0072C6" d="M28.0011 23.5141L29.7539 24.7531C30.0009 24.9399 30.2984 24.7531 30.2984 24.7531 30.0019 24.9399 38.4 19.2 38.4 19.2V29.5939C38.4 30.7254 37.6961 31.2 36.9046 31.2H28V23.5141H28.0011zM18.8414 20.7999C18.2168 20.7999 17.7192 21.0942 17.3517 21.6815 16.9843 22.2689 16.8 23.0465 16.8 24.0143 16.8 24.9965 16.9843 25.773 17.3517 26.3438 17.7192 26.9157 18.2014 27.1999 18.7972 27.1999 19.4118 27.1999 19.8996 26.9223 20.2593 26.367 20.619 25.8117 20.8 25.0408 20.8 24.0552 20.8 23.0276 20.6256 22.2279 20.2758 21.6561 19.9261 21.0853 19.4483 20.7999 18.8414 20.7999z"/><path fill="#0072C6" fill-rule="evenodd" d="M10.4 34.8845V12.845L27.2 9.59998V38.4L10.4 34.8845ZM18.8639 28.9904C20.0063 28.9904 20.932 28.5231 21.6419 27.5906C22.3518 26.6582 22.7073 25.4294 22.7063 23.9053C22.7063 22.4223 22.3638 21.2281 21.6788 20.3217C20.9948 19.4152 20.0974 18.9631 18.9886 18.9631C17.8148 18.9631 16.8718 19.4369 16.1597 20.3833C15.4476 21.3298 15.0921 22.5694 15.0921 24.1022C15.0921 25.5538 15.4432 26.7307 16.1434 27.635C16.8447 28.5382 17.7508 28.9904 18.8639 28.9904Z" clip-rule="evenodd"/></svg>
            let start = new Date(event.start)
            let time = moment(start).locale('en').format("ha");
            time = time.substring(0, time.length - 1);
            icon = 'icons8-calendar-12-32.png';

            if (event.type == 'outlook')
                icon = 'outlook-calendar.jpg'
            else if (event.type == 'google')
                icon = 'icons8-google-48.png';

            // outlook-calendar.jpg
            return $(`
            <a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
				<div class="fc-content">
                    <img class="event_icon" src="assets/images/${icon}">
                    
					<span class="fc-time">${time}</span>
					<span class="fc-title">${event.title}</span>
				</div>
			</a>
            `);
        },
        editable: true,
        defaultDate: '2020-12-16',
        events: filteredEvents,
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


    // $('.multiselect2').multiselect({
    //     onChange: function() {
    //         $.uniform.update();
    //     }
    // });

    // Select All option
    $('.multiselect-select-all').multiselect({
        includeSelectAllOption: true,
        onSelectAll: function () {
            // $.uniform.update();
        }
    });

    // $('.multiselect-reset').multiselect();


    // $('#multiselect-reset-form').on('reset', function () {
    //     $('.multiselect-reset option:selected').each(function () {
    //         $(this).prop('selected', false);
    //     })

    //     $('.multiselect-reset').multiselect('refresh');
    //     $.uniform.update();
    // });

    // $(".styled, .multiselect-container input").uniform({ radioClass: 'choice' });

});
