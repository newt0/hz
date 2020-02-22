import firebase from '~/plugins/firebase'

export interface IFavorite {
  favoriteVideoId: string
  createdAt: firebase.firestore.Timestamp
  updatedAt: firebase.firestore.Timestamp
}

export class Favorite implements IFavorite {
  favoriteVideoId: string = ''
  createdAt: firebase.firestore.Timestamp
  updatedAt: firebase.firestore.Timestamp

  constructor(favoriteData: { favoriteVideoId: string; createdAt: firebase.firestore.Timestamp; updatedAt: firebase.firestore.Timestamp }) {
    this.favoriteVideoId = favoriteData.favoriteVideoId
    this.createdAt = favoriteData.createdAt
    this.updatedAt = favoriteData.updatedAt
  }
}
