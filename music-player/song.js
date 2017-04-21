// var atTheDriveIn = new Artist({
//   name: "At The Drive-In",
//   bandMembers: ["Cedric Bixler-Zavala", "Omar Rodriguez-Lopez"],
//   genre: "Alternative"
// })
//
// var acarsenal = new Album({
//   title: "Acarsenal"
// })
//
// var oneArmedScissor = new Song({
//   title: "One Armed Scissor",
//   length: 390,
//   // album: acarsenal,
//   artist: atTheDriveIn,
//   // track_no:
// })
//
// acarsenal.addSong(oneArmedScissor)

export default class Song {
  constructor(options = {}) {
    this.title = 'default'
    this.length = '3:00'
    this.album = album
    this.artist = artist
    this.track_no = 1
  }

  play() {

  }

  pause() {

  }
}
