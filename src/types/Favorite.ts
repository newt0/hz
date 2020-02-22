import firebase from '~/plugins/firebase'

export interface IFavorite {
  favoriteVideoId: string
  favoriteVideoTitle: string
  createdAt: firebase.firestore.Timestamp
  updatedAt: firebase.firestore.Timestamp
}

export class Favorite implements IFavorite {
  favoriteVideoId: string = ''
  favoriteVideoTitle: string = ''
  createdAt: firebase.firestore.Timestamp
  updatedAt: firebase.firestore.Timestamp

  constructor(favoriteData: {
    favoriteVideoId: string
    favoriteVideoTitle: string
    createdAt: firebase.firestore.Timestamp
    updatedAt: firebase.firestore.Timestamp
  }) {
    this.favoriteVideoId = favoriteData.favoriteVideoId
    this.favoriteVideoTitle = favoriteData.favoriteVideoTitle
    this.createdAt = favoriteData.createdAt
    this.updatedAt = favoriteData.updatedAt
  }
}
