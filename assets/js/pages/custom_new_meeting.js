/* ------------------------------------------------------------------------------
*
*  # Dual sidebar
*
*  Specific JS code additions for Dual sidebar pages set
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

function renderFilepond(selector) {
    FilePond.registerPlugin(FilePondPluginFileEncode);

    // original input[type=file]
    var input = document.querySelector(selector);

    // upgrade file input to filepond
    FilePond.create(input);

    // $(selector).on('FilePond:addfile', function (e) {
    //     console.log('FilePond ready for use', e);
    //     let index = selector.split('-')[0]
    // })
}

var uppyDashboard

$(function () {

    // Default initialization
    $('.select').select2({
        minimumResultsForSearch: Infinity
    });

    function getRandomBetween(min, max) {
        return Math.random() * (max - min) + min;
    }

    renderFilepond('.filepond');

    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    $('.add_new_topic').click(function () {

        return null;

        let random = makeid(10);
        let el = `
        <tr class="row${random}">
			<td>
				<input class="form-control" placeholder="Topic">
			</td>
			<td style="width:115px;">
				<div class="input-group">
					<input type="text" class="form-control" placeholder="">
					<span class="input-group-addon">min</span>
				</div>
			</td>
			<td>
				<div class="form-group" style="min-width: 200px; margin: 0;">
					<select class="selectbox${random}">
						<option value="john" data-iconurl="assets/images/av2.jpg">
							John Carter
						</option>
						<option value="eugene" data-iconurl="assets/images/av1.jpg">
							Richard Voln
						</option>
						<option value="barnaba" data-iconurl="assets/images/av2.jpg">
							Barnaba Losey
						</option>
						<option value="lucy" data-iconurl="assets/images/av4.jpg">
							Jif Abernatti
						</option>
					</select>
				</div>
			</td>
			<td>
				<div class="checkbox">
					<label>
						<input type="checkbox" class="styled recurrent_field">
					</label>
				</div>
			</td>
			<td>
				<input type="file"
					class="filepond${random}"
					name="filepond"
					multiple
					data-max-file-size="3MB"
					data-max-files="3" />
            </td>
            <td>
				<i class="icon-trash-alt text-warning" onclick="deleteTopic('row${random}')"></i>
			</td>
		</tr>
        `;

        $('.topics_body').append(el);

        renderFilepond(`.filepond${random}`);

        $(`.selectbox${random}`).selectBoxIt({
            autoWidth: false
        });

    })

    function deleteTopic(selector) {

    }


    // Basic initialization
    $('.multiselect').multiselect({
        onChange: function () {
            $.uniform.update();
        }
    });

    $(".selectbox").selectBoxIt({
        autoWidth: false
    });

    // 10 minute increments
    $('.daterange-increments').daterangepicker({
        timePicker: true,
        opens: "left",
        applyClass: 'bg-slate-600',
        cancelClass: 'btn-default',
        timePickerIncrement: 10,
        locale: {
            format: 'MM/DD/YYYY h:mm a'
        }
    });


    // var uppy = Uppy.Core()
    //     .use(Uppy.Dashboard, {
    //         inline: true,
    //         target: '#drag-drop-area'
    //     })
    //     .use(Uppy.Tus, { endpoint: 'https://master.tus.io/files/' })

    // uppy.on('complete', (result) => {
    //     console.log('Upload complete! We’ve uploaded these files:', result.successful)
    // })

    const Tus = Uppy.Tus;
    const ProgressBar = Uppy.ProgressBar;
    const StatusBar = Uppy.StatusBar;
    const FileInput = Uppy.FileInput;
    const Informer = Uppy.Informer;

    // to get uppy companions working, please refer to the official documentation here: https://uppy.io/docs/companion/
    const Dashboard = Uppy.Dashboard;
    const Dropbox = Uppy.Dropbox;
    const GoogleDrive = Uppy.GoogleDrive;
    const OneDrive = Uppy.OneDrive;
    const Instagram = Uppy.Instagram;
    const Webcam = Uppy.Webcam;

    $(document).ready(function () {

        $('.recurrent_form').fadeOut(1)

        $('.recurrent_field').change(function () {

            if ($('.recurrent_field').is(":checked")) {
                $('.recurrent_form').fadeIn(300)
            } else {
                $('.recurrent_form').fadeOut(300)
            }
        })

        $('#input-tags').selectize({
            create: true,
            sortField: 'text'
        });

        // Styled file input
        $('.file-styled').uniform({
            fileButtonClass: 'action btn bg-warning-400'
        });
    })



    // Private functions
    var initUppyCheckin = function () {
        var id = '#drag-drop-area';

        var options = {
            proudlyDisplayPoweredByUppy: false,
            target: id,
            inline: true,
            replaceTargetContent: true,
            showProgressDetails: true,
            note: 'No filetype restrictions.',
            height: 470,
            metaFields: [
                { id: 'name', name: 'Name', placeholder: 'file name' },
                { id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' }
            ],
            browserBackButtonClose: true
        }

        uppyDashboard = Uppy.Core({
            autoProceed: true,
            restrictions: {
                maxFileSize: 1000000, // 1mb
                maxNumberOfFiles: 5,
                minNumberOfFiles: 1
            }
        });

        uppyDashboard.use(Dashboard, options);
        uppyDashboard.use(Tus, { endpoint: 'https://master.tus.io/files/' });
        uppyDashboard.use(GoogleDrive, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });
        uppyDashboard.use(Dropbox, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });
        uppyDashboard.use(OneDrive, { target: Dashboard, companionUrl: 'https://companion.uppy.io' })
        // uppyDashboard.use(Instagram, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });
        uppyDashboard.use(Webcam, { target: Dashboard });


    }


    initUppyCheckin()

    function rerender() {
        setTimeout(() => {

            $(".selectbox").selectBoxIt({
                autoWidth: false
            });

        }, 100);
        initUppyCheckin()

    }
});

const users = [
    { email: 'Ralph@intalio.com', first_name: 'Ralph', last_name: 'Glover', imgsrc: "av1.jpg", id: 1 },
    { email: 'Willa@intalio.com', first_name: 'Willa', last_name: 'Austin', imgsrc: "av2.jpg", id: 2 },
    { email: 'Hazel@intalio.com', first_name: 'Hazel', last_name: 'Gill', imgsrc: "av5.jpg", id: 3 },
]


var REGEX_EMAIL = '([a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@' +
    '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)';

var formatName = function (item) {
    return $.trim((item.first_name || '') + ' ' + (item.last_name || ''));
};

$(document).ready(function () {

    $('#select-employee').selectize({
        persist: false,
        maxItems: null,
        valueField: 'id',
        labelField: 'name',
        searchField: ['first_name', 'last_name', 'email'],
        sortField: [
            { field: 'first_name', direction: 'asc' },
            { field: 'last_name', direction: 'asc' }
        ],
        options: users,
        render: {
            item: function (item, escape) {
                var name = formatName(item);
                return '<div>' +
                    (name ? '<span class="name">' + escape(name) + '</span>' : '') +
                    (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
                    '</div>';
            },
            option: function (item, escape) {
                var name = formatName(item);
                var label = name || item.first_name;
                var caption = name ? item.email : null;
                return `
						<div class="employee_option" style="display:flex;">
							<img src="assets/images/${item.imgsrc}">
							<div class="box">
								<div class="name">${item.first_name} ${item.last_name}</div>
								<div class="email">${item.email}</div>
							</div>
						</div>
					`;
                return '<div>' +
                    '<span class="">123' + '</span>' +
                    (caption ? '<span class="caption">' + escape(caption) + '11</span>' : '') +
                    '</div>';
            }
        },
        createFilter: function (input) {
            var regexpA = new RegExp('^' + REGEX_EMAIL + '$', 'i');
            var regexpB = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
            return regexpA.test(input) || regexpB.test(input);
        },
        create: function (input) {
            if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
                return { email: input };
            }
            var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
            if (match) {
                var name = $.trim(match[1]);
                var pos_space = name.indexOf(' ');
                var first_name = name.substring(0, pos_space);
                var last_name = name.substring(pos_space + 1);

                return {
                    email: match[2],
                    first_name: first_name,
                    last_name: last_name
                };
            }
            alert('Invalid email address.');
            return false;
        }
    });
})


const workgroups = [
    { email: 'Audit@intalio.com', first_name: 'The Audit Committee', last_name: 'Committee', imgsrc: "", id: 1 },
    { email: 'Judgement@intalio.com', first_name: 'Judgement comity', last_name: 'Committee', imgsrc: "", id: 2 },
    { email: 'Health@intalio.com', first_name: 'Public Health Committee', last_name: 'Committee', imgsrc: "", id: 3 },
    { email: 'Maintenance@intalio.com', first_name: 'Maintenance teams', last_name: 'Workgroup', imgsrc: "", id: 4 },
]

$(document).ready(function () {

    $('#select-workgroup').selectize({
        persist: false,
        maxItems: null,
        valueField: 'id',
        labelField: 'name',
        searchField: ['first_name', 'last_name', 'email'],
        sortField: [
            { field: 'first_name', direction: 'asc' },
            { field: 'last_name', direction: 'asc' }
        ],
        options: workgroups,
        render: {
            item: function (item, escape) {
                var name = formatName(item);
                return '<div>' +
                    (name ? '<span class="name">' + escape(name) + '</span>' : '') +
                    (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
                    '</div>';
            },
            option: function (item, escape) {
                var name = formatName(item);
                var label = name || item.first_name;
                var caption = name ? item.email : null;
                return `
					<div class="employee_option" style="display:flex;">
						
						<div class="box">
							<div class="name">${item.first_name}  </div>
							<div class="email">${item.email} . <small>${item.last_name}</small> </div>
						</div>
					</div>
				`;
                return '<div>' +
                    '<span class="">123' + '</span>' +
                    (caption ? '<span class="caption">' + escape(caption) + '11</span>' : '') +
                    '</div>';
            }
        },
        createFilter: function (input) {
            var regexpA = new RegExp('^' + REGEX_EMAIL + '$', 'i');
            var regexpB = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
            return regexpA.test(input) || regexpB.test(input);
        },
        create: function (input) {
            if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
                return { email: input };
            }
            var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
            if (match) {
                var name = $.trim(match[1]);
                var pos_space = name.indexOf(' ');
                var first_name = name.substring(0, pos_space);
                var last_name = name.substring(pos_space + 1);

                return {
                    email: match[2],
                    first_name: first_name,
                    last_name: last_name
                };
            }
            alert('Invalid email address.');
            return false;
        }
    });
})