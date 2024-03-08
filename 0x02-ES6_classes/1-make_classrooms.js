// Filename: 1-make_classrooms.js
import ClassRoom from './0-classroom';

function initializeRooms() {
  const classrooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];

  return classrooms;
}

export default initializeRooms;
