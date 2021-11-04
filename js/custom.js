$(function () {
	
});

function displayEmp(id, container) {
    $resultDiv = $('<div />');
    $.ajax({
        url: 'https://cveaw-b5478-default-rtdb.asia-southeast1.firebasedatabase.app/Employee/' + id + '.json'
    }).done(function(d,s,r) {
        if (d==null || d=='null') {
            $resultDiv.html('No data found.');
        } else {
            $resultDiv.append('<div><strong>Last Name</strong>:'+d.Firstname+'</div>');
            $resultDiv.append('<div><strong>First Name</strong>:'+d.LastName+'</div>');
        }
    });
    if (container) {
        container.html($resultDiv);
    } else {
        $('body').append($resultDiv);
    }
}