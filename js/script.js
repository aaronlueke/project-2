/*jshint esversion: 6 */

const allStudents = $('.student-list').children();
const maxStudents = 10;
//let totalPages = Math.ceil(allStudents / 10);

function showPage(studentList, pageNum) {
//	allStudents.hide();
	for (let i = 0; i < maxStudents; i ++) {
		$(studentList[i]).show();
		if (i < (pageNum * 10) - 1 && i >= (pageNum * 10) - 10) {
			$(studentList[i]).show();
			} else {
			$(studentList[i]).hide();
			}
 }
}
showPage(allStudents, 2);