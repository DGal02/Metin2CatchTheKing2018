function zmientlo(id, zdj)
{
    document.getElementById(id).src = "images/" + zdj + ".jpg";

}
function restart()
{
	$(".dropdown-toggle").each(function(){
		this.src = "images/pole.jpg";

	});	
}
var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        zniknij();
    }
}
function zniknij ()
{
	$("#id01").fadeOut(500);
}
$('#popoverhide').popover().click(function () {
    setTimeout(function () {
        $('#popoverhide').popover('hide');
    }, 1500);
});
function taktyka () {
	
		$(".dropdown-toggle").each(function(){
		this.src = "images/uwaga.jpg";

	});	
	
	
}