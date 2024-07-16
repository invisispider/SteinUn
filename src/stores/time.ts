import { defineStore } from "pinia";
export const useTime = defineStore("time", {
  state: () => ({
    dayOfYear: 0,
    zsessionNames: [
      "Dawn",
      "Breakfast",
      "Morning",
      "Lunch",
      "Afternoon",
      "Dinner",
      "Evening",
      "Night",
      "Midnight",
      "Dead",
      "~zen~",
    ],
    habitNames: [
      "Struggles",
      "Flowers",
      "Elders",
      "Vivid",
      "Peace",
      "Harvests",
      "Hallows",
      "Feasts",
      "~newZen~",
    ],
    dayNames: [
      "Sun", "Tues", "Thurs", "Fri", "Satur"
    ],
    ins_in_mom: 80,
    mom_in_whi: 10,
    mom_in_sess: 100,
    whi_in_sess: 10,
    sess_in_day: 10.8,
    sess_in_hou: 0.45,
    ins_in_whi: 800,
    ins_in_sess: 8000,
    hou_in_sess: 24 / 10.8,
    second: 0,
    minute: 0,
    hour: 0,
    instant: 0,
    zwhile: 0,
    zmoment: 0,
    zhour: 0,
    forma: "",
    zsess: 0,
    true_h: 0,
    habitNum: 0,
    dayNum: 0
  }),
  getters: {
    habitName: (state) => state.habitNames[state.habitNum],
    dayName: (state) => state.dayNames[(state.dayNum)%5],
    dayOfWeekZen: (state) => (state.dayNum)%5,
    dayOfHabit: (state) => (state.dayOfYear - (state.habitNum * 45)),
    displayZenDate: (state) => {
      return state.dayNames[(state.dayNum) % 5]+" "+
        String(state.dayNum + 1)+" "+
        String(state.habitNames[state.habitNum])+" "+
        String(Number(state.forma.slice(-4)) + 10000)
    },
    displayZenTime: (state) => {
      return String(state.zsessionNames.filter((all, id) => id == state.zsess).pop())+
        " "+
        String(state.zsess + 1)+
        "."+
        String(state.zmoment).padStart(2, "0")+
        "`"+
        String(state.instant)+
        " "
    }
  },
  actions: {
    setDayOfYear(day: number) {
      this.dayOfYear = day
    },
    setHabitNum(habit: number) {
      this.habitNum = habit
    },
    setDayNum(day: number) {
      this.dayNum = day
    },
  },
})
