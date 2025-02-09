function saveData(event) {
    event.preventDefault();
    var formData = {
        firstName: document.forms['D1']['t1'].value,
        lastName: document.forms['D1']['t2'].value,
        username: document.forms['D1']['t3'].value,
        password: document.forms['D1']['t4'].value,
        dob: document.forms['D1']['t5'].value,
        email: document.forms['D1']['t6'].value,
        mobile: document.forms['D1']['t7'].value,
        gender: document.querySelector('input[name="gender"]:checked')?.value,
        qualification: document.querySelector('input[name="qualification"]:checked')?.value,
        hobbies: document.forms['D1']['hobbies'].value,
        address: document.forms['D1']['address'].value,
        userImage: document.forms['D1']['userImage'].files[0] ? document.forms['D1']['userImage'].files[0].name : 'No image uploaded'
    };
    localStorage.setItem('userData', JSON.stringify(formData));
    alert("Data saved successfully!");
    document.forms['D1'].reset();
}

function downloadFile() {
    const savedData = JSON.parse(localStorage.getItem('userData'));
    if (savedData) {
        let text = 'User Data:\n\n';
        for (const key in savedData) {
            text += `${key}: ${savedData[key]}\n`;
        }
        const blob = new Blob([text], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'data.txt';
        link.click();
    } else {
        alert("No data found!");
    }
}
