export interface Schedules {
  weekdays: string;
  hour: string;
}

export interface Location {
  title: string;
  content: string;
  opened: boolean;
  mask: string;
  towel: string;
  fountain: string;
  locker_room: string;
  schedules: Schedules[];
}
