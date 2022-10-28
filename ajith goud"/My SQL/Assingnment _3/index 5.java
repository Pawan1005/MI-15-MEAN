//display all the records in the course table.?
 public ArrayList<Event> getUserEvents() {
        ArrayList<Event> EventsList = new ArrayList<>();
        Cursor c = this.database.rawQuery("select FEventId, FEventName, FEventDescription, FEventStatus, FEventReligion, FromDate, ToDate from tblApEvents", new String[]{} );
        if (c.moveToFirst()) {
            do {
                EventsList.add(new Event(c.getString(0),c.getString(1),c.getString(2),c.getString(3),c.getString(4),c.getString(5),c.getString(6)));
            } while (c.moveToNext());
        }
        return EventsList;
    }


class Event{

private String FEventId;
private String FEventName;
    // other members
    //parameterized constructor
    // setter and getter

}


