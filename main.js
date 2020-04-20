document.addEventListener('DOMContentLoaded', () => {
    (document.querySelectorAll ('.notification .delete') || []).forEach(($delete) => {
      $notification = $delete.parentNode;
  
      $delete.addEventListener('click', () => {
        $notification.parentNode.removeChild($notification);
    });
  });
});

function kirim() {
     var a=document.getElementById("abc").innerHTML;
     var b=document.getElementById("teks").value;
     var c=document.getElementById("komen").value;
     document.write(a + "<br />" + "<br />");
     document.write(b + "<br />");
     document.write(c);
  }