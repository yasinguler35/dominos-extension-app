document.addEventListener('DOMContentLoaded', function () {
	var form = document.getElementById('siparisform');

	form.addEventListener('submit', function (e) {
		e.preventDefault();



		window.createNotification({
			closeOnClick: true,
			displayCloseButton: true,
			positionClass: "nfc-bottom-left",
			showDuration: 30000,
			theme: "success",

		})({
			title: "Sipariş Takip",
			message: "Hazırlanıyor"
		});
	});
});


// <option value="nfc-top-right">Top Right</option>
// <option value="nfc-bottom-right">Bottom Right</option>
// <option value="nfc-top-left">Top Left</option>
// <option value="nfc-bottom-left">Bottom Left</option>
{/* <option value="success">Success</option>
<option value="info">Information</option>
<option value="warning">Warning</option>
<option value="error">Error</option>
<option value="none">None</option> */}