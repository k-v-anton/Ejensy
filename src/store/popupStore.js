import { makeAutoObservable } from 'mobx'

class PopupFormState {
  state = false
  title = 'test title'
  text = 'test text'
  constructor() {
    makeAutoObservable(this)
  }

  open(newTitlt, newText) {
    this.title = newTitlt
    this.text = newText
    this.state = true
  }

  close() {
    this.state = false
    this.title = ''
    this.text = ''
  }

  changeTitle(newTitlt) {
    this.title = newTitlt
    this.state = true
  }

  changeText(newText) {
    this.text = newText
    this.state = true
  }
}

export const popupFormState = new PopupFormState()
