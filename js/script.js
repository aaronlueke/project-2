/*jshint esversion: 6 */

const allStudents = $('.student-list').children();
const maxStudents = 10;

function showPage(studentList, pageNum) {
	allStudents.hide();
	for (let i = 0; i < maxStudents; i += 1) {
		$(studentList[i]).show();
		
 }
}
showPage(studentList, 1);