

function sendMail(meeting) {
    console.log(meeting)
    var meetingName = meeting.title || "Meeting"
    var meetingStartsDate = moment(meeting.start).format('MMM D, YYYY')
    var meetingStartsTime = moment(meeting.start).format('hh:mm A')
    var meetingEndsDate = moment(meeting.end).format('MMM D, YYYY')
    var meetingEndsTime = moment(meeting.end).format('hh:mm A')
    var meetingId = meeting.id
    
    var template = `
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"><head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2020-12-10</title> 
  <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--> 
  <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
  <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--> 
  <!--[if !mso]><!-- --> 
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700,700i" rel="stylesheet"> 
  <!--<![endif]--> 
  <style type="text/css">
#outlook a {
	padding:0;
}
.ExternalClass {
	width:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
	line-height:100%;
}
.es-button {
	mso-style-priority:100!important;
	text-decoration:none!important;
}
a[x-apple-data-detectors] {
	color:inherit!important;
	text-decoration:none!important;
	font-size:inherit!important;
	font-family:inherit!important;
	font-weight:inherit!important;
	line-height:inherit!important;
}
.es-desk-hidden {
	display:none;
	float:left;
	overflow:hidden;
	width:0;
	max-height:0;
	line-height:0;
	mso-hide:all;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important; line-height:150%!important } h1 { font-size:30px!important; text-align:center; line-height:120%!important } h2 { font-size:26px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } h1 a { font-size:30px!important; text-align:center } h2 a { font-size:24px!important; text-align:center } h3 a { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; border-width:10px 0px 10px 0px!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#E4E5E7"> 
   <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#e4e5e7"></v:fill>
			</v:background>
		<![endif]--> 
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
     <tbody><tr style="border-collapse:collapse"> 
      <td valign="top" style="padding:0;Margin:0"> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td class="es-adaptive" align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
               
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tbody><tr style="border-collapse:collapse"></tr> 
         <tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-header-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#34265F;width:600px"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="center" style="padding:0;Margin:0;font-size:0"><a href="https://viewstripo.email" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:none;color:#FFFFFF"></a></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"><img class="adapt-img" src="https://ooxaii.stripocdn.email/content/guids/CABINET_84164752b8a377d5e94cfc0e1ea2c8e6/images/47051523540803179.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="600"></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EDEDED;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ededed" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-bottom:15px;padding-top:20px;padding-left:20px;padding-right:20px"> 
               <!--[if mso]><table   style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:356px" valign="top"><![endif]--> 
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:356px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#999999">Meeting Invitation</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-bottom:15px"><h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;font-size:24px;font-style:normal;font-weight:normal;color:#333333">${meetingName}</h2></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#333333">Ella Becker and Archie Kendal will share their experience regarding optimization.</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#333333">${meetingStartsDate} | ${meetingStartsTime} - ${meetingEndsDate} | ${meetingEndsTime}</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-top:10px"><span class="es-button-border" style="border-style:solid;border-color:transparent;background:#34265F none repeat scroll 0% 0%;border-width:0px;display:inline-block;border-radius:5px;width:auto"><a href="https://presales-etgs.com/demo/meetings/meeting_confirmation_member.html?meeting_id=${meetingId}" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:18px;color:#FFFFFF;border-style:solid;border-color:#34265F;border-width:10px 20px 10px 20px;display:inline-block;background:#34265F none repeat scroll 0% 0%;border-radius:5px;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">View invitation</a></span></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td><td style="width:20px"></td><td style="width:184px" valign="top"><![endif]--> 
               <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td align="left" style="padding:0;Margin:0;width:184px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:15px;font-size:0"><img class="adapt-img" src="https://ooxaii.stripocdn.email/content/guids/CABINET_84164752b8a377d5e94cfc0e1ea2c8e6/images/42461515145286634.png" alt="" width="184" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td></tr></table><![endif]--></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"><img class="adapt-img" src="https://ooxaii.stripocdn.email/content/guids/CABINET_84164752b8a377d5e94cfc0e1ea2c8e6/images/79081515162802421.png" alt="" width="600" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EDEDED;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ededed" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
               
             </tr> 
             <tr style="border-collapse:collapse"> 
               
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px"><h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;font-size:24px;font-style:normal;font-weight:normal;color:#333333">Program</h2></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333">Ella Becker and Archie Kendal have prepared a report on the principles of a Message Imposition, and will share their experience regarding optimization.</p></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-right:20px"> 
               <!--[if mso]><table style="width:580px" cellpadding="0" cellspacing="0"><tr><td style="width:184px" valign="top"><![endif]--> 
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:184px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" bgcolor="#efefef" align="right" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;padding-right:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333">${!!meeting.topics[0] && meeting.topics[0].duration ? meeting.topics[0].duration : '10 '} Minutes</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="right" style="padding:0;Margin:0;padding-top:5px;padding-right:5px;font-size:0"><img src="https://ooxaii.stripocdn.email/content/guids/CABINET_84164752b8a377d5e94cfc0e1ea2c8e6/images/7591515059622822.png" alt="Ella Becker" title="Ella Becker" width="38" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td><td style="width:20px"></td><td style="width:376px" valign="top"><![endif]--> 
               <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td align="left" style="padding:0;Margin:0;width:376px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:5px;padding-left:20px"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;color:#333333">${!!meeting.topics[0] && meeting.topics[0].topic ? meeting.topics[0].topic : 'Follow-up on Sales Pipeline'}.</h4></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-left:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.</p></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td></tr></table><![endif]--></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:15px;padding-right:20px"> 
               <!--[if mso]><table style="width:580px" cellpadding="0" cellspacing="0"><tr><td style="width:184px" valign="top"><![endif]--> 
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:184px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" bgcolor="#efefef" align="right" style="padding:5px;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333">${!!meeting.topics[1] && meeting.topics[1].duration ? meeting.topics[1].duration : '15 '} Minutes</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="right" style="padding:0;Margin:0;padding-top:5px;padding-right:5px;font-size:0"><img src="https://ooxaii.stripocdn.email/content/guids/CABINET_84164752b8a377d5e94cfc0e1ea2c8e6/images/19381515160463673.png" alt="Ella Becker and Archie Kendal" title="Ella Becker and Archie Kendal" width="83" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td><td style="width:20px"></td><td style="width:376px" valign="top"><![endif]--> 
               <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td align="left" style="padding:0;Margin:0;width:376px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:5px;padding-left:20px"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;color:#333333">${!!meeting.topics[1] && meeting.topics[1].topic ? meeting.topics[1].topic : 'Review Previous Meeting'}.</h4></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-left:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td></tr></table><![endif]--></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:15px;padding-bottom:20px;padding-right:20px"> 
               <!--[if mso]><table style="width:580px" cellpadding="0" cellspacing="0"><tr><td style="width:184px" valign="top"><![endif]--> 
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:184px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" bgcolor="#efefef" align="right" style="padding:5px;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333">${!!meeting.topics[2] && meeting.topics[2].duration ? meeting.topics[2].duration : '30 '} Minutes</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="right" style="padding:0;Margin:0;padding-top:5px;padding-right:5px;font-size:0"><img src="https://ooxaii.stripocdn.email/content/guids/CABINET_84164752b8a377d5e94cfc0e1ea2c8e6/images/67931515059622684.png" alt="Archie Kendal" title="Archie Kendal" width="38" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td><td style="width:20px"></td><td style="width:376px" valign="top"><![endif]--> 
               <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td align="left" style="padding:0;Margin:0;width:376px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:5px;padding-left:20px"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;color:#333333">${!!meeting.topics[2] && meeting.topics[2].topic ? meeting.topics[2].topic : 'How to automate working process'}.</h4></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-left:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-top:15px;padding-left:20px"><span class="es-button-border" style="border-style:solid;border-color:transparent;background:#34265F none repeat scroll 0% 0%;border-width:0px;display:inline-block;border-radius:5px;width:auto"><a href="javascript:void()" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:18px;color:#FFFFFF;border-style:solid;border-color:#34265F;border-width:10px 20px 10px 20px;display:inline-block;background:#34265F none repeat scroll 0% 0%;border-radius:5px;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">Read more</a></span></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td></tr></table><![endif]--></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EDEDED;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ededed" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;position:relative" align="center"></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EDEDED;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ededed" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
               
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
               
             </tr> 
             <tr style="border-collapse:collapse"> 
               
             </tr> 
             <tr style="border-collapse:collapse"> 
               
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EDEDED" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ededed" role="presentation"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"><img class="adapt-img" src="https://ooxaii.stripocdn.email/content/guids/CABINET_84164752b8a377d5e94cfc0e1ea2c8e6/images/6571515162565064.png" alt="" width="600" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EDEDED;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ededed" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333">Will you attend?</h3></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px"> 
               <!--[if mso]><table style="width:560px" cellpadding="0" 
                        cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]--> 
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td align="right" style="padding:0;Margin:0"><span class="es-button-border" style="border-style:solid;border-color:transparent;background:#34265F none repeat scroll 0% 0%;border-width:0px;display:inline-block;border-radius:5px;width:auto;border-left-width:0px;border-right-width:0px"><a href="https://presales-etgs.com/demo/meetings/meeting_confirmation_member.html?meeting_id=${meetingId}" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:18px;color:#FFFFFF;border-style:solid;border-color:#34265F;border-width:10px 20px 10px 20px;display:inline-block;background:#34265F none repeat scroll 0% 0%;border-radius:5px;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center;border-left-width:20px;border-right-width:20px">Yes</a></span></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]--> 
               <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td align="left" style="padding:0;Margin:0;width:270px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0"><span class="es-button-border" style="border-style:solid;border-color:#FFFFFF;background:#34265F none repeat scroll 0% 0%;border-width:0px;display:inline-block;border-radius:5px;width:auto"><a href="https://presales-etgs.com/demo/meetings/meeting_confirmation_member.html?meeting_id=${meetingId}" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:18px;color:#FFFFFF;border-style:solid;border-color:#34265F;border-width:10px 20px 10px 25px;display:inline-block;background:#34265F none repeat scroll 0% 0%;border-radius:5px;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center"> No</a></span></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td></tr></table><![endif]--></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#34265F" width="100%" cellspacing="0" cellpadding="0" bgcolor="#34265f" role="presentation"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"><img class="adapt-img" src="https://ooxaii.stripocdn.email/content/guids/CABINET_84164752b8a377d5e94cfc0e1ea2c8e6/images/79081515162802421.png" alt="" width="600" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#34265F;width:600px" cellspacing="0" cellpadding="0" bgcolor="#34265f" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
               
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-footer-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"> 
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;font-size:0"><a href="https://viewstripo.email" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:12px;text-decoration:none;color:#34265F"></a></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-left:10px;padding-right:10px"></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:10px;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333">You are receiving this email because you have visited our site or asked us about the regular newsletter.</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333"><a target="_blank" class="unsubscribe" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:12px;text-decoration:none;color:#34265F">Unsubscribe</a> | <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:12px;text-decoration:none;color:#34265F" href="https://viewstripo.email">Update Preferences</a></p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                       
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="center" style="padding:10px;Margin:0"></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td align="center" style="padding:0;Margin:0"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
               
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table></td> 
     </tr> 
   </tbody></table> 
  </div>  
 
</body></html>
`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "everteam@gmail.com",
        Password: "F029AAF4A85B25AE1B11697E766A3F0E430D",
        To: 'mazen.farah@intalio.com',
        FromName: "MMS | Intalio",
        From: "hasan.ri25@gmail.com",
        Subject: "Meeting Invitation",
        Body: template
    }).then(
        message => console.log(message)
    );
}
