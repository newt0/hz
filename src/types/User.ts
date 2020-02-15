import firebase from '~/plugins/firebase'

export interface IUser {
  userDisplayName: string
  createdAt: firebase.firestore.Timestamp
  updatedAt: firebase.firestore.Timestamp
}

export class User implements IUser {
  userDisplayName: string = ''
  createdAt: firebase.firestore.Timestamp = new firebase.firestore.Timestamp(0, 0)
  updatedAt: firebase.firestore.Timestamp = new firebase.firestore.Timestamp(0, 0)

  constructor(userData: { userDisplayName: string; createdAt: firebase.firestore.Timestamp; updatedAt: firebase.firestore.Timestamp }) {
    this.userDisplayName = userData.userDisplayName
    this.createdAt = userData.createdAt
    this.updatedAt = userData.updatedAt
  }
}
