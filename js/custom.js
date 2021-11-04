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
            $resultDiv.append('<div><strong>Last Name</strong>: '+d.Firstname+'</div>');
            $resultDiv.append('<div><strong>First Name</strong>: '+d.LastName+'</div>');
            $resultDiv.append('<div><strong>Middle Name</strong>: '+d.Middlename+'</div>');
            $resultDiv.append('<div><strong>Nickame</strong>: '+d.NickName+'</div>');
            $resultDiv.append('-----');
            $resultDiv.append('<div><strong>Position</strong>: '+d.Position+' (' + d.GradeLevel + ')</div>');
            $resultDiv.append('<div><strong>Department</strong>: '+d.GrpDesc+'</div>');
            $resultDiv.append('<div><strong>Salary</strong>: P'+d.Salary+'</div>');
            $resultDiv.append('-----');
            let add = d.ProvincialAddress1 + d.ProvincialAddress2 + d.ProvincialBarangay + d.ProvincialCityMunipality + d.ProvincialProvice;
            if (add.trim()=='') {
                add = d.CityAddress1 + '<br>' + d.CityAddress2 + '<br>' + d.CityAddressBarangay + '<br>' + d.CityAddressCity;
            } else {
                add = d.ProvincialAddress1 + '<br>' + d.ProvincialAddress2 + '<br>' + d.ProvincialBarangay + '<br>' + d.ProvincialCityMunipality + ', ' + d.ProvincialProvice;
            }
            $resultDiv.append('<div><strong>Address</strong>:<br>'+add+'</div>');
            $resultDiv.append('<div><strong>Birthdate</strong>: '+d.Birthdate+'</div>');
            $resultDiv.append('<div><strong>Birthplace</strong>: '+d.Birthplace+'</div>');

            $resultDiv.append('<div><strong>Contact Number</strong>:'+d.MobileNumber+'</div>');
        }
    }).fail(function(x,s,e) {
        
    }).always(function(a,b,c) {

    });
    if (container) {
        container.html($resultDiv);
    } else {
        $('body').append($resultDiv);
    }
}