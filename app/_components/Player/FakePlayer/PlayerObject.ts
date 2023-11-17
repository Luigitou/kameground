export default class PlayerObject {
  url: string;
  width: string;
  top: string;
  left: string;

  constructor(url: string, width: string, top: string, left: string) {
    this.url = url;
    this.width = width;
    this.top = top;
    this.left = left;
  }

  getUrl() {
    return this.url;
  }

  getWidth() {
    return this.width;
  }

  getTop() {
    return this.top;
  }

  getLeft() {
    return this.left;
  }
}
