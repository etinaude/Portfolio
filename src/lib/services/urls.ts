export class urls {
  public static noProps = `https://res.cloudinary.com/etienne-naude/image/upload/`;
  public static base = `https://res.cloudinary.com/etienne-naude/image/upload/c_fill,q_100,w_400,h_400`;
  public static baseVideo = `https://res.cloudinary.com/etienne-naude/video/upload/c_fill,ac_none,q_100,w_400,h_400`;

  public static preLoadBase = `https://res.cloudinary.com/etienne-naude/image/upload/c_fill,q_100,w_100,h_100`;
  public static preLoadVideoBase = `https://res.cloudinary.com/etienne-naude/video/upload/c_fill,ac_none,q_100,w_100,1_400`;

  public static getHighResUrl(): string {
    return `https://res.cloudinary.com/etienne-naude/image/upload/c_fill,q_100,w_${window.innerHeight},h_${window.innerHeight}`;
  }

  public static getHighResVideoUrl(): string {
    return `https://res.cloudinary.com/etienne-naude/video/upload/c_fill,ac_none,q_100,w_${window.innerHeight},h_${window.innerHeight}`;
  }
}
