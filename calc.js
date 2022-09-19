function hitung(tombol){
    //tangkap id form
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value); 
    switch (tombol) {
        case 'pertambahan':
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
            }    
            else {
                var total = a1 + a2; //rumus
                frm.hasil.value = total; //penempatan hasil 
            } 
            break;
        case 'pengurangan':
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
            }    
            else {
                var total = a1 - a2; //rumus
                frm.hasil.value = total; //penempatan hasil 
            } 
            break;
        case 'perkalian':
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
            }    
            else {
                var total = a1 * a2; //rumus
                frm.hasil.value = total; //penempatan hasil 
            } 
            break;
        case 'pembagian':
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
            }    
            else {
                var total = a1 / a2; //rumus
                frm.hasil.value = total; //penempatan hasil 
            } 
            break;
        case 'pamangkatan':
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
            }    
            else {
                var a1 = parseFloat(frm.angka1.value);
                var a2 = parseFloat(frm.angka2.value);
                var total = Math.pow(a1,a2); //rumus
                frm.hasil.value = total; //penempatan hasil
            } 
            break;
        default:
            break;
    }
} 