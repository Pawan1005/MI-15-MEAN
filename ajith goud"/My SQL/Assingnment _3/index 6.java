//update the course code as follows 101--comp,102--entc,103-mech,104-civil?
public void addNewLecture (Lecture lecture) {
If (lectureList == null){
lectureList = new ArrayList<>();
} 
this.lectureList.add(lecture);
lecture.setCourse(this);
} 



