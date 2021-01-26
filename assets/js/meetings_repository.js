
let key = 'meetings';

function getMeetings() {
    let meetings = localStorage.getItem('meetings');

    if (meetings) {
        return JSON.parse(meetings)
    } else {
        localStorage.setItem('meetings', JSON.stringify([]));
        meetings = [];
        return meetings;
    }
}

function getMeeting(id) {
    let meetings = getMeetings()

    if (!meetings || !meetings.length) return null;

    return meetings.find(meeting => meeting.id == id)
}

function addMeeting(meeting) {
    // let meetings = JSON.parse(localStorage.getItem('meetings'))
    let meetings = getMeetings();
    meetings.push(meeting)
    localStorage.setItem('meetings', JSON.stringify(meetings));
}

function updateMeeting(meeting) {
    let meetings = getMeetings()
    if (!meetings || !meetings.length) return null;
    let meetingIndex = meetings.findIndex(m => m.id == meeting.id);

    if (meetingIndex > -1) {
        meetings[meetingIndex] = meeting;
        localStorage.setItem('meetings', JSON.stringify(meetings));
    }
}

function deleteAll(meeting) {
    // let meetings = JSON.parse(localStorage.getItem('meetings'))
    localStorage.setItem('meetings', JSON.stringify([]));
}
