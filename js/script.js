/*jshint esversion: 6 */

const $allStudents = $('.student-list').children();

function showPage(studentList, pageNum) {
	$allStudents.hide();
	for (let i = 0; i < $allStudents.length; i ++) {
		if (i < (pageNum * 10) - 1 && i >= (pageNum * 10) - 10) {
			$(studentList[i]).show();
			} else {
			$(studentList[i]).hide();
			}
 }
}
showPage($allStudents, 2);

//variable holding div element with class 'page'
const page = document.querySelector('.page');
//creates new div element
const linksDiv = document.createElement('div');
//adds 'pagination' class to new 'div' element
$(linksDiv).addClass('pagination');
//appends new div to '.page' div element
page.appendChild(linksDiv);
//creates new unordered list element
const linksUl = document.createElement('ul');
//appends new ul element to new div element
linksDiv.appendChild(linksUl);
//add class to new unordered list
$(linksUl).addClass('links-list');




function appendPageLinks() {
	const totalPages = Math.ceil($allStudents / 10);
	const pageLinks = document.createElement('li');

	for (let i = 1; i <= totalPages; i ++) {
		$('.links-list').append(pageLinks);
	}
}

appendPageLinks();